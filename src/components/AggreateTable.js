import { Card, Col, Table } from "antd";
import React from "react";
import { useAppStore } from "../contexts/AppStoreContext";
import { aggregateTableColumns } from "./AggregateTableColumns";

const AggregateTable = () => {
  const { aggregate } = useAppStore();

  return (
    <Col md={12}>
      {aggregate.length > 0 && (
        <Card size="small">
          <Table
            size="small"
            rowKey="id"
            dataSource={aggregate}
            columns={aggregateTableColumns}
          />
        </Card>
      )}
    </Col>
  );
};

export default AggregateTable;
