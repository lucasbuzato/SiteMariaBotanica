
export default function PaginaMarket() {

    return ( 
        <>
        <div className="flex m-10 mt-32">
            <img className="w-5/12 h-5/12" src="/Rectangle 152.png" alt="" />
            <div className="m-20">
            <div className="w-96">
                <p className="font-bold text-black text-2xl">Tomates</p>
                <p className="text-black text-xl">Sabor autêntico direto da horta para sua mesa! Nossos tomates frescos são perfeitos para saladas, molhos e muito mais. Experimente a diferença do frescor!</p>
            </div>
            <div className="flex items-center mt-20 justify-between">
            <form>
    <div class="relative flex items-center max-w-[8rem]">
        <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" class="bg-Laranja p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
        </svg>
        </button>
        <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" class="bg-Cinza h-11 text-center text-black text-sm  block w-full py-2.5 " placeholder="999" required />
        <button type="button" id="increment-button" data-input-counter-increment="quantity-input" class="bg-Laranja p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
       <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
        </button>
    </div>
</form>
            <button className="bg-Laranja w-36 p-2 m-2 font-normal">Comprar</button>
            </div>
            </div>
        </div>
        <div className="bg-Verde w-full h-8 mt-40"></div>
        </>

     );
}