import React from "react";

import { Button, Img, Input, Line, Radio, Text } from "components";

import { CloseSVG } from "../../assets/images";

const TermsofservicepagePage = () => {
  const [group1000010222value, setGroup1000010222value] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-end mx-auto p-[29px] sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1530px] mt-2.5 mx-auto md:px-5 w-full">
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
            <Text
              className="md:ml-[0] ml-[100px] text-white-A700 text-xl"
              size="txtSFProRegular20"
            >
              Home
            </Text>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[45px]">
              <Text
                className="text-white-A700 text-xl"
                size="txtSFProRegular20"
              >
                Pages
              </Text>
            </div>
            <Text
              className="ml-12 md:ml-[0] text-white-A700 text-xl"
              size="txtSFProRegular20"
            >
              Explore
            </Text>
            <Text
              className="md:ml-[0] ml-[45px] text-white-A700 text-xl"
              size="txtSFProRegular20"
            >
              Resources
            </Text>
            <Text
              className="md:ml-[0] ml-[45px] text-white-A700 text-xl"
              size="txtSFProRegular20"
            >
              Create
            </Text>
            <Text
              className="md:ml-[0] ml-[45px] text-white-A700 text-xl"
              size="txtSFProRegular20"
            >
              NFT GAme
            </Text>
            <div className="flex md:flex-1 flex-row gap-5 items-center justify-between md:ml-[0] ml-[65px] w-[15%] md:w-full">
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
                src="images/img_group1000009458_36.svg"
                alt="group1000009458"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center justify-start mt-[116px] w-[28%] md:w-full">
            <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-between w-full">
              <Text
                className="sm:mt-0 mt-[3px] md:text-4xl sm:text-[34px] text-[38px] text-right text-white-A700"
                size="txtSFProRegular38"
              >
                Pages
              </Text>
              <Radio
                value="Termsofservice"
                className="font-bold font-sfprodisplay mb-[3px] md:text-4xl sm:text-[34px] text-[38px] text-deep_purple-A200 text-left"
                inputClassName="bg-white-A700 h-3 mr-[5px] w-3"
                checked={false}
                name="termsofservice"
                label="Terms of service"
                id="Termsofservice"
              ></Radio>
            </div>
            <Line className="bg-gradient2  h-[5px] w-[74%]" />
          </div>
          <div className="flex flex-col font-rubik gap-[21px] items-start justify-start mt-[105px] w-full">
            <Text
              className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
              size="txtRubikRomanBold38"
            >
              Introduction
            </Text>
            <Text
              className="leading-[36.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
              size="txtRubikRomanRegular22"
            >
              <>
                These Terms Of Service (“Terms”) Govern Your Access To And Use
                Of The Xhibiter Website(S), Our APIs, Mobile App (The “App”),
                And Any Other Software, Tools, Features, Or Functionalities
                Provided On Or In Connection With Our Services; Including
                Without Limitation Using Our Services To View, Explore, And
                Create NFTs And Use Our Tools, At Your Own Discretion, To
                Connect Directly With Others To Purchase, Sell, Or Transfer NFTs
                On Public Blockchains (Collectively, The “Service”). “NFT” In
                These Terms Means A Non-Fungible Token Or Similar Digital Item
                Implemented On A Blockchain (Such As The Ethereum Blockchain),
                Which Uses Smart Contracts To Link To Or Otherwise Be Associated
                With Certain Content Or Data. For Purposes Of These Terms,
                “User”, “You”, And “Your” Means You As The User Of The Service.
                If You Use The Service On Behalf Of A Company Or Other Entity
                Then “You” Includes You And That Entity, And You Represent And
                Warrant That (A) You Are An Authorized Representative Of The
                Entity With The Authority To Bind The Entity To These Terms, And
                (B) You Agree To These Terms On The Entity&#39;s Behalf.
              </>
            </Text>
            <Text
              className="leading-[36.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
              size="txtRubikRomanRegular22"
            >
              PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY CONTAIN
              IMPORTANT INFORMATION AND AFFECT YOUR LEGAL RIGHTS. AS OUTLINED IN
              SECTION 16 BELOW, THEY INCLUDE A MANDATORY ARBITRATION AGREEMENT
              AND ClassName ACTION WAIVER WHICH (WITH LIMITED EXCEPTIONS)
              REQUIRE ANY DISPUTES BETWEEN US TO BE RESOLVED THROUGH INDIVIDUAL
              ARBITRATION RATHER THAN BY A JUDGE OR JURY IN COURT.
            </Text>
            <Text
              className="leading-[36.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
              size="txtRubikRomanRegular22"
            >
              BY CLICKING TO ACCEPT AND/OR USING OUR SERVICE, YOU AGREE TO BE
              BOUND BY THESE TERMS AND ALL OF THE TERMS INCORPORATED HEREIN BY
              REFERENCE. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT ACCESS
              OR USE THE SERVICE.
            </Text>
            <Text
              className="leading-[36.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
              size="txtRubikRomanRegular22"
            >
              Xhibiter Is Not A Wallet Provider, Exchange, Broker, Financial
              Institution, Or Creditor. Xhibiter Provides A Peer-To-Peer Web3
              Service That Helps Users Discover And Directly Interact With Each
              Other And NFTs Available On Public Blockchains. We Do Not Have
              Custody Or Control Over The NFTs Or Blockchains You Are
              Interacting With And We Do Not Execute Or Effectuate Purchases,
              Transfers, Or Sales Of NFTs. To Use Our Service, You Must Use A
              Third-Party Wallet Which Allows You To Engage In Transactions On
              Blockchains.
            </Text>
            <Text
              className="leading-[36.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
              size="txtRubikRomanRegular22"
            >
              Because We Have A Growing Number Of Services, We Sometimes Need To
              Provide Additional Terms For Specific Services (And Such Services
              Are Deemed Part Of The “Service” Hereunder And Shall Also Be
              Subject To These Terms). Those Additional Terms And Conditions,
              Which Are Available With The Relevant Service, Then Become Part Of
              Your Agreement With Us If You Use Those Services. In The Event Of
              A Conflict Between These Terms And Any Additional Applicable Terms
              We May Provide For A Specific Service, Such Additional Terms Shall
              Control For That Specific Service.
            </Text>
          </div>
          <div className="flex flex-col font-rubik gap-[18px] items-start justify-start mt-[73px] w-full">
            <Text
              className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
              size="txtRubikRomanBold38"
            >
              Ownership
            </Text>
            <Text
              className="leading-[36.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
              size="txtRubikRomanRegular22"
            >
              The Service, Including Its “Look And Feel” (E.G., Text, Graphics,
              Images, Logos, Page Headers, Button Icons, And Scripts),
              Proprietary Content, Information And Other Materials, And All
              Content And Other Materials Contained Therein, Including, Without
              Limitation, The Xhibiter Logo And All Designs, Text, Graphics,
              Pictures, Data, Software, Sound Files, Other Files, And The
              Selection And Arrangement Thereof Are The Proprietary Property Of
              Xhibiter Or Our Affiliates, Licensors, Or Users, As Applicable,
              And You Agree Not To Take Any Action(S) Inconsistent With Such
              Ownership Interests. We And Our Affiliates, Licensors, And Users,
              As Applicable, Reserve All Rights In Connection With The Service
              And Its Content, Including, Without Limitation, The Exclusive
              Right To Create Derivative Works.
            </Text>
          </div>
          <div className="flex flex-col font-rubik gap-[21px] items-start justify-start mt-[70px] w-full">
            <Text
              className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
              size="txtRubikRomanBold38"
            >
              License To Access And Use Our Service And Content
            </Text>
            <Text
              className="leading-[36.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
              size="txtRubikRomanRegular22"
            >
              You Are Hereby Granted A Limited, Nonexclusive, Nontransferable,
              Nonsublicensable, And Personal License To Access And Use The
              Service Provided, However, That Such License Is Subject To Your
              Compliance With These Terms. If Any Software, Content, Or Other
              Materials Owned By, Controlled By, Or Licensed To Us Are
              Distributed Or Made Available To You As Part Of Your Use Of The
              Service, We Hereby Grant You A Non-Commercial, Personal,
              Non-Assignable, Non-Sublicensable, Non-Transferrable, And
              Non-Exclusive Right And License To Access And Display Such
              Software, Content, And Materials Provided To You As Part Of The
              Service (And Right To Download A Single Copy Of The App Onto Your
              Applicable Equipment Or Device), In Each Case For The Sole Purpose
              Of Enabling You To Use The Service As Permitted By These Terms,
              Provided That Your License In Any Content Linked To Or Associated
              With Any NFTs Is Solely As Set Forth By The Applicable Seller Or
              Creator Of Such NFT.
            </Text>
          </div>
          <div className="flex flex-col font-rubik items-start justify-start mt-[74px] w-full">
            <Text
              className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
              size="txtRubikRomanBold38"
            >
              Intellectual Property Rights
            </Text>
            <Text
              className="leading-[36.00px] mt-[17px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
              size="txtRubikRomanRegular22"
            >
              You Are Solely Responsible For Your Use Of The Service And For Any
              Information You Provide, Including Compliance With Applicable
              Laws, Rules, And Regulations, As Well As These Terms, Including
              The User Conduct Requirements Outlined Above.
            </Text>
            <Text
              className="leading-[36.00px] mt-5 text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
              size="txtRubikRomanRegular22"
            >
              <>
                By Using The Service In Conjunction With Creating, Submitting,
                Posting, Promoting, Or Displaying Content, Or By Complying With
                OpenSea&#39;s Metadata Standards In Your Metadata API Responses,
                You Grant Us A Worldwide, Non-Exclusive, Sublicensable,
                Royalty-Free License To Use, Copy, Modify, And Display Any
                Content, Including But Not Limited To Text, Materials, Images,
                Files, Communications, Comments, Feedback, Suggestions, Ideas,
                Concepts, Questions, Data, Or Otherwise, That You Submit Or Post
                On Or Through The Service For Our Current And Future Business
                Purposes, Including To Provide, Promote, And Improve The
                Service. This Includes Any Digital File, Art, Or Other Material
                Linked To Or Associated With Any NFTs That Are Displayed On The
                Service.
              </>
            </Text>
          </div>
          <div className="flex flex-col font-rubik gap-[21px] items-start justify-start mt-[70px] w-full">
            <Text
              className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
              size="txtRubikRomanBold38"
            >
              Miscellaneous
            </Text>
            <Text
              className="leading-[36.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
              size="txtRubikRomanRegular22"
            >
              These Terms Constitute The Entire Agreement Between You And
              Xhibiter Relating To Your Access To And Use Of The Service. These
              Terms, And Any Rights And Licenses Granted Hereunder, May Not Be
              Transferred Or Assigned By You Without The Prior Written Consent
              Of Xhibiter, And Xhibiter’s Failure To Assert Any Right Or
              Provision Under These Terms Shall Not Constitute A Waiver Of Such
              Right Or Provision. No Waiver By Either Party Of Any Breach Or
              Default Hereunder Shall Be Deemed To Be A Waiver Of Any Preceding
              Or Subsequent Breach Or Default. The Section Headings Used Herein
              Are For Reference Only And Shall Not Be Read To Have Any Legal
              Effect.
            </Text>
            <Text
              className="leading-[36.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
              size="txtRubikRomanRegular22"
            >
              The Service Is Operated By Us In The United States. Those Who
              Choose To Access The Service From Locations Outside The United
              States Do So At Their Own Initiative And Are Responsible For
              Compliance With Applicable Local Laws. You And Xhibiter Agree That
              The United Nations Convention On Contracts For The International
              Sale Of Goods Will Not Apply To The Interpretation Or Construction
              Of These Terms.
            </Text>
            <Text
              className="leading-[36.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
              size="txtRubikRomanRegular22"
            >
              Except As Otherwise Provided Herein, These Terms Are Intended
              Solely For The Benefit Of The Parties And Are Not Intended To
              Confer Third-Party Beneficiary Rights Upon Any Other Person Or
              Entity.
            </Text>
          </div>
          <div className="flex flex-col font-sfpro items-center justify-start mt-[119px] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start w-[29%] md:w-full">
                    <Img
                      className="h-[85px] md:h-auto object-cover w-1/4"
                      src="images/img_myscpelogo1.png"
                      alt="myscpelogoTwo"
                    />
                    <Text
                      className="leading-[38.00px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                      size="txtSFProRegular24"
                    >
                      Lorem ipsum dolor sit amet consectetur. Leo nascetur eu
                      platea integer proin eget nibh arcu. Eget enim
                      pellentesque
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[22px] items-center justify-start md:ml-[0] ml-[120px] w-[11%] md:w-full">
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
                  <div className="flex md:flex-1 flex-col gap-6 items-start justify-start ml-60 md:ml-[0] w-[8%] md:w-full">
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
                      <a
                        href="javascript:"
                        className="mt-3.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      >
                        <Text size="txtSFProRegular24">Contact Us</Text>
                      </a>
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
                  <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[220px] w-[16%] md:w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProSemibold28"
                    >
                      My Account
                    </Text>
                    <Text
                      className="mt-[22px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
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
                    <div className="flex flex-row gap-2.5 items-center justify-start mt-3.5 w-full">
                      <div className="bg-deep_purple-A200 h-2.5 my-[9px] rounded-[50%] w-2.5"></div>
                      <Text
                        className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtSFProRegular24"
                      >
                        trams and condition
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="bg-white-A700 h-px mt-9 w-full" />
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

export default TermsofservicepagePage;
