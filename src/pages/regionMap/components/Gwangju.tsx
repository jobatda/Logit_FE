import {RegionProps} from "../util/type.ts";

export const Gwangju: React.FC<React.SVGProps<SVGGElement>> = ({toggleIsOpen, selectedImages, getFillStyle}: RegionProps) => {

    return (
        <g id="광주광역시">
            <defs>
                {Object.entries(selectedImages).map(([pathId, imageUrl]) => (
                    <pattern
                        key={pathId}
                        id={`pattern-${pathId}`}
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                    >
                        <image
                            href={imageUrl}
                            width="1"
                            height="1"
                            preserveAspectRatio="none"
                        />
                    </pattern>
                ))}
            </defs>
            <polygon
                id="광산구"
                className="st0"
                style={{
                    fill:getFillStyle("광산구"),
                    cursor: 'pointer'
                }}
                points="112.7,550.4 111.4,545.4 114.9,541.4 112.5,538.3 120.5,535.3 126.3,528 125.7,531.9 135.9,532.8 139.1,539.5 136.3,540.6 131.6,553.9 127.5,557.5 122.6,550.8"
                onClick={() => toggleIsOpen("광산구")}
            />
            <polygon
                id="북구"
                className="st0"
                style={{
                    fill:getFillStyle("북구"),
                    cursor: 'pointer'
                }}
                points="141.6,529.2 146.1,528.2 153,540.4 159.8,541.6 158.1,547.7 157.5,549.7 149.1,543.3 145.1,544.9 136.3,540.6 139.1,539.5 135.9,532.8"
                onClick={() => toggleIsOpen("북구")}
            />
            <polygon
                id="남구"
                className="st0"
                style={{
                    fill:getFillStyle("남구"),
                    cursor: 'pointer'
                }}
                points="131.6,553.9 142.6,550.3 142.3,545.7 145.4,545.3 146.6,554.3 143.1,556.4 133.5,560.3 125.6,559.4 127.5,557.5"
                onClick={() => toggleIsOpen("남구")}
            />
            <polygon
                id="서구"
                className="st0"
                style={{
                    fill:getFillStyle("서구"),
                    cursor: 'pointer'
                }}
                points="136.3,540.6 145.1,544.9 145.4,545.3 142.3,545.7 142.6,550.3 131.6,553.9"
                onClick={() => toggleIsOpen("서구")}
            />
            <polygon
                id="동구"
                className="st0"
                style={{
                    fill:getFillStyle("동구"),
                    cursor: 'pointer'
                }}
                points="145.1,544.9 149.1,543.3 157.5,549.7 150.7,557.2 146.6,554.3 145.4,545.3"
                onClick={() => toggleIsOpen("동구")}
            />
        </g>
    );
}; 