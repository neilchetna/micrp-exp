import React from "react";
import AboutCard from "./AboutCard";

import Varun from "../../assets/mun.jfif";
import Mandy from "../../assets/mandy2.jfif";
import Nol from "../../assets/nol.jpg";
import "./About.css";
import about from "../../assets/jsondata/about.json";

export default function About() {
  return (
    <>
      <div className="cell">
        <AboutCard
          name="Abhishek Nawal"
          roll_no="1910DMTCSE05925"
          github="https://github.com/abhisheknawal87"
          linkedin="https://www.linkedin.com/in/abhsiheknawal/"
          email="mailto:abhisheknawal87@gmail.com"
          photo={Nol}
        />
        <AboutCard
          name="Vinay Pursnani"
          roll_no="1810DMTCSE04463"
          github="https://github.com/vinaypursnani"
          linkedin="https://www.linkedin.com/in/vinay-pursnani"
          email="mailto:vinaypursnani@icloud.com"
          photo={Varun}
        />
        <AboutCard
          name="Mandaar Sangisapu"
          roll_no="1810DMTCLCP03166"
          github="https://github.com/mandy0069"
          linkedin="https://www.linkedin.com/in/mandy0609/"
          email="msangisapu00@gmail.com"
          photo={Mandy}
        />
      </div>
    </>
  );
}
