import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { EffectCoverflow, Navigation } from "swiper/core";

import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  Text,
} from "components";
import Navbar from "components/Navbar";
import HomeScrollCards from "components/HomeScrollCards";

SwiperCore.use([EffectCoverflow, Navigation]);

const HomepagePage = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    const newIndex = currentCardIndex + 1;

    if (newIndex < 7) { // Adjust to the total number of cards
      setCurrentCardIndex(newIndex);
    }
  };

  const handlePrevCard = () => {
    const newIndex = currentCardIndex - 1;

    if (newIndex >= 0) {
      setCurrentCardIndex(newIndex);
    }
  };



  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-start justify-start mx-auto py-10 w-full">
        <div className="flex flex-col items-center justify-start mb-[11px] md:px-5 w-full">
          <Navbar />
          <div className="mt-[149px] overflow-auto overflow-x-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
              <Text
                className="leading-[90.00px] md:text-5xl text-[65px] text-center text-white-A700"
                size="txtSFProHeavy65"
              >
                <>
                  Discover Top Collections & Sell <br />
                  Creative NFTs
                </>
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10  w-full">
              <div className="mt-[149px] overflow-auto-full">
              <Swiper
              style={{width:"2200x",}}
                  effect="coverflow"
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={7}
                  spaceBetween={20}
                  coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                  }}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  onSlideChange={(swiper) => {
                    setCurrentCardIndex(swiper.activeIndex);
                  }}
                >
                  {Array.from({ length: 7 }).map((_, index) => (
                    <SwiperSlide key={index} className={`scroll-card`}>
                      {/* Render HomeScrollCards component */}
                      <HomeScrollCards isActive={index === currentCardIndex} />
                      
                    </SwiperSlide>
                  ))}
                </Swiper>

            </div>
            </div>
              <div className="flex flex-row gap-10 items-center justify-center w-[16%] md:w-full">
              <Img
                className="h-[60px] w-[60px]"
                src="images/img_group1000008676.svg"
                alt="group1000008676"
                onClick={handlePrevCard}
              />
              <PagerIndicator
                className="flex h-2.5 w-[100px]"
                count={7} // Adjust the number of cards
                currentCardIndex={currentCardIndex}
                setCurrentCardIndex={setCurrentCardIndex}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-[10px] bg-gray-500_75 w-[10px]"
                activeCss="inline-block cursor-pointer rounded-[20px] h-[10px] bg-deep_purple-500"
              />
              <Img
                className="h-[60px] w-[60px]"
                src="images/img_group1000008677.svg"
                alt="group1000008677"
                onClick={handleNextCard}
              />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-5 items-start justify-end mt-[124px] w-[35%] md:w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-center text-shadow-ts text-white-A700"
              size="txtSFProSemibold48"
            >
              Top Collations Over
            </Text>
            <div className="flex flex-row items-center justify-evenly w-[38%] md:w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-deep_purple-A200"
                size="txtSFProSemibold48DeeppurpleA200"
              >
                last7 days
              </Text>
              <Img
                className="h-[35px] w-[35px]"
                src="images/img_materialsymbol_deep_purple_a200.svg"
                alt="materialsymbol_One"
              />
            </div>
          </div>
          <Line className="bg-gradient2  h-[5px] mt-2.5 w-[22%]" />
          <div className="flex flex-col items-center justify-start mt-[73px] w-[77%] md:w-full">
            <List
              className="flex flex-col gap-[15px] items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-center justify-between my-0 w-full">
                <div className="flex md:flex-1 md:flex-col flex-row gap-[30px] items-center justify-between w-[67%] md:w-full">
                  <div className="bg-deep_purple-A200 flex sm:flex-col flex-row gap-[30px] items-center justify-start p-2.5 rounded-[15px] w-[49%] md:w-full">
                    <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
                      <Img
                        className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
                        src="images/img_rectangle66496.png"
                        alt="rectangle66496"
                      />
                      <Text
                        className="absolute bg-black-900 border border-solid border-white-A700 flex h-max inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                        size="txtSFProRegular10"
                      >
                        16
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[13px] items-start justify-start">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProSemibold28"
                      >
                        Top Collectors Over
                      </Text>
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProRegular28"
                      >
                        45, 678, 098 ETH
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700_19 flex sm:flex-col flex-row gap-[30px] items-center justify-start p-2.5 rounded-[15px] w-[49%] md:w-full">
                    <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
                      <Img
                        className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
                        src="images/img_rectangle66496_120x120.png"
                        alt="rectangle66496_One"
                      />
                      <Text
                        className="absolute bg-black-900 border border-solid border-white-A700 flex h-max inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                        size="txtSFProRegular10"
                      >
                        16
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[13px] items-start justify-start">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProSemibold28"
                      >
                        Top Collectors Over
                      </Text>
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProRegular28"
                      >
                        45, 678, 098 ETH
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700_19 flex md:flex-1 sm:flex-col flex-row gap-[30px] items-center justify-start p-2.5 rounded-[15px] w-[33%] md:w-full">
                  <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
                    <Img
                      className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
                      src="images/img_rectangle66496_1.png"
                      alt="rectangle66496_Two"
                    />
                    <Text
                      className="absolute bg-black-900 border border-solid border-white-A700 flex h-max inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                      size="txtSFProRegular10"
                    >
                      16
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[13px] items-start justify-start">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProSemibold28"
                    >
                      Top Collectors Over
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProRegular28"
                    >
                      45, 678, 098 ETH
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-[5px] bg-gradient2  w-[29%]" />
              <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-center justify-between my-0 w-full">
                <div className="flex md:flex-1 md:flex-col flex-row gap-[30px] items-center justify-between w-[67%] md:w-full">
                  <div className="bg-white-A700_19 flex sm:flex-col flex-row gap-[30px] items-center justify-start p-2.5 rounded-[15px] w-[49%] md:w-full">
                    <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
                      <Img
                        className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
                        src="images/img_rectangle66496_2.png"
                        alt="rectangle66496"
                      />
                      <Text
                        className="absolute bg-black-900 border border-solid border-white-A700 flex h-max inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                        size="txtSFProRegular10"
                      >
                        16
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[13px] items-start justify-start">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProSemibold28"
                      >
                        Top Collectors Over
                      </Text>
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProRegular28"
                      >
                        45, 678, 098 ETH
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700_19 flex sm:flex-col flex-row gap-[30px] items-center justify-start p-2.5 rounded-[15px] w-[49%] md:w-full">
                    <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
                      <Img
                        className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
                        src="images/img_rectangle66496_3.png"
                        alt="rectangle66496_One"
                      />
                      <Text
                        className="absolute bg-black-900 border border-solid border-white-A700 flex h-max inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                        size="txtSFProRegular10"
                      >
                        16
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[13px] items-start justify-start">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProSemibold28"
                      >
                        Top Collectors Over
                      </Text>
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProRegular28"
                      >
                        45, 678, 098 ETH
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700_19 flex md:flex-1 sm:flex-col flex-row gap-[30px] items-center justify-start p-2.5 rounded-[15px] w-[33%] md:w-full">
                  <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
                    <Img
                      className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
                      src="images/img_rectangle66496_4.png"
                      alt="rectangle66496_Two"
                    />
                    <Text
                      className="absolute bg-black-900 border border-solid border-white-A700 flex h-max inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                      size="txtSFProRegular10"
                    >
                      16
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[13px] items-start justify-start">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProSemibold28"
                    >
                      Top Collectors Over
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProRegular28"
                    >
                      45, 678, 098 ETH
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-[5px] bg-gradient2  w-[29%]" />
              <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-center justify-between my-0 w-full">
                <div className="flex md:flex-1 md:flex-col flex-row gap-[30px] items-center justify-between w-[67%] md:w-full">
                  <div className="bg-white-A700_19 flex sm:flex-col flex-row gap-[30px] items-center justify-start p-2.5 rounded-[15px] w-[49%] md:w-full">
                    <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
                      <Img
                        className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
                        src="images/img_rectangle66496_5.png"
                        alt="rectangle66496"
                      />
                      <Text
                        className="absolute bg-black-900 border border-solid border-white-A700 flex h-max inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                        size="txtSFProRegular10"
                      >
                        16
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[13px] items-start justify-start">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProSemibold28"
                      >
                        Top Collectors Over
                      </Text>
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProRegular28"
                      >
                        45, 678, 098 ETH
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700_19 flex sm:flex-col flex-row gap-[30px] items-center justify-start p-2.5 rounded-[15px] w-[49%] md:w-full">
                    <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
                      <Img
                        className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
                        src="images/img_rectangle66496_6.png"
                        alt="rectangle66496_One"
                      />
                      <Text
                        className="absolute bg-black-900 border border-solid border-white-A700 flex h-max inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                        size="txtSFProRegular10"
                      >
                        16
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[13px] items-start justify-start">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProSemibold28"
                      >
                        Top Collectors Over
                      </Text>
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProRegular28"
                      >
                        45, 678, 098 ETH
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700_19 flex md:flex-1 sm:flex-col flex-row gap-[30px] items-center justify-start p-2.5 rounded-[15px] w-[33%] md:w-full">
                  <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
                    <Img
                      className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
                      src="images/img_rectangle66496_7.png"
                      alt="rectangle66496_Two"
                    />
                    <Text
                      className="absolute bg-black-900 border border-solid border-white-A700 flex h-max inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                      size="txtSFProRegular10"
                    >
                      16
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[13px] items-start justify-start">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProSemibold28"
                    >
                      Top Collectors Over
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProRegular28"
                    >
                      45, 678, 098 ETH
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-[5px] bg-gradient2  w-[29%]" />
              <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-center justify-between my-0 w-full">
                <div className="flex md:flex-1 md:flex-col flex-row gap-[30px] items-center justify-between w-[67%] md:w-full">
                  <div className="bg-white-A700_19 flex sm:flex-col flex-row gap-[30px] items-center justify-start p-2.5 rounded-[15px] w-[49%] md:w-full">
                    <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
                      <Img
                        className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
                        src="images/img_rectangle66497.png"
                        alt="rectangle66497"
                      />
                      <Text
                        className="absolute bg-black-900 border border-solid border-white-A700 flex h-max inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                        size="txtSFProRegular10"
                      >
                        16
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[13px] items-start justify-start">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProSemibold28"
                      >
                        Top Collectors Over
                      </Text>
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProRegular28"
                      >
                        45, 678, 098 ETH
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700_19 flex sm:flex-col flex-row gap-[30px] items-center justify-start p-2.5 rounded-[15px] w-[49%] md:w-full">
                    <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
                      <Img
                        className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
                        src="images/img_rectangle66496_8.png"
                        alt="rectangle66496"
                      />
                      <Text
                        className="absolute bg-black-900 border border-solid border-white-A700 flex h-max inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                        size="txtSFProRegular10"
                      >
                        16
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[13px] items-start justify-start">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProSemibold28"
                      >
                        Top Collectors Over
                      </Text>
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProRegular28"
                      >
                        45, 678, 098 ETH
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700_19 flex md:flex-1 sm:flex-col flex-row gap-[30px] items-center justify-start p-2.5 rounded-[15px] w-[33%] md:w-full">
                  <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
                    <Img
                      className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
                      src="images/img_rectangle66496_9.png"
                      alt="rectangle66496_One"
                    />
                    <Text
                      className="absolute bg-black-900 border border-solid border-white-A700 flex h-max inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                      size="txtSFProRegular10"
                    >
                      16
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[13px] items-start justify-start">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProSemibold28"
                    >
                      Top Collectors Over
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProRegular28"
                    >
                      45, 678, 098 ETH
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <Button
              className="cursor-pointer font-bold min-w-[300px] mt-20 sm:text-2xl md:text-[26px] text-[28px] text-center"
              shape="round"
              color="deep_purple_A200"
              size="lg"
              variant="fill"
            >
              Go To Ranking
            </Button>
            <div className="flex md:flex-col flex-row gap-5 items-center justify-center mt-[114px] w-[46%] md:w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                size="txtSFProSemibold48"
              >
                Top Collectors Over
              </Text>
              <div className="flex flex-row items-center justify-evenly w-[38%] md:w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-deep_purple-A200"
                  size="txtSFProSemibold48DeeppurpleA200"
                >
                  last7 days
                </Text>
                <Img
                  className="h-[35px] w-[35px]"
                  src="images/img_materialsymbol_deep_purple_a200.svg"
                  alt="materialsymbol_Two"
                />
              </div>
            </div>
            <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] mt-[89px] w-full">
              <div className="bg-deep_purple-A200 flex flex-1 flex-col gap-[23px] items-center justify-start p-5 rounded-[15px] w-full">
                <div className="md:h-[120px] h-[126px] relative w-[127px]">
                  <Img
                    className="absolute h-[120px] left-[0] object-cover rounded-[15px] top-[0] w-[120px]"
                    src="images/img_rectangle66496.png"
                    alt="rectangle66498"
                  />
                  <Text
                    className="absolute bg-black-900 border border-solid border-white-A700 bottom-[0] flex h-5 items-center justify-center right-[0] rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                    size="txtSFProRegular10"
                  >
                    16
                  </Text>
                </div>
                <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                    size="txtSFProSemibold28"
                  >
                    Top Collectors Over
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                    size="txtSFProRegular24"
                  >
                    45, 678, 098 ETH
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700_19 flex flex-1 flex-col gap-[23px] items-center justify-start p-5 rounded-[15px] w-full">
                <div className="md:h-[120px] h-[126px] relative w-[127px]">
                  <Img
                    className="absolute h-[120px] left-[0] object-cover rounded-[15px] top-[0] w-[120px]"
                    src="images/img_rectangle66498.png"
                    alt="rectangle66498"
                  />
                  <Text
                    className="absolute bg-black-900 border border-solid border-white-A700 bottom-[0] flex h-5 items-center justify-center right-[0] rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                    size="txtSFProRegular10"
                  >
                    16
                  </Text>
                </div>
                <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                    size="txtSFProSemibold28"
                  >
                    Top Collectors Over
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                    size="txtSFProRegular24"
                  >
                    45, 678, 098 ETH
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700_19 flex flex-1 flex-col gap-[23px] items-center justify-start p-5 rounded-[15px] w-full">
                <div className="md:h-[120px] h-[126px] relative w-[127px]">
                  <Img
                    className="absolute h-[120px] left-[0] object-cover rounded-[15px] top-[0] w-[120px]"
                    src="images/img_rectangle66498_120x120.png"
                    alt="rectangle66498"
                  />
                  <Text
                    className="absolute bg-black-900 border border-solid border-white-A700 bottom-[0] flex h-5 items-center justify-center right-[0] rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                    size="txtSFProRegular10"
                  >
                    16
                  </Text>
                </div>
                <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                    size="txtSFProSemibold28"
                  >
                    Top Collectors Over
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                    size="txtSFProRegular24"
                  >
                    45, 678, 098 ETH
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700_19 flex flex-1 flex-col gap-[23px] items-center justify-start p-5 rounded-[15px] w-full">
                <div className="md:h-[120px] h-[126px] relative w-[127px]">
                  <Img
                    className="absolute h-[120px] left-[0] object-cover rounded-[15px] top-[0] w-[120px]"
                    src="images/img_rectangle66496.png"
                    alt="rectangle66498"
                  />
                  <Text
                    className="absolute bg-black-900 border border-solid border-white-A700 bottom-[0] flex h-5 items-center justify-center right-[0] rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                    size="txtSFProRegular10"
                  >
                    16
                  </Text>
                </div>
                <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                    size="txtSFProSemibold28"
                  >
                    Top Collectors Over
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                    size="txtSFProRegular24"
                  >
                    45, 678, 098 ETH
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700_19 flex flex-1 flex-col gap-[23px] items-center justify-start p-5 rounded-[15px] w-full">
                <div className="md:h-[120px] h-[126px] relative w-[127px]">
                  <Img
                    className="absolute h-[120px] left-[0] object-cover rounded-[15px] top-[0] w-[120px]"
                    src="images/img_rectangle66496_9.png"
                    alt="rectangle66498"
                  />
                  <Text
                    className="absolute bg-black-900 border border-solid border-white-A700 bottom-[0] flex h-5 items-center justify-center right-[0] rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                    size="txtSFProRegular10"
                  >
                    16
                  </Text>
                </div>
                <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                    size="txtSFProSemibold28"
                  >
                    Top Collectors Over
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                    size="txtSFProRegular24"
                  >
                    45, 678, 098 ETH
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700_19 flex flex-1 flex-col gap-[23px] items-center justify-start p-5 rounded-[15px] w-full">
                <div className="md:h-[120px] h-[126px] relative w-[127px]">
                  <Img
                    className="absolute h-[120px] left-[0] object-cover rounded-[15px] top-[0] w-[120px]"
                    src="images/img_rectangle66497.png"
                    alt="rectangle66498"
                  />
                  <Text
                    className="absolute bg-black-900 border border-solid border-white-A700 bottom-[0] flex h-5 items-center justify-center right-[0] rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                    size="txtSFProRegular10"
                  >
                    16
                  </Text>
                </div>
                <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                    size="txtSFProSemibold28"
                  >
                    Top Collectors Over
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                    size="txtSFProRegular24"
                  >
                    45, 678, 098 ETH
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700_19 flex flex-1 flex-col gap-[23px] items-center justify-start p-5 rounded-[15px] w-full">
                <div className="md:h-[120px] h-[126px] relative w-[127px]">
                  <Img
                    className="absolute h-[120px] left-[0] object-cover rounded-[15px] top-[0] w-[120px]"
                    src="images/img_rectangle66496_120x120.png"
                    alt="rectangle66498"
                  />
                  <Text
                    className="absolute bg-black-900 border border-solid border-white-A700 bottom-[0] flex h-5 items-center justify-center right-[0] rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                    size="txtSFProRegular10"
                  >
                    16
                  </Text>
                </div>
                <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                    size="txtSFProSemibold28"
                  >
                    Top Collectors Over
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                    size="txtSFProRegular24"
                  >
                    45, 678, 098 ETH
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700_19 flex flex-1 flex-col gap-[23px] items-center justify-start p-5 rounded-[15px] w-full">
                <div className="md:h-[120px] h-[126px] relative w-[127px]">
                  <Img
                    className="absolute h-[120px] left-[0] object-cover rounded-[15px] top-[0] w-[120px]"
                    src="images/img_rectangle66498_1.png"
                    alt="rectangle66498"
                  />
                  <Text
                    className="absolute bg-black-900 border border-solid border-white-A700 bottom-[0] flex h-5 items-center justify-center right-[0] rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                    size="txtSFProRegular10"
                  >
                    16
                  </Text>
                </div>
                <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                    size="txtSFProSemibold28"
                  >
                    Top Collectors Over
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                    size="txtSFProRegular24"
                  >
                    45, 678, 098 ETH
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700_19 flex flex-1 flex-col gap-[23px] items-center justify-start p-5 rounded-[15px] w-full">
                <div className="md:h-[120px] h-[126px] relative w-[127px]">
                  <Img
                    className="absolute h-[120px] left-[0] object-cover rounded-[15px] top-[0] w-[120px]"
                    src="images/img_rectangle66498_2.png"
                    alt="rectangle66498"
                  />
                  <Text
                    className="absolute bg-black-900 border border-solid border-white-A700 bottom-[0] flex h-5 items-center justify-center right-[0] rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                    size="txtSFProRegular10"
                  >
                    16
                  </Text>
                </div>
                <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                    size="txtSFProSemibold28"
                  >
                    Top Collectors Over
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                    size="txtSFProRegular24"
                  >
                    45, 678, 098 ETH
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700_19 flex flex-1 flex-col gap-[23px] items-center justify-start p-5 rounded-[15px] w-full">
                <div className="md:h-[120px] h-[126px] relative w-[127px]">
                  <Img
                    className="absolute h-[120px] left-[0] object-cover rounded-[15px] top-[0] w-[120px]"
                    src="images/img_rectangle66496_4.png"
                    alt="rectangle66498"
                  />
                  <Text
                    className="absolute bg-black-900 border border-solid border-white-A700 bottom-[0] flex h-5 items-center justify-center right-[0] rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                    size="txtSFProRegular10"
                  >
                    16
                  </Text>
                </div>
                <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                    size="txtSFProSemibold28"
                  >
                    Top Collectors Over
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                    size="txtSFProRegular24"
                  >
                    45, 678, 098 ETH
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700_19 flex flex-1 flex-col gap-[23px] items-center justify-start p-5 rounded-[15px] w-full">
                <div className="md:h-[120px] h-[126px] relative w-[127px]">
                  <Img
                    className="absolute h-[120px] left-[0] object-cover rounded-[15px] top-[0] w-[120px]"
                    src="images/img_rectangle66498_3.png"
                    alt="rectangle66498"
                  />
                  <Text
                    className="absolute bg-black-900 border border-solid border-white-A700 bottom-[0] flex h-5 items-center justify-center right-[0] rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                    size="txtSFProRegular10"
                  >
                    16
                  </Text>
                </div>
                <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                    size="txtSFProSemibold28"
                  >
                    Top Collectors Over
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                    size="txtSFProRegular24"
                  >
                    45, 678, 098 ETH
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700_19 flex flex-1 flex-col gap-[23px] items-center justify-start p-5 rounded-[15px] w-full">
                <div className="md:h-[120px] h-[126px] relative w-[127px]">
                  <Img
                    className="absolute h-[120px] left-[0] object-cover rounded-[15px] top-[0] w-[120px]"
                    src="images/img_rectangle66496_1.png"
                    alt="rectangle66498"
                  />
                  <Text
                    className="absolute bg-black-900 border border-solid border-white-A700 bottom-[0] flex h-5 items-center justify-center right-[0] rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                    size="txtSFProRegular10"
                  >
                    16
                  </Text>
                </div>
                <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                    size="txtSFProSemibold28"
                  >
                    Top Collectors Over
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                    size="txtSFProRegular24"
                  >
                    45, 678, 098 ETH
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-bold min-w-[300px] mt-20 sm:text-2xl md:text-[26px] text-[28px] text-center"
              shape="round"
              color="deep_purple_A200"
              size="lg"
              variant="fill"
            >
              Go To Ranking
            </Button>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[116px] w-full">
              <div className="flex md:flex-1 flex-col gap-[15px] items-center justify-start w-[19%] md:w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                  size="txtSFProSemibold48"
                >
                  Live Auctions{" "}
                </Text>
                <Line className="bg-gradient2  h-[5px] w-[71%]" />
              </div>
              <div className="md:h-[327px] h-[70px] relative w-[53%] md:w-full">
                <div className="absolute bg-white-A700_19 flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-center justify-center m-auto p-[11px] rounded-[15px] w-full">
                  <Img
                    className="h-[45px] md:h-auto md:ml-[0] ml-[18px] object-cover w-[45px]"
                    src="images/img_component77variant8.png"
                    alt="component77vari"
                  />
                  <Img
                    className="h-[45px] md:ml-[0] ml-[83px] w-[45px]"
                    src="images/img_polygon2.svg"
                    alt="polygonTwo"
                  />
                  <div className="bg-white-A700 h-[45px] md:ml-[0] ml-[83px] rounded-[22px] w-[45px]"></div>
                  <div className="bg-white-A700 h-[45px] md:ml-[0] ml-[83px] w-[45px]"></div>
                  <div className="bg-white-A700 h-[45px] md:ml-[0] ml-[266px] rounded-bl-[5px] rounded-br-[5px] rounded-tl-[50%] rounded-tr-[50%] w-[45px]"></div>
                </div>
                <div className="absolute bg-deep_purple-A200 flex flex-col h-full inset-y-[0] items-center justify-end my-auto p-3 right-[20%] rounded-[5px] w-[13%]">
                  <div className="bg-white-A700 h-[45px] rounded-[5px] w-[45px]"></div>
                </div>
              </div>
            </div>
            <div className="md:gap-5 gap-[30px] grid grid-cols-3 sm:grid-cols-[repeat(0,_1fr_434px)_1fr] md:grid-cols-[repeat(1,_1fr_434px)_1fr] justify-center min-h-[auto] mt-14 w-full">
              <div className="h-[676px] relative w-full">
                <Img
                  className="h-[676px] m-auto object-cover rounded-[15px] w-full"
                  src="images/img_rectangle66483_676x490.png"
                  alt="rectangle66483"
                />
                <div className="absolute bg-white-A700_19 bottom-[2%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-4 rounded-[5px] w-[94%]">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProSemibold28"
                      >
                        Hooded neck Raglan
                      </Text>
                      <Text
                        className="mt-1.5 text-lg text-white-A700"
                        size="txtSFProRegular18WhiteA700"
                      >
                        Omar Ekstrom Bothman
                      </Text>
                      <Text
                        className="mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProRegular28"
                      >
                        45, 678, 098 ETH
                      </Text>
                    </div>
                    <div className="flex flex-col gap-6 items-end justify-start w-[23%] sm:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-deep_purple-A200 text-right"
                        size="txtSFProBold28DeeppurpleA200"
                      >
                        $20.09
                      </Text>
                      <Button
                        className="flex h-[60px] items-center justify-center w-[60px]"
                        shape="round"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-[30px]"
                          src="images/img_computer_black_900.svg"
                          alt="computer"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Line className="self-center h-[5px] bg-gradient2  w-full" />
              <div className="h-[676px] relative w-full">
                <Img
                  className="h-[676px] m-auto object-cover rounded-[15px] w-full"
                  src="images/img_rectangle66483_676x490.png"
                  alt="rectangle66483"
                />
                <div className="absolute bg-white-A700_19 bottom-[2%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-4 rounded-[5px] w-[94%]">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProSemibold28"
                      >
                        Hooded neck Raglan
                      </Text>
                      <Text
                        className="mt-1.5 text-lg text-white-A700"
                        size="txtSFProRegular18WhiteA700"
                      >
                        Omar Ekstrom Bothman
                      </Text>
                      <Text
                        className="mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProRegular28"
                      >
                        45, 678, 098 ETH
                      </Text>
                    </div>
                    <div className="flex flex-col gap-6 items-end justify-start w-[23%] sm:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-deep_purple-A200 text-right"
                        size="txtSFProBold28DeeppurpleA200"
                      >
                        $20.09
                      </Text>
                      <Button
                        className="flex h-[60px] items-center justify-center w-[60px]"
                        shape="round"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-[30px]"
                          src="images/img_computer_black_900.svg"
                          alt="computer"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Line className="self-center h-[5px] bg-gradient2  w-full" />
              <div className="h-[676px] relative w-full">
                <Img
                  className="h-[676px] m-auto object-cover rounded-[15px] w-full"
                  src="images/img_rectangle66483_676x490.png"
                  alt="rectangle66483"
                />
                <div className="absolute bg-white-A700_19 bottom-[2%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-4 rounded-[5px] w-[94%]">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProSemibold28"
                      >
                        Hooded neck Raglan
                      </Text>
                      <Text
                        className="mt-1.5 text-lg text-white-A700"
                        size="txtSFProRegular18WhiteA700"
                      >
                        Omar Ekstrom Bothman
                      </Text>
                      <Text
                        className="mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProRegular28"
                      >
                        45, 678, 098 ETH
                      </Text>
                    </div>
                    <div className="flex flex-col gap-6 items-end justify-start w-[23%] sm:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-deep_purple-A200 text-right"
                        size="txtSFProBold28DeeppurpleA200"
                      >
                        $20.09
                      </Text>
                      <Button
                        className="flex h-[60px] items-center justify-center w-[60px]"
                        shape="round"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-[30px]"
                          src="images/img_computer_black_900.svg"
                          alt="computer"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Line className="self-center h-[5px] bg-gradient2  w-full" />
              <div className="h-[676px] relative w-full">
                <Img
                  className="h-[676px] m-auto object-cover rounded-[15px] w-full"
                  src="images/img_rectangle66483_676x490.png"
                  alt="rectangle66483"
                />
                <div className="absolute bg-white-A700_19 bottom-[2%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-4 rounded-[5px] w-[94%]">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProSemibold28"
                      >
                        Hooded neck Raglan
                      </Text>
                      <Text
                        className="mt-1.5 text-lg text-white-A700"
                        size="txtSFProRegular18WhiteA700"
                      >
                        Omar Ekstrom Bothman
                      </Text>
                      <Text
                        className="mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProRegular28"
                      >
                        45, 678, 098 ETH
                      </Text>
                    </div>
                    <div className="flex flex-col gap-6 items-end justify-start w-[23%] sm:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-deep_purple-A200 text-right"
                        size="txtSFProBold28DeeppurpleA200"
                      >
                        $20.09
                      </Text>
                      <Button
                        className="flex h-[60px] items-center justify-center w-[60px]"
                        shape="round"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-[30px]"
                          src="images/img_computer_black_900.svg"
                          alt="computer"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Line className="self-center h-[5px] bg-gradient2  w-full" />
              <div className="h-[676px] relative w-full">
                <Img
                  className="h-[676px] m-auto object-cover rounded-[15px] w-full"
                  src="images/img_rectangle66483_676x490.png"
                  alt="rectangle66483"
                />
                <div className="absolute bg-white-A700_19 bottom-[2%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-4 rounded-[5px] w-[94%]">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProSemibold28"
                      >
                        Hooded neck Raglan
                      </Text>
                      <Text
                        className="mt-1.5 text-lg text-white-A700"
                        size="txtSFProRegular18WhiteA700"
                      >
                        Omar Ekstrom Bothman
                      </Text>
                      <Text
                        className="mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProRegular28"
                      >
                        45, 678, 098 ETH
                      </Text>
                    </div>
                    <div className="flex flex-col gap-6 items-end justify-start w-[23%] sm:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-deep_purple-A200 text-right"
                        size="txtSFProBold28DeeppurpleA200"
                      >
                        $20.09
                      </Text>
                      <Button
                        className="flex h-[60px] items-center justify-center w-[60px]"
                        shape="round"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-[30px]"
                          src="images/img_computer_black_900.svg"
                          alt="computer"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Line className="self-center h-[5px] bg-gradient2  w-full" />
              <div className="h-[676px] relative w-full">
                <Img
                  className="h-[676px] m-auto object-cover rounded-[15px] w-full"
                  src="images/img_rectangle66483_676x490.png"
                  alt="rectangle66483"
                />
                <div className="absolute bg-white-A700_19 bottom-[2%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-4 rounded-[5px] w-[94%]">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProSemibold28"
                      >
                        Hooded neck Raglan
                      </Text>
                      <Text
                        className="mt-1.5 text-lg text-white-A700"
                        size="txtSFProRegular18WhiteA700"
                      >
                        Omar Ekstrom Bothman
                      </Text>
                      <Text
                        className="mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProRegular28"
                      >
                        45, 678, 098 ETH
                      </Text>
                    </div>
                    <div className="flex flex-col gap-6 items-end justify-start w-[23%] sm:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-deep_purple-A200 text-right"
                        size="txtSFProBold28DeeppurpleA200"
                      >
                        $20.09
                      </Text>
                      <Button
                        className="flex h-[60px] items-center justify-center w-[60px]"
                        shape="round"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-[30px]"
                          src="images/img_computer_black_900.svg"
                          alt="computer"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-bold min-w-[230px] mt-[59px] sm:text-2xl md:text-[26px] text-[28px] text-center"
              shape="round"
              color="deep_purple_A200"
              size="lg"
              variant="fill"
            >
              See More
            </Button>
            <div className="flex flex-col md:gap-10 gap-[75px] items-center justify-start mt-[115px] w-full">
              <div className="flex flex-col gap-3.5 items-center justify-start w-[37%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                    size="txtSFProSemibold48"
                  >
                    Create And Sell Your NFT’s
                  </Text>
                </div>
                <Line className="bg-gradient2  h-[5px] w-3/5" />
              </div>
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[113px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col gap-[19px] items-center justify-start w-full">
                  <div className="bg-light_blue-A700_26 flex flex-col h-[100px] items-center justify-start p-2.5 rounded-[50%] w-[100px]">
                    <div className="bg-light_blue-A700 flex flex-col h-[78px] items-center justify-start p-[19px] rounded-[50%] w-[78px]">
                      <Img
                        className="h-10 w-10"
                        src="images/img_materialsymbol.svg"
                        alt="file"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                      size="txtSFProSemibold28"
                    >
                      Setup Your Wallet
                    </Text>
                    <Text
                      className="leading-[38.00px] text-center text-white-A700 text-xl w-full"
                      size="txtSFProRegular20"
                    >
                      Lorem ipsum dolor sit amet consectetur. Pulvinar non
                      blandit morbi dignissim tristique. Convallis augue commodo
                      sit tellus eros eget.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[17px] items-center justify-start w-full">
                  <div className="h-[100px] md:h-[98px] relative w-[100px]">
                    <div className="bg-amber-600_26 flex flex-col h-full items-center justify-start m-auto p-2.5 rounded-[50%] w-[100px]">
                      <div className="bg-amber-600 h-[78px] rounded-[50%] w-[78px]"></div>
                    </div>
                    <Img
                      className="absolute h-10 inset-[0] justify-center m-auto w-10"
                      src="images/img_materialsymbol_white_a700.svg"
                      alt="materialsymbol"
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                      size="txtSFProSemibold28"
                    >
                      Add Your NFTs
                    </Text>
                    <Text
                      className="leading-[38.00px] text-center text-white-A700 text-xl w-full"
                      size="txtSFProRegular20"
                    >
                      Lorem ipsum dolor sit amet consectetur. Pulvinar non
                      blandit morbi dignissim tristique. Convallis augue commodo
                      sit tellus eros eget.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[17px] items-center justify-start w-full">
                  <div className="bg-purple-A700_26 flex flex-col h-[100px] items-center justify-start p-2.5 rounded-[50%] w-[100px]">
                    <div className="bg-purple-A700 flex flex-col h-[78px] items-center justify-start p-[19px] rounded-[50%] w-[78px]">
                      <Img
                        className="h-10 w-10"
                        src="images/img_materialsymbolsviewlist.svg"
                        alt="materialsymbols"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                      size="txtSFProSemibold28"
                    >
                      List Them For Sale
                    </Text>
                    <Text
                      className="leading-[38.00px] text-center text-white-A700 text-xl w-full"
                      size="txtSFProRegular20"
                    >
                      Lorem ipsum dolor sit amet consectetur. Pulvinar non
                      blandit morbi dignissim tristique. Convallis augue commodo
                      sit tellus eros eget.
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <Button
              className="cursor-pointer font-bold min-w-[230px] mt-20 sm:text-2xl md:text-[26px] text-[28px] text-center"
              shape="round"
              color="deep_purple_A200"
              size="lg"
              variant="fill"
            >
              Start Now
            </Button>
          </div>
          <div className="h-[400px] md:h-[519px] mt-[119px] relative w-[96%] md:w-full">
            <Img
              className="h-[400px] m-auto object-cover w-full"
              src="images/img_rectangle66495_400x1920.png"
              alt="rectangle66495"
            />
            <div className="absolute bg-deep_purple-A200_99 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[90px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-[55px] items-center justify-start mb-[5px] w-[46%] md:w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                    size="txtSFProSemibold48"
                  >
                    subscribe our newsletter
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-row sm:gap-10 items-center justify-between p-2.5 rounded-[50px] w-full">
                  <Text
                    className="capitalize ml-[30px] text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-500"
                    size="txtSFProSemibold30"
                  >
                    <span className="text-gray-500 font-sfpro font-medium">
                      type{" "}
                    </span>
                    <span className="text-gray-500 font-sfpro lowercase font-medium">
                      YOUR
                    </span>
                    <span className="text-gray-500 font-sfpro font-medium">
                      {" "}
                    </span>
                    <span className="text-gray-500 font-sfpro lowercase font-medium">
                      GMAIL
                    </span>
                  </Text>
                  <Button
                    className="capitalize cursor-pointer font-bold min-w-[150px] rounded-[40px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                    color="deep_purple_A200"
                    size="xl"
                    variant="fill"
                  >
                    Sand
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[115px] w-[77%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[15px] items-center justify-start w-[27%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                    size="txtSFProSemibold48"
                  >
                    Feature Collections
                  </Text>
                </div>
                <Line className="bg-gradient2  h-[5px] w-[49%]" />
              </div>
              <div className="bg-white-A700_19 flex md:flex-1 flex-row sm:gap-10 items-center justify-between md:mt-0 my-1 sm:px-5 px-[30px] rounded-[15px] w-[53%] md:w-full">
                <Img
                  className="h-[45px] md:h-auto object-cover w-[45px]"
                  src="images/img_component77variant8.png"
                  alt="component77vari_One"
                />
                <Img
                  className="h-[45px] w-[45px]"
                  src="images/img_polygon2.svg"
                  alt="polygonTwo_One"
                />
                <div className="bg-white-A700 h-[45px] my-3 rounded-[22px] w-[45px]"></div>
                <div className="bg-white-A700 h-[45px] my-3 w-[45px]"></div>
                <div className="bg-deep_purple-A200 flex flex-col items-center justify-end p-3 rounded-[5px]">
                  <div className="bg-white-A700 h-[45px] rounded-[5px] w-[45px]"></div>
                </div>
                <div className="bg-white-A700 h-[45px] my-3 rounded-bl-[5px] rounded-br-[5px] rounded-tl-[50%] rounded-tr-[50%] w-[45px]"></div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-14 w-full"
              orientation="horizontal"
            >
              <div className="h-[676px] relative w-full">
                <Img
                  className="h-[676px] m-auto object-cover rounded-[15px] w-full"
                  src="images/img_rectangle66483_676x490.png"
                  alt="rectangle66483"
                />
                <div className="absolute bg-white-A700_19 bottom-[2%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-4 rounded-[5px] w-[94%]">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProSemibold28"
                      >
                        Hooded neck Raglan
                      </Text>
                      <Text
                        className="mt-1.5 text-lg text-white-A700"
                        size="txtSFProRegular18WhiteA700"
                      >
                        Omar Ekstrom Bothman
                      </Text>
                      <Text
                        className="mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProRegular28"
                      >
                        45, 678, 098 ETH
                      </Text>
                    </div>
                    <div className="flex flex-col gap-6 items-end justify-start w-[23%] sm:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-deep_purple-A200 text-right"
                        size="txtSFProBold28DeeppurpleA200"
                      >
                        $20.09
                      </Text>
                      <Button
                        className="flex h-[60px] items-center justify-center w-[60px]"
                        shape="round"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-[30px]"
                          src="images/img_computer_black_900.svg"
                          alt="computer"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[676px] relative w-full">
                <Img
                  className="h-[676px] m-auto object-cover rounded-[15px] w-full"
                  src="images/img_rectangle66483_676x490.png"
                  alt="rectangle66483"
                />
                <div className="absolute bg-white-A700_19 bottom-[2%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-4 rounded-[5px] w-[94%]">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProSemibold28"
                      >
                        Hooded neck Raglan
                      </Text>
                      <Text
                        className="mt-1.5 text-lg text-white-A700"
                        size="txtSFProRegular18WhiteA700"
                      >
                        Omar Ekstrom Bothman
                      </Text>
                      <Text
                        className="mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProRegular28"
                      >
                        45, 678, 098 ETH
                      </Text>
                    </div>
                    <div className="flex flex-col gap-6 items-end justify-start w-[23%] sm:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-deep_purple-A200 text-right"
                        size="txtSFProBold28DeeppurpleA200"
                      >
                        $20.09
                      </Text>
                      <Button
                        className="flex h-[60px] items-center justify-center w-[60px]"
                        shape="round"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-[30px]"
                          src="images/img_computer_black_900.svg"
                          alt="computer"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[676px] relative w-full">
                <Img
                  className="h-[676px] m-auto object-cover rounded-[15px] w-full"
                  src="images/img_rectangle66483_676x490.png"
                  alt="rectangle66483"
                />
                <div className="absolute bg-white-A700_19 bottom-[2%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-4 rounded-[5px] w-[94%]">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProSemibold28"
                      >
                        Hooded neck Raglan
                      </Text>
                      <Text
                        className="mt-1.5 text-lg text-white-A700"
                        size="txtSFProRegular18WhiteA700"
                      >
                        Omar Ekstrom Bothman
                      </Text>
                      <Text
                        className="mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProRegular28"
                      >
                        45, 678, 098 ETH
                      </Text>
                    </div>
                    <div className="flex flex-col gap-6 items-end justify-start w-[23%] sm:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-deep_purple-A200 text-right"
                        size="txtSFProBold28DeeppurpleA200"
                      >
                        $20.09
                      </Text>
                      <Button
                        className="flex h-[60px] items-center justify-center w-[60px]"
                        shape="round"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-[30px]"
                          src="images/img_computer_black_900.svg"
                          alt="computer"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <Button
              className="cursor-pointer font-bold min-w-[300px] mt-[60px] sm:text-2xl md:text-[26px] text-[28px] text-center"
              shape="round"
              color="deep_purple_A200"
              size="lg"
              variant="fill"
            >
              See More
            </Button>
            <Img
              className="h-[74px] mt-[120px]"
              src="images/img_group1000009441.svg"
              alt="group1000009441"
            />
            <div className="flex flex-col items-center justify-start mt-[120px] w-full">
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

export default HomepagePage;
