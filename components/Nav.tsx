import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBuilding, faCode, faCommentsDollar, faGlobe, faHome, faMoneyBillWave, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Nav.module.scss";

export const ListItem: React.FC<{ href: string; icon?: IconProp }> = ({ children, href, icon }) => {
    const { asPath } = useRouter();
    return (
        <li>
            <p>
                <Link href={href}>
                    <a className={`${styles.navBtn} ${asPath === href ? styles.active: ""}`}>
                        <FontAwesomeIcon icon={icon} className={styles.navBtnText} listItem/>
                        <span className={`${styles.navBtnText}`}>{children}</span>
                    </a>
                </Link>
            </p>
        </li>
    );
};

export const Navigation: React.FC = () => {
    return (
        <div className="sh-q-3 r-sm back-sec p-3 mt-1">
            <ul className="fa-ul">
                <ListItem href="/user/1" icon={faUser}>Мой профиль</ListItem>
                <ListItem href="/" icon={faHome}>Главная</ListItem>
                <ListItem href="/funny/casino" icon={faMoneyBillWave}>Казино</ListItem>
                <ListItem href="/user/1/org" icon={faBuilding}>Мои организации</ListItem>
                <ListItem href="/country/1" icon={faGlobe}>Ловушкинск</ListItem>
                <ListItem href="/product" icon={faCommentsDollar}>Рынок</ListItem>
                <ListItem href="/apidocs" icon={faCode}>Разработчикам</ListItem>
            </ul>
        </div>
    );
}