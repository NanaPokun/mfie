// This is to be imported into the App.js file to be displayed as the main page
import Content from "../Content";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Content />
            <Footer />
        </div>
    );
}
 
export default Layout;