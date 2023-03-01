import React, { useState, useEffect } from 'react'
import ContentImage from './components/ContentImage'

import desktopBanner from './assets/1920x650.png'
import mobileBanner from './assets/600x600.png'

const App = () => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setDeviceWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = deviceWidth <= 768;

  return (
    <>
      <div
        className='bg-neutral-400 bg-blend-multiply flex flex-col items-center justify-center h-[350px] bg-cover bg-no-repeat bg-center text-center p-4 md:p-0 md:h-[500px]'
        style={{ backgroundImage: isMobile ? `url(${mobileBanner})` : `url(${desktopBanner})` }}>
        <h1 className='text-5xl font-bold text-white mb-5 tracking-wider'>Hello Developer!</h1>
        <p className='text-white text-3xl tracking-wider'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] max-w-screen-lg mx-auto gap-8 mt-8 p-6 xl:p-0 !pb-20">
        <ContentImage />
      </div>
    </>
  )
}

export default App