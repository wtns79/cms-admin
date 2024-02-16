import React, {useEffect, useState} from "react";
import './style.css'
import api from "../../service/page";
import {Button, Tooltip} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import PageEdit from "./edit";
import PageTree from "./tree";
import PageRoot from "./root";
import PageActions from "./actions";

export default function Page() {
    const [items, setItems] = useState(null)
    const [open, setOpen] = useState(false)
    const [page, setPage] = useState(null)

    const load = function () {
        setItems(null)
        api.tree().then(r => {
            setItems(r.data)
        })
    }

    React.useEffect(() => {
        load();
    }, []);

    const onAddRoot = function () {
        api.root().then(r => {
            console.log(r.data)
            onEditClick(r.data)
        })
    }

    const onEditClick = function (row) {
        setPage(row)
        setOpen(true)
    }

    const onDelClick = function (row) {
        api.delById(row.id).then(r => load())
    }

    const onClose = function (refresh) {
        setOpen(false)
        load()
    }

    const onSelectClick = function (row) {
        setPage(row)
    }

    let tree;
    if (!items) {
        tree = null
    } else {
        tree = <PageTree data={items} onSelectClick={onSelectClick}/>
    }

    return <div className="page">
        <div className="page-actions">
            <div className="title">Страницы</div>
            <div className="items">
                <Tooltip title="Добавить Страницу">
                    <Button className='page-add' shape="circle" icon={<PlusOutlined />} onClick={onAddRoot}/>
                </Tooltip>
            </div>
            {open && <PageRoot page={page} open={open} onClose={onClose}/>}
        </div>
        <div className="page-content">
            <div className="items-tree">
                {tree}
            </div>
            <div className="items-tree-actions">
                {page && <PageActions page={page}/>}
            </div>
        </div>
    </div>;
}
