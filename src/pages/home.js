import React from "react"
import {Link} from "react-router-dom"
import Svg from "../components/svg-gabon";
import Details from "../components/Detail/Detail";
import Tabs from '../components/tabs/Tabs';


function Home({Data, getData}) {

  const [value, setValue] = React.useState(0);
  const [DataProvince, setDataProvince] = React.useState(Data[0]);
  const [Population, setPopulation] = React.useState("Gel-Lyte 3 OG Barely");
  const [Education, setEducation] = React.useState("Gel-Lyte 3 OG Barely");
  const [Economie, setEconomie] = React.useState("Gel-Lyte 3 OG Barely");
  const [Sante, setSante] = React.useState("Gel-Lyte 3 OG Barely");
  const [Histoire, setHistoire] = React.useState("Gel-Lyte 3 OG Barely");
  const [Politique, setPolitique] = React.useState("Gel-Lyte 3 OG Barely");
  const handleChange = (newValue) => {

    console.log(newValue)

    setPopulation(Data.data.attributes.histoire)
    setEducation(Data.data.attributes.etablissement_scolaires)
    setEconomie(Data.data.attributes.histoire)
    setSante(Data.data.attributes.histoire)
    setHistoire(Data.data.attributes.histoire)
    setPolitique(Data.data.attributes.histoire)
    console.log(Education.data)
    setValue(newValue);

    let Estuaire = document.getElementById('Estuaire'),
        HautOgooue = document.getElementById('HautOgooue'),
        MoyenOgooue = document.getElementById('MoyenOgooue'),
        Ngounie = document.getElementById('Ngounie'),
        Nyanga = document.getElementById('Nyanga'),
        OgooueIvindo = document.getElementById('OgooueIvindo'),
        Ogoouelolo = document.getElementById('Ogoouelolo'),
        OgoueMaritime = document.getElementById('OgoueMaritime'),
        WoleuNtem = document.getElementById('WoleuNtem'),
        BlasonImg = document.querySelector('.img')


    switch (newValue) {
      case 0:
        Estuaire.classList.toggle('active')
        HautOgooue.classList.remove('active')
        MoyenOgooue.classList.remove('active')
        Ngounie.classList.remove('active')
        Nyanga.classList.remove('active')
        OgooueIvindo.classList.remove('active')
        Ogoouelolo.classList.remove('active')
        OgoueMaritime.classList.remove('active')
        WoleuNtem.classList.remove('active')
        BlasonImg.src = require("../provinces/estuaire.png");
        // getData(1)
        break;
      case 1:
        Estuaire.classList.remove('active')
        HautOgooue.classList.toggle('active')
        MoyenOgooue.classList.remove('active')
        Ngounie.classList.remove('active')
        Nyanga.classList.remove('active')
        OgooueIvindo.classList.remove('active')
        Ogoouelolo.classList.remove('active')
        OgoueMaritime.classList.remove('active')
        WoleuNtem.classList.remove('active')
        BlasonImg.src = require("../provinces/haut-ogooue.png");
        // getData(2)
        break;
      case 2:
        Estuaire.classList.remove('active')
        HautOgooue.classList.remove('active')
        MoyenOgooue.classList.toggle('active')
        Ngounie.classList.remove('active')
        Nyanga.classList.remove('active')
        OgooueIvindo.classList.remove('active')
        Ogoouelolo.classList.remove('active')
        OgoueMaritime.classList.remove('active')
        WoleuNtem.classList.remove('active')
        BlasonImg.src = require("../provinces/moyen-ogooue.png");
        // getData(3)
        break;
      case 3:
        Estuaire.classList.remove('active')
        HautOgooue.classList.remove('active')
        MoyenOgooue.classList.remove('active')
        Ngounie.classList.toggle('active')
        Nyanga.classList.remove('active')
        OgooueIvindo.classList.remove('active')
        Ogoouelolo.classList.remove('active')
        OgoueMaritime.classList.remove('active')
        WoleuNtem.classList.remove('active')
        BlasonImg.src = require("../provinces/ngounie.png");
        // getData(4)
        break;
      case 4:
        Estuaire.classList.remove('active')
        HautOgooue.classList.remove('active')
        MoyenOgooue.classList.remove('active')
        Ngounie.classList.remove('active')
        Nyanga.classList.toggle('active')
        OgooueIvindo.classList.remove('active')
        Ogoouelolo.classList.remove('active')
        OgoueMaritime.classList.remove('active')
        WoleuNtem.classList.remove('active')
        BlasonImg.src = require("../provinces/nyanga.png");
        // getData(5)
        break;
      case 5:
        Estuaire.classList.remove('active')
        HautOgooue.classList.remove('active')
        MoyenOgooue.classList.remove('active')
        Ngounie.classList.remove('active')
        Nyanga.classList.remove('active')
        OgooueIvindo.classList.toggle('active')
        Ogoouelolo.classList.remove('active')
        OgoueMaritime.classList.remove('active')
        WoleuNtem.classList.remove('active')
        BlasonImg.src = require("../provinces/ogooue-ivindo.png");
        // getData(5)
        break;
      case 6:
        Estuaire.classList.remove('active')
        HautOgooue.classList.remove('active')
        MoyenOgooue.classList.remove('active')
        Ngounie.classList.remove('active')
        Nyanga.classList.remove('active')
        OgooueIvindo.classList.remove('active')
        Ogoouelolo.classList.toggle('active')
        OgoueMaritime.classList.remove('active')
        WoleuNtem.classList.remove('active')
        BlasonImg.src = require("../provinces/ogooue-lolo.png");
        // getData(6)
        break;
      case 7:
        Estuaire.classList.remove('active')
        HautOgooue.classList.remove('active')
        MoyenOgooue.classList.remove('active')
        Ngounie.classList.remove('active')
        Nyanga.classList.remove('active')
        OgooueIvindo.classList.remove('active')
        Ogoouelolo.classList.remove('active')
        OgoueMaritime.classList.toggle('active')
        WoleuNtem.classList.remove('active')
        BlasonImg.src = require("../provinces/ogooue-maritime.png");
        // getData(7)
        break;
      case 8:
        Estuaire.classList.remove('active')
        HautOgooue.classList.remove('active')
        MoyenOgooue.classList.remove('active')
        Ngounie.classList.remove('active')
        Nyanga.classList.remove('active')
        OgooueIvindo.classList.remove('active')
        Ogoouelolo.classList.remove('active')
        OgoueMaritime.classList.remove('active')
        WoleuNtem.classList.toggle('active')
        BlasonImg.src = require("../provinces/woleu-ntem.png");
        // getData(8)
        break;
      default:
        console.log(`Sorry`);
    }
  };


    return (
      <>
       <Tabs value={value} handleChange={handleChange}/>
        <main>
          <Svg handleChange={handleChange}/>
          <div className="detailsBox">
            <Details
            Population = {Population}
            Education = {Education}
            Economie = {Economie}
            Sante = {Sante}
            Histoire = {Histoire}
            Politique = {Politique}
            />
          </div>
        </main>
      </>
    );
}

export default Home