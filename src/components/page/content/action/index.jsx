import * as React from "react";
import './styles.css'
import {Button, Dropdown} from "antd";
import {MoreOutlined, PlusOutlined, DeleteOutlined} from "@ant-design/icons";

const items = [
    {
        'key': 1,
        'icon': <PlusOutlined/>,
        'label': 'Добавить блок'
    },
    {
        'key': 2,
        'icon': <DeleteOutlined/>,
        'label': 'Удалить блок'
    }
]

export default function PageContentAction({content, onMenuClick}) {
    const onClick = function ({key}) {
        onMenuClick(key, content)
    }
    return (
        <div className="page-content-action">
            <Dropdown menu={{ items, onClick }}>
                <Button className='page-block-add' shape="circle" size="small" style={{ fontSize: '0.8rem', color: '#08c' }} icon={<MoreOutlined />} onClick={(e) => e.preventDefault()}/>
            </Dropdown>
        </div>
    );
}
