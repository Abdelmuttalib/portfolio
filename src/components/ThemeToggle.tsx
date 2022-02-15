import React from "react"

import MoonIcon from "../../public/svgs/MoonIcon.svg"
import SunIcon from "../../public/svgs/SunIcon.svg"
import { ThemeContext } from "./ThemeContext"

const ThemeToggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="cursor-pointer ease-in-out duration-300">
      {theme === "light" ? (
        <SunIcon className="w-6 h-6 text-primary" onClick={toggleTheme} />
      ) : (
        <MoonIcon className="w-6 h-6 text-primary-200" onClick={toggleTheme} />
      )}
    </div>
  )
}

export default ThemeToggle
