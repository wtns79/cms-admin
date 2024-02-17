import * as React from "react";
import {useState} from "react";
import './styles.css'
import api from "../../../service/menu/index";
import {Button, Checkbox, Input, Modal, message, Tooltip, Divider, Popconfirm} from "antd";
import CategoryCb from "../../category/cb";
import BlockCb from "../../block/cb";
import ContentCb from "../../content/cb";
import {DeleteOutlined, EyeOutlined, HomeOutlined, PlusOutlined} from "@ant-design/icons";

export default function MenuActions({menu, onAddSubMenu, onDeleted}) {
    const [openConfirm, setOpenConfirm] = useState(false);
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

    React.useEffect(() => {
    }, []);

    const onDelClick = function () {
        setOpenConfirm(true)
    }

    const onOkConfirm = function () {
        api.delById(menu.id).then(r=>{
            setOpenConfirm(false)
            onDeleted();
        })
    }

    const onCancelPageConfirm = function () {
        setOpenConfirm(false)
    }

    const onAdd = function () {
        onAddSubMenu(menu)
    }

    return (
        <div className='menu-tree-actions'>
            <div className='menu-tree-action-list'>
                <Tooltip title="Удалить меню">
                    <Popconfirm
                        title="Меню"
                        description="Удалить меню?"
                        open={openConfirm}
                        onConfirm={onOkConfirm}
                        onCancel={onCancelPageConfirm}
                        okText="Да"
                        cancelText="Нет"
                    >
                        <Button className='page-block-add' shape="circle" size="small" icon={<DeleteOutlined />} onClick={onDelClick}/>
                    </Popconfirm>
                </Tooltip>
                <Divider type="vertical"/>
                <Tooltip title="Добавить подменю">
                    <Button className='page-block-add' shape="circle" size="small" icon={<PlusOutlined />} onClick={onAdd}/>
                </Tooltip>
            </div>
            <div className='page-tree-action-content'>
                {menu.id}
            </div>
        </div>
    );
}
