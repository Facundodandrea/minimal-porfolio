import React from 'react'
import './projects.css'

const Projects = ({projects}) => {
  return (
    <section>
        <h1>Proyectos</h1>
        <ul className='projects'>
    {
      projects.map(({ url, description, highlights, name, isActive }) => {
        return (
          <li className='projectsList'>
            <article className='projectsArticle'>
              <header className='projectsHeader'>
                <h3 className='projectsName'>
                  <a href={url} title={`Ver el proyecto ${name}`}>
                    {name}
                  </a>
                  {isActive && <span>•</span>}
                </h3>
                <p className='projectsP'>{description}</p>
              </header>
              <footer className='projectsFooter'>
                {highlights.map((highlight) => {
                  return <span>{highlight}</span>
                })}
              </footer>
            </article>
          </li>
        )
      })
    }
  </ul>
    </section>
  )
}

export default Projects