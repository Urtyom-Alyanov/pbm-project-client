import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavLayout } from "../components/NavLayout";

const NotFound: NextPage = () => {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Не найдено | НБМ</title>
            </Head>
            <NavLayout>
                <div className="col-lg-6">
                    <div className="back-sec p-3 sh-q-3 r-sm mt-1">
                        <h1 className="text-3xl p-none m-none">404</h1>
                        <p>По адресу <i><b>{router.asPath}</b></i> ничего не найдено. Проверьте написание адреса.</p>
                        <p>
                            <Link href="/"><button className="btn btn-first">На главную страницу</button></Link>
                        </p>
                    </div>
                </div>
            </NavLayout>
        </>
    );
};

export default NotFound;