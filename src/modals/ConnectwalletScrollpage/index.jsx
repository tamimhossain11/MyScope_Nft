import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Line, Text } from "components";

const ConnectwalletScrollpageModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[57%]"
      overlayClassName="bg-black-900_99 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-black-900 flex flex-col items-end justify-start mt-[31px] pl-[60px] md:px-5 rounded-[20px] w-full">
          <div className="flex md:flex-col flex-row gap-10 items-center justify-end w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[95%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
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
                        If you don&#39;t have a wallet, you can select a
                        provider and create one now{" "}
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
              <Line className="bg-white-A700 h-px mt-5 w-full" />
              <div className="flex flex-row sm:gap-10 items-end justify-between mt-[39px] w-full">
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
              <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start mt-10 w-full">
                <Img
                  className="h-11"
                  src="images/img_volume.svg"
                  alt="volume"
                />
                <Text
                  className="capitalize mb-[3px] ml-5 sm:ml-[0] sm:mt-0 mt-[7px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtSFProSemibold28"
                >
                  BitKeep
                </Text>
                <Text
                  className="capitalize sm:ml-[0] ml-[683px] sm:mt-0 my-2 text-[22px] sm:text-lg text-right text-white-A700 md:text-xl"
                  size="txtSFProRegular22WhiteA700"
                >
                  BNB CHAIN
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-10 w-full">
                <Img
                  className="h-10 md:h-auto object-cover w-10"
                  src="images/img_unnamed.png"
                  alt="unnamed"
                />
                <Text
                  className="capitalize ml-5 md:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtSFProSemibold28"
                >
                  Core
                </Text>
                <Text
                  className="capitalize md:ml-[0] ml-[725px] text-[22px] sm:text-lg text-right text-white-A700 md:text-xl"
                  size="txtSFProRegular22WhiteA700"
                >
                  AVALANCE
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-10 w-full">
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_barney.png"
                  alt="barney"
                />
                <Text
                  className="capitalize ml-5 md:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtSFProSemibold28"
                >
                  Glow
                </Text>
                <Text
                  className="capitalize md:ml-[0] ml-[744px] text-[22px] sm:text-lg text-right text-white-A700 md:text-xl"
                  size="txtSFProRegular22WhiteA700"
                >
                  SOLANA
                </Text>
              </div>
              <div className="flex flex-row gap-5 items-center justify-start mt-10 w-[19%] md:w-full">
                <Img
                  className="h-10 md:h-auto object-cover rounded-[50%] w-10"
                  src="images/img_images1.png"
                  alt="imagesOne"
                />
                <Text
                  className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtSFProSemibold28"
                >
                  Fortmatic
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[39px] w-full">
                <Img
                  className="sm:flex-1 h-[37px] md:h-auto object-cover w-[5%] sm:w-full"
                  src="images/img_kaikas.png"
                  alt="kaikas"
                />
                <Text
                  className="capitalize ml-5 sm:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtSFProSemibold28"
                >
                  Kaikas
                </Text>
                <Text
                  className="capitalize sm:ml-[0] ml-[731px] text-[22px] sm:text-lg text-right text-white-A700 md:text-xl"
                  size="txtSFProRegular22WhiteA700"
                >
                  ALAYTN
                </Text>
              </div>
              <div className="flex flex-row gap-5 items-center justify-start mt-10 w-[14%] md:w-full">
                <Img
                  className="h-10 md:h-auto object-cover w-10"
                  src="images/img_bitskialternative.png"
                  alt="bitskialternati"
                />
                <Text
                  className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtSFProSemibold28"
                >
                  Bitski
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-10 w-full">
                <Img
                  className="h-10 md:h-auto object-cover w-10"
                  src="images/img_solflare.png"
                  alt="solflare"
                />
                <Text
                  className="capitalize ml-5 md:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtSFProSemibold28"
                >
                  Solflatre
                </Text>
                <Text
                  className="capitalize md:ml-[0] ml-[705px] text-[22px] sm:text-lg text-right text-white-A700 md:text-xl"
                  size="txtSFProRegular22WhiteA700"
                >
                  SOLANA
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start mt-10 w-full">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <div className="flex flex-col h-10 items-center justify-start w-10">
                    <Img
                      className="h-10 md:h-auto object-cover w-10"
                      src="images/img_vector_40x40.png"
                      alt="vector"
                    />
                  </div>
                </div>
                <Text
                  className="capitalize ml-5 md:ml-[0] md:mt-0 mt-[5px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtSFProSemibold28"
                >
                  OperaTouch
                </Text>
                <Text
                  className="capitalize md:ml-[0] ml-[605px] md:mt-0 my-1.5 text-[22px] sm:text-lg text-right text-white-A700 md:text-xl"
                  size="txtSFProRegular22WhiteA700"
                >
                  MOBILE ONLY
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-10 w-full">
                <Img
                  className="h-10 md:h-auto object-cover w-10"
                  src="images/img_trustalternative.png"
                  alt="trustalternativ"
                />
                <Text
                  className="capitalize ml-5 md:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtSFProSemibold28"
                >
                  Trust
                </Text>
                <Text
                  className="capitalize md:ml-[0] ml-[691px] text-[22px] sm:text-lg text-right text-white-A700 md:text-xl"
                  size="txtSFProRegular22WhiteA700"
                >
                  MOBILE ONLY
                </Text>
              </div>
              <Button
                className="cursor-pointer font-bold min-w-[234px] md:ml-[0] ml-[361px] mt-[60px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                shape="round"
                color="deep_purple_A200"
                size="lg"
                variant="fill"
              >
                Show Less
              </Button>
            </div>
            <div className="bg-gray-400_04 flex md:flex-1 flex-col items-center justify-start rounded-br-[20px] rounded-tr-[20px] w-[2%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start p-1 rounded-tr-[20px] w-full">
                <Img
                  className="h-2.5 w-2.5"
                  src="images/img_maskgroup_black_900.svg"
                  alt="maskgroup"
                />
              </div>
              <Line className="bg-white-A700 h-10 mt-2.5 rounded-[3px] w-1.5" />
              <Button
                className="flex items-center justify-center mt-[1424px] rounded-tr-[20px] w-5"
                color="deep_purple_A200"
                size="xs"
                variant="fill"
              >
                <Img
                  className="h-2.5"
                  src="images/img_maskgroup_white_a700.svg"
                  alt="maskgroup_One"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default ConnectwalletScrollpageModal;
