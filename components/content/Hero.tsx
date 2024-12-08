import Image from 'next/image';
import AnimationContainer from '../utils/AnimationContainer';

const Hero = () => {
  return (
    <div className='w-full flex justify-between flex-col-reverse lg:flex-row items-center'>

      <AnimationContainer customClassName='flex flex-col items-center justify-between lg:items-start p-0 lg:pr-8'>

        <h1 className='font-bold text-3xl lg:text-5xl text-center lg:text-start tracking-tight mb-3 text-white mx-auto lg:mx-0'>
          Thang Q. Bui
        </h1>

        <h2 className='flex items-center gap-1 text-1xl lg:text-1xl text-gray-200 mb-8 mx-auto lg:mx-0'>

          <span className='font-semibold'>Big Data</span>Engineer

        </h2>

      </AnimationContainer>

      <AnimationContainer customClassName='w-[80px] sm:w-[200px] relative mb-6 lg:mb-0'>
        <Image
          alt='Thang Q. Bui'
          height={200}
          width={200}
          src='/face.png'
          sizes='30vw'
          priority
          className='rounded-[50%] hover:grayscale transition-all ease'
        />
      </AnimationContainer>

    </div>
  )
}

export default Hero;