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
            Nicholas Kolodziej brings a wealth of expertise as a Full-Stack Developer, showcasing a robust proficiency in Javascript, HTML, and CSS, along with a diverse skill set encompassing prevalent web practices and platforms such as React, Angular, and Vue.
        </p>
        <p>
            His educational background includes studies in Computer Science at Western Michigan University, Telecommunications at Michigan State University, and Advanced Software Engineering at Operation Spark.
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
                My main responsibility in the AEP.com redesign was to develop reusable interactive components in Next.js, which could be utilized throughout the website. These components were created based on wireframes and mockups provided by the visual design team through Zeplin.
            </p>

            <h4>Learning & Knowledge (<i>Mar 2021 - Oct 2023</i>)</h4>
            <p>
                My role as UI developer on these (25) projects was to engineer a learning course based on wireframes/mockups provided by LED/VD using LK Components UI kit (Javascript, HTML, and CSS) or by Gatsby/Carbon framework and ReactJS.
            </p>
            <p>
                Courses generally required design and implementation of custom components, module tracking via L&K LT-ID, communicate and offer solutions to discrepancies within design, and implementing updates from variety of sources.
            </p>

            <h4>New York Department of Labor(<i>May 2020 - Mar 2021</i>)</h4>
            <p>
                Assisted in NY DOL unemployment claims. Processed regular unemployment and pandemic unemployment. Helped claimants resolve problems with claims. Identified and helped address weakpoints in the legacy system.
            </p>

            <h2><b>Operation Spark</b></h2>
            <h4>Teacher Assistant (<i>Oct 2019 - Mar 2020</i>)</h4>
            <p>
                Help guide students towards solutions using Javascript. Also worked as a resource for Operation Spark students to reach out to for matters reguarding Javascript/React/Angular via Slack.
            </p>
            <h4>Mise en Place (<i>Oct 2019 - Oct 2019</i>)</h4>
            <p>
                Developed bar inventory PWA using Angular 8, Firebase, Raspberry Pi w/ Python API, OCR, Postgres, and Ignite UI.
            </p>
            <p>
                I completed the front-end aspects as well as implemented the liquid displacement API using Raspberry Pi to obtain weight pf a bottle placed on a scale and Python to transmit back to front-end client.
            </p>
      </div>
];

    return (
        <div className='page-container fade-in'>
            <h2 className='page-title'>CV</h2>
            <hr />
        
            <a href='@/documents/Nicholas_Kolodziej-CV-1-2025.pdf' download><button>Download PDF</button></a>
       
            <Tabs tabLabels={tabLabels} tabContents={tabContents} />
        </div>
    )
}

export default CV;

