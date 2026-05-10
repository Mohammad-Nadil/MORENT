import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageLoader from "./PageLoader";

const RouteLoader = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [location.pathname]);

  return <PageLoader loading={loading} />;
};

export default RouteLoader;
