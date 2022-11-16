import React from 'react';
import Link from 'next/link';

const Articles = ({name,type,id,value}) => {
  return (<>
    <div className='pt-72'>
      <h1 className='flex justify-center text-4xl font-bold '><span className=' border-b-8 border-indigo-500 '>ARTICLES</span></h1>
    </div>

    <div>
            <div className="max-w-sm scale-90 hover:scale-[1] transitionall h-[320px] font-prosans relative w-[300px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="pt-4 rounded-t-lg h-[300px] w-full object-cover" src="https://imgs.search.brave.com/Ei7Dig_GI4Lx-t7-Shzj6DMssKA2WVriSsemJLvEoQA/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9ncmVh/dHBlb3BsZWluc2lk/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjAvMDIvbWVu/dGFsLWhlYWx0aC5q/cGc" alt="cover" />
                </a>
                <div className="p-5">
                    <a href="#" className='flex mb-2 items-center justify-between'>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {name}
                        </h5>
                        
                    </a>
                    <div className='flex justify-between items-center'>
                        <p className='text-sm'>{type}</p>
                        <p className=" text-gray-700 text-xl  dark:text-gray-400 self-center -bottom-4 left-[64%] p-[.4545rem]  dark-shadows rounded-xl">
                         {value} MENTAL HEALTH
                         </p>
                        </div>
                   
                        <Link href="#   " >
                            <div className='absolute transitionall cursor-pointer bg-white self-center -bottom-3 left-[34%] p-[.4545rem] px-6 dark-shadows rounded-xl'>
                            View
                            </div>
                        </Link>
                       
                    
                </div>
            </div>

        </div>
    </>
  );
}

export default Articles;
