import styled from "styled-components";

const Head = () => {
  const Header = styled.header`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &:before {
      content: "";
      background: url(https://cdn.pixabay.com/photo/2016/03/17/15/43/gyeongbuk-palace-1263133_1280.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      opacity: 0.9;
      position: absolute;
      z-index: -1;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
    }
  `;
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const H1 = styled.h1`
    text-align: center;
    margin: 10px 0;
    font-weight: 700;
    font-size: 48px;
  `;
  const MiniHeader = styled.p`
    text-align: center;
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 600;
  `;

  return (
    <Header>
      <Container>
        <H1>SEOUL</H1>
        <MiniHeader>Do you want to join with me?</MiniHeader>
        <button>Click</button>
      </Container>
    </Header>
  );
};

export default Head;
