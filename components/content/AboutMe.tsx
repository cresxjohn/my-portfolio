import AnimationContainer from '../utils/AnimationContainer';
import { calculateDuration } from './CurrentTimeLineExp';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start">
        About me
      </h2>

      <p className="text-base text-gray-400">
        I'm a seasoned and passionate Full Stack Engineer with a knack for
        crafting impactful web applications and websites with over +
        {calculateDuration('2019-08-01', false)} of industry experience. From
        startups to corporate giants and government institutions, my versatile
        experience speaks volumes. <br />
        <br />
        - Proficient in MERN/PERN stack and GraphQL
        <br />
        - Can craft intuitive user interfaces and experiences
        <br />
        - Experienced in React Native development
        <br />
        - Adept at full project management lifecycle
        <br />
        - Communication is my cornerstone; let's stay connected for success!
        <br />
        <br />
        Eager to elevate your business through technology? I'm here to turn your
        aspirations into reality.
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
