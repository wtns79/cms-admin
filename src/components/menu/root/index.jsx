import * as React from "react";
import {useState} from "react";
import './styles.css'
import api from "../../../service/menu/index";
import {Button, Checkbox, Input, Modal, message} from "antd";
import PageCb from "../../page/cb";

export default function MenuRoot({menu, open, onClose}) {
    const [title, setTitle] = useState(menu?.title || '');
    const [parentId, setParentId] = useState(menu?.parent_id);
    const [pageId, setPageId] = useState(menu?.page_id);
    const [openModal, setOpenModal] = useState(open)

    const action = menu?.id ? api.update : api.create

    const onOk = function () {
        action({
            id: menu?.id,
            title: title,
            page_id: pageId,
            parent_id: parentId,
        }).catch(e => {
          console.log(e)
            message.error('Ошибка при сохранении данных')
        }).then(r => {
            if (!r) return
            setOpenModal(false)
            onClose(true)
        })
    }

    const onCancel = function () {
        onClose(false)
        setOpenModal(false)
    }

    return (
        <Modal
            title="Меню"
            centered
            okText={'Сохранить'}
            cancelText={'Отменить'}
            open={openModal}
            onOk={onOk}
            onCancel={onCancel}
            width={500}
        >
            <div className="content-edit">
                <div className="label-inputs-v">
                    <label>Название</label>
                    <Input value={title} type="text" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="label-inputs-v">
                    <label>Страница</label>
                    <PageCb value={pageId} onChange={(v) => setPageId(v)}/>
                </div>
            </div>
        </Modal>
    );
}
