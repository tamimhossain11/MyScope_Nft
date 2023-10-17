import React from "react";
import { Img, Text } from "components";
import RegistrationForm from "Forms/RegistrationForm";


const RegisterpagePage = () => {
  
  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-start mx-auto p-[60px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-[123px] items-start justify-start max-w-[1800px] mx-auto pb-[63px] pr-[63px] md:px-5 rounded-[30px] w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[51%] md:w-full">
            <div className=" h-[960px] sm:h-[460px]  relative w-full">
              <Img
                className=" h-[960px] sm:h-[460px] m-auto object-cover rounded-[30px] w-full"
                src="images/img_rectangle66495.png"
                alt="rectangle66495"
              />
              <div className="absolute bg-black-900_19 flex flex-col h-full inset-[0] items-center justify-center md:px-40 sm:px-5 rounded-[30px]">
                <Img
                  className="h-[357px] md:h-auto my-[86px] object-cover"
                  src="images/img_myscpelogo1.png"
                  alt="myscpelogoOne"

                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[55px] w-[39%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtSFProBold40"
              >
                Create a New Account
              </Text>
              <Text
                className="mt-[15px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
                size="txtSFProMedium28"
              >
                Sign Up to Continue
              </Text>
              <div className="flex flex-col items-start justify-start mt-[54px] w-full">

                {/*Form starts from here */}

             <RegistrationForm/>
               
                
                {/*Form ends from here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterpagePage;
