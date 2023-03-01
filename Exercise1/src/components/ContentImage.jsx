// import { Link } from "react-router-dom";
import contentImage from '../assets/400x300.png'

const ContentImage = () => {
  const contentData = [
    {
      id: 1,
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: contentImage
    },
    {
      id: 2,
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: contentImage
    },
    {
      id: 3,
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: contentImage
    },
  ]

  return (
    <>
      {contentData.map(item => (
        <div key={item.id} className='p-6 border rounded-md shadow-sm'>
          <img className='rounded-md mx-auto' src={item.image} alt="Image Content" />
          <p className='mt-5 text-center'>{item.details}</p>
          <a className='border-[3px] border-black rounded-full font-bold mt-5 px-4 py-1.5 uppercase text-sm text-center block mx-auto max-w-[130px] tracking-wider' href='/'>Read More</a>
        </div>
      ))}
    </>
  )
}

export default ContentImage