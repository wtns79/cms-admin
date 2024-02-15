import React, {useEffect, useState} from "react";
import {Button, Tooltip} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import api from '../../service/block/index';
import './style.css'
import BlockGrid from "./block-grid";
import BlockEdit from "./edit";

export default function Block() {
    const [items, setItems] = useState(null)
    const [open, setOpen] = useState(false)
    const [block, setBlock] = useState({})

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
        setBlock(row)
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
        grid = <BlockGrid rows={items} onEditClick={onEditClick} onDelClick={onDelClick}/>
    }

    return <div className="block">
            <div className="block-actions">
                <div className="title">Блоки</div>
                <div className="items">
                    <Tooltip title="Добавить категорию">
                        <Button className='block-add' shape="circle" icon={<PlusOutlined />} onClick={onAdd}/>
                    </Tooltip>
                </div>
                {open && <BlockEdit block={block} open={open} onClose={onClose}/>}
            </div>
            <div className="items">
                {grid}
            </div>
    </div>;
}
