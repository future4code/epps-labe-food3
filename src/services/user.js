import axios from "axios"
import {goToLogin} from '../Routes/Coordinator';
//body = form
export const login = (axiosConfig, clear, history) => {
    const axiosConfig = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }
    axios.post("https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/login", axiosConfig)
    .then((res)=>{
        localStorage.setItem("token", res.data.token) //se tem ou nao um token
        console.log(res.data.message)
        // goToLogin(history)
        clear()
    }).catch((err)=>{ 
        console.log(err.response.data.message)
        alert(err.response.data.message)
    })
  } 
  
//   export const signUp = (body, clear, history) => {
//     axios.post("https://us-central1-missao-newton.cloudfunctions.net/{{appName}}/signup", body)
//     .then((res)=>{
//         console.log(res)
//         localStorage.setItem("token", res.data.token) //se tem ou nao um token
//         console.log('aqui', res.data.message)
//         goToFeed(history)
//         clear()
//     }).catch((err)=>{ 
//         console.log(err.response.data.message)
//         if(err.response.data.message === "Email já cadastrado"){
//             alert('Erro no login')
//             alert('email ja cadastrado')
//         }
//     })
//   } 
