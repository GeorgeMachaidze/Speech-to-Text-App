import { useState } from "react";
import styled from "styled-components/native";
import AddFileSVG from "../svg/AddFileSVG";
import YouTubeSVG from "../svg/YouTubeSVG";
import BigMicrophoneSVG from "../svg/BigMicrophoneSVG";
import PlayCircleSVG from "../svg/PlayCircleSVG";

export default function Footer() {
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecorded, setHasRecorded] = useState(0);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    setHasRecorded(hasRecorded + 1);
  };
  return (
    <MainView>
      {hasRecorded > 1 && !isRecording ? (
        <PlaySection>
          <PlayCircleSVG />
          <Container>
            <LineContainer>
              <Line />
              <Circle />
            </LineContainer>
            <PlayTime>00:00</PlayTime>
          </Container>
        </PlaySection>
      ) : (
        <></>
      )}

      <Buttons>
        <ButtonBox>
          <AddFileSVG />
          <ButtonText>აუდიო ფაილი</ButtonText>
        </ButtonBox>
        <ButtonBox>
          <VoiceRecordButton
            onPress={toggleRecording}
            style={{
              backgroundColor: isRecording ? "#FF4D4D" : "#2FA2FE",
            }}
          >
            {isRecording ? (
              <StopRectangle></StopRectangle>
            ) : (
              <BigMicrophoneSVG />
            )}
          </VoiceRecordButton>
          <ButtonText>ჩაწერა</ButtonText>
        </ButtonBox>
        <ButtonBox>
          <YouTubeSVG />
          <ButtonText>YouTube Link</ButtonText>
        </ButtonBox>
      </Buttons>
    </MainView>
  );
}

const MainView = styled.View`
  width: 100%;
  gap: 4px;
`;
const PlaySection = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 6px;
`;
const Container = styled.View`
  justify-content: center;
  gap: 4px;
  padding-top: 16px;
`;
const LineContainer = styled.View`
  justify-content: center;
`;
const Circle = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #2fa2fe;
  position: absolute;
`;
const Line = styled.View`
  width: 287px;
  height: 5px;
  border-radius: 10px;
  background-color: #d9d9d9;
`;
const PlayTime = styled.Text`
  font-size: 12px;
  font-weight: 200;
`;
const Buttons = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 48px;
`;
const ButtonBox = styled.Pressable`
  align-items: center;
  gap: 10px;
`;
const ButtonText = styled.Text`
  font-size: 12px;
  font-weight: 200;
`;
const VoiceRecordButton = styled.Pressable`
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 10px;
  background-color: #2fa2fe;
`;
const StopRectangle = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 4px;
  background-color: white;
`;
