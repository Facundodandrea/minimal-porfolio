import React from 'react'

const Education = ({education}) => {
  return (
    <section>
        <h1>Educación</h1>
        <ul>
    {
      education.map(
        ({ institution, startDate, endDate, area }) => {
          const startYear = new Date(startDate).getFullYear()
          const endYear =
            endDate != null ? new Date(endDate).getFullYear() : "Actual"
          const years = `${startYear} - ${endYear}`

          return (
            <li>
              <article>
                <header>
                  <div>
                    <h3>{institution}</h3>
                  </div>

                  <time>{years}</time>
                </header>

                <footer>
                  <p>{area}</p>
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

export default Education