import React from "react";
import { Link, useHref } from "react-router-dom";

const Home = () => {
    return (
        <section className="hero relative h-screen min-w-[1240px] flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl tracking-tight font-bold">Welcome to <span className="text-purple-700">CanvasDraw</span></h1>
                <p className="mt-2 text-lg">Your creative space for digital art, NFTs and ideas.</p>
                <Link to="/dashboard">
                    <button className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-800">
                        Get Started
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Home;
