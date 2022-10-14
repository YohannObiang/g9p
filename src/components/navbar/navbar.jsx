import "./navbar.css"
import React, { useState } from "react";
import Logo from "./Logo.png";
import TranslateSharpIcon from '@mui/icons-material/TranslateSharp';





const Navbar = () => {

    const [foodState, setFoodState] = useState("");
    return ( 
        <nav className="navbar">

            <div className="leftside">
                <img src={Logo} alt="Logo" />
                <select  className="province"  id="selectProvinces" onChange={(e) => {
                    const selectedFood = e.target.value;


                    const selectChanges = () => {
                    if (selectedFood==="province"){
                    document.getElementById("provinces").style.display = 'none'
                    }
                    else if (selectedFood==="departement"){
                    document.getElementById("provinces").style.display = 'inline'
                    }};


                    
                    setFoodState(selectChanges);
                }}>
                    <option value="province">Province</option>
                    <option id="departement" value="departement">Departement</option>
                </select>
                <select id="provinces" className="province">
                    <option>Estuaire</option>
                    <option>Haut-ogooue</option>
                    <option>Moyen-ogooue</option>
                    <option>Ngounie</option>
                    <option>Nyanga</option>
                    <option>Ogooue-ivindo</option>
                    <option>Ogooue-lolo</option>
                    <option>Ogooue-maritime</option>
                    <option>Woleu-ntem</option>
                </select>
            </div>
            
            <div className="rightside">
                <button className="don">Faire un don</button>
                <button className="contributeur">Devenir contributeur</button>
                <label className="selectLabel" for="selectBox">
                    <TranslateSharpIcon sx={{ fontSize: 18 }} className="translate"/>
                    <select className="langues" id="selectBox" onchange="changeFunc(value);">
                        <option value="1">Fr</option>
                        <option value="2">En</option>
                        
                    </select>
                    
                </label>
                
            </div>
        </nav>
     );
}

export default Navbar;