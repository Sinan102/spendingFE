import {Route, Routes} from "react-router-dom";
import {Table} from "../Table/Table";
import React from "react";

export const CustomRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/"/>
                <Route path="/table" element={<Table/>}/>
            </Routes>
        </div>
    );
}