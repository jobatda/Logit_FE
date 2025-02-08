import styled from 'styled-components';
import bookMark from '../../temp_assets/majesticons_bookmark-line.png';

export default function PostDetailFooter() {
  return (
      <PostDetailFooterContainer>
        <FooterWrapper>
            <FooterTopLine />
            <PostBookmark src={bookMark} />
            <PostJoin>신청하기</PostJoin>
        </FooterWrapper>
    </PostDetailFooterContainer>
  );
}

const PostDetailFooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    max-height: 80px;
    background-color: #FFFFFF;

    @media (min-width: 500px) {
        transform: translateX(-50%);
        left: 50%;
        width: 500px;
    }
`;
    
const FooterTopLine = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #606060;
    transform: scaleY(0.5); // 선 0.5px를 위해서 사용
`;

const FooterWrapper = styled.div`
    position: relative;
    padding: 14px 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`;

const PostBookmark = styled.img`
    max-width: 32px;
    max-height: 32px;
    cursor: pointer;
`;
    
const PostJoin = styled.button`
    width: 100%;
    height: 100%;
    padding: 16.5px 110px;
    border-radius: 15px;
    background-color: #71C9B0;
    color: #FFFFFF;
    font-size: 18px;
    line-height: 17px;
    fonst-weight: 700; // bold
    cursor: pointer;
`;