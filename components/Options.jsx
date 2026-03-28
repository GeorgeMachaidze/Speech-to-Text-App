import React from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import SmallArrowDownSVG from "../svg/SmallArrowDownSVG";
import { useState } from "react";
import SmallArrowUpSVG from "../svg/SmallArrowUpSVG";
import SearchSvg from "../svg/SearchSvg";
import SelectedSVG from "../svg/SelectedSVG";

export default function Options({ onClose }) {
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);
  const [selectorOneSelected, setSelectorOneSelected] = useState(false);
  const [selectorTwoSelected, setSelectorTwoSelected] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ქართული");
  const [selectedOption2, setSelectedOption2] = useState("მოსაუბრის გამოყოფა");
  const [selectedOption4, setSelectedOption4] = useState("მიკროფონი");
  const [selectedSTT, setSelectedSTT] = useState("STT1");
  const [search, setSearch] = useState("");
  const getWordCount = (word) => {
    return word.trim().split(/\s+/).length;
  };

  const Languages = [
    "ქართული",
    "ინგლისური",
    "ფრანგული",
    "იაპონური",
    "არაბული",
    "ნიდერლანდური",
    "ბერძნული",
    "შვედური",
  ];
  const STTArray = ["STT1", "STT2", "STT3"];

  const handleResetAndClose = () => {
    setOption1(false);
    setOption2(false);
    setOption3(false);
    setOption4(false);
    setSelectedLanguage("ქართული");
    setSelectedOption2("მოსაუბრის გამოყოფა");
    setSelectedSTT("STT1");
    setSelectedOption4("მიკროფონი");
    setSelectorOneSelected(false);
    setSelectorTwoSelected(false);
    onClose();
  };

  const handleSaveAndClose = () => {
    onClose();
  };
  return (
    <ScreenWrapper>
      <SheetContainer>
        <OptionItem onPress={() => setOption1(!option1)}>
          <OptionText>{selectedLanguage}</OptionText>
          {option1 ? <SmallArrowUpSVG /> : <SmallArrowDownSVG />}
        </OptionItem>
        {option1 && (
          <OptionSelector>
            <SearchBox>
              <SearchSvg />
              <SearchInput
                placeholder="ძებნა"
                value={search}
                onChangeText={(text) => setSearch(text)}
              />
            </SearchBox>

            <LanguageItems>
              {Languages.filter((lang) => lang.includes(search)).map(
                (lang, index) => (
                  <LanguageRow
                    key={index}
                    onPress={() => {
                      setOption1(false);
                      setSelectedLanguage(lang);
                    }}
                  >
                    <LanguageLabel>{lang}</LanguageLabel>
                  </LanguageRow>
                ),
              )}
            </LanguageItems>
          </OptionSelector>
        )}
        <OptionItem onPress={() => setOption2(!option2)}>
          <OptionText>{selectedOption2}</OptionText>
          {option2 ? <SmallArrowUpSVG /> : <SmallArrowDownSVG />}
        </OptionItem>
        {option2 && (
          <OptionSelector>
            <OptionText
              onPress={() => {
                setOption2(false);
                if (getWordCount(selectedOption2) > 2) {
                  setSelectedOption2("მოსაუბრის გამოყოფა");
                } else {
                  setSelectedOption2("მოსაუბრის არ გამოყოფა");
                }
              }}
            >
              {getWordCount(selectedOption2) > 2
                ? "მოსაუბრის  გამოყოფა"
                : "მოსაუბრის არ გამოყოფა"}
            </OptionText>
          </OptionSelector>
        )}
        <OptionItem onPress={() => setOption3(!option3)}>
          <OptionText>{selectedSTT}</OptionText>
          {option3 ? <SmallArrowUpSVG /> : <SmallArrowDownSVG />}
        </OptionItem>

        {option3 && (
          <OptionSelector>
            {STTArray.map((item, index) => (
              <LanguageRow
                key={index}
                onPress={() => {
                  setSelectedSTT(item);
                  setOption3(false);
                }}
              >
                <OptionText>{item}</OptionText>
              </LanguageRow>
            ))}
          </OptionSelector>
        )}
        <OptionItem onPress={() => setOption4(!option4)}>
          <OptionText>{selectedOption4}</OptionText>
          {option4 ? <SmallArrowUpSVG /> : <SmallArrowDownSVG />}
        </OptionItem>
        {option4 && (
          <OptionSelector>
            <OptionText
              onPress={() => {
                setOption4(false);
                if (getWordCount(selectedOption4) > 1) {
                  setSelectedOption4("მიკროფონი");
                } else {
                  setSelectedOption4("სისტემის ხმა");
                }
              }}
            >
              {getWordCount(selectedOption4) > 1 ? "მიკროფონი" : "სისტემის ხმა"}
            </OptionText>
          </OptionSelector>
        )}
        <Selectors>
          <Selector>
            <SelectorCircle
              onPress={() => {
                setSelectorOneSelected(!selectorOneSelected);
              }}
              style={{
                backgroundColor: selectorOneSelected ? "#2079C0" : "#48484859",
              }}
            >
              {selectorOneSelected ? <SelectedSVG /> : <></>}
            </SelectorCircle>
            <SelectorText>პუნქტუაცია</SelectorText>
          </Selector>
          <Selector>
            <SelectorCircle
              onPress={() => {
                setSelectorTwoSelected(!selectorTwoSelected);
              }}
              style={{
                backgroundColor: selectorTwoSelected ? "#2079C0" : "#48484859",
              }}
            >
              {selectorTwoSelected ? <SelectedSVG /> : <></>}
            </SelectorCircle>
            <SelectorText>ავტოკორექტი</SelectorText>
          </Selector>
        </Selectors>
        <Buttons>
          <BigButton
            onPress={handleResetAndClose}
            style={{ backgroundColor: "#E0F1FF" }}
          >
            <ButtonText style={{ color: "#2079C0" }}>გაუქმება</ButtonText>
          </BigButton>
          <BigButton
            onPress={handleSaveAndClose}
            style={{ backgroundColor: "#2079C0" }}
          >
            <ButtonText style={{ color: "#ffff" }}>დამახსოვრება</ButtonText>
          </BigButton>
        </Buttons>
      </SheetContainer>
    </ScreenWrapper>
  );
}

const ScreenWrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: flex-end;
`;

const SheetContainer = styled.View`
  width: 100%;
  height: 403px;
  background-color: #ffffff;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  gap: 12px;
  padding: 50px 14px 55px 14px;
`;

const OptionItem = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  height: 35px;
  border: 0.5px solid #434343;
  border-radius: 5px;
`;
const OptionText = styled.Text`
  font-size: 14px;
  font-weight: 400;
`;
const OptionSelector = styled.View`
  margin-top: 2px;
  border: 0.5px solid #434343;
  border-radius: 5px;
  width: 100%;
  height: auto;
  padding: 9px 4px;
  gap: 4px;
`;
const SearchBox = styled.View`
  flex-direction: row;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  padding: 8px 10px;
  border: 0.5px solid #434343;
  gap: 4px;
`;
const SearchInput = styled.TextInput`
  width: 100%;
  font-size: 12px;
  font-weight: 400;
`;
const LanguageItems = styled(ScrollView)`
  height: 100%;
  gap: 8px;
`;

const LanguageRow = styled.Pressable`
  padding: 12px;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;
`;
const LanguageLabel = styled.Text`
  font-size: 14px;
  color: #333;
`;
const Selectors = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  width: 100%;
  gap: 80px;
`;
const Selector = styled.View`
  flex-direction: row;
  gap: 6px;
`;
const SelectorCircle = styled.Pressable`
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
`;
const SelectorText = styled.Text`
  font-size: 12px;
  font-weight: 700;
`;
const Buttons = styled.View`
  justify-content: center;
  flex-direction: row;
  margin-top: 18px;
  gap: 15px;
`;
const BigButton = styled.Pressable`
  align-items: center;
  justify-content: center;
  width: 164px;
  height: 44px;
  border-radius: 10px;
`;
const ButtonText = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;
