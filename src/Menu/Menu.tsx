import {Menubar} from 'primereact/menubar';
import {MenuItem} from "primereact/menuitem";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import React from "react";
import {useNavigate} from 'react-router-dom';

export const Menu = () => {
    const navigate = useNavigate();
    let items: MenuItem[]
    items = [
        {
            label: "Index",
            command: () => {
                navigate('/');
            }
        },
        {
            label: "Table",
            command: () => {
                navigate('/table');
            }
        },
    ]
    return (
        <div className="card">
            <Menubar model={items} end={<ThemeSwitcher/>}/>
        </div>
    );

}