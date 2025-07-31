import React from 'react'

function NavButton({aClass, liClass, content}) {
  return (
    <li className={liClass}>
        <a className={aClass} >{content}</a>
    </li>
  )
}

export default NavButton