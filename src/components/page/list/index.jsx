import React, {useEffect, useState} from "react";
import './style.css'
import api from "../../../service/page";

function PageListItem({data, onClick}) {
    return (
        <div className="page-list-item">
            <div className="page-list-item-title">{data.title}</div>
            <div className="page-list-item-actions">Action</div>
        </div>
    )
}

export default function PageList({items, onSelect}) {
    const [selected, setSelected] = useState(null)

    const load = function () {
        api.load().then(r => {
            let d = r.data
            setItems(d)
        })
    }

    const onItemClick = function (row) {
        setSelected(row)
    }

    React.useEffect(() => {
    }, []);

    return (
        <div className="page-list">
            {items.map(item => <PageListItem key={item.id} data={item} onClick={onItemClick}/>) }
        </div>
    );
}
