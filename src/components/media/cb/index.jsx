import React, {useEffect, useState} from "react";
import {Button, Input, Modal, Row, Select, Space, Tooltip} from "antd";
import api from '../../../service/media/index';
import './style.css'
import MediaCbItem from "./item";
import MediaItem from "../item";

export default function MediaCb({value, onChange}) {
    const [items, setItems] = useState(null)
    const [media, setMedia] = useState(value)
    const [openModal, setOpenModal] = useState(false)

    const load = function () {
        api.load().then(r => {
            setItems(r.data)
        })
    }

    React.useEffect(() => {
        load();
    }, []);

    const onOpenModal = function () {
        setOpenModal(true)
    }

    const onOk = function () {
        setOpenModal(false)
    }

    const onCancel = function () {
        setOpenModal(false)
    }

    const onChoice = function (media) {
        setMedia(media.file_name)
        setOpenModal(false)
        onChange(media)
    }

    let mediaItems = null
    if (items) {
        mediaItems = items.map(item => <MediaCbItem colSpan={6} key={item.id} media={item} onChange={onChoice} />)
    }

    return (
        <>
            <Space.Compact style={{ width: '100%' }}>
                <Input disabled value={media} />
                <Button type="primary" onClick={onOpenModal}>Выбрать</Button>
            </Space.Compact>
            <Modal
                title="Блок"
                centered
                // okText={'Сохранить'}
                // cancelText={'Отменить'}
                open={openModal}
                // onOk={onOk}
                onCancel={onCancel}
                width={900}
                footer={[]}
            >
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {mediaItems}
                </Row>
            </Modal>
        </>
    )
}
