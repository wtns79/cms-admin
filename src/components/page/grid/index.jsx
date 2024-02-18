import React, {useState} from "react";
import './style.css'
import Grid from "../../grid/grid";
import {HomeOutlined} from "@ant-design/icons";
import {Tooltip} from "antd";

const columns = [
    {
        name:'title',
        title: 'Наименование',
        render:function (row) {
            let main = row.is_main ? <Tooltip title={'Главная страница'}> <HomeOutlined style={{color: 'green', paddingRight:'4px'}}/> </Tooltip> : null;
            return <span >{main}{row.title}</span>
        }
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
