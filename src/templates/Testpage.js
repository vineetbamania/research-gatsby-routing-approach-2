import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Testpage = props => {
  const { pageContext, params } = props
  const { locale, key, title } = pageContext
  return (
    <Layout>
      <Seo title={`${title.toUpperCase()}`} />
      <h1>
        hello {key} page with {locale} language and{" "}
        {params[key]
          ? `query number ${params[key] && params[key]}`
          : "this is a page without dynamic value"}
      </h1>
    </Layout>
  )
}

export default Testpage
