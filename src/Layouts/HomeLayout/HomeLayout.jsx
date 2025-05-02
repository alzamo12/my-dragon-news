import { Outlet } from "react-router";
import Header from "../../components/Header/Header";
import LatesNews from "../../components/LatesNews/LatesNews";

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header />
                <section className="w-11/12 mx-auto">
                    <LatesNews />
                </section>
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