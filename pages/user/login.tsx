import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEventHandler, useState } from "react";
import { VkAuth } from "../../components/VkAuth";
import { useInput } from "../../hooks/useInput";
import styles from "../../styles/user/login.module.scss";

const LoginPage: NextPage = () => {
    const router = useRouter();
    const [error, setError] = useState(router.query.err);
    const returnUrl = router.query.url || "/";

    const {
        propsInput: usernameProps,
        callback: usernameCb
    } = useInput({ type: "text", initValue: "", name: "username" });
    const {
        propsInput: passwordProps,
        callback: passwordCb
    } = useInput({ type: "password", initValue: "", name: "password" });

    const onSubmit: FormEventHandler = (ev) => {
        ev.preventDefault();
        
    };

    return (
        <>
            <Head>
                <title>Вход | НБМ</title>
                <meta name="description" content="Добро пожаловать в Народный Банк Мемов!" />
            </Head>
            <div className="mt-1">
                <div className="back-sec p-3 sh-q-3 r-sm">
                    <h1 className="text-3xl p-none m-none">Войти</h1>
                    <div className="row">
                        <div className="col-md">
                            <form onSubmit={onSubmit}>
                                <p><h2 className="text-xl p-none m-none">Традиционная авторизация</h2></p>
                                <p>
                                    {error && <div className={styles.errorBlock}>
                                        {error}
                                    </div>}
                                </p>
                                <p>
                                    <label>
                                        <h5 className="p-none m-none">Логин<span className="red-text">*</span></h5>
                                        <input {...usernameProps} />
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <h5 className="p-none m-none">Пароль<span className="red-text">*</span></h5>
                                        <input {...passwordProps} />
                                    </label>
                                </p>
                                <p>
                                    <button className="btn btn-first">Войти</button>
                                </p>
                            </form>
                        </div>
                        <div className="col-md">
                            <p><h2 className="text-xl p-none m-none">Авторизация через ВК</h2></p>
                            <p>
                                <VkAuth onAuth={(user) => {}} />
                            </p>
                        </div>
                    </div>
                    <p>
                        <h3>Нет аккаунта?</h3>
                    </p>
                    <p>
                        <Link href={{pathname: "/user/register", query: { err: error, url: returnUrl }}} as={`/user/register?${error ? `err=${error}&` : ""}url=${returnUrl}`}><button className="btn btn-second">Создать аккаунт</button></Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default LoginPage;