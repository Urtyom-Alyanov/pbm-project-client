import { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import { NavLayout } from "../../components/NavLayout";
import styles from "../../styles/funny/casino.module.scss"

const CasinoPage: NextPage = () => {
    const [balance, setBalance] = useState(1000);
    const [int, setInt] = useState(10);
    const [lucky, setLucky] = useState(50);
    const [isCool, setCool] = useState<boolean | null>(null);

    const formula = int * (Number(((100 - lucky) / 100).toFixed(1)) * 2);

    function randomCasino(e: React.MouseEvent) {
        if(lucky > 90 || lucky < 10) return setCool(false);
        const integer = Math.round(Math.random() * (100 - 1) + 1);
        const win: boolean = integer <= lucky;
        setCool(win);

        setBalance(bal => {
            if(win) return bal + formula;
            else return bal - int;
        });
    };

    return (
        <>
            <Head>
                <title>Казино | НБМ</title>
            </Head>
            <NavLayout>
                <div className="col-lg-9">
                    <div className="sh-q-3 r-sm back-sec p-3 mt-1">
                        <h1 className="text-3xl p-none m-none">Казино</h1>
                        <p>Испытай свою удачу в псевдорандоме!</p>
                        <p>Ваш баланс: {balance}</p>
                        <div className="row">
                            <div className="col-sm mt-3">
                                <div className={`${styles.casinoRat} ${isCool !== null ? isCool ? styles.casinoRatAccess : styles.casinoRatError : ""}`}>
                                    {isCool !== null ? isCool ? "Вы выиграли!" : "Вы проиграли!" : "Крутите барабан!"}
                                </div>
                            </div>
                            <div className="col-sm mt-3">
                                <p>
                                    <label>
                                        <h5 className="p-none m-none">Сколько вложить?<span className="red-text">*</span></h5>
                                        <input value={int} onChange={(e) => setInt(Number(e.currentTarget.value))} type="number" name="balance" min={1} className="input" />
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <h5 className="p-none m-none">Процент удачи<span className="red-text">*</span></h5>
                                        <input value={lucky} max={90} onChange={(e) => setLucky(Number(e.currentTarget.value))} type="number" name="balance" min={10} className="input" />
                                    </label>
                                </p>
                                <p>
                                    <button className="btn btn-first" onClick={randomCasino}>
                                        Крутить! (Выигрыш - {formula})
                                    </button>
                                    <button className="btn btn-second ml-1" disabled={isCool === null} onClick={() => setCool(null)}>
                                        Сбросить
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLayout>
        </>
    );
};

export default CasinoPage;