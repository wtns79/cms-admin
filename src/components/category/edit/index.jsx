import * as React from "react";
import {useState} from "react";
import './styles.css'
import api from "../../../service/category/index";
import {Button, Input, Modal} from "antd";

export default function CategoryEdit({category, open, onClose}) {
    const [items, setItems] = useState(null);
    const [name, setName] = useState(category?.name || '');
    const [openModal, setOpenModal] = useState(open)

    const action = category?.id ? api.update : api.create

    const onOk = function () {
        action({
            id: category?.id,
            name: name
        }).then(r => {
            setOpenModal(false)
            onClose(true)
        })
    }

    const onResetClick = function () {
    }

    const onCancel = function () {
        onClose(false)
        setOpenModal(false)
    }

    return (
        <Modal
            title="Категория"
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
            <div className="page-content parking-spaces-filter">
                <div className="parking-spaces-filter-content">
                    <Input value={name} type="text" onChange={(e) => setName(e.target.value)}/>
                </div>
            </div>
        </Modal>
    );
}
