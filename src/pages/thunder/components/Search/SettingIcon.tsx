import styled from "styled-components";

export default function SettingIcon() {
    return (
        <SettingIconContainer>
            <Icon src={"src/pages/thunder/temp_assets/btn_settings.png"} alt="Setting Icon" />
        </SettingIconContainer>
    );
}

const SettingIconContainer = styled.div`
    width: 24px;
    height: 24px;
`;

const Icon = styled.img``;