// import "./tooltip.scss";
export const TooltipComponent = ({ country, circleRef }) => {
  console.log(circleRef)
  return (
    <svg width="200" height="100" ref={circleRef.current}>
      <rect
        x="0"
        y="0"
        width="200"
        height="100"
        stroke="red"
        stroke-width="3px"
        fill="white"
      />
      <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle">
        {" "}
        {country.properties.name}
      </text>
    </svg>
  );
};
