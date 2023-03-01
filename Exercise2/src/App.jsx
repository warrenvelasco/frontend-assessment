import React, { useState, useEffect, useMemo } from 'react'
import Container from 'react-bootstrap/Container';
import DesktopTabs from './components/DesktopTabs';
import MobileAccordion from './components/MobileAccordion';
import data from './assets/data/data.json'

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

  const renderData = useMemo(() => data, [data]);

  return (
    <Container className='p-4'>
      {!isMobile && <DesktopTabs data={renderData} />}
      {isMobile && <MobileAccordion data={renderData} />}
    </Container>
  )
}

export default App