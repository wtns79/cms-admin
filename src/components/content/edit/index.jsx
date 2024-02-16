import * as React from "react";
import {useState} from "react";
import './styles.css'
import api from "../../../service/content/index";
import {Button, Checkbox, Input, Modal, message} from "antd";
import CategoryCb from "../../category/cb";
import MediaCb from "../../media/cb";
import TextArea from "antd/es/input/TextArea";

export default function ContentEdit({content, open, onClose}) {
    const [items, setItems] = useState(null);
    const [title, setTitle] = useState(content?.title || '');
    const [body, setBody] = useState(content?.body || '');
    const [categoryId, setCategoryId] = useState(content?.category_id);
    const [mediaId, setMediaId] = useState(content?.media_id);
    const [media, setMedia] = useState(content?.media);
    const [isPublic, setIsPublic] = useState(content?.is_public || false);
    const [openModal, setOpenModal] = useState(open)

    const action = content?.id ? api.update : api.create

    const onOk = function () {
        action({
            id: content?.id,
            title: title,
            body: body,
            category_id: categoryId,
            media_id: mediaId,
            is_public: isPublic,
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
                    <label>Название</label>
                    <Input value={title} type="text" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="label-inputs-v">
                    <label>Содержание</label>
                    {/*<Input value={body} type="text" onChange={(e) => setBody(e.target.value)}/>*/}
                    <TextArea rows={4}  value={body} type="text" onChange={(e) => setBody(e.target.value)}/>
                </div>
                <div className="label-inputs-v">
                    {/*<Checkbox checked={isPublic} onChange={onPublicChange}>Публичный</Checkbox>*/}
                    <Checkbox checked={isPublic} onChange={(e) => setIsPublic(e.target.checked)}>Публичный</Checkbox>
                </div>
                <div className="label-inputs-v">
                    <label>Категория</label>
                    <CategoryCb value={categoryId} onChange={onCategoryChange}/>
                </div>
                <div className="label-inputs-v">
                    <label>Медиа</label>
                    <MediaCb value={media?.file_name} onChange={onMediaChange}/>
                </div>
            </div>
        </Modal>
    );
}
