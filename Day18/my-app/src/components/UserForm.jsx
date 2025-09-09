import React, { useState } from 'react'

export default function UserForm({ onAdd }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!name.trim()) e.name = 'Name is required'
    if (!email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Invalid email format'

    if (!age) e.age = 'Age is required'
    else if (Number(age) <= 0) e.age = 'Age must be a positive number'

    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (!validate()) return

    const person = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim(),
      age: Number(age),
    }

    onAdd?.(person)
    setName('')
    setEmail('')
    setAge('')
    setErrors({})
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@example.com"
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Age</label>
        <input
          type="number"
          className={`form-control ${errors.age ? 'is-invalid' : ''}`}
          value={age}
          min={1}
          onChange={(e) => setAge(e.target.value)}
          placeholder="e.g. 25"
        />
        {errors.age && <div className="invalid-feedback">{errors.age}</div>}
      </div>

      <button type="submit" className="btn btn-primary w-100">Add</button>
    </form>
  )
}
