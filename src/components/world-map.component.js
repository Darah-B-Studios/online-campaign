import { geoEqualEarth, geoPath } from "d3-geo";
import { useMapData } from "../hooks/useMapData.hook";

const projection = geoEqualEarth()
  .scale(160)
  .translate([800 / 2, 450 / 2]);

const WorldMap = () => {
  const { geographies } = useMapData();

  const handleCountryClick = countryIndex => {
    console.log("Clicked on country: ", geographies[countryIndex])
  }

  return (
    <svg width={800} height={450} viewBox="0 0 800 450">
      <g className="countries">
        {geographies.map((d, i) => {
          return (
            <path
              key={`path-${i}`}
              d={geoPath().projection(projection)(d)}
              className="country"
              fill={`rgba(59,130,245,${(1 / geographies.length) * i})`}
              stroke="#FFFFFF"
              strokeWidth={0.5}
              onClick={ () => handleCountryClick(i) }
            />
          );
        })}
      </g>
      {/* <g className="markers">
        <circle
          cx={this.projection()([8, 48])[0]}
          cy={this.projection()([8, 48])[1]}
          r={10}
          fill="#E91E63"
          className="marker"
        />
      </g> */}
    </svg>
  );
};

export default WorldMap;
