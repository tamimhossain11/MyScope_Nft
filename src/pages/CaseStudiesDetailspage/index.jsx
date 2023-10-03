import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Radio,
  RadioGroup,
  Text,
} from "components";

import { CloseSVG } from "../../assets/images";

const CaseStudiesDetailspagePage = () => {
  const [group1000010222value, setGroup1000010222value] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-start mx-auto py-10 w-full">
        <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start mb-[25px] w-full">
          <div className="flex flex-col items-start justify-start max-w-[1530px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
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
                        group1000010222value?.length <= 0
                          ? "hidden"
                          : "visible",
                    }}
                    height={29}
                    width={30}
                    viewBox="0 0 30 29"
                  />
                }
                shape="round"
              ></Input>
              <Text
                className="md:ml-[0] ml-[100px] md:mt-0 mt-[31px] text-white-A700 text-xl"
                size="txtSFProRegular20"
              >
                Home
              </Text>
              <div className="flex md:flex-1 flex-col gap-2.5 items-center justify-start md:ml-[0] ml-[45px] md:mt-0 mt-8 w-[4%] md:w-full">
                <Text
                  className="text-white-A700 text-xl"
                  size="txtSFProSemibold20"
                >
                  Pages
                </Text>
                <Img
                  className="h-[5px]"
                  src="images/img_line75.svg"
                  alt="lineSeventyFive"
                />
              </div>
              <Text
                className="md:ml-[0] ml-[45px] md:mt-0 mt-8 text-white-A700 text-xl"
                size="txtSFProRegular20"
              >
                Explore
              </Text>
              <Text
                className="md:ml-[0] ml-[45px] md:mt-0 mt-[31px] text-white-A700 text-xl"
                size="txtSFProRegular20"
              >
                Resources
              </Text>
              <Text
                className="md:ml-[0] ml-[45px] md:mt-0 mt-[30px] text-white-A700 text-xl"
                size="txtSFProRegular20"
              >
                Create
              </Text>
              <Text
                className="md:ml-[0] ml-[45px] md:mt-0 mt-[30px] text-white-A700 text-xl"
                size="txtSFProRegular20"
              >
                NFT GAme
              </Text>
              <div className="flex md:flex-1 flex-row gap-5 items-center justify-between md:ml-[0] ml-[65px] md:mt-0 mt-[13px] w-[15%] md:w-full">
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
                  src="images/img_group1000009458_9.svg"
                  alt="group1000009458"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center justify-start md:ml-[0] ml-[537px] mt-[119px] w-[30%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-full">
                <Text
                  className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                  size="txtSFProRegular38"
                >
                  Page
                </Text>
                <Radio
                  value="SingleCaseStudies"
                  className="font-semibold md:text-4xl sm:text-[34px] text-[38px] text-deep_purple-A200 text-left"
                  inputClassName="bg-white-A700 h-3 mr-[5px] w-3"
                  checked={false}
                  name="singlecasestudiOne"
                  label="Single Case Studies"
                  id="SingleCaseStudies"
                ></Radio>
              </div>
              <Line className="bg-gradient2  h-[5px] w-[65%]" />
            </div>
            <div className="flex flex-col font-sfprodisplay md:gap-10 gap-20 items-center justify-start mt-[115px] w-full">
              <Text
                className="leading-[60.00px] text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 w-[57%] sm:w-full"
                size="txtSFProDisplayBold48"
              >
                Which Cryptocurrency Has Highest Potential In Future Growth?
              </Text>
              <Img
                className="h-[800px] md:h-auto object-cover rounded-tl-[30px] rounded-tr-[30px] w-full"
                src="images/img_rectangle66601_800x1530.png"
                alt="rectangle66601"
              />
            </div>
            <div className="flex md:flex-col flex-row font-sfprodisplay md:gap-10 items-start justify-between mt-[75px] w-full">
              <div className="flex md:flex-1 flex-col gap-[27px] items-start justify-start w-[21%] md:w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                    size="txtSFProDisplayBold38"
                  >
                    Industry
                  </Text>
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtSFProDisplayRegular22"
                  >
                    Cryptocurency, Digital
                  </Text>
                </div>
                <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                  <Text
                    className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                    size="txtSFProDisplayBold38"
                  >
                    Services Provided
                  </Text>
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtSFProDisplayRegular22"
                  >
                    Content Marketing, PPC
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                    size="txtSFProDisplayBold38"
                  >
                    Area Served
                  </Text>
                  <Text
                    className="mt-[3px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtSFProDisplayRegular22"
                  >
                    Worldwide
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                  size="txtSFProDisplayBold38"
                >
                  The Challenge
                </Text>
                <Text
                  className="leading-[36.00px] mt-4 text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                  size="txtSFProDisplayRegular22"
                >
                  As You May Already Know, There Are An Infinite Number Of
                  Things You Can Test On Your Site To Help You Increase Sales.
                </Text>
                <Text
                  className="leading-[36.00px] mt-5 text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                  size="txtSFProDisplayRegular22"
                >
                  <>
                    From Layout To Copy To Design, There Are Limitless
                    Combinations Of Changes That May Improve Your
                    Visitor-To-Sale Conversion Rate. But What&#39;s
                    &quot;Enough&quot; When You&#39;re Just Starting Out? What
                    Elements Should You Focus On Testing Before Rolling Out Your
                    Traffic Campaign? Changes That May Improve Your
                    Visitor-To-Sale Conversion Rate. But What&#39;s
                    &quot;Enough&quot; When You&#39;re Just Starting Out? What
                    Elements Should You Focus On Testing Before Rolling Out Your
                    Traffic Campaign?
                  </>
                </Text>
                <Text
                  className="leading-[36.00px] mt-14 text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                  size="txtSFProDisplayRegular22"
                >
                  Enthusiasm, Commitment And A Long List Of Satisfied Clients
                  Wasn’t Enough For Reborn To Achieve The Growth They Wanted. To
                  Get Ahead Of The Competition, They Partnered With OMG On A
                  Digital Solution Engineered For Market Success.
                </Text>
              </div>
            </div>
            <div className="flex flex-col font-sfprodisplay gap-4 items-start justify-start md:ml-[0] ml-[740px] mt-[71px] w-[52%] md:w-full">
              <Text
                className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                size="txtSFProDisplayBold38"
              >
                Key Problems
              </Text>
              <RadioGroup
                className="flex flex-col w-[91%]"
                name="radiogroupwantingtoboost"
              >
                <Radio
                  value="WantingToBoostDomainAuthorityToDominateFierceMarketCompetition"
                  className="text-[22px] text-left sm:text-lg text-white-A700 md:text-xl"
                  inputClassName="bg-white-A700 h-2.5 mr-[5px] w-2.5"
                  checked={false}
                  name="radiogroupwantingtoboost"
                  label="Wanting To Boost Domain Authority To Dominate Fierce Market Competition"
                  id="WantingToBoostDomainAuthorityToDominateFierceMarketCompetition"
                ></Radio>
                <Radio
                  value="CreateASiteStructureThatWillEnhanceSEO"
                  className="mr-[267px] mt-[13px] text-[22px] text-left sm:text-lg text-white-A700 md:text-xl"
                  inputClassName="bg-white-A700 h-2.5 mr-[5px] w-2.5"
                  checked={false}
                  name="radiogroupwantingtoboost"
                  label="Create A Site Structure That Will Enhance SEO"
                  id="CreateASiteStructureThatWillEnhanceSEO"
                ></Radio>
              </RadioGroup>
              <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start w-full">
                <div className="bg-white-A700 h-2.5 mb-[50px] md:mt-0 mt-3 rounded-[50%] w-2.5"></div>
                <Text
                  className="sm:flex-1 leading-[36.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-[98%] sm:w-full"
                  size="txtSFProDisplayRegular22"
                >
                  Onsite Optimisation To Make Their Website Appeal To Both
                  Search Engines And Users
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-sfprodisplay items-center justify-start overflow-auto w-full">
            <div className="bg-white-A700_19 flex flex-row items-center justify-start p-[99px] md:px-10 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row gap-[21px] items-start justify-start mb-[11px] ml-[66px] w-[91%]">
                <div className="md:h-[498px] h-[569px] relative w-[49%] md:w-full">
                  <div className="flex flex-col md:gap-10 gap-[349px] h-full justify-start m-auto w-full">
                    <div className="border-[10px] border-solid border-white-A700_6c h-[140px] md:ml-[0] ml-[609px] rounded-[50%] w-[140px]"></div>
                    <div className="bg-white-A700_6c h-20 mr-[669px] rounded-[50%] w-20"></div>
                  </div>
                  <Img
                    className="absolute h-[498px] inset-[0] justify-center m-auto object-cover rounded-[30px] w-[91%]"
                    src="images/img_rectangle66602.png"
                    alt="rectangle66602"
                  />
                </div>
                <div className="flex flex-col items-start justify-start md:mt-0 mt-[35px] w-[51%] md:w-full">
                  <Text
                    className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                    size="txtSFProDisplayBold38"
                  >
                    Our Approach
                  </Text>
                  <Text
                    className="leading-[36.00px] mt-[17px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                    size="txtSFProDisplayRegular22"
                  >
                    SEO Was About Achieving Significant Uplifts In Rankings,
                    Traffic, And Revenue. They Were Ambitious In Becoming The
                    Market Leader Online For Advertising Agencies. To Achieve
                    Their Version Of Success We Customised A 24 Month Campaign.
                    The Core Strategy Leveraged:
                  </Text>
                  <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start mt-10 w-full">
                    <div className="bg-white-A700 h-2.5 mb-[50px] md:mt-0 mt-3 rounded-[50%] w-2.5"></div>
                    <Text
                      className="sm:flex-1 leading-[36.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-[98%] sm:w-full"
                      size="txtSFProDisplayRegular22"
                    >
                      Optimising The Website And Content Structure To Improve
                      The SEO Ranking Of Their Website
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start mt-5 w-full">
                    <div className="bg-white-A700 h-2.5 mb-[50px] md:mt-0 mt-3 rounded-[50%] w-2.5"></div>
                    <Text
                      className="sm:flex-1 leading-[36.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-[98%] sm:w-full"
                      size="txtSFProDisplayRegular22"
                    >
                      Cutting Edge Technical Onsite Optimisation To Streamline
                      Search And Website Performance
                    </Text>
                  </div>
                  <Radio
                    value="GetMoreHighAuthorityAndTrafficDrivingLinksByIncreasingDomainAuthority"
                    className="mt-[26px] text-[22px] text-left sm:text-lg text-white-A700 md:text-xl"
                    inputClassName="bg-white-A700 h-2.5 mr-[5px] w-2.5"
                    checked={false}
                    name="getmorehighauthOne"
                    label="Get More High Authority And Traffic Driving Links By Increasing Domain Authority"
                    id="GetMoreHighAuthorityAndTrafficDrivingLinksByIncreasingDomainAuthority"
                  ></Radio>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[91px] items-start justify-start max-w-[1530px] mt-[120px] mx-auto md:px-5 w-full">
              <div className="flex flex-col gap-5 items-start justify-start md:mt-0 mt-[102px]">
                <Text
                  className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                  size="txtSFProDisplayBold38"
                >
                  Results
                </Text>
                <Text
                  className="leading-[36.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                  size="txtSFProDisplayRegular22"
                >
                  As You May Already Know, There Are An Infinite Number Of
                  Things You Can Test On Your Site To Help You Increase Sales.
                  SEO Was About Achieving Significant Uplifts In Rankings,
                  Traffic, And Revenue. They Were Ambitious In Becoming The
                  Market Leader Online For Advertising Agencies.
                </Text>
                <Text
                  className="leading-[36.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                  size="txtSFProDisplayRegular22"
                >
                  <>
                    As You May Already Know, There Are An Infinite Number Of
                    Things You Can Test On Your Site To Help You Increase Sales.
                    From Layout To Copy To Design, There Are Limitless
                    Combinations Of Changes That May Improve Your
                    Visitor-To-Sale Conversion Rate. But What&#39;s
                    &quot;Enough&quot; When You&#39;re Just Starting Out? What
                    Elements Should You Focus On Testing Before Rolling Out Your
                    Traffic Campaign?
                  </>
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[43%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:gap-5 gap-[60px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="bg-white-A700_19 border border-deep_purple-A200_19 border-solid flex flex-1 flex-col items-center justify-start p-[68px] md:px-10 sm:px-5 rounded-[15px] w-full">
                      <div className="flex flex-col gap-[9px] items-start justify-start mb-2.5 mt-1">
                        <Text
                          className="md:text-5xl text-6xl text-deep_purple-A200"
                          size="txtSFProDisplayMedium60"
                        >
                          30%
                        </Text>
                        <Text
                          className="leading-[26.00px] text-lg text-white-A700 w-full"
                          size="txtSFProDisplayRegular18"
                        >
                          Lower Cost Per Acquisition
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700_19 border border-deep_purple-A200_19 border-solid flex flex-1 flex-col items-center justify-start p-[69px] md:px-10 sm:px-5 rounded-[15px] w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start mb-[38px] mt-[3px]">
                        <Text
                          className="md:text-5xl text-6xl text-deep_purple-A200"
                          size="txtSFProDisplayMedium60"
                        >
                          86%
                        </Text>
                        <Text
                          className="text-lg text-white-A700"
                          size="txtSFProDisplayRegular18"
                        >
                          More Inbound Leads
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700_19 border border-deep_purple-A200_19 border-solid flex flex-1 flex-col items-center justify-start p-[69px] md:px-10 sm:px-5 rounded-[15px] w-full">
                      <div className="flex flex-col gap-3 items-center justify-start mb-9 mt-[3px]">
                        <Text
                          className="md:text-5xl text-6xl text-deep_purple-A200"
                          size="txtSFProDisplayMedium60"
                        >
                          150%
                        </Text>
                        <Text
                          className="text-lg text-white-A700"
                          size="txtSFProDisplayRegular18"
                        >
                          More Organic Traffic
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700_19 border border-deep_purple-A200_19 border-solid flex flex-1 flex-col items-center justify-start p-[68px] md:px-10 sm:px-5 rounded-[15px] w-full">
                      <div className="flex flex-col gap-[9px] items-start justify-start mb-2.5 mt-1">
                        <Text
                          className="md:text-5xl text-6xl text-deep_purple-A200"
                          size="txtSFProDisplayMedium60"
                        >
                          12%
                        </Text>
                        <Text
                          className="leading-[26.00px] text-lg text-white-A700 w-full"
                          size="txtSFProDisplayRegular18"
                        >
                          Decrease In Bounce Rate
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:h-[1365px] md:h-[1522px] h-[949px] mt-[120px] md:px-5 relative w-full">
              <div className="absolute bg-white-A700_19 flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto p-[111px] md:px-10 sm:px-5 w-[73%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[557px] items-center justify-start mb-2 w-[33%] md:w-full">
                  <div className="flex flex-col gap-[27px] items-center justify-start w-full">
                    <Text
                      className="md:text-4xl sm:text-[34px] text-[38px] text-center text-white-A700"
                      size="txtSFProDisplayBold38"
                    >
                      Satisfied Customers
                    </Text>
                    <Text
                      className="text-[22px] text-center sm:text-lg text-white-A700 md:text-xl"
                      size="txtSFProDisplayRegular22"
                    >
                      10,000k+ Customers Those Who Already Tried Our Services.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-10 items-center justify-center w-[59%] md:w-full">
                    <Img
                      className="h-[60px] w-[60px]"
                      src="images/img_group1000008676.svg"
                      alt="group1000008676"
                    />
                    <PagerIndicator
                      className="flex h-3.5 w-[127px]"
                      count={4}
                      activeCss="inline-block cursor-pointer h-3.5 bg-deep_purple-A200 w-10 rounded-[7px]"
                      activeIndex={1}
                      inactiveCss="inline-block cursor-pointer rounded-[50%] h-3.5 bg-white-A700 w-3.5"
                      selectedWrapperCss="inline-block mx-[7.50px]"
                      unselectedWrapperCss="inline-block mx-[7.50px]"
                    />
                    <Img
                      className="h-[60px] w-[60px]"
                      src="images/img_group1000008677.svg"
                      alt="group1000008677"
                    />
                  </div>
                </div>
              </div>
              <List
                className="absolute sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 inset-y-[0] my-auto right-[0] w-[93%]"
                orientation="horizontal"
              >
                <div className="bg-deep_purple-A200_19 flex flex-col items-center justify-start sm:ml-[0] p-[30px] sm:px-5 rounded-[20px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between my-2.5 w-[99%] md:w-full">
                    <div className="md:h-[300px] h-[315px] relative w-[44%] md:w-full">
                      <Img
                        className="absolute bottom-[0] h-[300px] left-[0] object-cover w-[300px]"
                        src="images/img_subtract.png"
                        alt="subtract"
                      />
                      <div className="absolute bg-deep_purple-A200 flex flex-col h-20 items-center justify-start p-5 right-[0] rounded-[50%] top-[0] w-20">
                        <Img
                          className="h-[31px] my-1"
                          src="images/img_vector.svg"
                          alt="vector"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[29px] items-start justify-start w-1/2 md:w-full">
                      <div className="flex flex-col gap-5 items-start justify-start w-full">
                        <Img
                          className="h-[22px]"
                          src="images/img_group1000010381.svg"
                          alt="group1000010381"
                        />
                        <Text
                          className="leading-[30.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                          size="txtSFProDisplayRegular22"
                        >
                          <>
                            MyScope is one of the most exciting, if you&#39;re
                            interested in shaping a new business model for
                            creators, this is the team to join.
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[9px] items-start justify-start">
                        <Text
                          className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                          size="txtSFProDisplayBold26"
                        >
                          MyScope is one
                        </Text>
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtSFProDisplayRegular20"
                        >
                          Web Designer
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-deep_purple-A200_19 flex flex-col items-center justify-start sm:ml-[0] p-[30px] sm:px-5 rounded-[20px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between my-2.5 w-[99%] md:w-full">
                    <div className="md:h-[300px] h-[315px] relative w-[44%] md:w-full">
                      <Img
                        className="absolute bottom-[0] h-[300px] left-[0] object-cover w-[300px]"
                        src="images/img_subtract.png"
                        alt="subtract"
                      />
                      <div className="absolute bg-deep_purple-A200 flex flex-col h-20 items-center justify-start p-5 right-[0] rounded-[50%] top-[0] w-20">
                        <Img
                          className="h-[31px] my-1"
                          src="images/img_vector.svg"
                          alt="vector"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[29px] items-start justify-start w-1/2 md:w-full">
                      <div className="flex flex-col gap-5 items-start justify-start w-full">
                        <Img
                          className="h-[22px]"
                          src="images/img_group1000010381.svg"
                          alt="group1000010381"
                        />
                        <Text
                          className="leading-[30.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                          size="txtSFProDisplayRegular22"
                        >
                          <>
                            MyScope is one of the most exciting, if you&#39;re
                            interested in shaping a new business model for
                            creators, this is the team to join.
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[9px] items-start justify-start">
                        <Text
                          className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                          size="txtSFProDisplayBold26"
                        >
                          MyScope is one
                        </Text>
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtSFProDisplayRegular20"
                        >
                          Web Designer
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-deep_purple-A200_19 flex flex-col font-rubik items-center justify-start sm:ml-[0] p-[30px] sm:px-5 rounded-[20px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between my-2.5 w-[99%] md:w-full">
                    <div className="md:h-[300px] h-[315px] relative w-[44%] md:w-full">
                      <Img
                        className="absolute bottom-[0] h-[300px] left-[0] object-cover w-[300px]"
                        src="images/img_subtract.png"
                        alt="subtract"
                      />
                      <div className="absolute bg-deep_purple-A200 flex flex-col h-20 items-center justify-start p-5 right-[0] rounded-[50%] top-[0] w-20">
                        <Img
                          className="h-[31px] my-1"
                          src="images/img_vector.svg"
                          alt="vector"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[30px] items-start justify-start w-1/2 md:w-full">
                      <div className="flex flex-col gap-5 items-start justify-start w-full">
                        <Img
                          className="h-[22px]"
                          src="images/img_group1000010381.svg"
                          alt="group1000010381"
                        />
                        <Text
                          className="leading-[30.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                          size="txtRubikRomanRegular22"
                        >
                          <>
                            MyScope is one of the most exciting, if you&#39;re
                            interested in shaping a new business model for
                            creators, this is the team to join.
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[15px] items-start justify-start">
                        <Text
                          className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                          size="txtRubikBold26"
                        >
                          MyScope is one
                        </Text>
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                          size="txtRubikRomanRegular22"
                        >
                          Web Designer
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col md:gap-10 gap-[75px] items-center justify-start max-w-[1530px] mt-[116px] mx-auto md:px-5 w-full">
              <Text
                className="md:text-4xl sm:text-[34px] text-[38px] text-center text-white-A700"
                size="txtSFProDisplayBold38"
              >
                Related Case Studies
              </Text>
              <List
                className="sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700_63 flex flex-1 flex-col gap-[30px] justify-start pb-[25px] rounded-[30px] w-full">
                  <Img
                    className="h-[630px] sm:h-auto object-cover rounded-tl-[30px] rounded-tr-[30px] w-full"
                    src="images/img_rectangle66601_1.png"
                    alt="rectangle66601"
                  />
                  <div className="flex flex-col gap-3.5 items-start justify-start md:ml-[0] ml-[30px]">
                    <Text
                      className="leading-[38.00px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
                      size="txtSFProDisplayBold28"
                    >
                      UI/UX Designers Achieves A 31% Increase In Organic Traffic
                    </Text>
                    <Text
                      className="text-[22px] text-deep_purple-A200 sm:text-lg md:text-xl"
                      size="txtSFProDisplayMedium22"
                    >
                      View Cass Study
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700_63 flex flex-1 flex-col gap-[30px] justify-start pb-[25px] rounded-[30px] w-full">
                  <Img
                    className="h-[630px] sm:h-auto object-cover rounded-tl-[30px] rounded-tr-[30px] w-full"
                    src="images/img_rectangle66601_2.png"
                    alt="rectangle66601"
                  />
                  <div className="flex flex-col gap-3.5 items-start justify-start md:ml-[0] ml-[30px]">
                    <Text
                      className="leading-[38.00px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
                      size="txtSFProDisplayBold28"
                    >
                      New Social Media Platforms Marketers Should Watch In 2022
                    </Text>
                    <Text
                      className="text-[22px] text-deep_purple-A200 sm:text-lg md:text-xl"
                      size="txtSFProDisplayMedium22"
                    >
                      View Cass Study
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col font-sfpro items-center justify-start max-w-[1530px] mt-[120px] mx-auto md:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col md:gap-10 gap-[63px] items-start justify-start w-[29%] md:w-full">
                    <div className="flex flex-row font-ebrima items-start justify-start w-1/4 md:w-full">
                      <Text
                        className="mt-[35px] text-deep_purple-A200 text-xl"
                        size="txtEbrimaBold20"
                      >
                        My
                      </Text>
                      <div className="font-alata md:h-[72px] h-[86px] ml-0.5 relative w-[70%]">
                        <Img
                          className="absolute h-[25px] inset-x-[0] mx-auto top-[0]"
                          src="images/img_camera.svg"
                          alt="camera"
                        />
                        <div
                          className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[73px] inset-x-[0] items-center justify-start mx-auto p-2.5 w-full"
                          style={{
                            backgroundImage: "url('images/img_group237.svg')",
                          }}
                        >
                          <Text
                            className="my-3 text-white-A700 text-xl"
                            size="txtAlataRegular20"
                          >
                            Scope
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="leading-[38.00px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                      size="txtSFProRegular24"
                    >
                      Lorem ipsum dolor sit amet consectetur. Leo nascetur eu
                      platea integer proin eget nibh arcu. Eget enim
                      pellentesque
                    </Text>
                  </div>
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between md:mt-0 mt-[43px] w-[64%] md:w-full">
                    <div className="flex flex-col gap-[22px] items-center justify-start w-[17%] md:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProSemibold28"
                      >
                        Marketplace
                      </Text>
                      <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtSFProRegular24"
                        >
                          All NFT’s
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtSFProRegular24"
                        >
                          Art
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtSFProRegular24"
                        >
                          Music
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtSFProRegular24"
                        >
                          Domain Names
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtSFProRegular24"
                        >
                          Collections
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtSFProRegular24"
                        >
                          Virtual World
                        </Text>
                      </div>
                    </div>
                    <List
                      className="sm:flex-col flex-row md:gap-10 gap-60 grid sm:grid-cols-1 grid-cols-2 w-3/5 md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-6 items-start justify-start mb-[45px] sm:ml-[0] w-full">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                          size="txtSFProSemibold28"
                        >
                          Company
                        </Text>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            Explore
                          </Text>
                          <Text
                            className="mt-[13px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            About
                          </Text>
                          <Text
                            className="mt-3.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            Contact Us
                          </Text>
                          <Text
                            className="mt-[17px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            Our Blog
                          </Text>
                          <Text
                            className="mt-[13px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            FAQ
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[22px] items-start justify-start sm:ml-[0] w-full">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                          size="txtSFProSemibold28"
                        >
                          My Account
                        </Text>
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            Authors
                          </Text>
                          <Text
                            className="mt-3.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            Collections
                          </Text>
                          <Text
                            className="mt-3.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            Authors Profile
                          </Text>
                          <Text
                            className="mt-[15px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            Create Items
                          </Text>
                          <Text
                            className="capitalize mt-[15px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            trams and condition
                          </Text>
                          <Text
                            className="capitalize mt-[17px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            privacy policy
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
                <Line className="bg-white-A700 h-px mt-[34px] w-full" />
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[19px] w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtSFProRegular24"
                  >
                    Copyright © 2023, MyScope All Rights Reserved.
                  </Text>
                  <div className="flex md:flex-1 flex-row font-mulish gap-[35px] items-center justify-between w-[24%] md:w-full">
                    <Text
                      className="capitalize text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtMulishSemiBold22"
                    >
                      follow us :
                    </Text>
                    <div className="flex flex-row gap-5 items-center justify-between w-3/5">
                      <Button
                        className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                        color="deep_purple_A200"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-[34px]"
                          src="images/img_phinstagramlogo.svg"
                          alt="phinstagramlogo"
                        />
                      </Button>
                      <Button
                        className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-[34px]"
                          src="images/img_icbaselinetiktok.svg"
                          alt="icbaselinetikto"
                        />
                      </Button>
                      <div className="bg-white-A700 flex flex-col h-[60px] items-center justify-end p-3 rounded-[50%] w-[60px]">
                        <div className="flex flex-col h-[34px] items-center justify-start w-[34px]">
                          <Img
                            className="h-[34px] w-[34px]"
                            src="images/img_mditwitter.svg"
                            alt="mditwitter"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesDetailspagePage;
