import { useEffect, useState } from "react";
import { feature } from "topojson-client";

export const useMapData = () => {
  const [geographies, setGeographies] = useState([]);

  useEffect(() => {
    fetch("https://vega.github.io/vega-datasets/data/world-110m.json")
      .then((response) => response.json())
      .then((worldData) => {
        console.log(worldData.objects)
        setGeographies(feature(worldData, worldData.objects.countries).features)
      }).catch(error => console.log(error))
  }, []);
  return { geographies };
};
