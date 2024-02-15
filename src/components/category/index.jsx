import React, {useEffect, useState} from "react";
import {Button, Tooltip} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import api from '../../service/category/index';
import './style.css'
import CategoryGrid from "./category-grid";
import CategoryEdit from "./edit";

export default function Category() {
    const [items, setItems] = useState(null)
    const [open, setOpen] = useState(false)
    const [category, setCategory] = useState({})

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
        setCategory(row)
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
        grid = <CategoryGrid rows={items} onEditClick={onEditClick} onDelClick={onDelClick}/>
    }

    return <div className="category">
            <div className="category-actions">
                <div className="title">Категории</div>
                <div className="items">
                    <Tooltip title="Добавить категорию">
                        <Button className='category-add' shape="circle" icon={<PlusOutlined />} onClick={onAdd}/>
                    </Tooltip>
                </div>
                {open && <CategoryEdit category={category} open={open} onClose={onClose}/>}
            </div>
            <div className="items">
                {grid}
            </div>
    </div>;
}
