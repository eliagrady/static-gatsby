const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Elia/Dev/gatsby/eliagrady/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/Elia/Dev/gatsby/eliagrady/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Elia/Dev/gatsby/eliagrady/src/pages/index.js"))),
  "component---src-pages-my-files-js": hot(preferDefault(require("/Users/Elia/Dev/gatsby/eliagrady/src/pages/my-files.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/Elia/Dev/gatsby/eliagrady/src/templates/blog-post.js")))
}

