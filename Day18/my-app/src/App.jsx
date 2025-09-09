import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserCards from "./components/UserCards";

export default function App() {
  const [people, setPeople] = useState([]);

  const handleAddPerson = (person) => {
    setPeople((prev) => [person, ...prev]);
  };

  const handleClear = () => setPeople([]);

  return (
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-12 col-lg-5">
          <div className="card shadow-sm">
            <div className="card-body">
              <UserForm onAdd={handleAddPerson} />
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-7">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="m-0">Cards</h5>
          </div>
          <UserCards people={people} />
        </div>
      </div>
    </div>
  );
}
