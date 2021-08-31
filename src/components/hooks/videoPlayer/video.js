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
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer