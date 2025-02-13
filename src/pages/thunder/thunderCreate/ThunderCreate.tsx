import LeftArrowIcon from "../../../assets/thunder/LeftArrowIcon.svg?react";
import ImageIcon from "../../../assets/thunder/ImageIcon.svg?react";
import PlusIcon from "../../../assets/thunder/PlusIcon.svg?react";
import MinusIcon from "../../../assets/thunder/MinusIcon.svg?react";
import PeopleIcon from "../../../assets/thunder/PeopleIcon.svg?react";
import FlagIcon from "../../../assets/thunder/FlagIcon.svg?react";
import StepLine from "../../../assets/thunder/StepLine.svg?react";
import CalendarIcon from "../../../assets/thunder/CalendarIcon.svg?react";
import test1 from "../../../assets/feed/test1.png";
import axios from "axios";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useRef, useState, useEffect} from "react";
import Row from "../../../styles/Common/Row.ts";
import Column from "../../../styles/Common/Column.ts";

import { TravelPlanCardProps } from "../../myPage/types/TravelPlanCardProps.ts";

import {ScheduleList} from "../../aiTripPlan/components/PlannerScheduleList";

import PlannerScheduleList from "../../aiTripPlan/components/PlannerScheduleList"




// import PlanContent from "../../myPage/components/PlanContent"
// import PlannerScheduleList from "../../aiTripPlan/components/PlannerScheduleList.tsx";

