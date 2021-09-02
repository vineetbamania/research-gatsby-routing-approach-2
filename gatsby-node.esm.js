const { routes } = require("./src/helpers/Routenames")
const { locale } = require("./src/helpers/Routenames")
const { pagePattern } = require("./src/helpers/Routenames")
const axios = require("axios")
const crypto = require("crypto")

const POST_NODE_TYPE = `Colors`

// dynamic page creation using createpages api
exports.createPages = async ({ actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({
    fromPath: `/`,
    toPath: `/en-us`,
    isPermanent: true,
    redirectInBrowser: true,
  })
  locale.map(locale => {
    routes.map(pagename => {
      const pattern = pagePattern(
        pagename.key,
        locale,
        pagename[locale],
        pagename["dynamic-value"]
      )
      createPage({
        path: pattern.pattern,
        matchPath: pattern.match,
        component: require.resolve("./src/templates/Testpage.js"),
        context: {
          locale: locale,
          key: pagename.key,
          title: pagename[locale],
        },
      })
    })
  })
}
// source node creation using sourceNodes api
exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions

  // source nodes for color data
  let count = 0
  let total = 4186

  for (count = 0; count < total; count += 100) {
    const { data } = await axios.get(
      "https://api-dev-az.benjaminmoore.io/colors/colors",
      {
        headers: {
          "Ocp-Apim-Subscription-Key": "b01dabb7515e40e69fced3df99c08718",
        },
        params: {
          options: "harmony,shades,equivalent,similar,palettes,tags",
          version: process.env.COLOR_API_VERSION || "v1.0", //* should come from env
          locale: "en-us",
          offset: count - 100 < 0 ? 0 : count - 100,
          limit: 100,
        },
      }
    )
    const colors = data.colors
    // loop through data and create Gatsby nodes
    color.forEach(item => {
      return createNode({
        ...item,
        id: createNodeId(`${item.number}`),
        parent: null,
        children: [],
        internal: {
          type: POST_NODE_TYPE,
          content: JSON.stringify(item),
          contentDigest: createContentDigest(item),
        },
      })
    })
  }
  return
}
