import { Typography } from "antd";
import React from "react";
import { AppShell } from "../components";
import { supabase } from "../supaBaseClient";

/**
 * @typedef {Object} Organization[]
 */
const OrganizationDetailsPage = () => {

  return (
    <AppShell>
      <div style={{ width: "30rem", margin: "2rem auto" }}>
        <div style={{ textAlign: "center" }}>
          <Typography.Title>List of Organizations</Typography.Title>
        </div>
      </div>
    </AppShell>
  );
};

export default OrganizationDetailsPage;
