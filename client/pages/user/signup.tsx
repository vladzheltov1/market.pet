import { PageHead } from "@/components/PageHead";
import { Wrapper } from "@/components/Wrapper";
import { INCORRECT_EMAIL, REQUIRED } from "@/constants/form";
import { useAuth } from "@/hooks/useAuth";
import { Page } from "@/layouts/Page";
import { FormResponse, SignUpUserData } from "@/types/auth";
import { Formik } from "formik";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import * as yup from "yup";

const minOneSymbol = "Поле не должно содержать менее 1 символа!";

const schema = yup.object().shape({
    firstName: yup.string().required(REQUIRED),
    lastName: yup.string().required(REQUIRED),
    email: yup.string().email(INCORRECT_EMAIL).required(REQUIRED),
    password: yup.string().required(REQUIRED),
    passwordConfirm: yup.string().required(REQUIRED)
});

const initialValues: SignUpUserData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: ""
}

const Signup: FC = () => {
    const router = useRouter();
    const {signUp, isLoggedIn} = useAuth();
    
    const [error, setError] = useState<FormResponse | null>(null);

    const submit = (formData: SignUpUserData) => {
        const response = signUp(formData);

        if(response === FormResponse.SUCCESS){
            router.push("/");
            return;
        }

        setError(response);
    }

    useEffect(() => {
        if(isLoggedIn()){
            router.push("/");
            return;
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <PageHead title="Регистрация" />
            <Page>
                <Wrapper maxWidth={600}>
                    <Formik
                        validationSchema={schema}
                        onSubmit={submit}
                        initialValues={initialValues}
                    >
                        {({
                            handleSubmit,
                            handleChange,
                            values,
                            errors,
                        }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <h1>Регистрация</h1>
                                <Form.Group controlId="firstName">
                                    <Form.Label>Имя:</Form.Label>
                                    <Form.Control
                                        type="firstName"
                                        placeholder="Имя"
                                        name="firstName"
                                        value={values.firstName}
                                        onChange={handleChange}
                                        isInvalid={!!errors.firstName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.firstName}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="lastName">
                                    <Form.Label>Фамилия:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Фамилия"
                                        name="lastName"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        isInvalid={!!errors.lastName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.lastName}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="email">
                                    <Form.Label>Почта:</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Почта"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="password">
                                    <Form.Label>Пароль:</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Пароль"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        isInvalid={!!errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="passwordConfirm">
                                    <Form.Label>Повторите пароль:</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Пароль"
                                        name="passwordConfirm"
                                        value={values.passwordConfirm}
                                        onChange={handleChange}
                                        isInvalid={!!errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {error && values.email && values.password && (
                                    <div style={{color: "var(--bs-red)", fontSize: 14}}>{error}</div>
                                )}
                                <Button type="submit">Зарегистрироваться</Button>
                            </Form>
                        )}
                    </Formik>
                </Wrapper>
            </Page>
        </>
    )
}

export default Signup;