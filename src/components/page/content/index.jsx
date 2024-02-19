import React, {useState} from "react";
import './style.css'
import {ArrowLeftOutlined, PlusOutlined} from "@ant-design/icons";
import {Button, Tooltip, Tree} from "antd";
import PageEdit from "../edit";
import PageContentEdit from "./edit";

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

export default function PageContent({page, items}) {
    const [open, setOpen] = useState(false)
    if (items == null) return choicePage();
    if (page == null) return choicePage();
    const [content, setContent] = useState({page_id: page.id})

    const onClose = function (reload) {
        setOpen(false)
    }

    const onAdd = function () {
        setContent({...content, parent_id: null})
        onEdit(content)
    }

    const onEdit = function (row) {
        setContent(row)
        setOpen(true)
    }

    return (
        <div className='page-content'>
            <div className="page-actions">
                <div className="title">Контент {page.id}</div>
                <div className="items">
                    <Tooltip title="Добавить Контент">
                        <Button className='page-add' shape="circle" icon={<PlusOutlined />} onClick={onAdd}/>
                    </Tooltip>
                </div>
                <PageContentEdit content={content} open={open} onClose={onClose}/>
            </div>
            <div className="page-content-wrap">
                {/*<Tree treeData={items}/>*/}
            </div>
        </div>
    );
}
