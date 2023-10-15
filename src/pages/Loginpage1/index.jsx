import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { Button, Img, Line, Text } from "components";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Loginpage1Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email and password match the hardcoded values
    if (email === "amdtamim3@gmail.com" && password === "169831Tamim+") {
      // Redirect to the home page for a valid user
      navigate("/homepage");
    } else {
      // Handle the case of an invalid email or password here
      alert("Invalid email or password");
    }
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successful. 😍");
    },
  });

  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-start mx-auto p-[60px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-[123px] items-start justify-start max-w-[1800px] mb-[25px] mx-auto pb-[70px] pr-[70px] md:px-5 rounded-[30px] w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[51%] md:w-full">
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
          <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[58px] w-[39%] md:w-full">
            <div className="flex flex-col gap-[55px] items-center justify-start w-full">
              <div className="flex flex-col gap-3 items-center justify-start">
                <Text
                  className="sfprotext-regular sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                  size="txtSFProBold40"
                >
                  Login Your Account
                </Text>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
                  size="txtSFProMedium28"
                >
                  Sign In to Continue
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">

                <form onSubmit={handleSubmit}>
                  <FormControl sx={{ m: 2 }} >
                    <InputLabel htmlFor="outlined-adornment-Email or Number" color="secondary">Email or Number*</InputLabel>
                    <OutlinedInput
                      style={{
                        borderRadius: '10px',
                        width: '671px',
                        height: '70px',
                        transition: 'border-color 0.3s',
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

                      label="Email or number"
                      onMouseOver={(e) => {
                        e.target.style.borderColor = 'red'; // Change the border color on hover
                      }}
                      onMouseOut={(e) => {
                        e.target.style.borderColor = 'initial'; // Reset the border color on mouse out
                      }}
                    />
                  </FormControl>


                  <FormControl sx={{ m: 2 }}>
                    <InputLabel htmlFor="outlined-adornment-password" color="secondary" className="text-[22px]">Password*</InputLabel>
                    <OutlinedInput
                      style={{
                        borderRadius: '10px',
                        width: '671px',
                        height: '70px',
                        transition: 'border-color 0.3s',
                      }}
                      defaultValue="169831Tamim+"
                      color="secondary"
                      focused
                      aria-describedby="outlined-weight-helper-text"
                      id="outlined-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end" style={{ padding: "10px" }} >
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleMouseDownPassword}
                            onMouseDown={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />} {/* Swap the icons */}
                          </IconButton>
                        </InputAdornment>
                      }
                      
                      label="Amount a"
                      onMouseOver={(e) => {
                        e.target.style.borderColor = 'secondary'; // Change the border color on hover
                      }}
                      onMouseOut={(e) => {
                        e.target.style.borderColor = 'initial'; // Reset the border color on mouse out
                      }}
                    />
                  </FormControl>
                  <div className="flex flex-row sm:gap-10 items-start justify-between mt-[19px] w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start mb-0.5">
                      <div className="bg-white-A700 border-2 border-gray-200 border-solid h-[26px] rounded-[5px] w-[26px]"></div>
                      <Text
                        className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                        size="txtSFProRegular22"
                      >
                        Remember me
                      </Text>
                    </div>
                    <a
                      href="/forgetpasswordpage"
                      className="mt-0.5 text-[22px] text-deep_purple-A200 sm:text-lg md:text-xl underline"
                    >
                      <Text size="txtSFProMedium22">Forgot password?</Text>
                    </a>
                  </div>
                    <Button
                      type="submit" // This button triggers the form submission
                      className="cursor-pointer font-bold min-w-[671px] md:min-w-full mt-[46px] rounded-[15px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                      color="deep_purple_A200"
                      size="lg"
                      variant="fill"
                    >
                      Log In
                    </Button>
                </form>
                <div className="flex flex-row items-start justify-center mt-[29px] w-[48%] md:w-full">
                  <div

                    className="mb-0.5 text-[22px] text-black-900 sm:text-lg text-right md:text-xl"
                  >
                    <Text size="txtSFProRegular22">Don’t have an account?</Text>
                  </div>
                  <a
                    href="registerpage"
                    className="ml-[5px] mt-0.5 text-[22px] text-deep_purple-A200 sm:text-lg text-right md:text-xl underline"
                  >
                    <Text size="txtSFProSemibold22">Register</Text>
                  </a>
                </div>
              </div>
            </div>
            <div className="h-[22px] md:h-[66px] mt-11 relative w-[99%] md:w-full">
              <Img
                className="absolute bottom-[45%] h-px inset-x-[0] mx-auto object-cover"
                src="images/img_group1000009849.png"
                alt="group1000009849"
              />
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto">
                <Text
                  className="text-black-900 text-lg"
                  size="txtSFProRegular18"
                >
                  Connect With Social Media Or Your Wallet{" "}
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-[46px] w-full">
              <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                <div className="flex flex-row items-center justify-center w-1/4 md:w-full">
                  <Img
                    className="h-[17px] md:h-auto object-cover w-[16%]"
                    src="images/img_maskgroup_17x26.png"
                    alt="maskgroup"
                  />
                  <Text
                    className="ml-[5px] text-[22px] text-deep_purple-A200 sm:text-lg md:text-xl"
                    size="txtSFProMedium22"
                  >
                    Mobile Wallet
                  </Text>
                </div>
                <Line className="bg-black-900 h-px w-full" />
              </div>
            </div>
            <Button
              className="common-pointer cursor-pointer flex items-center justify-center min-w-[671px] md:min-w-full mt-[38px] rounded-[15px]"
              onClick={() => googleSignIn()}
              leftIcon={
                <div className="h-5 mt-1 mb-2 mr-[15px] w-5 shadow-bs">
                  <Img
                    className="h-5"
                    src="images/img_google.svg"
                    alt="google"
                  />
                </div>
              }
              color="blue_A200"
              size="lg"
              variant="fill"
            >
              <div className="font-bold md:text-[26px] sm:text-2xl text-[28px] text-center">
                Google
              </div>
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[671px] md:min-w-full mt-5 rounded-[15px]"
              leftIcon={
                <Img
                  className="h-10 mb-1 w-[30px] mr-[15px]"
                  src="images/img_lock.svg"
                  alt="lock"
                />
              }
              color="gray_700"
              size="lg"
              variant="fill"
            >
              <div className="font-bold md:text-[26px] sm:text-2xl text-[28px] text-center">
                Apple
              </div>
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[671px] md:min-w-full mt-5 rounded-[15px]"
              leftIcon={
                <Img
                  className="h-7 mt-0.5 mb-[3px] mr-[15px]"
                  src="images/img_logosmetamaskicon.svg"
                  alt="logos:metamask-icon"
                />
              }
              color="black_900"
              size="lg"
              variant="fill"
            >
              <div className="font-bold md:text-[26px] sm:text-2xl text-[28px] text-left">
                Metamask
              </div>
            </Button>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[70px] items-center justify-start mt-5 p-[15px] w-full"
              style={{ backgroundImage: "url('images/img_group2629.svg')" }}
            >
              <div className="flex flex-row gap-[15px] items-center justify-center w-[41%] md:w-full">
                <Img
                  className="h-10 w-10"
                  src="images/img_instagram.svg"
                  alt="instagram"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                    size="txtSFProBold28"
                  >
                    Coinbase Wallet
                  </Text>
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[70px] items-center justify-start mt-5 p-[17px] w-full"
              style={{ backgroundImage: "url('images/img_group2630.svg')" }}
            >
              <div className="flex flex-row gap-[15px] items-end justify-center w-[39%] md:w-full">
                <Img
                  className="h-6 mt-[7px]"
                  src="images/img_reply.svg"
                  alt="reply"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                    size="txtSFProBold28"
                  >
                    WalletConnect
                  </Text>
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[70px] items-center justify-end mt-5 p-[15px] w-full"
              style={{ backgroundImage: "url('images/img_group2631.svg')" }}
            >
              <div className="flex flex-row gap-[15px] items-start justify-center mt-0.5 w-[23%] md:w-full">
                <Img
                  className="h-[34px]"
                  src="images/img_computer.svg"
                  alt="computer"
                />
                <div className="flex flex-col items-center justify-start mt-0.5">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                    size="txtSFProBold28"
                  >
                    Ledger
                  </Text>
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[70px] items-center justify-start mt-5 p-[15px] w-full"
              style={{ backgroundImage: "url('images/img_group2632.svg')" }}
            >
              <div className="flex flex-row gap-[15px] items-center justify-center w-[27%] md:w-full">
                <Button
                  className="flex h-10 items-center justify-center rounded-[50%] w-10"
                  size="xs"
                  variant="gradient"
                  color="indigo_500_deep_purple_A400"
                >
                  <Img
                    src="images/img_group1000010417.png"
                    alt="group1000010417"
                  />
                </Button>
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                    size="txtSFProBold28"
                  >
                    Phantom
                  </Text>
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[70px] items-center justify-end mt-5 p-[15px] w-full"
              style={{ backgroundImage: "url('images/img_group2633.svg')" }}
            >
              <div className="flex flex-row gap-[15px] items-start justify-center mt-0.5 w-[23%] md:w-full">
                <Img
                  className="h-[33px]"
                  src="images/img_location_white_a700.svg"
                  alt="location"
                />
                <div className="flex flex-col items-center justify-start mt-0.5">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                    size="txtSFProBold28"
                  >
                    BitKeep
                  </Text>
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[70px] items-center justify-start mt-5 p-[15px] w-full"
              style={{ backgroundImage: "url('images/img_group2631.svg')" }}
            >
              <div className="flex flex-row gap-[15px] items-center justify-center w-[19%] md:w-full">
                <Img
                  className="h-10 md:h-auto object-cover w-10"
                  src="images/img_unnamed.png"
                  alt="unnamed"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                    size="txtSFProBold28"
                  >
                    Core
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage1Page;
