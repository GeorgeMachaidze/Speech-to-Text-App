import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";

import styled from "styled-components/native";
import ArrowSVG from "../svg/ArrowsSVG";
import BurgerMenuSVG from "../svg/BurgerMenuSVG";
import PlusSVG from "../svg/PlusSVG";
import OptionsSVG from "../svg/OptionsSVG";
import MicrophoneSVG from "../svg/MicrophoneSVG";

export default function Home() {
  return (
    <MainView>
      <Header>
        <HeaderLeftSide>
          <HeaderText>ხმა</HeaderText>
          <ArrowSVG />
          <HeaderText>ტექსტი</HeaderText>
        </HeaderLeftSide>
        <BurgerMenuSVG />
      </Header>
      <HeaderUnderLine></HeaderUnderLine>
      <SecondSection>
        <AddNewButton>
          <PlusSVG />
          <ButtonText>ახლის გახსნა</ButtonText>
        </AddNewButton>
        <OptionButton>
          <OptionsSVG />
          <ButtonText style={{ color: "#23557d" }}>პარამეტრები</ButtonText>
        </OptionButton>
      </SecondSection>
      <MainSection>
        <MicrophoneSVG />
        <MainText>დაიწყე ჩაწერა...</MainText>
      </MainSection>
    </MainView>
  );
}
const MainView = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: flex-start;
  align-items: stretch;
`;
const Header = styled.View`
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
  padding: 0px 16px;
  flex-direction: row;
`;
const HeaderLeftSide = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 9px;
`;
const HeaderText = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;
const HeaderUnderLine = styled.View`
  width: 100%;
  height: 1px;
  background-color: #f0f0f0;
`;
const SecondSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 16px 20px 16px;
`;
const AddNewButton = styled.Pressable`
  align-items: center;
  text-align: center;
  flex-direction: row;
  border-radius: 5px;
  padding: 8px 6px;
  gap: 6px;
  width: 124px;
  background-color: #2fa2fe;
`;
const ButtonText = styled.Text`
  font-size: 12px;
  font-weight: 700;
  color: white;
`;
const OptionButton = styled.Pressable`
  align-items: center;
  text-align: center;
  flex-direction: row;
  border-radius: 5px;
  padding: 8px 6px;
  gap: 6px;
  width: 124px;
  border: 1px solid #23557d;
`;
const MainSection = styled.View`
  flex-direction: row;
  text-align: center;
  width: 100%;
  height: 495px;
  gap: 6px;
  padding: 0 20px;
`;
const MainText = styled.Text`
  font-size: 16px;
  font-weight: 200;
  color: #000000;
`;
