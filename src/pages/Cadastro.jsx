import {Link} from 'react-router-dom'
export default function Cadastro() {

    return ( 
        <>
           <div className="flex justify-center bg-login-img bg-cover bg-center p-52">
           <div className="bg-Verde flex flex-col items-center w-8/12 h-96 justify-center">
            <p className="text-2xl font-bold">Cadastrar-se</p>
            <div className='flex flex-col'>
                <input className="bg-Cinza w-96 h-10 m-2 placeholder:pl-2" placeholder="*Nome" type="text" />
                <input className="bg-Cinza w-96 h-10 m-2 placeholder:pl-2" placeholder="*Email" type="text" />
                <input className="bg-Cinza w-96 h-10 m-2 placeholder:pl-2" placeholder="*Senha" type="text" />
                <input className="bg-Cinza w-96 h-10 m-2 placeholder:pl-2" placeholder="*Confirmar Senha" type="text" />
         
            </div>
          
            <button className="bg-Laranja w-16 p-2 m-2"><Link to ="/login">Criar</Link></button>
  
           </div>
           </div>
        </>

     );
}