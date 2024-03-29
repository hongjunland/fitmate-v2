import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import HangerImg from 'assets/hanger.png';
export default function Footer() {
  return (
    <Container>
      <Grid container>
        <Grid item md={3} justifyContent={"center"} display={"flex"}>
          <FooterImg src={HangerImg} alt="hanger" />
        </Grid>
        <Grid item md={7}>
          <CopyrightBox>
            <Typography variant={"h5"} color={"black"}>
              ⓒFitmate
            </Typography>
            <Typography variant={"inherit"}>
              본 사이트의 아이디어, 디자인을 포함한 콘텐츠는 저작권법의 보호를
              받는지는 잘 모르겠습니다.
            </Typography>
            <Typography variant={"inherit"}>아무튼 퍼가지 마세요..</Typography>
          </CopyrightBox>
        </Grid>
        <Grid item md={2} alignItems={"center"} display={"flex"}>
          <IconBox>
            <InstagramIcon />
            <YouTubeIcon />
            <TwitterIcon />
            <FacebookIcon />
          </IconBox>
        </Grid>
      </Grid>
    </Container>
  );
}

const Container = styled.footer`
  width: 100%;
  bottom: 0px;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  position: relative;
  background-color: #cbc7cf;
  color: #6d6d6d;
  z-index: 1;
  overflow: hidden;
`;
const FooterImg = styled.img`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 9rem;
`;
const CopyrightBox = styled.div`
  font-family: "LeferiPoint-WhiteObliqueA";
  background-color: #cbc7cf;
  padding-top: 2rem;
  span {
    font-size: 1rem;
  }
  p {
    font-size: 0.8rem;
  }
`;
const IconBox = styled.div`
  svg {
    width: 2rem;
  }
`;
