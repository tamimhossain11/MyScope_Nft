import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "components";
import ReactCodeInput from "react-code-input";

const CORRECT_PIN_CODE = "4089";

const VerificationCodeForm = () => {
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
        setPinCode(pin);
        setBtnIsPressed(false);
    };

    const inputStyle = isPinCodeValid
        ? {
            fontFamily: "sfpro",
            width: "22%",
            fontSize: "32px",
            backgroundColor: "white",
            color: "#05011D",
            border: "none",
            borderBottom: "2.5px solid black",
            textAlign: "center",
            fontWeight: "590",
            marginLeft: "2.5%",
        }
        : {
            fontFamily: "sfpro",
            width: "22%",
            fontSize: "32px",
            backgroundColor: "white",
            color: "red",
            border: "none",
            borderBottom: "2.5px solid red",
            textAlign: "center",
            fontWeight: "590",
            marginLeft: "2.5%",
        };
    return (
        <>

            <div className="min:w-[700px]  w-full">
                <ReactCodeInput
                    id="pinCode"
                    type="text"
                    fields={4}
                    onChange={handlePinChange}
                    value={pinCode}
                    inputStyle={inputStyle}
                />

            </div>
            <Button
                className="cursor-pointer font-bold min:w-[671px] w-full md:mb-5 rounded-[15px] sm:text-2xl md:text-[24px] text-[28px] text-center"
                color="deep_purple_A200"
                size="lg"
                variant="fill"
                onClick={checkPinCode}
            >
                Verify
            </Button>
        </>
    );
};

export default VerificationCodeForm;
