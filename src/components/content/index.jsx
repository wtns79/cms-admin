import React, {useEffect, useState} from "react";
import {Button, Tooltip} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import api from '../../service/content/index';
import './style.css'
import ContentGrid from "./content-grid";
import ContentEdit from "./edit";

export default function Content() {
    const [items, setItems] = useState(null)
    const [open, setOpen] = useState(false)
    const [content, setContent] = useState({})

    const load = function () {
        api.load().then(r => {
            setItems(r.data)
        })
    }

    React.useEffect(() => {
        load();
    }, []);

    const onAdd = function () {
        onEditClick({})
    }

    const onEditClick = function (row) {
        setContent(row)
        setOpen(true)
    }

    const onDelClick = function (row) {
        api.delById(row.id).then(r => load())
    }

    const onClose = function (refresh) {
        setOpen(false)
        load()
    }

    let grid;
    if (!items) {
        grid = null
    } else {
        grid = <ContentGrid rows={items} onEditClick={onEditClick} onDelClick={onDelClick}/>
    }

    return <div className="content">
            <div className="content-actions">
                <div className="title">Содержание</div>
                <div className="items">
                    <Tooltip title="Добавить Содержание">
                        <Button className='content-add' shape="circle" icon={<PlusOutlined />} onClick={onAdd}/>
                    </Tooltip>
                </div>
                {open && <ContentEdit content={content} open={open} onClose={onClose}/>}
            </div>
            <div className="items">
                {grid}
            </div>
    </div>;
}
