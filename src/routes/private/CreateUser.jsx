import { useForm } from "react-hook-form";
import styles from "../../styles/createUser.module.css";
import { alertError } from "../../utilities/Alerts";
import { formValidate } from "../../utilities/formValidate";
import FormError from "../../components/FormError";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { required } = formValidate();

  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      alertError(error.response.data);
    }
  };

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
            <h2 className="text-center">Crear un usuario</h2>
          </div>
        </div>
        <div className={styles["login-box"]}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles["input-box"]}>
              <input
                type="text"
                placeholder="Ingresar nombre"
                name="name"
                {...register("name", {
                  required,
                })}
              />
            </div>
            {errors.name && <FormError error={errors.name} />}

            <div className={styles["input-box"]}>
              <input
                type="text"
                placeholder="Ingresar correo electrónico"
                name="email"
                {...register("email", {
                  required,
                })}
              />
            </div>
            {errors.email && <FormError error={errors.email} />}

            <div className={styles["input-box"]}>
              <input
                type="text"
                placeholder="Ingresar teléfono"
                name="phone"
                {...register("phone", {
                  required,
                })}
              />
            </div>
            {errors.phone && <FormError error={errors.phone} />}

            <div className={styles["input-box"]}>
              <input
                type="password"
                placeholder="Ingresar contraseña"
                name="password"
                {...register("password", {
                  required,
                })}
              />
            </div>
            {errors.password && <FormError error={errors.password} />}

            <span className={styles["button-box"]}>
              <button>Agregar</button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
