import { useState, useEffect } from "react";
import * as d3 from "d3";
import jsonUrl from "../data/world/world-detailed.json";

export const useMapData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    d3.json(jsonUrl).then((tpJson) => {
      setData(tpJson);
    });
  }, []);

  return { data };
};
