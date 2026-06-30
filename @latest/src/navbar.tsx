import bgNav from './assets/sixteen-miles-out-GVhAezjtX-4-unsplash.jpg'

export default function Navbar(){
    return(
        <div >

            <div className="h-auto w-screen bg-[#5C3A1E] flex flex-col md:flex-row justify-center items-center gap-8 py-4 px-6 fixed justify-evenly">

                <div className='text-2xl font-bold font-serif text-[#F59127]'>
                    <a href="#">BooKing</a>
                </div>
                
                <ul className="flex flex-wrap justify-center text-white gap-10 items-evenly">
                    <li className='transition ease-in hover:text-[#F59127]'><a href="#">Accueil</a></li>
                    <li className='transition ease-in hover:text-[#F59127]'><a href="#">About Us</a></li>
                    <li className='transition ease-in hover:text-[#F59127]'><a href="#">Catalogue</a></li>
                    <li className='transition ease-in hover:text-[#F59127]'><a href="#">Lecture</a></li>
                    <li className='transition ease-in hover:text-[#F59127]'><a href="#">Avis</a></li>
                </ul>
                <button className="px-6 py-2 font-bold bg-[#F59127] rounded-lg text-white">
                    <a href="#">Connexion</a>
                </button>
                
            </div>

            <div className="">
                <img src={bgNav} className='w-screen h-[800px]'/>
                
            </div>
            
        </div>
    );
}