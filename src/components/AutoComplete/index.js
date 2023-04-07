import styled from "styled-components";
import { ReactComponent as SearchIcon } from "./search-icon.svg";
import countries from "./data";
import useAutocomplete from "./useAutocomplete";

const SearchForm = () => {
  const {
    value,
    handleValueChange,
    suggestions,
    select,
    currentFocus,
    handleKeyDown,
  } = useAutocomplete();
  const hasSuggestions = !(Array.isArray(suggestions) && !suggestions.length);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Container>
          <Input
            onKeyDown={handleKeyDown}
            value={value}
            placeholder="Sök bland 20 000+ produkter ..."
            onChange={(e) => handleValueChange(e.target.value, countries)}
          />

          <SubmitButton>
            <SearchIcon />
          </SubmitButton>
          {hasSuggestions && (
            <List>
              {suggestions.map(({ rest, itemValue }, i) => (
                <Item
                  key={itemValue}
                  active={i === currentFocus}
                  onClick={() => select(itemValue)}
                >
                  <Match>{value}</Match>
                  {rest}
                </Item>
              ))}
            </List>
          )}
        </Container>
      </Form>
    </div>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 0 50px;
`;

const StyleList = styled.div`
  position: absolute;
  top: 110%;
  left: 0px;
  right: 0px;
  height: 300px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  overflow-x: hidden;
  overflow-y: scroll;
  border: 1px solid;
  padding: 40px 20px;
  box-sizing: border-box;
`;

const Item = styled.div`
  border-left: 3px solid ${({ active }) => (active ? "blue" : "initial")};
  background-color: ${({ active }) => (active ? "gray" : "initial")};
  padding: 5px;
  color: ${({ active }) => (active ? "white" : "#000")};
  cursor: pointer;
  display: flex;
  &:hover {
    background-color: gray;
  }
`;

const Input = styled.input`
  background-color: #efefef;
  color: #000;
  font-size: 18px;
  border: none;
  padding: 15px 15px;
  width: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: 1px solid #dfdfdf;
  border-right: 0;
  &:focus {
    outline: none;
  }
`;

const Match = styled.strong`
  color: #000304;
`;

const Form = styled.form``;
const List = styled.div`
  position: absolute;
  top: 110%;
  left: 0px;
  right: 0px;
  height: 300px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  overflow-x: hidden;
  overflow-y: scroll;
  border: 1px solid;
  padding: 40px 20px;
  box-sizing: border-box;

  /* Add your custom CSS styles here */
  color: #333;
  font-size: 16px;
  z-index: 3;
`;

const SubmitButton = styled.button`
  outline: none;
  background-color: #efefef;
  padding: 15px 20px;
  border: none;
  color: #000;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid #dfdfdf;
  border-left: 0;
  &:focus {
    outline: none;
  }
`;

export default SearchForm;
