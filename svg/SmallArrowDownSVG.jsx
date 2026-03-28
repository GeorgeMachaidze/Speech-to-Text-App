import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";

export default function SmallArrowDownSVG({ width = 12, height = 12 }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 12 12" fill="none">
      <G clipPath="url(#clip0_935_569)">
        <Path
          d="M9.75 4.5L6 8.25L2.25 4.5"
          stroke="#434343"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_935_569">
          <Rect width="12" height="12" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
