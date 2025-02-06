import * as React from "react";
import { useImageSelection } from "../hooks/useImageSelection";

export const Daejeon: React.FC<React.SVGProps<SVGGElement>> = (props) => {
    const { selectedImages, handlePathClick } = useImageSelection();

    return (
        <g id="대전광역시" {...props}>
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
                id="대덕구"
                className="st0"
                style={{
                    fill: selectedImages["대덕구"] ? `url(#pattern-대덕구)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="218.7,337.8 220.2,343.7 215.6,349.9 216.7,357.6 212.4,356.3 210.4,359.1 209,357.8 207.7,354.4 211.1,347.9 207.2,343.4 208.8,341.1 215,342.2"
                onClick={() => handlePathClick("대덕구")}
            />
            <polygon
                id="유성구"
                className="st0"
                style={{
                    fill: selectedImages["유성구"] ? `url(#pattern-유성구)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="207.7,354.4 202.3,357.2 194.8,371.1 189.1,366.9 190.8,361.2 193.7,347.6 194.3,347.4 198.1,346.6 200.2,345.7 200.7,345.5 200.8,345.3 201.1,345.1 201.8,342.7 201.8,342.7 202.7,342.4 202.9,342 203,341.4 203.1,341.4 203.5,339.6 203.6,335.7 208.1,335.6 209.1,337.6 209.1,337.8 208.8,338.9 208.7,339.8 208.8,341.1 207.2,343.4 211.1,347.9"
                onClick={() => handlePathClick("유성구")}
            />
            <polygon
                id="서구"
                className="st0"
                style={{
                    fill: selectedImages["서구"] ? `url(#pattern-서구)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="204.8,367.2 204.8,367.2 205,369.9 204,378.2 199.9,383.7 193.5,374 194.8,371.1 194.8,371.1 202.3,357.2 207.7,354.4 207.7,354.4 209,357.8"
                onClick={() => handlePathClick("서구")}
            />
            <polygon
                id="중구"
                className="st0"
                style={{
                    fill: selectedImages["중구"] ? `url(#pattern-중구)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="210.4,359.1 216,366.7 212.1,366.8 214,375.1 211.4,379.9 207,372.7 205,369.9 204.8,367.2 209,357.8"
                onClick={() => handlePathClick("중구")}
            />
            <polygon
                id="동구"
                className="st0"
                style={{
                    fill: selectedImages["동구"] ? `url(#pattern-동구)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="220.2,343.7 221.4,348.5 223,346.4 228.1,350.7 224.4,351.9 221.3,359.4 220.3,375.2 214.7,381.7 211.4,379.9 214,375.1 212.1,366.8 216,366.7 210.4,359.1 212.4,356.3 212.4,356.3 216.7,357.6 215.6,349.9"
                onClick={() => handlePathClick("동구")}
            />
        </g>
    );
}; 