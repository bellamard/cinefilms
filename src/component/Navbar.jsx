import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Navbar(props) {
  const [movie, setMovie] = useState("");
  let history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/Research/" + movie);
    setMovie("");
  };
  const handleChange = (event) => {
    setMovie(event.target.value);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <h1 className="navbar-brand">
            {" "}
            <Link to="/" className="nav-link">
              TOSALA FILM
            </Link>
          </h1>
        </div>
        <div>
          <div>
            <form action="" onSubmit={handleSubmit} className="d-flex">
              <input
                type="text"
                placeholder="Recherche"
                className="form-control me-2"
                value={movie}
                onChange={handleChange}
              />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
