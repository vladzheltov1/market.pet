import { Wrapper } from "@/components/Wrapper";
import { useAuth } from "@/hooks/useAuth";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Page } from "@/layouts/Page";
import { FormResponse, LoginUserData } from "@/types/auth";
import { assemblePageTitle } from "@/utils/title";
import { Formik } from "formik";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import * as yup from "yup";

const required = "Обязательное поле!";

const schema = yup.object().shape({
    email: yup.string().email("Некорректный адрес!").required(required),
    password: yup.string().required(required)
});

const initialValues: LoginUserData = {
    email: "",
    password: ""
}

const Login: FC = () => {
    const router = useRouter();
    const localStore = useLocalStorage();
    const {login} = useAuth();

    const [error, setError] = useState<FormResponse | null>(null);

    const submit = (formData: LoginUserData) => {
        const response = login(formData);

        if(response === FormResponse.SUCCESS){
            router.push("/");
            return;
        }

        setError(response);
    }

    useEffect(() => {
        if(localStore.get("user")){
            router.push("/");
            return;
        }
    }, []);

    return (
        <>
            <Head>
                <title>{assemblePageTitle("Войти")}</title>
            </Head>
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
                                <h1>Вход</h1>
                                <Form.Group controlId="email">
                                    <Form.Label>Почта</Form.Label>
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
                                    <Form.Label>Пароль</Form.Label>
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
                                {error && values.email && values.password && (
                                    <div style={{color: "var(--bs-red)", fontSize: 14}}>{error}</div>
                                )}
                                <Button type="submit">Войти</Button>
                            </Form>
                        )}
                    </Formik>
                </Wrapper>
            </Page>
        </>
    )
}

export default Login;