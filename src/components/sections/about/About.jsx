import React from 'react'

const About = ({basics}) => {
  return (
    <section>
        <h1>Sobre mi</h1>
        <p>{basics.summary}</p>
    </section>
  )
}

export default About