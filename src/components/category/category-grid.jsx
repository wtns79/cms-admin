import React, {useState} from "react";
import './category-grid.css'
import Grid from "../grid/grid";

const columns = [
    {
        name:'title',
        title: 'Наименование',
    },
    {
        name:'actions',
        title: 'Действия',
        isAction: true
    }
]

export default function CategoryGrid({rows, onEditClick, onDelClick}) {
    return (
        <Grid columns={columns} rows={rows} onEditClick={onEditClick} onDelClick={onDelClick}/>
    );
}
