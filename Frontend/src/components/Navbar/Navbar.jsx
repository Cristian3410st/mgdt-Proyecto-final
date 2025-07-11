import {React,useState} from "react";
import { GiAbstract076 } from "react-icons/gi";
import styles from "./../Navbar/Navbar.module.css"
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5"; 
import {useStyles} from "../../contexts/StylesContext"

function NavBar(){

  const[menuOpen,SetMenuOpen] = useState(false)
  const{traslado,SetTraslado}= useStyles();


  const handleMenuToggle=()=>{
    SetMenuOpen(!menuOpen)
  }

  const HandleOpenClose =()=>{
    SetTraslado(true) 

  }



  

    return(
        <nav className={styles.navbar}>
          <GiAbstract076 className={styles.title}/>
          <div className={styles.menu}>

           {menuOpen?(
               <IoClose className={styles.menuBtn} onClick={handleMenuToggle}/>
           ):(
              <IoMenu className={styles.menuBtn} onClick={handleMenuToggle}/>
           )}
          <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={()=>{SetMenuOpen(false)}}
          >
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Acerca de</a></li>
            <li><a href="#history">Nuestra historia</a></li>
            <li><a href="#experience">Tecnologia</a></li>
            <li><a href="#contact">Contactanos</a></li>
            <button className={styles.button} onClick={HandleOpenClose}>Acceder</button>
          </ul>
          </div>
        </nav>
    )
}


export default NavBar