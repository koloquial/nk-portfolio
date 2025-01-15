import ProjectCard from "@/components/ProjectCard";
import { projectList } from "./projectList";

export default function Projects() {
    return (
      <div className='page-container fade-in'>
        <h2 className='page-title'>Projects</h2>
        <hr />
          {projectList.map((project, index) => {
            return (
                <div 
                  key={`${project.title}`} 
                  className='project-container'>
                    <ProjectCard project={project} />
                </div>
            )
          })} 
      </div>
    );
  }
  