"use client"
import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoIds }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoEnd = () => {
    if (currentVideoIndex < videoIds.length - 1) {
      setCurrentVideoIndex((prevIndex) => prevIndex + 1);
    } else {
      // Video queue is finished
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    setIsPlaying(true); // Start playing the queue when component mounts
  }, []);

  return (
    <div>
      {isPlaying && (
        <YouTube
          videoId={videoIds[currentVideoIndex]}
          opts={{
            height: '920',
            width: '1660',
            playerVars: {
                autoplay: 1,
                modestbranding: 1,
                controls: 0,
            },
          }}
          onEnd={handleVideoEnd}
        />
      )}
    </div>
  );
};

export default VideoPlayer;