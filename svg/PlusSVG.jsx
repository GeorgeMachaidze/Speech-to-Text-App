import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";

export default function PlusSVG() {
  return (
    <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
      <G clipPath="url(#clip0)">
        <Path
          d="M2.1875 7H11.8125"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7 2.1875V11.8125"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width={14} height={14} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