export default function ThunderCreate() {
    const navigate = useNavigate();
    const [step, setStep] = useState<number>(0);
    const [title, setTitle] = useState("");
    const [intro, setIntro] = useState("");
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const [meetingMaxCnt, setMeetingMaxCnt] = useState(1);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [formData, setFormData] = useState<FormData | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [plan, setPlan] = useState("");
    const [modalPosts, setModalPosts] = useState<TravelPlanCardProps[]>([]);

    const [posts, setPosts] = useState<ScheduleList | null>(null);



    const dateInputRef = useRef<HTMLInputElement>(null);
    const endDateInputRef = useRef<HTMLInputElement>(null);

    const isAble = title && intro;
    const handleStartDateClick = () => {
        if (dateInputRef.current) {
            dateInputRef.current.showPicker();
        }
    };

    const handleEndDateClick = () => {
        if (endDateInputRef.current) {
            endDateInputRef.current.showPicker();
        }
    };

    const handleModal = () => {
        const courseid = plan;
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://travelgo.mooo.com/api/course-plan/${courseid}`);
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
        // setPosts(dummyScheduleList);

        setIsOpen(false);
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const newImages = Array.from(files).map(file => URL.createObjectURL(file));
            setSelectedImages(prevImages => [...prevImages, ...newImages]);

            const newFormData = new FormData();
            newFormData.append('form', JSON.stringify({
                meetingHostId: 1,  // 실제 값 사용
            }));

            Array.from(files).forEach(file => {
                newFormData.append('meetingImage', file);
            });

            setFormData(newFormData);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get("https://travelgo.mooo.com/api/course");
              setModalPosts(response.data);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
        };
        fetchData();
        console.log(modalPosts);
    }, []);

    const getCoursePeriodText = (period: number) => {
        switch (period) {
          case 0:
            return '당일치기';
          case 1:
            return '1박 2일';
          case 2:
            return '2박 3일';
          default:
            return '미정';
        }
      };


    const handleRadioChange = (courseId: string) => {
        if (plan === courseId) {
            setPlan(""); // 이미 선택된 항목을 다시 클릭하면 선택 해제
        } else {
            setPlan(courseId); // 새로운 항목을 선택
        }
    };

    const handleCreateThunder = async () => {
        if (step === 1 && plan) {
            try {
                const post = {
                    meetingHostId: "id123",
                    meetingTitle: title,
                    meetingContent: intro,
                    meetingStartDate: startDate,
                    meetingEndDate: endDate,
                    meetingLocation: "",
                    meetingNowCnt: 1,
                    meetingMaxCnt: meetingMaxCnt,
                    userMeetingMbti: "ESTJ", 
                }
                const response = await axios.post("https://travelgo.mooo.com/api/meeting", {

                });
                console.log("번개 생성 성공:", response.data);
                // 번개 생성 후 필요한 추가 작업 수행
            } catch (error) {
                console.error("번개 생성 실패:", error);
            }
        } else {
            setStep(1);
        }
    };

    return (
        // <TravelPlannerProvider>


        <Column $verticalAlign="distribute" $horizonAlign="distribute" style={{minHeight: 'calc(100vh - 56px - 80px)'}}>
            <div>
                <CreateHeader>
                    <button onClick={() => navigate("/")}>
                        <LeftArrowIcon/>
                    </button>
                    <Row $verticalAlign="center" $gap={8}>
                        {step === 0 ? (
                            <>
                                <Step>01</Step>
                                <StepLine/>
                                <Step style={{color: "#A1A1A1"}}>02</Step>
                            </>
                        ) : (
                            <>
                                <Step>01</Step>
                                <Step>02</Step>
                                <StepLine/>
                            </>
                        )}
                    </Row>
                </CreateHeader>
                <CreateTitle>
                    <CreateMainTitle>여행GO 번개</CreateMainTitle>
                    <CreateIntro>{step === 0 ? "번개를 소개해주세요!" : "세부 계획을 세워주세요!"}</CreateIntro>
                </CreateTitle>

                {step === 0 && (
                    <>
                        <CreateInputSection>
                            <CreateInputExplain>사진을 등록해주세요(선택)</CreateInputExplain>
                            <Row $gap={6}>
                                <IconWrapperButton>
                                    <ImageIcon/>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        onChange={handleImageChange}
                                        style={{display: 'none'}}
                                        id="image-upload"
                                    />
                                    <label htmlFor="image-upload" style={{width: "70px", height: "70px"}}></label>
                                </IconWrapperButton>
                                <ImagePreview>
                                    {selectedImages.map((image, index) => (
                                        <ImageThumbnail key={index} src={image} alt={`selected-image-${index}`}/>
                                    ))}
                                </ImagePreview>
                            </Row>
                        </CreateInputSection>
                        <CreateInputSection>
                            <CreateInputExplain>번개 제목을 입력해주세요*</CreateInputExplain>
                            <CreateInputDetail>번개 제목은 지역명을 포함하여 간결하게 작성하면 더욱 좋아요!</CreateInputDetail>
                            <CreateTitleInput value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </CreateInputSection>
                        <CreateInputSection>
                            <CreateInputExplain>소개글을 입력해주세요*</CreateInputExplain>
                            <CreateIntroduceInput value={intro} onChange={(e) => setIntro(e.target.value)}/>
                        </CreateInputSection>
                    </>
                )}

                {step === 1 && (
                    <>
                        <UnderLineDiv>
                            <Row $gap={5} $verticalAlign="center">
                                <PeopleIcon/>
                                <div>인원</div>
                            </Row>
                            <Row $gap={20} $verticalAlign="center">
                                <StyledButton
                                    onClick={() => setMeetingMaxCnt(prev => Math.max(1, prev - 1))}
                                ><MinusIcon/></StyledButton>
                                {meetingMaxCnt}
                                <StyledButton
                                    onClick={() => setMeetingMaxCnt(prev => prev + 1)}
                                ><PlusIcon/></StyledButton>
                            </Row>
                        </UnderLineDiv>
                        <Description>인원은 본인을 포함한 명수로 지정해주세요</Description>
                        <UnderLineDiv>
                            <Row $gap={5} $verticalAlign="center" style={{width: "100%"}}>
                                <DateButton onClick={handleStartDateClick}>
                                    <CalendarIcon/>
                                    <div>{startDate ? startDate : "시작일"}</div>
                                </DateButton>
                                <input
                                    ref={dateInputRef}
                                    type="date"
                                    style={{display: "none"}}
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                                ~
                                <DateButton onClick={handleEndDateClick}>
                                    <CalendarIcon/>
                                    <div>{endDate ? endDate : "종료일"}</div>
                                    <input
                                        ref={endDateInputRef}
                                        type="date"
                                        style={{display: "none"}}
                                        onChange={(e) => setEndDate(e.target.value)}
                                    />
                                </DateButton>
                            </Row>
                        </UnderLineDiv>
                        <Description>최대 2박 3일</Description>
                        <UnderLineDiv style={{justifyContent: "start"}}>
                            <FlagIcon/>
                            여행 일정
                        </UnderLineDiv>
                        <Row $horizonAlign="center">
                            {!plan ? (
                                <PlanButton onClick={() => setIsOpen(true)}>
                                    + 플랜 불러오기
                                </PlanButton>
                            ) : (
                                !isOpen &&
                                <Column style={{marginTop: "20px", width: "100%"}}>
                                    <PlannerScheduleList courseid={plan}/>
                                </Column>
                            )}
                        </Row>
                    </>
                )}
            </div>

            {isOpen && (
                // <ModalBackground onClick={() => setIsOpen(false)}>
                <ModalBackground>
                    <Modal onClick={(e) => e.stopPropagation()}>
                        {modalPosts.map((post, index) => (
                            <SchedulItemWrapper key={index}>   
                            <ScheduleItem>
                                <ScheduleImg src={`data:image/png;base64,${post.courseImage[0]}`}/>
                                <ScheduleInfoWrapper>
                                    <ScheduleCategory>{getCoursePeriodText(post.coursePeriod)}</ScheduleCategory>
                                    <ScheduleName>{post.courseTitle}</ScheduleName>
                                </ScheduleInfoWrapper>
                                <input type="radio"
                                        checked={plan === post.courseId}
                                        onChange={() => handleRadioChange(post.courseId)}
                                    // onChange={() => setPlan(post.courseTitle)}
                                />
                            </ScheduleItem>
                            </SchedulItemWrapper>   
                        ))}
                            <ModalButton onClick={() => setIsOpen(false)}>
                                선택
                            </ModalButton>
                    </Modal>
                </ModalBackground>
            )}

            <Row $horizonAlign="distribute" style={{marginBottom: "20px", gap: "6px"}}>
                {step !== 0 && (
                    <PreviousButton onClick={() => setStep(0)}>이전</PreviousButton>
                )}
                <div></div>
                {!plan && step === 0 ?
                    <NextButton onClick={() => setStep(1)} disabled={!isAble} isAble={isAble}>다음</NextButton>
                    :
                    <NextButton onClick={() => navigate("/")} disabled={!plan} isAble={plan}>생성하기</NextButton>
                }
            </Row>
        </Column>
        // </TravelPlannerProvider>
    );
}

