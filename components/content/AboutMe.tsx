import AnimationContainer from '../utils/AnimationContainer';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16'>

      <h2 className='font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        About me
      </h2>

      <p className='text-base text-gray-400'>
        I am an <b>AI Engineer</b> with a data-driven mindset, a deep passion for technology, and an eagerness to learn. I possess experience in developing and deploying AI models across diverse domains, including computer vision, natural language processing, and reinforcement learning.
      </p>

    </AnimationContainer>
  )
}

export default AboutMe;