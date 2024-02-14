import React, {useState} from "react";
import api from '../../../service/media/index';
import './style.css'
import {Button, Input, Modal} from "antd";

export default function MediaEdit({onClose}) {
    const [openModal, setOpenModal] = useState(true)
    const [file, setFile] = useState(null)

    const onOk = function () {
        let formData = new FormData();
        formData.append("file", file);
        api.create(formData).then(r => {
            onClose(r.data)
        })
    }

    const onCancel = function () {
        onClose(null)
    }

    return (
        <Modal
            title="Фильтр"
            centered
            open={openModal}
            onOk={onOk}
            onCancel={onCancel}
            width={500}
            footer={[
                <Button key="back" onClick={onOk}>
                    Сохранить
                </Button>,
                <Button key="close" onClick={onCancel}>
                    Закрыть
                </Button>
            ]}
        >
            <div className="page-content parking-spaces-filter">
                <div className="parking-spaces-filter-content">
                    <Input type="file" onChange={(e) => setFile(e.target.files[0])}/>
                </div>
            </div>
        </Modal>
    );
}
