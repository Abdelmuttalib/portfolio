import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      type="button"
      // variant='outline'
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="hidden sm:block"
    >
      {theme === "dark" ? (
        <SunIcon className="w-7" />
      ) : (
        <MoonIcon className="w-7 p-0.5" />
      )}
    </button>
  );
}
