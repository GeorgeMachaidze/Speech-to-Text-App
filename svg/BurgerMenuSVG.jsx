import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";

export default function BurgerMenuSVG() {
  return (
    <Svg width={33} height={33} viewBox="0 0 33 33" fill="none">
      <G clipPath="url(#clip0)">
        <Path
          d="M27.8438 16.5H5.15625"
          stroke="black"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M27.8438 8.25H5.15625"
          stroke="black"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M27.8438 24.75H5.15625"
          stroke="black"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect
            width={33}
            height={33}
            fill="white"
            transform="matrix(-1,0,0,1,33,0)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
