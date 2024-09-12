import { NavLink } from "react-router-dom";
import ProfilePicture from "../../assets/profile_picture.jpg";
import ThemeSwitch from "./ThemeSwitch";
import { useUserContext } from "../../contexts/UserContext";

type HeaderProps = {
    headerLogo: string;
}

export default function Header({headerLogo} : HeaderProps) {
    const {user} = useUserContext();

  return (
    <nav className="header-nav">
        <div className="header-logo-picture-wrapper">
            <NavLink to="">
                <img src={headerLogo} alt="profile-picture" className="header-logo-picture"/>
            </NavLink>
        </div>
        <ThemeSwitch />
        <div className="header-profile-picture-wrapper">
            <NavLink to="login">
                <img src={user.profilePicture || ProfilePicture} alt="profile-picture" className="header-profile-picture"/>
            </NavLink>
        </div>
    </nav>
  )
}
