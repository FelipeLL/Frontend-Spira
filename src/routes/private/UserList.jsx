import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="mt-5">
        <div className="row mb-4">
          <div className="col-1">
            <button className="btn btn-primary">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="fs-2 text-light"
                onClick={() => navigate(-1)}
              />
            </button>
          </div>
          <div className="col-11">
            <h2 className="text-center">Listado de usuarios</h2>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <h5 className="card-header">Nombre</h5>
              <div className="card-body">
                <h5 className="card-title">correo</h5>
                <p className="card-text">teléfono: </p>
              </div>

              <ul class="list-group list-group-flush">
                <li class="list-group-item">Curso N</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
