
export default function Marketplace() {

    return ( 
        <>
           <div className="mt-5 flex mb-24">
        <div>
            <img src="/fotocarrosel.png" alt="" />
        </div>
        </div>
        <div className="flex justify-center mb-20 m-px">
        <div className="bg-Cinza w-11/12 flex justify-center">
            <div className="bg-Verde w-11/12 flex justify-between p-4 relative top-10">
                <img className="h-36 p-2"src="Ellipse 77.png" alt="" />
                <img className="h-36 p-2"src="Ellipse 78.png" alt="" />
                <img className="h-36 p-2"src="Ellipse 79.png" alt="" />
                <img className="h-36 p-2"src="Ellipse 80.png" alt="" />
            </div>
        </div>
        </div>
        <p className="text-black text-2xl font-bold p-9 mt-20">Mais Comprados</p>
        <div className="flex justify-evenly ">
                <div>
                <img src="sementes.png" className="flex flex-col p-8 h-96 w-96 ">
                </img>
                <div className="relative bottom-28 left-14">
                <p className="text-black text-xl font-bold">Temperos</p>
                <p className="text-black">R$ 35</p>
                </div>
                </div>
                <div>
                <img src="mudas.png" className="flex flex-col p-8 h-96 w-96 ">
                </img>
                <div className="relative bottom-28 left-14">
                <p className="text-white text-xl font-bold">Mudas</p>
                <p className="text-white">R$ 20</p>
                </div>
                </div>

                <div>
                <img src="canela.png" className="flex flex-col p-8 h-96 w-96 ">
                </img>
                <div className="relative bottom-28 left-14">
                <p className="text-white text-xl font-bold">Canela</p>
                <p className="text-white">R$ 15</p>
                </div>
                </div>
            </div>
            <p className="text-black text-2xl font-bold p-9">Legumes</p>
        <div className="flex justify-evenly ">
        <div>
                <img src="cebola.png" className="flex flex-col p-8 h-96 w-96 ">
                </img>
                <div className="relative bottom-28 left-14">
                <p className="text-white text-xl font-bold">Cebolas</p>
                <p className="text-white">R$ 15</p>
                </div>
                </div>
                <div>
                <img src="cenoura.png" className="flex flex-col p-8 h-96 w-96 ">
                </img>
                <div className="relative bottom-28 left-14">
                <p className="text-white text-xl font-bold">Cenoura</p>
                <p className="text-white">R$ 10</p>
                </div>
                </div>
                <div>
                <img src="pimentao.png" className="flex flex-col p-8 h-96 w-96 ">
                </img>
                <div className="relative bottom-28 left-14">
                <p className="text-white text-xl font-bold">Pimentões</p>
                <p className="text-white">R$ 15</p>
                </div>
                </div>
            </div>
            <div className="bg-Verde w-full h-8 "></div>
        </>

     );
}