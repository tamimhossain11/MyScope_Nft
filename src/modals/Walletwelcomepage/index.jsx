import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Text } from "components";

const WalletwelcomepageModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[57%]"
      overlayClassName="bg-black-900_99 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-black-900 flex flex-col gap-[59px] items-center justify-start p-[70px] md:px-5 rounded-[30px] w-full">
          <Img
            className="h-[222px] md:h-auto object-cover w-[30%]"
            src="images/img_myscpelogo1.png"
            alt="myscpelogoOne"
          />
          <div className="flex flex-col items-center justify-start w-[76%] md:w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
              size="txtSFProBold40WhiteA700"
            >
              Welcome to MyScope
            </Text>
            <Text
              className="capitalize leading-[43.00px] mt-5 sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700 w-full"
              size="txtSFProSemibold28"
            >
              <span className="text-white-A700 font-sfpro font-normal">
                By{" "}
              </span>
              <span className="text-white-A700 font-sfpro lowercase font-normal">
                connecting your wallet and using
              </span>
              <span className="text-white-A700 font-sfpro font-normal">
                {" "}
                MyScope,{" "}
              </span>
              <span className="text-white-A700 font-sfpro lowercase font-normal">
                you agree
              </span>
              <span className="text-white-A700 font-sfpro font-normal"> </span>
              <span className="text-white-A700 font-sfpro lowercase font-normal">
                to our
              </span>
              <span className="text-white-A700 font-sfpro font-normal"> </span>
              <span className="text-deep_purple-A200 font-sfpro font-semibold">
                terms of service{" "}
              </span>
              <span className="text-white-A700 font-sfpro font-normal">
                and{" "}
              </span>
              <span className="text-deep_purple-A200 font-sfpro font-semibold">
                privacy policy
              </span>
              <span className="text-deep_purple-A200 font-sfpro font-normal">
                .
              </span>
            </Text>
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start mt-10 w-[90%] md:w-full">
              <Button
                className="cursor-pointer font-bold min-w-[300px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                shape="round"
                color="deep_purple_A200"
                size="lg"
                variant="outline"
              >
                Cancel
              </Button>
              <Button
                className="cursor-pointer font-bold min-w-[300px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                shape="round"
                color="deep_purple_A200"
                size="lg"
                variant="fill"
              >
                Accept and sign
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default WalletwelcomepageModal;
