import { SitemapStream } from 'sitemap'
import { createWriteStream } from 'fs'
import { resolve } from 'path'
const categories = require('./data');

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://clapier-lapin.pro' });

  // Add static pages
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  sitemap.write({ url: '/mentions-legales', changefreq: 'monthly', priority: 0.5 });
  sitemap.write({ url: '/a-propos-de-clapier-lapin', changefreq: 'monthly', priority: 0.5 });

  // Add dynamic category pages
  categories.forEach(category => {
    sitemap.write({ url: `/${category.id}`, changefreq: 'weekly', priority: 0.8 });

    // Add dynamic product pages
    category.products.forEach(product => {
      sitemap.write({ url: product.url, changefreq: 'weekly', priority: 0.7 });
    });
  });

  sitemap.end();

  const sitemapPath = resolve(__dirname, 'public/sitemap.xml');
  const writeStream = createWriteStream(sitemapPath);

  sitemap.pipe(writeStream).on('finish', () => {
    console.log('Sitemap generated at', sitemapPath);
  }).on('error', (err) => {
    console.error('Error generating sitemap:', err);
  });
}

generateSitemap();