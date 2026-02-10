"use client"
import {RefreshCw} from "lucide-react";

interface ButtonProps{
  reset:()=>void
  handleRestart:() => void
}
export default function Button({handleRestart,reset}:ButtonProps) {


  return (
    <button className="flex justify-between items-center  bg-blue-500 rounded-sm  text-white text-md w-40 p-3 hover:bg-blue-400 hover:scale-95 transition duration-500 ease-in-out "
    onClick={()=>{ handleRestart()
    }}>
      <RefreshCw size={23} /> Новий текст{" "}
    </button>
  );
}
