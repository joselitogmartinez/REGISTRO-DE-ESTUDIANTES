import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function AddStudent() {
  const [name, setName] = useState("");
  const [nim, setNim] = useState(0);
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const sentData = (e) => {
    e.preventDefault();
    const newStudent = {
      name,
      nim,
      gender,
    };


    Swal.fire({
      title: "Quieres guardar los cambios?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      denyButtonText: `No guardar`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post("https://sttiss-api.vercel.app/student/add", newStudent)
          .then(() => {
            Swal.fire("El estudiante ha sido guardado exitosamente!", "", "success");
            navigate("/");
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err.message,
            });
          });
      } else if (result.isDenied) {
        Swal.fire("Los detalles no se guardan", "", "error");
      }
    });
  };

  return (
    <div className="container p-5">
      <form>
        <div className="mb-3">
          <label for="name" className="form-label">
            Nombre del Estudiante
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Ingrese el nombre"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="nim" className="form-label">
            Carnet del estudiante
          </label>
          <input
            type="number"
            className="form-control"
            id="nim"
            placeholder="Ingrese numero de carnet"
            onChange={(e) => {
              setNim(e.target.value);
            }}
          />
        </div>
        <div>
          <label for="gender">Seleccionar Genero</label>
          <br />
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="genero"
                id="male"
                value="masculino"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label className="form-check-label" for="male">
                Hombre
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="genero"
                id="female"
                value="femenino"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label className="form-check-label" for="female">
                Mujer
              </label>
            </div>
          </div>
        </div>
        <br />
        <div className="col-12">
          <button className="btn btn-primary" type="submit" onClick={sentData}>
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};
