import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ShowOne = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = () => {
      axios.get(`https://sttiss-api.vercel.app/student/get/${id}`).then((res) => {
        setUser(res.data.user);
      });
    };
    getUser();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`https://sttiss-api.vercel.app/student/update/${id}`, user)
      .then(() => {
        Swal.fire({
          title: "Quieres guardar los cambios?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Guardar",
          denyButtonText: `No guardar`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Guardado!", "", "success");
            navigate("/");
          } else if (result.isDenied) {
            Swal.fire("Los cambios no se guardan", "", "info");
          }
        });
      })
      .catch((err) => Swal.fire("No actualizado", err.message, "error"));
  };

  return (
    <div className="container p-5">
      <form>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nim">No. Carnet</label>
          <input
            type="text"
            className="form-control"
            id="nim"
            name="nim"
            value={user.nim}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Genero</label>
          <select
            className="form-control"
            id="gender"
            name="gender"
            value={user.gender}
            onChange={handleInputChange}
          >
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>
        <br />
        <button onClick={handleFormSubmit} className="btn btn-primary">
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default ShowOne;
