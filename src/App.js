import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Navbar from './components/navbar/navbar';
import './App.css';
import axios from 'axios';

function App() {

  const [Data, setData] = React.useState([]);
  React.useEffect(() => {
    getData(1);
  },[]);

  const getData = async (id) => {
    var response = await axios.get(`http://192.168.1.107:1337/api/provinces/${id}?populate=*`);
    setData(response.data);

  };
console.log(Data)
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home
        Data = {Data}
        getData = {getData}
        />} />
      </Routes>
    </div>
  );
}

export default App;
