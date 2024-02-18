import React, {useState} from "react";
import './style.css'
import Grid from "../../grid/grid";

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

export default function PageGrid({rows, onEditClick, onDelClick, onRowClick}) {
    return (
        <Grid columns={columns} rows={rows} onEditClick={onEditClick} onDelClick={onDelClick} onRowClick={onRowClick}/>
    );
}
