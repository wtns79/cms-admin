import React, {useState} from "react";
import './style.css'

export default function PageContent({items}) {

    let pc = items != null ? items.id : 'select page'

    return (
        <>
            {pc}
        </>
    );
}
