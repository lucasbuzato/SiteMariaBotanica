import {Link} from 'react-router-dom'

function Navbar() {
    return ( 
        <nav>
            <ul className='flex gap-48 font-bold font-customFont  '>
                <li><Link to ="/"> Home</Link></li>
                <li><Link to ="sobre"> Sobre </Link></li>
                <li><Link to ="contatos"> Contato </Link></li>
                <li><Link to ="marketplace"> Marketplace </Link></li>
                <li><Link to ="blog"> Blog </Link></li>
            </ul>
        </nav>
     );
}

export default Navbar ;