import './projects.css';
import project1 from './../../assets/project1.jpg';
import project2 from './../../assets/project2.jpg';
import project3 from './../../assets/projects3.jpg';

export default function Projects(){
    return (
        <div id="projects">
            <h1>Amoung my work</h1>
            <div id="works">
                <a href=""><img src={project1} alt="project" /></a>
                <a href=""><img src={project2} alt="project" /></a>
                <a href=""><img src={project3} alt="project" /></a>
            </div>
        </div>
    )
}