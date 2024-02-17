import React, {useEffect, useState} from "react";
import './style.css'

export default function MenuTitle({data, selected, onTreeItemClick}) {
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
            <div className="tree-title">{data.title}</div>
        </div>
    )
}
