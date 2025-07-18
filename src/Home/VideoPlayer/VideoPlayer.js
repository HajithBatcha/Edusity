import React from 'react'
import './VideoPlayer.css'
import video from '../../images/'


export default function VideoPlayer() {
  return (
    <div className='video-player'>
      <video src={video}></video>
    </div>
  )
}
