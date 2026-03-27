import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";

export default function AddFileSVG() {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
      <G clipPath="url(#clip0_935_21)">
        <Path
          d="M31.25 35H8.75C8.41848 35 8.10054 34.8683 7.86612 34.6339C7.6317 34.3995 7.5 34.0815 7.5 33.75V6.25C7.5 5.91848 7.6317 5.60054 7.86612 5.36612C8.10054 5.1317 8.41848 5 8.75 5H23.75L32.5 13.75V33.75C32.5 34.0815 32.3683 34.3995 32.1339 34.6339C31.8995 34.8683 31.5815 35 31.25 35Z"
          stroke="#767676"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M23.75 5V13.75H32.5"
          stroke="#767676"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16.25 23.75H23.75"
          stroke="#767676"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M20 20V27.5"
          stroke="#767676"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_935_21">
          <Rect width={40} height={40} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
