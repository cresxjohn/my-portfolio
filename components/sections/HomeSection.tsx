import AboutMe from '../content/AboutMe';
import ContactMe from '../content/ContactMe';
import CurrentFavTech from '../content/CurrentFavTech';
import CurrentLearning from '../content/CurrentLearning';
import CurrentTimeLineExp, {
  calculateDuration
} from '../content/CurrentTimeLineExp';
import FavProjects from '../content/FavProjects';
import Hero from '../content/Hero';
import AnimationContainer from '../utils/AnimationContainer';
import { skills, techs } from '../utils/mySkills';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';

const HomeSection = () => {
  return (
    <SectionContainer>
      <Hero />

      <CurrentFavTech />
      {/* <CurrentLearning /> */}

      <div className="w-full flex flex-col items-start mt-16">
        <AboutMe />

        <CurrentTimeLineExp />

        {/* <FavProjects /> */}

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start">
            Skills
          </h2>

          <p className="text-base text-gray-400">
            An overview of the programming languages, libraries, and tools I've
            worked with. I began programming around{' '}
            {calculateDuration('2015-06-01', false)} ago, exploring various
            programming languages and technology stacks across both backend and
            frontend development.
          </p>

          <div className="flex flex-col items-start gap-3 mt-3">
            <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
              <ShowSkills skills={techs} />
            </AnimationContainer>
          </div>
        </AnimationContainer>

        <ContactMe />
      </div>
    </SectionContainer>
  );
};

export default HomeSection;
