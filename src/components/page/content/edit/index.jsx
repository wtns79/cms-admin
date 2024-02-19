import * as React from "react";
import {useEffect, useState} from "react";
import './styles.css'
import api from "../../../../service/content/index";
import {Button, Checkbox, Input, Modal, message} from "antd";
import PageContentEditRoot from "./root";
import PageContentEditBlock from "./block";

export default function PageContentEdit({content, open, onClose}) {
    if (!open) return null;
    const [parentId, setParentId] = useState(content?.parent_id);
    const [contentObj, setContentObj] = useState(Object.assign({}, content));
    const [openModal, setOpenModal] = useState(open)
    const action = content?.id ? api.update : api.create

    useEffect(()=>{

    })
    console.log(content)

    const onOk = function () {
        action(contentObj).catch(e => {
            console.log(e)
        }).then(r => {
            if (!r) return
            setOpenModal(false)
            onClose(true)
        })
    }

    const onChange = function (content) {
        setContentObj(Object.assign(contentObj, content))
    }

    const onCancel = function () {
        onClose(false)
        setOpenModal(false)
    }

    return (
        <Modal
            title="Содержание"
            centered
            okText={'Сохранить'}
            cancelText={'Отменить'}
            open={openModal}
            onOk={onOk}
            onCancel={onCancel}
            width={600}
        >
            {parentId == null && <PageContentEditRoot content={contentObj} onChange={onChange}/>}
            {parentId != null && <PageContentEditBlock content={contentObj} onChange={onChange}/>}
        </Modal>
    );
}
