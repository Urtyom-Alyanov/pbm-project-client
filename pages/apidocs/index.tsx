import { NextPage } from "next";
import Head from "next/head";
import { NavLayout } from "../../components/NavLayout";
import styles from "../../styles/apidocs/index.module.scss";
import Image from "next/image";

const ApiDocsIndex: NextPage = () => {
    return (
        <>
            <Head>
                <title>Документация | НБМ</title>
            </Head>
            <NavLayout>
                <div className="col-lg-9">
                    <div className="sh-q-3 r-sm back-sec p-3 mt-1">
                        <h1 className="text-3xl p-none m-none">Документация по <span>USRMW</span>API</h1>
                        <p>Наш банк не работает без api сервера, поэтому, для вас, уважаемые разработчики, мы создали данную документацию, что бы вы смогли создать своих ботов и тд.</p>
                        <p>Для начала, что вы предпочитаете использовать?</p>
                        <div className="row">
                            <div className="col">
                                <div className={styles.gqlBlock}>
                                    <Image src={"/UAPI_GQL.svg"} width={100} height={100} />
                                    GraphQL
                                    <p>Скоро...</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className={styles.restBlock}>
                                    <Image src={"/UAPI_Rest.svg"} width={200} height={100} />
                                    Rest API
                                    <button className="btn btn-first mt-3">Использовать</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLayout>
        </>
    );
};

export default ApiDocsIndex;