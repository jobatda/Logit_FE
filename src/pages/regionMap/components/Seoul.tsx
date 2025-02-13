import {RegionProps} from "../util/type.ts";

export const Seoul = ({toggleIsOpen, selectedImages, getFillStyle}: RegionProps) => {

    return (
        <g id="서울특별시">
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
            <polygon
                id="강동구"
                className="st0"
                style={{
                    fill: getFillStyle("강동구"),
                    cursor: 'pointer'
                }}
                points="179.9,165.4 181.8,170.7 177,175.1 172.5,171 173.3,168.9"
                onClick={() => toggleIsOpen("강동구")}
            />
            <polygon
                id="송파구"
                className="st0"
                style={{
                    fill: getFillStyle("송파구"),
                    cursor: 'pointer'
                }}
                points="172.5,171 177,175.1 176.8,181.9 174.3,183 172.5,178.7 168.3,177.4 167.3,173.9 171.3,172.4"
                onClick={() => toggleIsOpen("송파구")}
            />
            <polygon
                id="강남구"
                className="st0"
                style={{
                    fill: getFillStyle("강남구"),
                    cursor: 'pointer'
                }}
                points="161.1,172.4 165.9,173.3 167.3,173.9 168.3,177.4 172.5,178.7 174.3,183 170.7,184.6 169.5,181.6 165.2,182.9 160,173.7"
                onClick={() => toggleIsOpen("강남구")}
            />
            <polygon
                id="서초구"
                className="st0"
                style={{
                    fill: getFillStyle("서초구"),
                    cursor: 'pointer'
                }}
                points="160,173.7 165.2,182.9 169.5,181.6 170.7,184.6 164.7,188.6 163.2,183.3 157.4,184.2 156.6,181.4 156.5,176.7"
                onClick={() => toggleIsOpen("서초구")}
            />
            <polygon
                id="관악구"
                className="st0"
                style={{
                    fill: getFillStyle("관악구"),
                    cursor: 'pointer'
                }}
                points="146.8,180 153.9,178.7 156.6,181.4 157.4,184.2 154.3,186.9 152.4,187.3 149.9,185.4 146.3,180.9 146.8,180"
                onClick={() => toggleIsOpen("관악구")}
            />
            <polygon
                id="동작구"
                className="st0"
                style={{
                    fill: getFillStyle("동작구"),
                    cursor: 'pointer'
                }}
                points="152.7,174.9 156.5,176.7 156.6,181.4 153.9,178.7 146.8,180"
                onClick={() => toggleIsOpen("동작구")}
            />
            <polygon
                id="영등포구"
                className="st0"
                style={{
                    fill: getFillStyle("영등포구"),
                    cursor: 'pointer'
                }}
                points="144.1,168.8 152,172.4 152.7,174.9 146.8,180 146.8,180 143.9,174.8 144.8,171.4 144.1,170.1"
                onClick={() => toggleIsOpen("영등포구")}
            />
            <polygon
                id="금천구"
                className="st0"
                style={{
                    fill: getFillStyle("금천구"),
                    cursor: 'pointer'
                }}
                points="143.2,179.9 146.3,180.9 149.9,185.4 146.2,187.2"
                onClick={() => toggleIsOpen("금천구")}
            />
            <polygon
                id="구로구"
                className="st0"
                style={{
                    fill: getFillStyle("구로구"),
                    cursor: 'pointer'
                }}
                points="143.9,174.8 146.8,180 146.3,180.9 143.2,179.9 138.1,181.1 135.8,181.5 137.3,176.2"
                onClick={() => toggleIsOpen("구로구")}
            />
            <polygon
                id="강서구"
                className="st0"
                style={{
                    fill: getFillStyle("강서구"),
                    cursor: 'pointer'
                }}
                points="134.4,161.1 140.7,166.4 144.1,168.8 144.1,170.1 139,173.4 136.8,171.2 129.8,169 133.3,164.8"
                onClick={() => toggleIsOpen("강서구")}
            />
            <polygon
                id="양천구"
                className="st0"
                style={{
                    fill: getFillStyle("양천구"),
                    cursor: 'pointer'
                }}
                points="136.8,171.2 139,173.4 144.1,170.1 144.8,171.4 144.8,171.4 143.9,174.8 137.3,176.2"
                onClick={() => toggleIsOpen("양천구")}
            />
            <polygon
                id="마포구"
                className="st0"
                style={{
                    fill: getFillStyle("마포구"),
                    cursor: 'pointer'
                }}
                points="144.3,163.4 146.8,165.7 154.2,168.4 154.2,169.6 152,172.4 144.1,168.8 140.7,166.4"
                onClick={() => toggleIsOpen("마포구")}
            />
            <polygon
                id="서대문구"
                className="st0"
                style={{
                    fill: getFillStyle("서대문구"),
                    cursor: 'pointer'
                }}
                points="152.8,160.4 154.8,167.4 154.2,168.4 146.8,165.7"
                onClick={() => toggleIsOpen("서대문구")}
            />
            <polygon
                id="은평구"
                className="st0"
                style={{
                    fill: getFillStyle("은평구"),
                    cursor: 'pointer'
                }}
                points="144.3,163.4 146.8,162.7 147.2,154.3 152.5,152.8 153.8,157.4 152.8,160.4 146.8,165.7"
                onClick={() => toggleIsOpen("은평구")}
            />
            <polygon
                id="노원구"
                className="st0"
                style={{
                    fill: getFillStyle("노원구"),
                    cursor: 'pointer'
                }}
                points="172.8,155.5 172.1,158.9 167.7,159.7 165.2,158.3 164.3,157.3 165.5,148.7 169.1,147.1"
                onClick={() => toggleIsOpen("노원구")}
            />
            <polygon
                id="도봉구"
                className="st0"
                style={{
                    fill: getFillStyle("도봉구"),
                    cursor: 'pointer'
                }}
                points="164.3,157.3 160.1,148.9 161,146.2 165.5,148.7"
                onClick={() => toggleIsOpen("도봉구")}
            />
            <polygon
                id="강북구"
                className="st0"
                style={{
                    fill: getFillStyle("강북구"),
                    cursor: 'pointer'
                }}
                points="158.1,149.6 160.1,148.9 164.3,157.3 165.2,158.3 162.7,160.7 157.3,156.5 157.1,156.4 157,156.4"
                onClick={() => toggleIsOpen("강북구")}
            />
            <polygon
                id="성북구"
                className="st0"
                style={{
                    fill: getFillStyle("성북구"),
                    cursor: 'pointer'
                }}
                points="161.8,165.5 156.1,162.4 155.9,157.1 155.9,157.1 157.3,156.5 162.7,160.7 165.2,158.3 167.7,159.7 167.8,160.9 161.8,165.5 161.8,165.5"
                onClick={() => toggleIsOpen("성북구")}
            />
            <polygon
                id="중랑구"
                className="st0"
                style={{
                    fill: getFillStyle("중랑구"),
                    cursor: 'pointer'
                }}
                points="172.1,158.9 171.5,166.2 168.7,166.5 168.7,166.5 168.6,166.3 168.6,166.3 167.8,160.9 167.7,159.7"
                onClick={() => toggleIsOpen("중랑구")}
            />
            <polygon
                id="동대문구"
                className="st0"
                style={{
                    fill: getFillStyle("동대문구"),
                    cursor: 'pointer'
                }}
                points="167.8,160.9 168.6,166.3 168.7,166.5 168.4,167.3 168.4,167.3 168,168.4 161.9,166.5 161.9,166.5 161.8,165.5"
                onClick={() => toggleIsOpen("동대문구")}
            />
            <polygon
                id="광진구"
                className="st0"
                style={{
                    fill: getFillStyle("광진구"),
                    cursor: 'pointer'
                }}
                points="171.5,166.2 173.3,168.9 172.5,171 171.3,172.4 171.3,172.4 167.3,173.9 165.9,173.3 168,168.4 168.4,167.3 168.7,166.5"
                onClick={() => toggleIsOpen("광진구")}
            />
            <polygon
                id="용산구"
                className="st0"
                style={{
                    fill: getFillStyle("용산구"),
                    cursor: 'pointer'
                }}
                points="154.2,169.6 160,170.8 161.1,172.4 160,173.7 156.5,176.7 152.7,174.9 152,172.4"
                onClick={() => toggleIsOpen("용산구")}
            />
            <polygon
                id="서울특별시_중구"
                className="st0"
                style={{
                    fill: getFillStyle("서울특별시_중구"),
                    cursor: 'pointer'
                }}
                points="154.8,167.4 161.9,166.5 161.9,166.5 160,170.8 154.2,169.6 154.2,168.4"
                onClick={() => toggleIsOpen("서울특별시_중구")}
            />
            <polygon
                id="종로구"
                className="st0"
                style={{
                    fill: getFillStyle("종로구"),
                    cursor: 'pointer'
                }}
                points="155.9,157.1 156.1,162.4 161.8,165.5 161.8,165.5 161.9,166.5 154.8,167.4 152.8,160.4 153.8,157.4"
                onClick={() => toggleIsOpen("종로구")}
            />
            <polygon
                id="성동구"
                className="st0"
                style={{
                    fill: getFillStyle("성동구"),
                    cursor: 'pointer'
                }}
                points="161.9,166.5 168,168.4 165.9,173.3 161.1,172.4 160,170.8"
                onClick={() => toggleIsOpen("성동구")}
            />
        </g>
    );
}; 