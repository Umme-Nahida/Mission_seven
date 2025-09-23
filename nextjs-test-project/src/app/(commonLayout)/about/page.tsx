"use-client"
import style from "./about.module.css"
import { Metadata } from "next";

    export const metadata: Metadata = {
      title: "About us",
      description:"this is about page"
    }

   
const AboutPage = () => {
    return (
        <div>
            <h1 className={style.text_color}>this is about pages</h1>
        </div>
    );
};

export default AboutPage;