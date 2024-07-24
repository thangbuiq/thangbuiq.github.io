import AnimationContainer from '../utils/AnimationContainer';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16'>

      <h2 className='font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        About me
      </h2>

      <p className='text-base text-gray-400'>
        I am a <b>Data Engineer</b> with a data-driven mindset, a deep passion for technology. I enjoy learning new things and have experience building and deploying AI models and data pipelines. I've worked in areas like computer vision, natural language processing, and reinforcement learning.
      </p>

    </AnimationContainer>
  )
}

export default AboutMe;