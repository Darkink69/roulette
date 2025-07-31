import { Link } from "@/components/Link/Link.tsx";

const Footer = () => {
  return (
    <div className="flex justify-between">
      <Link to="/">
        <div className="m-1">
          <img
            src="https://s3.twcstorage.ru/c6bae09a-a5938890-9b68-453c-9c54-76c439a70d3e/Roulette/main.png"
            alt="main"
          />
        </div>
      </Link>
      <Link to="/tasks">
        <div className="m-1">
          <img
            src="https://s3.twcstorage.ru/c6bae09a-a5938890-9b68-453c-9c54-76c439a70d3e/Roulette/tasks.png"
            alt="tasks"
          />
        </div>
      </Link>
      <Link to="/ton-connect">
        <div className="m-1">
          <img
            src="https://s3.twcstorage.ru/c6bae09a-a5938890-9b68-453c-9c54-76c439a70d3e/Roulette/wallet.png"
            alt="wallet"
          />
        </div>
      </Link>
      <Link to="/reff">
        <div className="m-1">
          <img
            src="https://s3.twcstorage.ru/c6bae09a-a5938890-9b68-453c-9c54-76c439a70d3e/Roulette/reff.png"
            alt="reff"
          />
        </div>
      </Link>
      <Link to="/roulette">
        <div className="m-1">
          <img
            src="https://s3.twcstorage.ru/c6bae09a-a5938890-9b68-453c-9c54-76c439a70d3e/Roulette/roulette.png"
            alt="roulette"
          />
        </div>
      </Link>
      <Link to="/faq">
        <div className="m-1">
          <img
            src="https://s3.twcstorage.ru/c6bae09a-a5938890-9b68-453c-9c54-76c439a70d3e/Roulette/faq.png"
            alt="faq"
          />
        </div>
      </Link>
    </div>
  );
};

export default Footer;
