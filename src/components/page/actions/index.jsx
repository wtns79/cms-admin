import * as React from "react";
import {useState} from "react";
import './styles.css'
import api from "../../../service/page/index";
import {Button, Checkbox, Input, Modal, message, Tooltip, Divider} from "antd";
import CategoryCb from "../../category/cb";
import BlockCb from "../../block/cb";
import ContentCb from "../../content/cb";
import {EyeOutlined, HomeOutlined, PlusOutlined} from "@ant-design/icons";

export default function PageActions({page, onClose}) {
    // const [items, setItems] = useState(null);
    // const [title, setTitle] = useState(page?.title || '');
    // const [contentId, setContentId] = useState(page?.content_id);
    // const [blockId, setBlockId] = useState(page?.block_id);
    // const [categoryId, setCategoryId] = useState(page?.category_id);
    // const [mediaId, setMediaId] = useState(page?.media_id);
    // const [media, setMedia] = useState(page?.media);
    // const [isMain, setIsMain] = useState(page?.is_main || false);
    // const [openModal, setOpenModal] = useState(open)
    //
    // const action = page?.id ? api.update : api.create
    //
    // const onOk = function () {
    //     action({
    //         id: page?.id,
    //         is_main: isMain,
    //         title: title,
    //         block_id: blockId,
    //         category_id: categoryId,
    //         media_id: mediaId,
    //         content_id: contentId,
    //     }).catch(e => {
    //       console.log(e)
    //         message.error('Ошибка при сохранении данных')
    //     }).then(r => {
    //         if (!r) return
    //         setOpenModal(false)
    //         onClose(true)
    //     })
    // }

    const onShow = function () {

    }

    const onAdd = function () {

    }

    return (
        <div className='page-tree-actions'>
            <div className='page-tree-action-list'>
                <Tooltip title="Просмотр страницы">
                    <Button className='page-block-add' shape="circle" size="small" icon={<EyeOutlined />} onClick={onShow}/>
                </Tooltip>
                <Divider type="vertical"/>
                <Tooltip title="Сделать главной страницей">
                    <Button className='page-block-add' shape="circle" size="small" icon={<HomeOutlined />} onClick={onShow}/>
                </Tooltip>
                <Divider type="vertical"/>
                <Tooltip title="Добавить блок">
                    <Button className='page-block-add' shape="circle" size="small" icon={<PlusOutlined />} onClick={onAdd}/>
                </Tooltip>
            </div>
            <div className='page-tree-action-content'>
                {page.id}
            </div>
        </div>
    );
}
