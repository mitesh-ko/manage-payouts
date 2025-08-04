import React from "react";
import { redirect } from "next/navigation";

const Home = () => {
    redirect("/payouts");

    return <div>Home</div>;
};

export default Home;
