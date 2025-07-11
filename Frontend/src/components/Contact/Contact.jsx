import { BiLogoGmail } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styles from "../Contact/Contact.module.css"
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useEffect } from "react";


function ContactPage(){

  const navigate = useNavigate();
  const {isAutenticated} = useAuthContext();


useEffect(()=>{
  if(isAutenticated)navigate("/usersMenu")
},[isAutenticated])

    return(
        <>
     <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contactanos</h2>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
        <BiLogoGmail />
        <Link to="mailto:cristian3410st@gmail.com">email</Link>
        </li>

        <li className={styles.link}>
        <IoLogoWhatsapp />
        <Link to="https://wa.me/3058929333">whatsapp</Link>
        </li>

        <li className={styles.link}>
        <FaInstagram />
        <Link to="https://www.instagram.com/cristian.0090/">instagram</Link>
        </li>

        <li className={styles.link}>
        <FaGithub />
        <Link to="https://github.com/Cristian3410st">github</Link>
        </li>

        <li className={styles.link}>
        <FaLinkedin />
        <Link to="https://www.linkedin.com/in/cristian-felipe-talero-sanchez-5b96761b5/">linkedin</Link>
        </li>
      </ul>
     </footer>
     </>
    )
}


export default ContactPage;