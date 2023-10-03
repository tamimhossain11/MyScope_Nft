import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Line, Text } from "components";

const ConnectwalletpageModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[57%]"
      overlayClassName="bg-black-900_99 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-black-900 flex flex-col items-center justify-start mt-[33px] p-[55px] md:px-5 rounded-[30px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[99%] md:w-full">
            <div className="flex flex-col gap-4 items-start justify-start">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                size="txtSFProBold40WhiteA700"
              >
                Connect Your Wallet
              </Text>
              <Text
                className="capitalize leading-[36.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                size="txtSFProSemibold22WhiteA700"
              >
                <span className="text-white-A700 font-sfpro text-left font-normal">
                  <>
                    If you don&#39;t have a wallet, you can select a provider
                    and create one now{" "}
                  </>
                </span>
                <a
                  href="javascript:"
                  className="text-deep_purple-A200 font-sfpro text-left font-normal underline"
                >
                  Learn More
                </a>
              </Text>
            </div>
            <Img
              className="common-pointer h-[30px] md:mt-0 mt-1 rounded-[50%] w-[30px]"
              src="images/img_close.svg"
              alt="close"
              onClick={props.onRequestClose}
            />
          </div>
          <Line className="bg-white-A700 h-px mt-5 w-[99%]" />
          <div className="flex flex-col items-start justify-start mt-[39px] w-[99%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
              <div className="flex flex-row gap-5 items-center justify-start">
                <Img
                  className="h-10 w-10"
                  src="images/img_logosmetamaskicon.svg"
                  alt="logosmetamaskic"
                />
                <Text
                  className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtSFProSemibold28"
                >
                  Meta mask
                </Text>
              </div>
              <Text
                className="capitalize mb-1 mt-2 text-[22px] sm:text-lg text-white-A700 md:text-xl"
                size="txtSFProRegular22WhiteA700"
              >
                Popular
              </Text>
            </div>
            <div className="flex flex-row gap-5 items-center justify-start mt-10 w-[28%] md:w-full">
              <Img
                className="h-10 w-10"
                src="images/img_instagram.svg"
                alt="instagram"
              />
              <Text
                className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                size="txtSFProSemibold28"
              >
                Coinbase Wallet
              </Text>
            </div>
            <div className="flex flex-row gap-5 items-center justify-start mt-[37px] w-[26%] md:w-full">
              <Img className="h-6" src="images/img_reply.svg" alt="reply" />
              <Text
                className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                size="txtSFProSemibold28"
              >
                WalletConnect
              </Text>
            </div>
            <div className="flex flex-row gap-5 items-start justify-start mt-9 w-[16%] md:w-full">
              <Img
                className="h-[34px]"
                src="images/img_computer.svg"
                alt="computer"
              />
              <Text
                className="capitalize mt-0.5 sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                size="txtSFProSemibold28"
              >
                Ledger
              </Text>
            </div>
            <div className="flex flex-row gap-5 items-center justify-start mt-[38px] w-[18%] md:w-full">
              <Button
                className="flex h-10 items-center justify-center rounded-[50%] w-10"
                size="xs"
                variant="gradient"
                color="indigo_500_deep_purple_A400"
              >
                <Img
                  src="images/img_group1000010417.png"
                  alt="group1000010417"
                />
              </Button>
              <Text
                className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                size="txtSFProSemibold28"
              >
                Phantom
              </Text>
            </div>
            <div className="flex flex-row sm:gap-10 items-center justify-between mt-10 w-full">
              <div className="flex flex-row gap-5 items-end justify-start">
                <Img
                  className="h-11"
                  src="images/img_volume.svg"
                  alt="volume"
                />
                <Text
                  className="capitalize mb-[3px] mt-[7px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtSFProSemibold28"
                >
                  BitKeep
                </Text>
              </div>
              <Text
                className="capitalize text-[22px] sm:text-lg text-right text-white-A700 md:text-xl"
                size="txtSFProRegular22WhiteA700"
              >
                BNB CHAIN
              </Text>
            </div>
          </div>
          <Button
            className="cursor-pointer font-bold mb-1 min-w-[234px] mt-[60px] sm:text-2xl md:text-[26px] text-[28px] text-center"
            shape="round"
            color="deep_purple_A200"
            size="lg"
            variant="fill"
          >
            Show More
          </Button>
        </div>
      </div>
    </ModalProvider>
  );
};

export default ConnectwalletpageModal;
