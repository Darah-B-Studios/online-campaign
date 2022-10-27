import { Table } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { TABLES } from "../constants/tables";
import { useInitialData } from "../hooks/InitialData";
import { supabase } from "../supaBaseClient";
import { profileTableColumn } from "./ProfileTableColumns";

const ProfileTable = () => {
    const {getCountryData} = useInitialData()
    const [profiles, setProfiles] = useState([])
    const [teams, setTeams] = useState([])
    const [loading, setLoading] = useState(false)

    const getProfiles = useCallback(async() => {
        const {data, errors} = await supabase.from(TABLES.PROFILES).select()
        if(data.length > 0) {
            setLoading(true)
            await getTeams()
            const countryData = await getCountryData()
            const mappedProfiles = data.map(item => {
                return {
                    ...item,
                    teamId: teams.find(team => team.id.toString() === item.teamId)?.name,
                    countryCode: countryData.find(country => item.countryCode === country.code)?.name
                }
            })
            setProfiles(mappedProfiles)
            setLoading(false)
        }
    })

    const getTeams = async() => {
        const {data, errors} = await supabase.from(TABLES.TEAMS).select()
            if(data) {setTeams(data)}
            if(errors) {console.log("errors: ", errors)}
      }

    useEffect(() => {
        getProfiles()
    }, [])

  return (profiles.length > 0 && <Table size="small" loading={loading} dataSource={profiles} columns={profileTableColumn} />)
};

export default ProfileTable;
