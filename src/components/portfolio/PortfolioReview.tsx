import styled from "@emotion/styled";
import { reviewList } from "components/dummy/portfolio";

export default function PortfolioReview() {
  return (
    <Container>
      <StyleListWrapper>
        <ReviewList reviewList={reviewList} />
      </StyleListWrapper>
    </Container>
  );
}

const Container = styled.div``;

const StyleListWrapper = styled.div`
  /* display: flex; */
`;

interface Props {
  reviewList: any;
}
export function ReviewList({ reviewList }: Props) {
  return (
    <>
      {reviewList.map((review: any) => (
        <div
          key={review.id}
          onClick={() => {
            console.log(review.id);
          }}
        >
          <div>{review.nickname}</div>
          <div>{review.content}</div>
          <div>{review.authorid}</div>
          <div>{review.stylistid}</div>
          <br/>
        </div>
      ))}
    </>
  );
}
