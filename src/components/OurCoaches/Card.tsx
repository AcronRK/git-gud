import React from 'react'
import VideoPlayer from './VideoPlayer';
import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {
    videoSide: string; // left or right
    player: string;
    title: string;
    description: string;
    url: string;
}

const Card = ({videoSide, player, title, description, url}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1180px")
  let getFlexVideoside = ""
  if(isAboveMediumScreens){
    getFlexVideoside = (videoSide === "left" ? "flex" : "flex flex-row-reverse");
  }else{
    getFlexVideoside = " flex flex-col-reverse"
  }
  
  return (
    <div>
        <div className={`${getFlexVideoside} my-16 md:pb-20 md:gap-48 justify-between`} >
            {/* video player */}
            <div className='my-10'>
                <VideoPlayer 
                    url={url}
                />
            </div>

            {/* description */}
            <div className='flex flex-col justify-center text-center'>
                <h1 className='font-bold text-[120px] font-roboto tracking-widest text-red-500'>{player.toUpperCase()}</h1>
                <p className='font-bold text-[60px] font-roboto tracking-wider'>{title}</p>
                <p className='text-[20px] font-roboto'>{description}</p>
            </div>
        </div>
        
    </div>
  )
}

export default Card