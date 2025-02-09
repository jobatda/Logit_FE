import {RegionProps} from "../util/type.ts";

export const Busan: React.FC<React.SVGProps<SVGGElement>> = ({toggleIsOpen, selectedImages, getFillStyle}: RegionProps) => {

    return (
        <g id="부산광역시">
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
                id="기장군"
                className="st0"
                style={{
                    fill:getFillStyle("기장군"),
                    cursor: 'pointer'
                }}
                d="M452.4,515.1l-5.5,2.4l-6.4,21l-6.3-3.7l-2.1-6.9l-4.8-8.3l3.2-7.4l-2.1-2.7l7.7,2.6l2.9-5.7l8.2,0L452.4,515.1z"
                onClick={() => toggleIsOpen("기장군")}
            />
            <polygon
                id="사상구"
                className="st0"
                style={{
                    fill:getFillStyle("사상구"),
                    cursor: 'pointer'
                }}
                points="412.1,535.9 416.4,538 415.4,545.8 413.9,548.1 408.7,549 408.7,546.1"
                onClick={() => toggleIsOpen("사상구")}
            />
            <polygon
                id="수영구"
                className="st0"
                style={{
                    fill:getFillStyle("수영구"),
                    cursor: 'pointer'
                }}
                points="428.6,538 430.1,541.2 430,541.3 430.7,542.1 429,545.2 426.1,541.9 428.5,538.4"
                onClick={() => toggleIsOpen("수영구")}
            />
            <polygon
                id="연제구"
                className="st0"
                style={{
                    fill:getFillStyle("연제구"),
                    cursor: 'pointer'
                }}
                points="419.9,536.8 428.5,538.4 426.1,541.9 424.4,542.5"
                onClick={() => toggleIsOpen("연제구")}
            />
            <path
                id="강서구"
                className="st0"
                style={{
                    fill:getFillStyle("강서구"),
                    cursor: 'pointer'
                }}
                d="M391.9,553.6l0.9,1.2l2,6.3l-2.7,8.3l-4.1-10.1l3.6-2.5l-1.9-1.2L391.9,553.6z M404.9,552.6l0.2,0.1l0,0.3l-2.4,2.2l-9.5-0.5l-1-1.1l1.7-3.6l-6.4-6.8l8.9-1.8l1.6,2.7l1.1-9.9l14.2-3.7l-1.1,5.4l0,0l-3.5,10.2l0,0l-3.4,4.7L404.9,552.6z"
                onClick={() => toggleIsOpen("강서구")}
            />
            <polygon
                id="금정구"
                className="st0"
                style={{
                    fill:getFillStyle("금정구"),
                    cursor: 'pointer'
                }}
                points="432.1,527.8 427.8,534.3 421.6,531.9 419.3,531.2 419.6,524.4 427.4,519.5"
                onClick={() => toggleIsOpen("금정구")}
            />
            <path
                id="사하구"
                className="st0"
                style={{
                    fill:getFillStyle("사하구"),
                    cursor: 'pointer'
                }}
                d="M407.7,554.9l-2.4-1.9l0-0.4l0.3-1.6l0-0.1l2.9-4.9l0,3l5.2-0.9l1.1,11.6l-4.4-1.2l-0.1,3l-2-3.3L407.7,554.9z"
                onClick={() => toggleIsOpen("사하구")}
            />
            <path
                id="해운대구"
                className="st0"
                style={{
                    fill:getFillStyle("해운대구"),
                    cursor: 'pointer'
                }}
                d="M427.8,534.3l4.3-6.5l2.1,6.9l6.3,3.7l-1.8,3.3l-6.6,1.1l-0.9-1l-1.1-0.6l-1.5-3.2L427.8,534.3z"
                onClick={() => toggleIsOpen("해운대구")}
            />
            <polygon
                id="북구"
                className="st0"
                style={{
                    fill:getFillStyle("북구"),
                    cursor: 'pointer'
                }}
                points="412.1,535.9 413.2,530.5 415.3,524.5 419.6,524.4 419.3,531.2 421.6,531.9 419.4,536.1 416.4,538"
                onClick={() => toggleIsOpen("북구")}
            />
            <path
                id="남구"
                className="st0"
                style={{
                    fill:getFillStyle("남구"),
                    cursor: 'pointer'
                }}
                d="M426.3,552.5l-0.4-2.4l-3.4-0.3l-0.1-2.6l-0.3-2.1l2.3-2.7l1.6-0.5l3.4,4l0.4,5.6L426.3,552.5z"
                onClick={() => toggleIsOpen("남구")}
            />
            <polygon
                id="동래구"
                className="st0"
                style={{
                    fill:getFillStyle("동래구"),
                    cursor: 'pointer'
                }}
                points="421.6,531.9 427.8,534.3 428.6,538 428.5,538.4 419.9,536.8 419.4,536.1"
                onClick={() => toggleIsOpen("동래구")}
            />
            <polygon
                id="부산진구"
                className="st0"
                style={{
                    fill:getFillStyle("부산진구"),
                    cursor: 'pointer'
                }}
                points="416.4,538 419.4,536.1 419.9,536.8 424.4,542.5 422.1,545.1 417.2,546.1 415.4,545.8"
                onClick={() => toggleIsOpen("부산진구")}
            />
            <path
                id="영도구"
                className="st0"
                style={{
                    fill:getFillStyle("영도구"),
                    cursor: 'pointer'
                }}
                d="M424,553.6l1.9,5.5l-7.7-5.1l-0.2-1.2l0.2-0.3l0.9-0.2l0.1,0l0.5-0.2L424,553.6L424,553.6z"
                onClick={() => toggleIsOpen("영도구")}
            />
            <polygon
                id="동구"
                className="st0"
                style={{
                    fill:getFillStyle("동구"),
                    cursor: 'pointer'
                }}
                points="417.2,546.1 422.1,545.1 422.2,547.2 422.2,547.3 420.3,549.6 417.4,549.2"
                onClick={() => toggleIsOpen("동구")}
            />
            <path
                id="서구"
                className="st0"
                style={{
                    fill:getFillStyle("서구"),
                    cursor: 'pointer'
                }}
                d="M417,555.5l-0.2,2.3l-1.7,1.7l-1.3-11.3l1.6-2.2l1.7,0.2l0.3,3.2l0,3.9l0.5,0.7L417,555.5z"
                onClick={() => toggleIsOpen("서구")}
            />
            <polygon
                id="중구"
                className="st0"
                style={{
                    fill:getFillStyle("중구"),
                    cursor: 'pointer'
                }}
                points="417.4,552.5 418.6,552.2 420.3,549.6 417.4,549.2"
                onClick={() => toggleIsOpen("중구")}
            />
        </g>
    );
}; 