import * as React from "react";
import {useState} from "react";
import './styles.css'
import {Input} from "antd";
import BlockCb from "../../../../block/cb";

export default function PageContentEditRoot({content, onChange}) {
    const [title, setTitle] = useState(content?.title || '');
    const [blockId, setBlockId] = useState(content?.block_id);

    return (
        <div className="content-edit">
            <div className="label-inputs-v">
                <label>Название</label>
                <Input value={title} type="text" onChange={(e) => {
                    setTitle(e.target.value)
                    onChange({title: e.target.value})
                }}/>
            </div>
            <div className="label-inputs-v">
                <label>Макет</label>
                <BlockCb value={blockId} type='layout' onChange={(v) => {
                    setBlockId(v)
                    onChange({block_id: v})
                }}/>
            </div>
        </div>
    );
}
