import React, {useState} from 'react';
import {Menu} from "./Menu/Menu";
import 'primeicons/primeicons.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Table} from "./Table/Table";
import {CustomRoutes} from "./Routes/Routes";

function App() {
    return (
        <div>
            <Router>
                <Menu/>
                <CustomRoutes/>
            </Router>
        </div>
    );
}

export default App;
