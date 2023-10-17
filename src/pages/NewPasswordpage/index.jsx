import React, { useState } from "react";
import { Button, Img, Text } from "components";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";

const NewPasswordpage = () => {
  const navigate = useNavigate();

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handlePasswordChange1 = (event) => {
    setPassword1(event.target.value);
  };

  const handlePasswordChange2 = (event) => {
    setPassword2(event.target.value);
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (password1 === password2) {
      // Passwords match, navigate to the login page
      navigate("/loginpage"); // Change the path as per your route configuration
    } else {
      alert("Password didnot matched");
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
  const isDisabled = !password1 || !password2;

  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-start mx-auto p-[60px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-[123px] items-center justify-start max-w-[1800px] mx-auto pr-[126px] md:px-5 rounded-[30px] w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[53%] md:w-full">
          <div className=" h-[960px] sm:h-[460px]  relative w-full">
              <Img
                className=" h-[960px] sm:h-[460px] m-auto object-cover rounded-[30px] w-full"
                src="images/img_rectangle66495.png"
                alt="rectangle66495"
              />
              <div className="absolute bg-black-900_19 flex flex-col h-full inset-[0] items-center justify-center md:px-10 sm:px-5 rounded-[30px]">
                <Img
                  className="h-[357px] md:h-auto my-[86px] object-cover"
                  src="images/img_myscpelogo1.png"
                  alt="myscpelogoOne"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-14 items-center justify-start w-[41%] md:w-full">
            <div className="flex flex-col gap-[13px] items-center justify-start">
              <Text
                className="sm:text-4xl md:text-[34px] text-[36px] text-black-900 text-center"
                size="txtSFProBold40"
              >
                Add new Password
              </Text>
              <Text
                className="sm:text-2xl md:text-[24px] text-[26px] text-black-900 text-center"
                size="txtSFProMedium28"
              >
                Put Your New Password
              </Text>
            </div>
            <div className="flex flex-col gap-[50px] items-center justify-start w-full">
              <form onSubmit={handleContinue} className="w-full">
                <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                  <FormControl sx={{ width: '100%' }}>
                    <InputLabel
                      htmlFor="outlined-adornment-password1"
                      color="secondary"
                      shrink={true}
                      sx={responsiveInputLabel}
                    >
                      New Password*
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
                      id="outlined-adornment-password1"
                      type={showPassword1 ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end" style={{ padding: "10px" }}>
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword1(!showPassword1)}
                            edge="end"
                          >
                            {showPassword1 ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      value={password1}
                      onChange={handlePasswordChange1}
                    />
                  </FormControl>

                  <FormControl sx={{ width: '100%', marginTop: '30px' }}>
                    <InputLabel
                      htmlFor="outlined-adornment-password2"
                      color="secondary"
                      shrink={true}
                      sx={responsiveInputLabel}
                    >
                      Confirm Password*
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
                      id="outlined-adornment-password2"
                      type={showPassword2 ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end" style={{ padding: "10px" }}>
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword2(!showPassword2)}
                            edge="end"
                          >
                            {showPassword2 ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      value={password2}
                      onChange={handlePasswordChange2}
                    />
                  </FormControl>

                  <div className="flex flex-row gap-2 items-center justify-start mb-0.5">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                      style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '5px',
                        border: '2px solid #EAEAEA',
                      }}
                    />
                    <Text
                      className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                      size="txtSFProRegular22"
                    >
                      Remember me
                    </Text>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="cursor-pointer font-bold w-full min:w-[671px] mb-5 mt-[46px] rounded-[15px] sm:text-2xl md:text-[26px] text-[28px] text-center ml-2"
                  color="deep_purple_A200"
                  size="lg"
                  variant="fill"
                  disabled={isDisabled} // Disable the button if either password field is empty
                >
                  Continue
                </Button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default NewPasswordpage;
