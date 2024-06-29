import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import debounce from 'utils/debounce';

const SearchBarWrapper = styled.div`
    background-color: #e9e9e9;
    display: flex;
    justify-content: center;
    padding: 10px;
    input[type=text] {
        font-size: 1.2rem;
  }
  button{
    padding: 6px 10px;
    background: #ddd;
    font-size: 1.2rem;
    border: none;
    cursor: pointer;
  }
   button:hover{background: #ccc;} 
  .topnav input[type=text] {
    border: 1px solid #ccc;  
  }
`;
type searchBarProps = {
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
}
const SearchBar: React.FC<searchBarProps> = ({ name, setName }) => {
    // const [input, setInput] = useState<string>('');
    return (
        <SearchBarWrapper className="seach-wrapper">
            <input type="text" placeholder="Search by name..." name="search" value={name} onChange={({target: { value}}) => setName(value)} />
            {/* <button type="submit" onSubmit={() => setName(input)}><i className="fa fa-search"></i></button>  */}
        </SearchBarWrapper>
    );
};

export default SearchBar;