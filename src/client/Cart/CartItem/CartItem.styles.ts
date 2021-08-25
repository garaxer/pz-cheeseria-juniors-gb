import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 10px;
  padding-top: 10px;

  .buttons {
    display: flex;
  }

  .buttonsWrapper,
  h3 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  h3 {
    width: 30%;
  }

  img {
    max-width: 80px;
    object-fit: cover;
  }
`;
/*  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  .buttonsWrapper {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  */
