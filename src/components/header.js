import React from 'react'
import { Link } from 'gatsby'
import AdSense from 'react-adsense'
import { YMInitializer } from 'react-yandex-metrika';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-128204944-2');
ReactGA.pageview(window.location.pathname + window.location.search);


 

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >

 <YMInitializer accounts={[50936816]} />
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
