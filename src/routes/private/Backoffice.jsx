import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faCheck,
  faList,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
const Backoffice = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="container text-center mt-5 vh-100 ">
        <div className="mb-4">
          <button className="btn btn-danger">
            <FontAwesomeIcon
              icon={faRightToBracket}
              className="fs-2 text-light"
              onClick={() => {
                logout();
                navigate("/");
              }}
            />
          </button>
        </div>
        <div className="row d-flex align-items-center pt-5 ">
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <div className="card-header">Crear</div>
              <div className="card-body">
                <h5 className="card-title">Crear usuarios</h5>
                <div>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="fs-1 text-danger mb-2"
                  />
                </div>
                <Link to="/backoffice/create" className="btn btn-primary w-25">
                  Ir
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <div className="card-header">Asignación</div>
              <div className="card-body">
                <h5 className="card-title">Asignar cursos a un usuario</h5>
                <div>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="fs-1 text-danger mb-2"
                  />
                </div>
                <Link to="/backoffice/assign" className="btn btn-primary w-25">
                  Ir
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <div className="card-header">Listado</div>
              <div className="card-body">
                <h5 className="card-title">Ver listado de usuarios</h5>
                <div>
                  <FontAwesomeIcon
                    icon={faList}
                    className="fs-1 text-danger mb-2"
                  />
                </div>
                <Link to="/backoffice/list" className="btn btn-primary w-25">
                  Ir
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Backoffice;
