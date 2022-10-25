import { Table } from "antd";
import React from "react";
import { profileTableColumn } from "./ProfileTableColumns";

const ProfileTable = () => {
  return <Table dataSource={[]} columns={profileTableColumn} />;
};

export default ProfileTable;
