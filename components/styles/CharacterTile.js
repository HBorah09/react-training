import styled from "styled-components";
import deviceSizes from "./deviceSizes";

const CharacterTile = styled.div`
  border: 6px solid ${props => props.theme.black};
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  font-family: ${props => props.theme.fontFamily};
  margin: 0;
  font-size: 20px;
  background: ${props => props.theme.darkslategray};
  flex: 1;
  max-width: 250px;
  @media (max-width: ${deviceSizes.mobile}) {
      width: 40%;
    }

  img {
    height: 250px;
    width: 250px;
    @media (max-width: ${deviceSizes.tablet}) {
      height: 200px;
      width: 100%;
    }
  }
  .character-intro {
    display: flex;
  }
  .character-id {
    margin-right: 4px;
  }
  .character-properties {
    list-style: none;
    display: flex;
    flex-direction: row;
    padding: 5px 0;
    border-bottom: 1px solid rgba(255, 255, 255, .5);;
    :last-child {
      border-bottom: 0;
    }
  }
  .character-properties-container {
    padding: 0;
    margin: 24px 0 0 0;
  }
  .character-type {
    max-width: 80px;
    text-transform: uppercase;
  }
  .character-value {
    max-width: 120px;
    text-align: right;
    margin-left: auto;
    color: ${props => props.theme.orange};
  }
  .character-details-container {
    padding: 20px;
    color: ${props => props.theme.white};
    margin-top: -85px;
    background: ${props => props.theme.darkslategray};
    z-index: 1;
    opacity: 0.5;
    @media (max-width: ${deviceSizes.mobile}) {
      padding: 4px;
    }
  }
`;

export default CharacterTile;
