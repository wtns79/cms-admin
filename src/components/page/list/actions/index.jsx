import * as React from "react";
import {useState} from "react";
import './styles.css'
import api from "../../../service/page/index";
import {Button, Checkbox, Input, Modal, message, Tooltip, Divider, Popconfirm, Dropdown} from "antd";
import {DeleteOutlined, EyeOutlined, HomeOutlined, PlusOutlined} from "@ant-design/icons";

function PageActionsMenu({items, onClick}) {
    return (
        <Dropdown menu={{ items, onClick }}>
            <Button className='page-block-add' shape="circle" size="small" icon={<PlusOutlined />} onClick={(e) => e.preventDefault()}/>
        </Dropdown>
    )
}

export default function PageListActions({page}) {
    const [pageLink, setPageLink] = useState(`${process.env.REACT_APP_API_SERVER}/page/${page.slug}`);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [blockItems, setBlockItems] = useState(blocks);

    React.useEffect(() => {
    }, []);

    const onShowPageConfirm = function () {
        setOpenConfirm(true)
    }

    const onOkPageConfirm = function () {
        page.is_main = true
        api.update(page).then(r=>{
            setOpenConfirm(false)
            onChange(page)
        })
    }

    const onCancelPageConfirm = function () {
        setOpenConfirm(false)
    }

    const onAdd = function () {

    }

    const onMenuItemClick = ({key}) => {
        onMenuClick(page.id, key)
    };

    return (
        <div className='page-tree-actions'>
            <div className='page-tree-action-list'>
                <Tooltip title="Просмотр страницы">
                    <Button className='page-block-add' type="link" target="_blank"
                            href={pageLink} shape="circle" size="small" icon={<EyeOutlined />}/>
                </Tooltip>
                <Divider type="vertical"/>
                <Tooltip title="Сделать главной страницей">
                    <Popconfirm
                        title="Страницы"
                        description="Сделать главной страницей?"
                        open={openConfirm}
                        onConfirm={onOkPageConfirm}
                        onCancel={onCancelPageConfirm}
                        okText="Да"
                        cancelText="Нет"
                    >
                        <Button className='page-block-add' shape="circle" size="small" icon={<HomeOutlined />} onClick={onShowPageConfirm}/>
                    </Popconfirm>
                </Tooltip>
                <Divider type="vertical"/>
                <Tooltip title="Добавить блок">
                    <PageActionsMenu items={blocks} onClick={onMenuItemClick}/>
                </Tooltip>
            </div>
            <div className='page-tree-action-content'>
                {page.id}
            </div>
        </div>
    );
}
