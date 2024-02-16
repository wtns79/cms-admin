import React, {useEffect, useState} from "react";
import {Button, Card, Col, Input, List, Popconfirm, Row, Select, Space, Tooltip} from "antd";
import api from '../../../../service/media/index';
import './style.css'
import {CheckOutlined} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";

export default function MediaCbItem({colSpan=4, media, onChange}) {
    const onChoice = function () {
        onChange(media)
    }

    return (
        <>
            <Col className="gutter-row" span={colSpan}>
                <Card
                    // onClick={onCurCardClick}
                    hoverable
                    cover={<img alt="example" src={media.url} />}
                    actions={[
                        <Button onClick={onChoice}>Выбрать</Button>
                    ]}
                >
                    <Meta title={media.file_name} description={media.file_name} />
                </Card>
            </Col>
        </>
    )
}
