import {Link} from 'react-router-dom'
export default function PaginaBlog() {

    return ( 
        <>
        <div className="flex justify-center mt-14 mb-20 ">
            <div className="bg-Cinza w-11/12 h-80 flex flex-col p-5">
            <p className="font-bold text-xl text-black ml-14">
            Chás Aromáticos
                    </p>
                <div className="bg-Verde w-12/12 h-96 p-10 flex flex-col items-center relative top-6">
                    
                    <p className="text-lg ">
                    Os chás aromáticos são uma maneira deliciosa e saudável de saborear bebidas quentes ou frias, além de serem uma excelente forma de aproveitar os benefícios das ervas, especiarias e flores. Neste post, vamos explorar como criar suas próprias misturas de chás aromáticos, proporcionando uma experiência sensorial única e personalizada.

                    </p>
                </div>
            </div>
            </div>
            <div className="flex justify-evenly">
                <img className="w-96 p-5" src="Rectangle 145.png" alt="" />
                <img className="w-96 p-5"  src="Rectangle 144.png" alt="" />
            </div>
            <div className="flex justify-center mt-20 mb-20 ">
            <div className="bg-Cinza w-11/12 h-80 flex flex-col p-5">
            <div className="bg-Verde w-12/12 h-96 p-10 flex flex-col relative bottom-12">
                    <p className="font-bold mb-5 text-xl">
                    A Importância dos Ingredientes Frescos
                    </p>
                    <p className="text-lg ">
                    Para criar chás aromáticos de qualidade, a frescura dos ingredientes é essencial. Sempre que possível, utilize ervas e flores frescas. Se não tiver acesso a ingredientes frescos, escolha ervas secas de boa qualidade.
                    </p>
                </div>
            
            
            </div>
            </div>
            <div className="flex justify-center">
            <img className="w-8/12" src="Rectangle 149.png" alt="" />
            </div>


            <p className="text-black text-2xl font-bold p-9">Relacionados</p>


<div className="flex justify-evenly mb-16">

            
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
            <div className="bg-Verde w-full h-8 mt-20"></div>

        </>

     );
}