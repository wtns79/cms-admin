import * as React from "react";
import {useState} from "react";
import './styles.css'
import {Input} from "antd";
import BlockCb from "../../../../block/cb";
import TextArea from "antd/es/input/TextArea";
import MenuCb from "../../../../menu/cb";

const showBodyBlocks = ['text']
const showTopNavBlocks = ['top-navigation']

export default function PageContentEditBlock({content, onChange}) {
    const [title, setTitle] = useState(content?.title || '');
    const [body, setBody] = useState(content?.body);
    const [blockId, setBlockId] = useState(content?.block_id);
    const [menuId, setMenuId] = useState(content?.menu_id);
    const [blockCode, setBlockCode] = useState(null);

    const onBlockChange = function (v, item) {
        setBlockId(v)
        onChange({block_id: v})
        setBlockCode(item.code)
    }

    const onMenuChange = function (v, item) {
        setMenuId(v)
        onChange({menu_id: v})
    }

    let showBody = showBodyBlocks.includes(blockCode)
    let showTopNavBlock = showTopNavBlocks.includes(blockCode)

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
                <BlockCb value={blockId} type='block' onChange={onBlockChange}/>
            </div>
            {
                showBody &&
            <div className="label-inputs-v">
                <label>Контент</label>
                <TextArea rows={4} value={body} type="text" onChange={(e) => {
                    setBody(e.target.value)
                    onChange({body: e.target.value})
                }}/>
            </div>
            }
            {
                showTopNavBlock &&
                <div className="label-inputs-v">
                    <label>Меню</label>
                    <MenuCb value={menuId} onChange={onMenuChange}/>
                </div>
            }
        </div>
    );
}
