import { useThemeContext } from "../../contexts/ThemeContext"

export default function ThemeSwitch() {
    const {theme, setTheme} = useThemeContext();
    const isLightTheme = theme === "light";

    function onThemeCheckboxChange() {
        if(isLightTheme) setTheme("dark");
        else setTheme("light");
    }

  return (
    <div className='theme-switch-container'>
      <label htmlFor="theme-checkbox" className="theme-checkbox-label">{isLightTheme ? "Dark mode" : "Light mode"}</label>
      <input type="checkbox" className="theme-checkbox" id="theme-checkbox" checked={isLightTheme ? true : false} onChange={onThemeCheckboxChange}/>
    </div>
  )
}
