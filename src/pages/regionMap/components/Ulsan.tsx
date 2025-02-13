import {RegionProps} from "../util/type.ts";

export const Ulsan = ({toggleIsOpen, selectedImages, getFillStyle}: RegionProps) => {

    return (
        <g id="울산광역시">
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
                id="울주군"
                className="st0"
                style={{
                    fill: getFillStyle("울주군"),
                    cursor: 'pointer'
                }}
                d="M457.9,493.5l-0.5,0.4l0.2,1.3l1.5,4.4l0,0l-2,7.9l2.6,2.8l-7.3,4.7l-5.1-8.8l-8.2,0l2.2-3.2l-2.8-4.6l-7-1.2L420.1,484l-7.8,0.8l0.3-2.6l-3.3-2.3l6.1-3.8l-2.2-5.6l5.6-4.8l4.4,1.1l-0.6-7.8l8.7-5.1l14.2,3.5l-0.1,6.3l5.3,2.6l-0.6,7.9l0.6,2.7l-5.4-2.1l1.7,5.2l-3.7,3.3L457.9,493.5z"
                onClick={() => toggleIsOpen("울주군")}
            />
            <path
                id="울산광역시_북구"
                className="st0"
                style={{
                    fill: getFillStyle("울산광역시_북구"),
                    cursor: 'pointer'
                }}
                d="M450.5,466.1l7.2-5.7l12.3,4.2l0.5,12.4l-4.9,2.1l-2.1,5.4l-1.6-0.9l-4.7-2.8l-0.1-7.1l-7.4,0.4L450.5,466.1z"
                onClick={() => toggleIsOpen("울산광역시_북구")}
            />
            <path
                id="울산광역시_동구"
                className="st0"
                style={{
                    fill: getFillStyle("울산광역시_동구"),
                    cursor: 'pointer'
                }}
                d="M470.6,477l-0.7,12.5l-4.8,3.1l-0.3-1.1l0-1.2l0.1-0.3l-1.1-2.6l-0.5-2.2l0.3-0.9l2.1-5.4L470.6,477z"
                onClick={() => toggleIsOpen("울산광역시_동구")}
            />
            <path
                id="울산광역시_남구"
                className="st0"
                style={{
                    fill: getFillStyle("울산광역시_남구"),
                    cursor: 'pointer'
                }}
                d="M446.8,479.7l10.6,1l3.9,3.2l-2.6,0l3.5,1.9l0.5,1.8l-4.3-0.4l4.4,3l-4.1,4.4l-0.7-1.1L443.1,483L446.8,479.7z"
                onClick={() => toggleIsOpen("울산광역시_남구")}
            />
            <polygon
                id="울산광역시_중구"
                className="st0"
                style={{
                    fill: getFillStyle("울산광역시_중구"),
                    cursor: 'pointer'
                }}
                points="449.9,474 457.2,473.6 457.4,480.7 446.8,479.7 445.1,474.5 450.5,476.6"
                onClick={() => toggleIsOpen("울산광역시_중구")}
            />
        </g>
    );
}; 