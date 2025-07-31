import React from 'react'
import { Link } from 'react-router'

function NavButton({aClass, liClass, content, path}) {
  return (
    <li className={liClass}>
        <Link className={aClass} to={path}>{content}</Link>
    </li>
  )
}

export default NavButton