import React from "react";

import { Button, Img, Input, Line, Radio, Text } from "components";

import { CloseSVG } from "../../assets/images";

const Page = () => {
  const [group1000010222value, setGroup1000010222value] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-start mx-auto p-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[117px] items-center justify-start max-w-[1530px] mb-[81px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
            <Img
              className="md:flex-1 h-[85px] sm:h-auto object-cover w-[8%] md:w-full"
              src="images/img_myscpelogo1.png"
              alt="myscpelogoOne"
            />
            <Input
              name="group1000010222"
              placeholder="Search"
              value={group1000010222value}
              onChange={(e) => setGroup1000010222value(e)}
              className="!placeholder:text-white-A700 !text-white-A700 p-0 text-left text-lg w-full"
              wrapClassName="flex md:flex-1 md:ml-[0] ml-[49px] md:mt-0 my-3 w-[21%] md:w-full"
              prefix={
                <Img
                  className="cursor-pointer mr-[5px] my-auto"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  fillColor="#ffffff"
                  className="cursor-pointer my-auto"
                  onClick={() => setGroup1000010222value("")}
                  style={{
                    visibility:
                      group1000010222value?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={29}
                  width={30}
                  viewBox="0 0 30 29"
                />
              }
              shape="round"
            ></Input>
            <div className="flex md:flex-1 md:flex-col flex-row gap-[45px] items-start justify-start md:ml-[0] ml-[100px] w-auto md:w-full">
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtSFProRegular20"
              >
                Home
              </Text>
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtSFProRegular20"
              >
                Pages
              </Text>
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtSFProRegular20"
              >
                Explore
              </Text>
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtSFProRegular20"
              >
                Resources
              </Text>
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtSFProRegular20"
              >
                Create
              </Text>
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtSFProRegular20"
              >
                NFT GAme
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row gap-5 items-center justify-between md:ml-[0] ml-[68px] w-[15%] md:w-full">
              <Button
                className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                color="white_A700_19"
                size="md"
                variant="fill"
              >
                <Img
                  className="h-[35px]"
                  src="images/img_materialsymbol_white_a700_1.svg"
                  alt="materialsymbol"
                />
              </Button>
              <div className="flex flex-col items-center justify-start w-[60px]">
                <Img
                  className="h-[59px] md:h-auto rounded-[50%] w-[60px]"
                  src="images/img_ellipse141.png"
                  alt="ellipse141"
                />
              </div>
              <Img
                className="h-[59px] w-[60px]"
                src="images/img_group1000009458_2.svg"
                alt="group1000009458"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-2/5 md:w-full">
            <div className="flex flex-col gap-3 items-center justify-start w-[48%] md:w-full">
              <div className="flex flex-row gap-[7px] items-start justify-between w-full">
                <Text
                  className="mb-[3px] md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                  size="txtSFProRegular38"
                >
                  Home
                </Text>
                <Radio
                  value="404Page"
                  className="font-semibold mt-[3px] md:text-4xl sm:text-[34px] text-[38px] text-deep_purple-A200 text-left"
                  inputClassName="bg-white-A700 h-3 mr-[5px] w-3"
                  checked={false}
                  name="404page"
                  label="404 Page"
                  id="404Page"
                ></Radio>
              </div>
              <Line className="bg-gradient2  h-[5px] w-[70%]" />
            </div>
            <div className="md:h-[330px] h-[421px] sm:h-[847px] mt-[31px] relative w-full">
              <div className="absolute flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-start mx-auto top-[0] w-[88%]">
                <Text
                  className="md:text-5xl text-[250px] text-white-A700"
                  size="txtSFProHeavy250"
                >
                  4
                </Text>
                <div className="h-[178px] sm:ml-[0] ml-[15px] relative w-[31%] sm:w-full">
                  <Img
                    className="h-[178px] m-auto object-cover w-full"
                    src="images/img_myscpelogo2.png"
                    alt="myscpelogoTwo"
                  />
                  <div className="absolute bg-deep_purple-A200_02 bottom-[24%] h-[66px] inset-x-[0] mx-auto w-[72%]"></div>
                </div>
                <Text
                  className="sm:ml-[0] ml-[15px] md:text-5xl text-[250px] text-white-A700"
                  size="txtSFProHeavy250"
                >
                  4
                </Text>
              </div>
              <div className="absolute bottom-[0] flex flex-col gap-2.5 inset-x-[0] items-center justify-start mx-auto w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 uppercase"
                  size="txtSFProSemibold48"
                >
                  Oops! Page is not found
                </Text>
                <Text
                  className="leading-[32.00px] text-[22px] text-center sm:text-lg text-white-A700 md:text-xl w-full"
                  size="txtSFProRegular22WhiteA700"
                >
                  Lorem ipsum dolor sit amet consectetur. Leo nascetur eu platea
                  integer proin eget nibh arcu.
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-bold min-w-[230px] mt-[60px] sm:text-2xl md:text-[26px] text-[28px] text-center"
              shape="round"
              color="deep_purple_A200"
              size="lg"
              variant="fill"
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
