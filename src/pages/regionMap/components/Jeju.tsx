import * as React from "react";
import { useImageSelection } from "../hooks/useImageSelection";

export const Jeju: React.FC<React.SVGProps<SVGGElement>> = (props) => {
    const { selectedImages, handlePathClick } = useImageSelection();

    return (
        <g id="제주특별자치도" {...props}>
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
                id="서귀포시"
                className="st0"
                style={{
                    fill: selectedImages["서귀포시"] ? `url(#pattern-서귀포시)` : 'currentColor',
                    cursor: 'pointer'
                }}
                d="M454.8,669.3l21.4-9.5l0.4,0.6l0.2,0l2.8,0.5l-0.6,3.2l1.7-3.6l1.2,3.3l-14.3,22.6l-8.1,0.8l-4.3,4.4l-11.2,0.7l-7.8,5.9l-10.3-0.9l-6.5,2.3l-1.8-2.5l-11.5,1.5l-5.7-1.6l-7.5,7l-13.2-13.7l3.1-2l6.9,3.7l0-2.4l6.6-4.4l6.1-4.1l8.4,0.1l4.3-0.6l0.4-1.4l5.8-0.3l5.2-0.4l7.4-1.8l0.1,0l1.6-0.4l12-5.3l3.6-1.8l0,0l3.4,0L454.8,669.3z"
                onClick={() => handlePathClick("서귀포시")}
            />
            <path
                id="제주시"
                className="st0"
                style={{
                    fill: selectedImages["제주시"] ? `url(#pattern-제주시)` : 'currentColor',
                    cursor: 'pointer'
                }}
                d="M483,653.3l1.7,5.3l-3-0.7l0.7-4.3L483,653.3z M379.8,690.2l-0.3-9.3l19.6-19.7l42.2-10l1.2-3.1l23.8-0.3l4.1,5.3l5.9,0.7l1.3,2.9l-1.6,3.1l-21.4,9.5l-0.1-0.1l-3.4,0l0,0l-3.6,1.8l-12,5.3l-1.6,0.4l-0.1,0l-7.4,1.8l-0.1,0l-5.1,0.4l0,0l-5.8,0.3l-0.4,1.4l-4.3,0.6l-8.4-0.1l-6.1,4.1l-6.6,4.4l0,2.4l-6.9-3.7L379.8,690.2z"
                onClick={() => handlePathClick("제주시")}
            />
        </g>
    );
};
