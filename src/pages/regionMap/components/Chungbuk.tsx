import * as React from "react";
import { useImageSelection } from "../hooks/useImageSelection";

export const Chungbuk: React.FC<React.SVGProps<SVGGElement>> = (props) => {
    const { selectedImages, handlePathClick } = useImageSelection();

    return (
        <g id="충청북도" {...props}>
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
                id="단양군"
                className="st0"
                style={{
                    fill: selectedImages["단양군"] ? `url(#pattern-단양군)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="321.2,234.7 331.9,230.8 337,239.5 346,235.7 351.3,241.3 361.9,241.6 365.6,245 363.2,248.9 360.1,247 355.3,249.9 353.5,255.6 339.4,266.8 337.3,274.8 340.5,279.2 337,284.9 330.4,286.5 314.4,275.7 313.6,266.1 317.4,261.8 312.1,251.5 311.2,247.2 317.6,242 317.7,237.6 321.9,240"
                onClick={() => handlePathClick("단양군")}
            />
            <polygon
                id="음성군"
                className="st0"
                style={{
                    fill: selectedImages["음성군"] ? `url(#pattern-음성군)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="237.3,231.8 245.7,234.1 249.1,238.1 244.2,243.8 240.1,258.7 244.6,258.3 248.3,262.5 252.9,262.6 255.6,266.4 257.4,265.8 257.3,274.7 245.6,274.8 243.6,279.4 238.5,280 235.7,282 235.9,278.2 231,278.9 231.9,275.7 222.6,266.9 214.7,264.1 214.6,254.4 219.6,247.6 223.5,246.9 228.3,249.6 231,244.3 234.4,245.3 233.1,242.3 238.1,240.4"
                onClick={() => handlePathClick("음성군")}
            />
            <polygon
                id="괴산군"
                className="st0"
                style={{
                    fill: selectedImages["괴산군"] ? `url(#pattern-괴산군)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="257.4,265.8 263,265.4 269.3,273.2 277.8,273.7 281.9,284.7 281.9,284.7 291.5,284.6 288.2,295.4 293,301.6 279.2,297 275.2,304.3 270.8,303.7 268.3,305.7 275.7,308.4 274.7,318.2 269,309.7 264.9,313.2 266.4,316.4 258.8,318.2 255.2,318 247.6,310.1 249.8,305.7 241.9,298.3 236.8,293.5 238.5,280 243.6,279.4 245.6,274.8 257.3,274.7"
                onClick={() => handlePathClick("괴산군")}
            />
            <path
                id="진천군"
                className="st0"
                style={{
                    fill: selectedImages["진천군"] ? `url(#pattern-진천군)` : 'currentColor',
                    cursor: 'pointer'
                }}
                d="M194.5,272.7l1-5.9l13.3-5.7l-2.1-2.5l7.8-4.3l0,0l0.1,9.7l7.9,2.8l9.3,8.8l-0.8,3.3l-0.6,5.1l-4.6,2l3.5,4.4l-8.1,0.1l-4.5,1.6l-1.7,3.2l-3.9-1.3l-2.3-6.4L197,278l0.5-3.2l-2.6-1.9L194.5,272.7z"
                onClick={() => handlePathClick("진천군")}
            />
            <polygon
                id="증평군"
                className="st0"
                style={{
                    fill: selectedImages["증평군"] ? `url(#pattern-증평군)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="229.3,290.4 225.9,286 230.5,284 231,278.9 235.9,278.2 235.7,282 238.5,280 236.8,293.5 241.9,298.3 240.2,302.7 236,301.8 229.7,291.4"
                onClick={() => handlePathClick("증평군")}
            />
            <polygon
                id="영동군"
                className="st0"
                style={{
                    fill: selectedImages["영동군"] ? `url(#pattern-영동군)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="233.6,383.5 240.5,385.5 240.3,377.3 264.9,362.9 265.8,369.6 269.6,369.5 272.4,365.2 279.5,372.9 285.8,369.7 290.3,372.8 288.6,375.2 291.9,380.8 281.8,381.3 284.3,388 279.7,401.3 269.1,408.8 265.5,406.2 254.4,408.5 246.8,406.9 245.2,402.6 241.6,406.5 238.7,401.7 238.7,401.7 232.5,391.4"
                onClick={() => handlePathClick("영동군")}
            />
            <polygon
                id="옥천군"
                className="st0"
                style={{
                    fill: selectedImages["옥천군"] ? `url(#pattern-옥천군)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="228.1,350.7 231.8,347 235.4,349.4 237.8,343.6 242.1,342.8 250.3,351.5 269.2,354.3 270.6,356.6 264.9,362.9 240.3,377.3 240.5,385.5 233.6,383.5 231.8,376.3 226.9,377.2 225.8,373.2 220.3,375.2 221.3,359.4 224.4,351.9 228.1,350.7"
                onClick={() => handlePathClick("옥천군")}
            />
            <polygon
                id="보은군"
                className="st0"
                style={{
                    fill: selectedImages["보은군"] ? `url(#pattern-보은군)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="255.2,318 258.8,318.2 272,329.8 268.6,336.4 269.2,354.3 250.3,351.5 242.1,342.8 237.8,343.6 235.4,349.4 231.8,347 228.1,350.7 223,346.4 231.1,335.8 229.4,329.5 235.4,326.2 239.4,317.7 242.5,319.5 250,318.2 252.2,320.9"
                onClick={() => handlePathClick("보은군")}
            />
            <polygon
                id="제천시"
                className="st0"
                style={{
                    fill: selectedImages["제천시"] ? `url(#pattern-제천시)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="274.6,230.1 274,220.6 280.2,215.8 286,217.5 288.9,226.3 297.3,223.7 299.4,219.1 304.3,222.4 309.7,216.8 317.3,223.2 323.3,220.7 325.4,221.9 321.1,228.8 316.9,230.6 321.2,234.7 321.9,240 317.7,237.6 317.6,242 311.2,247.2 312.1,251.5 317.4,261.8 313.6,266.1 314.4,275.7 313.8,279.9 310.6,279.7 311.3,285.1 309.4,284.8 309.4,284.8 296.3,281.9 288.5,278.6 293.1,269.4 289,263 294.8,263.5 294.5,243.9 289.5,237.8 284.3,240.5 279.8,231.5"
                onClick={() => handlePathClick("제천시")}
            />
            <polygon
                id="충주시"
                className="st0"
                style={{
                    fill: selectedImages["충주시"] ? `url(#pattern-충주시)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="251.8,222.6 257.4,233.6 267.8,230.3 271.1,232.5 272.3,229.8 274.6,230.1 279.8,231.5 284.3,240.5 289.5,237.8 294.5,243.9 294.8,263.5 289,263 293.1,269.4 288.5,278.6 296.3,281.9 300.8,282 295.8,287.6 291.5,284.6 281.9,284.7 277.8,273.7 269.3,273.2 263,265.4 257.4,265.8 255.6,266.4 252.9,262.6 248.3,262.5 244.6,258.3 240.1,258.7 244.2,243.8 249.1,238.1 245.7,234.1"
                onClick={() => handlePathClick("충주시")}
            />
            <polygon
                id="청주시_청원구"
                className="st0"
                style={{
                    fill: selectedImages["청주시_청원구"] ? `url(#pattern-청주시_청원구)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="229.7,291.4 236,301.8 236,301.8 219,311.6 218.9,311.4 210,301.4 198.3,299.1 198.3,299.1 203.3,293.4 209.1,296 211.1,294 211.1,294 215,295.3 216.7,292.1 216.7,292.1 221.2,290.5 221.2,290.5 229.3,290.4 229.7,291.4"
                onClick={() => handlePathClick("청주시_청원구")}
            />
            <polygon
                id="청주시_흥덕구"
                className="st0"
                style={{
                    fill: selectedImages["청주시_흥덕구"] ? `url(#pattern-청주시_흥덕구)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="198.3,299.1 210,301.4 218.9,311.4 205.7,323.6 200.8,324.5 196,320.8 192.9,312.4 197,305.8 194.2,304.4"
                onClick={() => handlePathClick("청주시_흥덕구")}
            />
            <polygon
                id="청주시_서원구"
                className="st0"
                style={{
                    fill: selectedImages["청주시_서원구"] ? `url(#pattern-청주시_서원구)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="219,311.6 221.2,320.2 217.2,322.8 219.3,327.2 214.5,326.5 214.3,332.2 218.7,337.8 215,342.2 208.8,341.1 208.7,341.3 208.5,339.8 208.4,338.9 209.1,337.8 208.1,335.6 208.1,335.6 209.7,329.7 205.7,323.6 218.9,311.4"
                onClick={() => handlePathClick("청주시_서원구")}
            />
            <polygon
                id="청주시_상당구"
                className="st0"
                style={{
                    fill: selectedImages["청주시_상당구"] ? `url(#pattern-청주시_상당구)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="218.7,337.8 214.3,332.2 214.5,326.5 219.3,327.2 217.2,322.8 221.2,320.2 219,311.6 236,301.8 240.2,302.7 241.9,298.3 249.8,305.7 247.6,310.1 255.2,318 252.2,320.9 250,318.2 242.5,319.5 242.5,319.5 239.4,317.7 235.4,326.2 229.4,329.5 231.1,335.8 223,346.4 221.4,348.5 220.2,343.7 218.7,337.8"
                onClick={() => handlePathClick("청주시_상당구")}
            />
        </g>
    );
}; 