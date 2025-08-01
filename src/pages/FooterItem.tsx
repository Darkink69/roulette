import { Link } from "@/components/Link/Link.tsx";
import { useLocation } from "react-router-dom";

const FooterItem = ({ data }: any) => {
  const location = useLocation();
  return (
    <Link to={data.link}>
      <div className="m-1">
        <img
          src={location.pathname === data.link ? data.imgActive : data.img}
          alt={data.alt}
        />
      </div>
    </Link>
  );
};

export default FooterItem;
