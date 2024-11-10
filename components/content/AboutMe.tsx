import AnimationContainer from '../utils/AnimationContainer';
import { calculateDuration } from './CurrentTimeLineExp';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start">
        About me
      </h2>

      <div className="text-base text-gray-400 flex flex-col gap-4">
        <p>
          With over {calculateDuration('2019-08-01', false)}+ years of industry
          experience, I’ve transformed ideas into impactful web applications for
          startups, corporate leaders, and government organizations alike. I
          thrive on building solutions that are intuitive, efficient, and
          user-focused.
        </p>
        <p>
          Skilled in MERN/PERN stack and GraphQL, I handle everything from
          backend databases to frontend frameworks seamlessly. Creating clean,
          engaging user interfaces is a passion of mine, ensuring that users
          stay connected and engaged. My expertise in React Native extends to
          crafting cross-platform mobile applications, and I’m well-versed in
          Agile environments that keep projects dynamic and responsive.
        </p>
        <p>
          Above all, I value clear, proactive communication—collaboration is key
          to every project’s success. Let’s connect and explore how I can help
          take your business to the next level with technology!
        </p>
      </div>
    </AnimationContainer>
  );
};

export default AboutMe;
