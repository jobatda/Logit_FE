import React from 'react';
import LeftArrowIcon from "../../assets/thunder/LeftArrowIcon.svg?react";
import NoAlarm from "../../assets/Layout/NoAlarm.png"
import {useNavigate} from "react-router-dom";
import Row from "../../styles/Common/Row.ts";

export default function Alarm() {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate(-1)} style={{marginTop: "13px"}}>
                <LeftArrowIcon/>
            </button>
            <Row $horizonAlign="center" style={{marginTop: "200px"}}>
                <img src={NoAlarm} alt="" style={{width: "170px"}}/>
            </Row>
        </div>
    );
}