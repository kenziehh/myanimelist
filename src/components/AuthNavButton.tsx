import { useState } from "react";
import Button from "./Button";
import Separator from "./Separator";

const AuthNavButton = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const handleAuth = () => {
    if (isLogin) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  };
  return (
    <div>
      {isLogin ? (
        <div className="flex items-center gap-2">
          <Button variant="ghost" onClick={handleAuth}>
            SignUp
          </Button>
          <Separator type="vertical" />
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
