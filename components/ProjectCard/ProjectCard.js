'use client'
//components
import Carousel from '@/components/Carousel/Carousel';
import Accordion from '@/components/Accordion';

//functions
import { getIcon } from '@/functions/getIcon';

const ProjectCard = ({ project }) => {

    const heading = (project) => {
        return (
            <div className='project-heading'>
                {project.palette.map((color) => {
                    return <div className='palette-box' style={{backgroundColor: `${color}`}} key={color} />
                })}
                <h3>{project.title}</h3>
            </div>
        )
    }

    const footer = (project) => {
        return (
            <div className='project-view'>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <button disabled={project.url ? false : true}>{project.url ? 'Online' : 'Offline'}</button>
                </a>
                    
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <button disabled={project.github ? false : true}>Github</button>
                </a>
                    
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <button disabled={project.demo ? false : true}>Video</button>
                </a>
            </div>
        )
    }

    return (
        <div className='project-card'>
            <Carousel heading={heading(project)} footer={footer(project)} images={project.screenshots} />
            <Accordion sections={[
                {
                    title: 'Description', 
                    content: 
                        <div className='accordion-content-description'>
                           <p>{project.description}</p>
                        </div>
                },
                {
                    title: 'Technology', 
                    content: 
                        <div className='accordion-content-tech'>
                            {project.technology.map((item) => {
                                return <div className='tech-slot' key={item}><p className='icon-small'>{getIcon(item)} {item}</p></div>
                            })}
                        </div>
                }
            ]}>
            </Accordion>
        </div>
    )
}

export default ProjectCard;