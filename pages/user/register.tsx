import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormEventHandler, useState } from "react";
import styles from "../../styles/user/login.module.scss";
import { VkAuth } from "../../components/VkAuth";
import { useInput } from "../../hooks/useInput";
import Link from "next/link";

const RegisterPage: NextPage = () => {
    const router = useRouter();
    const [error, setError] = useState(router.query.err);
    const returnUrl = router.query.url || "/";
    
    const {
        propsInput: UsernameInput
    } = useInput({
        name: "username",
        initValue: "",
        type: "text"
    });
    const {
        propsInput: PasswordInput
    } = useInput({
        name: "password",
        initValue: "",
        type: "password"
    });
    const {
        propsInput: PasswordConfirm
    } = useInput({
        name: "password_confirm",
        initValue: "",
        type: "password"
    });
    const {
        propsInput: NickInput
    } = useInput({
        name: "nick",
        initValue: "",
        type: "text"
    });
    const {
        propsTextArea: DescText
    } = useInput({
        name: "description",
        initValue: "",
        type: "text"
    });
    
    const onSubmit: FormEventHandler = (ev) => {
        ev.preventDefault();
    };

    return (
        <>
            <Head>
                <title>Регистрация | НБМ</title>
                <meta name="description" content="Добро пожаловать в Народный Банк Мемов!" />
            </Head>
            <div className="mt-1">
                <form onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col-lg-4 col-xl-3">
                            <div className="stick-top" style={{ top: "64px" }}>
                                <div className="back-sec p-3 sh-q-3 r-sm mt-1">
                                    <h1 className="text-3xl p-none m-none">Регистрация</h1>
                                    {error && <div className={styles.errorBlock}>
                                        {error}
                                    </div>}
                                    <div className="mt-3">
                                        <button className="btn btn-first">Отправить</button>
                                        <h3>Уже есть аккаунт?</h3>
                                        <Link href={{pathname: "/user/login", query: { err: error, url: returnUrl }}} as={`/user/login?${error ? `err=${error}&` : ""}url=${returnUrl}`}>
                                            <button type="button" className="btn btn-second">Войти</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-xl-9">
                            <div className="back-sec p-3 sh-q-3 r-sm mt-1">
                                <h1 className="text-3xl p-none m-none">Основные данные</h1>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <label>
                                            <h5 className="p-none m-none mt-3">Логин<span className="red-text">*</span></h5>
                                            <input {...UsernameInput} />
                                        </label>
                                    </div>
                                    <div className="col-lg-4">
                                        <h5 className="p-none m-none mt-3">Логин нужен для подтверждения нескольких действий и традиционного входа и соответствует стандартам</h5>
                                        <ul>
                                            <li>
                                                <h6 className="p-none m-none">Должен содержать только разрешенные символы (a-z, A-Z, 0-9, _, -)</h6>
                                            </li>
                                            <li>
                                                <h6 className="p-none m-none">Длина не менее 6 символов</h6>
                                            </li>
                                            <li>
                                                <h6 className="p-none m-none">Длина не более 24 символов</h6>
                                            </li>
                                            <li>
                                                <h6 className="p-none m-none">Логин уникален</h6>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-8">
                                        <label>
                                            <h5 className="p-none m-none mt-3">Пароль<span className="red-text">*</span></h5>
                                            <input {...PasswordInput} />
                                        </label>
                                    </div>
                                    <div className="col-lg-4">
                                        <h5 className="p-none m-none mt-3">Пароль нужен для подтверждения логина, содержит абсолютно такие же стандарты (кроме уникальности)</h5>
                                    </div>
                                    <div className="col-lg-8">
                                        <label>
                                            <h5 className="p-none m-none mt-3">Повторите пароль<span className="red-text">*</span></h5>
                                            <input {...PasswordConfirm} />
                                        </label>
                                    </div>
                                    <div className="col-lg-4">
                                        <h5 className="p-none m-none mt-3">Нам нужно удостовериться, что вы его запомнили. Мы пароли в открытом виде не храним (они захешированны, то есть зашифрованны без обратного действия), так что мы не поможем</h5>
                                    </div>
                                    <div className="col-lg-8">
                                        <label>
                                            <h5 className="p-none m-none mt-3">ВКонтакте<span className="red-text">*</span></h5>
                                            <VkAuth />
                                        </label>
                                    </div>
                                    <div className="col-lg-4">
                                        <h5 className="p-none m-none mt-3">ВКонтакте нам нужен, что бы мы смогли вас идентифицировать, а так же для входа через ВКонтакте</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="back-sec p-3 sh-q-3 r-sm mt-1">
                                <h1 className="text-3xl p-none m-none">Персонализация</h1>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <label>
                                            <h5 className="p-none m-none mt-3">Ник</h5>
                                            <input {...NickInput} />
                                        </label>
                                    </div>
                                    <div className="col-lg-4">
                                        <h5 className="p-none m-none mt-3">Ник это имя вашего персонажа или ваше, в любом случае он стандартами неограничен (кроме максимальной длины)</h5>
                                    </div>
                                    <div className="col-lg-8">
                                        <label>
                                            <h5 className="p-none m-none mt-3">Описание</h5>
                                            <textarea {...DescText} />
                                        </label>
                                    </div>
                                    <div className="col-lg-4">
                                        <h5 className="p-none m-none mt-3">Это описание вашего персонажа, к примеру: дата рождения, место проживания и тд.</h5>
                                    </div>
                                    <div className="col-lg-8">
                                        <label>
                                            <h5 className="p-none m-none mt-3">Аватарка</h5>
                                        </label>
                                    </div>
                                    <div className="col-lg-4">
                                        <h5 className="p-none m-none mt-3">Аватарка это лицо вашей страницы</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default RegisterPage;