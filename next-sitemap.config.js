/**
 * @type {import('next-sitemap').IConfig}
 */
module.exports = {
  /** Without additional '/' on the end, e.g. https://abdelmuttalib.xyz */
  siteUrl: '',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
