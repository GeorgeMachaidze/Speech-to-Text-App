import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";

export default function BigMicrophoneSVG() {
  return (
    <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
      <G clipPath="url(#clip0_935_35)">
        <Path
          d="M19.6875 7.5C19.6875 4.91117 17.5888 2.8125 15 2.8125C12.4112 2.8125 10.3125 4.91117 10.3125 7.5V15C10.3125 17.5888 12.4112 19.6875 15 19.6875C17.5888 19.6875 19.6875 17.5888 19.6875 15V7.5Z"
          fill="white"
        />
        <Path
          d="M15 23.4375V28.125"
          stroke="white"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M23.4375 15C23.4375 17.2378 22.5486 19.3839 20.9662 20.9662C19.3839 22.5486 17.2378 23.4375 15 23.4375C12.7622 23.4375 10.6161 22.5486 9.03379 20.9662C7.45145 19.3839 6.5625 17.2378 6.5625 15"
          stroke="white"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_935_35">
          <Rect width={30} height={30} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
