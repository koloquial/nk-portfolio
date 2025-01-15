//icons
import { FaReact } from 'react-icons/fa';
import { FaChartPie } from 'react-icons/fa';
import { SiGooglefonts } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { SiMongoose } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiReactrouter } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { FaCalendarAlt } from 'react-icons/fa';
import { SiSocketdotio } from 'react-icons/si';
import { MdLocalMovies } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { FaAngular } from 'react-icons/fa';
import { IoIosColorPalette } from 'react-icons/io';
import { GiCardRandom } from 'react-icons/gi';
import { FaBook } from 'react-icons/fa';
import { SiMaterialdesign } from 'react-icons/si';
import { GiArtificialHive } from "react-icons/gi";
import { IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeSql } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { TbBrandAdobeXd } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { GrGatsbyjs } from "react-icons/gr";
import { FaJira } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { GiZeppelin } from "react-icons/gi";

export const getIcon = (icon) => {
    switch(icon){
        case 'Zeplin': return <GiZeppelin />
        case 'GIT': return <FaGithub />
        case 'JIRA': return <FaJira />
        case 'Gatsby': return <GrGatsbyjs />
        case 'NextJS': return <RiNextjsFill />
        case 'Adobe XD': return <TbBrandAdobeXd />
        case 'Redux': return <SiRedux />
        case 'Bootstrap': return <FaBootstrap />
        case 'React': return <FaReact />
        case 'ReactJS': return <FaReact />
        case 'Vue': return <FaVuejs />
        case 'Javascript': return <IoLogoJavascript />
        case 'SQL': return <BsFiletypeSql />
        case 'CSS': return <FaCss3 />
        case 'SASS': return <FaSass />
        case 'HTML': return <FaHtml5 />
        case 'JQuery': return <DiJqueryLogo />
        case 'react-router': return <SiReactrouter />
        case 'react-bootstrap': return <SiBootstrap />
        case 'react-icons': return <FaReact />
        case 'react-datepicker': return <FaCalendarAlt />
        case 'Chart.js': return <FaChartPie />
        case 'Google Fonts': return <SiGooglefonts />
        case 'Firebase': return <SiFirebase />
        case 'Google Firebase': return <SiFirebase />
        case 'Node.js': return <FaNodeJs />
        case 'Express.js': return <SiExpress />
        case 'Mongoose': return <SiMongoose />
        case 'MongoDB': return <SiMongodb />
        case 'MongoDB Atlas': return <SiMongodb />
        case 'Socket.io': return <SiSocketdotio />
        case 'OMDb API': return <MdLocalMovies />
        case 'MD5': return <FaLock />
        case 'Angular': return <FaAngular/>
        case 'Angular 16': return <FaAngular/>
        case 'Stable Diffusion 1.5': return <IoIosColorPalette />
        case 'Chat GPT 3.5': return <GiArtificialHive />
        case 'react-card-flip': return <FaReact />
        case 'Free Dictionary API': return <FaBook />
        case 'Random Word API': return <GiCardRandom />
        case 'Material UI': return <SiMaterialdesign />
        default: return <FaReact />
    }
}