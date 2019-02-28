const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Artisan Consulting', // Navigation and Site Title
  siteTitleAlt: 'Artisan', // Alternative Site title for SEO
  siteTitleShort: 'Artisan', // short_name for manifest
  siteHeadline: 'Artisan Consulting // Management and Engineering Consulting', // Headline for schema.org JSONLD
  siteUrl: 'https://artisan.consulting', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Artisan Consulting // Management and Engineering Consulting Services',
  author: 'Adam Parrish', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@artisanmanagement', // Twitter Username
  ogSiteName: 'ArtisanManagement', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-135371692-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
