import React from "react";
import { Button, Img, Text } from "components";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const NewPasswordpage = () => {

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-start mx-auto p-[60px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-[123px] items-center justify-start max-w-[1800px] mx-auto pr-[126px] md:px-5 rounded-[30px] w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[53%] md:w-full">
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
          <div className="flex md:flex-1 flex-col gap-14 items-center justify-start w-[41%] md:w-full">
            <div className="flex flex-col gap-[13px] items-center justify-start">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtSFProBold40"
              >
                Add new Password
              </Text>
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
                size="txtSFProMedium28"
              >
                Put Your New Password
              </Text>
            </div>
            <div className="flex flex-col gap-[50px] items-center justify-start w-full">
              <div className="flex flex-col gap-[19px] items-start justify-start w-full">
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
                          {showPassword ?<Visibility />: <VisibilityOff />} {/* Swap the icons */}
                        </IconButton>
                      </InputAdornment>
                    }
                    startAdornment={
                      <InputAdornment position="end">
                        <IconButton>

                        </IconButton>
                      </InputAdornment>}
                    label="Amount a"
                    onMouseOver={(e) => {
                      e.target.style.borderColor = 'secondary'; // Change the border color on hover
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
                          {showPassword ?<Visibility />: <VisibilityOff />} {/* Swap the icons */}
                        </IconButton>
                      </InputAdornment>
                    }
                    startAdornment={
                      <InputAdornment position="end">
                        <IconButton>

                        </IconButton>
                      </InputAdornment>}
                    label="Amount a"
                    onMouseOver={(e) => {
                      e.target.style.borderColor = 'secondary'; // Change the border color on hover
                    }}
                    onMouseOut={(e) => {
                      e.target.style.borderColor = 'initial'; // Reset the border color on mouse out
                    }}
                  />
                </FormControl> 
               
                <div className="flex flex-row gap-2.5 items-center justify-start w-[27%] md:w-full">
                  <div className="bg-white-A700 border-2 border-gray-200 border-solid h-[26px] rounded-[5px] w-[26px]"></div>
                  <Text
                    className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                    size="txtSFProRegular22"
                  >
                    Remember me
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-bold min-w-[671px] md:min-w-full rounded-[15px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                color="deep_purple_A200"
                size="lg"
                variant="fill"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPasswordpage;
