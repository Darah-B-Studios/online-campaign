import { Table } from "antd";
import React from "react";
import { paymentHistoryMockData, paymentHistoryTableColumns } from "./PaymentHistoryTableColumns";

const PaymentHistoryTable = () => {
    return (
        <Table
            size="small"
            bordered
            dataSource={paymentHistoryMockData}
            columns={paymentHistoryTableColumns}
            pagination={false}
        />
    )
}

export default PaymentHistoryTable
