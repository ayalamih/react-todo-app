import React, { useState } from "react"
import { NavLink } from "react-router-dom"

import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

const links = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
]


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    // setNavbarOpen(prev => !prev)
    setNavbarOpen(!navbarOpen) // 但是如果状态依赖于前一个，我们不应该使用这种方法。请记住，我们正在切换按钮文本。这取决于状态变量的布尔值（true或false）。
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
    <nav className="navBar">
      <button onClick={handleToggle}>{navbarOpen ? (
        <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
      ) : (
        <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
      )}
      </button>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
      {links.map(link => {
        return (
          <li key={link.id}>
            <NavLink 
              to={link.path} 
              className="active-link" 
              onClick={() => closeMenu()}
              >
              {link.text}
            </NavLink>
          </li>
        )
      })}
    </ul>
    </nav>
  )
}
export default Navbar