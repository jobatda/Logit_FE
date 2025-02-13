import styled from "styled-components";
import SearchInput from "./SearchInput";
import { SearchInputProps } from "../../types/SearchInput";


export default function SearchBar({ search, setQuery }: SearchInputProps) {
    return (
        <SearchBarContainer>
            <SearchInput search={search} setQuery={setQuery} />
        </SearchBarContainer>
    );
}

const SearchBarContainer = styled.div`
    padding: 0 16px;
    width: 100%;
    height: 35px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 26px;
`;

