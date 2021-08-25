import styled from "styled-components";

export const CenteredDiv = styled.p`
  justify-content: center;
  flex-direction: column;
`;

export const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 550px;
  padding: 20px;

  > div {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 600px) {
    > div {
      flex-direction: column;
    }
    max-width: 250px;
  }
`;
