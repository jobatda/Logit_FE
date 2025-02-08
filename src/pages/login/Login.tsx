import Row from "../../styles/Common/Row.ts";
import Column from "../../styles/Common/Column.ts";
import styled from "styled-components";

export default function Login() {
    return (
        <Column $horizonAlign="distribute" style={{minHeight: "100vh"}}>
            <div style={{padding: "0 46px"}}>
                <LoginTitle>여행 GO</LoginTitle>
                <LoginSubTitle>내가 채워나가는 대한민국</LoginSubTitle>
            </div>
            <div style={{padding: "0 36px", width: "100%", marginBottom: "70px"}}>
                <Column $gap={12}>
                    <StyledInput type="text" placeholder="아이디를 입력하세요."/>
                    <StyledInput type="text" placeholder="비밀번호를 입력하세요."/>
                </Column>
                <LoginButton>
                    로그인
                </LoginButton>
                <Row $horizonAlign="even">
                    <StyledButton>회원가입하기</StyledButton>
                    <StyledHr/>
                    <StyledButton>비밀번호 찾기</StyledButton>
                </Row>
            </div>
        </Column>
    );
}

const LoginTitle = styled.h1`
    font-size: 48px;
    color: #333333;
    font-weight: 400;
    line-height: 35px;
    margin-top: 110px;
    margin-bottom: 12px;
`;

const LoginSubTitle = styled.h2`
    font-size: 18px;
    color: #333333;
    font-weight: 500;
`;

const StyledInput = styled.input`
    padding: 15px 27px;
    color: #333333;
    font-size: 14px;
    font-weight: 400;
    border: 2px solid #EBEBEB;
    width: 100%;
    border-radius: 12px;

    &::placeholder {
        color: #B8B8B8;
    }
`;

const LoginButton = styled.button`
    background-color: #71C9B0;
    color: #FFFFFF;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    padding: 15px 0;
    width: 100%;
    justify-content: center;
    margin-top: 26px;
    margin-bottom: 18px;
`;

const StyledHr = styled.hr`
    border: none;
    width: 1px;
    height: 16px;
    background-color: #D9D9D9;
`;

const StyledButton = styled.button`
    color: #B8B8B8;
    font-weight: 500;
    font-size: 14px;
`;