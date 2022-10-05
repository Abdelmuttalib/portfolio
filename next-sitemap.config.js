/**
 * @type {import('next-sitemap').IConfig}
 */
module.exports = {
  siteUrl: "https://abdelmuttalib.xyz",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
