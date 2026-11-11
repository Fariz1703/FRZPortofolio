
import AppButton from "../../../component/common/button/AppButton.jsx";


function ProjectCard({ projects }) {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <div className="card-container" key={project.id}>
          <div className="row">
            <div className="column">
              <p className="techstackcard-p">Tech Stack: {project.techStack}</p>
              <h1 className="card-h1">{project.title}</h1>
              <h2 className="card-h2">{project.category}</h2>
              <p className="card-p">{project.description}</p>
              <div className="row">
                <AppButton Massage="GitHub Link" Link={project.GitHubLink} Green={true}></AppButton>
                <AppButton Massage="Try It Out!" Link={project.try} Green={false}></AppButton>
              </div>
            </div>
            <div className="cardlogo-container">
              <img
                className="card-img"
                src={project.img}
                alt={project.title}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;