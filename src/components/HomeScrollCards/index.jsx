import React from "react";
import {  Img,  Text } from "components";


const HomeScrollCards = () => {


    return (
        <>
            <div className=" flex flex-col h-[560px] md:h-[858px] rounded-[15px]   md:w-full inset-[0] items-center relative w-[400px]  m-auto shadow-bs5 ">
                <Img
                    className="h-[440px] md:h-auto object-cover w-full"
                    src="images/img_rectangle66553.png"
                    alt="rectangle66553"
                />
                <div className="bg-white-A700 flex flex-col items-start justify-start p-5 rounded-bl-[15px] rounded-br-[15px] w-full">
                    <div className="flex flex-row gap-[15px] items-center justify-start w-[73%] md:w-full">
                        <Img
                            className="h-20 md:h-auto rounded-[50%] w-20"
                            src="images/img_ellipse196.png"
                            alt="ellipse196"
                        />
                        <div className="flex flex-col gap-[5px] items-start justify-start">
                            <Text
                                className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                                size="txtSFProBold24"
                            >
                                Emerson Lubin
                            </Text>
                            <Text
                                className="lowercase text-base text-deep_purple-A200"
                                size="txtSFProRegular16"
                            >
                                @EmersonLubin
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeScrollCards;
