import React from "react"

import MoonIcon from "../../public/svgs/MoonIcon.svg"
import SunIcon from "../../public/svgs/SunIcon.svg"
import { ThemeContext } from "./ThemeContext"

const ThemeToggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext)
  const [renderDarkTheme, setRenderDarkTheme] = React.useState<boolean>(false)

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  React.useEffect(() => {
    setRenderDarkTheme(true)
  }, [])

  return (
    <div className="cursor-pointer ease-in-out duration-300">
      {theme === "light" && renderDarkTheme ? (
        <MoonIcon
          className="w-5 h-5 md:w-6 md:h-6 text-primary"
          onClick={toggleTheme}
        />
      ) : (
        <SunIcon
          className="w-5 h-5 md:w-6 md:h-6 text-primary-200"
          onClick={toggleTheme}
        />
      )}
    </div>
  )
}

export default ThemeToggle
