import { Table } from "antd";
import React from "react";
import { useAppStore } from "../../../contexts/AppStoreContext";
import { paymentHistoryMockData, paymentHistoryTableColumns } from "./PaymentHistoryTableColumns";

const PaymentHistoryTable = () => {
    const { payments } = useAppStore()
    return (
        <Table
            size="small"
            bordered
            rowKey={'phoneNumber'}
            dataSource={payments}
            columns={paymentHistoryTableColumns}
            pagination={false}
        />
    )
}

export default PaymentHistoryTable
