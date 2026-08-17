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
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formatted = date.toLocaleDateString('fr-FR', options);
  // Capitalize month
  return formatted.replace(/([a-zà-ÿ]+)/gi, (match, month) => {
    return match.charAt(0).toUpperCase() + match.slice(1);
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
    const { data, content } = matter(rawContent);

    const title = data.title || 'Sans titre';
    const slug = data.slug || slugify(title);
    const date = data.date || new Date().toISOString().split('T')[0];
    const htmlContent = marked.parse(content || '');

    posts.push({
      slug,
      title,
      metaDescription: data.metaDescription || data.excerpt || title,
      date,
      dateIso: new Date(date).toISOString(),
      formattedDate: formatDateFr(date),
      author: data.author || 'Digital Zen',
      tags: Array.isArray(data.tags) ? data.tags : (data.tags ? [data.tags] : ['Article']),
      category: Array.isArray(data.tags) && data.tags.length > 0 ? data.tags[0] : (data.category || 'Article'),
      excerpt: data.excerpt || '',
      cover: data.cover || 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRIUsUzOVcygJHhzfGD-k_RVLjJ4zXwOdU4t2JUQYebJyuUdj0q7Wkcuvlld9b3qpKbVChO711vgdQGALB_4vnYKLCTnuheLdPLLPjqNPlHDOG-ZIXBAauJ3yVvkLQ1yt5vnHQ_ABsvLlj-y1YhegmmyB64ljJwLikQ2EHFpn609sUN8pZz8sVHwhrN8Z---4KEPZe-z4uko0zrkLKyGPpSEaxrBk5w0nGT7LdLN5wtKfCTUq3lIbSyw',
      htmlContent
    });
  }

  // Trier du plus récent au plus ancien
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Assurer la création de src/data
  const dataDir = path.dirname(OUTPUT_DATA_PATH);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // Écrire src/data/posts.json
  fs.writeFileSync(OUTPUT_DATA_PATH, JSON.stringify(posts, null, 2), 'utf-8');
  console.log(`✅ ${posts.length} articles compilés dans src/data/posts.json`);

  // Génération du Sitemap XML
  generateSitemap(posts);

  // Génération / Vérification de robots.txt
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

  // Blog posts
  for (const post of posts) {
    xml += `  <url>\n`;
    xml += `    <loc>${SITE_URL}/blog/${post.slug}</loc>\n`;
    xml += `    <lastmod>${post.dateIso}</lastmod>\n`;
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
