"use client"

import { useRouter } from "next/navigation";



export default function Home() {
  const router = useRouter()

  const handlechange = ()=>{
    router.push('/dashboard')
  }
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
     
      welcome to this website 
      <button onClick={handlechange}>dashboard</button>
    </div>
  );
}
