export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: 'https://leadforge-website-inky.vercel.app/sitemap.xml',
  }
}
