import {useEffect} from "react";
import {useForm} from "react-hook-form"
import { Link } from "react-router-dom";
import styles from "../Access/Access.module.css"
import { IoMdClose } from "react-icons/io";
import { useStyles } from "../../contexts/StylesContext";
import {useAuthContext} from "../../contexts/AuthContext"
import {useNavigate} from "react-router-dom"



function AccessPage(){

const {register:registerLogin,handleSubmit:handleSubmitLogin} = useForm();
const {register,handleSubmit} = useForm();
const {ContRes,setContRes,traslado,SetTraslado} = useStyles()
const {singUp,singIn,errors,SetErrors, isAutenticated} = useAuthContext();
const navigate = useNavigate();


useEffect(()=>{
    if(isAutenticated)navigate("/usersMenu")
},[isAutenticated])



const handleAcces = () =>{ 
    setContRes(!ContRes)
    SetErrors([])
   }

   const HandleOpenClose =()=>{
    SetTraslado(false)
    SetErrors([])
  }

  const onSubmit = handleSubmitLogin((values)=>{
    console.log(values)
    singIn(values)

  })

  const onSubmitRegister = handleSubmit((values)=>{
    console.log(values)
       singUp(values)
  })

  
 const errorsStyles = {}

    return(
       <>
       <div className={`${styles.formPopup} ${ContRes ? styles.active : ""} ${traslado ? styles.activePopup:""} ${errors.length>0 ? styles.stylesErrors : ""} `}>
       <IoMdClose  className={styles.IconClose} onClick={HandleOpenClose}/>
       <div className={styles.formBoxLogin}>
       <h2>Login</h2>
        <form onSubmit={onSubmit}>
            <div className={styles.inputField}>
                <input type="text"
                {...registerLogin("usuario",{required:true})}
                placeholder=""
                />
                <label>Usuario</label>
            </div>

            <div className={styles.inputField}>
                <input type="password"
                {...registerLogin("contraseña",{required:true})}
                placeholder=""
                />
                <label>Contraseña</label>
            </div>
            <div className={styles.content}>
             <div className={styles.contentCheck}>
             <input type="checkbox"
            {...register("checkbox",{required:true})}
             />
            <label>recordar credenciales</label>
             </div>
            </div>
            <Link  className={styles.forgotPassword}>¿Olvido su contraseña?</Link>
            <button className={styles.button}>iniciar sesión</button>
        </form>
        <div className={styles.linkRes}>
           ¿Aun no te encuentras Registrado?
            <Link onClick={handleAcces}>Crear cuenta</Link>
        </div>
       </div>
         <div className={styles.formBoxRegister}>
            <h2>Register</h2>
            <form onSubmit={onSubmitRegister}> 


             <div className={styles.inputField}>
                <input type="text"
                {...register("identificacion",{required:true})}
                placeholder=""
                />
                <label>cedula</label>
            </div>



            <div className={styles.inputField}>
                <input type="text"
                {...register("usuario",{required:true})}
                placeholder=""
                />
                <label>usuario</label>
            </div>

            <div className={styles.inputField}>
                <input type="password"
                {...register("contraseña",{required:true})}
                placeholder=""
                />
                <label>Contraseña</label>
            </div> 

            <div className={styles.inputField}>
                <input type="text"
                {...register("nombres",{required:true})}
                placeholder=""
                />
                <label>nombres</label>
            </div> 

               <div className={styles.inputField}>
                <input type="text"
                {...register("apellidos",{required:true})}
                placeholder=""
                />
                <label>apellidos</label>
            </div> 

            <div className={styles.inputField}>
                <input type="text"
                {...register("edad",{required:true})}
                placeholder=""
                />
                <label>edad</label>
            </div> 

            <div className={styles.inputField}>
                <input type="email"
                {...register("email",{required:true})}
                placeholder=""
                />
                <label>email</label>
            </div> 


                   <div className={styles.inputField}>
                <input type="text"
                {...register("celular",{required:true})}
                placeholder=""
                />
                <label>telefono</label>
            </div> 



            
            <div className={styles.inputField}>
                <input type="text"
                {...register("cargo",{required:true})}
                placeholder=""
                />
                <label>cargo</label>
            </div>     

                <div className={styles.inputField}>
                <input type="text"
                {...register("rol",{required:true})}
                placeholder=""
                />
                <label>rol</label>
            </div>     



            <div className={styles.contentCheck}>
             <input type="checkbox"
            {...register("checkbox")}
             />
            <label>Aceptar<Link className={styles.conditions}>terminos y Condiciones</Link></label>
             </div>
            <button className={styles.button}>Crear cuenta</button>
        </form>
        <div className={styles.linkRes}>
        ¿Ya se encuentra registrado?
            <Link onClick={handleAcces}>Iniciar sesion</Link>
        </div>
         </div>
       </div>
       </>
    )
}


export default AccessPage;