import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  min-height: 75vh;

  .title {
    font-size: 50px;
    margin: 0;

    @media (max-width: 1024px) {
      font-size: 30px;
      margin: 0 0 10px 0;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconSocialMedia = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 40vh;

  a {
    text-decoration: none;
    color: unset;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
  a {
    text-decoration: none;
    color: unset;
  }

  @media (max-width: 1024px) {
    font-size: 15px;
    margin: 0 0 10px 0;
  }
`;
