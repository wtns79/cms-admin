import React, {useState} from "react";
import './content-grid.css'
import Grid from "../grid/grid";
import {Checkbox} from "antd";

const columns = [
    {
        name:'title',
        title: 'Наименование',
    },
    {
        name:'body',
        title: 'Содержание',
    },
    ,
    {
        name:'category',
        title: 'Категория',
        render:function (row) {
            return row?.category?.name
        }
    },
    ,
    {
        name:'media',
        title: 'Медия',
        render:function (row) {
            return row?.media?.file_name
        }
    },
    {
        name:'is_public',
        title: 'Опубликован',
        render:function (row) {
            return <Checkbox checked={row.is_public}></Checkbox>
        }
    },
    {
        name:'actions',
        title: 'Действия',
        isAction: true
    }
]

export default function ContentGrid({rows, onEditClick, onDelClick}) {
    return (
        <Grid columns={columns} rows={rows} onEditClick={onEditClick} onDelClick={onDelClick}/>
    );
}
