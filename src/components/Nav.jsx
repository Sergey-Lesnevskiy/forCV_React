import {nav} from "../assets/nav.js";
import style from "./nav.module.css";
import { Link, NavLink as NavLinkReactRouter } from 'react-router-dom';
import { useLocation } from 'react-router';

function Nav({light}) {
  const { pathname } = useLocation();
  return (
    <nav>
      <ul className={
        light?
        style.menu
        :
        style.menuDark
        }>
        {nav.map((i, key) => {
          return(<li key={key} className = {pathname === i.href? style['activeNav']:''}>
            <Link to={i.href}>{i.title}</Link>
          </li>);
        })}
      </ul>
    </nav>
  );
}

export default Nav;
