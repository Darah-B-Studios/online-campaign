import { Table } from "antd";
import React from "react";
import { useAppStore } from "../contexts/AppStoreContext";
import { aggregateTableColumns } from "./AggregateTableColumns";

const AggregateTable = () => {
    const {aggregate} = useAppStore()
    return (
        <>
        {
            aggregate.length > 0 ?
            <Table size="small" rowKey='id' dataSource={aggregate} columns={aggregateTableColumns} />
            : null
        }
        </>
    )
};

export default AggregateTable;

