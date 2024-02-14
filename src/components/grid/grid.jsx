import React, {useState} from "react";
import './style.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faRemove} from "@fortawesome/free-solid-svg-icons";
import {Button, Modal, Pagination, Tooltip} from "antd";
import {EditOutlined, DeleteOutlined, BookOutlined} from "@ant-design/icons";

function GridHeader({columns}) {
    const cols = columns.map(c =>
        <th key={'g-cols-' + c.name} style={c.style}>{c.title}</th>
    )
    return <tr>
        {cols}
    </tr>
}

function GridRow({columns, item, onEditClick, onDelClick, onRowClick, otherActions}) {
    let editAction;
    let delAction;
    if (onEditClick) {
        const onEditBtnClick = function (e) {
            if (onEditClick) {
                onEditClick(item)
            }
            e.preventDefault()
            e.stopPropagation()
        }
        editAction = <Tooltip title="Редактировать">
            <Button shape="circle" icon={<EditOutlined />} size='small' onClick={onEditBtnClick}/>
        </Tooltip>
    }
    if (onDelClick) {
        const onDelBtnClick = function (e) {
            if (onDelClick) {
                onDelClick(item)
            }
            e.preventDefault()
            e.stopPropagation()
        }
        delAction = <Tooltip title="Удалить">
            <Button shape="circle" icon={<DeleteOutlined />} size='small' onClick={onDelBtnClick}/>
        </Tooltip>
    }
    const cols = columns.map((c, idx) =>
        !c.isAction ?
            <td key={'g-row-' + idx + '-' + item['id']}>{!c.render ? item[c.name] : c.render(item)}</td> : null
    )
    const onTrClick = function (e) {
        if (onRowClick) {
            onRowClick(item)
        }
        e.preventDefault()
        e.stopPropagation()
    }
    const otherActionsRow = otherActions ? otherActions(item) : null
    return <tr onClick={onTrClick}>
        {cols}
        <td>
            {editAction}
            {delAction}
            {otherActionsRow}
        </td>
    </tr>
}

export default function Grid({columns, rows, pages, onEditClick, onDelClick, onRowClick, onPageChange, otherActions}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [row, setRow] = useState(null);

    const showModal = function (row) {
        setRow(row)
        setIsModalOpen(true)
    }

    const modalOk = function () {
        setIsModalOpen(false)
        onDelClick(row);
    }

    const modalCancel = function () {
        setIsModalOpen(false)
    }

    const onCurrPageChange = function (page,sz) {
        const offset = (page - 1) * sz;
        if (onPageChange) {
            onPageChange(offset, page, sz)
        }
    }

    let rowList;
    if (!rows) {
        rowList = null
    } else {
        rowList = rows.map((item) => <GridRow key={'building-' + item.id} columns={columns} item={item}
                                              onEditClick={onEditClick} onDelClick={showModal} onRowClick={onRowClick} otherActions={otherActions}/>)
    }

    let paging;
    if (!pages) {
        paging = null
    } else {
        paging = <tfoot>
        <tr>
            <td colSpan={columns.length}>
                <Pagination defaultCurrent={1} total={pages} onChange={onCurrPageChange} size={'small'}/>
            </td>
        </tr>
        </tfoot>;
    }
    return (
        <div className="grid-wrap">
            <table className="grid">
                <thead>
                <GridHeader columns={columns}/>
                </thead>
                <tbody>
                {rowList}
                </tbody>
                {paging}
            </table>
            <Modal title="Внимание" okText={'Да'} cancelText={'Нет'} open={isModalOpen} onOk={modalOk} onCancel={modalCancel}>
                <p>Удалить запись?</p>
            </Modal>
        </div>
    )
}