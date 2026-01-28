import React from "react";
import { useState, useRef } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVDORef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const upcomingVDOIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVidClick = () => {
    setHasClicked(true);

    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  const getVideosrc = (index) => `videos/VDO-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div
            className="mask-clip-path absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
  z-50 size-64 cursor-pointer overflow-hidden rounded-lg"
          >
            <div
              onClick={handleMiniVidClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVDORef}
                src={getVideosrc(upcomingVDOIndex)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>

          <video
            ref={nextVDORef}
            src={getVideosrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 invisible absolute z-20 size-64 object-cover object-center"
          />
          <video
            src={getVideosrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex,
            )}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          Project Moon
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              K<b>J</b>H Supremancy
            </h1>
            <div className="absolute left-0 top-0 z-40 size-full">
              <div className="mt-24 px-5 sm:px-10">
                <h1 className="special-font hero-heading text-blue-100">
                  K<b>J</b>H
                </h1>
                <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
                  GLORY TO PROJECT MOON!
                  <p>PM fans can't read</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
