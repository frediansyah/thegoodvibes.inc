import React from "react";

import { Text, Line, Button, Img } from "components";
import { useGoogleLogin } from "@react-oauth/google";

const SignUpOnePage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex flex-col font-taviraj items-center justify-start mx-[auto] w-[100%]"
        style={{ backgroundImage: "url('images/img_signupone.png')" }}
      >
        <div className="bg-black_900_99 flex flex-col gap-[181px] md:gap-[40px] sm:gap-[40px] items-center justify-start p-[59px] sm:px-[20px] md:px-[40px] w-[100%]">
          <Text
            className="font-bold mt-[11px] text-left text-white_A700 w-[auto]"
            as="h6"
            variant="h6"
          >
            GoodVibes
          </Text>
          <div className="flex flex-col font-roboto gap-[108px] md:gap-[40px] sm:gap-[40px] items-center justify-start mb-[225px] md:w-[100%] sm:w-[100%] w-[30%]">
            <div className="flex md:h-[348px] sm:h-[348px] h-[350px] justify-end relative w-[100%]">
              <div className="flex sm:flex-col flex-row gap-[23px] h-[100%] items-center justify-between mb-[19px] mt-[auto] mx-[auto] sm:w-[100%] w-[528px]">
                <Line className="bg-white_A700 h-[2px] w-[auto]" />
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  variant="body1"
                >
                  OR
                </Text>
                <Line className="bg-white_A700 h-[2px] w-[auto]" />
              </div>
              <div className="absolute flex flex-col gap-[40px] h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                <div className="flex flex-col gap-[4px] items-start justify-start sm:w-[100%] w-[528px]">
                  <div className="flex flex-col items-start justify-start pb-[8px] pr-[8px] w-[100%]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body5"
                    >
                      Your email
                    </Text>
                  </div>
                  <div className="border border-solid border-white_A700 h-[56px] rounded-radius28 w-[100%]"></div>
                </div>
                <div className="flex flex-col gap-[8px] items-end justify-start pb-[5px] w-[100%]">
                  <div className="flex flex-col gap-[4px] items-start justify-start sm:w-[100%] w-[528px]">
                    <div className="flex flex-col items-start justify-start pb-[8px] pr-[8px] w-[100%]">
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body5"
                      >
                        Email
                      </Text>
                    </div>
                    <div className="border border-solid border-white_A700 h-[56px] rounded-radius28 w-[100%]"></div>
                  </div>
                  <a
                    href={"javascript:"}
                    className="font-normal not-italic text-[16px] text-left text-white_A700 underline w-[auto]"
                    rel="noreferrer"
                  >
                    Forget your password
                  </a>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[18px] rounded-radius32 w-[100%]">
                  <div className="flex flex-col items-center justify-center w-[auto]">
                    <Text
                      className="text-gray_900 text-left w-[auto]"
                      variant="body2"
                    >
                      Sign up
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[40px] items-center justify-start w-[100%]">
              <div className="flex flex-col items-center justify-center w-[auto]">
                <div className="flex flex-col gap-[2px] items-center justify-center w-[auto]">
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Log in
                  </Text>
                  <div className="flex flex-col font-poppins items-start justify-start p-[2px] w-[auto]">
                    <a
                      href={"javascript:"}
                      className="font-normal not-italic text-[16px] text-gray_700 text-left underline w-[auto]"
                      rel="noreferrer"
                    >
                      Don’t have an ccount? Sign up{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-start sm:w-[100%] w-[auto]">
                <Button
                  className="flex items-center justify-center text-center"
                  leftIcon={
                    <Img
                      src="images/img_facebook.svg"
                      className="mr-[16px] text-center"
                      alt="facebook"
                    />
                  }
                  shape="CircleBorder36"
                  size="xl"
                  variant="OutlineWhiteA700"
                >
                  <div className="bg-transparent cursor-pointer font-semibold leading-[normal] sm:text-[18px] md:text-[20px] text-[22px] text-gray_901 text-left">
                    Log in with Facebook
                  </div>
                </Button>
                <Button
                  className="flex items-center justify-center text-center"
                  onClick={googleSignIn}
                  leftIcon={
                    <Img
                      src="images/img_google.svg"
                      className="mr-[16px] text-center"
                      alt="google"
                    />
                  }
                  shape="CircleBorder36"
                  size="xl"
                  variant="OutlineWhiteA700"
                >
                  <div className="common-pointer bg-transparent cursor-pointer font-semibold leading-[normal] sm:text-[18px] md:text-[20px] text-[22px] text-gray_901 text-left">
                    Log in with Google
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpOnePage;
