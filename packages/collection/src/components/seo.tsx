import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }: { description: string, lang: string, meta: any[], title: string }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={ site.siteMetadata.title }
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'google-site-verification',
          content: 'PHc2RN1kqWrlcCNtsmrI53TDAeZ72egGJbL2xhMl_vc',
        },
      ]}
      titleTemplate={`${ site.siteMetadata.title }`}
      defaultTitle={ site.siteMetadata.title }
    >
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600&display=swap" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: '',
}

export default SEO
