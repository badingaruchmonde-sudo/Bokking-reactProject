import quoteL from './assets/icons8-quote-left-24.png'
import quoteR from './assets/icons8-quote-24.png'

interface myCom{
    image:string;
    name:string;
    com:string
}

export default function Comments (props:myCom){
    return(
        
            <div className=" bg-[#5C3A1E] rounded-lg flex flex-col items-center my-5 h-[470px] w-[390px]">
            
                <img className="h-[150px] w-[150px] rounded-full mt-6" src={props.image}/>

                <div className="text-center w-[65%]">
                    <h1 className="text-[#F59127] text-lg font-bold font-serif py-3">{props.name}</h1>
                    <p className="font-thin text-white relative pl-7 pr-7">
                        <img className="absolute top-0 left-0 h-5 w-5" src={quoteL} />
                        {props.com}
                        <img className="inline h-5 w-5 ml-1 align-middle" src={quoteR} />
                    </p>
                </div>
                
            </div>
        
    );
}