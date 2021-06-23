import React, { useRef, useCallback } from 'react';
import { StyledModal, StyledCountryDetailedInfo, ModalButton } from './style';

const LocalModal = props => {
  const { open, countryDetailInfo, setPopupIsOpen } = props;
  const ref = useRef();
  const closeTooltip = () => ref.current.close();
  const onClickButtonHandler = useCallback(
    e => {
      e.preventDefault();
      setPopupIsOpen(prev => !prev);
      closeTooltip();
    },
    [setPopupIsOpen]
  );

  return (
    <StyledModal ref={ref} open={open} closeOnDocumentClick={false}>
      <StyledCountryDetailedInfo>
        <div className="title">{countryDetailInfo.Country}</div>
        <div className="infoRow">
          <div className="infoCell">
            <span
              className="iconify"
              data-icon="fluent:heart-pulse-32-filled"
              data-inline="false"
            />
            <span>Total Confirmed</span>
          </div>
          <div className="infoCell">
            <span>{countryDetailInfo.TotalConfirmed}</span>
          </div>
        </div>
        <div className="infoRow">
          <div className="infoCell">
            <span className="iconify" data-icon="bx:bxs-skull" data-inline="false" />
            <span>Total Deaths</span>
          </div>
          <div className="infoCell">
            <span>{countryDetailInfo.TotalDeaths}</span>
          </div>
        </div>
        <div className="infoRow">
          <div className="infoCell">
            <span className="iconify" data-icon="ant-design:file-add-filled" data-inline="false" />
            <span>Total Recovered</span>
          </div>
          <div className="infoCell">
            <span>{countryDetailInfo.TotalRecovered}</span>
          </div>
        </div>
        <ModalButton onClick={onClickButtonHandler}>OK</ModalButton>
      </StyledCountryDetailedInfo>
    </StyledModal>
  );
};

export default LocalModal;
