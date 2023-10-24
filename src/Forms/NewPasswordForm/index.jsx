import React, { useState } from "react";
import { Button, Text } from "components";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";

const NewPasswordForm = () => {
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
            
    </>
  );
};

export default NewPasswordForm;
