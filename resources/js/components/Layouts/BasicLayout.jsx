import React from "react";
import RootRouter from "../../pages/RootRouter";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const BasicLayout = () => {
    return (
        <>
            <Header />
            <main>
                <div className="wrapper">
                    <RootRouter />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default BasicLayout;
