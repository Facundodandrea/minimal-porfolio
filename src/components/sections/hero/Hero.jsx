import React from 'react'
import WorldMap from '../../../icons/WorldMap'
import Mail from '../../../icons/Mail'
import Github from '../../../icons/Github'
import LinkedIn from '../../../icons/LinkedIn'

import './hero.css'

const Hero = ({ basics }) => {
  const { name, label, image, location, profiles, phone, email } = basics
  const { city, region } = location

  const SOCIAL_ICONS = {
    GitHub: Github, // Asigna tus componentes de iconos aquí
    LinkedIn: LinkedIn
  }

  const linkedInfo = profiles.find(({ network }) => network === "LinkedIn")
  const linkedUrl = linkedInfo?.url

  const printInfo = [email, phone, linkedUrl].filter(Boolean).join(" • ")

  return (
    <section>
      <div className="container">
        <div className="info">
          <h1>{name}</h1>
          <h2>{label}</h2>
          <span>
            <WorldMap />
            {city}, {region}
          </span>
          <footer className="print">
            {printInfo}
          </footer>
          <footer className="no-print">
            {
              email && (
                <a
                  href={`mailto:${email}`}
                  title={`Enviar un correo electrónico a ${name} al correo ${email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail />
                </a>
              )
            }
            {
              profiles.map(({ network, url }) => {
                const Icon = SOCIAL_ICONS[network]

                return (
                  <a
                    href={url}
                    title={`Visitar el perfil de ${name} en ${network}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={network}
                  >
                    {Icon && <Icon />} {/* Asegúrate de verificar si Icon existe antes de renderizarlo */}
                  </a>
                )
              })
            }
          </footer>
        </div>
        <figure>
          <img src={image} alt={name} />
        </figure>
      </div>
    </section>
  )
}

export default Hero
