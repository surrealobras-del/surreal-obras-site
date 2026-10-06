import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const token = '%%SITE%%';

function siteUrl() {
  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/$/, '');
  const host = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (host) return `https://${host.replace(/^https?:\/\//, '').replace(/\/$/, '')}`;
  return 'http://127.0.0.1:4173';
}

const site = siteUrl();
if (/^https?:\/\/(127\.0\.0\.1|localhost)(:|\/|$)/.test(site)) {
  console.log('SEO: publique na Vercel ou defina SITE_URL para gerar o endereço canônico, o sitemap e o robots.txt.');
  process.exit(0);
}
const code = (process.env.GOOGLE_SITE_VERIFICATION || '').trim();
const verification = /^[A-Za-z0-9_-]+$/.test(code) ? code : '';
const preview = process.env.VERCEL_ENV === 'preview';

for (const name of fs.readdirSync(root).filter((file) => file.endsWith('.html'))) {
  const file = path.join(root, name);
  let html = fs.readFileSync(file, 'utf8').replaceAll(token, site);
  html = verification
    ? html.replaceAll('%%GOOGLE_VERIFICATION%%', verification)
    : html.replaceAll('<meta name="google-site-verification" content="%%GOOGLE_VERIFICATION%%">', '');
  if (preview) {
    html = html
      .replaceAll('content="index, follow, max-image-preview:large"', 'content="noindex, nofollow"')
      .replaceAll('content="index, follow"', 'content="noindex, nofollow"');
  }
  fs.writeFileSync(file, html);
}

const pages = [
  ['/', '1.0'],
  ['/termos', '0.3'],
  ['/privacidade', '0.3']
];
const today = new Date().toISOString().slice(0, 10);
const urls = pages.map(([loc, priority]) => `  <url><loc>${site}${loc}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>${priority}</priority></url>`).join('\n');
fs.writeFileSync(path.join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`);
fs.writeFileSync(path.join(root, 'robots.txt'), `User-agent: *
Allow: /

Sitemap: ${site}/sitemap.xml
`);
console.log(`SEO publicado para ${site}`);
