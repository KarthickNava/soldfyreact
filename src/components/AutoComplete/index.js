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
    handleKeyDown
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
  margin:0 50px
`;

const List = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  height: 40vh;
  background-color: #fff;
  border-radius:4px;
  border:1px solid #dfdfdf
  overflow-y: scroll;
`;

const Item = styled.div`
  border-left: 3px solid ${({ active }) => (active ? "blue" : "initial")};
  background-color: ${({ active }) => (active ? "gray" : "initial")};
  padding: 0 15px;
  color: ${({ active }) => (active ? "white" : "#000")};
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;

const Input = styled.input`
  background-color: #efefef;
  color: #000;
  font-size:18px;
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
  color: #c9ada7;
`;

const Form = styled.form`

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
