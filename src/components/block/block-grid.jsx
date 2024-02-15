import React, {useState} from "react";
import './block-grid.css'
import Grid from "../grid/grid";

const columns = [
    {
        name:'title',
        title: 'Наименование',
    },
    {
        name:'type',
        title: 'Тип',
    },
    {
        name:'actions',
        title: 'Действия',
        isAction: true
    }
]

export default function BlockGrid({rows, onEditClick, onDelClick}) {
    return (
        <Grid columns={columns} rows={rows} onEditClick={onEditClick} onDelClick={onDelClick}/>
    );
}
