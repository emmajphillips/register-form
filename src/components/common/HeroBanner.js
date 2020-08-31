import React from 'react'

function HeroBanner({ text }) {
  return (
    <section className="hero is-primary is-small-mobile">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">{text}</h1>
        </div>
      </div>
    </section >
  )
}

export default HeroBanner