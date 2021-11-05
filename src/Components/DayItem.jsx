import data from "../db/data.json";
import styled from "styled-components";

const DayItem = ({ num }) => {
  const DayContainer = styled.section`
    height: 100vh;
    margin: 10px;
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
  `;
  const DayBox = styled.article`
    width: 283px;
    height: 283px;
    margin: 10px;
    border-radius: 50%;
    transform: translateY(-50%);
    background-color: #e3ded8;
  `;
  const DayDay = styled.h2`
    margin: 15px 0;
    text-align: center;
  `;
  const DayPara = styled.p`
    width: 176px;
    text-align: center;
    font-size: 8px;
    line-height: 20px;
    margin: 0 auto;
  `;
  const DayText = styled.span`
    & + &:after {
      content: "▶";
      margin: 2px;
    }
  `;
  const DayTip = styled.span``;
  const dayData = data.contents[num];
  return (
    <DayContainer>
      <DayBox>
        <DayDay>DAY {num < 10 ? `0${num + 1}` : num + 1}</DayDay>
        <DayPara>
          {dayData.place.map((p, i) => (
            <DayText key={p + i}>{p}</DayText>
          ))}
          <DayTip>{dayData.tip}</DayTip>
        </DayPara>
      </DayBox>
    </DayContainer>
  );
};
export default DayItem;
