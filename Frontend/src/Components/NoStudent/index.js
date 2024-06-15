    import React from "react";
    import logo from "../../Assets/LogoSttiss.png";
    import './NoStudent.css';

    const NoStudent = () => (
        <div className="no-student p-3">
            <h2>No existe registro de estudiantes</h2>
            <p>
                Agregar estudiantes
            </p>
            <img
                className="img-fluid bounce-animation "
                src={logo}
                alt="Logo STTISS"
                style={{ width: "15rem", padding: "2rem" }}
            />
        </div>
    );

    export default NoStudent;