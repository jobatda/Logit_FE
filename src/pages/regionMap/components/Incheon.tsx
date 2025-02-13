import {RegionProps} from "../util/type.ts";

export const Incheon = ({toggleIsOpen, selectedImages, getFillStyle}: RegionProps) => {

    return (
        <g id="인천광역시">
            <defs>
                {selectedImages.map((select: { region: string; background: string }) => (
                    <pattern
                        key={select.region}
                        id={`pattern-${select.region}`}
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                    >
                        <image
                            href={select.background}
                            width="1"
                            height="1"
                            preserveAspectRatio="none"
                        />
                    </pattern>
                ))}
            </defs>
            <path
                id="강화군"
                className="st0"
                style={{
                    fill: getFillStyle("강화군"),
                    cursor: 'pointer'
                }}
                d="M80.8,151.4l-3.4,3l-2.8-5.7l-6.4-4.8l2.7-5.1l3-1.1l1.9,0.7l-0.9,1.2l-0.1,4.5l4.4,2.4l1.3,0.3l1.4,1.9l-0.2,0.8l-0.5,1.7L80.8,151.4z M77.5,154.6L77.5,154.6L77.5,154.6l-0.2,0.1L77.5,154.6z M60.3,134.1l7.6-7l8.7,3.3l-0.5,1.2l0,0.1l-2.2,2.4l-1.8,1l-0.2,0l-3.4-0.4l-1.3,0.6l-3.4,2L60.3,134.1z M78.7,131.4l9.9-5.9l9.5,8.3l0.3,1.8l0.3,0.9l1.6,2.1l-0.1,0.3l0,0.7l-0.1,0.2l-0.8,1.1l0,0l-0.5,1l0,0l0,0.7l-0.1,0.5l1.6,2.4l-0.4,0.4l-0.3,1.3l-0.1,1.4l0.9,6.2l0.1,0.2l0.5,1.1l1.3,2l0.1,0.5l-3.6,2.8l-0.5,0.5l-4.4-0.3l-6.6,0.7l-1.7-0.2l-4.6-2.8l-0.6-3.7l5.9-3.2l-2.7-4.7l-2-2.3l-1.8-0.5l-1-2.1l0.2-3.7L78.7,131.4L78.7,131.4z"
                onClick={() => toggleIsOpen("강화군")}
            />
            <path
                id="인천광역시_서구"
                className="st0"
                style={{
                    fill: getFillStyle("인천광역시_서구"),
                    cursor: 'pointer'
                }}
                d="M108.8,169.5l8.3-4.3l-9-2.4l7.7-7.2l9,7.5l-5.4,1.2l3.7,4.9l-2.9,4.5L120,182l-0.3-0.1l-1.4-0.6l-4.3-4.5l-2.1,1.2l-1.1,0l-1.2,0l0-2.1l-0.2-1.1L108.8,169.5z"
                onClick={() => toggleIsOpen("인천광역시_서구")}
            />
            <polygon
                id="계양구"
                className="st0"
                style={{
                    fill: getFillStyle("계양구"),
                    cursor: 'pointer'
                }}
                points="124.8,163.1 133.3,164.8 129.8,169 129,173.7 120.2,173.7 123.1,169.2 119.4,164.3"
                onClick={() => toggleIsOpen("계양구")}
            />
            <polygon
                id="부평구"
                className="st0"
                style={{
                    fill: getFillStyle("부평구"),
                    cursor: 'pointer'
                }}
                points="129,173.7 126.8,179.5 129.9,181.9 120,182 120.2,173.7"
                onClick={() => toggleIsOpen("부평구")}
            />
            <polygon
                id="남동구"
                className="st0"
                style={{
                    fill: getFillStyle("남동구"),
                    cursor: 'pointer'
                }}
                points="126.9,192.3 126.8,192.8 126.2,193.6 124.7,195.2 119.4,195.2 117.3,194.3 121.7,186.9 119.7,181.9 120,182 129.9,181.9 131.2,181.9 127.9,191 127.9,191.1 127.8,191.4 127.8,191.4"
                onClick={() => toggleIsOpen("남동구")}
            />
            <polygon
                id="연수구"
                className="st0"
                style={{
                    fill: getFillStyle("연수구"),
                    cursor: 'pointer'
                }}
                points="111.6,202.1 106.7,201.2 115.7,199.9 110.1,195 109.5,189 109.9,188.8 111.9,188.8 113.3,188.2 121.7,186.9 117.3,194.3 117.2,194.3 119.4,195.2 119.8,197 117,200.5 116.7,200.8 113.9,202.1"
                onClick={() => toggleIsOpen("연수구")}
            />
            <path
                id="인천광역시_중구"
                className="st0"
                style={{
                    fill: getFillStyle("인천광역시_중구"),
                    cursor: 'pointer'
                }}
                d="M85.4,191.1l3.4,5.5l-0.5,0.6l-1.2,0.6l-3.7-3.8l1.5-3.1L85.4,191.1z M110,179.4l-0.4,1l1.1-0.4l3.5,2.3l-1.6,4.2l-0.9,1.8l-1.1,0l-0.5,0l-0.1-0.1l0.1-3.8l-2.1,2.4l-0.4-3.6l1.1-0.6l0-0.1l-0.3-1.5L110,179.4z M96.5,172.4l7.4,2.3l0.7,0l2.2,4.2l-17.7,10.6l-1.7-0.3l-1.6,1l-0.3-0.1l-2.1-4.7l-3.9,0.7l-0.5-4.8l6.7-3.1l3.4-0.7l2.2-0.1l1.9-0.1l2.8-2.7l0.2-1.4L96.5,172.4z M109,182.6L109,182.6L109,182.6L109,182.6L109,182.6z"
                onClick={() => toggleIsOpen("인천광역시_중구")}
            />
            <path
                id="옹진군"
                className="st0"
                style={{
                    fill: getFillStyle("옹진군"),
                    cursor: 'pointer'
                }}
                d="M18.3,189L18.3,189L18.3,189L18.3,189L18.3,189z M18.3,189L18.3,189l-0.2,0L18.3,189z M17.9,182.7l-0.2,0l-5.6,3.9L15,190l3.8-1.9L17.9,182.7L17.9,182.7z M89.7,174.4l2.5,0.9l0.6,0l-0.1-1.1l0.5-1.5l0,0l0-1.1l-1-0.8l-0.4-0.4l-3.7,4.1l0.8,0.5L89.7,174.4z M46.8,212l-2.5,7.9l6.5,1.7l1.2-0.3l-0.4-1l2.6-1.7L46.8,212z M16.2,168.2l-6.1,1.7l-2.6-1.8l2.3,8.8l7.3,1.3l6.3-6.1l-2.8-4L16.2,168.2z M88,212.5l-0.4,6.4l1,0.3l1.6-1.8l0.9,3l4.8-6.6l0.1-1.6L88,212.5z M51.7,220.3L51.7,220.3L51.7,220.3L51.7,220.3z M42.9,188l-3.2-0.2l-0.2,1.8l3,1.5v-1.5L42.9,188z"
                onClick={() => toggleIsOpen("옹진군")}
            />
            <polygon
                id="인천광역시_동구"
                className="st0"
                style={{
                    fill: getFillStyle("인천광역시_동구"),
                    cursor: 'pointer'
                }}
                points="113.6,178 118.3,181.2 114.3,182.3 110.5,179.9 110.3,179.3 111.1,178.9 111.2,178.9 112.3,178.5"
                onClick={() => toggleIsOpen("인천광역시_동구")}
            />
            <polygon
                id="미추홀구"
                className="st0"
                style={{
                    fill: getFillStyle("미추홀구"),
                    cursor: 'pointer'
                }}
                points="114.3,182.3 118.3,181.2 119.7,181.9 121.7,186.9 113.3,188.2 112.8,187.2 112.7,186.5"
                onClick={() => toggleIsOpen("미추홀구")}
            />
        </g>
    );
}; 