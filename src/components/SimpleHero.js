import React from 'react'

export default function SimpleHero({ children }) {
  return (
    <section className="defaultHero">
      {children}
    </section>
  )
}
