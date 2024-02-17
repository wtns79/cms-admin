import React, {useEffect, useState} from "react";
import {Button, Tooltip, Tree} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import api from '../../service/menu/index';
import './style.css'
import MenuRoot from "./root";
import MenuTitle from "./title";
import MenuActions from "./actions";

export default function Menu() {
    const [items, setItems] = useState(null)
    const [open, setOpen] = useState(false)
    const [menu, setMenu] = useState(null)

    const load = function () {
        api.tree().then(r => {
            setItems(r.data)
        })
    }

    React.useEffect(() => {
        load();
    }, []);

    const onAdd = function () {
        onEditClick({})
    }

    const onAddSubMenuClick = function (menu) {
        onEditClick({parent_id: menu.id})
    }

    const onTreeItemClick = function (row) {
        setMenu(row)
    }

    const onEditClick = function (row) {
        setMenu(row)
        setOpen(true)
    }

    const onDeleted = function () {
        setMenu(null)
        load()
    }
    const onClose = function (refresh) {
        setOpen(false)
        load()
    }

    const titleRender = function (n) {
        return <MenuTitle data={n} selected={menu} onTreeItemClick={onTreeItemClick}/>
    }

    return <div className="menu">
            <div className="menu-actions">
                <div className="title">Меню</div>
                <div className="items">
                    <Tooltip title="Добавить Меню">
                        <Button className='menu-add' shape="circle" icon={<PlusOutlined />} onClick={onAdd}/>
                    </Tooltip>
                </div>
                {open && <MenuRoot menu={menu} open={open} onClose={onClose}/>}
            </div>
            <div className="menu-content">
                <div className="menu-tree">
                    <Tree defaultExpandAll={true} showLine treeData={items}
                          titleRender = {titleRender}
                          fieldNames = {{children: 'items'}}
                    />
                </div>
                <div className="menu-tree-actions">
                    {menu && <MenuActions menu={menu} onAddSubMenu={onAddSubMenuClick} onDeleted={onDeleted}/>}
                </div>
            </div>
    </div>;
}
