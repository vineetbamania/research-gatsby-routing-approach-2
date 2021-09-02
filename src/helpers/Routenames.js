export const locale = ["en-us", "en-ca", "fr-ca"]
export const routes = [
  {
    key: "index",
    "en-us": "",
    "en-ca": "",
    "fr-ca": "",
    "dynamic-value": false,
  },
  {
    key: "color",
    "en-us": "color",
    "en-ca": "colour",
    "fr-ca": "colueor",
    "dynamic-value": true,
  },
  {
    key: "collections",
    "en-us": "collections",
    "en-ca": "collections",
    "fr-ca": "collections",
    "dynamic-value": true,
  },
  {
    key: "search",
    "en-us": "search",
    "en-ca": "search",
    "fr-ca": "chercher",
    "dynamic-value": true,
  },
  {
    key: "colorwall",
    "en-us": "colorwall",
    "en-ca": "colorwall",
    "fr-ca": "colorwall",
    "dynamic-value": false,
  },
  {
    key: "family",
    "en-us": "family",
    "en-ca": "familie",
    "fr-ca": "families",
    "dynamic-value": false,
  },
]
export const pagePattern = (key, locale, pagename, dynamic) => {
  console.log(pagename)
  return dynamic
    ? {
        match: `/${locale}/${pagename}/:${key}`,
        pattern: `/${locale}/${pagename}/`,
      }
    : {
        match: pagename ? `/${locale}/${pagename}/` : `/${locale}/`,
        pattern: pagename ? `/${locale}/${pagename}/` : `/${locale}/`,
      }
}
