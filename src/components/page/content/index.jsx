import React, {useState} from "react";
import './style.css'
import {ArrowLeftOutlined} from "@ant-design/icons";

export default function PageContent({items}) {

    let pc = items != null ? items.id : <div> <ArrowLeftOutlined style={{color: 'green', paddingRight:'4px'}}/> Выберите страницу</div>

    return (
        <>
            {pc}
        </>
    );
}
