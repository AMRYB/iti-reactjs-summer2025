import React from 'react'

export default function UserCards({ people }) {
  if (!people?.length) {
    return null
  }

  return (
    <div className="row g-3">
      {people.map((p) => (
        <div className="col-12 col-sm-6" key={p.id}>
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-1">{p.name}</h5>
              <h6 className="card-subtitle text-muted mb-3">{p.email}</h6>
              <p className="card-text">Age: {p.age}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}