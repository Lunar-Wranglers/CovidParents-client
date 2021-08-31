import React, { useRef } from 'react'

import './videoPlayer.scss'
import video from '../../assets/video.mp4'
import useVideoPlayer from './useVideoPlayer'

const VideoPlayer = () => {
  const videoElement = useRef(null)
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement)
  return (
    <div className="container">
      <div className="video-wrapper">
        <video
          src={video}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />
        <div className="controls">
          <div className="actions">
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? (
                <i className="bx bx-play"></i>
              ) : (
                <i className="bx bx-pause"></i>
              )}
            </botton>
          </div>
          <input
            type='range'
            min='0'
            max='100'
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
          />
          <select
            className="velocity"
            value={playerState.speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option value='0.50'>0.50x</option>
            <option value='1'>1x</option>
            <option value='1.25'>1.25x</option>
            <option value='1.50'>1.50x</option>
            <option value='1.75'>1.75x</option>
            <option value='2.0'>2.0x</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer