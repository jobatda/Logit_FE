import styled from "styled-components";
import {useEffect, useState} from "react";
import ProfileFeedList from "./ProfileFeedList";

import testHeaderImg from "../../../assets/myPage/myPageHeaderImg.png"; //test

interface ProfileType {
  userId: number,
  userFeedCount: number,
  userFollowerCount: number,
  userFollowingCount: number,
  userImage: string,
  name: string,
  userIntroduce: string,
  userTags: string[],
  visitedCount: number,
}

export default function MyPageProfile() {
  const [profile, setProfile] = useState<ProfileType | null>(null);

  useEffect(() => {
    // backend api 호출
    const dummyProfile = {
      userId: 1,
      userFeedCount: 10,
      userFollowerCount: 73,
      userFollowingCount: 21,
      userImage: testHeaderImg,
      name: "최상혁",
      userIntroduce: "여행을 좋아하는 24살 입니다 :)",
      userTags: ["즉흥적인", "맛집 러버", "사교성 만렙"],
      visitedCount: 12,
    };
    setProfile(dummyProfile);
  }, []);

  if (!profile) return <div>로딩중...</div>;

  return (
    <>
      <ProfileHeader>
        <HeaderSpace/>
        <HeaderContentWrapper>
          <HeaderImageWrapper>
            <HeaderImage src={testHeaderImg} alt="프로필 이미지"/>
          </HeaderImageWrapper>
          <HeaderContentContainer>
          <HeaderContent>
            <HeaderContentCount>
              {profile.userFeedCount}
            </HeaderContentCount>
            <HeaderContentText>
              게시물 </HeaderContentText>
          </HeaderContent>
          <HeaderContent>
            <HeaderContentCount>
              {profile.userFollowerCount}
            </HeaderContentCount>
            <HeaderContentText>
              팔로워
            </HeaderContentText>
          </HeaderContent>
          <HeaderContent>
            <HeaderContentCount>
              {profile.userFollowingCount}
            </HeaderContentCount>
            <HeaderContentText>
              팔로잉
            </HeaderContentText>
          </HeaderContent>
          </HeaderContentContainer>
        </HeaderContentWrapper>        
      </ProfileHeader>
      <ProfileMiddle>
        <ProfileName>
          {profile.name}
        </ProfileName>
        <ProfileIntroduceWrapper>
          <ProfileIntroduce>
            {profile.userIntroduce}
          </ProfileIntroduce>
          <ProfileUpdateBtn>
            프로필 편집
          </ProfileUpdateBtn>
        </ProfileIntroduceWrapper>
        <ProfileTagList>
            {profile.userTags.map((tag, index) => (
              <ProfileTag key={index}>
                # {tag}
              </ProfileTag>
            ))}
        </ProfileTagList>
        <ProfileVisitedCount>
          방문 지역 수: <VisitedCount>{profile.visitedCount}</VisitedCount>/255
        </ProfileVisitedCount>
      </ProfileMiddle>
      <ProfileFeedListWrapper>
        <ProfileFeedList userId={profile.userId}/>
      </ProfileFeedListWrapper>
    </>
  );
}

const ProfileHeader = styled.div`
  background-color: #F8F8F8;
  position: relative;
`;

const HeaderSpace = styled.div`
  height: 70px;
`;

const HeaderContentWrapper = styled.div`
  height: 67px;
  background-color: #FFFFFF;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  position:relative;
  display: flex;
  justify-content: space-between;
  padding-right: 36px;
  padding-top: 16px;
  padding-bottom: 13px;
`;


const HeaderImageWrapper = styled.div`
  position: relative;
  width: 100%;
  // background-color: #111111;
`;

const HeaderImage = styled.img`
  position: absolute;
  left: 32px;
  bottom: -9px;
  object-fit: cover;
`;
  
const HeaderContentContainer = styled.div`
  width: 100%;
  // width: 187px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderContent = styled.div`
  text-align: center;
`;

const HeaderContentCount = styled.div`
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
  color: #333333;
`;
  
  const HeaderContentText = styled.div`
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: #606060;
`;

const ProfileMiddle = styled.div`
  padding: 14px 16px 18px 16px;
`;

const ProfileName = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: #000000;
`;
const ProfileIntroduceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ProfileIntroduce = styled.div`
  font-size: 14px;
  line-height: 23px;
  font-weight: 400;
  color: #000000;
`;

const ProfileUpdateBtn = styled.div`
  border-radius: 10px;
  border: 1px solid #F8F8F8;
  font-size: 12px;
  line-height: 18px;
  font-weight: 300;
  color: #606060;
  padding: 2.5px 11px;
  cursor: pointer;
`;

const ProfileTagList = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px
`;

const ProfileTag = styled.div`
  border-radius: 10px;
  background-color: #F8F8F8;
  color: #606060;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  padding: 2.5px 8px;
`;

const ProfileVisitedCount = styled.div`
  margin-top: 6px;
  display:inline-block;
  background-color: #F8F8F8;
  border-radius: 12px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: #606060;
  padding: 4.5px 7px;
`;

const VisitedCount = styled.span`
  font-weight: 600;
  color: #71C9B0;
`;

const ProfileFeedListWrapper = styled.div`
`;

