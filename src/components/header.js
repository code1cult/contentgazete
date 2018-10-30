import React from 'react'
import { Link } from 'gatsby'
import AdSense from 'react-adsense'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

 

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
  <OutboundLink
      href="https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/"
    >
      Visit the Google Analytics plugin page!
    </OutboundLink>
 <AdSense.Google
          client="ca-pub-5067029621778249"
          slot="5153910610"
          format="auto"
        />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
