import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import "./styles/reset.css";
import "./styles/style.css";

import foto1 from "./img/foto1.png";
import foto2 from "./img/foto2.png";

import Filmes from "./components/Filmes";
import Horarios from "./components/Horarios";




function App() {



    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Filmes />} />
                <Route path="/sessoes/:idSessoes" element={<Horarios />} />
            </Routes>
        </BrowserRouter>
    );

}

ReactDOM.render(<App />, document.querySelector(".root"));