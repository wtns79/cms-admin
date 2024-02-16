import React, {useEffect, useState} from "react";
import {Button, Select, Tooltip} from "antd";
import api from '../../../service/block/index';
import './style.css'

export default function BlockCb({value, onChange}) {
    const [items, setItems] = useState(null)
    const [category, setCategory] = useState(null)

    const toOptions = function (items) {
        if (!items) return null
        return items.map(function (item) {
            return {
                'key': item.id,
                'label': item.title,
                'value': item.id
            }
        });
    };

    const load = function () {
        api.load().then(r => {
            setItems(toOptions(r.data))
        })
    }

    React.useEffect(() => {
        load();
    }, []);


    return <Select value={value} options={items} onChange={onChange}/>;
}
