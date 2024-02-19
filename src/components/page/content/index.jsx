import React, {useEffect, useState} from "react";
import './style.css'
import {ArrowLeftOutlined, PlusOutlined} from "@ant-design/icons";
import {Button, Modal, Tooltip, Tree} from "antd";
import PageEdit from "../edit";
import PageContentEdit from "./edit";
import {useFormAction} from "react-router-dom";
import PageContentAction from "./action";
import api from "../../../service/content/index";

function choicePage() {
    return (
        <div className='page-content'>
            <div className="page-actions">
                <div className="title">Контент</div>
                <div className="items">
                </div>
            </div>
            <div>
                <div style={{fontSize:'1.5rem', color: '#3c4b64'}}> <ArrowLeftOutlined /> Выберите страницу</div>
            </div>
        </div>
    )
}

const { confirm } = Modal;

const getAllKeys = function (keys, items) {
    for(let item of items) {
        keys.push('' + item.key)
        if (item.items) {
            getAllKeys(keys, item.items)
        }
    }
}

const getAllKeysAll = function (items) {
    let keys = []
    getAllKeys(keys, items)
}

export default function PageContent({page, items, onChange}) {
    const [open, setOpen] = useState(false)
    // if (items == null) return choicePage();
    // if (page == null) return choicePage();
    const [content, setContent] = useState({page_id: page.id})
    const [keys, setKeys] = useState(getAllKeysAll(items))

    useEffect(()=>{
    },[])

    const onClose = function (reload) {
        setOpen(false)
        if (reload) {
            onChange(page)
        }
    }

    const onAdd = function () {
        setContent(prev => {
            prev.parent_id = null
        })
        onEdit(content)
    }

    const onAddChild = function (row) {
        setContent(prev => {
            prev.parent_id = row.id
        })
        onEdit(content)
    }

    const onEdit = function (row) {
        setContent(row)
        setOpen(true)
    }

    const onDelete = function (row) {
        confirm({
            title: 'Контент',
            content: 'Удалить блок?',
            onOk() {
                api.delById(row.id).then(r => {
                    onChange(page)
                })
            }
        });
    };

    const onMenuClick = function (key, content) {
        if (key == 1) onAddChild(content)
        if (key == 2) onDelete(content)
    }

    const titleRender = function (n) {
        return (
            <div className="tree-title-wrap">
                <div className="tree-title">{n.title}</div>
                <div className="tree-action"><PageContentAction content={n} onMenuClick={onMenuClick}/></div>
            </div>
        )
    }

    let editModal = open == true ? <PageContentEdit content={content} open={open} onClose={onClose}/> : null

    return (
        <div className='page-content'>
            <div className="page-actions">
                <div className="title">Контент {page.id}</div>
                <div className="items">
                    <Tooltip title="Добавить Контент">
                        <Button className='page-add' shape="circle" icon={<PlusOutlined />} onClick={onAdd}/>
                    </Tooltip>
                </div>
                {editModal}
            </div>
            <div className="page-content-wrap">
                <Tree showLine treeData={items} defaultExpandAll defaultExpandedKeys={keys} fieldNames={{children: 'items'}} titleRender={titleRender}/>
            </div>
        </div>
    );
}
