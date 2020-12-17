import styled from 'styled-components';
import Bayern from '../../Images/Bayern.jpg';

export const InfoSec = styled.div`
  padding: 50px 80px 50px 50px;
  background: #532DEA;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 10px 0;

  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 10px 0;

  }
  `;

export const InfoRow = styled.div`
  background: transparent;
  display: flex;
  margin: 0 -5px 5px -5px;
  flex-wrap: wrap;
  align-items: center;
  max-width: 100%;
  /* flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')}; */
  @media screen and (max-width: 1024px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 5px;
    padding-top: 5px;
    padding-right: 5px;
    padding-left: 5px;
  }
`;

export const InfoColumn = styled.div`
  margin-bottom: 0px;
  padding-right: 25px;
  padding-left: 15px;
  max-width: 50%;
  @media screen and (max-width: 768px) {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* padding-bottom: 20px; */
    /* padding-top: 10px; */
    padding-right: 5px;
  padding-left: 5px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* padding-bottom: 20px; */
    /* padding-top: 10px; */
    padding-right: 5px;
    padding-left: 5px;
  }
`;

export const InfoColumn2 = styled.div`
    /* background: #0099D5; */
    padding-right: 5px;
    padding-left: 25px;
    max-width: 50%;
  @media screen and (max-width: 768px) {
    max-width: 50%;
    display: flex-wrap;
    justify-content: center;
    padding-right: 5px;
    padding-left: 15px;
    /* padding-bottom: 40px; */
    /* padding-top: 20px; */
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* padding-bottom: 40px; */
    /* padding-top: 20px; */
    padding-right: 5px;
    padding-left: 15px;
  }
`;

export const InfoColumn3 = styled.div`
  /* background: #0099D5; */
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 100%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 200px;
  padding-top: 15px;
  padding-bottom: 15px;
  @media screen and (max-width: 668px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 600px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? 'white' : 'black')};
  font-size: 22px;
  /* font-style: ; */
  line-height: 28px;
  font-weight: 500;
  letter-spacing: 1.4px;
  margin-top: 20px;
  margin-bottom: 16px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    max-width: 100%;
    display: flex-wrap;
    justify-content: center;
    padding-right: 5px;
    padding-left: 5px;
    margin-top: 20px;
    margin-bottom: 6px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 18px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 6px;
    padding-right: 5px;
    padding-left: 5px;
  }
`;

export const TopLine2 = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#F2994A' : 'black')};
  font-size: 22px;
  /* font-style: ; */
  line-height: 28px;
  font-weight: 500;
  letter-spacing: 1.4px;
  margin-top: 20px;
  margin-bottom: 16px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    max-width: 100%;
    display: flex-wrap;
    justify-content: center;
    padding-right: 5px;
    padding-left: 5px;
    margin-top: 20px;
    margin-bottom: 6px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 18px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 6px;
    padding-right: 5px;
    padding-left: 5px;
  }
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const Heading = styled.h1`
  margin-bottom: 1px;
  font-size: 34px;
  line-height: 1.1;
  font-weight: 600;
  font-family: Aino Web Display,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  color: ${({ lightText }) => (lightText ? 'white' : 'black')};
  @media screen and (max-width: 768px) {
    font-size: 28px;
    max-width: 100%;
    display: flex-wrap;
    justify-content: center;
    padding-right: 5px;
    padding-left: 5px;
    margin-top: 20px;
    margin-bottom: 6px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 28px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 6px;
    padding-right: 5px;
    padding-left: 5px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  /* margin-bottom: 35px; */
  font-size: 15px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;

