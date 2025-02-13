import LeftArrowIcon from "../../../assets/thunder/LeftArrowIcon.svg?react";
import ImageIcon from "../../../assets/thunder/ImageIcon.svg?react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Row from "../../../styles/Common/Row.ts";

export default function ThunderCreate() {
    const navigate = useNavigate();
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const [formData, setFormData] = useState<FormData | null>(null);

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

    return (
        <div>
            <CreateHeader>
                <button onClick={() => navigate("/")}>
                    <LeftArrowIcon/>
                </button>
            </CreateHeader>
            <CreateTitle>
                <CreateMainTitle>여행GO 번개</CreateMainTitle>
                <CreateIntro>번개를 소개해주세요!</CreateIntro>
            </CreateTitle>
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
                <CreateTitleInput/>
            </CreateInputSection>
            <CreateInputSection>
                <CreateInputExplain>소개글을 입력해주세요*</CreateInputExplain>
                <CreateIntroduceInput/>
            </CreateInputSection>
        </div>
    );
}

const IconWrapperButton = styled.button`
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
    height: 230px;
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
    margin-top: 13px;
`;
