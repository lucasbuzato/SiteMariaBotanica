import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

export default function Cadastro() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/cadastro', {name,email,password})
        .then(result => console.log(result))
        navigate('/login')
        .catch(err => console.log(err))
    }

    return ( 
        <>
           <div className="flex justify-center bg-login-img bg-cover bg-center p-52">
           <div className="bg-Verde flex flex-col items-center w-8/12 h-96 justify-center">
            <p className="text-2xl font-bold">Cadastrar-se</p>
            <div className='flex flex-col'>
                <form className="flex flex-col " onSubmit={handleSubmit}>
                    <input className="bg-Cinza w-96 h-10 m-2 placeholder:pl-2" placeholder="Nome" type="text" onChange={(e) => setName(e.target.value)}/>
                    <input className="bg-Cinza w-96 h-10 m-2 placeholder:pl-2" placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)}/>
                    <input className="bg-Cinza w-96 h-10 m-2 placeholder:pl-2" placeholder="Senha" type="password" onChange={(e) => setPassword(e.target.value)}/>
                    <button className="bg-Laranja w-24 p-2 m-2" type="submit">Cadastrar</button>
                </form>
            </div>
  
           </div>
           </div>
        </>

     );
}