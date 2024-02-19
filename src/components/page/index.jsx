import React, {useEffect, useState} from "react";
import './style.css'
import api from "../../service/page";
import apiContent from "../../service/content";
import {Button, Tooltip} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import PageEdit from "./edit";
import PageGrid from "./grid";
import PageContent from "./content";

export default function Page() {
    const [items, setItems] = useState([])
    const [open, setOpen] = useState(false)
    const [page, setPage] = useState(null)
    const [contents, setContents] = useState(null)

    const load = function (page) {
        setItems([])
        setPage(null)
        api.load().then(r => {
            setItems(r.data)
        })
    }

    const loadContent = function (page) {
        setContents(null)
        if (page == null) return;
        apiContent.tree(page.id).then(r => {
            setContents(r.data)
        })
    }

    React.useEffect(() => {
        load();
    }, []);

    const onAddRoot = function () {
        onEditClick({})
    }

    const onRowClick = function (row) {
        setPage(row)
        loadContent(row)
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
        if (refresh) {
            load(page)
        }
    }

    return <div className="page">
        <div className="pages-wrap">
            <div className="page-actions">
                <div className="title">Страницы</div>
                <div className="items">
                    <Tooltip title="Добавить Страницу">
                        <Button className='page-add' shape="circle" icon={<PlusOutlined />} onClick={onAddRoot}/>
                    </Tooltip>
                </div>
                {open && <PageEdit page={page} open={open} onClose={onClose}/>}
            </div>
            <div className="page-list-wrap">
                <PageGrid rows={items} onEditClick={onEditClick} onDelClick={onDelClick} onRowClick={onRowClick}/>
            </div>
        </div>
        <div className="page-contents-wrap">
            {page && contents && <PageContent items={contents} page={page}/>}
        </div>

    </div>;
}
