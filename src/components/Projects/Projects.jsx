import styles from "./Projects.module.css";
import projects from "../../data/projects.json";

import React from "react";

function Projects() {
  return (
    <section className={styles.container} id="projects">
      <h2> Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <div key={id} className={styles.project}>
              <img src={project.imageSrc} alt={`Image of ${project.title}`} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href="https://ack-st-james-koromosho.netlify.app/" target="_blank" rel="noopener noreferrer">Link</a>
              <a href="https://github.com/KipletingEdwin/Koromosho" target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
