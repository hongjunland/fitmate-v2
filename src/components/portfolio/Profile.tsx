import styled from "@emotion/styled";
import { Icon, Typography } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";

export default function Profile() {
  return (
    <>
      <ImageWrapper>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/fitmate-v2-50236.appspot.com/o/default_profile.jpg?alt=media&token=e9ff6290-2031-4a6e-b2cc-fcab186da8c3"
          alt=""
        />
      </ImageWrapper>
      <ContentWrapper>
        <Typography variant="h3" textAlign="center">
          홍길동
        </Typography>
        <Typography variant="h5" textAlign="center">
          안녕하세요! 스타일리스트 홍길동입니다.
        </Typography>
      </ContentWrapper>
      <ButtonWrapper>
        <StarBorderIcon />
        <ChatBubbleOutlineIcon />
        <ShareIcon />
      </ButtonWrapper>
    </>
  );
}

const ImageWrapper = styled.div``;

const Image = styled.img`
  width: 100%;
  padding: 10%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 25%;
`;

const ContentWrapper = styled.div`
  padding: 0 10%;
  h3,
  h5 {
    font-family: "GangwonEdu_OTFBoldA";
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5%;
  svg {
    flex-grow: 1;
  }
`;
