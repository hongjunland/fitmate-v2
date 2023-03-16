interface Props {
  styleList: any;
}
export default function PortfolioStyleList({ styleList }: Props) {
  return (
    <>
      {styleList.map((style: any) => (
        <figure
          key={style.id}
          onClick={() => {
            console.log(style.id);
          }}
        >
          <img src={style.thumbnail} alt="없음" />
        </figure>
      ))}
    </>
  );
}
