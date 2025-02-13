import "./index.css";
import Jeju from './components/Jeju';
import {Gyeongnam} from './components/Gyeongnam';
import {Gyeongbuk} from './components/Gyeongbuk';
import {Gwangju} from './components/Gwangju';
import {Busan} from './components/Busan';
import {Daegu} from './components/Daegu';
import {Chungbuk} from './components/Chungbuk';
import {Chungnam} from './components/Chungnam';
import {Gyeonggi} from './components/Gyeonggi';
import {Daejeon} from './components/Daejeon';
import {Gangwon} from './components/Gangwon';
import {Incheon} from './components/Incheon';
import {Jeonbuk} from './components/Jeonbuk';
import {Jeonnam} from './components/Jeonnam';
import {Sejong} from './components/Sejong';
import {Seoul} from './components/Seoul';
import {Ulsan} from './components/Ulsan';
import Modal from "./util/Modal.tsx";
import {useImageSelection} from "./hooks/useImageSelection.ts";
import styled from "styled-components";
import {useEffect} from "react";
import getMap from "../../apis/regionMap/getMap.ts";

const regions = [
    {Component: Busan, name: "Busan"},
    {Component: Chungbuk, name: "Chungbuk"},
    {Component: Chungnam, name: "Chungnam"},
    {Component: Daegu, name: "Daegu"},
    {Component: Daejeon, name: "Daejeon"},
    {Component: Gangwon, name: "Gangwon"},
    {Component: Gwangju, name: "Gwangju"},
    {Component: Gyeongbuk, name: "Gyeongbuk"},
    {Component: Gyeonggi, name: "Gyeonggi"},
    {Component: Gyeongnam, name: "Gyeongnam"},
    {Component: Incheon, name: "Incheon"},
    {Component: Jeju, name: "Jeju"},
    {Component: Jeonbuk, name: "Jeonbuk"},
    {Component: Jeonnam, name: "Jeonnam"},
    {Component: Sejong, name: "Sejong"},
    {Component: Seoul, name: "Seoul"},
    {Component: Ulsan, name: "Ulsan"},
];

export default function RegionMap() {
    const {
        selectedModal,
        toggleIsOpen,
        selectedImages,
        handlePathClick,
        handleColorClick,
        getFillStyle,
    } = useImageSelection();
    const commonProps = {toggleIsOpen, selectedImages, getFillStyle};

    return (
        <>
            <RegionMapTop>
                <RegionMapName>여행지도:)</RegionMapName>
                <RegionMapCount>방문 지역 수: <span style={{color: "#71C9B0"}}>{Object.keys(selectedImages).length}</span> / 255</RegionMapCount>
            </RegionMapTop>
            <RegionMapDiv>
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 509 716.1"
                    enableBackground="new 0 0 509 716.1"
                    style={{maxWidth: '358px'}}
                >
                    {regions.map(({Component, name}) => (
                        <Component key={name} {...commonProps} />
                    ))}
                </svg>
            </RegionMapDiv>
            <Modal
                selectedModal={selectedModal}
                toggleIsOpen={toggleIsOpen}
                handlePathClick={handlePathClick}
                handleColorClick={handleColorClick}
            />
        </>
    );
}

const RegionMapTop = styled.div`
    margin: 16px 0 20px;
    display: flex;
    justify-content: space-between;
    padding: 12px 22px;
    border-radius: 12px;
    background-color: #F7FAF9;
    align-items: center;
`;

const RegionMapName = styled.div`
    color: #333333;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
`;

const RegionMapCount = styled.div`
    font-size: 14px;
    border-radius: 12px;
    background-color: #FFFFFF;
    color: #333333;
    padding: 6px 15px;
    border: 1px solid #71C9B0;
`;

const RegionMapDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;