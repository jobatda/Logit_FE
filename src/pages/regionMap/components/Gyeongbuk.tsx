import * as React from "react";
import { useImageSelection } from "../hooks/useImageSelection";

export const Gyeongbuk: React.FC<React.SVGProps<SVGGElement>> = (props) => {
  const { selectedImages, handlePathClick } = useImageSelection();


  return (
    <g id="경상북도" {...props}>
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
        id="울진군"
        className="st0"
        style={{
          fill: selectedImages["울진군"]
            ? `url(#pattern-울진군)`
            : "currentColor",
          cursor: "pointer",
        }}
        d="M446.4,234.5l8.1-3.5l1.2,7.2l7.4,6.3l-2.5,4.6l1.1,21.6l7.9,24.1l-0.3,7.7l-5.8,6.8l-5.1-3.9l-3.6,2.9l-10.8-3.4l3.1-7.1l-3-4l5.2-5.7l-5.4-8.1l1.5-5l-2.8-1.9l-2.8,4l-4.4-0.5l-1.9-3.7l-4.5,0.4l0,0l-2.4-7.6l-7.3-5.2l1.5-3.1l1.7-7l6.7,0.7l3.1-3.5l6.6,0.4l-1.7-5.5L446.4,234.5z"
        onClick={() => handlePathClick("울진군")}
      />
      <polygon
        id="봉화군"
        className="st0"
        style={{
          fill: selectedImages["봉화군"]
            ? `url(#pattern-봉화군)`
            : "currentColor",
          cursor: "pointer",
        }}
        points="376.5,280.5 375.3,276 368.8,279.8 364.7,277.6 364.1,272.5 368.2,267.9 369.6,262.1 370.9,259.2 371.1,254.5 372.4,249.7 378.4,250.7 381.6,240.5 393.3,248 394,246.5 396.3,247.8 399.3,240.4 402.3,240 407.7,241.4 416.7,244.3 421.1,238.7 432.5,247.7 429.4,251.2 422.6,250.5 420.9,257.5 419.1,261.4 426.7,265.8 429.2,273.4 422.3,281.3 408,290.2 408.8,294.1 403.9,290.4 396.1,290.5 389.8,284.8 386.2,286.9 385.4,284.1 384.6,282.7 380.7,285.2 378.2,284.9 377.6,286.7 377.6,286.7 375.7,287.9 373.7,282.9"
        onClick={() => handlePathClick("봉화군")}
      />
      <polygon
        id="예천군"
        className="st0"
        style={{
          fill: selectedImages["예천군"]
            ? `url(#pattern-예천군)`
            : "currentColor",
          cursor: "pointer",
        }}
        points="340.5,279.2 344.6,281.3 343.9,290.4 353.5,291.5 358.6,302.1 360.4,309.6 350.4,313.5 351,317.7 347,317.5 346.5,322.6 338.4,330.5 331.7,333.3 330.4,329.1 327.4,329.9 324,340.9 317.4,337.5 318.1,328.3 321.6,321.6 317.1,316.5 322.9,312.2 323.1,309.4 325.9,311.6 328.4,310 324.5,305.9 326,297 330.6,294.5 330.4,286.5 330.4,286.5 337,284.9"
        onClick={() => handlePathClick("예천군")}
      />
      <polygon
        id="칠곡군"
        className="st0"
        style={{
          fill: selectedImages["칠곡군"]
            ? `url(#pattern-칠곡군)`
            : "currentColor",
          cursor: "pointer",
        }}
        points="321.7,398.3 326.6,397.7 330.5,402.5 336,397.5 344.3,400.5 347,392.1 356.1,394.4 357,402.6 364.8,399.6 363.6,407.7 366.1,410 361.4,413.5 356,415.9 351.9,414.8 352.6,422.3 352.6,422.4 352.2,423 352.2,423 352.1,423.7 352,423.7 351.3,424.8 351.2,424.8 349,428.8 344.6,427.8 345.4,422.1 342.5,420.8 335.6,427.6 335.1,421.1 329,419.1 321.5,405.2"
        onClick={() => handlePathClick("칠곡군")}
      />
      <polygon
        id="성주군"
        className="st0"
        style={{
          fill: selectedImages["성주군"]
            ? `url(#pattern-성주군)`
            : "currentColor",
          cursor: "pointer",
        }}
        points="294.7,437.3 295.9,432.2 291,422.2 296,424.6 296.9,419.3 304,417.4 306.2,406.6 313,403.5 321.5,405.2 329,419.1 335.1,421.1 335.6,427.6 334.1,435.2 331.6,444.2 320.4,439.1 316.9,446.5 311.6,440.9 306.5,440.9 305.8,447 296.4,438.7"
        onClick={() => handlePathClick("성주군")}
      />
      <polygon
        id="고령군"
        className="st0"
        style={{
          fill: selectedImages["고령군"]
            ? `url(#pattern-고령군)`
            : "currentColor",
          cursor: "pointer",
        }}
        points="334.1,435.2 345,437.9 345,437.9 346.4,440.7 338.5,441.7 333.8,449.5 340.1,458 329.8,458.3 336.3,468.4 332.5,472.8 331.6,472.4 330,467.6 324.1,465.9 314.3,468.5 305.6,466.3 305.9,463.2 311.1,461.6 305.8,447 306.5,440.9 311.6,440.9 316.9,446.5 320.4,439.1 331.6,444.2"
        onClick={() => handlePathClick("고령군")}
      />
      <polygon
        id="청도군"
        className="st0"
        style={{
          fill: selectedImages["청도군"]
            ? `url(#pattern-청도군)`
            : "currentColor",
          cursor: "pointer",
        }}
        points="414,435.1 409,452.1 412.9,458.8 417.3,458.6 418.6,465.5 413.1,470.4 410.5,472.2 405.2,468.2 397.5,468.2 393.1,475.4 387.6,475.6 385.4,479.1 372.9,474.9 360.8,476.7 353.6,470.6 352.6,461.3 352.3,456.7 363,452.5 364.6,458.2 373.3,451.6 382.5,458.1 385.6,451.4 393.3,451.7 398.9,448.1 400.4,450.8 405.2,444.3 405.2,444.2 408.4,436.8 408.4,436.8"
        onClick={() => handlePathClick("청도군")}
      />
      <path
        id="영덕군"
        className="st0"
        style={{
          fill: selectedImages["영덕군"]
            ? `url(#pattern-영덕군)`
            : "currentColor",
          cursor: "pointer",
        }}
        d="M444.1,305l10.8,3.4l3.6-2.9l5.1,3.9l-1.7,7.6l5.8,13.3l-8.8,38l-9.1,0.2l-1-8.7l-5.8,0.5l-13.1-27.7l9.1,1.6l0.2-3.9l2.7,0.5l-1.6-3.6l1.3-4.6l-3.8-4l1.8-11.3L444.1,305z"
        onClick={() => handlePathClick("영덕군")}
      />
      <polygon
        id="영양군"
        className="st0"
        style={{
          fill: selectedImages["영양군"]
            ? `url(#pattern-영양군)`
            : "currentColor",
          cursor: "pointer",
        }}
        points="408.8,294.1 408,290.2 422.3,281.3 429.2,273.4 433.7,273 435.6,276.7 439.9,277.2 442.7,273.2 445.6,275.1 444.1,280.1 449.4,288.2 444.2,293.9 447.2,297.9 444.1,305 439.5,307 437.7,318.4 441.5,322.4 440.3,327 441.9,330.6 439.2,330.1 439,334 429.8,332.4 426.9,331.9 426.6,327.1 419,326 416.2,320.2 410.3,318.1"
        onClick={() => handlePathClick("영양군")}
      />
      <polygon
        id="청송군"
        className="st0"
        style={{
          fill: selectedImages["청송군"]
            ? `url(#pattern-청송군)`
            : "currentColor",
          cursor: "pointer",
        }}
        points="410.3,318.1 416.2,320.2 419,326 426.6,327.1 426.9,331.9 429.8,332.4 442.9,360.2 432.9,375.5 428,369.7 418.7,368.4 418.7,368.5 418,370.3 421.6,374.1 410.1,384.7 398.1,384.1 396.5,380.2 396.3,371.7 391.8,370.4 397.1,364.7 402.3,363.3 408.8,347.3 406.6,338.8 409.7,330.3 406.7,328.1"
        onClick={() => handlePathClick("청송군")}
      />
      <path
        id="의성군"
        className="st0"
        style={{
          fill: selectedImages["의성군"]
            ? `url(#pattern-의성군)`
            : "currentColor",
          cursor: "pointer",
        }}
        d="M324,340.9l3.5-11.1l3-0.8l1.3,4.2l6.7-2.8l3.2,4.6l4.8-4.2l7.4,4.2l7,13.3l12.9-6.8l0.5-4.7l4.7-1.9l10.6,5.6l2.6,10l3.6,2l1.6,12.2l-5.3,5.7l4.5,1.3l0.2,8.5l-5.9-2.5l-1.8-0.3l-3.3,4.2l-17.4-4.6l-2.6,2.2l-0.5-8.4l-5.3-2.5l-5.3,0.6l-4.1-3.9l-8.8-4.2l-5.2,6.3l-6.2-8.2l-3.4-1.4l-2.9,3l-3-2.5l6.4-9.2L324,340.9z"
        onClick={() => handlePathClick("의성군")}
      />
      <polygon
        id="군위군"
        className="st0"
        style={{
          fill: selectedImages["군위군"]
            ? `url(#pattern-군위군)`
            : "currentColor",
          cursor: "pointer",
        }}
        points="336.5,367 341.6,360.7 350.4,364.8 350.4,364.8 354.5,368.8 359.8,368.2 365.1,370.7 365.6,379.2 368.2,377 385.5,381.5 388.8,377.4 388.8,377.4 390.7,377.6 390.7,377.6 396.5,380.2 398.1,384.1 397.2,388.9 397.2,388.9 393.5,388.6 386.5,397.9 379.2,394.3 373.2,405.9 373.2,405.9 373.1,409 373.1,409 370.4,409.5 370.3,409.5 366.1,410 363.6,407.7 364.8,399.6 357,402.6 356.1,394.4 356.1,394.3 353.1,386.6 355.2,384 350.8,380.3 348.3,382.9 346,375.3 340.4,377.7 337.4,373.5 337.4,373.5 336.5,367"
        onClick={() => handlePathClick("군위군")}
      />
      <polygon
        id="경산시"
        className="st0"
        style={{
          fill: selectedImages["경산시"]
            ? `url(#pattern-경산시)`
            : "currentColor",
          cursor: "pointer",
        }}
        points="378.1,412.5 384.7,413.2 394,418.5 397.3,435.7 408.4,436.8 405.2,444.3 400.4,450.8 398.9,448.1 393.3,451.7 385.6,451.4 382.5,458.1 373.4,451.6 371.8,444.4 376.3,441.7 377.2,433.7 380.4,433.7 381.9,428.9 377.7,413.7 377.7,413.6"
        onClick={() => handlePathClick("경산시")}
      />
      <polygon
        id="문경시"
        className="st0"
        style={{
          fill: selectedImages["문경시"]
            ? `url(#pattern-문경시)`
            : "currentColor",
          cursor: "pointer",
        }}
        points="314.4,275.7 330.4,286.5 330.6,294.5 326,297 324.5,305.9 328.4,310 325.9,311.6 323.1,309.4 322.9,312.2 317.1,316.5 321.6,321.6 318.1,328.3 312.4,328.5 311.9,322.2 299.3,314.9 293.3,317.6 291.1,326.8 281.6,327.3 281.4,332.1 275.7,329.1 274.7,318.2 275.7,308.4 268.3,305.7 270.8,303.7 275.2,304.3 279.1,296.9 279.2,297 293,301.6 288.2,295.4 291.5,284.6 295.8,287.6 300.8,282 309.4,284.8 309.4,284.8 311.3,285.1 310.6,279.7 313.8,279.9"
        onClick={() => handlePathClick("문경시")}
      />
      <path
        id="상주시"
        className="st0"
        style={{
          fill: selectedImages["상주시"]
            ? `url(#pattern-상주시)`
            : "currentColor",
          cursor: "pointer",
        }}
        d="M258.8,318.2l7.5-1.8l-1.5-3.2l4.1-3.6l5.6,8.5l1,10.9l5.7,3l0.2-4.7l9.5-0.5l2.1-9.3l6.1-2.6l12.6,7.2l0.4,6.3l5.8-0.2l-0.7,9.2l6.5,3.4l3.3,7.7l-6.4,9.2l-4.4-2l-3,8.8l-9.4,1.3l-2.2,6l-7.5,2.5l-4-1.7l-4.5-3.1l-6.3,3.1l-7.1-7.6l-2.7,4.3l-3.8,0l-0.9-6.7l5.8-6.3l-1.4-2.3l-0.6-17.9l3.4-6.6L258.8,318.2z"
        onClick={() => handlePathClick("상주시")}
      />
      <polygon
        id="영천시"
        className="st0"
        style={{
          fill: selectedImages["영천시"]
            ? `url(#pattern-영천시)`
            : "currentColor",
          cursor: "pointer",
        }}
        points="373.1,409 373.2,405.9 379.2,394.3 386.5,397.9 393.5,388.6 397.2,388.9 398.1,384.1 410.1,384.7 417.1,386.5 420.5,393 424,391.7 423.5,395.8 430.9,402.1 428.8,405.3 430.1,409.1 425.9,409.8 429,422 426.7,423.7 420.2,420 415.4,425.5 414.1,435 414,435 408.4,436.7 397.3,435.7 394,418.5 384.7,413.2 378.1,412.5"
        onClick={() => handlePathClick("영천시")}
      />
      <polygon
        id="영주시"
        className="st0"
        style={{
          fill: selectedImages["영주시"]
            ? `url(#pattern-영주시)`
            : "currentColor",
          cursor: "pointer",
        }}
        points="365.6,245 372.8,248.9 372.4,249.7 371.1,254.5 371.1,254.4 370.9,259.2 370.9,259.2 369.6,262.1 369.6,262.1 368.2,267.9 368.2,267.9 364.1,272.5 364.7,277.5 368.8,279.8 375.3,276 376.6,280.5 376.5,280.5 373.7,282.9 375.7,287.9 377.6,286.7 377,302.3 359.7,299.7 358.6,302.1 353.5,291.5 343.9,290.4 344.6,281.3 340.5,279.2 337.3,274.8 339.4,266.8 353.5,255.6 355.3,249.9 360.1,247 363.2,248.9"
        onClick={() => handlePathClick("영주시")}
      />
      <polygon
        id="구미시"
        className="st0"
        style={{
          fill: selectedImages["구미시"]
            ? `url(#pattern-구미시)`
            : "currentColor",
          cursor: "pointer",
        }}
        points="301.9,372 304.1,366 313.5,364.7 316.5,355.9 320.8,357.9 323.9,360.4 326.8,357.4 330.2,358.8 336.5,367 337.4,373.5 340.4,377.7 346,375.3 348.3,382.9 350.8,380.3 355.2,384 353.1,386.6 356.1,394.3 347,392.1 344.3,400.5 336,397.5 330.5,402.5 326.6,397.7 321.7,398.3 319.5,395.7 322.1,386 319,381.5"
        onClick={() => handlePathClick("구미시")}
      />
      <polygon
        id="안동시"
        className="st0"
        style={{
          fill: selectedImages["안동시"]
            ? `url(#pattern-안동시)`
            : "currentColor",
          cursor: "pointer",
        }}
        points="385.3,284.1 386.2,286.9 389.8,284.7 389.8,284.7 396.1,290.4 397.4,290 403.9,290.4 403.9,290.4 408.8,294.1 410.3,318.1 406.7,328.1 409.7,330.3 406.6,338.8 408.8,347.3 402.3,363.3 397.1,364.7 395.5,352.5 391.9,350.5 389.3,340.6 378.7,335 374.1,336.9 373.6,341.5 360.7,348.3 353.7,335.1 346.4,330.9 341.6,335.1 338.4,330.5 346.5,322.6 347,317.5 351,317.7 350.4,313.5 360.4,309.6 358.6,302.1 359.7,299.7 377,302.3 377.6,286.6 378.2,284.9 378.2,284.9 380.7,285.2 380.7,285.2 384.6,282.8 384.6,282.7 385.4,284.1"
        onClick={() => handlePathClick("안동시")}
      />
      <polygon
        id="김천시"
        className="st0"
        style={{
          fill: selectedImages["김천시"]
            ? `url(#pattern-김천시)`
            : "currentColor",
          cursor: "pointer",
        }}
        points="301.9,372 319,381.5 322.1,386 319.5,395.7 321.7,398.3 321.5,405.2 313,403.5 306.2,406.6 304,417.4 296.9,419.3 296,424.6 291,422.2 295.9,432.2 294.7,437.3 286.4,439 282.5,434.4 275.4,434.9 274.7,429 271.3,430.1 270.2,426.5 273.5,420.3 269.1,408.8 279.7,401.3 284.3,388 281.8,381.3 291.9,380.8 288.6,375.2 290.3,372.8 294.3,374.5"
        onClick={() => handlePathClick("김천시")}
      />
      <path
        id="경주시"
        className="st0"
        style={{
          fill: selectedImages["경주시"]
            ? `url(#pattern-경주시)`
            : "currentColor",
          cursor: "pointer",
        }}
        d="M430.9,402.1l3.9,4.2l8.4-7.7l4.9,2l-1.1,5.6l11,25.2l6.1,1l2.2-4.2l3.9,5.8l6.7,1.2l-6.8,29.4l-12.3-4.2l-7.2,5.7l-5.3-2.6l0.1-6.3l-14.2-3.5l-8.7,5.1l0.6,7.8l-4.4-1.1l-1.3-7l-4.4,0.3l-4-6.7l5.1-17.1l1.3-9.5l4.8-5.5l6.5,3.7l2.3-1.7l-3.1-12.2l4.2-0.8l-1.3-3.8L430.9,402.1z"
        onClick={() => handlePathClick("경주시")}
      />
      <path
        id="포항시_북구"
        className="st0"
        style={{
          fill: selectedImages["포항시_북구"]
            ? `url(#pattern-포항시_북구)`
            : "currentColor",
          cursor: "pointer",
        }}
        d="M458.6,377.6L458.6,377.6L458.6,377.6L458.6,377.6L458.6,377.6z M462.1,385.2l0,4.6l5.5,2.6l-7.6,8.2l-3.6,7.3l-8.4-7.4l0,0l-4.9-2l-8.4,7.7l-3.9-4.2l-7.4-6.4l0.5-4l-3.5,1.3l-3.5-6.5l-7-1.8l11.5-10.6l-3.6-3.8l0.6-1.5l0.2-0.3l9.3,1.3l4.9,5.7l10-15.3l5.8-0.5l1,8.7l9.1-0.2l-0.2,9.4l0,0l0,0l1.6,3.5l0.5,0.1l1.2,3.6L462.1,385.2z"
        onClick={() => handlePathClick("포항시_북구")}
      />
      <path
        id="포항시_남구"
        className="st0"
        style={{
          fill: selectedImages["포항시_남구"]
            ? `url(#pattern-포항시_남구)`
            : "currentColor",
          cursor: "pointer",
        }}
        d="M477.7,402.2l0.7-1.4l4.1-5.4l3.4,11.5l-8,14.1l0.2,7.9l0,0l2.1,1.1l-3.2,5.1l-6.7-1.2l-3.9-5.8l-2.2,4.2l-6.1-1l-11-25.2l1.1-5.6l8.4,7.4l2.6-5.5l1.8,3.2l5.8-0.4l-3.8,1.5l5.6,4.7l2.7-2.7L477.7,402.2z"
        onClick={() => handlePathClick("포항시_남구")}
      />
      <path
        id="울릉군"
        className="st0"
        style={{
          fill: selectedImages["울릉군"]
            ? `url(#pattern-울릉군)`
            : "currentColor",
          cursor: "pointer",
        }}
        d="M492.5,352.7l0.3,8.7l-5.4,5.2l-8.1-3l-2.4-7.5l13.9-4.7l1.1,1.1L492.5,352.7z M506.2,367.1l0.3,0.3l-0.9,0.6l-0.1,0.1l-0.7-0.4l1-0.8l0.1,0.3L506.2,367.1z M504.4,366.6l-0.7,0.9l-1-1.3l1.1-0.7L504.4,366.6L504.4,366.6z M504.1,366L504.1,366L504.1,366L504.1,366L504.1,366z"
        onClick={() => handlePathClick("울릉군")}
      />
    </g>
  );
};
