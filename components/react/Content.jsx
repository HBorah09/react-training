import React from "react";
import PropTypes from "prop-types";
import { Filters } from "./index";
import { Title, CharacterTile } from "../styles";
import { properties, texts, sortOptions } from "../../utils/constants";
import { timePast } from "../../utils";

const renderProperties = ch => {
  return properties.map(prop => {
    return (
      <li key={prop.label} className="character-properties">
        <Title fontSize="12px" className="character-type">{prop.label}</Title>
        {!prop.key.firstLevel ? <Title fontSize="12px" className="character-value">{ch[`${prop.key}`]}</Title> :
          <Title fontSize="12px" className="character-value">{ch[`${prop.key.firstLevel}`][`${prop.key.second}`]}</Title>}
      </li>
    );
  });
};

const renderEachCharacter = characters => {
  return characters.map(ch => {
    return (
      <CharacterTile key={ch.id}>
        <img src={ch.image} alt={ch.name} className="character-image" />
        <div className="character-details-container">
          <Title fontSize="18px">{ch.name}</Title>
          <div className="character-intro">
            <Title fontSize="12px" className="character-id">id: {ch.id}</Title>
            <Title fontSize="12px">- created {timePast(ch.created)} years ago</Title>
          </div>
          <ul className="character-properties-container">
            {renderProperties(ch)}
          </ul>
        </div>
      </CharacterTile>
    );
  });
};

const displayFilterSelection = selections => {
  return (
    <div className="selected-filters">
      <Title fontSize="16px">{texts.selectedFilter}</Title>
      {selections.map(choice => {
        return <Title key={choice} className="selections" fontSize="12px" displayStyle="inline-flex">{choice.label}<button>X</button></Title>;
      })}
    </div>
  );
};

let textInput = null;

const Content = props => {
  const { filterCharacters, data, filters, sortIds } = props;
  return (
    <div className="content">
      <Filters filterCharacters={filterCharacters} />
      <div className="characters-container">
        {filters && filters.length ? displayFilterSelection(filters) : null}
        <div className="input-container">
          <div className="search-container">
            <label htmlFor="search"><Title fontSize="16px">{texts.search}</Title></label>
            <div className="search-input-container">
              <input type="text" id="search" ref={(input) => { textInput = input; }} />
              <button onClick={() => props.searchNames(textInput.value)} >
                <Title fontSize="12px">{texts.searchCTA}</Title></button>
            </div>
          </div>
          <select className="sort-container" defaultValue="default" onChange={e => sortIds(e.target.value)}>
            <option value="default" disabled>{sortOptions.label}</option>
            {sortOptions.options.map(choice => <option key={choice}>{choice}</option>)}
          </select>
        </div>
        {data && data.length ? <div className="character-list">
          {renderEachCharacter(data)}
        </div> : `${texts.empty}`}
      </div>
    </div>
  );
};

Content.propTypes = {
  filterCharacters: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  sortIds: PropTypes.func.isRequired,
  searchNames: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape({})),
};


export default Content;
