"use client"
import {RefreshCw} from "lucide-react";

interface ButtonProps{
  reset:()=>void
  handleRestart:() => void
}
export default function Button({handleRestart,reset}:ButtonProps) {


  return (
    <button className="flex  items-center gap-1 md:gap-3 h-1/2  bg-blue-500 rounded-sm text-sm  text-white sm:text-md  md:w-36 p-2 sm:p-3  hover:bg-blue-400 hover:scale-98 transition duration-500 ease-in-out "
    onClick={()=>{ handleRestart()
    }}>
      <RefreshCw size={20} /> Новий текст
    </button>
  );
}
