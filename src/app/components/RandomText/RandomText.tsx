import { Key } from "lucide-react";




interface RandomTextProps{
mounted:boolean;
text:string;
symbols:string[]
currentIndex:number
}


export default function RandomText({mounted,  symbols,highlight,currentIndex }:RandomTextProps) {



  if (!mounted) {
    return <div className=" h-[150px] bg-slate-50 opacity-0" />;
  }


  
  return (
    <div className="flex bg-slate-50 items-center mt-5 rounded-md h-[150px]">
      <p className="text-lg mt-5">     {symbols.map((item, index) => {
        let colorClass = "text-slate-600"
        if(index < currentIndex){
          colorClass = "text-emerald-500"
        }
        else if(index === currentIndex){
          colorClass ="bg-orange-500 text-slate-100"
        }

       
        return(
          <span  key={index} className={`${colorClass} rounded-full` }>{item}</span>
        )
        })}</p>
    </div>
  );
}