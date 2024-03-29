import * as React from "react";
import {useState} from "react";
import './styles.css'
import api from "../../../service/page/index";
import {Button, Checkbox, Input, Modal, message} from "antd";

export default function PageRoot({page, open, onClose}) {
    const [title, setTitle] = useState(page?.title || '');
    const [blockId, setBlockId] = useState(page?.block_id);
    const [isMain, setIsMain] = useState(page?.is_main || false);
    const [openModal, setOpenModal] = useState(open)

    const action = page?.id ? api.update : api.create

    const onOk = function () {
        action({
            id: page?.id,
            is_main: isMain,
            title: title,
            block_id: blockId
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
            title="Содержание"
            centered
            okText={'Сохранить'}
            cancelText={'Отменить'}
            open={openModal}
            onOk={onOk}
            onCancel={onCancel}
            width={600}
        >
            <div className="content-edit">
                <div className="label-inputs-v">
                    <label>Название</label>
                    <Input value={title} type="text" onChange={(e) => setTitle(e.target.value)}/>
                </div>
            </div>
        </Modal>
    );
}
