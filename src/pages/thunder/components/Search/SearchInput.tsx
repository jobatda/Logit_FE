import styled from "styled-components";
import { SearchInputProps } from "../../types/SearchInput";

import searchIcon from "../../temp_assets/icn_search.png";

export default function SearchInput({ search, setQuery }: SearchInputProps) {
    return (
        <SearchInputContainer>
            {!search && <SearchIcon src={searchIcon} alt="" />}
            <Search 
                value={search} 
                onChange={(e) => setQuery(e.target.value)} 
            />
        </SearchInputContainer>
    );
}

const SearchInputContainer = styled.div`
    width: 100%;
    height: 35px;
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F8F8F8;
    padding: 8px 13px 8px 17px;
    position: relative;
`;
    
const Search = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: none;
    background-color: #F8F8F8;
    font-family: 'Pretendard-Regular';
`;

const SearchIcon = styled.img`
    position: absolute;
    left: 17px;
    bottom: 7.5px;
    width: 20px;
    height: 20px;
`;