import * as React from "react";
import {useState} from "react";
import './styles.css'
import api from "../../../service/page/index";
import {Button, Checkbox, Input, Modal, message} from "antd";
import CategoryCb from "../../category/cb";
import BlockCb from "../../block/cb";
import ContentCb from "../../content/cb";

export default function PageEdit({page, open, onClose}) {
    const [items, setItems] = useState(null);
    const [title, setTitle] = useState(page?.title || '');
    const [contentId, setContentId] = useState(page?.content_id);
    const [blockId, setBlockId] = useState(page?.block_id);
    const [categoryId, setCategoryId] = useState(page?.category_id);
    const [mediaId, setMediaId] = useState(page?.media_id);
    const [media, setMedia] = useState(page?.media);
    const [isMain, setIsMain] = useState(page?.is_main || false);
    const [openModal, setOpenModal] = useState(open)

    const action = page?.id ? api.update : api.create

    const onOk = function () {
        action({
            id: page?.id,
            is_main: isMain,
            title: title,
            block_id: blockId,
            category_id: categoryId,
            media_id: mediaId,
            content_id: contentId,
        }).catch(e => {
          console.log(e)
            message.error('Ошибка при сохранении данных')
        }).then(r => {
            if (!r) return
            setOpenModal(false)
            onClose(true)
        })
    }

    const onCategoryChange = function (id) {
        setCategoryId(id)
    }

    const onMediaChange = function (row) {
        setMediaId(row.id)
    }

    const onPublicChange = function (e) {
        setIsPublic(e.target.checked)
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
                    <Checkbox checked={isMain} onChange={(e) => setIsMain(e.target.checked)}>Главная страница</Checkbox>
                </div>
                <div className="label-inputs-v">
                    <label>Название</label>
                    <Input value={title} type="text" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="label-inputs-v">
                    <label>Блок</label>
                    <BlockCb value={blockId} onChange={(v) => setBlockId(v)}/>
                </div>
                <div className="label-inputs-v">
                    <label>Категория</label>
                    <CategoryCb value={categoryId} onChange={onCategoryChange}/>
                </div>
                <div className="label-inputs-v">
                    <label>Контент</label>
                    <ContentCb value={contentId} onChange={(v) => setContentId(v)}/>
                </div>
            </div>
        </Modal>
    );
}
