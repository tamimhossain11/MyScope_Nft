import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  Text,
} from "components";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import HomeScrollCards from "components/HomeScrollCards";
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";


const PopupProfilepagePage = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [setScrollLeft] = useState(0); // New state for scroll position
  const scrollContainerRef = useRef(null);
  
  const handleNextCard = () => {
    const newIndex = currentCardIndex + 1;

    if (newIndex < 4) {
      setCurrentCardIndex(newIndex);
    }
  };

  const handlePrevCard = () => {
    const newIndex = currentCardIndex - 1;

    if (newIndex >= 0) {
      setCurrentCardIndex(newIndex);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const handleScroll = () => {
      if (scrollContainer) {
        const newScrollLeft = scrollContainer.scrollLeft;
        setScrollLeft(newScrollLeft); // Update scrollLeft state
        const cardWidth = 660; // Adjust this based on your card width
        const newActiveIndex = Math.floor((newScrollLeft + cardWidth / 2) / cardWidth);
  
        // Check if we have reached the last card on the right side
        const numberOfCards = 4;
        const maxScroll = cardWidth * (numberOfCards - 800); // Assuming numberOfCards is the total number of cards
        if (newScrollLeft >= maxScroll) {
          setCurrentCardIndex(numberOfCards - 800); // Set current card index to the last card
        } else {
          setCurrentCardIndex(newActiveIndex);
        }
      }
    };
  
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }
  
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro sm:gap-10 md:gap-10 gap-[120px] items-end justify-start mx-auto py-10 w-full">
        <div className="flex flex-col items-start md:px-5 w-full">

          <div className="overflow-x-auto w-full">
            <Navbar />
            <div className="h-[1155px] md:h-[1946px] sm:h-[920px] relative w-full">


              <div className="absolute h-[1155px] md:h-[1946px] sm:h-[920px] inset-[0] justify-center m-auto overflow-auto w-full">
                <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[60px] items-center justify-start right-[0] w-full">
                  <Text
                    className="leading-[90.00px] md:text-5xl text-[65px] text-center text-white-A700"
                    size="txtSFProHeavy65"
                  >
                    <>
                      Discover Top Collections & Sell <br />
                      Creative NFTs
                    </>
                  </Text>
                  <div
                    className="scroll-cards-viewport"
                    style={{
                      overflow: 'hidden',
                      paddingTop: '153px',
                      paddingLeft: '151px',
                      scrollBehavior: 'smooth', // Optional: Smooth scrolling
                    }}
                    ref={scrollContainerRef}
                  >
                    <div
                      className="scroll-cards-container"
                      style={{
                        display: 'flex',
                        width: `${1030 * 4}px`, // Adjust the card width and number of cards
                        transform: `translateX(-${currentCardIndex * 860}px)`, // Adjust the card width
                        transition: 'transform 0.5s ease', // Adjust the animation duration and easing as needed
                        whiteSpace: 'nowrap',
                        gap: '20px',
                        zIndex: '1',

                      }}
                    >
                      <HomeScrollCards

                        imageSrc="images/img_vector13.png"
                        name="Justin Stanton"
                        username="EmersonLubin"
                      />

                      <HomeScrollCards

                        imageSrc="images/img_vector16.png"
                        name="Another Name"
                        username="AnotherUsername"
                      />

                      <HomeScrollCards

                        imageSrc="images/img_vector13.png"
                        name="Emerson Lubin"
                        username="EmersonLubin"
                      />

                      <HomeScrollCards

                        imageSrc="images/img_rectangle66553.png"
                        name="Emerson Lubin"
                        username="Emerson Lubin"
                      />

                      <HomeScrollCards

                        imageSrc="images/img_vector13_419x330.png"
                        name="Another Name"
                        username="AnotherUsername"
                      />

                      <HomeScrollCards

                        imageSrc="images/card6.png"
                        name="Another Name"
                        username="AnotherUsername"
                      />

                      <HomeScrollCards

                        imageSrc="images/img_vector13_344x270.png"
                        name="Another Name"
                        username="AnotherUsername"
                      />

                    </div>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[688px] mt-[137px] w-[14%] md:w-full">
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      size="2xl"
                      className="my-icon"
                      onClick={handlePrevCard}
                      style={{
                        cursor: "pointer",
                        backgroundColor: "transparent ",
                        color: "#6D28D9",
                        border: "1px solid #6D28D9",
                        borderRadius: "50%",
                        padding: "15px",
                        transition: "background-color 0.3s, color 0.3s", // Add a smooth transition effect
                        height: '25px',
                        width: '25px',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#6D28D9 "; /* Change the background color on hover */
                        e.target.style.color = "#fff "; /* Change the text color on hover */
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "initial"; /* Restore the initial background color */
                        e.target.style.color = "#6D28D9"; /* Restore the initial text color */
                      }}
                    />
                     
                    <PagerIndicator
                      className="flex h-2.5 w-[100px]"
                      count={4} // Adjust the number of cards
                      currentCardIndex={currentCardIndex}
                      setCurrentCardIndex={setCurrentCardIndex}
                      inactiveCss="inline-block cursor-pointer rounded-[50%] h-[10px] bg-white-A700 w-[10px]"
                      activeCss="inline-block cursor-pointer rounded-[20px] h-[10px] bg-gray-500"
                    />
                    <FontAwesomeIcon
                      icon={faAngleRight} // Use the new icon here
                      size="2xl" // Set the desired size
                      className="my-icon" // Add a class name for the icon
                      onClick={handleNextCard}
                      style={{
                        cursor: "pointer",
                        backgroundColor: "transparent",
                        color: "#6D28D9", // Set the initial text color to match the border color
                        border: "1px solid #6D28D9", // Set the border color
                        borderRadius: "50%", // Make the button circular
                        padding: "15px", // Add padding to the button
                        transition: "background-color 0.3s, color 0.3s", // Add a smooth transition effect
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#6D28D9"; /* Change the background color on hover */
                        e.target.style.color = "#fff"; /* Change the text color on hover */
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "initial"; /* Restore the initial background color */
                        e.target.style.color = "#6D28D9"; /* Restore the initial text color */
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mb-[11px] pl-[89px] md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start w-full">
            <div className="flex flex-col md:gap-10 gap-[116px] items-center justify-start w-4/5 md:w-full">
              <List
                className="flex flex-col gap-[118px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-center justify-center w-[45%] md:w-full">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
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
                          alt="materialsymbol"
                        />
                      </div>
                    </div>
                    <Line className="bg-gradient2  h-[5px] mt-2.5 w-[29%]" />
                    <div className="flex flex-col items-center justify-start mt-[73px] w-full">
                      <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
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
                      <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between mt-[30px] w-full">
                        <div className="flex md:flex-1 md:flex-col flex-row gap-[30px] items-center justify-between w-[67%] md:w-full">
                          <div className="bg-white-A700_19 flex sm:flex-col flex-row gap-[30px] items-center justify-start p-2.5 rounded-[15px] w-[49%] md:w-full">
                            <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
                              <Img
                                className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
                                src="images/img_rectangle66496_2.png"
                                alt="rectangle66496_Three"
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
                                alt="rectangle66496_Four"
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
                              alt="rectangle66496_Five"
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
                      <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between mt-[30px] w-full">
                        <div className="flex md:flex-1 md:flex-col flex-row gap-[30px] items-center justify-between w-[67%] md:w-full">
                          <div className="bg-white-A700_19 flex sm:flex-col flex-row gap-[30px] items-center justify-start p-2.5 rounded-[15px] w-[49%] md:w-full">
                            <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
                              <Img
                                className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
                                src="images/img_rectangle66496_5.png"
                                alt="rectangle66496_Six"
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
                                alt="rectangle66496_Seven"
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
                              alt="rectangle66496_Eight"
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
                      <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between mt-[30px] w-full">
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
                                alt="rectangle66496_Nine"
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
                              alt="rectangle66496_Ten"
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
                      <Button
                        className="cursor-pointer font-bold min-w-[300px] mt-20 sm:text-2xl md:text-[26px] text-[28px] text-center"
                        shape="round"
                        color="deep_purple_A200"
                        size="lg"
                        variant="fill"
                      >
                        Go To Ranking
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-center justify-center w-[46%] md:w-full">
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
                          alt="materialsymbol"
                        />
                      </div>
                    </div>
                    <Line className="bg-gradient2  h-[5px] mt-2.5 w-[29%]" />
                    <div className="flex flex-col md:gap-10 gap-20 items-center justify-start mt-[73px] w-full">
                      <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
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
                        className="cursor-pointer font-bold min-w-[300px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                        shape="round"
                        color="deep_purple_A200"
                        size="lg"
                        variant="fill"
                      >
                        Go To Ranking
                      </Button>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
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
                  <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] mt-14 w-full">
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
                  </div>
                  <Button
                    className="cursor-pointer font-bold min-w-[300px] mt-[60px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                    shape="round"
                    color="deep_purple_A200"
                    size="lg"
                    variant="fill"
                  >
                    See More
                  </Button>
                </div>
              </div>
              <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-full">
                <div className="flex flex-col md:gap-10 gap-[75px] items-center justify-start w-full">
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
                          blandit morbi dignissim tristique. Convallis augue
                          commodo sit tellus eros eget.
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
                          blandit morbi dignissim tristique. Convallis augue
                          commodo sit tellus eros eget.
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
                          blandit morbi dignissim tristique. Convallis augue
                          commodo sit tellus eros eget.
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
                <Button
                  className="cursor-pointer font-bold min-w-[300px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                  shape="round"
                  color="deep_purple_A200"
                  size="lg"
                  variant="fill"
                >
                  Start Now
                </Button>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupProfilepagePage;
