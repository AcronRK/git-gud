import ReactPlayer from 'react-player/youtube';

type Props = {
  url: string
}

const VideoPlayer = ({ url }: Props) => {
  return (
      <div className='relative'> {/* Set max width to prevent excessive stretching */}
        <ReactPlayer
          url={url}
          width='100%'    
        />
      </div>
  )
}

export default VideoPlayer;
