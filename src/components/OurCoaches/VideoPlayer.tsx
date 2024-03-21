import ReactPlayer from 'react-player/youtube';

type Props = {
  url: string
}

const VideoPlayer = ({ url }: Props) => {
  return (
    <div>
      <ReactPlayer
          url={url}
        />
    </div>
  )
}

export default VideoPlayer