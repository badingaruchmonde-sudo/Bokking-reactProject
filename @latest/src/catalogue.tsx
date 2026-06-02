import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'
import img6 from './assets/img6.jpg'
import img7 from './assets/img7.jpg'
import img8 from './assets/img8.jpg'
import Arrowdown from './assets/icons8-arrow-down-50.png'
import ImgDec from './imgDeco'
import search from './assets/icons8-search-30.png'
import Logo from './logo'
import book from './assets/icons8-storytelling-100.png'
import free from './assets/icons8-free-58.png'
import valid from './assets/icons8-approved-100.png'
import './App.css'


export default function Catalogue(){

        
    return(

        <section >

            <div className=' flex mt-15 justify-evenly'>
                <Logo image={book} des="Decouverte"/>
                <Logo image={free} des="Gratuit"/>
                <Logo image={valid} des="Approuvé"/>
            </div>

            <div className='flex flex-col items-center text-center mt-20 px-4'>
                <h1 className='text-4xl font-semibold text-[#5C3A1E]'>À propos de Nous</h1>

                <p className='max-w-2xl md:max-w-[60%] lg:max-w-[40%] mt-10 leading-relaxed text-gray-700 font-thin'>
                    <span className='font-bold text-orange-400'>Booking</span> est une interface permettant au plus grand monde d'accéder aux joies de la lecture ! Totalement gratuit, vous pouvez vous plonger
                    dans vos contes et récits favoris sans dépenser le moindre centime. De plus, nous vous tenons à jour sur les sorties de vos 
                    auteurs et autrices préférées. Sans limite d'âge, profitez d'un moment de détente en lisant vos fables préférées et bandes dessinées,
                    ou encore faites tourner vos méninges en essayant de trouver qui est le coupable avant le héros de votre roman policier favori. Lancez-vous
                    à la découverte d'un nouveau monde. 
                </p>
            </div>
            

            <div className=" flex justify-center mt-20">
                <div className=" gap-x-20 mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-y-5">
                    <div className='dropdown '>
                            <button className="categorieButton w-[100%] flex items-center gap-2 border border-[#5C3A1E] px-6 py-2 rounded-xl transition hover:bg-[#5C3A1E] hover:text-white group">
                <span>Categorie</span>
                <img 
                    className="h-4 w-4 transition-transform group-hover:translate-y-1 translate-x-30" 
                    src={Arrowdown} 
                    alt="arrow"
                    />
                </button>

                <div className='contentCategorie p-10 bg-gray-200 rounded-xl'>
                    <ul>
                        <li><button className='w-[100%] duration-200 ease-in hover:cursor-pointer hover:bg-[#5C3A1E] p-2 rounded-lg hover:text-white'><a href='#'>Action</a></button></li>
                        <li><button className='w-[100%] duration-200 ease-in hover:cursor-pointer hover:bg-[#5C3A1E] p-2 rounded-lg hover:text-white'><a href='#'>Aventure</a></button></li>
                        <li><button className='w-[100%] duration-200 ease-in hover:cursor-pointer hover:bg-[#5C3A1E] p-2 rounded-lg hover:text-white'><a href='#'>Romance</a></button></li>
                        <li><button className='w-[100%] duration-200 ease-in hover:cursor-pointer hover:bg-[#5C3A1E] p-2 rounded-lg hover:text-white'><a href='#'>Jeunesse</a></button></li>
                        <li><button className='w-[100%] duration-200 ease-in hover:cursor-pointer hover:bg-[#5C3A1E] p-2 rounded-lg hover:text-white'><a href='#'>Fable</a></button></li>
                        <li><button className='w-[100%] duration-200 ease-in hover:cursor-pointer hover:bg-[#5C3A1E] p-2 rounded-lg hover:text-white'><a href='#'>Sceince-Fiction</a></button></li>
                        <li><button className='w-[100%] duration-200 ease-in hover:cursor-pointer hover:bg-[#5C3A1E] p-2 rounded-lg hover:text-white'><a href='#'>Fantasy</a></button></li>
                        <li><button className='w-[100%] duration-200 ease-in hover:cursor-pointer hover:bg-[#5C3A1E] p-2 rounded-lg hover:text-white'><a href='#'>Horreur</a></button></li>
                        <li><button className='w-[100%] duration-200 ease-in hover:cursor-pointer hover:bg-[#5C3A1E] p-2 rounded-lg hover:text-white'><a href='#'>Policier</a></button></li>
                    </ul>
                </div>
                    </div>
                
                <button className="border border-[#5C3A1E] px-10 py-2 rounded-xl transition hover:bg-[#5C3A1E] hover:text-white">Top du moment</button>
                <div className="relative flex items-center">
                    <input 
                        className="border border-[#5C3A1E] rounded-xl w-[340px] py-2 pl-10 pr-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#5C3A1F]" 
                        type="text" 
                        placeholder="Search..."
                    />
                    <img 
                        className="absolute left-3 w-5 h-5 opacity-50" 
                        src={search} 
                        alt="search icon"
                    />
                </div>

                
            </div>
            </div>

            

            <div className='w-full flex flex-col items-center gap-10'>
                <div className='Carousel grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20 w-full justify-items-center gap-y-10'>
                    <ImgDec img={img1} titre="Peter Pan In Wonderland" categorie1="fantasy" categorie2="jeuneusse"/>
                    <ImgDec img={img2} titre="Scavengers" categorie1="Action" categorie2="Fantasy"/>
                    <ImgDec img={img3} titre="Mod-Zero" categorie1="decouverte" categorie2="action"/>
                    <ImgDec img={img4} titre="Peter Pan In Wonderland" categorie1="fantasy" categorie2="lorem"/>
                    <ImgDec img={img5} titre="Mod-Zero" categorie1="decouverte" categorie2="action"/>
                    <ImgDec img={img6} titre="Scavengers" categorie1="Action" categorie2="Fantasy"/>
                    <ImgDec img={img7} titre="Mod-Zero" categorie1="decouverte" categorie2="action"/>
                    <ImgDec img={img8} titre="Peter Pan In Wonderland" categorie1="fantasy" categorie2="jeuneusse"/>
                </div>

            </div>

            
            
            
        </section>

    );
}
