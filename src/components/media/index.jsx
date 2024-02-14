import React, {useState} from "react";
import api from '../../service/media/index';
import './style.css'
import {useNavigate} from "react-router-dom";
import MediaItems from "./items";
import {Button, Row, Tooltip} from "antd";
import { PlusOutlined } from '@ant-design/icons';
import MediaEdit from "./edit";
import MediaItem from "./item";

export default function Media() {
    const [items, setItems] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    const navigate = useNavigate();

    const load = function () {
        setItems(null)
        api.load().then( r => {
            setItems(r.data)
        })
    }

    React.useEffect(() => {
        load();
    }, []);

    const onAdd = function () {
        setOpenModal(true)
    }

    const onDelete = function (media) {
        api.delById(media.id).then( r => {
            load()
        })
    }

    const onClose = function (media) {
        setOpenModal(false)
        if (media != null) {
            setItems(items => [...items, media])
        }
    }

    let mediaItems = null
    if (items) {
        mediaItems = items.map(item => <MediaItem key={item.id} media={item} onDelete={onDelete} />)
    }

    let editModal = null;
    if (openModal) {
        editModal = <MediaEdit onClose={onClose}/>
    }
    return <div className="media">
        <div className="media-actions">
            <Tooltip title="Добавить">
                <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={onAdd}/>
            </Tooltip>
        </div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {mediaItems}
        </Row>
        <div className="media-modal">
            {editModal}
        </div>
    </div>;
}
