import React, {useEffect, useState} from "react";
import {Button, Select, Tooltip} from "antd";
import api from '../../../service/block/index';
import './style.css'

const blockTypes = [
    {
        'key': 'layout',
        'label': 'Макет',
        'value': 'layout'
    },
    {
        'key': 'block',
        'label': 'Блок',
        'value': 'block'
    }
]

export default function BlockTypeCb({value, onChange}) {
    return <Select value={value} options={blockTypes} onChange={onChange}/>;
}
