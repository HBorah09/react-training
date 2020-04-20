import React from "react";
import PropTypes from "prop-types";
import { Title } from "../styles";
import { filterOptions, texts } from "../../utils/constants";

const renderOptions = (filterId, options, callback, filters) => {
  return options.map(option => {
    const checkedState = filters && filters[`${filterId}`].includes(option.id);
    const checkboxId = `${filterId}_${option.id}`;
    return (
      <div className="each-filter-option" key={checkboxId}>
        <input type="checkbox" id={checkboxId} name={filterId} value={option.id} checked={checkedState}
          onChange={e => callback({ elem: e.target, label: option.label })} />
        <label htmlFor={checkboxId}><Title fontSize="16px" displayStyle="inline-block" alignStyle="left">{option.label}</Title></label>
      </div>
    );
  });
};

const renderFilters = (callback, filters) => {
  return filterOptions.map(filter => {
    return (
      <div className="each-filter" key={filter.id}>
        <Title fontSize="16px">{filter.label}</Title>
        {renderOptions(filter.id, filter.options, callback, filters)}
      </div>
    );
  });
};

const Filters = props => {
  return (
    <div className="filters-container">
      <Title alignStyle="left">{texts.filter}</Title>
      <div>
        {renderFilters(props.filterCharacters, props.filters)}
      </div>
    </div>
  );
};

Filters.propTypes = {
  filterCharacters: PropTypes.func.isRequired,
  filters: PropTypes.shape({}),
};


export default Filters;

