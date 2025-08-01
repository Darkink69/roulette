import FooterItem from "./FooterItem";

const Footer = () => {
  const urlImg =
    "https://s3.twcstorage.ru/c6bae09a-a5938890-9b68-453c-9c54-76c439a70d3e/Roulette/";

  const data = [
    {
      img: urlImg + "main.png",
      imgActive: urlImg + "main2.png",
      link: "/",
      alt: "main",
    },
    {
      img: urlImg + "tasks.png",
      imgActive: urlImg + "tasks2.png",
      link: "/tasks",
      alt: "tasks",
    },
    {
      img: urlImg + "wallet.png",
      imgActive: urlImg + "wallet2.png",
      link: "/ton-connect",
      alt: "wallet",
    },
    {
      img: urlImg + "reff.png",
      imgActive: urlImg + "reff2.png",
      link: "/reff",
      alt: "reff",
    },
    {
      img: urlImg + "roulette.png",
      imgActive: urlImg + "roulette2.png",
      link: "/roulette",
      alt: "roulette",
    },
    {
      img: urlImg + "faq.png",
      imgActive: urlImg + "faq2.png",
      link: "/faq",
      alt: "faq",
    },
  ];

  const item = Array.from({ length: data.length }, (_, index) => (
    <FooterItem key={index} data={data[index]} />
  ));
  return (
    <>
      <div className="flex justify-between">{item}</div>
    </>
  );
};

export default Footer;
