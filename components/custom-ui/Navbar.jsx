// import logo from "../public/images/noisy-gradients.png"
"use client";
import logo from "../../public/images/noisy-gradients.png";
import Image from "next/image";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import userService from "../../app/api/service/userService";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [loginLoading, setLoginLoading] = useState(false);
  const [token, setToken] = useState("");
  const router = useRouter();
  const { toast } = useToast();
  useEffect(() => {
    const accessToken = Cookies.get("accessToken"); // Read cookie
    if (accessToken) {
      setToken(accessToken);
    }
  }, []);
  //   console.log(token);
  return (
    <div className=" mx-auto pb-10">
      <div className="w-full flex justify-between items-center">
        <Image src={logo} alt="logo" className="w-5 h-5" />
        {/* {token} */}
        {token ? (
          <Button
            onClick={async () => {
              try {
                setLoginLoading("true");
                await userService.logout();
                setLoginLoading(false);
                router.push("/");
                await window.location.reload();
                toast({
                  title: "Logged Out Successfully",
                  description: "You have been logged out successfully.",
                  type: "success",
                });
              } catch (error) {
                console.error(error);
              }
            }}
            variant="link"
            className="hover:underline underline-offset-4"
          >
            {loginLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Logout
          </Button>
        ) : (
          <Button
            onClick={() => {
              router.push("/login");
            }}
            variant="link"
            className="hover:underline underline-offset-4"
          >
            Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
