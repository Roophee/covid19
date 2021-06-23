import styled from 'styled-components';
import Popup from 'reactjs-popup';

export const StyledModal = styled(Popup)`
  &-overlay {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const StyledCountryDetailedInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 31vw;
  height: 37vh;
  min-width: 300px;
  min-height: 380px;
  padding: 20px;
  color: #757575;
  background: #fff;
  border-radius: 10px;

  @media (max-width: 1150px) {
    padding: 5px;
  }

  & .title {
    margin: 0 auto 20px;
    color: #000;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    
    @media (max-width: 400px){
      font-size: 32px;
      line-height: 36px;
    }
  }
  & .infoRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    margin-bottom: 25px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #666666;
  }
  & .infoCell {
    display: flex;
    align-items: center;
  }
  & .iconify {
    margin-right: 18px;
    font-size: 1.7rem;
  }
`;

export const ModalButton = styled.button`
  width: 30%;
  min-width: 50px;
  margin: 5px auto;
  padding: 7px;
  background: ${props => props.theme.tableHeaderBgc};
  color: ${props => props.theme.tableHeaderColor};
  font-weight: 600;
  border-radius: 20px;
  border-color: transparent;
  outline: none;
  cursor: pointer;
  &:hover {
    background: #0288d1;
  }
  &:active {
    background: #01579b;
  }
`;
