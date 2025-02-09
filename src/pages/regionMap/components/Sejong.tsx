import {RegionProps} from "../util/type.ts";

export const Sejong: React.FC<React.SVGProps<SVGGElement>> =  ({toggleIsOpen, selectedImages, getFillStyle}: RegionProps) => {

    return (
        <g id="세종특별자치시" >
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
                id="세종특별자치시"
                className="st0"
                style={{
                    fill:getFillStyle("세종특별자치시"),
                    cursor: 'pointer'
                }}
                points="193.7,347.6 189.7,348.8 183.2,343.6 179.5,332.8 184.3,322 177.1,315.5 178.6,304.4 174.3,301.5 177.4,298.4 183.1,298.5 189.2,303.6 194.2,304.4 197,305.8 192.9,312.4 196,320.8 200.8,324.5 205.7,323.6 209.7,329.7 208.1,335.6 203.6,335.7 203.5,339.6 203.5,339.6 203.1,341.4 203,342 203,342 202.7,342.4 202.7,342.4 201.8,342.7 201.1,345 201.1,345 200.8,345.3 200.8,345.3 200.7,345.5 200.7,345.5 200.2,345.7 200.2,345.7 198.1,346.6 198.1,346.6 194.4,347.4 194.3,347.4"
                onClick={() => toggleIsOpen("세종특별자치시")}
            />
        </g>
    );
}; 