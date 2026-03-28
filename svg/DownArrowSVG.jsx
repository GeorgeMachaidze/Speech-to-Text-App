import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";

export default function DownArrowSVG({ width = 13, height = 13 }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 13 13" fill="none">
      <G clipPath="url(#clip0)">
        <Path
          d="M10.5625 4.875L6.5 8.9375L2.4375 4.875"
          stroke="black"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width="13" height="13" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
