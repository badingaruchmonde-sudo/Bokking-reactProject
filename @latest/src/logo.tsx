interface myLogo{
    image:string;
    des:string;
}

export default function Logo(props:myLogo){
    return(
        <div className="flex flex-col gap-5">
            <div >
                <img className="p-2 border h-[70px] w-[70px] rounded-full border-[#5C3A1E]" src={props.image}/>
            </div>
            <p className="text-center font-thin text-2xl">{props.des}</p>
        </div>
    );
}