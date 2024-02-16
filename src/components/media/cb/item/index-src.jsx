import React, {useEffect, useState} from "react";
import {Button, Input, List, Select, Space, Tooltip} from "antd";
import api from '../../../../service/category/index';
import './style.css'

export default function MediaCbItemSrc({onChange}) {
    const [items, setItems] = useState(null)
    const [category, setCategory] = useState(null)

    const load = function () {
        // api.load().then(r => {
        //     console.log(toOptions(r.data))
        //     setItems(toOptions(r.data))
        // })
    }

    React.useEffect(() => {
    }, []);

    const data = Array.from({ length: 23 }).map((_, i) => ({
        href: 'https://ant.design',
        title: `ant design part ${i}`,
        avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    }));

    return (
        <>
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 3,
                    // total:
                }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item
                        key={item.title}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        }
                    >
                        <List.Item.Meta
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
        </>
    )
}
