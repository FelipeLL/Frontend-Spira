import { useEffect, useState, useContext } from "react";
import httpService from "../../services/httpService";
import { UserContext } from "../../context/UserProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const CourseList = () => {
  const [data, setData] = useState([]);
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const res = await httpService.get(`/courses/${user?.idUser}`);
    setData(res.data);
  };

  return (
    <div className="container">
      <div className="mt-5">
        <div className="row mb-4">
          <div className="col-1">
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
          <div className="col-11">
            <h2 className="text-center">Crear un usuario</h2>
          </div>
        </div>
        <ol className="list-group list-group-numbered mt-5">
          {data?.map((item, index) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-start"
              key={index}
            >
              <div className="ms-2 me-auto">
                <div className="">{item.Course.name}</div>
              </div>
              <span className="badge bg-primary rounded-pill">
                Intensidad horaria: {item.Course.hours}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default CourseList;
