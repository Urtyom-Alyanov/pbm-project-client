import { useDarkMode } from "next-dark-mode";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faWindowRestore as faWindowRestoreSolid } from "@fortawesome/free-solid-svg-icons";
import { faWindowRestore as faWindowRestoreRegular } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header: React.FC = () => {
    const {
        autoModeActive,
        autoModeSupported,
        darkModeActive,
        switchToAutoMode,  
        switchToDarkMode,  
        switchToLightMode, 
      } = useDarkMode();
    const router = useRouter();
    return (
        <>
            <header className="stick-top z-10">
                <div className="container">
                    <div className="d-flex dir-row just-cont-betw alig-itm-cen">
                        <div>
                            <Link href="/">
                                <Image title="На главную" className="cur-point" src="/PBM_title.svg" height={40} width={100} />
                            </Link>
                        </div>
                        <div className="d-flex flex-full just-cont-end alig-itm-cen">
                            <button
                                onClick={() => switchToAutoMode()}
                                title={autoModeSupported ? !autoModeActive ? "Системная тема" : "Системная тема активна" : "Системная тема не поддерживается"}
                                disabled={!autoModeSupported || autoModeActive}
                                className="btn btn-icon"
                            >{autoModeActive ? <FontAwesomeIcon icon={faWindowRestoreSolid}  /> : <FontAwesomeIcon icon={faWindowRestoreRegular}  />}</button>
                            <button
                                onClick={() => darkModeActive ? switchToLightMode() : switchToDarkMode()}
                                title="Сменить тему"
                                className="ml-1 btn btn-icon"
                            >{darkModeActive ? <FontAwesomeIcon icon={faSun}  /> : <FontAwesomeIcon icon={faMoon}  />}</button>
                            <Link href={{pathname: "/user/login", query: {url: router.query.url || router.asPath}}} as={`/user/login?url=${router.query.url || router.asPath}`}>
                                <button className="btn btn-second ml-1">Войти</button>
                            </Link>
                            <Link href={{pathname: "/user/register", query: {url: router.query.url || router.asPath}}} as={`/user/register?url=${router.query.url || router.asPath}`}>
                                <button className="btn btn-first ml-1">Зарегистрироваться</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};