import { useForm } from "react-hook-form";
import { Button } from "../Button";
import "./Registration.scss";

function Registration() {

    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        reset,
    } = useForm({
        mode: "onChange"
    });

    const onSubmit = (data) => {
        alert("Регистрация прошла успешно");
        reset();
    }

    function setData() {
        sessionStorage.setItem("auth", true);
    }

    return (
        <div className="wrap">
            <div className="form-container">
                <form  className="form" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="form-container-title">Регистрация</h2>
                    
                    <div className="form__email">
                        <label className="form__label-email">Email
                            <input className="form__input-email"
                                {...register("email", {
                                    required: "Поле обязательно для заполнения",
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "Email невалидный",
                                    },
                                })}
                                placeholder="Введите email"
                            />
                        </label>
                        <div className="error-message">
                            {errors?.email && <span className="status-error"> {errors?.email?.message || "Ошибка"}</span>}
                        </div>
                    </div>
                    
                    <div className="form__password">
                        <label className="form__label-password">Пароль
                            <input className="form__input-password"
                                {...register("password", {
                                    required: "Поле обязательно для заполнения",
                                    minLength: {
                                        value: 8,
                                        message: "Минимум 8 символов"
                                    }
                                    })
                                }
                                type="password"
                                placeholder="Введите пароль"/>
                        </label>
                        <div className="error-message">
                            {errors?.password && <span className="status-error"> {errors?.password?.message || "Ошибка"}</span>}
                        </div>
                    </div>

                    <div className="form__button">
                        <Button
                            onClick={() => setData()}
                            className="form__input-button"
                            type="submit"
                            disabled={!isValid}
                            children={"Регистрация"}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration;