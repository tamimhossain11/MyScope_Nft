import { React, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper/core";
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';


import {
  Button,
  Img,
  Line,
  List,
  Text,
} from "components";
import Navbar from "components/Navbar";
import HomeScrollCards from "components/HomeScrollCards";
import CollectionCards5 from "Cards/CollectionCards5";
import Footer from "components/Footer";
import TopCards1 from "Cards/TopCards1";
import TopCards2 from "Cards/TopCards2";
import NewsLetterForm from "Forms/NewsLetterForm";

SwiperCore.use([EffectCoverflow, Navigation, Pagination]);


function HomepagePage({ currentCardIndex }) {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>'; // Return an empty span for each bullet
    },
  };
  

  const swiperRef = useRef(null); // Create a ref to store the Swiper instance

  // Function to navigate to the previous slide
  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.slidePrev) {
      swiperRef.current.slidePrev();
    }
  };

  // Function to navigate to the next slide
  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.slideNext) {
      swiperRef.current.slideNext();
    }
  };;

  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-start justify-start mx-auto py-10 w-full">
        <div className="flex flex-col items-center mb-[11px] md:px-5 w-full">
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
              <div className="flex  items-center mb-[11px] w-full">
                {/*Swiper starts here */}
                <Swiper
                  effect="coverflow"
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={5}
                  loop={true}
                  coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                  }}
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  className="swiper-container"
                  pagination={pagination}
                  modules={[Pagination]}
                >
                  <SwiperSlide>
                    <HomeScrollCards
                      isActive={currentCardIndex === 0}
                      imageSrc="images/img_rectangle66553.png"
                      name="Emerson Lubin"
                      username="Emerson Lubin"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <HomeScrollCards
                      isActive={currentCardIndex === 1}
                      imageSrc="images/img_vector13_419x330.png"
                      name="Another Name"
                      username="AnotherUsername"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <HomeScrollCards
                      isActive={currentCardIndex === 2}
                      imageSrc="images/card6.png"
                      name="Another Name"
                      username="AnotherUsername"
                    />
                  </SwiperSlide>

                  <SwiperSlide >
                    <HomeScrollCards
                      isActive={currentCardIndex === 3}
                      imageSrc="images/img_vector13_344x270.png"
                      name="Another Name"
                      username="AnotherUsername"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <HomeScrollCards
                      isActive={currentCardIndex === 4}
                      imageSrc="images/img_vector13.png"
                      name="Justin Stanton"
                      username="EmersonLubin"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <HomeScrollCards
                      isActive={currentCardIndex === 5}
                      imageSrc="images/img_vector16.png"
                      name="Another Name"
                      username="AnotherUsername"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <HomeScrollCards
                      isActive={currentCardIndex === 6}
                      imageSrc="images/img_vector13.png"
                      name="Emerson Lubin"
                      username="EmersonLubin"
                    />
                  </SwiperSlide>
                  <div className="slider-control">
                    < BiSolidLeftArrow
                      className="swiper-button-prev"
                      style={{
                        top:'90%',
                        left:'42%',
                        cursor: "pointer",
                        backgroundColor: "white",
                        color: "black", // Set the initial text color to match the border color
                        borderRadius: "50%", // Make the button circular
                        padding:'12px',
                        height: '45px',
                        width: '45px',
                      }}
                      onClick={slidePrev} // Handle previous slide click
                    />

                    <BiSolidRightArrow
                      className="swiper-button-next"
                      style={{
                      right: '42%', 
                      top: '90%', 
                      cursor: 'pointer',
                      
                       backgroundColor: "white",
                        color: "black", // Set the initial text color to match the border color
                        borderRadius: "50%", // Make the button circular
                        padding:'12px',
                        height: '45px',
                        width: '45px',
                    }}
                      onClick={slideNext} // Handle next slide click
                    />


                  </div>

                </Swiper>

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
                <TopCards1 />
                <TopCards1 />
                <TopCards1 />
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-center justify-between my-0 w-full">
                <TopCards1 />
                <TopCards1 />
                <TopCards1 />
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-center justify-between my-0 w-full">
                <TopCards1 />
                <TopCards1 />
                <TopCards1 />
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-center justify-between my-0 w-full">
                <TopCards1 />
                <TopCards1 />
                <TopCards1 />
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
              <TopCards2 />
              <TopCards2 />
              <TopCards2 />
              <TopCards2 />
              <TopCards2 />
              <TopCards2 />
              <TopCards2 />
              <TopCards2 />
              <TopCards2 />
              <TopCards2 />
              <TopCards2 />
              <TopCards2 />

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
              <CollectionCards5 />
              <CollectionCards5 />
              <CollectionCards5 />
              <CollectionCards5 />
              <CollectionCards5 />
              <CollectionCards5 />
              <CollectionCards5 />
              <CollectionCards5 />
              <CollectionCards5 />
              <CollectionCards5 />
              <CollectionCards5 />
              <CollectionCards5 />
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
                <NewsLetterForm />
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

              <CollectionCards5 />
              <CollectionCards5 />
              <CollectionCards5 />

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

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
