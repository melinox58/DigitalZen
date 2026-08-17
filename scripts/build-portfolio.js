import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const PORTFOLIO_DIR = path.resolve('content/portfolio');
const OUTPUT_DATA_PATH = path.resolve('src/data/projects.json');
const SITEMAP_PATH = path.resolve('public/sitemap.xml');
const ROBOTS_PATH = path.resolve('public/robots.txt');
const SITE_URL = 'https://digitalzen.fr';

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

function normalizeCategory(catStr = '') {
  const normalized = catStr.toLowerCase().trim();
  if (normalized === 'web' || normalized === 'sites-web' || normalized === 'sites web') {
    return { category: 'sites-web', categoryTag: 'SITES WEB' };
  }
  if (normalized === 'dessins' || normalized === 'dessin') {
    return { category: 'dessin', categoryTag: 'DESSINS' };
  }
  if (normalized === 'plv') {
    return { category: 'plv', categoryTag: 'PLV' };
  }
  return { category: normalized || 'autres', categoryTag: (catStr || 'PROJET').toUpperCase() };
}

function getMarkdownFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getMarkdownFiles(filePath));
    } else if (file.endsWith('.md')) {
      results.push(filePath);
    }
  });
  return results;
}

function buildPortfolio() {
  console.log('🎨 Démarrage du build du système de Portfolio Markdown...');

  if (!fs.existsSync(PORTFOLIO_DIR)) {
    fs.mkdirSync(PORTFOLIO_DIR, { recursive: true });
    fs.mkdirSync(path.join(PORTFOLIO_DIR, 'sites-web'), { recursive: true });
    fs.mkdirSync(path.join(PORTFOLIO_DIR, 'dessin'), { recursive: true });
    fs.mkdirSync(path.join(PORTFOLIO_DIR, 'plv'), { recursive: true });
  }

  const files = getMarkdownFiles(PORTFOLIO_DIR);
  const projects = [];

  for (const filePath of files) {
    const rawContent = fs.readFileSync(filePath, 'utf-8');
    let { data, content } = matter(rawContent);

    // Si la date est absente, générer la date du jour et la réécrire dans le fichier .md
    if (!data.date) {
      const today = new Date().toISOString().split('T')[0];
      data.date = today;
      const updatedMarkdown = matter.stringify(content, data);
      fs.writeFileSync(filePath, updatedMarkdown, 'utf-8');
      console.log(`📝 Date auto-générée (${today}) fixée dans le Front Matter de ${path.basename(filePath)}`);
    }

    const title = data.title || 'Sans titre';
    const slug = data.slug || slugify(title);
    const date = data.date;
    const { category, categoryTag } = normalizeCategory(data.category || path.basename(path.dirname(filePath)));
    const htmlContent = marked.parse(content || '');

    const cover = data.cover || 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfV_HLAAcppkEeMt9MSqvSkrYrCIAIldw3DtrsGsx_Mn_dJMcUDjliP72TVP96036mjUl-X_FRkgJjtqvJf-9DkLsftq8iqAVNRkDxQh9zjgWFssF6HvzEaaK20R-lCbqZQU7uvPAYWhtM6-Oed7Zjuuc9ixrFekLx0hbv6t3iCg8adHT330Iq64-aAjMQJC67Oe_Ni32i7fpfFro_Q_vwdmxVd5629uh6ofb60qEW2EKTg7TZdIhxAg';
    const images = Array.isArray(data.images) && data.images.length > 0 ? data.images : [cover];

    projects.push({
      slug,
      title,
      category,
      categoryTag,
      client: data.client || null,
      date,
      dateIso: new Date(date).toISOString(),
      formattedDate: formatDateFr(date),
      cover,
      images,
      description: data.description || '',
      metaDescription: data.metaDescription || data.description || title,
      tags: Array.isArray(data.tags) ? data.tags : (data.tags ? [data.tags] : [categoryTag]),
      htmlContent
    });
  }

  // Tri du plus récent au plus ancien par date
  projects.sort((a, b) => new Date(b.dateIso).getTime() - new Date(a.dateIso).getTime());

  // Écriture de src/data/projects.json
  const dataDir = path.dirname(OUTPUT_DATA_PATH);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_DATA_PATH, JSON.stringify(projects, null, 2), 'utf-8');
  console.log(`✅ ${projects.length} projets compilés dans src/data/projects.json`);

  // Mise à jour du Sitemap XML avec les projets
  updateSitemapWithProjects(projects);

  console.log('✨ Build du portfolio terminé avec succès !');
}

function updateSitemapWithProjects(projects) {
  if (!fs.existsSync(SITEMAP_PATH)) return;

  const now = new Date().toISOString();
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

  // Lire aussi posts.json s'il existe
  let blogPosts = [];
  const postsJsonPath = path.resolve('src/data/posts.json');
  if (fs.existsSync(postsJsonPath)) {
    try {
      blogPosts = JSON.parse(fs.readFileSync(postsJsonPath, 'utf-8'));
    } catch (e) {}
  }

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
  for (const post of blogPosts) {
    xml += `  <url>\n`;
    xml += `    <loc>${SITE_URL}/blog/${post.slug}</loc>\n`;
    xml += `    <lastmod>${post.updatedDateIso || post.dateIso}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `  </url>\n`;
  }

  // Portfolio projects
  for (const proj of projects) {
    xml += `  <url>\n`;
    xml += `    <loc>${SITE_URL}/portfolio/${proj.slug}</loc>\n`;
    xml += `    <lastmod>${proj.dateIso}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>`;

  fs.writeFileSync(SITEMAP_PATH, xml, 'utf-8');
  console.log(`🗺️ Sitemap.xml mis à jour avec les projets du portfolio (${projects.length} projets).`);
}

buildPortfolio();
