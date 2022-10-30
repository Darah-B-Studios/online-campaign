// import "./tooltip.scss";
import { Tooltip } from "react-svg-tooltip";

export const TooltipComponent = ({ country, circleRef }) => {
  return (
    <Tooltip triggerRef={circleRef}>
      <rect x={2} y={2} width={10} height={5} rx={0.5} ry={0.5} fill="black" />
      <text x={5} y={5} fontSize={2} fill="white">
        {country.properties.name}
      </text>
    </Tooltip>
  );
};