import star from './assets/components/icons8-star-48.png'
import Arrowdown from './assets/components/icons8-arrow-down-50.png'
import img1 from './assets/components/img1.jpg'
import next from './assets/components/icons8-next-page-50.png'
import back from './assets/components/icons8-back-to-50.png'

interface myLecture{
    image:string;
    titre:string;
    des:string; 
    chap:string;
    chapNumber:string;
}

export default function Lecture(props:myLecture){
    return(
        <div className=" flex flex-col gap-10">
            <div className="w-full h-fit-content bg-gray-300 mt-20 p-3 flex items-center">
                <div className="flex justify-start ml-[10%] gap-4">
                    <img className="h-[350px] w-[280px] p-3 border border-[#5C3A1E] "src={props.image}/>

                    <div className="flex flex-col gap-7">
                        <h1 className="text-5xl text-[#5C3A1E]">{props.titre}</h1>
                        <p className="w-[50%]">{props.des}</p>

                        <div className="flex">
                                                <p> Note : </p>
                                                <div className='flex h-[22px] w-[18px] '>
                                                    <img src={star}/>
                                                    <img src={star}/>
                                                    <img src={star}/>
                                                    <img src={star}/>
                                                    <img src={star}/>
                                
                                                </div>
                                                
                                            </div>
                                            <p className="text-bold text-center flex flex-wrap gap-x-1"><span className="font-thin">Categorie :</span> <span className="border border-orange-300 px-3 py-1 rounded-lg">Aventure</span> <span className="border border-orange-300 px-3 py-1 rounded-lg">Fantasy</span></p>
                                            <button className="p-3 max-w-[20%] bg-[#5C3A1E] text-white">Commencer a lire</button>
                        
                    </div>

                    
                    
                </div>

            </div>

            <div className="flex justify-evenly ">
                    <div className="h-fit-content p-2 w-[35%] bg-gray-200 flex flex-col items-center gap-10">
                        <p className="mt-10 text-2xl font-bold">{props.chap}</p>
                        <button className="border border-2-[#5C3A1E] px-6 py-2 rounded-xl transition hover:bg-[#5C3A1E] hover:text-white hover:cursor-pointer font-thin">{props.chapNumber}</button>
                    </div>

                    <div className='w-[55%] h-190 bg-black p-2 flex items-center flex-col gap-6'>
                       
                    <div className='dropdown '>
                            <button className="p-2 w-[100%] flex items-center gap-10 bg-white px-6 transition hover:bg-[#5C3A1E] hover:text-white group">
                            <span>Page 1 - Page 2</span>
                            <img 
                                className="h-4 w-4 transition-transform group-hover:translate-y-1 " 
                                src={Arrowdown} 
                                alt="arrow"
                                />
                            </button>

                            <div className='contentCategorie'>
                                <ul>
                                    <li><button className='w-[100%] duration-200 ease-in hover:cursor-pointer hover:bg-[#5C3A1E] p-2 rounded-lg hover:text-white'><a href='#'>Page 1- Page 2</a></button></li>
                                
                                </ul>
                            </div>
        
                    </div>
                        <div className='w-[85%] h-160 bg-white flex justify-center items-center justify-evenly'>
                            <img className='item h-[450px] w-[45%] shadow-2' src={img1}/>
                            <div className='h-[450px] w-[1px] bg-black'></div>
                            <img className=' item h-[450px] w-[45%] shadow-2' src={img1}/>
                        </div>

                        <div className='relative block p-1'>
                                <button><img className='hover:cursor-pointer h-9 hover:h-10 duration-300 ease-in' src={back}/></button>
                                <button><img className='hover:cursor-pointer h-9 hover:h-10 duration-300 ease-in' src={next}/></button>
                        </div>
                        
                    </div>
                </div>
        </div>
    );
}