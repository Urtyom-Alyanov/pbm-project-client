import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            <div className="container">
                <div>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
};