import React, { useState } from 'react';

import { IoMdMenu } from "react-icons/io";


const names=[
  {
    id:1,
    title:"Home",
    path:"#home",
  },
  {
    id:2,
    title:"About",
    path:"#about",
  },
  {
    id:3,
    title:"Contact",
    path:"#foot",

  }
]


const Navbar = () => {
  const[open,setOpen]=useState(false);
  return (
    
    <>
    <div className='flex justify-between px-10 py-2 bg-black text-white 
    '>
          <h1>To-Do List

          </h1>
          <ul className='flex gap-6 max-lg:hidden  '>
        {names.map((name,index)=>(
           <li key={index}><a href={name.path}>{name.title}</a></li>
        ))}
     
     </ul>

      <button onClick={()=>setOpen(!open)}> <IoMdMenu className='lg:hidden'/></button>
    
    </div>
    {open&&<ul className=' gap-4 flex flex-col bg-black text-white p-5 '>
        {names.map((name,index)=>(
           <li key={index}>{name.title}</li>
        ))}
     
     </ul>}
    </>
  );
};

export default Navbar;