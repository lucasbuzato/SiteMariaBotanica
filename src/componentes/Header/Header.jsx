import Navbar from "../Navbar/Navbar";
import {Link} from 'react-router-dom'
function Header() {
    return ( 
        <div className="font-bold bg-white">
            <div className="flex justify-between">
            <img className="w-52 h-48" src="/LOGO MARIA BOTANICA.png" alt="" />
            <div className="flex items-center">
            <div className="mt-5 flex justify-end">

            <button className="bg-Laranja w-36 p-2 m-2 font-normal"><Link to ="/cadastro">Cadastrar-se</Link></button>
            <button className="bg-Laranja w-16 p-2 m-2 font-normal"><Link to ="/login">Login</Link></button>
            </div>
            
        </div>
            </div>
            
            
            
            <div className="flex justify-center bg-Verde text-Red-claro p-2">
            <Navbar/>
            </div>
        </div>
     );
}

export default Header ;