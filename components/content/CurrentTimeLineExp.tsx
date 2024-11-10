import { Timeline, TimelineEvent } from './TimeLineExp';

export function calculateDuration(
  startDate: string,
  showMonths: boolean
): string {
  const start: Date = new Date(startDate);
  const now: Date = new Date();
  const diff: number = now.getTime() - start.getTime();
  const diffDate: Date = new Date(diff);
  const years: number = diffDate.getUTCFullYear() - 1970;
  const months: number = diffDate.getUTCMonth();

  if (years === 1 && months === 0) {
    return '1 year';
  } else if (!showMonths) {
    return `${years} years`;
  } else {
    return `${years} yr ${months} mos`;
  }
}

const CurrentTimeLineExp = () => {
  return (
    <Timeline>
      <TimelineEvent active>
        <TimelineEvent.Title>
          <p className="font-semibold">
            Full-time Mid-level Full Stack Engineer
          </p>
        </TimelineEvent.Title>
        <TimelineEvent.Description>
          <a
            href="https://poplarhomes.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-all ease underline"
          >
            Poplar Homes
          </a>{' '}
          | Nov 2022 - Present
        </TimelineEvent.Description>
        <TimelineEvent.Description>
          As a mid-level full stack engineer at Poplar Homes, I've been pivotal
          in refining key aspects of our platform. I've focused on improving
          move-in and renewal processes, introducing multi-banking support in
          owners’ portal, and enhancing accounting with improved PayNow for
          one-time payments and AutoPay for scheduled transactions.
          Collaborating closely with product managers, project managers, UX
          writers, designers, QA engineers, data engineers, and devops, I've
          ensured seamless integration of these features. While not leading
          initiatives directly, my collaborative approach has played a crucial
          role in translating ideas into tangible improvements. Additionally,
          I've contributed to on-demand reports, providing valuable insights for
          informed decision-making. My role underscores a commitment to
          technical excellence and enhancing the user experience in critical
          areas of our Prop-tech platform.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          <p className="font-semibold">Remote Full Stack Developer</p>
        </TimelineEvent.Title>
        <TimelineEvent.Description>
          <a
            href="https://empowerwealth.com.au/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-all ease underline"
          >
            Empower Wealth
          </a>{' '}
          | Jun 2021 - Nov 2022
        </TimelineEvent.Description>
        <TimelineEvent.Description>
          I was an integral part of a highly skilled remote developer team at
          Empower Wealth, a leading Property and Financial Investment Advisor
          company in Australia. Engaged in the client portal project, we
          leverage cutting-edge MERN-stack and GraphQL technologies to deliver
          innovative solutions. My role involved collaborative efforts within
          the team to ensure the seamless integration of these technologies,
          contributing to the success of this impactful project for Empower
          Wealth.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          <p className="font-semibold">Remote React Native Developer</p>
        </TimelineEvent.Title>
        <TimelineEvent.Description>
          <a
            href="https://oi-you.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-all ease underline"
          >
            Oi Group
          </a>{' '}
          | Jan 2021 - April 2021
        </TimelineEvent.Description>
        <TimelineEvent.Description>
          Independently crafted the Rewind mobile app utilizing React Native
          technology, showcasing my proficiency and capability to deliver a
          robust and innovative application.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent last>
        <TimelineEvent.Title>
          <p className="font-semibold">Full-time Full Stack Developer</p>
        </TimelineEvent.Title>
        <TimelineEvent.Description>
          <a
            href="https://www.usep.edu.ph/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-all ease underline"
          >
            University of Southeastern Philippines
          </a>{' '}
          | Aug 2019 - Aug 2021
        </TimelineEvent.Description>
        <TimelineEvent.Description>
          Executed pivotal projects at the University, including the creation of
          the Student Portal, feedback system, and enrollment solutions.
          Notably, I developed UDAS, a document archiving system for university
          accreditations, recognized as a finalist in Gawad Edukampyon 2021.
          Employing Python-Django, ReactJS, ExpressJS, and MySQL, these projects
          exemplify my comprehensive skills in delivering multifaceted
          solutions.
        </TimelineEvent.Description>
      </TimelineEvent>
    </Timeline>
  );
};

export default CurrentTimeLineExp;
