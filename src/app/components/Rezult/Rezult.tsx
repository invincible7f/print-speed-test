"use client"
import textVariants from "../RandomText/textVariants";
import { useState, useEffect } from "react";
import { Timer, RefreshCw, Trophy } from "lucide-react";
import RandomText from "../RandomText/RandomText";



interface RezultProps {
timer:number
index:number
isActiveToggle:()=>void
getRandomIndex?:()=>number
}

export default function Rezult({ timer,isActiveToggle, index }:RezultProps) {
  
  const [inputText,setInputText] = useState<string>('')
  
  const [mounted, setMounted] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0)
   const [wrongSymbolsCount, setWrongSymbolsCount] = useState<number>(0)
    const [wrightSymbolsCount, setWrightSymbolsCount] = useState<number>(0)
    const [inputWord, setInputWord] = useState<string>('')
    const [wordCount, setWordCount] = useState<number>(0)

  useEffect(() => {
    setMounted(true);
  }, []);

  const text:string = index === 0 ? textVariants.variant1 : 
               index === 1 ? textVariants.variant2 : 
               textVariants.variant3;


                const symbols: string[] = text.split('')
                const words: string[] = text.split(" ")


              
                useEffect(()=>{
                if(inputText === "") return 
            
                const charToType:string =symbols[currentIndex]
                const charTyped:string = inputText
               


                if(charTyped === charToType){
                 console.log(charTyped);
                 setCurrentIndex(prev => prev + 1)

                   if (charTyped !== " ") {
                    setWrightSymbolsCount(prev => prev + 1);
    }
                 setInputText('')
         
                

               
                 
              }
              else{
                if (charTyped !== " ") {
      setWrongSymbolsCount(prev => prev + 1);
    }
                 
              }
             
               
               },[inputText])
               
               
               
               
               
                useEffect(() => {
                setInputText('');
                setInputWord('');
                setCurrentIndex(0);
                setWrongSymbolsCount(0);
                setWrightSymbolsCount(0);
                setWordCount(0);
              }, [index])
               
useEffect(() => {
  const space = (event: KeyboardEvent): void => {
    if (event.code === "Space" || event.key ===" " ) {
        if (inputWord.endsWith(" ")) return;

   
     const lastWord: string = inputWord.trim().split(" ").slice(-1)[0] || "";

      if (lastWord !== null && words.includes(lastWord)) {
        setWordCount((prev) => prev + 1);
    
        console.log("Word matched:", lastWord);
      }
    }
  };

  document.addEventListener("keydown", space);
  return () => document.removeEventListener("keydown", space);
}, [inputWord, words]);

  return (
    <div>
      <RandomText mounted={mounted}
      text={text} 
      symbols={symbols} 
       currentIndex={currentIndex}/>
     
<div className="relative flex w-full">
   {timer === 0 && <div className="w-full opacity-40 absolute bg-slate-100 inset-0 "></div>}
      <textarea
        className={`bg-slate-100 mt-5 w-full resize-none p-5 text-slate-800 rounded-md border-2 border-slate-300`}
        placeholder="Почніть друкувати"
          disabled={timer === 0} 
        onChange={(e)=>{ 
         
          const val:string = e.target.value; 
          const textType:string = e.target.value
           const isAdding = (e.nativeEvent as InputEvent).inputType?.includes("insert");
          if(isAdding){
            const lastChar:string = val.slice(-1) 
            setInputText(lastChar)
            isActiveToggle()
        
          }
          else {
      setInputText(val);
   
    }
      setInputWord(textType)

         
          }
      }
      ></textarea>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-between gap-5 w-full ">
        <div className="flex mt-8 bg-blue-50 w-full md:w-96 h-28 flex-col text-blue-500 rounded-md">
          <p className="flex mt-4 ml-5">
            <Timer size={20} />
            <span className="ml-2">Час</span>
          </p>
          <h3 className="ml-5 mt-3 text-3xl font-bold">{timer}</h3>
        </div>
        <div className="flex flex-col mt-8 bg-emerald-50   w-full text-emerald-500 md:w-96 h-28 rounded-md">
          <p className="flex mt-4 ml-5">
            <Trophy size={20} />
            <span className="ml-2">Слів</span>
          </p>
          <h3 className="ml-5 mt-3 text-3xl font-bold">{wordCount} сл/хв</h3>
        </div>
        <div className="flex  flex-col mt-8 bg-fuchsia-50 w-full text-fuchsia-500 md:w-96 h-28 rounded-md">
          <p className="flex mt-4 ml-5">
            <Trophy size={20} />
            <span className="ml-2">Символів</span>
          </p>
          <h3 className="ml-5 mt-3 text-3xl font-bold"> {wrightSymbolsCount} св/хв</h3>
        </div>
      </div>
    </div>
  );
}
