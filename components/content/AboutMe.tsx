import AnimationContainer from '../utils/AnimationContainer';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16'>

      <h2 className='font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        About me
      </h2>

      <p className='text-base text-gray-400'>
        I am a <b>Big Data Engineer</b> with a data-driven mindset and a deep passion for technology. I enjoy learning new things and have experience building and deploying scalable data pipelines and big data solutions. I've worked in areas like distributed computing and data warehousing.
      </p>

    </AnimationContainer>
  )
}

export default AboutMe;