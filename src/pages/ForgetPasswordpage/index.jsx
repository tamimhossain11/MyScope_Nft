import React, { useState } from "react";
import { Button, Img, Text } from "components";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import FormControl from '@mui/material/FormControl';

import { Link } from "react-router-dom";

const ForgetPasswordpagePage = () => {

  const [email, setEmail] = useState("");
  const [isEmailCorrect, setIsEmailCorrect] = useState(false);

  const emailValidation = (e) => {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (emailValue.match(pattern)) {
      setIsEmailCorrect(true);
    } else {
      setIsEmailCorrect(false);
    }
  };



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
            <div className="flex flex-col gap-[57px] items-center justify-start w-[41%] md:w-full">
              <div className="flex flex-col gap-[9px] items-center justify-start">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                  size="txtSFProBold40"
                >
                  Forget Password
                </Text>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
                  size="txtSFProMedium28"
                >
                  Enter Your Email
                </Text>
              </div>
              <div className="flex flex-col gap-[47px] items-center justify-start w-full">
                <div className="flex flex-col gap-[22px] items-end justify-start w-full">
                <FormControl sx={{ m: 2 }} >
                  <InputLabel htmlFor="outlined-adornment-Email or Number" color="secondary">Email*</InputLabel>
                  <OutlinedInput
                    style={{
                      borderRadius: '10px',
                      width: '671px',
                      height: '70px',
                      transition: 'border-color 0.3s',
                    }}
                    defaultValue="Johndoe@gmail.com"
                    color="secondary"
                    focused
                    aria-describedby="outlined-weight-helper-text"
                    id="email"
                    onChange={emailValidation}
                    value={email}
                    className={email.length === 0 ? "input-control fill-email" : isEmailCorrect ? "input-control valid-email" : "input-control invalid-email"}
                    endAdornment={
                      <InputAdornment position="end">
                        {isEmailCorrect && (
                          <IconButton color="secondary">
                            <TaskAltIcon />
                          </IconButton>
                        )}
                      </InputAdornment>
                    }
                    startAdornment={
                      <InputAdornment position="end">
                        <IconButton>

                        </IconButton>
                      </InputAdornment>}
                    
                    label="Email"
                    onMouseOver={(e) => {
                      e.target.style.borderColor = 'red'; // Change the border color on hover
                    }}
                    onMouseOut={(e) => {
                      e.target.style.borderColor = 'initial'; // Reset the border color on mouse out
                    }}
                  />
                </FormControl>
                  <a
                    href="https://accounts.google.com/v3/signin/identifier?dsh=S520939501%3A1679419157919013&continue=https%3A%2F%2Faccounts.google.com%2Fb%2F0%2FAddMailService&followup=https%3A%2F%2Faccounts.google.com%2Fb%2F0%2FAddMailService&ifkv=AWnogHc7FxscS196j77AiTpXPIdS5GX2FzPGLGgdl26wSt9KbGBg-38wBsDhm1Pzhl8T5ioDw9r6Ag&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                    className="font-semibold text-[22px] text-deep_purple-A200 sm:text-lg md:text-xl underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>Resend Cord </Text>
                  </a>
                </div>
                <Link to="/verificationcordpage">
                <Button
                  className="cursor-pointer font-bold min-w-[671px] md:min-w-full rounded-[15px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                  color="deep_purple_A200"
                  size="lg"
                  variant="fill"
                >
                  Send Email
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPasswordpagePage;
