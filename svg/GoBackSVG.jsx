import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";

export default function GoBackSVG() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_36_728)">
        <Path
          d="M14.875 19.1875L7.6875 12L14.875 4.8125"
          stroke="black"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_36_728">
          <Rect
            width={23}
            height={23}
            fill="white"
            transform="translate(23.5 0.5) rotate(90)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
