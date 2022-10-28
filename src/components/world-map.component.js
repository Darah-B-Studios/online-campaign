import { geoEqualEarth, geoPath } from "d3-geo";
import { cities, useMapData } from "../hooks/useMapData.hook";
import ReactTooltip from "react-tooltip";
import "./world-map.style.scss";

const projection = geoEqualEarth()
  .scale(160)
  .translate([800 / 2, 450 / 2]);

const WorldMap = () => {
  const { geographies } = useMapData();

  const handleCountryClick = (countryIndex) => {
    console.log("Clicked on country: ", geographies[countryIndex]);
  };

  const handleMarkerClick = (i) => {
    console.log("Marker: ", cities[i]);
  };
  return (
    <>
      <svg width={800} height={450} viewBox="0 0 800 450">
        <g className="countries">
          {geographies.map((d, i) => {
            return (
              <>
                <path
                key={`path-${i}`}
                d={geoPath().projection(projection)(d)}
                className="country"
                fill={`rgba(59,130,245,${(1 / geographies.length) * i})`}
                stroke="#FFFFFF"
                strokeWidth={0.5}
                onClick={() => handleCountryClick(i)}
              />
              
              </>
            );
          })}
        </g>
        
        <g className="markers">
          {cities.map((city, i) => (
            <circle
              key={`marker-${i}`}
              cx={projection(city.coordinates)[0]}
              cy={projection(city.coordinates)[1]}
              r={city.population / 3000000}
              fill="#E91E63"
              stroke="#FFFFFF"
              className="marker"
              onClick={() => handleMarkerClick(i)}
              data-tip={city.name}
              data-for={i}
            />
          ))}
        </g>
      </svg>
      <ReactTooltip
        multiline={true}
        effect="solid"
        type="info"
        place="bottom"
        backgroundColor="rgb(168, 85, 247)"
        textColor="#fff"
        className="react-tool-tip"
      />
    </>
  );
};

export default WorldMap;
