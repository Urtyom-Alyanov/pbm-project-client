import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="container">
            <hr className="mt-3" />
            <div className="d-flex mt-3">
                <Link href="/">
                    <Image title="На главную" className="cur-point" src="/PBM_text.svg" height={50} width={100} />
                </Link>
                <h3 className="ml-1">
                    НБМ 2020-2022, Права не защищены, но и пиздить не хорошо!
                </h3>
            </div>
            <div className="mt-3"></div>
        </footer>
    );
};