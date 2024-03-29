import React, {useEffect, useState} from "react";
import {Button, Select, Tooltip} from "antd";
import api from '../../../service/block/index';
import './style.css'

export default function BlockCb({value, type, onChange}) {
    const [items, setItems] = useState(null)

    const toOptions = function (items) {
        if (!items) return null
        return items.map(function (item) {
            return {
                'key': item.id,
                'label': item.title,
                'value': item.id,
                'code': item.code,
            }
        });
    };

    const load = function () {
        api.loadByType(type).then(r => {
            setItems(toOptions(r.data))
        })
    }

    React.useEffect(() => {
        load();
    }, []);

    const onChangeCurrent = function (v) {
        onChange(v, items.filter(i => i.value == v)[0])
    }

    return <Select value={value} options={items} onChange={onChangeCurrent}/>;
}
