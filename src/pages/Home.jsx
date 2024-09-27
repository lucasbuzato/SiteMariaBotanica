import {Link} from 'react-router-dom'
function Home(){
    return ( 
        <>
        <div className="flex mb-24">
        <div>
            <img className="mt-10 " src="/fotocarrosel.png" alt="" />
            <p className="font-bold text-3xl absolute left-9 top-2/4">
            “Para tocar o inacessível chão<br></br>
            é necessario a imensurável compreensão”
            </p>
        </div>
        </div>
        <div className="flex bg-Cinza justify-around mb-20 text-xl">
            <div className="flex-col text-black w-96 p-8 h-24">
            <p className="text-black mb-5 font-bold">Lorem Ipsum</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc urna, scelerisque sit amet erat sit amet, efficitur maximus magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc urna, scelerisque sit amet erat sit amet, efficitur maximus magna.</p>
            </div>
            <div className="flex flex-col bg-Verde flex w-96 p-8 h-96 relative top-16">
            <p className="mb-5 font-bold">Lorem Ipsum</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc urna, scelerisque sit amet erat sit amet, efficitur maximus magna.</p>
            </div>
        </div>



        <div className="flex flex-col">


            <p className="text-black text-2xl font-bold p-9">Blog</p>


<div className="flex justify-evenly">

<div className="flex flex-col h-4/12 w-4/12 m-12">
                <img src="/Rectangle 117.png" alt="" />

                <a className="block"   href="">
                    <Link to ="/paginablog">
                <div className="bg-Laranja p-3">

                        <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img className="h-8 w-8" src="/imagefoto1.png" alt="" />
                            <div className="p-2">
                                <p className="text-sm">Paula Martins</p>
                                <p className="text-xs">Há 12 horas</p>
                            </div>
                        </div>
                        <img className="h-8" src="/menu 1.png" alt="" />
                        </div>
                        
                    <div className="mt-2">
                        <p className="font-bold text-lg">Chás de Ervas</p>
                        <p className="text-sm">Aprenda sobre as diferentes ervas, suas propriedades e como prepará-las.</p>
                    </div>
                </div>
                </Link>
                </a>
            </div>





            <div className="flex flex-col h-4/12 w-4/12 m-12">
                <img src="/Rectangle 118.png" alt="" />

                <a className="block"   href="">
                    <Link to ="/paginablog">
                <div className="bg-Laranja p-3">

                        <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img className="h-8 w-8" src="/imagefoto2.png" alt="" />
                            <div className="p-2">
                                <p className="text-sm">Claudio Santos</p>
                                <p className="text-xs">Há 16 horas</p>
                            </div>
                        </div>
                        <img className="h-8" src="/menu 1.png" alt="" />
                        </div>
                        
                    <div className="mt-2">
                        <p className="font-bold text-lg">Receitas de Saladas</p>
                        <p className="text-sm">Descubra combinações deliciosas de legumes e molhos que vão surpreender seu paladar.</p>
                    </div>
                </div>
                </Link>
                </a>
            </div>



            <div className="flex flex-col h-4/12 w-4/12 m-12">
                <img src="/Rectangle 110.png" alt="" />

                <a className="block"   href="">
                    <Link to ="/paginablog">
                <div className="bg-Laranja p-3">

                        <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img className="h-8 w-8" src="/imagefoto3.png" alt="" />
                            <div className="p-2">
                                <p className="text-sm">Bruna Gomes</p>
                                <p className="text-xs">Há 23 minutos</p>
                            </div>
                        </div>
                        <img className="h-8" src="/menu 1.png" alt="" />
                        </div>
                        
                    <div className="mt-2">
                        <p className="font-bold text-lg">Chás Aromáticos</p>
                        <p className="text-sm">Aprenda a criar suas próprias misturas de chás aromáticos!</p>
                    </div>
                </div>
                </Link>
                </a>
            </div>

            </div>
            </div>

        <div className="flex flex-col mb-20">
          
            <p className="text-black text-2xl font-bold p-9">Marketplace</p>
        
            <div className="flex justify-evenly ">

        <a className="block"   href="">
                    <Link to ="/paginamarket">
                <div>
                <img src="sementes.png" className="flex flex-col p-8 h-96 w-96 ">
                </img>
                <div className="relative bottom-28 left-14">
                <p className="text-black text-xl font-bold">Temperos</p>
                <p className="text-black">R$ 35</p>
                </div>
                </div>
                </Link>
                </a>

                <a className="block"   href="">
                    <Link to ="/paginamarket">
                <div>
                <img src="mudas.png" className="flex flex-col p-8 h-96 w-96 ">
                </img>
                <div className="relative bottom-28 left-14">
                <p className="text-white text-xl font-bold">Mudas</p>
                <p className="text-white">R$ 20</p>
                </div>
                </div>
                </Link>
                </a>
                <a className="block"   href="">
                    <Link to ="/paginamarket">
                <div>
                <img src="canela.png" className="flex flex-col p-8 h-96 w-96 ">
                </img>
                <div className="relative bottom-28 left-14">
                <p className="text-white text-xl font-bold">Canela</p>
                <p className="text-white">R$ 15</p>
                </div>
                </div>
                </Link>
                </a>
            </div>
        </div>
        
        <div className="bg-Verde w-full h-8"></div>
        <footer>
        <div className="flex items-center">
            <img  className="h-8 w-8 m-1" src="/icons8-instagram-32 1.png" alt="" />
            <img  className="h-8 w-8 m-1" src="/icons8-pinterest-32 1.png" alt="" />
            <img  className="h-8 w-8 m-1" src="/icons8-tiktok-32 1.png" alt="" />
            <img  className="h-8 w-8" src="/Frame 246.png" alt="" />
            </div>
        </footer>
        </>
    );
  }
export default Home ;