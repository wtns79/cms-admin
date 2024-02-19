import React, {useEffect, useState} from "react";
import './style.css'
import api from "../../service/page";
import apiContent from "../../service/content";
import {Button, Tooltip} from "antd";
import {EyeOutlined, PlusOutlined} from "@ant-design/icons";
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

    const onChangeTree = function (page) {
        loadContent(page)
    }

    const onShow = function (page) {
        console.log(page)
    }

    const otherActions = function (page) {
        let pageLink = `${process.env.REACT_APP_API_SERVER}/page/${page.slug}`
        const onShowClick = function (e) {
            window.open(pageLink, "_blank");
            e.preventDefault()
            e.stopPropagation()
        }
        return (
            <Tooltip title="Просмотр">
                <Button shape="circle" icon={<EyeOutlined />} size='small' onClick={onShowClick}/>
            </Tooltip>
        )

    }

    let pc = (page != null && contents != null) ? <PageContent items={contents} page={page} onChange={onChangeTree}/> : null

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
                <PageGrid rows={items} onEditClick={onEditClick} onDelClick={onDelClick} onRowClick={onRowClick} onShow={onShow} otherActions={otherActions}/>
            </div>
        </div>
        <div className="page-contents-wrap">
            {pc}
        </div>

    </div>;
}
