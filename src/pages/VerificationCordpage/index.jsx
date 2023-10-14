import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import { Button, Img, Text } from "components";
import ReactCodeInput from "react-code-input";


const CORRECT_PIN_CODE = "4089";

const VerificationCordpagePage = () => {
  const navigate = useNavigate();
  const [isPinCodeValid, setIsPinCodeValid] = useState(true);
  const [pinCode, setPinCode] = useState("");
  const [btnIsPressed, setBtnIsPressed] = useState(false);

  const checkPinCode = () => {
    const isPinCodeValid = pinCode === CORRECT_PIN_CODE;

    setBtnIsPressed(true);
    setIsPinCodeValid(isPinCodeValid);
    if (!isPinCodeValid) setPinCode("");
    else {
      navigate("/newpasswordpage");
    }
  };

  const handlePinChange = (pin) => {
    setPinCode(pin); // Corrected from the previous issue
    setBtnIsPressed(false);
  };


  const props = { 
    inputStyle: { 
      fontFamily: 'sfpro', 
      margin:  '10px', 
      MozAppearance: 'textfield', 
      width: '145px', 
      fontSize: '32px',  
      backgroundColor: 'white', 
      color: '#05011D', 
      border: 'none',
      borderBottom: '2px solid black',
      textAlign: 'center',
      fontWeight: "590",

    }, 
    inputStyleInvalid: { 
      fontFamily: 'sfpro', 
      margin:  '10px', 
      MozAppearance: 'textfield', 
      width: '145px', 
      fontSize: '32px',  
      backgroundColor: 'white', 
      color: 'red', 
      border: 'none',
      borderBottom: '2px solid red',
      textAlign: 'center',
      fontWeight: "590",
    } 
  }
  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-start mx-auto p-[60px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[1800px] mx-auto md:px-5 rounded-[30px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[93%] md:w-full">
            <div className="flex flex-col items-center justify-start w-[53%] md:w-full">
              <div className="h-[960px] relative w-full">
                <Img
                  className="h-[960px] m-auto object-cover rounded-[30px] w-full"
                  src="images/img_rectangle66495.png"
                  alt="rectangle66495"
                />
                <div className="absolute bg-black-900_19 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[215px] md:px-10 sm:px-5 rounded-[30px] w-full">
                  <Img
                    className="h-[357px] md:h-auto my-[86px] object-cover w-full"
                    src="images/img_myscpelogo1.png"
                    alt="myscpelogoOne"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[51px] items-center justify-start w-[41%] md:w-full">
              <div className="flex flex-col gap-[13px] items-center justify-start">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                  size="txtSFProBold40"
                >
                  Verification Code
                </Text>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
                  size="txtSFProMedium28"
                >
                  Check The Email & Enter The Code
                </Text>
              </div>
              <div className="w-[671px]">
                <ReactCodeInput
                  id="pinCode"
                  type="text"
                  isValid={isPinCodeValid}
                  fields={4}
                  onChange={handlePinChange}
                  value={pinCode}
                  {...props}
                />
                </div>
                <Button
                  className="cursor-pointer font-bold min-w-[671px] md:min-w-full rounded-[15px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                  color="deep_purple_A200"
                  size="lg"
                  variant="fill"
                  onClick={checkPinCode}
                >
                  Verify
                </Button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerificationCordpagePage;
