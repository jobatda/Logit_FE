import { Jeju } from './components/Jeju';
import { Gyeongnam } from './components/Gyeongnam';
import { Gyeongbuk } from './components/Gyeongbuk';
import { Gwangju } from './components/Gwangju';
import { Busan } from './components/Busan';
import { Daegu } from './components/Daegu';
import { Chungbuk } from './components/Chungbuk';
import { Chungnam } from './components/Chungnam';
import { Gyeonggi } from './components/Gyeonggi';
import { Daejeon } from './components/Daejeon';
import { Gangwon } from './components/Gangwon';
import { Incheon } from './components/Incheon';
import { Jeonbuk } from './components/Jeonbuk';
import { Jeonnam } from './components/Jeonnam';
import { Sejong } from './components/Sejong';
import { Seoul } from './components/Seoul';
import { Ulsan } from './components/Ulsan';

export default function RegionMap() {
    return (
        <div style={{ position: 'relative' }}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 509 716.1"
              enableBackground="new 0 0 509 716.1"
            >
                <style type="text/css">
                    {`.st0{fill:currentColor;stroke:#FFFFFF;stroke-width:0.5;}
                      .st1{fill:none;stroke:#000000;stroke-width:0.5;}`}
                </style>
                <Busan/>
                <Chungbuk/>
                <Chungnam/>
                <Daegu/>
                <Daejeon/>
                <Gangwon/>
                <Gwangju/>
                <Gyeongbuk/>
                <Gyeonggi/>
                <Gyeongnam/>
                <Incheon/>
                <Jeju/>
                <Jeonbuk/>
                <Jeonnam/>
                <Sejong/>
                <Seoul/>
                <Ulsan/>
            </svg>
        </div>
    );
}