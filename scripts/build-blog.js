import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const POSTS_DIR = path.resolve('content/posts');
const OUTPUT_DATA_PATH = path.resolve('src/data/posts.json');
const SITEMAP_PATH = path.resolve('public/sitemap.xml');
const ROBOTS_PATH = path.resolve('public/robots.txt');
const SITE_URL = 'https://digitalzen.fr'; // URL canonique de base

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

function formatDateFr(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

function buildBlog() {
  console.log('🚀 Démarrage du build du système de blog Markdown...');

  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
  }

  const files = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.md'));
  const posts = [];

  for (const file of files) {
    const filePath = path.join(POSTS_DIR, file);
    const rawContent = fs.readFileSync(filePath, 'utf-8');
    let { data, content } = matter(rawContent);

    // 1. Si la date est absente, générer la date du jour et la réécrire dans le fichier .md
    if (!data.date) {
      const today = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"
      data.date = today;
      const updatedMarkdown = matter.stringify(content, data);
      fs.writeFileSync(filePath, updatedMarkdown, 'utf-8');
      console.log(`📝 Date auto-générée (${today}) fixée dans le Front Matter de ${file}`);
    }

    const title = data.title || 'Sans titre';
    const slug = data.slug || slugify(title);
    const date = data.date;
    const updatedDate = data.updatedDate || null;
    const effectiveDate = updatedDate || date;
    const htmlContent = marked.parse(content || '');

    posts.push({
      slug,
      title,
      metaDescription: data.metaDescription || data.excerpt || title,
      date,
      dateIso: new Date(date).toISOString(),
      formattedDate: formatDateFr(date),
      updatedDate,
      updatedDateIso: updatedDate ? new Date(updatedDate).toISOString() : null,
      formattedUpdatedDate: updatedDate ? formatDateFr(updatedDate) : null,
      effectiveDateIso: new Date(effectiveDate).toISOString(),
      author: data.author || 'Digital Zen',
      tags: Array.isArray(data.tags) ? data.tags : (data.tags ? [data.tags] : ['Article']),
      category: Array.isArray(data.tags) && data.tags.length > 0 ? data.tags[0] : (data.category || 'Article'),
      excerpt: data.excerpt || '',
      cover: data.cover || 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRIUsUzOVcygJHhzfGD-k_RVLjJ4zXwOdU4t2JUQYebJyuUdj0q7Wkcuvlld9b3qpKbVChO711vgdQGALB_4vnYKLCTnuheLdPLLPjqNPlHDOG-ZIXBAauJ3yVvkLQ1yt5vnHQ_ABsvLlj-y1YhegmmyB64ljJwLikQ2EHFpn609sUN8pZz8sVHwhrN8Z---4KEPZe-z4uko0zrkLKyGPpSEaxrBk5w0nGT7LdLN5wtKfCTUq3lIbSyw',
      htmlContent
    });
  }

  // 2. Tri chronologique sur la date effective (updatedDate || date), la plus récente en premier
  posts.sort((a, b) => new Date(b.effectiveDateIso).getTime() - new Date(a.effectiveDateIso).getTime());

  // 3. Assurer la création de src/data et écrire posts.json
  const dataDir = path.dirname(OUTPUT_DATA_PATH);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_DATA_PATH, JSON.stringify(posts, null, 2), 'utf-8');
  console.log(`✅ ${posts.length} articles compilés dans src/data/posts.json`);

  // 4. Génération du Sitemap XML
  generateSitemap(posts);

  // 5. Génération / Vérification de robots.txt
  generateRobots();

  console.log('✨ Build du blog terminé avec succès !');
}

function generateSitemap(posts) {
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const staticPages = [
    '',
    '/services',
    '/parcours',
    '/a-propos',
    '/experiences',
    '/portfolio',
    '/contact',
    '/blog'
  ];

  const now = new Date().toISOString();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Static pages
  for (const page of staticPages) {
    xml += `  <url>\n`;
    xml += `    <loc>${SITE_URL}${page}</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>${page === '' ? '1.0' : '0.8'}</priority>\n`;
    xml += `  </url>\n`;
  }

  // Blog posts (<lastmod> utilise updatedDateIso s'il existe, sinon dateIso)
  for (const post of posts) {
    xml += `  <url>\n`;
    xml += `    <loc>${SITE_URL}/blog/${post.slug}</loc>\n`;
    xml += `    <lastmod>${post.updatedDateIso || post.dateIso}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>`;

  fs.writeFileSync(SITEMAP_PATH, xml, 'utf-8');
  console.log(`🗺️ Sitemap.xml généré avec ${staticPages.length + posts.length} URLs.`);
}

function generateRobots() {
  const robotsContent = `# http://www.robotstxt.org/
User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
  fs.writeFileSync(ROBOTS_PATH, robotsContent, 'utf-8');
  console.log('🤖 Robots.txt mis à jour.');
}

buildBlog();
