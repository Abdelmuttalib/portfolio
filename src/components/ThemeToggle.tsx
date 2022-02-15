import React from "react"

import { FaSun, FaMoon } from "react-icons/fa"

import { ThemeContext } from "./ThemeContext"

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext)

  return (
    <div className="p-2 rounded-full transition duration-500 ease-in-out">
      {theme === "dark" ? (
        <FaSun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-2xl text-gray-500 cursor-pointer dark:text-gray-400"
        />
      ) : (
        <FaMoon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-2xl text-gray-500 cursor-pointer dark:text-gray-400"
        />
      )}
    </div>
  )
}

export default Toggle
