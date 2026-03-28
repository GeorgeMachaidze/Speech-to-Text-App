import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { ScrollView } from "react-native";

import styled from "styled-components/native";
import GoBackSVG from "../svg/GoBackSVG";
import StarSVG from "../svg/StarSVG";
import GeoFlagSVG from "../svg/GeoFlagSVG";
import DownArrowSVG from "../svg/DownArrowSVG";
import PencilSVG from "../svg/PencilSVG";
import BinSVG from "../svg/BinSVG";

export default function History() {
  return (
    <MainView>
      <Header>
        <HeaderSide>
          <Link href="/">
            <GoBackSVG />
          </Link>
          <UserInfoBox>
            <UserNameCircle>
              <NameInitial>A</NameInitial>
            </UserNameCircle>
            <MailAndStatus>
              <MailText>achi.teruashvili777@gmail.com</MailText>
              <StatusBox>
                <StarBox>
                  <StarSVG />
                </StarBox>
                <StatusText>პრემიუმი</StatusText>
              </StatusBox>
            </MailAndStatus>
          </UserInfoBox>
        </HeaderSide>
        <HeaderSide>
          <GeoFlagSVG />
          <DownArrowSVG />
        </HeaderSide>
      </Header>

      <MainSection>
        <DateSection>
          <DateText>დღეს</DateText>
          <ItemRectangle>
            <PencilSVG />
            <ItemText>
              ტრანსკრიფციის სერვისი ხმას ტექსტად გარდაქმნის სწრაფად და მარტივად.
              მომხმარებელს შეუძ...
            </ItemText>
            <BinSVG />
          </ItemRectangle>
          <ItemRectangle>
            <PencilSVG />
            <ItemText>
              ტრანსკრიფციის სერვისი ხმას ტექსტად გარდაქმნის სწრაფად და მარტივად.
              მომხმარებელს შეუძ...
            </ItemText>
            <BinSVG />
          </ItemRectangle>
          <DateText>გუშინ</DateText>
          <ItemRectangle>
            <PencilSVG />
            <ItemText>
              ტრანსკრიფციის სერვისი ხმას ტექსტად გარდაქმნის სწრაფად და მარტივად.
              მომხმარებელს შეუძ...
            </ItemText>
            <BinSVG />
          </ItemRectangle>
          <ItemRectangle>
            <PencilSVG />
            <ItemText>
              ტრანსკრიფციის სერვისი ხმას ტექსტად გარდაქმნის სწრაფად და მარტივად.
              მომხმარებელს შეუძ...
            </ItemText>
            <BinSVG />
          </ItemRectangle>
          <DateText>11 მარტი</DateText>
          <ItemRectangle>
            <PencilSVG />
            <ItemText>
              ტრანსკრიფციის სერვისი ხმას ტექსტად გარდაქმნის სწრაფად და მარტივად.
              მომხმარებელს შეუძ...
            </ItemText>
            <BinSVG />
          </ItemRectangle>
          <ItemRectangle>
            <PencilSVG />
            <ItemText>
              ტრანსკრიფციის სერვისი ხმას ტექსტად გარდაქმნის სწრაფად და მარტივად.
              მომხმარებელს შეუძ...
            </ItemText>
            <BinSVG />
          </ItemRectangle>
          <DateText>9 მარტი</DateText>
          <ItemRectangle>
            <PencilSVG />
            <ItemText>
              ტრანსკრიფციის სერვისი ხმას ტექსტად გარდაქმნის სწრაფად და მარტივად.
              მომხმარებელს შეუძ...
            </ItemText>
            <BinSVG />
          </ItemRectangle>
          <ItemRectangle>
            <PencilSVG />
            <ItemText>
              ტრანსკრიფციის სერვისი ხმას ტექსტად გარდაქმნის სწრაფად და მარტივად.
              მომხმარებელს შეუძ...
            </ItemText>
            <BinSVG />
          </ItemRectangle>
          <DateText>7 მარტი</DateText>
          <ItemRectangle>
            <PencilSVG />
            <ItemText>
              ტრანსკრიფციის სერვისი ხმას ტექსტად გარდაქმნის სწრაფად და მარტივად.
              მომხმარებელს შეუძ...
            </ItemText>
            <BinSVG />
          </ItemRectangle>
          <ItemRectangle>
            <PencilSVG />
            <ItemText>
              ტრანსკრიფციის სერვისი ხმას ტექსტად გარდაქმნის სწრაფად და მარტივად.
              მომხმარებელს შეუძ...
            </ItemText>
            <BinSVG />
          </ItemRectangle>
          <DateText>6 მარტი</DateText>
          <ItemRectangle>
            <PencilSVG />
            <ItemText>
              ტრანსკრიფციის სერვისი ხმას ტექსტად გარდაქმნის სწრაფად და მარტივად.
              მომხმარებელს შეუძ...
            </ItemText>
            <BinSVG />
          </ItemRectangle>
          <ItemRectangle>
            <PencilSVG />
            <ItemText>
              ტრანსკრიფციის სერვისი ხმას ტექსტად გარდაქმნის სწრაფად და მარტივად.
              მომხმარებელს შეუძ...
            </ItemText>
            <BinSVG />
          </ItemRectangle>
        </DateSection>
      </MainSection>
    </MainView>
  );
}
const MainView = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const Header = styled.View`
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
  padding: 0px 16px;
  flex-direction: row;
`;

const HeaderSide = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 9px;
`;

const UserInfoBox = styled.View`
  flex-direction: row;
  gap: 6px;
`;

const UserNameCircle = styled.View`
  align-items: center;
  justify-content: center;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  background-color: #ebeb80;
`;

const NameInitial = styled.Text`
  font-size: 12px;
  font-weight: 400;
`;

const MailAndStatus = styled.View`
  gap: 4px;
`;

const MailText = styled.Text`
  font-size: 10px;
  font-weight: 500;
`;

const StatusBox = styled.View`
  width: 55px;
  height: 13px;
  background-color: #3ad2a7;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

const StarBox = styled.View`
  position: absolute;
  right: -2.8px;
  top: 0;
`;

const StatusText = styled.Text`
  font-size: 8px;
  font-weight: 400;
`;

const MainSection = styled(ScrollView)`
  flex: 1;
  width: 100%;
  height: auto;
  gap: 22px;
  padding: 0 20px;
  background-color: #d2d1d15e;
`;

const DateSection = styled.View`
  padding: 6px 16px;
  gap: 8px;
`;

const DateText = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: #15151599;
`;

const ItemRectangle = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 344px;
  height: 57px;
  gap: 12px;
  padding: 16px 14px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #2fa2fe;
`;

const ItemText = styled.Text`
  font-size: 10px;
  font-weight: 700;
  max-width: 247px;
  min-height: 26px;
`;
