import React from "react";
import {  Img, Text } from "components";
import ForgetPasswordForm from "Forms/ForgetPasswordForm";




const ForgetPasswordpagePage = () => {


  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-start mx-auto p-[60px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[1800px] mx-auto md:px-5 rounded-[30px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[93%] md:w-full">
            <div className="flex flex-col items-center justify-start w-[53%] md:w-full">
            <div className=" h-[960px] sm:h-[460px]  relative w-full">
              <Img
                className=" h-[960px] sm:h-[460px] m-auto object-cover rounded-[30px] w-full"
                src="images/img_rectangle66495.png"
                alt="rectangle66495"
              />
              <div className="absolute bg-black-900_19 flex flex-col h-full inset-[0] items-center justify-center md:px-10 sm:px-5 rounded-[30px]">
                <Img
                  className="h-[357px] md:h-auto my-[86px] object-cover"
                  src="images/img_myscpelogo1.png"
                  alt="myscpelogoOne"
                />
              </div>
            </div>
            </div>
            <div className="flex flex-col gap-[57px] items-center justify-start w-[41%] md:w-full">
              <div className="flex flex-col gap-[9px] items-center justify-start">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                  size="txtSFProBold40"
                >
                  Forget Password
                </Text>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
                  size="txtSFProMedium28"
                >
                  Enter Your Email
                </Text>
              </div>
              
              <div className="flex flex-col gap-[47px] items-center justify-start w-full">
              <ForgetPasswordForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPasswordpagePage;
