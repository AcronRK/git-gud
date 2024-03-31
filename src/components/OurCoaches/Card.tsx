import VideoPlayer from './VideoPlayer';
import useMediaQuery from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion'

type Props = {
    videoSide: string; // left or right
    player: string;
    title: string;
    description: string;
    url: string;
}

const Card = ({videoSide, player, title, description, url}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1180px")
  let getFlexVideoside:string;
  let direction:number;
  if(isAboveMediumScreens){
    getFlexVideoside = (videoSide === "left" ? "flex" : "flex flex-row-reverse");
  }else{
    getFlexVideoside = " flex flex-col-reverse";
  }

  direction = (videoSide === "left" ? -1 : 1)
  
  return (
    <div>
        <div className={`${getFlexVideoside} my-16 md:pb-20 md:gap-48 justify-between`} >
            {/* video player */}
            <motion.div 
              className='my-10 md:basis-4/5'
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              transition={{duration: 1}}
              variants={{
                  hidden: { opacity: 0, x: direction*20 },
                  visible: { opacity: 1, x: 0}

              }}
            >
                <VideoPlayer 
                    url={url}
                />
            </motion.div>

            {/* description */}
            <motion.div 
              className='md:flex md:flex-col justify-center text-center'
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              transition={{duration: 1}}
              variants={{
                  hidden: { opacity: 0, x: -direction*20 },
                  visible: { opacity: 1, x: 0}

              }}
              >
                <h1 className='font-bold md:text-[120px] text-[90px] font-roboto tracking-widest text-red-500'>{player.toUpperCase()}</h1>
                <p className='font-bold md:text-[60px] text=[40px] font-roboto tracking-wider'>{title}</p>
                <p className='text-[20px] font-roboto'>{description}</p>
            </motion.div>
        </div>
        
    </div>
  )
}

export default Card