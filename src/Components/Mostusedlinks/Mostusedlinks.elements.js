import styled from 'styled-components';

export const InfoSec = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  padding-left: 50px;
  padding-right: 10px;
  background: #532DEA;

  `;

export const InfoRow = styled.div`
  background: transparent;
  display: flex;
  margin: 0 -5px 5px -5px;
  flex-wrap: wrap;
  align-items: left;
  max-width: 100%;
  /* flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')}; */
  @media screen and (max-width: 1024px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding-bottom: 5px;
    padding-top: 5px;
    padding-right: 5px;
    padding-left: 5px;
  }
`;

export const InfoColumn = styled.div`
  margin-bottom: 0px;
  /* padding-right: 5px; */
  padding-left: 15px;
  max-width: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* padding-bottom: 20px; */
    /* padding-top: 10px; */
    /* padding-right: 5px; */
  padding-left: 5px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    max-width: 100%;
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
    padding-right: 35px;
    padding-left: 35x;
    max-width: 100%;
    justify-content: left;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    display: flex-wrap;
    justify-content: left;
    padding-right: 5px;
    padding-left: 5px;
    /* padding-bottom: 40px; */
    /* padding-top: 20px; */
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    /* padding-bottom: 40px; */
    /* padding-top: 20px; */
    padding-right: 10px;
    padding-left: 10px;
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
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-top: 20px;
  margin-bottom: 6px;
  
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
  margin-bottom: 15px;
  font-size: 22px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#fff' : 'black')};
  text-align: center;

`;

export const Subtitle = styled.p`
  max-width: 440px;
  /* margin-bottom: 35px; */
  font-size: 15px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;