import React, { useState } from "react";
import { GiAbstract076 } from "react-icons/gi";
import styles from "./../Navbar/Navbar.module.css";
import { IoMenu, IoClose } from "react-icons/io5";
import { useStyles } from "../../contexts/StylesContext";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode"

function NavBar() {
  const [menuOpen, SetMenuOpen] = useState(false);
  const { SetTraslado } = useStyles();

  // Leer token de cookie
  const token = Cookies.get("token"); // Ajusta el nombre de la cookie
  let usernameFromToken = null;

  if (token) {
    try {
      const decoded = jwtDecode(token); // Decodifica sin validar
      usernameFromToken = decoded.username;
    } catch (err) {
      console.error("Error decodificando token:", err);
    }
  }

  const handleMenuToggle = () => {
    SetMenuOpen(!menuOpen);
  };

  const HandleOpenClose = () => {
    SetTraslado(true);
  };

  return (
    <nav>
      {usernameFromToken ? (
        <nav className={styles.navbar}>
          <div className={styles.welcomeUser}>
            <p>Bienvenido  {usernameFromToken}</p>
          </div>
        </nav>
      ) : (
        <nav className={styles.navbar}>
          <GiAbstract076 className={styles.title} />
          <div className={styles.menu}>
            {menuOpen ? (
              <IoClose className={styles.menuBtn} onClick={handleMenuToggle} />
            ) : (
              <IoMenu className={styles.menuBtn} onClick={handleMenuToggle} />
            )}
            <ul
              className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
              onClick={() => {
                SetMenuOpen(false);
              }}
            >
              <li><a href="#home">Inicio</a></li>
              <li><a href="#about">Acerca de</a></li>
              <li><a href="#history">Nuestra historia</a></li>
              <li><a href="#experience">Tecnología</a></li>
              <li><a href="#contact">Contáctanos</a></li>
              <button className={styles.button} onClick={HandleOpenClose}>
                Acceder
              </button>
            </ul>
          </div>
        </nav>
      )}
    </nav>
  );
}

export default NavBar;

