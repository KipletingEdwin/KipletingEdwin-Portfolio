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
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
