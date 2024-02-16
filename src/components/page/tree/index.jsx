import React, {useEffect, useState} from "react";
import './style.css'
import api from "../../../service/page";
import {Button, Tooltip, Tree} from "antd";
import {HomeOutlined} from "@ant-design/icons";

function treeTitleAction(data, selected, onTreeItemClick) {
    const onClick = function (e) {
        onTreeItemClick(data)
        e.preventDefault();
        e.stopPropagation();
        return false
    }

    let cn = 'tree-title-wrap'
    if (selected && selected?.id == data.id) {
        cn += ' tree-title-wrap-selected'
    }

    return (
        <div className={cn} onClick={onClick}>
            <div className="tree-icon">{data.is_main ? <Tooltip title="Главная"><HomeOutlined style={{ color: '#3fa110' }}/></Tooltip> : null}</div>
            <div className="tree-title">{data.title}</div>
            <div className="tree-actions">Action</div>
        </div>
    )
}

function PageTreeItem({node, onNodeClick}) {
    const onClick = function (e) {
        onNodeClick(node)
        e.preventDefault();
        e.stopPropagation();
        return false
    }

    let cn = 'tree-title-wrap'
    // if (selected && selected?.id == data.id) {
    //     cn += ' tree-title-wrap-selected'
    // }
    let childs = null
    if (node.items) {
        childs = <ul className="page-tree">
            {node.items.map(n => <PageTreeItem key={n.id} node={n} onNodeClick={onNodeClick}/>) }
        </ul>
    }

    return (
        <li className='page-tree-item'>
            <div className={cn} onClick={onClick}>
                <div className="tree-icon">{node.is_main ? <Tooltip title="Главная"><HomeOutlined style={{ color: '#3fa110' }}/></Tooltip> : null}</div>
                <div className="tree-title">{node.title}</div>
                <div className="tree-actions">Action</div>
            </div>
            {childs}
        </li>
    )
}

export default function PageTree({data, onSelectClick}) {
    const [items, setItems] = useState(data)
    const [selected, setSelected] = useState(null)
    const [content, setContent] = useState({})

    const load = function () {
        api.load().then(r => {
            let d = r.data
            setItems(d)
        })
    }

    const onTreeItemClick = function (node) {
        setSelected(node)
        onSelectClick(node)
    }

    const titleRender = function (n) {
        return treeTitleAction(n, selected, onTreeItemClick)
    }

    const onTreeClick = function (e) {
        e.preventDefault();
        e.stopPropagation();
    }

    React.useEffect(() => {
        load();
    }, []);

    return <div className="page-tree">
        <Tree showLine treeData={items}
              onClick={onTreeClick}
              titleRender = {titleRender}
        />
    </div>;

    // return (
    //     <ul className="page-tree">
    //         {items.map(node => <PageTreeItem key={node.id} node={node} onNodeClick={onTreeItemClick}/>) }
    //     </ul>
    // );
}
