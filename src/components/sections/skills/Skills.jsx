import React from 'react'
import './skills.css'

const Skills = ({skills}) => {
  return (
    <section>
        <h1>Habilidades</h1>
        <ul className='skills'>
    {
      skills.map(({ name }) => (
        <li className='skillsTag'>
          <span>{name}</span>
        </li>
      ))
    }
  </ul>
    </section>
  )
}

export default Skills