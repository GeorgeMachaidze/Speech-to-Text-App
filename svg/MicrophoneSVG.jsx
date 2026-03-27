import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";

export default function MicrophoneSVG() {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <G clipPath="url(#clip0_47_907)">
        <Path
          d="M13.125 5C13.125 3.27411 11.7259 1.875 10 1.875C8.27411 1.875 6.875 3.27411 6.875 5V10C6.875 11.7259 8.27411 13.125 10 13.125C11.7259 13.125 13.125 11.7259 13.125 10V5Z"
          fill="#2FA2FE"
        />
        <Path
          d="M10 15.625V18.75"
          stroke="#2FA2FE"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.625 10C15.625 11.4918 15.0324 12.9226 13.9775 13.9775C12.9226 15.0324 11.4918 15.625 10 15.625C8.50816 15.625 7.07742 15.0324 6.02252 13.9775C4.96763 12.9226 4.375 11.4918 4.375 10"
          stroke="#2FA2FE"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_47_907">
          <Rect width={20} height={20} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
