import React, {useState} from "react";
import api from '../../../service/media/index';
import './style.css'
import MediaItem from "../item";
import {Row} from "antd";

export default function MediaItems({items}) {
    const [mediaItems, setMediaItems] = useState(items)

    // React.useEffect(() => {
    //     api.load().then( r=> {
    //         setItems(r.data)
    //     });
    // }, []);

    let medias = null
    if (mediaItems) {
        medias = mediaItems.map(item => <MediaItem key={item.id} media={item} />)
    }

    return <div className="media">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {medias}
        </Row>
    </div>;
}
