import { Svg, Path } from "react-native-svg";

export default function SmallArrowUpSVG({ width = 12, height = 12 }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 12 12" fill="none">
      <Path
        d="M2.25 7.5L6 3.75L9.75 7.5"
        stroke="#3F85DF"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
