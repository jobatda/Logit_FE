import styled from "styled-components";
import SearchInput from "./SearchInput";
import SettingIcon from "./SettingIcon";
import { SearchInputProps } from "../../types/SearchInput";


export default function SearchBar({ search, setQuery }: SearchInputProps) {
    return (
        <SearchBarContainer>
            <SearchInput search={search} setQuery={setQuery} />
            <SettingIcon />            
        </SearchBarContainer>
    );
}

const SearchBarContainer = styled.div`
    width: 358px;
    height: 35px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 26px;
`;

