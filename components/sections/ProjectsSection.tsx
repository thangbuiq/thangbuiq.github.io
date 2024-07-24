import SearchAllProjects from '../content/SearchAllProjects';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';

const myGithub = 'https://github.com/thangbuiq';

const ProjectsSection = () => {
  return (
    <SectionContainer>

      <div className='w-full flex flex-col gap-6'>

        <TitleSectionPageContainer title='Projects' />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          <p className='w-full text-base text-gray-400'>
          These are some of the projects I've worked on since I started coding. They include things I've done for fun, for work, and to practice my skills. If you want to check out everything I've done, head over to my GitHub page at <a href={myGithub} target='_blank' rel='noopener noreferrer' className='text-white hover:underline transition-all ease'>github.com/thangbuiq</a>. I'd love to hear what you think!
          </p>

        </AnimationContainer>

        <SearchAllProjects />

      </div>

    </SectionContainer>
  )
}

export default ProjectsSection;