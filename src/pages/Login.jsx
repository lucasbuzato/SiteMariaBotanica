import {Link} from 'react-router-dom'
export default function Login() {

    return ( 
        <>
        <div className="flex justify-center bg-login-img bg-cover bg-center p-52">
           <div className="bg-Verde flex flex-col items-center w-7/12 h-72 justify-center">
            <p className="text-2xl font-bold">Login</p>
            <div>
                <input className="bg-Cinza w-96 h-10 m-2 placeholder:pl-2" placeholder="*Email" type="text" />
                <div>
                <input className="bg-Cinza w-96 h-10 m-2 placeholder:pl-2" placeholder="*Senha" type="text" />
                
                </div>
                <a href="" ><Link to ="/cadastro">*Criar uma conta</Link></a>
            </div>
          
            <button className="bg-Laranja w-16 p-2 m-2"><Link to ="/marketplace">Entrar</Link></button>
  
           </div>
           </div>
        </>

     );
}