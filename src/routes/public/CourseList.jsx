const CourseList = () => {
  return (
    <div className="container">
      <div className="mt-5">
        <h2>Lista de cursos</h2>
        <ol className="list-group list-group-numbered mt-5">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="">Nombre curso</div>
            </div>
            <span className="badge bg-primary rounded-pill">
              Intensidad horaria: 14
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default CourseList;
