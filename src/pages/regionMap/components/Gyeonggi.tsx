import {RegionProps} from "../util/type.ts";

export const Gyeonggi= ({toggleIsOpen, selectedImages, getFillStyle}: RegionProps) => {

    return (
        <g id="경기도">
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
            <polygon
                id="양평군"
                className="st0"
                style={{
                    fill: getFillStyle("양평군"),
                    cursor: 'pointer'
                }}
                points="197.1,174.8 205.2,154.8 205.2,154.8 212.8,151.6 218.1,165.9 228.7,164.8 228.6,157.8 228.6,157.8 234.3,154.2 247.1,164.3 258.2,164.7 264.5,169.6 253.6,177.3 258.6,182.1 258.7,187.4 258.7,187.4 253.6,198.6 253.6,198.6 246.4,197.7 247.1,191.9 226.6,192 222.1,187.2 217.9,190 211.6,187.3 208.8,190.1 204.7,184.6 207.1,178.3 204.3,173.1"
                onClick={() => toggleIsOpen("양평군")}
            />
            <polygon
                id="가평군"
                className="st0"
                style={{
                    fill: getFillStyle("가평군"),
                    cursor: 'pointer'
                }}
                points="214.5,91.6 217.7,98.6 226.1,99.6 226.8,104.7 233.6,106.4 235.6,110.9 234.3,119 224.4,125.8 223.8,132.1 226.8,137.2 222.1,143.4 228.6,142.1 225.6,154.8 228.6,157.8 228.7,164.8 218.1,165.9 212.8,151.6 205.2,154.8 206.4,150.1 200.6,138.3 192.3,134.1 192.3,134.1 195.4,119.1 199.2,119.8 200.2,111.3 206.9,108.5 206.9,102.4"
                onClick={() => toggleIsOpen("가평군")}
            />
            <path
                id="연천군"
                className="st0"
                style={{
                    fill: getFillStyle("연천군"),
                    cursor: 'pointer'
                }}
                d="M134.2,100.4l7.3-4.3l0.1-10.6l6.1-5.9l7.6,0.1l-2.1-3.9l4.1-10.2l15-8.8l2.8,6.2l4.6-0.7l2.1,8.2l-0.8,2.2l1.9,16.4l-5.1,1.5l-0.8-2.4l-3.3,2l-0.1,3.2l2.6,1.7l1.2,5.8l-3.1,2.1l-2.4-1.7l-1.2,2.8l-5.2-1.2l-5,7.9l-4.6-2.2l4.8-5.8l-2.7-4.9l-6.4,4.6l-5.3-2.2l-1.1,4.5l-4.9-3.1l-1.8,3.4L134.2,100.4z"
                onClick={() => toggleIsOpen("연천군")}
            />
            <polygon
                id="여주시"
                className="st0"
                style={{
                    fill: getFillStyle("여주시"),
                    cursor: 'pointer'
                }}
                points="208.8,190.1 211.6,187.3 217.9,190 222.1,187.2 226.6,192 247.1,191.9 246.4,197.7 253.6,198.6 252.2,217.9 252.2,217.9 252,222.4 252,222.5 251.9,222.5 251.8,222.6 245.7,234.1 237.3,231.8 237.8,230.8 233.2,226.4 230.1,229.4 223.8,226.5 223.8,226.5 224.9,224.2 224.9,224.2 224.4,218.5 224.4,218.5 225.8,217.4 226.9,207.4 217.5,199.5 214,200 214.3,195.8 208.8,190.2"
                onClick={() => toggleIsOpen("여주시")}
            />
            <polygon
                id="포천시"
                className="st0"
                style={{
                    fill: getFillStyle("포천시"),
                    cursor: 'pointer'
                }}
                points="174.5,135.1 174.5,135.1 172.3,133.9 172.7,121.4 177.4,118.9 177.4,114.6 170.6,104 171.7,101.2 174.2,102.9 177.3,100.8 176.1,95 173.5,93.3 173.7,90.1 177,88.1 177.8,90.5 182.9,89 181,72.7 181.7,70.5 187.1,77.6 194.4,71 193.5,80.2 201,85.6 206.2,81.1 209.5,83.5 212.6,81.6 214.5,91.6 206.9,102.4 206.9,108.5 200.2,111.3 199.2,119.8 195.4,119.1 192.3,134.1 187.1,138.2 185.4,135.7 185.4,135.7 177.3,137.8"
                onClick={() => toggleIsOpen("포천시")}
            />
            <polygon
                id="양주시"
                className="st0"
                style={{
                    fill: getFillStyle("양주시"),
                    cursor: 'pointer'
                }}
                points="150.3,138.8 151.4,132.8 147.2,132.2 147,126.8 151.3,124.3 155.9,108.5 160.5,110.7 166.7,120 172.7,121.4 172.7,121.4 172.3,133.9 172.2,133.9 159.4,136.6 161,146.2 160.1,148.9 158.1,149.6 153.5,147.5 147.6,151"
                onClick={() => toggleIsOpen("양주시")}
            />
            <polygon
                id="광주시"
                className="st0"
                style={{
                    fill: getFillStyle("광주시"),
                    cursor: 'pointer'
                }}
                points="176,202.8 180.5,192.6 183,189 181.2,181.7 189.4,181.5 194.5,175.6 197.1,174.8 204.3,173.1 207.1,178.3 204.7,184.6 208.8,190.2 214.3,195.8 214,200 204.1,206.6 201,213.7 193.6,213.8 194.1,202.1 188.5,199.7 184,204.7 182.7,201.7 176.5,203.3"
                onClick={() => toggleIsOpen("광주시")}
            />
            <path
                id="화성시"
                className="st0"
                style={{
                    fill: getFillStyle("화성시"),
                    cursor: 'pointer'
                }}
                d="M132.9,228L132.9,228L132.9,228L132.9,228z M132.5,213.9l2.6,0l-0.7-2.7l0.4-0.2l0.7,0.1l4.5,4.6l0.3-1.8l0.9-0.4l2.9,2.1l-3.1-2.5l5.5-2.9l3.3,2l5.4,7.8l8.4-1.4l3.7-0.2l2.7,3.8l7.7-0.6l1.2,6.3l-4.1,5.2l0,0.1l-0.6,0.2l-2.5,0.1l-4.8-8.7l-4.7-0.3l-4,3.9l4.5,4.8l0,0l0.6,1.3l-4.8,1.7l-0.2,8.7l-14.1,0.4l-4.4,7.7l0,0l-11.2-2l-0.4-4.1l0.8-1.1l-0.3-8.6l7.1-3.9l-4.4-1.4l2.8-1.7l-0.4-1.5l-0.7-0.7l0,0l0.8-3l-1.6,3.5l-5.1,0.9l-8,8.2l-1.2-3.6l3-2.1l-6-0.6l0.1-0.3l2.5-5.1l-2.7,0.4l6.4-4.2l-4.1,0.6l0.1-1.3l-0.6-4.3l0-0.1l3.1-2.6l1.8,0.4l2.2,0.7l2.6,0.2l2.1,0.1l2.1,0.9L132.5,213.9z"
                onClick={() => toggleIsOpen("화성시")}
            />
            <path
                id="김포시"
                className="st0"
                style={{
                    fill: getFillStyle("김포시"),
                    cursor: 'pointer'
                }}
                d="M99.3,133.9l0.6-2l8.8,4.6l8.7-2.4l1.2,12.1l0.2,4.2l7,4.1l3.3,2.8l5.3,3.9l-1.1,3.7l-8.5-1.7l-9-7.5l-7.7,7.2l-4-1.1l-0.9-4l-1.7-2.9l-0.1-0.1l-0.9-5.1l0.3-4.1l-1.2-2.6l0.1-0.7l0.2-0.8l0.6-1.6l0.1-1l-1.4-2.6L99.3,133.9z"
                onClick={() => toggleIsOpen("김포시")}
            />
            <polygon
                id="안성시"
                className="st0"
                style={{
                    fill: getFillStyle("안성시"),
                    cursor: 'pointer'
                }}
                points="174.1,241.8 181.8,242.9 190,236.8 191.6,231.6 197.1,239.5 199.5,237.3 210.6,242.2 212.1,233.1 223.1,240 219.6,247.6 214.6,254.4 206.8,258.6 208.8,261.1 195.5,266.8 194.5,272.7 192.9,269.6 184.8,266.9 183.8,263.6 173.5,260.6 177.9,256.3 177.6,251.6 171.7,250.5"
                onClick={() => toggleIsOpen("안성시")}
            />
            <polygon
                id="이천시"
                className="st0"
                style={{
                    fill: getFillStyle("이천시"),
                    cursor: 'pointer'
                }}
                points="214,200 217.5,199.5 226.9,207.4 227,207.5 225.8,217.4 225.8,217.4 224.4,218.5 224.9,224.2 223.8,226.5 230.1,229.4 233.2,226.4 237.8,230.8 237.8,230.8 237.3,231.8 238.1,240.4 233.1,242.3 234.4,245.3 231,244.3 228.3,249.6 223.5,246.9 219.6,247.6 223.1,240 212.1,233.1 210,227.4 200,221.6 201,213.7 204.1,206.6"
                onClick={() => toggleIsOpen("이천시")}
            />
            <path
                id="파주시"
                className="st0"
                style={{
                    fill: getFillStyle("파주시"),
                    cursor: 'pointer'
                }}
                d="M118.3,134.9l0.1-29.1l15.7-5.4l4.4,4.5l1.8-3.4l4.9,3.1l1.1-4.5l5.3,2.2l6.4-4.6l2.7,4.9l-4.8,5.8l-4.5,15.7l-4.3,2.6l0.2,5.3l4.3,0.6l-1.1,6l-5.1,4l-6.4-0.7l-4.7-1.5l-3.2,5.2l-12.4,0.5L118.3,134.9z"
                onClick={() => toggleIsOpen("파주시")}
            />
            <polygon
                id="용인시_수지구"
                className="st0"
                style={{
                    fill: getFillStyle("용인시_수지구"),
                    cursor: 'pointer'
                }}
                points="162.3,197.7 172.5,203.7 176,202.8 176.5,203.3 175.9,205.3 171.1,205.6 169.9,209.3 163.7,205.7 163.7,205.5 161,201"
                onClick={() => toggleIsOpen("용인시_수지구")}
            />
            <polygon
                id="용인시_기흥구"
                className="st0"
                style={{
                    fill: getFillStyle("용인시_기흥구"),
                    cursor: 'pointer'
                }}
                points="167,218.4 169.9,209.3 171.1,205.6 175.9,205.3 180.8,211.9 177.5,221.6 169.8,222.1"
                onClick={() => toggleIsOpen("용인시_기흥구")}
            />
            <polygon
                id="하남시"
                className="st0"
                style={{
                    fill: getFillStyle("하남시"),
                    cursor: 'pointer'
                }}
                points="180.2,165.1 184.1,163.9 194.5,175.6 189.4,181.5 181.2,181.7 180.8,182.2 176.8,181.9 177,175.1 181.8,170.7 179.9,165.4"
                onClick={() => toggleIsOpen("하남시")}
            />
            <polygon
                id="의왕시"
                className="st0"
                style={{
                    fill: getFillStyle("의왕시"),
                    cursor: 'pointer'
                }}
                points="164.1,190.9 164.2,192.8 162.3,197.7 161,201 155.2,204 153.8,208.6 150.3,208.5 150,207.8 154,199.3 156.6,193.2"
                onClick={() => toggleIsOpen("의왕시")}
            />
            <polygon
                id="군포시"
                className="st0"
                style={{
                    fill: getFillStyle("군포시"),
                    cursor: 'pointer'
                }}
                points="150,207.8 143,205.6 145.8,199.6 148.6,196.8 148.7,196.9 151.5,196.6 154,199.3"
                onClick={() => toggleIsOpen("군포시")}
            />
            <path
                id="시흥시"
                className="st0"
                style={{
                    fill: getFillStyle("시흥시"),
                    cursor: 'pointer'
                }}
                d="M127.5,192.6l0.5-1.2l0-0.2l3.1-9.3l6,2l2.5,7.5l3.7,1.5l0.5,3.5l0.1,0.3l-10.7,3.4l-1.4,2.9l-3-0.6l-4.5,4l-0.8,1l-0.7-0.1l-5.1-3.2l-0.1-0.2l3.9-3.2l0-0.5l3.7-4.8l1.1-1.3l0.1-0.2L127.5,192.6z"
                onClick={() => toggleIsOpen("시흥시")}
            />
            <polygon
                id="오산시"
                className="st0"
                style={{
                    fill: getFillStyle("오산시"),
                    cursor: 'pointer'
                }}
                points="162.5,233.3 158,228.4 162,224.5 166.7,224.8 171.5,233.5 168.5,236.3 163.1,234.6"
                onClick={() => toggleIsOpen("오산시")}
            />
            <polygon
                id="남양주시"
                className="st0"
                style={{
                    fill: getFillStyle("남양주시"),
                    cursor: 'pointer'
                }}
                points="185.4,135.7 187.1,138.2 192.3,134.1 200.6,138.3 206.4,150.1 205.2,154.8 197.1,174.8 194.5,175.6 184.1,163.9 180.2,165.1 177.2,155.2 172.8,155.5 169.1,147.1 177.3,137.8"
                onClick={() => toggleIsOpen("남양주시")}
            />
            <polygon
                id="과천시"
                className="st0"
                style={{
                    fill: getFillStyle("과천시"),
                    cursor: 'pointer'
                }}
                points="157.4,184.2 163.2,183.3 164.7,188.6 164.1,190.9 156.6,193.2 154.3,186.9"
                onClick={() => toggleIsOpen("과천시")}
            />
            <polygon
                id="고양시_일산서구"
                className="st0"
                style={{
                    fill: getFillStyle("고양시_일산서구"),
                    cursor: 'pointer'
                }}
                points="118.5,146.1 130.9,145.6 130.7,150.8 125.7,154.4 118.7,150.3"
                onClick={() => toggleIsOpen("고양시_일산서구")}
            />
            <polygon
                id="고양시_일산동구"
                className="st0"
                style={{
                    fill: getFillStyle("고양시_일산동구"),
                    cursor: 'pointer'
                }}
                points="125.7,154.4 130.7,150.8 130.9,145.6 134.1,140.5 138.8,142 140.9,148.2 133,157.9 129.1,157.2"
                onClick={() => toggleIsOpen("고양시_일산동구")}
            />
            <polygon
                id="고양시_덕양구"
                className="st0"
                style={{
                    fill: getFillStyle("고양시_덕양구"),
                    cursor: 'pointer'
                }}
                points="150.3,138.8 147.6,151 153.5,147.5 158.1,149.6 157,156.4 157.3,156.5 155.9,157.1 153.8,157.4 152.5,152.8 147.2,154.3 146.8,162.7 144.3,163.4 140.7,166.4 134.4,161.1 129.1,157.2 133,157.9 140.9,148.2 138.8,142 145.2,142.7"
                onClick={() => toggleIsOpen("고양시_덕양구")}
            />
            <polygon
                id="안산시_상록구"
                className="st0"
                style={{
                    fill: getFillStyle("안산시_상록구"),
                    cursor: 'pointer'
                }}
                points="144,196.8 145.8,199.6 143,205.6 150,207.8 150.3,208.5 149.6,212.2 146.3,210.3 140.7,213.1 139.8,213.8 136.4,210.2 135.8,209.1 136.8,208.2 139,207.8 139,199 139.1,198.3"
                onClick={() => toggleIsOpen("안산시_상록구")}
            />
            <path
                id="평택시"
                className="st0"
                style={{
                    fill: getFillStyle("평택시"),
                    cursor: 'pointer'
                }}
                d="M137.7,266.4l-0.8-8.7l-6.1-3.1l8.8-1.5l4.4-7.7l14.1-0.4l0.2-8.7l4.8-1.7l5.5,1.7l2.9-2.8l2.5-0.1l0.1,8.5l-2.3,8.6l5.9,1.1l0.3,4.8l-4.3,4.3l-5.8,4.9l-14.8,2.6l0,0l-1.9,0.5l-0.2,0.1l-3.8,2.4l-0.5-2.2l-3.7,0.7l-2.9,0.4L137.7,266.4z"
                onClick={() => toggleIsOpen("평택시")}
            />
            <polygon
                id="광명시"
                className="st0"
                style={{
                    fill: getFillStyle("광명시"),
                    cursor: 'pointer'
                }}
                points="138.1,181.1 143.2,179.9 146.2,187.2 143.5,192.9 143.4,192.9 139.7,191.4 137.2,183.9"
                onClick={() => toggleIsOpen("광명시")}
            />
            <path
                id="부천시"
                className="st0"
                style={{
                    fill: getFillStyle("부천시"),
                    cursor: 'pointer'
                }}
                d="M137.3,176.2l-1.6,5.3l2.3-0.4l-0.9,2.8l-6-2l-1.3,0l-3.2-2.4l2.3-5.8l0.8-4.7l6.9,2.2L137.3,176.2z"
                onClick={() => toggleIsOpen("부천시")}
            />
            <polygon
                id="안양시_동안구"
                className="st0"
                style={{
                    fill: getFillStyle("안양시_동안구"),
                    cursor: 'pointer'
                }}
                points="154.3,186.9 156.6,193.2 154,199.3 151.5,196.6 149.7,192 152.4,187.3"
                onClick={() => toggleIsOpen("안양시_동안구")}
            />
            <polygon
                id="안양시_만안구"
                className="st0"
                style={{
                    fill: getFillStyle("안양시_만안구"),
                    cursor: 'pointer'
                }}
                points="149.9,185.4 152.4,187.3 152.4,187.3 149.7,192 151.5,196.6 148.7,196.9 145.8,199.6 144,196.8 143.9,196.5 143.9,196.5 143.5,192.9 146.2,187.2"
                onClick={() => toggleIsOpen("안양시_만안구")}
            />
            <polygon
                id="의정부시"
                className="st0"
                style={{
                    fill: getFillStyle("의정부시"),
                    cursor: 'pointer'
                }}
                points="172.2,133.9 174.5,135.1 177.3,137.8 169.1,147.1 165.5,148.7 161,146.2 159.4,136.6"
                onClick={() => toggleIsOpen("의정부시")}
            />
            <polygon
                id="성남시_분당구"
                className="st0"
                style={{
                    fill: getFillStyle("성남시_분당구"),
                    cursor: 'pointer'
                }}
                points="164.2,192.8 173.7,191 180.5,192.6 176,202.8 172.5,203.7 162.3,197.7"
                onClick={() => toggleIsOpen("성남시_분당구")}
            />
            <polygon
                id="성남시_중원구"
                className="st0"
                style={{
                    fill: getFillStyle("성남시_중원구"),
                    cursor: 'pointer'
                }}
                points="181.2,181.7 183,189 180.5,192.6 173.7,191 180.8,182.2"
                onClick={() => toggleIsOpen("성남시_중원구")}
            />
            <polygon
                id="성남시_수정구"
                className="st0"
                style={{
                    fill: getFillStyle("성남시_수정구"),
                    cursor: 'pointer'
                }}
                points="174.3,183 176.8,181.9 180.8,182.2 173.7,191 164.2,192.8 164.1,190.9 164.7,188.6 170.7,184.6"
                onClick={() => toggleIsOpen("성남시_수정구")}
            />
            <polygon
                id="수원시_영통구"
                className="st0"
                style={{
                    fill: getFillStyle("수원시_영통구"),
                    cursor: 'pointer'
                }}
                points="169.9,209.3 167,218.4 163.4,218.6 163.3,215.8 163,210 163.7,205.7"
                onClick={() => toggleIsOpen("수원시_영통구")}
            />
            <polygon
                id="수원시_팔달구"
                className="st0"
                style={{
                    fill: getFillStyle("수원시_팔달구"),
                    cursor: 'pointer'
                }}
                points="163,210 163.3,215.8 156,211.1"
                onClick={() => toggleIsOpen("수원시_팔달구")}
            />
            <polygon
                id="수원시_권선구"
                className="st0"
                style={{
                    fill: getFillStyle("수원시_권선구"),
                    cursor: 'pointer'
                }}
                points="163.4,218.6 155,220 149.6,212.2 150.3,208.5 153.8,208.6 156,211.1 163.3,215.8"
                onClick={() => toggleIsOpen("수원시_권선구")}
            />
            <polygon
                id="수원시_장안구"
                className="st0"
                style={{
                    fill: getFillStyle("수원시_장안구"),
                    cursor: 'pointer'
                }}
                points="161,201 163.7,205.5 163.7,205.5 163.7,205.7 163,210 156,211.1 153.8,208.6 153.8,208.6 155.2,204"
                onClick={() => toggleIsOpen("수원시_장안구")}
            />
            <polygon
                id="동두천시"
                className="st0"
                style={{
                    fill: getFillStyle("동두천시"),
                    cursor: 'pointer'
                }}
                points="172.7,121.4 166.7,120 160.5,110.7 165.4,102.8 170.6,104 177.4,114.6 177.4,118.9"
                onClick={() => toggleIsOpen("동두천시")}
            />
            <polygon
                id="용인시_처인구"
                className="st0"
                style={{
                    fill: getFillStyle("용인시_처인구"),
                    cursor: 'pointer'
                }}
                points="174.1,241.8 174,233.4 174.7,233.1 178.7,227.9 177.5,221.6 180.8,211.9 175.9,205.3 176.5,203.3 182.7,201.7 184,204.7 188.5,199.7 194.1,202.1 193.6,213.8 201,213.7 200,221.6 210,227.4 212.1,233.1 210.6,242.2 199.5,237.3 197.1,239.5 191.6,231.6 190,236.8 181.8,242.9"
                onClick={() => toggleIsOpen("용인시_처인구")}
            />
            <polygon
                id="구리시"
                className="st0"
                style={{
                    fill: getFillStyle("구리시"),
                    cursor: 'pointer'
                }}
                points="172.8,155.5 177.2,155.2 180.2,165.1 179.9,165.4 173.3,168.9 171.5,166.2 172.1,158.9"
                onClick={() => toggleIsOpen("구리시")}
            />
            <polygon
                id="안산시_단원구"
                className="st0"
                style={{
                    fill: getFillStyle("안산시_단원구"),
                    cursor: 'pointer'
                }}
                points="124.8,206 133.6,209.3 135.8,209.1 136.8,208.2 139,207.8 139,199 139.1,198.3 133.2,200.2 131.8,203.1 128.8,202.5"
                onClick={() => toggleIsOpen("안산시_단원구")}
            />
        </g>
    );
}; 