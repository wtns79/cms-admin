import * as React from "react";
import {useState} from "react";
import './styles.css'
import api from "../../../service/block/index";
import {Button, Input, Modal, Select} from "antd";
import BlockTypeCb from "../type-cb";

const types = [
    {value: 'layout', label: 'Макет'},
    {value: 'container', label: 'Контейнер'},
    {value: 'grid', label: 'Сетка'},
    {value: 'text', label: 'Текст'},
    {value: 'top-navigation', label: 'Верхнее меню'},
]

export default function BlockEdit({block, open, onClose}) {
    const [items, setItems] = useState(null);
    const [title, setTitle] = useState(block?.title || '');
    const [type, setType] = useState(block?.type || '');
    const [code, setCode] = useState(block?.code || '');
    const [openModal, setOpenModal] = useState(open)

    const action = block?.id ? api.update : api.create

    const onOk = function () {
        action({
            id: block?.id,
            title: title,
            type: type,
            code: code,
        }).then(r => {
            setOpenModal(false)
            onClose(true)
        })
    }

    const onTypeChange = (value) => {
        setType(value)
    };

    const onResetClick = function () {
    }

    const onCancel = function () {
        onClose(false)
        setOpenModal(false)
    }

    return (
        <Modal
            title="Блок"
            centered
            okText={'Сохранить'}
            cancelText={'Отменить'}
            open={openModal}
            onOk={onOk}
            onCancel={onCancel}
            width={500}
            // footer={[
            //     <Button key="back" onClick={onOk}>
            //         Применить
            //     </Button>,
            //     <Button key="reset" onClick={onResetClick}>
            //         Сбросить
            //     </Button>,
            //     <Button key="close" onClick={onCancel}>
            //         Закрыть
            //     </Button>
            // ]}
        >
            <div className="block-edit">
                <div className="label-inputs-v">
                    <label>Код</label>
                    <Input value={code} type="text" onChange={(e) => setCode(e.target.value)}/>
                </div>
                <div className="label-inputs-v">
                    <label>Тип</label>
                    {/*<Input value={type} type="text" onChange={(e) => setType(e.target.value)}/>*/}
                    <BlockTypeCb value={type} onChange={(v) => setType(v)}/>
                </div>
                <div className="label-inputs-v">
                    <label>Название</label>
                    <Input value={title} type="text" onChange={(e) => setTitle(e.target.value)}/>
                </div>
            </div>
        </Modal>
    );
}
