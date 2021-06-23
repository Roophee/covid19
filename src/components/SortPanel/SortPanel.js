import React, { useCallback } from 'react';
import { StyledSortPanel } from './style';

const SortPanel = ({ sortType, setSortType }) => {
  const onChangeHandler = useCallback(
    e => {
      setSortType(e.target.value);
    },
    [setSortType]
  );

  return (
    <StyledSortPanel value={sortType} onChange={onChangeHandler}>
      <option value="alphaInc">Alphabet &#11167;</option>
      <option value="alphaDec">Alphabet &#11165;</option>
      <option value="totalInc">Quantity &#11167;</option>
      <option value="totalDec">Quantity &#11165;</option>
    </StyledSortPanel>
  );
};

export default SortPanel;
