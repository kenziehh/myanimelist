import { useState } from "react";
import Button from "./Button";
import Separator from "./Separator";
import { useMediaQuery } from "react-responsive";

interface AuthNavButtonProps {
  className?: string;
}

const AuthNavButton: React.FC<AuthNavButtonProps> = ({ className = "" }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const handleAuth = () => {
    if (isLogin) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  };
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className={className}>
      {isLogin ? (
        <div
          className={`flex${
            isMobile ? " flex-col items-start" : " items-center"
          } gap-2`}
        >
          <Button variant="ghost" onClick={handleAuth}>
            SignUp
          </Button>
          <Separator type={isMobile ? "horizontal" : "vertical"} />
          <Button variant="ghost" onClick={handleAuth}>
            SignIn
          </Button>
        </div>
      ) : (
        <Button variant="ghost" onClick={handleAuth}>
          Logout
        </Button>
      )}
    </div>
  );
};

export default AuthNavButton;
