import { Col, Table } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { TABLES } from "../constants/tables";
import { useAppStore } from "../contexts/AppStoreContext";
import { useInitialData } from "../hooks/InitialData";
import { supabase } from "../supaBaseClient";
import { profileTableColumn } from "./ProfileTableColumns";

const ProfileTable = () => {
  const { setAggregate, setProfilesData } = useAppStore();
  const { getCountryData } = useInitialData();
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProfiles = useCallback(async () => {
    const { data, errors } = await supabase.from(TABLES.PROFILES).select();
    if (data.length > 0) {
      setLoading(true);
      const teamsData = await getTeams();
      const agg = teamsData.map((item) => {
        return {
          ...item,
          total: data.filter(
            (datum) => datum.teamId.toString() === item.id.toString()
          )?.length,
        };
      });
      setAggregate(agg);
      const countryData = await getCountryData();
      const mappedProfiles = data.map((item) => {
        return {
          ...item,
          teamId: teamsData.find((team) => team.id.toString() === item.teamId)
            ?.name,
          countryName: countryData.find(
            (country) => item.countryCode === country.code
          )?.name,
          countryCode: countryData.find(
            (country) => item.countryCode === country.code
          )?.code,
        };
      });
      setProfiles(mappedProfiles);
      setProfilesData(mappedProfiles);
      setLoading(false);
    }
  });

  const getTeams = async () => {
    const { data, errors } = await supabase.from(TABLES.TEAMS).select();
    if (data) {
      return data;
    }
    if (errors) {
      console.log("errors: ", errors);
    }
  };

  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <Col md={12} style={{ display: "none" }}>
      {profiles.length > 0 && (
        <Table
          size="small"
          rowKey="id"
          loading={loading}
          dataSource={profiles}
          columns={profileTableColumn}
        />
      )}
    </Col>
  );
};

export default ProfileTable;
