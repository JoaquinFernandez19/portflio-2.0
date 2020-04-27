import React from "react";
import "../styles/Projects.scss";
import ProjectItem from "./ProjectItem";
//Json
import projects from "../data/projects.json";

class Projects extends React.Component {
  render() {
    let key = 0;
    let projectsList = projects.map((project) => {
      key++;
      return (
        <ProjectItem
          description={project.description}
          key={key}
          github={project.github}
          website={project.website}
          img={project.img}
          tech={project.tech}
        />
      );
    });

    return (
      <div className="projects">
        {projectsList}
        <div style={{ padding: "3em 1em" }}>
          <h1>And more to come...</h1>
          <p>
            (if you really want to see more, in my github i have more projects)
          </p>
        </div>
      </div>
    );
  }
}

export default Projects;
