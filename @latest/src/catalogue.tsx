import img1 from './assets/components/img1.jpg'
import img2 from './assets/components/img2.jpg'
import img3 from './assets/components/img3.jpg'
import Arrowdown from './assets/components/icons8-arrow-down-50.png'
import ImgDec from './imgDeco'
import search from './assets/components/icons8-search-24.png'
import arrowright from './assets/components/icons8-next-page-50.png'
import arrowleft from './assets/components/icons8-back-to-50.png'
import Logo from './logo'
import book from './assets/components/icons8-open-book-50.png'
import free from './assets/components/icons8-free-64.png'
import valid from './assets/components/icons8-approved-50.png'
import './App.css'


export default function Catalogue(){

        
    return(

        <section >

            <div className='flex mt-15 justify-evenly'>
                <Logo image={book} des="Decouverte"/>
                <Logo image={free} des="Gratuit"/>
                <Logo image={valid} des="Approuvé"/>
            </div>

            <div className='text-center mt-20'>

                <h1 className='text-4xl'>A propos de Nous</h1>

                <p className='max-w-[40%] mt-20 text-center'>
                    <span className='font-bold'>Booking</span> est une interface perméttant au plus grand monde d'acces aux joies de la lecture! Totalement gratuit,vous pouvez vous plonger
                    dans vos comptes et recits favoris sans depenser le moindre centime. De Plus, Nous vous tenons à jour sur les sorties de vos 
                    auteurs et autrices préferées. Sans limite d'age, profiter d'un moment de détente en lisant vos fables préférées et bandes déssinées,
                    ou encore faites tourner vos méniges en éssayant de trouver qui est le couplable avant le hero de votre roman policier favoris. Lancez vous
                    à la découverte d'un nouveau monde. 
                </p>
            </div>
            

            <div className="flex justify-center mt-20">
                <div className=" gap-x-20 mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-y-5">
                <button className="flex items-center gap-2 border border-orange-300 px-6 py-2 rounded-xl transition hover:bg-orange-300 hover:text-white group">
                <span>Categorie</span>
                <img 
                    className="h-4 w-4 transition-transform group-hover:translate-y-1 translate-x-40" 
                    src={Arrowdown} 
                    alt="arrow"
                    />
                </button>
                <button className="border border-orange-300 px-10 py-2 rounded-xl transition hover:bg-orange-300 hover:text-white">Top du moment</button>
                <div className="relative flex items-center">
                    <input 
                        className="border border-orange-300 rounded-xl w-[340px] py-2 pl-10 pr-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-200" 
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
                <div className='Carousel grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-20 w-full justify-items-center gap-y-10'>
                    <ImgDec img={img1} titre="Peter Pan In Wonderland" categorie1="fantasy" categorie2="jeuneusse"/>
                    <ImgDec img={img2} titre="Scavengers" categorie1="Action" categorie2="Fantasy"/>
                    <ImgDec img={img3} titre="Mod-Zero" categorie1="decouverte" categorie2="action"/>
                    <ImgDec img={img1} titre="Lorem" categorie1="lorem" categorie2="lorem"/>
                </div>

                <div className='flex justify-center gap-6'>
                    <button className='prev hover:cursor-pointer h-10 w-10 hover:scale-110 transition-transform'><img src={arrowleft}/></button>
                    <button className='next hover:cursor-pointer h-10 w-10 hover:scale-110 transition-transform'><img src={arrowright}/></button>
                </div>
            </div>

            
            
            
        </section>

    );
}
