import React, { useState } from "react";
import { Button, Img, Text } from "components";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from "react-router-dom";


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
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();

    console.log("Email:", trimmedEmail);

    if (trimmedEmail === "amdtamim3@gmail.com") {
        navigate("/verificationcordpage");
    } else {
        alert("You are not a user,please register");
    }
};

  const responsiveInput = {
    height: '70px',
    borderRadius: '15px',
    transition: 'border-color 0.3s',

};

const responsiveInputLabel = {
    backgroundColor: 'white',
    fontSize: '24px',
    marginLeft: '5px',
};

const isDisabled = !email  ;


  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-start mx-auto p-[60px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[1800px] mx-auto md:px-5 rounded-[30px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[93%] md:w-full">
            <div className="flex flex-col items-center justify-start w-[53%] md:w-full">
            <div className="min:h-[960px] h-full  relative w-full">
              <Img
                className="min:h-[960px] h-full sm:h-[460px] m-auto object-cover rounded-[30px] w-full"
                src="images/img_rectangle66495.png"
                alt="rectangle66495"
              />
              <div className="absolute bg-black-900_19 flex flex-col h-full inset-[0] items-center justify-center md:px-40 sm:px-5 rounded-[30px]">
                <Img
                  className="h-[357px] md:h-auto my-[86px] object-cover"
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
              <form onSubmit={handleSubmit} className="w-full md:w-full">
                <div className="flex flex-col gap-[22px] items-end justify-start w-full">
                
                <FormControl sx={{ width: '100%', }}>
                    <InputLabel
                        htmlFor="outlined-adornment-Email or Number"
                        color="secondary"
                        shrink={true}
                        sx={responsiveInputLabel}
                    >
                        Email or Number*
                    </InputLabel>
                    <OutlinedInput
                        style={responsiveInput}
                        sx={{
                            paddingLeft: '10px',
                            fontSize: '20px',
                        }}
                        color="secondary"
                        focused
                        aria-describedby="outlined-weight-helper-text"
                        id="email"
                        type="email"
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
                    />
                </FormControl>


                
                  <a
                    href="https://accounts.google.com/v3/signin/identifier?dsh=S520939501%3A1679419157919013&continue=https%3A%2F%2Faccounts.google.com%2Fb%2F0%2FAddMailService&followup=https%3A%2F%2Faccounts.google.com%2Fb%2F0%2FAddMailService&ifkv=AWnogHc7FxscS196j77AiTpXPIdS5GX2FzPGLGgdl26wSt9KbGBg-38wBsDhm1Pzhl8T5ioDw9r6Ag&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                    className="font-semibold text-[22px] text-deep_purple-A200 sm:text-lg md:text-xl underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>Resend Code </Text>
                  </a>
                </div>
                <Button
                    type="submit"
                    className="cursor-pointer font-bold w-full min:w-[671px] mt-[50px] rounded-[15px] md:mb-10 sm:text-2xl md:text-[26px] text-[28px] text-center"
                    color="deep_purple_A200"
                    size="lg"
                    variant="fill"
                    disabled={isDisabled}
                >
                    Send Email
                </Button>
            </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPasswordpagePage;
