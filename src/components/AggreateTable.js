import { Table } from "antd";
import React, { useEffect } from "react";
import { useAppStore } from "../contexts/AppStoreContext";
import { aggregateTableColumns } from "./AggregateTableColumns";

const AggregateTable = () => {
    const {aggregate} = useAppStore()
    useEffect(() => {
    }, [aggregate])

    return (
        <>
        {
            aggregate.length > 0 && 
            <Table size="small" rowKey='id' dataSource={aggregate} columns={aggregateTableColumns} />
        }
        </>
    )
};

export default AggregateTable;
