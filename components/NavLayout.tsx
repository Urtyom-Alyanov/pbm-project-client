import { Navigation } from "./Nav";

export const NavLayout: React.FC = ({ children }) => {
    return (
        <div className="row">
            <div className="col-lg-3">
                <Navigation />
            </div>
            {children}
        </div>
    );
};