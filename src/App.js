import React, { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  });

  return (
    <video ref={ref} src={src} loop playsInline style={{ maxWidth: '600px' }} />
  );
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <button
        className="btn btn-primary m-10"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <div>
        <VideoPlayer
          isPlaying={isPlaying}
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
      </div>
    </>
  );
}
