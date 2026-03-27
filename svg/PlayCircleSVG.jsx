import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";

export default function PlayCircleSVG() {
  return (
    <Svg width={43} height={43} viewBox="0 0 43 43" fill="none">
      <G clipPath="url(#clip0_935_654)">
        <Path
          d="M21.5 37.625C30.4056 37.625 37.625 30.4056 37.625 21.5C37.625 12.5944 30.4056 5.375 21.5 5.375C12.5944 5.375 5.375 12.5944 5.375 21.5C5.375 30.4056 12.5944 37.625 21.5 37.625Z"
          fill="#2FA2FE"
        />
        <Path
          d="M28.2122 21.924C28.5256 21.7282 28.5256 21.2718 28.2122 21.076L18.9056 15.2594C18.5726 15.0512 18.1406 15.2907 18.1406 15.6834V27.3166C18.1406 27.7093 18.5726 27.9488 18.9056 27.7406L28.2122 21.924Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_935_654">
          <Rect width={43} height={43} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
