import { useState } from "react"
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function Cadastro() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('', {name,email,password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

    return ( 
        <>
           <div className="flex justify-center bg-login-img bg-cover bg-center p-52">
           <div className="bg-Verde flex flex-col items-center w-8/12 h-96 justify-center">
            <p className="text-2xl font-bold">Cadastrar-se</p>
            <div className='flex flex-col'>
                <form onSubmit={handleSubmit}>
                    <input className="bg-Cinza w-96 h-10 m-2 placeholder:pl-2" placeholder="Nome" type="text" onChange={(e) = setName(e.target.value)}/>
                    <input className="bg-Cinza w-96 h-10 m-2 placeholder:pl-2" placeholder="Email" type="email" onChange={(e) = setEmail(e.target.value)}/>
                    <input className="bg-Cinza w-96 h-10 m-2 placeholder:pl-2" placeholder="Senha" type="password" onChange={(e) = setPassword(e.target.value)}/>
                </form>
                <button className="bg-Laranja w-16 p-2 m-2" type="submit">Register</button>
            </div>
  
           </div>
           </div>
        </>

     );
}