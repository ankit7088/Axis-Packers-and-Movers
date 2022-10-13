import React from 'react'
import HomeImageGallery from './HomeImageGallery'
import { MdLocationOn } from "react-icons/md";
import {BsFillCalendarCheckFill} from "react-icons/bs";
import gradients from "../styles/customGradient.module.css";
import Lottie from "lottie-react";
import research from "../lottieFiles/research.json"
import {useRouter} from 'next/router';
import Map from './Map';
import TechCollabGallery from './TechCollabGallery';
import Sponsors from './Sponsors';

const HomeMain = () => {

  const router  = useRouter();

  const navigate = (dest)=>{
    router.push(dest);
  };

  return (
 <>
       <div className='h-[60vh] md:h-[95vh] mt-[55px] relative'>
        <HomeImageGallery/>
        <div className='absolute top-10 md:top-[20%] lg:top-[10%] xl:top-[20%] left-0 z-10 w-full md:w-[50%] lg:w-[50%] backdrop-blur-md md:border-2 md:pt-8 md:mx-4 rounded-2xl md:px-10'>
            <div className='font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-center md:text-left pt-4'>
                <span className='text-orange-400'>1st</span> <span className='text-white'>IEEE-International Conference on</span> <span className='text-orange-400'>Microwave</span> <span className='text-white'>, Antenna and</span> <span className='text-green-500'>Communication</span>
            </div>
          <div className='w-full my-12 pl-6 sm:pl-0 flex justify-center gap-4 lg:justify-start lg:gap-10 font-semibold  md:p-2'>
        
          <p className='flex items-center gap-3'>
          <span className='bg-purple-200 rounded-full p-[13px]'>
          <BsFillCalendarCheckFill className='w-3 h-3 md:w-5 md:h-5 text-lime-600'/>
          </span>
         <span className='text-sm lg:text-lg text-white'> March 24-26 , 2023</span></p>
         <p className='flex items-center justify-end gap-2'>
          <span className='bg-purple-200 rounded-full p-2'>
          <MdLocationOn className='w-5 h-5 md:w-8 md:h-8 text-blue-500'/>
          </span>
         <span className='text-sm lg:text-lg text-white'> MNNIT ALLAHABAD</span></p>
          </div>
        </div>
    </div>

    <div className={`w-full text-black ${gradients.homePage}`}>
    <section className="pt-6 w-full">
  <div className=" container mx-auto flex md:px-2 py-2 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 px-6 lg:pr-24 md:pr-16 relative flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      
      <h1 className="relative title-font text-4xl md:text-6xl mb-4 font-bold border-b-4 pb-4 px-8 md:px-0 md:pr-24 border-cyan-600">MAC2023
      </h1>
      <h2 className='text-lg'>
        <span>Organised at</span>
        <p><span className='text-orange-500 font-bold text-xl'>
        MNNIT ALLAHABAD, India 
        </span> in Technical Collaboration with <span className='text-red-600 font-bold text-xl'>Universite de Sherbrooke Canada<span className='text-black'> and</span> Benedict College , Columbia, USA</span></p>
      </h2>
      <br/>
      <p className="md:mb-8 leading-relaxed font-semibold text-lg">
    The 1st IEEE International Conference on Microwave, Antenna and Communication -MAC 2023 will be
    held in offline / hybrid mode at MNNIT ALLAHABAD in Sangam City - Prayagraj, U.P, India, during 
    March 24-26 , 2023.    
    The Conference aims to offer a platform for the researchers, academics , individuals working in the industry and startups to showcase thei researcg innovations, knowledge and vision.
    MAC2023 will include focused track in Young Professionals , Women in Engineering and SIGHT along with technical sessions on recent developments.
    </p>
 
      
    </div>
    
    <div className="w-full lg:w-[40%] bg-red-100">
      <img className="object-cover object-center" alt="hero" src="/conf.jpg"/>
    </div>
  </div>
</section>

<section id="callforpaper" className="body-font">
  <div className="container mx-auto flex px-2 py-12 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 order-last md:order-first mt-8 md:mt-0">
    <Lottie animationData={research} loop={true} />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <h1  className="title-font text-4xl md:text-[5vw] lg:text-6xl mb-4 font-bold border-b-4 pb-4 border-cyan-600">
    <span className='pr-6'>
    Call For Papers
    </span>
      </h1>
      <h2 className='text-orange-600 font-bold text-xl mb-6'>
        MICROWAVE , ANTENNA AND COMMUNICATION
      </h2>
      <p className='text-lg font-semibold'>
        The accepted and presented papers of the conference by duly registered authors will be submitted to IEEE Xplore Digital Library for possible publication after quick check.
      </p>
      <div className="my-8 leading-relaxed">
      <p className='text-lg'>
      The technical sessions will have four tracks covering all major and emerging areas of Microwave, Antenna and Communication. Every track will comprised with
        following events
      </p>
        <ul className='pl-6 font-semibold pt-4 text-left'>
            <li className='list-disc'>Paper Presentations and best paper awards</li>
            <li className='list-disc '>Poster Presentations and best poster awards</li>
            <li className='list-disc'>Key Note Lectures</li>
            <li className='list-disc'>Special Sesisons</li>
            <li className='list-disc'>Panel Discussions</li>
            <li className='list-disc'>Technical/Industrial Workshop</li>
        </ul>
        </div>
      <div className="flex gap-4 justify-center">
      <button className='btn btn-primary' onClick={()=>navigate('paperSubmission')}>Guidelines</button>
      <button className='btn btn-success font-semibold' onClick={()=>navigate('registration')}>Registration</button>
      </div>
    </div>
  </div>
</section>

<Map/>

<section className="p-6">
  <div className=" container mx-auto flex md:px-5 py-2 flex-col">
     <h1 className="relative title-font mb-4 font-bold border-b-4 pb-4 text-2xl md:text-4xl lg:pr-24 border-cyan-600 w-full md:w-[60%]">Technical Collaborators
      </h1>
    <TechCollabGallery/>
   <div className='bg-white my-4 rounded-lg'>
   <h1 className="relative w-full text-center text-xl sm:text-2xl md:text-3xl font-bold py-2 lg:py-4 mb-2 border-b-4 border-cyan-400">Technical Sponsors
      </h1>
    <div className='px-6'>
    <Sponsors/>
    </div>
   </div>
  </div>
</section>

    </div>
 </>
  )
}

export default HomeMain