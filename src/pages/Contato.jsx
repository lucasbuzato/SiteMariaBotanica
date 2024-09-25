
export default function Contato() {


    return ( 
        <>
        <div className="flex justify-center mt-20">


        <div className="bg-Cinza w-8/12 h-96 flex">
            <div className="p-5 mr-20">
            <p className="text-black font-bold">Contato-nos</p>
            <p className="text-black">mariabotanica@gmail.com</p>
            </div>




            <div className="">
            <p className="text-black mb-5 mt-5"><span className="font-bold">Preencha</span> os <span className="font-bold">campos </span> abaixo:</p>
            <div className="bg-Verde p-8 ">
                <div className="flex flex-col items-end">
                    <input className="bg-Cinza w-96 h-10 m-2 placeholder:pl-2" placeholder="*Nome" type="text" />
                    <input className="bg-Cinza w-96 h-10 m-2 placeholder:pl-2" placeholder="*Email" type="text" />
                    <input className="bg-Cinza w-96 h-10 m-2 placeholder:pl-2" placeholder="*Assunto" type="text" />
                    <textarea className="bg-Cinza m-2 placeholder:pl-2" rows="6"shape="" cols="46" coords="" placeholder="*Mensagem" href="" alt="" />
                    <button className="bg-Laranja w-16 p-2 m-2">Enviar</button>
                </div>
            </div>
            </div>



        </div>



        
        </div>
        <div className="bg-Verde w-full h-8 mt-56"></div>
        </>

     );
}
