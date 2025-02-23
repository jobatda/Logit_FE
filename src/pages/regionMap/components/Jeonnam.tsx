import {RegionProps} from "../util/type.ts";

export const Jeonnam = ({toggleIsOpen, selectedImages, getFillStyle}: RegionProps) => {

  return (
      <g id="전라남도">
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
              id="신안군"
              className="st0"
              style={{
                  fill: getFillStyle("신안군"),
                  cursor: 'pointer'
              }}
              d="M52.9,550.1l7.4,2.5l1.5,4.8l0.2,1.5l0,0.5l1.6,3l-1.1,1.8l-0.4,0.5l-1,1.1l-2.8-0.7l-0.8-0.4l0.7-5.2l-3.5,2.1l-0.4-3.5l-5.1-0.9l-0.1-1.4l-0.3-3.6L52.9,550.1z M39.6,582.7l0.8,2l-2.3,1.4l0.7,2.6l-0.4,0.1l-0.2-0.1l-1.5,0.9l-0.4,0.2l-1.7,0.4l-0.8,1.4l-0.6,0.1l-2.2-4.4l-1.9,1.8l-0.4,0.1l-3.9-0.9l-1.2-1.4l6-5.9l5.5,0.3l0.1-4.3L39.6,582.7L39.6,582.7z M64.5,589.2l-0.5-3.7l3.1,0l-2.8-4l4.8,0l0.8,0.3l1.3,0.3l2,1.7l-5,3l7.1,3.4l-1.5,6.8l-6.5-6.2l-5.2,1.8l-0.3,0.3l-1.4-0.3l-3.2-1l0.8-2.7L64.5,589.2z M39,602.9l4.9,0.6l0.3,0.6l1.5,1.8l1.7-0.2l2.6,1.2l0.9,3.4l0.4,0.6l-0.7,2.7l-3.7,1l-1.5-4.6l-2.5,2.2l-5.5,0.8l0-0.8l-1.3-8.6l0.8,0.1L39,602.9z M19.9,602.2l7.5-4.3l0.1,0.3l0.1,6.6L24,605l-2.2-1.3l-1.7,6.4l-0.3,0.6l-0.4,0.3l-0.1,0l-1.5,0.4l-0.2,0.1l-3.7-1.8l0.8-8.1L19.9,602.2z M22.5,608.6l2,2.9l4.8,2.6l-7.3,6.9l-0.5-0.2l-3.9-2.3l-1.1-6.1l1.1-0.4l1.7-0.5l1.3-1.1L22.5,608.6z M33.3,556.5l2.5-0.2l-0.9-4.9l8.4-6.2l5.4,0.2l-4.5,1.7l-0.4,4.5l0.4,1.6l0,1.6l-0.4,1.4l-0.5,2.1l-4,1l-1-0.6l0-2.1l-1.8,2.1L33.3,556.5z M42.1,586.3l6.1,3l-2.9-0.2l0.8,5.5l0,0l-2.7-1.1l-0.3,5.2l-3.1,0.7l-3-2.7l-1.6-5.5l1.3-0.5l1.7-1.1l0.9-0.2l3.4,1.6L42.1,586.3z M33.9,625.3l6.2,3.3l0.6,2.3l-0.5,5.3l0.2,1.1l-0.2,0.3l-0.6-0.3l-8.4,3.5l3.9-2.7l-3.6-2.4l2.4,0l1.5,0.9l1-2l2.1-2l-2.3-1.4L33.9,625.3z M43,564.7l6.6-0.4l0.8,7.8l0,0l-4.7,3.5l0,0l-0.9-0.2l-0.7,0.4l2.8-6.4l-5.1-1L43,564.7z M47.3,618.8l4,5.5l2.1,0.4l-9.3,3.3l-1-0.4l1.3-4l-2.3-1.5l2-1.3L47.3,618.8z M31.9,633.6l-2.3,1.9l-1.1-10l3.8-0.2l2.8,6.2l0.2,1.5l-0.3,1l-0.7,1l-0.2,0.1l-0.2-0.1L31.9,633.6z M46.8,597l3.2,2.9l-1.2,4.6l-1.6,0.5l-1-0.2l-0.3,0.3l-1.3-1.1l-4.7-2.6l-0.5-0.3l4.1-1.6l3.3-0.1L46.8,597L46.8,597z M39.6,582.7L39.6,582.7L39.6,582.7L39.6,582.7z"
              onClick={() => toggleIsOpen("신안군")}
          />
          <path
              id="진도군"
              className="st0"
              style={{
                  fill: getFillStyle("진도군"),
                  cursor: 'pointer'
              }}
              d="M28.6,678.1l3-4.2l6.5,2.2l0.7,4.6l-4.8-0.1L28.6,678.1z M63.1,666.5l0.4-3.1l3.4,1.2L63.1,666.5z M55.4,640.8l5.7-8.1l4.9,2l1.2,1.4l0.1,2l4,0.2l5.2,9l0.3,1.8l-3.6,0l1.9,1.5l-0.8,4.1l-0.3,0.4l-2.1,3l-0.8,1.1l-0.7,2l-2.4-3.4l-1.6,3.4l-5.6,1l0.7,2.4l-18,2.9l1.9-3.6l-3.9-0.4l-3.2-5.3l5.3-3.7l-1.7-2.7l7.3-3.8l0.9-2.8l1.3-1.6l0.2-0.2l-0.4,2.8l1.3-2.1l3.3-1L55.4,640.8z"
              onClick={() => toggleIsOpen("진도군")}
          />
          <path
              id="완도군"
              className="st0"
              style={{
                  fill: getFillStyle("완도군"),
                  cursor: 'pointer'
              }}
              d="M106.3,701.4l-2.8-2.1l-8,6l-3.6-2.6l3.6-6.1l3,0.7l1.4,0.7l1.3,0.3l0.8-0.2l0.5,0l1.3,0.2l3.7,1.8l0,0.1L106.3,701.4z M110.7,693.5l2.4,0.8l1.9,2.7l-3.6,1.1l3.6,3.6l-3,5.6l-4.1-5.4l0.4-1.1l2.8-2.6l-2.3-1.7L110.7,693.5L110.7,693.5z M142.2,691.1l3.5,4.7l-1.5,5.6l-7.6-2l1.1-5.7l1.9-1.6l1.5-0.9L142.2,691.1z M99.4,687.9l8.1,5l0,0l-3,0.4l1.8,2.8l-3.8-1.5l0.1,3L100,697l-0.8-0.3l-1.8-2.2l1-1.3l-0.2-0.8l0.4-1.9l-0.3-2.4L99.4,687.9z M111.5,673.3L111.5,673.3L111.5,673.3L111.5,673.3z M111.5,673.3L111.5,673.3L111.5,673.3L111.5,673.3L111.5,673.3z M125.2,672.5L125.2,672.5L125.2,672.5L125.2,672.5z M129.3,671l1.8,1.7l3.7-3.9l8.1,2.2l-1.8,5.4l-11.5-1l-3.3-2l-1.1-0.7l-0.5,0.2l0.4-0.5l0,0l-0.1-0.6l3.5-1.1L129.3,671z M166.2,668.6l3.1,3.7l-4.3-1.5l1.3,2.3l-4.6,3.7l1.3-4.9l-8.6-3.2l0,0l0.6-0.2l3.2-2.3l2-0.6l1.8,4.6l3.6-1.5L166.2,668.6z M111.5,673.4L111.5,673.4L111.5,673.4L111.5,673.4l-1.6-2.1l0-3.2l-0.1-1.8l-0.1-0.3l0-0.9l0.5-0.9l0.5-1.1l4.1-1l0.4-0.2l5.8,2.9l0.8,2.5l4.9,8.6l-1.4,1.9l2.1,2l-5.6-2.7l-0.2,2.8l-4.9-0.9L111.5,673.4z M134.9,660L134.9,660L134.9,660L134.9,660z M135,655.5l1.1,3.6l-2.5,0.3l1.2,0.6l2.1-0.5l2,4.5l-0.1,0.1l-9.2,1l-1.8,4.7l-0.8-0.3l-0.9-1.5l1.8-2.8l-2.8-1.9l1-2.7l1.2-1.7l2.2-1.7l1.6,0.1l1.5-0.7L135,655.5z"
              onClick={() => toggleIsOpen("완도군")}
          />
          <polygon
              id="장성군"
              className="st0"
              style={{
                  fill: getFillStyle("장성군"),
                  cursor: 'pointer'
              }}
              points="104.7,532 107.3,521.3 111.6,518.3 111.5,517.2 112.4,517 112.6,517.1 114.4,513.4 116.9,514.6 122.8,509.5 121.7,505.9 125.7,503.3 124,498.7 124,497.7 128.2,495.3 128.2,495.3 134.7,492.4 140.5,496.4 146.9,505.8 147.5,509.2 139.3,518.4 141.6,529.2 135.9,532.8 125.7,531.9 126.3,528 120.5,535.3 112.5,538.3"
              onClick={() => toggleIsOpen("장성군")}
          />
          <path
              id="영광군"
              className="st0"
              style={{
                  fill: getFillStyle("영광군"),
                  cursor: 'pointer'
              }}
              d="M73.4,529.2l-2.8,0l3-3.7l-1.8-1.9l6-2.1l5.8-20.7l6.6,0.1l1.9,2.6l-1.8,4.2l6.9,12.5l6.8,0.8l-0.1-4.4l7.7,1.7l-4.3,3l-2.6,10.7l-4,6.8l-10.8-1l-5.4,3.2l-3.5-2.2l-4.9,3.5l-2.1-3.2l2.2-0.1l0.8-4.2l-5.1,3l0.7-3.3l-5.4,0.5l1-6l2,2l1.2-2.6L73.4,529.2z"
              onClick={() => toggleIsOpen("영광군")}
          />
          <path
              id="함평군"
              className="st0"
              style={{
                  fill: getFillStyle("함평군"),
                  cursor: 'pointer'
              }}
              d="M76.2,542.4l4.9-3.5l3.5,2.2l5.4-3.2l10.8,1l4-6.8l7.8,6.3l0,0l2.4,3.2l-3.5,4l1.3,5l0,0l-4.1,4.3l-3.6-1.8l-0.5,15.9l-1.9,3.4l-2.7-2.2l-2.1,2.1l-9.5-7.9L90,558l-2.8-1.5l-2.8-1.8l3.2-2.6l-5-0.8l-6-8L76.2,542.4z"
              onClick={() => toggleIsOpen("함평군")}
          />
          <path
              id="무안군"
              className="st0"
              style={{
                  fill: getFillStyle("무안군"),
                  cursor: 'pointer'
              }}
              d="M73.6,551.5L73.6,551.5L73.6,551.5L73.6,551.5L73.6,551.5z M86.8,600.4l-0.4-3.4l-6.4-5.4l-0.4-5l-3.3-18.5l-0.9,12.3l-3.2,0.9l-1.9-0.4l-2.4-1.7l-0.5-0.2l-0.2-0.9l2.2-1.5l-3.3-3.4l0.3-1.8l2-1.9l-0.4,2.1l4.3,0.5l2-3.2l-3.2-0.3l7.4-5.8l-1.2-2.8l-3.7,1.6l-2.6-7.7l-3.5,6.7l-5.5-1.4l0-0.5l-0.2-1.5l-1.5-4.8l3-8.2l6.4,3.6l3.2-5l0.2,0.3l-2,10.3l2.4-1.3l0.2,0.1l-1,3.8l7.5,0.8l-0.1,6.9l3.1-0.1l3.9-7.2L90,558l-1.8,6.2l9.5,7.9l0,8.8l-3.5,0l4.2,5.2l1.2,2.5l0.1,0.1l0.1,0l-0.6,2.3l-5.5,13.1L86.8,600.4z"
              onClick={() => toggleIsOpen("무안군")}
          />
          <path
              id="영암군"
              className="st0"
              style={{
                  fill: getFillStyle("영암군"),
                  cursor: 'pointer'
              }}
              d="M85.2,600.7l1.7-0.3l6.7,3.6l5.4-12.3l0.1-0.8l0.6-2.3l6.3-9.5l3.9,6.5l5.1,1.1l-0.6-9.9l3.6,0.7l2.8,7.6l13.4,3.6l4.4,0.4l-6.6,6.1l-1.5,7.5l-3.3-0.6l-3.4,4.4l-8.1,0.4l-3.1,3.5l3.2,2.9l0,0l-1.5,3.4l-14.6,3.9l0.9-2.6l-2.6,1.3l-1,0.6l-0.7,0.2l-3-3l-0.4-3.9l-4.6-0.8l0,0l1.4-3.5l-6.7,0.4l-1.2-0.9l-1.6,0.5l-2.5,2l-3.1-2.4l2.3-4.3l8-1.6L85.2,600.7z"
              onClick={() => toggleIsOpen("영암군")}
          />
          <path
              id="해남군"
              className="st0"
              style={{
                  fill: getFillStyle("해남군"),
                  cursor: 'pointer'
              }}
              d="M107,668.1l-2,6.9l-6-0.7l-1.8,2.9l-2.2,1.5l-1.4-0.3l-0.1-2.1l0.6-8.2l-6,2l-1.1-2.2l0-0.1l2.8,0.1l-2-3.4l0.1-0.1l3.3-0.1l-1.3-3.6l3.9-0.9l-1.2-4.1l-4,1.9l-2.8-3.2l3-0.2l-2.2-6.3l1.5-2.6l-3.7-2.6l2.3-1.4l-5.8-4.2l-3.7,4l-0.4-4.6l-9-0.9l0,0l-1.2-1.9l-3.1-2.6l1.9-5.4l-4.9-5.5l4.1-14.4l4.4,1.4l4.5,8.8l4.2-5.1l4.6,1.1l5.5,1.7L92,617l5.7,4.7l0.8-1l1-0.2l14.6-3.9l4.6,1.5l-3,7.7l2.3,0.4l-2.7,4.6l1.9,5.8l-3.6,3.9l2.5,2.1l-0.4,8.4l6.6,2.5l0,0.1l-0.8,1.3l-5.5,2.5l-0.8,0.6l0,0l-4.3,2l-0.2,0.8l0,0l-2.5,0.8l-0.7,5.2L107,668.1z"
              onClick={() => toggleIsOpen("해남군")}
          />
          <path
              id="강진군"
              className="st0"
              style={{
                  fill: getFillStyle("강진군"),
                  cursor: 'pointer'
              }}
              d="M132.9,655l-4.3-3.4l2.3-13.5l-1.4,1.1l-1.1-13.7l-2.3,21.2l-3.6,2.1l2,2.3l-2.6,2.5l-6.6-2.5l0.4-8.4l-2.5-2.1l3.6-3.9l-1.9-5.8l2.7-4.6l-2.3-0.4l3-7.7l-4.6-1.5l1.5-3.4l-3.2-2.9l3.1-3.5l8.1-0.4l3.4-4.4l3.3,0.6l2.8,0.8l8,23.6l-3.9,1.2l4.7,11.6l-6,5.2l0.4,9.6l0,0.1L132.9,655z"
              onClick={() => toggleIsOpen("강진군")}
          />
          <path
              id="장흥군"
              className="st0"
              style={{
                  fill: getFillStyle("장흥군"),
                  cursor: 'pointer'
              }}
              d="M138.5,589.1l5.3-0.6l0.9,4.2l4.5,3.5l3.7-4.2l3,2.4l5.8-0.4l-2.1,2.5l-0.9,13.3l-5.6,4.6l0.9,3.8l5.4,0.4l3.2,7.1l-12.2,0.7l6.6,4.2l-3.1,4.6l3.6,0.7l-0.3,2.1l-2-0.9l0,3.3l-4,1.5l2.6,9.3l-4.8-1.9l0.9,4.3l-10-0.1l1.5,5.2l-4.6-4l-0.9-9.8l6-5.2l-4.7-11.6l3.9-1.2l-8-23.6l-2.8-0.8l1.5-7.5L138.5,589.1z"
              onClick={() => toggleIsOpen("장흥군")}
          />
          <polygon
              id="화순군"
              className="st0"
              style={{
                  fill: getFillStyle("화순군"),
                  cursor: 'pointer'
              }}
              points="172.2,538.2 180.9,535.3 182.4,548.2 179.4,572.2 168.5,578.7 168.3,588.5 161.6,594 155.8,594.4 152.8,592 149.1,596.2 144.7,592.6 143.8,588.5 138.5,589.1 134.1,588.7 135,587.9 135,587.8 140.9,584.4 139.6,578 143.3,569.7 139.9,567 143.1,556.4 143.1,556.4 146.6,554.3 150.7,557.2 157.5,549.7 158.1,547.7 167.3,550 165.2,540.4"
              onClick={() => toggleIsOpen("화순군")}
          />
          <path
              id="보성군"
              className="st0"
              style={{
                  fill: getFillStyle("보성군"),
                  cursor: 'pointer'
              }}
              d="M179.4,572.2l1.8,1.5l1.2-3.1l2.9,5l0.8,9.4l10.2-1.2l4,5.5l3.8,0l1.7,3.9l4.6,1.5l-9.2-1.1l10.7,4.1l-0.2,0.3l-3.8,3.5l-7.3-6l-11.9,5.9l-3.2,5.9l-3.2,6.4l-0.1,0.8l-4.7,2.1l-4.3-2.4l-2.4,4.4l-1.8,1.7l-1.2,0.6l-4.4,3.5l-0.9,1.1l-3.2-7.1l-5.4-0.4l-0.9-3.8l5.6-4.6l0.9-13.3l2.1-2.5l6.8-5.4l0.1-9.9L179.4,572.2z"
              onClick={() => toggleIsOpen("보성군")}
          />
          <path
              id="고흥군"
              className="st0"
              style={{
                  fill: getFillStyle("고흥군"),
                  cursor: 'pointer'
              }}
              d="M215.6,650.7l3.4,2.9l2.8-2.5l0,0l4.3,4.3l-0.8,3.7l-5.7,1.5l0.7-3l-3.9-1.8l2.9-0.6l-4.6-0.2l0.6-1.9l0-2.2L215.6,650.7z M184.4,647.6l2.5,3.3l-3.5,7l-14.1-2.1l-0.5-4.9l0,0l2.5-2.5l3.5,2.7l3.4-1.8l5.4-1.4L184.4,647.6z M215.2,640.1l3.2,1l-2.7,3.7l5.5,1.8l-0.4,2.6l-5,1l-0.7,0l-1.4-1.9l0.2-0.8l2-1.4l-3.2-2.3l0,0l0.2-0.4l1.1-1.8l0,0l0.6-0.7L215.2,640.1z M186.3,606.6l2.4-5l11.9-5.9l7.2,8.6l-2.3,7.1l8.2,10l6.4,2.7l-4.1,0.7l4.8,1.5l1.2,4.3l-2.4,4.7l-3.9-3.6l-1.5,3.2l-6.6-1.6l1.1,2.8l3.3,0.5l-4.3,1l5.4,1.4l-0.2,2l-0.6,2.7l0,0.2l-0.2,1l-2.1-1.4l-1.4,2.6l-3.2,0.1l1.7,2.5l-4.3-0.6l-1.3,2.3l-1-1.9l-3.2,4l1.5,3.5l-7.7-6.3l2-3.1l-1.1,0.2l-10.3-5l-3,2l-0.2,0.1l-2.4-0.4l-3.7-1l-0.6-5.9l0.7-0.8l2.8-4l0.4-0.6l2.9,0.9l0.2-5l0,0l2.1-2.6l5-1.7l0.6-4.1l6.2-5.8l0.2,9.4l8-8.2l-2.3-6.6l-8.1,3.3L186.3,606.6z"
              onClick={() => toggleIsOpen("고흥군")}
          />
          <polygon
              id="구례군"
              className="st0"
              style={{
                  fill: getFillStyle("구례군"),
                  cursor: 'pointer'
              }}
              points="206.4,521.5 213.1,512.1 217.5,511.7 231.1,520.5 237.2,540.3 234.6,550.3 228.8,553.9 225.7,552.4 209.6,539.4 205.4,538.6 204.1,533.6 208.7,531.1"
              onClick={() => toggleIsOpen("구례군")}
          />
          <polygon
              id="곡성군"
              className="st0"
              style={{
                  fill: getFillStyle("곡성군"),
                  cursor: 'pointer'
              }}
              points="181.1,516.2 183.3,519.4 185.6,516.4 190.1,519.9 202.5,518.4 206.4,521.5 208.7,531.1 204.1,533.6 205.4,538.6 209.6,539.4 209.6,546.1 198.2,557.9 190.5,556 182.4,548.2 180.9,535.3 172.2,538.2 167.5,530 169.5,521.5 169.8,521.6 169.8,521.6"
              onClick={() => toggleIsOpen("곡성군")}
          />
          <polygon
              id="담양군"
              className="st0"
              style={{
                  fill: getFillStyle("담양군"),
                  cursor: 'pointer'
              }}
              points="141.6,529.2 139.3,518.4 147.5,509.2 146.9,505.8 154.1,506.1 157.2,496.3 161.7,495.7 163.9,502 160.7,507 166.2,511.6 162.6,518.4 168.1,520.6 169.5,521.5 167.5,530 172.2,538.2 165.2,540.4 167.3,550 158.1,547.7 159.8,541.6 153,540.4 146.1,528.2"
              onClick={() => toggleIsOpen("담양군")}
          />
          <path
              id="광양시"
              className="st0"
              style={{
                  fill: getFillStyle("광양시"),
                  cursor: 'pointer'
              }}
              d="M247,579.5l-0.6,2l-3.1-1.9l-2.7,6.3l0.9-2.7l-4.4,0.4l-3-8.2l-2.7,6.2l-4-6.5l2.6-6.5l-5.1-9.1l0.9-7.1l3.2,1.5l5.8-3.6l2.6-10l18.5,20.6l2.4,6.3l-4.1,7.4l-0.1,0.1l-3.4-2.2l0.5,3.3L247,579.5z"
              onClick={() => toggleIsOpen("광양시")}
          />
          <polygon
              id="나주시"
              className="st0"
              style={{
                  fill: getFillStyle("나주시"),
                  cursor: 'pointer'
              }}
              points="112.7,550.4 122.6,550.8 127.5,557.5 125.6,559.4 133.5,560.3 143.1,556.4 139.9,567 143.3,569.7 139.6,578 140.9,584.4 135,587.8 135,587.9 134.1,588.7 120.7,585.1 117.9,577.5 114.3,576.9 115,586.8 109.9,585.7 105.9,579.2 99.6,588.7 99.5,588.6 98.4,586.1 94.2,580.9 97.8,580.9 97.8,572.1 99.9,570 102.6,572.2 104.5,568.8 104.9,552.9 108.5,554.7"
              onClick={() => toggleIsOpen("나주시")}
          />
          <path
              id="순천시"
              className="st0"
              style={{
                  fill: getFillStyle("순천시"),
                  cursor: 'pointer'
              }}
              d="M209.6,539.4l16.1,13l-0.9,7.1l5.1,9.1l-2.6,6.5l4,6.5l-0.7,2.7l1.6-2.7l0.9,3.6l0.1,0.9l-2.5-1.8l1.6,2.2l-6.2,0.7l-0.8,6.1l-1.4,0l0.3-7.3l-5.6,1.2l0.6,6.6l-5.9,0.6l0.1-2.9l-3,3.5l-4.7-1.6l-1.7-3.9l-3.8,0l-4-5.5l-10.2,1.2l-0.8-9.4l-2.9-5l-1.2,3.1l-1.8-1.5l3-24.1l8.2,7.8l7.7,2l11.4-11.9L209.6,539.4z"
              onClick={() => toggleIsOpen("순천시")}
          />
          <path
              id="여수시"
              className="st0"
              style={{
                  fill: getFillStyle("여수시"),
                  cursor: 'pointer'
              }}
              d="M246.3,589.9l10,0.5l-3.6,13.2l3.1,5.2l-3.7,1.1l-4.4,2.5l-6.3-5.4l-1.9,7.6l-2.3-1.8l-1.5,1.9l3.3,3.6l-2.8,0l2.3,3.4l0.7,1.4l0.7,3.6l-0.2,0.2l-7.9-3.9l-0.3,3.3l-3.6-4.9l3.4-6.4l-3.3,0.4l1-4.8l4.2-2.6l-2.8-2.1l-1.7-2.4l1.8-0.7l-2-3.9l-4.5-0.5l0.9-2.4l1.1-9l6.2-0.7l0.9-0.4l0.5-0.9l1.3,0l0.8,0.5l-3,2.8l6.3,4.7l-1.6,1.9l1.7,0.9L246.3,589.9z M251.5,639l4.6,3l2.7,6.8l-12.1-7.9l3.9-1.8L251.5,639z M241.8,638.5l-1.5-4.3l7.3,2.6L241.8,638.5z M252.7,621.1l1.3-2.6l1.2-0.9l-1.1-1.8l-1.7-3.6l-0.2-1.8l6.1,2.8l0.3,2.5l-3.9-0.6l6.1,6.7l-0.6,11.5l-6.6-0.8l-5.1-4.5l0.8-3.2l0.5-1.1l0.2-0.7l0.2-0.2L252.7,621.1z M249.1,584.6l3.7,1.2l0,2.8l-5.4,0.3l1.6-4.3L249.1,584.6z"
              onClick={() => toggleIsOpen("여수시")}
          />
          <path
              id="목포시"
              className="st0"
              style={{
                  fill: getFillStyle("목포시"),
                  cursor: 'pointer'
              }}
              d="M79.5,592.4l7,4.6l0,0.2l0.4,3.1l-1.7,0.3l-2.1-0.4l-7.3,2l-0.4-0.1l-1.7-3.4L79.5,592.4z"
              onClick={() => toggleIsOpen("목포시")}
          />
      </g>
  );
};
