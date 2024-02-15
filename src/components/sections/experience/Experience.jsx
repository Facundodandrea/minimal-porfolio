import React from 'react'
import './experience.css'

const Experience = ({work}) => {
  return (
    <section>
        <h1>Experiencia laboral</h1>
        <ul>
    {
      work.map(
        ({ name, startDate, endDate, position, summary }) => {
          const startYear = new Date(startDate).getFullYear()
          const endYear =
            endDate != null ? new Date(endDate).getFullYear() : "Actual"
          const years = `${startYear} - ${endYear}`

          return (
            <li>
              <article>
                <header>
                  <div>
                    <h3>{name}</h3>
                    <h4>{position}</h4>
                  </div>

                  <time>{years}</time>
                </header>

                <footer>
                  <p>{summary}</p>
                </footer>
              </article>
            </li>
          )
        }
      )
    }
  </ul>
    </section>
  )
}

export default Experience