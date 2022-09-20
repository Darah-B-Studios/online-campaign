import { List } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { videoResourceData } from "./VideoResourceData";

const VideoResources = () => {
    return (
        <List
            size="small"
            header={<div>Header</div>}
            bordered
            dataSource={videoResourceData}
            renderItem={resource => <List.Item>
                <div>
                    {resource.thumbnail}
                </div>
                <div>
                    <h3>{resource.title}</h3>
                    <p>{resource.description}</p>
                    <Link to={resource.link}>link</Link>
                </div>
            </List.Item>}
        />
    )
}

export default VideoResources
