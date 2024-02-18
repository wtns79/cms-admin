import * as React from "react";
import {useState} from "react";
import './styles.css'
import api from "../../../service/category/index";
import {Button, Input, Modal} from "antd";

export default function CategoryEdit({category, open, onClose}) {
    const [title, setTitle] = useState(category?.title || '');
    const [openModal, setOpenModal] = useState(open)

    const action = category?.id ? api.update : api.create

    const onOk = function () {
        action({
            id: category?.id,
            title: title
        }).then(r => {
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
            <div className="category-edit">
                <div className="label-inputs-v">
                    <Input value={title} type="text" onChange={(e) => setTitle(e.target.value)}/>
                </div>
            </div>
        </Modal>
    );
}
