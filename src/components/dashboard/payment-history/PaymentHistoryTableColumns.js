import { Tag } from "antd"

export const paymentHistoryTableColumns = [
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
    },
    {
        title: 'Phone number',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (_, row) => <Tag color={row.status === 'complete' ? 'green' : 'orange'}>{row.status}</Tag>
    }
]

export const paymentHistoryMockData = [
    {
        amount: new Intl.NumberFormat({type: 'currency'}).format(20_000),
        phoneNumber: '672374414',
        date: new Date().toDateString(),
        status: "incomplete"
    },
    {
        amount: new Intl.NumberFormat({type: 'currency'}).format(50_000),
        phoneNumber: '682384913',
        date: new Date().toDateString(),
        status: "complete"
    }
]
