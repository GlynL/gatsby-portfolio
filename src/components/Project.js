import React from "react"

export default ({ project }) => {
  const tech = project.technologies.map(tech => <span>{tech}</span>)
  return (
    <div>
      <p>{project.img}</p>
      <ul>{tech}</ul>
      <p>{project.description}</p>
      <button>Live Site</button>
      <button>Github</button>
    </div>
  )
}
