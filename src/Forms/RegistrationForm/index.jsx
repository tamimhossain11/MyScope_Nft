import React, { useState } from "react";
import { Button, Text } from "components";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { BsFillCaretDownFill } from 'react-icons/bs';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Select, MenuItem } from '@mui/material';



const RegistrationForm = () => {
    const [email, setEmail] = useState("");
    const [isEmailCorrect, setIsEmailCorrect] = useState(false);

    const [mobileNumber, setMobileNumber] = useState("");
    const [isMobileValid, setIsMobileValid] = useState(false);

    const [username, setUsername] = useState("");
    const [isUsernameValid, setIsUsernameValid] = useState(false);

    const [gender, setGender] = useState("male");
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);


    const navigate = useNavigate();

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
    const handleMobileNumberChange = (e) => {
        const mobileValue = e.target.value;

        // Validate mobile number - allow only numbers and check for 11 digits
        const isValid = /^[0-9]{11}$/.test(mobileValue);

        setMobileNumber(mobileValue);
        setIsMobileValid(isValid);
    };
    const handleUsernameChange = (e) => {
        const usernameValue = e.target.value;

        // Validate the username
        const isValid = /^[a-zA-Z0-9]{6,}$/.test(usernameValue);

        setUsername(usernameValue);
        setIsUsernameValid(isValid);
    };

    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const handlePasswordChange1 = (event) => {
        setPassword1(event.target.value);
    };

    const handlePasswordChange2 = (event) => {
        setPassword2(event.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmedEmail = email.trim();

        if (!gender || gender === "") {
            alert("Please select a gender option.");
            return;
        }

        if (password1 !== password2) {
            alert("Passwords do not match. Please make sure they match.");
            return;
        }

        if (trimmedEmail && isMobileValid && isUsernameValid) {
            navigate("/homepage");
        } else {
            alert("Invalid email, mobile number, or username");
        }
        if (!isCheckboxChecked) {
            alert("Please agree to the Terms & Conditions and Privacy Policy.");
            return;
        }
    }





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
    const selectIconStyle = {
        color: "black",
        fontSize: "30px",
        borderRadius: "15px",
        marginRight: "10px"
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="w-[100%] md:w-full">
                <FormControl sx={{ width: '100%', }}>
                    <InputLabel
                        htmlFor="outlined-adornment-email"
                        color="secondary"
                        shrink={true}
                        sx={responsiveInputLabel}
                    >
                        Email*
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

                {/* Mobile Number */}
                <FormControl sx={{ width: '100%',marginTop:"30px" }}>
                    <InputLabel
                        htmlFor="outlined-adornment-mobile-number"
                        color="secondary"
                        shrink={true}
                        sx={responsiveInputLabel}
                    >
                        Mobile Number*
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
                        id="mobile-number"
                        type="tel"
                        onChange={handleMobileNumberChange}
                        value={mobileNumber}
                        endAdornment={
                            <InputAdornment position="end">

                                <IconButton color="secondary">
                                    <WifiCalling3Icon />
                                </IconButton>

                            </InputAdornment>
                        }
                    />
                </FormControl>

                {/* Username */}
                <FormControl sx={{ width: "100%",marginTop:"30px" }}>
                    <InputLabel htmlFor="outlined-adornment-username" color="secondary" shrink={true} sx={responsiveInputLabel}>
                        User Name*
                    </InputLabel>
                    <OutlinedInput
                        style={responsiveInput}
                        sx={{
                            paddingLeft: "10px",
                            fontSize: "20px",
                        }}
                        color="secondary"
                        focused
                        aria-describedby="outlined-weight-helper-text"
                        id="username"
                        type="text"
                        onChange={handleUsernameChange}
                        value={username}
                        className={username.length < 6 || !isUsernameValid ? "input-control invalid-username" : "input-control valid-username"}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton color="secondary">
                                    <PersonOutlineIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                {/* Gender */}
                <FormControl sx={{ width: '100%',marginTop:"30px" }}>
                    <InputLabel
                        htmlFor="outlined-adornment-gender"
                        color="secondary"
                        shrink={true}
                        sx={responsiveInputLabel}
                    >
                        Gender*
                    </InputLabel>
                    <Select
                        style={responsiveInput}
                        sx={{
                            paddingLeft: '10px',
                            fontSize: '20px',
                        }}
                        IconComponent={(props) => (
                            <BsFillCaretDownFill {...props} style={selectIconStyle} />
                        )}
                        color="secondary"
                        focused
                        labelId="demo-simple-select-label"
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <MenuItem value={10}>Male</MenuItem>
                        <MenuItem value={20}>Female</MenuItem>
                        <MenuItem value={30}>Custom</MenuItem>

                    </Select>

                </FormControl>



                {/* Password */}

                <FormControl sx={{ width: '100%',marginTop:"30px" }}>
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

                {/* Confirm Password */}

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
                                    color="black"
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

                {/* Remember Me and Forgot Password links */}
                {/* You can add Remember Me and Forgot Password links as in your original code */}
                {/* Remember to handle the state for Remember Me checkbox */}
                <div className="flex gap-2.5 items-start justify-start mt-5 w-[86%] md:w-full">
                    <input
                        type="checkbox"
                        id="rememberMe"
                        onChange={(e) => setIsCheckboxChecked(e.target.checked)}
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
                        <span className="text-black-900 font-sfpro text-left font-normal">
                            I agree to the{" "}
                        </span>
                        <a href="/termsofservicepage" className="text-deep_purple-A200 font-sfpro text-left font-bold underline">
                            Terms & Conditions
                        </a>
                        {" and "}
                        <a href="/loginpage1" className="text-deep_purple-A200 font-sfpro text-left font-bold underline">
                            Privacy Policy.
                        </a>
                    </Text>
                </div>
                {/* Submit Button */}
                <Button
                    type="submit"
                    className="cursor-pointer font-bold w-full min:w-[671px] mt-[46px] rounded-[15px] sm:text-2xl md:text-[26px] text-[28px] text-center ml-2"
                    color="deep_purple_A200"
                    size="lg"
                    variant="fill"
                >
                    Register
                </Button>
            </form>
        </>
    );
};

export default RegistrationForm;
