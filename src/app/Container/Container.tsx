"use client"

import Button from "../components/Button/Button";
import Rezult from "../components/Rezult/Rezult";
import { useTimer } from "./useTimer";
import { useState } from "react";
// ----------------------------------------------------------------
const getRandomIndex= ():number => Math.floor(Math.random() * 3);
export default function Container() {
  const{timer, isActiveToggle, reset} = useTimer(60)
    const [index,setIndex] = useState<number>(() => getRandomIndex());
    
    const handleRestart = () => {
    reset(); 
    setIndex(getRandomIndex()); 
  };

  
  return (
    <div className="relative max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden h-auto p-10">
      <div className="flex justify-between ">
        <h1 className="text-slate-900 font-bold text-2xl md:text-3xl ">
          Tecт швидкості <br className="sm:hidden"/>друку 
        </h1>
      <Button handleRestart={handleRestart} reset={reset}/>
      </div>

  
   <Rezult timer={timer} isActiveToggle={isActiveToggle} index={index}/>

    </div>
  );
}
