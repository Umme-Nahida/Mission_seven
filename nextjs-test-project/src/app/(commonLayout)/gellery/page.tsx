import Image from 'next/image';
import React from 'react';

const Gellery = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-y-5'>
            <h1>this is Gellery</h1>
            <img 
            src="https://images.unsplash.com/photo-1749680920901-03fd16468019?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            width={500}
            height={300}
            alt="" />

            <h1>Image tag of next.js</h1>
            <Image 
            src={"https://images.unsplash.com/photo-1749680920901-03fd16468019?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            alt=''
            width={500}
            height={500}/>
        </div>
    );
};

export default Gellery;