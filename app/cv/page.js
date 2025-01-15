import Tabs from '@/components/Tabs/Tabs';
import { getIcon } from '@/functions/getIcon';

const CV = () => {
    const keywords = [
        'Javascript', 'Node.js', 'SQL', 
        'MongoDB', 'Express.js', 'HTML', 
        'CSS', 'SASS', 'JQuery', 'ReactJS', 
        'Angular', 'Vue', 'Bootstrap', 
        'Redux', 'Socket.io', 'Adobe XD', 
        'NextJS', 'Gatsby', 'Firebase', 
        'Mongoose', 'Chart.js', 'Material UI', 
        'JIRA', 'GIT', 'Zeplin'];

    const tabLabels = ['Profile', 'Skills', 'History'];
    const tabContents = [
      <div key='tab1'>
        <p>
            A seasoned Full-Stack Developer with a strong command of JavaScript, HTML, CSS, and a deep proficiency in modern web frameworks like React, Angular, and Vue. His expertise extends to creating scalable, maintainable solutions and adhering to best practices across diverse platforms. 
        </p>
        <p>
            An academic foundation in Computer Science from Western Michigan University, Telecommunications from Michigan State University, and Advanced Software Engineering from Operation Spark.
        </p>
      </div>,
      <div key='tab2'>
        <div className='skill-grid'>
            {keywords.map(item => {
                return <p key={item} style={{textAlign: 'center'}}>{getIcon(item)}<br />{item}</p>
            })}
        </div>
      </div>,
      <div key='tab3'>
            <h2><b>IBM</b></h2>
            <h4>AEP.com (<i>Mar 2023 - Dec 2024</i>)</h4>
            <p>
                I specialized in creating web-responsive, reusable, and interactive components 
                using NextJS. These components, which are integral to the AEP.com website 
                (all of them), included dynamic tables with complex filtering and multiple size 
                variations, as well as interactive cards, forms, and graphs, all designed to be 
                adaptable across different devices and browser sizes. 
            </p>
            <p>
                To keep dependencies low and ensure optimal performance, I created custom 
                components tailored to project requirements, reducing reliance on third-party 
                libraries. I also developed a comprehensive style guide to ensure proper use 
                and capabilities of the components, complete with detailed demos, open code, 
                and documentation for all variations. 
            </p>
            <p>
                Many of these components interfaced seamlessly with internal APIs to deliver 
                dynamic, data-driven functionality. Working closely with the Visual Design (VD) 
                team, I received mockups via Zeplin and translated them into functional 
                components, ensuring the final implementation aligned with the design vision. 
                Additionally, I proactively identified and resolved any design discrepancies, 
                offering practical solutions to enhance usability and meet project requirements 
                via Jira, Microsoft Teams, and our daily standup routines.
            </p>

            <h4>Learning & Knowledge (<i>Mar 2021 - Oct 2023</i>)</h4>
            <p>
                Over the course of three years and across 25+ projects, I independently developed complete learning courses using technologies such as Carbon/Gatsby, ReactJS, NextJS, HTML, CSS, JavaScript, and L&K's proprietary framework, which was newly introduced at the time. These courses often required the creation of custom, interactive, and responsive web components to enhance the learning experience, including crossword puzzles, quizzes and tests that also included PDF support for saved user data and responses, and other educational games. Additionally, I integrated various types of internal and external module tracking systems through L&K LT-ID.
            </p>
            <p>
                I collaborated closely with a designer and a Learning Experience Designer 
                (LED), often working directly with a single individual in these roles. I maintained 
                regular communication with clients, providing progress updates and 
                participating in standups to ensure alignment via Slack and Webex. Beyond 
                development, I offered guidance on component functionality, page formatting, 
                and overall aesthetic improvements to optimize both user experience and visual 
                appeal. I also helped other UI developers from across the portfolio to 
                accomplish their goals.
            </p>

            <h4>New York Department of Labor(<i>May 2020 - Mar 2021</i>)</h4>
            <p>
                Provided support for New York Department of Labor unemployment claims 
                including both regular unemployment and pandemic unemployment assistance. 
                Assisted claimants in resolving issues with their claims, ensuring timely and 
                accurate processing. Proactively identified weaknesses in the legacy system 
                and contributed to addressing them, improving overall efficiency and claimant 
                experience.
            </p>

            <h2><b>Operation Spark</b></h2>
            <h4>Teacher Assistant (<i>Oct 2019 - Mar 2020</i>)</h4>
            <p>
                Guide students in mastering JavaScript by providing clear explanations, 
                practical examples, and hands-on exercises. Foster problem-solving skills by 
                helping them debug code, understand core concepts like closures, 
                asynchronous programming, and DOM manipulation, and design efficient 
                solutions for real-world scenarios. Encourage collaborative learning through 
                peer code reviews and discussions, empowering them to confidently develop 
                and refine their JavaScript skills.
            </p>

            <h4>Mise en Place (<i>Oct 2019 - Oct 2019</i>)</h4>
            <p>
                Developed a Progressive Web App (PWA) for bar inventory management using 
                Angular 8, Firebase, Raspberry Pi with a Python API, OCR, Postgres, and 
                Ignite UI. Designed and implemented the front-end interface while also 
                developing a liquid displacement API leveraging the Raspberry Pi to measure 
                the weight of bottles placed on a scale. Data was processed with Python and 
                transmitted seamlessly to the front-end client for real-time updates.
            </p>
      </div>
];

    return (
        <div className='page-container fade-in'>
            <h2 className='page-title'>CV</h2>
            <hr />
        
            <a href='@/documents/Nicholas_Kolodziej-CV-2025.pdf' download><button>Download PDF</button></a>
       
            <Tabs tabLabels={tabLabels} tabContents={tabContents} />
        </div>
    )
}

export default CV;

