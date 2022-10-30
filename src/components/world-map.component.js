import React, { useEffect, useState } from "react";
import { geoEqualEarth, geoPath } from "d3-geo";
import { cities, useMapData } from "../hooks/useMapData.hook";
import "./world-map.style.scss";
import { TooltipComponent } from "./Tooltip";

const projection = geoEqualEarth()
  .scale(160)
  .translate([800 / 2, 450 / 2]);

const WorldMap = () => {
  const { geographies, countries } = useMapData();

  const [data, setData] = useState([]);
  const [hovering, setHovering] = useState(false);

  let arr = [];

  const circleRef = React.createRef();

  const handleCountryClick = (countryIndex, d) => {
    console.log("d: ", d);
    console.log("Clicked on country: ", geographies[countryIndex]);
  };

  const handleMarkerClick = (i) => {
    console.log("Marker: ", cities[i]);
  };

  useEffect(() => {
    countries.map((c) =>
      geographies.find((g) => {
        if (g.id === c.alpha3Code) {
          return arr.push(c);
        }
      })
    );
    setData(arr);
  }, [cities]);

  const cityData = data.filter((d) =>
    cities.find((c) => c.name.toLowerCase() === d.name.toLowerCase())
  );
  console.log("data: ", data);
  console.log(cityData);
  if (geographies && geographies.length <= 0) {
    return <div>Hello world...</div>;
  }

  const handleMouseOver = (countryIndex, d) => {
    console.log("d: ", d);
    setHovering(true);
  };

  const handleMouseDown = (countryIndex, d) => {
    console.log("d: ", d);
    setHovering(false);
  };

  return (
    <>
      <svg width={800} height={450} viewBox="0 0 800 450">
        <g className="countries">
          {geographies.map((d, i) => {
            return (
              <>
                <path
                  ref={circleRef}
                  key={`path-${i + d.id}`}
                  d={geoPath().projection(projection)(d)}
                  className="country"
                  fill={`rgba(59,130,245,${(1 / geographies.length) * i})`}
                  stroke="#FFFFFF"
                  strokeWidth={0.5}
                  onClick={() => handleCountryClick(i, d)}
                  onMouseOver={() => handleMouseOver(i, d)}
                  onMouseOut={() => handleMouseDown(i, d)}
                />
                {hovering && (
                  <TooltipComponent country={d} circleRef={circleRef} />
                )}
              </>
            );
          })}
        </g>

        <g className="markers">
          {cities.map((city, i) => (
            <>
              <circle
                key={`marker-${i}`}
                cx={projection(city.coordinates)[0]}
                cy={projection(city.coordinates)[1]}
                r={city.population / 3000000}
                fill="#E91E63"
                stroke="#FFFFFF"
                className="marker"
                onClick={() => handleMarkerClick(i)}
              />
            </>
          ))}
        </g>
      </svg>
    </>
  );
};

export default WorldMap;
