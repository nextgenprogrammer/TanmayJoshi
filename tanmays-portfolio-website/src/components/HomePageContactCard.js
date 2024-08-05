import React from 'react'
import ProPic from '../images/Profilepic.png'

const HomePageContactCard = () => {
    return(
        <div className='ml-60 flex ...'>
            <div className='border-2 border-white rounded-full'>
                <img src={ProPic} height={150} width={150}/>
            </div>
            <div className='ml-20 mt-10 m3 grid-cols-6 text-base font-serif float-right'>
                <p className='text-3xl color text-orange-400'> Tanmay Joshi</p><br/> 
                <p className='text-1xl float-left text-cyan-50 italic'>  Principal Architect</p><br/> 
            </div>
        </div>
    );
}


export default HomePageContactCard;