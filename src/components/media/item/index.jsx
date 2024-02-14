import React, {useState} from "react";
import './style.css'
import {Card, Col, Popconfirm} from "antd";
import Meta from "antd/es/card/Meta";
import { DeleteOutlined } from '@ant-design/icons';

export default function MediaItem({media, onDelete, onCardClick}) {
    const [open, setOpen] = useState(false);

    const onShow = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setOpen(true)
    }

    const onOkClick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        onDelete(media)
        setOpen(false)
    }

    const onCancelClick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setOpen(false)
    }

    const onCurCardClick = function (e) {
        if (onCardClick) {
            onCurCardClick(media)
        }
    }

    return (
        <Col className="gutter-row" span={3}>
            <Card
                onClick={onCurCardClick}
                hoverable
                cover={<img alt="example" src={media.url} />}
                actions={[
                    <Popconfirm
                        title="Медиа"
                        description="Удалить файл?"
                        open={open}
                        onConfirm={onOkClick}
                        onCancel={onCancelClick}
                        okText="Да"
                        cancelText="Нет"
                    >
                        <DeleteOutlined key="delete" onClick={onShow}/>
                    </Popconfirm>
                ]}
            >
                <Meta title={media.file_name} description={media.file_name} />
            </Card>
        </Col>
    );
}