const SchedulItemWrapper = styled.div`
    width: 100%;
`;

const ScheduleAddress = styled.div`
    font-size: 12px;
    line-height: 17px;
    font-weight: 400;
    color: #A1A1A1;
`;

const ScheduleNumber = styled.div`
    border-radius: 50%;
    background-color: #F8F8F8;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: #606060;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 20px;
    max-height: 20px;
`;

const ModalButton = styled.button`
    font-size: 13px;
    font-weight: 400;
    color: #71C9B0;
    margin: 20px;
`;

const ScheduleItem = styled.label`
    width: 100%;
    display: flex;
    padding: 12px;
    gap: 12px;
    border: 2px solid #F8F8F8;
    border-radius: 12px;
`;

const ScheduleImg = styled.img`
    max-width: 98px;
    border-radius: 10px;
`;

const ScheduleInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 98px;
    width: 100%;
`;

const ScheduleCategory = styled.span`
    background-color: #71C9B0;
    border-radius: 8px;
    color: #FFFFFF;
    font-size: 11px;
    line-height: 16px;
    font-weight: 500;
    width: 50px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ScheduleName = styled.div`
    margin-top: 6px;
    font-size: 15px;
    line-height: 18px;
    font-weight: 500;
    color: #333333;
`;

const ModalBackground = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    max-width: 500px;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    

    @media (min-width: 500px) {
        right: calc(50vw - 250px);
    }
`;

const Modal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    background-color: white;
    width: calc(100% - 20px);
    height: 62.44%;
    padding: 5px;
    border-radius: 10px;
    z-index: 2000;
    overflow-y: scroll;
`;

const PlanButton = styled.button`
    margin-top: 16px;
    color: #D2D2D2;
    font-weight: 500;
`;

const Description = styled.div`
    color: #C8C8C8;
    font-size: 10px;
    font-weight: 400;
    text-align: right;
    margin-top: 6px;
`;

const DateButton = styled.button`
    align-items: center;
    gap: 6px;
    width: 50%;
    position: relative;
`;

const StyledButton = styled.button`
    border-radius: 50%;
    background-color: #D2D2D2;
`;

const UnderLineDiv = styled.div`
    color: #333333;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #C8C8C8;
`;

const NextButton = styled.button<{ isAble: string }>`
    color: #FFFFFF;
    border-radius: 8px;
    border: 1px solid ${({isAble}) => isAble ? "#71C9B0" : "#C8C8C8"};
    background-color: ${({isAble}) => isAble ? "#71C9B0" : "#C8C8C8"};
    padding: 10px 35px;
`;

const PreviousButton = styled.button`
    color: #A1A1A1;
    border-radius: 8px;
    border: 1px solid #D9D9D9;
    padding: 10px 35px;
`;

const Step = styled.div`
    font-weight: 400;
    font-size: 14px;
    color: #333333;
`;

const IconWrapperButton = styled.button`
    margin-top: 10px;
    padding: 17px 23px;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid #F8F8F8;
    position: relative;
    display: inline-block;
    text-align: center;

    label {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
    }
`;

const ImagePreview = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`;

const ImageThumbnail = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 8px;
    object-fit: cover;
`;

const CreateIntroduceInput = styled.textarea`
    padding: 16px 13px;
    font-size: 12px;
    color: #333333;
    font-weight: 400;
    border-radius: 10px;
    border: 1px solid #F8F8F8;
    width: 100%;
    height: 150px;
    margin-top: 10px;
    resize: none;

    &:focus {
        border: 1px solid #71C9B0;
    }
`;

const CreateTitleInput = styled.input`
    padding: 16px 13px;
    font-size: 12px;
    color: #333333;
    font-weight: 400;
    border-radius: 10px;
    border: 1px solid #F8F8F8;
    width: 100%;
    margin-top: 10px;

    &:focus {
        border: 1px solid #71C9B0;
    }
`;

const CreateInputDetail = styled.div`
    font-size: 11px;
    font-weight: 400;
    color: #C8C8C8;
`;

const CreateInputExplain = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: #606060;
`;

const CreateInputSection = styled.div`
    margin-bottom: 20px;
`;

const CreateMainTitle = styled.div`
    color: #71C9B0;
    font-size: 14px;
    font-weight: 600;
`;

const CreateIntro = styled.div`
    color: #333333;
    font-size: 20px;
    font-weight: 600;
`;

const CreateTitle = styled.div`
    margin: 15px 0 25px 0;
`;

const CreateHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 13px;
    align-items: center;
`;
