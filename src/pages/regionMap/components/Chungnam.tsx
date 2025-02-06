import * as React from "react";
import { useImageSelection } from "../hooks/useImageSelection";

export const Chungnam: React.FC<React.SVGProps<SVGGElement>> = (props) => {
    const { selectedImages, handlePathClick } = useImageSelection();

    return (
        <g id="충청남도" {...props}>
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
                id="태안군"
                className="st0"
                style={{
                    fill: selectedImages["태안군"] ? `url(#pattern-태안군)` : 'currentColor',
                    cursor: 'pointer'
                }}
                d="M56,275.5l-0.2-2.9l8.5-4l-4.1,4.6l6.8,1.3l4.2-15.9l0.4,0.8l-0.2,1l0.1,3.2l-0.9,4.3l3.8,4.4l-0.1,0.7l-2.8,3.1l-0.3,1.2l-0.2,0.2l1.7,3.1l-0.2,0.7l-4.3,2.3l1.4,3.2l1.9-2.7l3.5,0l2.8,4.1l-1.8,6l0,0l0,6.1l0,0l1,14.4l-1.2,0.4l-1.3,0.9l-2,2.6l-2.9-1.2l0.2-9.2l-3.9-2l1.9-9.4l-10.7,8.8l-5.1-0.3l-1-4l9.6-2.2l-4.8-5.6l-5.7-0.2l1.3,3.4l-3.9,3.7l-0.9-10.1l4.3-2.9l0.5-8.5l2.7,0.8l0,4.5l3.4,4.5l-2.6-7.7L56,275.5z M74.8,316.7l2.6-1l1.8,4.6l0.1,0.7l0.5,4.6l-0.4,1.7l5,11.8l2.1,6.9l-0.9,3.1l-0.1,0.1l-0.8-0.1l-3.9-3.7l-0.7,2.1l-1.7-0.4l-1-0.6l0.2-4l-3.8-0.3l-2.2-20.2l0.2-2.3l1,0.5l0-1.6l1.4-1.7L74.8,316.7z M72.8,320.4L72.8,320.4L72.8,320.4L72.8,320.4L72.8,320.4z"
                onClick={() => handlePathClick("태안군")}
            />
            <polygon
                id="예산군"
                className="st0"
                style={{
                    fill: selectedImages["예산군"] ? `url(#pattern-예산군)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="114.7,290.8 120.5,286.6 129.6,294.9 137.6,289.2 141.5,298.1 154.1,306 145.4,324.7 138.8,323.1 136,329.5 130.4,328.9 129.5,328.5 125,326.7 129.4,319.2 126.1,307.2 111.3,310.4 110.7,316.7 105.9,315.2 106.4,308.1 112.1,293.4 114.6,294.6"
                onClick={() => handlePathClick("예산군")}
            />
            <path
                id="홍성군"
                className="st0"
                style={{
                    fill: selectedImages["홍성군"] ? `url(#pattern-홍성군)` : 'currentColor',
                    cursor: 'pointer'
                }}
                d="M89.7,318.8l-0.4-4.9l17.2-5.7l-0.5,7.1l4.7,1.5l0.7-6.3l14.8-3.2l3.3,12l-4.5,7.5l4.5,1.9l-4.7,9.7l-8.2,1.6l-7.2-3.7l-0.5,0.3l-0.1,0.3l0,0l-1,0.3l-1.2-4.3l-4-0.3l-0.3-2.5l-0.4,2.8l-0.1,0l-1.1-0.2l-3.1-2.5l-2-1.1l-0.2-0.3l-2.7,2.7l-2.5-5.5l0.2-0.4L89.7,318.8z"
                onClick={() => handlePathClick("홍성군")}
            />
            <polygon
                id="청양군"
                className="st0"
                style={{
                    fill: selectedImages["청양군"] ? `url(#pattern-청양군)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="116.6,339.8 124.8,338.2 129.5,328.5 130.4,328.9 136,329.5 138.8,323.1 145.4,324.7 144.6,337.3 147.4,341 154.8,339.3 161.6,349.2 155.1,359.9 148.7,363.1 141.9,361.7 137,355.2 138.8,351.7 131.5,357.1 123.2,353.4"
                onClick={() => handlePathClick("청양군")}
            />
            <path
                id="서천군"
                className="st0"
                style={{
                    fill: selectedImages["서천군"] ? `url(#pattern-서천군)` : 'currentColor',
                    cursor: 'pointer'
                }}
                d="M104.6,384.1l11,0.4l3.2-2.2l12.8,1.6l0,6.9l5.8,3.1l-0.4,3.1l0,0l4.3,4l-0.8,1.7l-14.9,5.4L123,412l-0.1,0l-0.8-0.1l-7.3-0.9l0.7-4l-6.2-7.3l3.3-2.5l-4.1-0.5l-5.4-6.9l-7.9-1.7l-1.7,2.7l3.9-8.2L104.6,384.1z"
                onClick={() => handlePathClick("서천군")}
            />
            <polygon
                id="부여군"
                className="st0"
                style={{
                    fill: selectedImages["부여군"] ? `url(#pattern-부여군)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="118.8,382.3 124.1,372 119.2,370 117.3,360.8 123.2,353.4 131.5,357.1 138.8,351.7 137,355.2 141.9,361.7 148.7,363.1 155.1,359.9 157,365.5 166.2,369 155.8,380.5 158.6,388.8 152.3,387.8 142.8,392.1 141.4,401 137.1,397 137.1,397 137.4,393.8 131.6,390.7 131.6,383.9"
                onClick={() => handlePathClick("부여군")}
            />
            <polygon
                id="금산군"
                className="st0"
                style={{
                    fill: selectedImages["금산군"] ? `url(#pattern-금산군)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="205,369.9 207,372.7 211.4,379.9 214.7,381.7 220.3,375.2 225.8,373.2 226.9,377.2 231.8,376.3 233.6,383.5 232.5,391.4 238.7,401.7 236.3,406.3 238.9,407.4 235.3,408.5 235.7,412.3 225.2,406.1 224.3,414.8 215.5,414.8 212.9,407.8 208.6,411.1 205.5,408.9 202.6,394.7 198.7,392 199.9,383.7 204,378.2"
                onClick={() => handlePathClick("금산군")}
            />
            <path
                id="당진시"
                className="st0"
                style={{
                    fill: selectedImages["당진시"] ? `url(#pattern-당진시)` : 'currentColor',
                    cursor: 'pointer'
                }}
                d="M106,281.5L106,281.5l-6.9,1.2l-2.4-7l-4.4-1.7l-1.1-19l0-0.1l4.5-9.6l16.1,9.8l11.8,2l7.2,3.9l4.4,8.9l-0.1,0.1l3.7,4l-0.2,1l-0.1,0.7l-0.3,1.9l-0.1,0.7l-0.1,0.6l2.5,9.2l-3,1.2l-8,5.7l-9-8.3l-5.8,4.2L106,281.5z"
                onClick={() => handlePathClick("당진시")}
            />
            <polygon
                id="계룡시"
                className="st0"
                style={{
                    fill: selectedImages["계룡시"] ? `url(#pattern-계룡시)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="193.5,374 189.1,376.2 185.9,371.4 183.4,373.1 182.8,360.1 184.2,357.9 190.8,361.2 189.1,366.9 194.8,371.1"
                onClick={() => handlePathClick("계룡시")}
            />
            <polygon
                id="논산시"
                className="st0"
                style={{
                    fill: selectedImages["논산시"] ? `url(#pattern-논산시)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="166.2,369 171.4,359.1 175.8,364.7 182.8,360.1 183.4,373.1 185.9,371.4 189.1,376.2 193.5,374 199.9,383.7 198.7,392 189.7,394.8 189.3,399.4 183.9,396.7 175.5,398.6 174.4,402.1 165.5,398.4 163.5,389.5 158.6,388.8 155.8,380.5"
                onClick={() => handlePathClick("논산시")}
            />
            <path
                id="서산시"
                className="st0"
                style={{
                    fill: selectedImages["서산시"] ? `url(#pattern-서산시)` : 'currentColor',
                    cursor: 'pointer'
                }}
                d="M85.9,252.2l0.6,0.7l4.7,1.9l0,0.1l0.7,1.3l0.3,17.7l4.4,1.7l2.4,7l6.9-1.2l8.8,9.3l-0.1,3.8l-2.5-1.2l-5.7,14.7L84.7,317l-5.6-2.3l-3.4-14.3l0-6.1l1.8-6l-2.8-4.1l-1.9-3.8l-0.2-0.6l0.9-2.2l2.3-0.9l2.7,5.2l0-7.2l3.9-1.9l4.9-2l-3.2-1.3l1.5-4.6l-8-0.6l-2.9-3.3l7.1-1l-7.8-4.6l3.7-1.9L85.9,252.2z"
                onClick={() => handlePathClick("서산시")}
            />
            <polygon
                id="아산시"
                className="st0"
                style={{
                    fill: selectedImages["아산시"] ? `url(#pattern-아산시)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="152.9,268.2 167.7,265.5 170.2,269.6 172.6,289.3 168.2,301.3 159.4,309.7 155.4,310.1 154.1,306 141.5,298.1 137.6,289.2 140.6,288 138.1,278.8 138.2,278.2 138.7,274.9 138.9,273.9 141.4,274.5 142,274.1 143.6,273.5 147.1,271.2 150.8,268.8"
                onClick={() => handlePathClick("아산시")}
            />
            <path
                id="보령시"
                className="st0"
                style={{
                    fill: selectedImages["보령시"] ? `url(#pattern-보령시)` : 'currentColor',
                    cursor: 'pointer'
                }}
                d="M87,353l2.5,3.1l-0.1,0.1l-3.2-1.1l-6.1-2.2l0.2-0.5l1.4-0.3l3-0.4l1.8,0L87,353z M96.2,363l-0.9-2.9l1.4-0.2l9.2-2l-10.1-6.7l-3.6,0.4l2.1-6.4l4.6-2.3l-4.2,1.2l-1.8-12.8l2.7-2.2l2.2,1l2.9,2.4l0.4,0l1,0.2l0.7-0.4l4,0.3l1.1,4.3l0.2,0.6l1-0.9l0.4-0.6l7.2,3.7l6.6,13.6l-5.9,7.3l1.9,9.2l5,2l-5.4,10.3l-3.2,2.2l-11-0.4l-6.4-2.4l0.2-7.3l2.3-4.1L96.2,363z M95.3,359.8L95.3,359.8l0.8-0.1L95.3,359.8z"
                onClick={() => handlePathClick("보령시")}
            />
            <polygon
                id="공주시"
                className="st0"
                style={{
                    fill: selectedImages["공주시"] ? `url(#pattern-공주시)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="154.1,306 155.4,310.1 159.4,309.7 168.4,312 172.2,309.3 177.1,315.5 184.3,322 179.5,332.8 183.2,343.6 189.7,348.8 193.7,347.6 190.8,361.2 184.2,357.9 182.8,360.1 175.8,364.7 171.4,359.1 166.2,369 157,365.5 155.1,359.9 161.6,349.2 154.8,339.3 147.4,341 144.6,337.3 145.4,324.7"
                onClick={() => handlePathClick("공주시")}
            />
            <polygon
                id="천안시_서북구"
                className="st0"
                style={{
                    fill: selectedImages["천안시_서북구"] ? `url(#pattern-천안시_서북구)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="167.7,265.5 173.5,260.6 183.8,263.6 184.8,266.9 192.9,269.6 194.5,272.7 194.9,272.9 186.4,279.7 179.9,280.1 172.6,289.3 170.2,269.6"
                onClick={() => handlePathClick("천안시_서북구")}
            />
            <polygon
                id="천안시_동남구"
                className="st0"
                style={{
                    fill: selectedImages["천안시_동남구"] ? `url(#pattern-천안시_동남구)` : 'currentColor',
                    cursor: 'pointer'
                }}
                points="194.9,272.9 197.5,274.8 197,278 208.8,287.5 211.1,294 209.1,296 203.3,293.4 198.3,299.1 194.2,304.4 189.2,303.6 183.1,298.5 177.4,298.4 174.3,301.5 178.6,304.4 177.1,315.5 172.2,309.3 168.4,312 159.4,309.7 168.2,301.3 172.6,289.3 179.9,280.1 186.4,279.7"
                onClick={() => handlePathClick("천안시_동남구")}
            />
        </g>
    );
}; 