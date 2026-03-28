import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";

export default function SearchSvg({ width = 12, height = 12 }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 12 12" fill="none">
      <G clipPath="url(#clip0)">
        <Path
          d="M5.25 9C7.32107 9 9 7.32107 9 5.25C9 3.17893 7.32107 1.5 5.25 1.5C3.17893 1.5 1.5 3.17893 1.5 5.25C1.5 7.32107 3.17893 9 5.25 9Z"
          stroke="#949494"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.90173 7.90173L10.5 10.5"
          stroke="#949494"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width={12} height={12} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
