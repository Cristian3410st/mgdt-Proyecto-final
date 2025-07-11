import { createContext,useState,useContext,useEffect } from "react";
import {registerPost,loginPost,verifyTokenRequest} from "../api/auth.js"
import {horaDeEntradaFechaPost} from "../api/task.js"
import Cookies from "js-cookie"


export const AuthContext = createContext();


export const useAuthContext = () => {

    const context = useContext(AuthContext);
    if(!context){
        throw new Error("el useAuthContext deberia estar dentro de un AuthProvider");
    }
    return context;
} 


export const AuthProvider =({children})=>{

   const[user,setUser]=useState(null);
   const[errors,SetErrors]=useState([]);
   const[isAutenticated,setIsAutenticated]=useState(false)








   useEffect(()=>{
    if(errors.length>0)
    {const timer = setTimeout(()=>{
      SetErrors([])
    },10000)}
   },[errors])


   const singUp = async (values) => {
      try{
        const {data,status} = await registerPost(values);
        if(status === 200){
             setUser(data)
             setIsAutenticated(true)
        }else{
            setUser(null)
            SetErrors(data)
            setIsAutenticated(false)
        }

      }catch(error){
       console.log("error en la solicitud", error)
      }
   }


   const singIn = async(values) =>{

    try{
    const {data,status} = await loginPost(values)
    if(status === 200){
        setUser(data)

        setIsAutenticated(true)
    }else{
        setUser(null)
        SetErrors(data)
        setIsAutenticated(false)
    }
   }catch(error){
    console.error("error en la consulta",error)
   }
   }



   useEffect(()=>{
    async function checkLogin(){
        const cookies = Cookies.get()
        if(!cookies){
            setIsAutenticated(false)
            return setUser(null)
        }
        try{
            const res = await verifyTokenRequest(cookies)
            console.log(res)
            if(res.data === null || res.status === 401){
                setIsAutenticated(false)
                setUser(null)
                return
            }

            setIsAutenticated(true)
            setUser(res.data)
        }catch(error){
            console.log(error)
            setIsAutenticated(false)
            setUser(null)

        }
    }
    checkLogin()
   },[])





    return(
       <AuthContext.Provider value={{
          singUp,
          singIn,
          errors,
          SetErrors,
          isAutenticated

       }}>
        {children}
       </AuthContext.Provider>
    )
}


