import styled from "styled-components";
import deviceSizes from "./deviceSizes";

const Container = styled.div`
  padding: 24px 40px;
  background: url('/background.png');
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (max-width: ${deviceSizes.mobile}) {
      padding: 10px 0;
  }
  .content {
    display: flex;
    flex-direction: row;
    @media (max-width: ${deviceSizes.mobile}) {
    flex-direction: column;
    }
  }
  .filters-container {
    min-width: 200px;
    display: flex;
    flex-direction: column;
    margin: 0 20px 0 0;
    @media (max-width: ${deviceSizes.mobile}) {
      margin: 0 20px;
    }
  }
  .characters-container {
    width: 100%;
  }
  .each-filter {
    border: 1px solid ${props => props.theme.black};
    padding: 20px;
    margin: 20px 0;
    border-radius: 4px;
  }
  .each-filter-option {
    display: flex;
    flex-direction: row;
  }
  .character-list {
    display: flex;
    flex-wrap: wrap;
  }
  .selections {
    background: ${props => props.theme.darkslategray};
    color: ${props => props.theme.white};
    margin: 0 10px 10px 0;
    padding: 10px;
    border-radius: 4px;
    button {
      border: none;
      background: none;
      color: ${props => props.theme.white};
    }
  }
  .selected-filters {
    @media (max-width: ${deviceSizes.mobile}) {
        margin: 0 20px;
      }
  }
  .search-container {
    @media (max-width: ${deviceSizes.mobile}) {
        width: 100%;
      }
  }
  .search-input-container {
    display: flex;
    input {
      padding: 10px 0;
      width: 300px;
      border-radius: 2px;
      border: 1px solid ${props => props.theme.grey};
      outline: none;
      @media (max-width: ${deviceSizes.tablet}) {
        width: 120px;
      }
      @media (max-width: ${deviceSizes.mobile}) {
        width: 100%;
        margin-bottom: 15px;
      }
    }
    button {
      height: 35px;
      color: ${props => props.theme.white};
      background: ${props => props.theme.darkslategray};
      border: 1px solid;
      border-radius: 4px;
      padding: 0 20px;
    }
  }
  .input-container {
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    margin-bottom: 15px;
    @media (max-width: ${deviceSizes.mobile}) {
      flex-direction: column;
      margin: 0 20px;
    }
  }
  .sort-container {
    margin-left: auto;
    height: 35px;
    width: 200px;
    outline: none;
    font-family: ${props => props.theme.fontFamily};
    background: ${props => props.theme.white};
    @media (max-width: ${deviceSizes.mobile}) {
      margin: 0 auto 20px auto;
      width: 100%;
    }
  }
`;

export default Container;
