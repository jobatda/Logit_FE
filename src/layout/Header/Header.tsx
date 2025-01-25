import styled from "styled-components";

export default function Header() {
    return (
        <HeaderWrapper >
            헤더
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 20px;
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 14px;
    color: ${({theme}) => theme.Black};
    z-index: 500;

    @media (min-width: 500px) {
        transform: translateX(-50%);
        left: 50%;
        width: 500px;
    }
`;