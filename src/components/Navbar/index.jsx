import React, { useState, useEffect, useRef } from "react";
import { Button, Img, Input, Text } from "components";
import { CloseSVG } from "../../assets/images";
import ConnectwalletpageModal from "modals/Connectwalletpage";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ onIconClick }) => {


    const [isPopupOpen, setPopupOpen] = useState(false);
    const popupRef = useRef(null);
    const [isWalletModalOpen, setWalletModalOpen] = useState(false);
    const [navItemColor, setNavItemColor] = useState("black"); // Initial navigation item color

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    const openWalletModal = () => {
        setWalletModalOpen(true);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isPopupOpen && popupRef.current && !popupRef.current.contains(event.target)) {
                closePopup();
            }
        };

        if (isPopupOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isPopupOpen]);

    const [group1000010222value, setGroup1000010222value] = React.useState("");

    return (
        <>

            <div className="flex md:flex-col flex-row md:gap-10 gap-[66px] items-center justify-end w-[77%] md:w-full z-[1]">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[82%] md:w-full">
                    <Img
                        className="h-[85px] sm:h-auto object-cover w-[9%] md:w-full"
                        src="images/img_myscpelogo1.png"
                        alt="myscpelogoOne"
                    />
                    <Input
                        name="group1000010222"
                        placeholder="Search"
                        value={group1000010222value}
                        onChange={(e) => setGroup1000010222value(e)}
                        className="!placeholder:text-white-A700 !text-white-A700 p-0 text-left text-lg w-full"
                        wrapClassName="flex md:ml-[0] ml-[49px] md:mt-0 my-3 w-[26%] md:w-full"
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
                    <div className="flex flex-col gap-[11px] justify-start md:ml-[0] ml-[100px] w-[54%] md:w-full">
                        <div className="flex md:flex-col flex-row gap-[45px] items-start justify-start w-auto md:w-full">
                            <Link to="/homepage">
                            <Text
                                className="text-white-A700 text-xl w-auto"
                                size="txtSFProSemibold20"
                            >
                                Home
                            </Text>
                            </Link>
                            <Link to="/itamedetailspage">
                            <Text
                                className="text-white-A700 text-xl w-auto"
                                size="txtSFProRegular20"
                            >
                                Pages
                            </Text>
                            </Link>
                            <Link to="/allnftspage">
                            <Text
                                className="text-white-A700 text-xl w-auto"
                                size="txtSFProRegular20"
                            >
                                Explore
                            </Text>
                            </Link>
                            <Link to="/helpcenterpage">
                            <Text
                                className="text-white-A700 text-xl w-auto"
                                size="txtSFProRegular20"
                            >
                                Resources
                            </Text>
                            </Link>
                            <Link to="/createpage">
                            <Text
                                className="text-white-A700 text-xl w-auto"
                                size="txtSFProRegular20"
                            >
                                Create
                            </Text>
                            </Link>
                            <Link to="/nftgamepage">
                            <Text
                                className="text-white-A700 text-xl w-auto"
                                size="txtSFProRegular20"
                            >
                                NFT GAme
                            </Text>
                            </Link>
                        </div>
                        <Img
                            className="h-[5px] md:ml-[0] ml-[21px]"
                            src="images/img_line75.svg"
                            alt="lineSeventyFive"
                        />
                    </div>
                </div>
                <div className="flex flex-row gap-5 items-center justify-between w-[15%] md:w-full">
                    <Button
                        className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                        color="white_A700_19"
                        size="md"
                        variant="fill"
                        onClick={openWalletModal}
                    >
                        <Img
                            className="h-[35px]"
                            src="images/img_materialsymbol_white_a700_1.svg"
                            alt="materialsymbol"
                        />
                    </Button>
                    <div className="flex flex-col items-center justify-start w-[60px]"
                        onClick={openPopup}
                        style={{ cursor: "pointer", zIndex: 1 }}
                    >
                        <Img
                            className="h-[59px] md:h-auto rounded-[50%] w-[60px]"
                            src="images/img_ellipse141.png"
                            alt="ellipse141"
                        />
                    </div>

                    {/*Pop up start */}
                    {isPopupOpen && (
                        <div className="absolute h-[694px] right-[235px] top-[125px] w-1/5 sm:w-full popup-content " ref={popupRef} >
                            <Img
                                className="h-12 mb-[-20.31px] ml-auto mr-[85px] rounded-[3px] z-[1]"
                                src="images/img_arrowup.svg"
                                alt="arrowup_One"
                            />
                            <div className="bg-black-900 flex flex-col items-center justify-start mt-auto mx-auto p-[18px] rounded-[15px] shadow-bs7 w-full">
                                <div className="flex flex-col items-center justify-start mb-2 mt-[13px] w-[97%] md:w-full">
                                    <div className="flex flex-row gap-2.5 items-start justify-between w-[92%] md:w-full">
                                        <Text
                                            className="lowercase text-white-A700 text-xl"
                                            size="txtSFProMedium20WhiteA700"
                                        >
                                            m1818v2H6v-2h12zm3546kj...
                                        </Text>
                                        <Img
                                            className="h-6 w-6"
                                            src="images/img_basilcopyoutline.svg"
                                            alt="basilcopyoutlin"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start justify-start mt-7 w-[97%] md:w-full">
                                        <div className="bg-white-A700_19 flex flex-col items-start justify-start p-6 sm:px-5 rounded-[10px] w-full">
                                            <div className="flex flex-col gap-5 items-start justify-start mb-[3px] md:ml-[0] ml-[5px]">
                                                <Text
                                                    className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                                                    size="txtSFProMedium28WhiteA700"
                                                >
                                                    Balance
                                                </Text>
                                                <Text
                                                    className="capitalize sm:text-[25px] md:text-[27px] text-[29px] text-deep_purple-A200"
                                                    size="txtSFProBold29"
                                                >
                                                    65 ETH / 130k USD
                                                </Text>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-[15px] items-start justify-start mt-[29px] w-[39%] md:w-full">
                                            <Img
                                                className="h-5 w-5"
                                                src="images/img_maskgroup.svg"
                                                alt="maskgroup"
                                            />
                                            <Text
                                                className="capitalize text-white-A700 text-xl"
                                                size="txtSFProMedium20WhiteA700"
                                            >
                                                My Profile
                                            </Text>
                                        </div>
                                        <div className="flex flex-row gap-[15px] items-center justify-start mt-[19px] w-[41%] md:w-full">
                                            <Img
                                                className="h-5 w-5"
                                                src="images/img_materialsymbol_white_a700_20x20.svg"
                                                alt="materialsymbol_One"
                                            />
                                            <Text
                                                className="capitalize text-white-A700 text-xl"
                                                size="txtSFProMedium20WhiteA700"
                                            >
                                                Edit Profile
                                            </Text>
                                        </div>
                                        <div className="flex flex-row gap-[15px] items-start justify-between mt-[23px] w-[99%] md:w-full">
                                            <Img
                                                className="h-5 w-5"
                                                src="images/img_bxworld.svg"
                                                alt="bxworld"
                                            />
                                            <div className="flex flex-row items-center justify-between w-[90%]">
                                                <Text
                                                    className="capitalize text-white-A700 text-xl"
                                                    size="txtSFProMedium20WhiteA700"
                                                >
                                                    Languas
                                                </Text>
                                                <Img
                                                    className="h-1.5"
                                                    src="images/img_arrowup_white_a700.svg"
                                                    alt="arrowup"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-[15px] items-start justify-start mt-5 w-[33%] md:w-full">
                                            <Img
                                                className="h-5 w-5"
                                                src="images/img_cart.svg"
                                                alt="cart"
                                            />
                                            <Text
                                                className="capitalize text-white-A700 text-xl"
                                                size="txtSFProMedium20WhiteA700"
                                            >
                                                My Cart
                                            </Text>
                                        </div>
                                        <div className="flex flex-row gap-[15px] items-start justify-start mt-5 w-[52%] md:w-full">
                                            <Img
                                                className="h-5 w-5"
                                                src="images/img_mdifavourite.svg"
                                                alt="mdifavourite"
                                            />
                                            <div className="flex flex-col items-center justify-start">
                                                <Text
                                                    className="capitalize text-white-A700 text-xl"
                                                    size="txtSFProMedium20WhiteA700"
                                                >
                                                    My Saved Lists
                                                </Text>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-[15px] items-center justify-start mt-[19px] w-[37%] md:w-full">
                                            <Img
                                                className="h-5 w-5"
                                                src="images/img_bichatdots.svg"
                                                alt="bichatdots"
                                            />
                                            <div className="flex flex-col items-center justify-start">
                                                <Text
                                                    className="capitalize text-white-A700 text-xl"
                                                    size="txtSFProMedium20WhiteA700"
                                                >
                                                    Live Chat
                                                </Text>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-3.5 items-start justify-start mt-[18px] w-[38%] md:w-full">
                                            <Img
                                                className="h-[22px] w-[22px]"
                                                src="images/img_phquestion.svg"
                                                alt="phquestion"
                                            />
                                            <div className="flex flex-col items-center justify-start">
                                                <Text
                                                    className="capitalize text-white-A700 text-xl"
                                                    size="txtSFProMedium20WhiteA700"
                                                >
                                                    404 page
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                    <Button
                                        className="cursor-pointer flex items-center justify-center min-w-[137px] mt-[54px] rounded-[5px]"
                                        leftIcon={
                                            <Img
                                                className="h-5 mt-px mb-[3px] mr-2.5"
                                                src="images/img_antdesignlogoutoutlined.svg"
                                                alt="ant-design:logout-outlined"
                                            />
                                        }
                                        color="deep_purple_A200"
                                        size="sm"
                                        variant="fill"
                                    >
                                        <div className="capitalize font-semibold text-left text-xl">
                                            Sing Out
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                    {/*Pop up end*/}
                    <Button
                        onClick={() => {
                            onIconClick();
                        }}
                    >
                        <Img

                            className="h-[59px] w-[60px]"
                            src="images/img_group1000009458_31.svg"
                            alt="group1000009458"
                        />
                    </Button>
                </div>
            </div>
            {/* Wallet modal */}
            {isWalletModalOpen && <ConnectwalletpageModal onRequestClose={() => setWalletModalOpen(false)} />}

        </>
    );
};
Navbar.propTypes = {
    onIconClick: PropTypes.func.isRequired,

};

export default Navbar;
