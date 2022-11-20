import { useAppStore } from "../contexts/AppStoreContext";

// import "./tooltip.scss";
export const TooltipComponent = ({ country, circleRef }) => {
  const { profilesData } = useAppStore();
  const test = profilesData.filter((p) => p.countryCode === country.id);
  return (
    <svg
      width="300"
      height="100"
      ref={circleRef.current}
      style={{ marginLeft: 50 }}
    >
      <rect
        x="50"
        y="0"
        width="200"
        height="100"
        stroke="red"
        stroke-width="3px"
        fill="white"
        // style={{ marginLeft:10}}
      />
      <text x="50%" y="30%" alignment-baseline="middle" text-anchor="middle" className="heavy">{test.length}</text>
      <text x="50%" y="50%" alignment-baseline="middle" style={{ textWrap: 'wrap'}} text-anchor="middle">
        Joined in {country.properties.name}
      </text>
      <text x="50%" y="70%" alignment-baseline="middle" text-anchor="middle" className="heavy">({country.id})</text>
    </svg>
  );
};
