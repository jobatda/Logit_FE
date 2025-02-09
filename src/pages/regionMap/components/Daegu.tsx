import {RegionProps} from "../util/type.ts";

export const Daegu: React.FC<React.SVGProps<SVGGElement>> = ({toggleIsOpen, selectedImages, getFillStyle}: RegionProps) => {

    return (
        <g id="대구광역시" >
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
            <path
                id="달성군"
                className="st0"
                style={{
                    fill:getFillStyle("달성군"),
                    cursor: 'pointer'
                }}
                d="M346.4,440.7l9.2,6.6l4.1-5.5l0.5-0.2l3.6,0.5l0,0l7.9,2.4l1.5,7.2l0,0l-8.8,6.6l-1.5-5.6l-10.7,4.1l0.3,4.6l-2.9,6.8l-17.1,4.6l3.8-4.4l-6.4-10.1l10.2-0.2l-6.3-8.6l4.7-7.7L346.4,440.7z M335.6,427.6l7-6.8l2.8,1.3l-0.8,5.7l4.5,1l2.7,0.5l-0.8,2.9l-4.8,0.3l-1.1,5.4l-11-2.7L335.6,427.6z"
                onClick={() => toggleIsOpen("달성군")}
            />
            <polygon
                id="달서구"
                className="st0"
                style={{
                    fill:getFillStyle("달서구"),
                    cursor: 'pointer'
                }}
                points="350.9,432.2 357.9,433.2 358,433.6 355.6,437.6 359.7,441.8 355.6,447.2 346.4,440.7 345,437.9 346.1,432.4"
                onClick={() => toggleIsOpen("달서구")}
            />
            <polygon
                id="수성구"
                className="st0"
                style={{
                    fill:getFillStyle("수성구"),
                    cursor: 'pointer'
                }}
                points="360.2,441.5 362.3,434.3 363.1,432.3 377.2,433.7 376.3,441.7 371.8,444.4 363.9,442"
                onClick={() => toggleIsOpen("수성구")}
            />
            <polygon
                id="북구"
                className="st0"
                style={{
                    fill:getFillStyle("북구"),
                    cursor: 'pointer'
                }}
                points="361.4,413.5 365.2,424 362.5,431.2 358.6,430.6 351.7,429.3 349,428.8 351.2,424.8 352.1,423.7 352.2,423.1 352.6,422.3 351.9,414.8 355.9,415.9 356,415.9"
                onClick={() => toggleIsOpen("북구")}
            />
            <polygon
                id="남구"
                className="st0"
                style={{
                    fill:getFillStyle("남구"),
                    cursor: 'pointer'
                }}
                points="358,433.6 362.3,434.3 360.2,441.5 359.7,441.8 355.6,437.6"
                onClick={() => toggleIsOpen("남구")}
            />
            <polygon
                id="서구"
                className="st0"
                style={{
                    fill:getFillStyle("서구"),
                    cursor: 'pointer'
                }}
                points="351.7,429.3 358.6,430.6 357.9,433.2 350.9,432.2"
                onClick={() => toggleIsOpen("서구")}
            />
            <polygon
                id="동구"
                className="st0"
                style={{
                    fill:getFillStyle("동구"),
                    cursor: 'pointer'
                }}
                points="373.1,409 378.1,412.5 377.7,413.7 381.9,428.9 380.4,433.7 377.2,433.7 363.1,432.3 362.5,431.2 365.2,424 361.4,413.5 366.1,410 370.3,409.5"
                onClick={() => toggleIsOpen("동구")}
            />
            <polygon
                id="중구"
                className="st0"
                style={{
                    fill:getFillStyle("중구"),
                    cursor: 'pointer'
                }}
                points="358.6,430.6 362.5,431.2 363.1,432.3 362.3,434.3 358,433.6 357.9,433.2"
                onClick={() => toggleIsOpen("중구")}
            />
        </g>
    );
}; 