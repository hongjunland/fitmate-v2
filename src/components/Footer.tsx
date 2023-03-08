import styled from "@emotion/styled";
import { Grid, Icon, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
export default function Footer() {
  return (
    <Container>
      <Grid container>
        <Grid item md={3}>
          <div>
            <FooterImg src="assets/hanger.png" alt="hanger" />
          </div>
        </Grid>
        <Grid item md={7}>
          <CopyrightBox>
            <Typography variant={"h5"} color={"black"}>
              ⓒFitmate{" "}
            </Typography>
            <p>
              본 사이트의 아이디어, 디자인을 포함한 콘텐츠는 저작권법의 보호를
              받는지는 잘 모르겠습니다.
            </p>
            <p>아무튼 퍼가지 마세요..</p>
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
  position: absolute;
  background-color: #cbc7cf;
  align-content: center;
  font-family: "LeferiPoint-WhiteObliqueA";
  color: #6d6d6d;
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
