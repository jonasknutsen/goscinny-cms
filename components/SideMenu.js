import React from 'react'
import Link from 'next/link'

class SideMenu extends React.Component {
  render = () => {
    return (
      <nav>
        <ul>
          <li><Link href='/posts'><a>Posts</a></Link></li>
          <li><Link href='/characters'><a>Comics</a></Link></li>
        </ul>
        <style jsx>{`
          nav {
            padding: 1rem;
          }
          .media-link {
            padding-top: 1rem;
          }
      `}</style>
      </nav>
    )
  }
}

export default SideMenu