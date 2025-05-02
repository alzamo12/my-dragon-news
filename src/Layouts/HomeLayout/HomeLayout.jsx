import { Outlet } from "react-router";
import Header from "../../components/Header";
import LatesNews from "../../components/LatesNews";
import Navbar from "../../components/Navbar";

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header />
                <section className="w-11/12 mx-auto">
                    <LatesNews />
                </section>
                <nav className="w-11/12 mx-auto mt-8">
                    <Navbar />
                </nav>
            </header>
            <main>
                <section className="left_nav"></section>
                <section className="main">
                    <Outlet />
                </section>
                <section className="right_nav"></section>
            </main>
        </div>
    );
};

export default HomeLayout;