import React from "react"
import {Link} from "react-router-dom"
import Svg from "../components/svg-gabon"


function About() {
    return (
      <>
        <main>
          <Svg/>
        </main>
        <nav>
          <Link to="/">Accueil</Link>
        </nav>
      </>
    );
}

export default About