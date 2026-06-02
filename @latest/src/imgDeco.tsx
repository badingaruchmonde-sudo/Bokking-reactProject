import star from './assets/icons8-star-50.png'

interface ImageDeco{
    img : string;
    titre : string;
    categorie1 : string;
    categorie2 : string;
}

export default function ImgDec (props : ImageDeco){
    return(
        <div className="max-w-[360px] min-h-[410px] rounded-xl flex flex-col py-5 items-center justify-center bg-gray-300">
            <img className="h-[250px] w-[210px] p-3 border border-[#5C3A1E]" src={props.img}/>

            <div className=" flex flex-col w-[94%]">

                <div className="flex flex-col justify-center items-center p-6 bg-white mt-4 rounded-b-xl gap-4">
                     <h1 className="text-black text-2xl font-bold">{props.titre}</h1>
                    <div className="flex justify-evenly">
                        <p className="text-bold text-center flex flex-wrap gap-x-1"><span className="font-thin">Categorie :</span> <span className="border border-orange-300 px-3 py-1 rounded-lg">{props.categorie1}</span> <span className="border border-orange-300 px-3 py-1 rounded-lg">{props.categorie2}</span></p>
                    </div>
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
                    <button className="more text-white bg-[#5C3A1E] px-20 py-2 rounded-xl duration-300 ease-in hover:cursor-pointer hover:px-21 font-thin">Show more</button>
                    
                </div>

                
            </div>

            </div>

          
            
       
    );
}