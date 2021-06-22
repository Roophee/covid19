import styled from 'styled-components'
import Popup from 'reactjs-popup';

 export const StyledModal = styled(Popup)`
  &-overlay {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const StyledCountryDetailedInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  min-width: 300px;
  padding: 5px;
  color: #757575;
  background: #fff;
  border-radius: 10px;

  & .title {
    margin: 0 auto 20px;
    color: #000;
    font-weight: 700;
    font-size: 1.6rem;
  }
  & .infoRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    margin-bottom: 25px;
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
  background: ${(props) => props.theme.tableHeaderBgc};
  color: ${(props) => props.theme.tableHeaderColor};
  font-weight: 600;
  border-radius: 15px;
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
