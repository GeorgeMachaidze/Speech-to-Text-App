import { Svg, Path } from "react-native-svg";

export default function SelectedSVG({ width = 10, height = 8 }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 10 8" fill="none">
      <Path
        d="M1 4L3.25 6.25L8.5 1"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
