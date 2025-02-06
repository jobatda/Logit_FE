import styled from "styled-components";

import btnSettingIcon from "../../temp_assets/btn_settings.png";

export default function SettingIcon() {
    return (
        <SettingIconContainer>
            <Icon src={btnSettingIcon} alt="Setting Icon" />
        </SettingIconContainer>
    );
}

const SettingIconContainer = styled.div`
    width: 24px;
    height: 24px;
`;

const Icon = styled.img``;