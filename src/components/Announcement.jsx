import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: lightblue;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>WINTER SALE IS COMING... </Container>;
};

export default Announcement;
