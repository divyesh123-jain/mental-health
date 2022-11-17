import React from 'react';
import Link from 'next/link';

const Articles = ({name,type,id,value}) => {
  return (<>
    <div className='pt-72'>
      <h1 className='flex justify-center text-4xl font-bold '><span className=' border-b-8 border-indigo-500 '>ARTICLES</span></h1>
    </div>

    <div className='flex gap-20 '>
            <div className="max-w-sm scale-90 hover:scale-[1] transitionall h-[320px] font-prosans relative w-[300px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  ">
                <a href="https://www.health.harvard.edu/topics/mental-health">
                    <img className="pt-4 rounded-t-lg h-[300px] w-full object-cover" src="https://imgs.search.brave.com/Ei7Dig_GI4Lx-t7-Shzj6DMssKA2WVriSsemJLvEoQA/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9ncmVh/dHBlb3BsZWluc2lk/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjAvMDIvbWVu/dGFsLWhlYWx0aC5q/cGc" alt="cover" />
                </a>
                <div className="p-5">
                    <a href="#" className='flex mb-2 items-center justify-between'>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {name}
                        </h5>
                        
                    </a>
                        <Link href="https://www.health.harvard.edu/topics/mental-health" >
                            <div className='absolute transitionall cursor-pointer bg-white self-center -bottom-3 left-[34%] p-[.4545rem] px-6 dark-shadows rounded-xl'>
                            View
                            </div>
                        </Link>
                           <p className='mx-7 font-bold'>WHAT IS MENATL HEALTH <span className='mx-9'>- by HARVARD</span></p>
                    
                </div>
            </div>


            <div className="max-w-sm scale-90 hover:scale-[1] transitionall h-[320px] font-prosans relative w-[300px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                <a href="https://www.health.harvard.edu/newsletter_article/sleep-and-mental-health"> 
                        <img className="pt-4 rounded-t-lg h-[300px] w-full object-cover" src="https://imgs.search.brave.com/jQkvMHrVmK51sV4Rs2ez66jArRZPe5EtJ36QflLLqGo/rs:fit:1200:640:1/g:ce/aHR0cDovL3dvbmRy/bHVzdC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMTIv/U2xlZXAtYW5kLU1l/bnRhbC1IZWFsdGgt/MTI4MHg2NDAuanBn" alt="cover" />
                </a>
                <div className="p-5">
                    <a href="#" className='flex mb-2 items-center justify-between'>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {name}
                        </h5>
                        
                    </a>
                        <Link href="https://www.health.harvard.edu/newsletter_article/sleep-and-mental-health" >
                            <div className='absolute transitionall cursor-pointer bg-white self-center -bottom-3 left-[34%] p-[.4545rem] px-6 dark-shadows rounded-xl'>
                            View
                            </div>
                        </Link>
                           <p className='mx-7 font-bold'>Sleep And Mental Health <span className='mx-9'>- by HARVARD</span></p>
                    
                </div>
            </div>


            <div className="max-w-sm scale-90 hover:scale-[1] transitionall h-[320px] font-prosans relative w-[300px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                <a href="https://www.health.harvard.edu/blog/nutritional-psychiatry-your-brain-on-food-201511168626"> 
                        <img className="pt-4 rounded-t-lg h-[300px] w-full object-cover" src="https://imgs.search.brave.com/DSSWYY4RU-3l7gdvi2CEQLvcl9Q3AGUlYXzPoa2eO64/rs:fit:1200:1003:1/g:ce/aHR0cHM6Ly93d3cu/c3RwYXRyaWNrcy5p/ZS9tZWRpYS8yMTM3/L2Zvb2QtZm9yLW1l/bnRhbC1oZWFsdGgu/anBn" alt="cover" />
                </a>
                <div className="p-5">
                    <a href="#" className='flex mb-2 items-center justify-between'>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {name}
                        </h5>
                        
                    </a>
                        <Link href="https://www.health.harvard.edu/blog/nutritional-psychiatry-your-brain-on-food-201511168626" >
                            <div className='absolute transitionall cursor-pointer bg-white self-center -bottom-3 left-[34%] p-[.4545rem] px-6 dark-shadows rounded-xl'>
                            View
                            </div>
                        </Link>
                           <p className='mx-8 font-bold'>Nutritional psychiatry <span className='mx-9'>- by HARVARD</span></p>
                    
                </div>
            </div>


            
            <div className="max-w-sm scale-90 hover:scale-[1] transitionall h-[320px] font-prosans relative w-[300px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="https://fherehab.com/learning/relationship-red-flag-mental-health"> 
                        <img className="pt-4 rounded-t-lg h-[300px] w-full object-cover" src="https://imgs.search.brave.com/ACpA6_tX2lfiE4Yqv0sVrsEJ-N6ely0zDIkj82IBilE/rs:fit:1000:667:1/g:ce/aHR0cHM6Ly93aGl0/ZXNhbmRzdHJlYXRt/ZW50LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOS8wMS9U/aGUtUmVsYXRpb25z/aGlwLUJldHdlZW4t/TWVudGFsLUhlYWx0/aC1hbmQtQWRkaWN0/aW9uLmpwZw  " alt="cover" />
                </a>
                <div className="p-5">
                    <a href="#" className='flex mb-2 items-center justify-between'>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {name}
                        </h5>
                        
                    </a>
                        <Link href="https://fherehab.com/learning/relationship-red-flag-mental-health" >
                            <div className='absolute transitionall cursor-pointer bg-white self-center -bottom-3 left-[34%] p-[.4545rem] px-6 dark-shadows rounded-xl'>
                            View
                            </div>
                        </Link>
                           <p className='mx-8 font-bold'>Relationships and Mental Health <span className='mx-9'>- by HARVARD</span></p>
                    
                </div>
            </div>

            


            </div>
            <div className='pt-12 align text-center'>
                <button className='rounded-full font-bold bg-blue-600 w-20'>View More</button>
            </div>
    </>
  );
}

export default Articles;
