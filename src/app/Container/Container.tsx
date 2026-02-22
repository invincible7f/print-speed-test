"use client"

import { time } from "console";
import Button from "../components/Button/Button";
import Rezult from "../components/Rezult/Rezult";
import { useTimer } from "./useTimer";
import { useState, useEffect  } from "react";
// ----------------------------------------------------------------
const getRandomIndex= ():number => Math.floor(Math.random() * 3);
export default function Container() {
  const{timer, isActiveToggle, reset} = useTimer(60)
    const [index,setIndex] = useState<number>(() => getRandomIndex());
    
    const handleRestart = () => {
    reset(); 
    setIndex(getRandomIndex()); 
  };

  //   const alert = (
  //   <div className="absolute left-1/2 w-80  bg-amber-100/50 p-5 flex flex-col justify-center items-center  z-50"> <div>
  //     <p>Час вийшов!</p>
  //     <button className="text-center">Ok</button>
  //     </div></div>

  // )

useEffect(() => {
    if (timer === 0) {
      alert("Час вийшов!");
      // Здесь можно вызвать reset(), если хотите сбросить игру сразу после алерта
    }
  }, [timer])
  return (
    <div className="relative max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden h-auto p-10">
      {/* {timer === 0 && alert} */}
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
