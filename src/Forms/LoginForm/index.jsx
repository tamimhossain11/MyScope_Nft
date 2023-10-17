import React, { useState } from "react";
import { Button, Text } from "components";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';


const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailCorrect, setIsEmailCorrect] = useState(false);
    const [rememberMe, setRememberMe] = useState(false); // Add rememberMe state

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

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        console.log("Email:", trimmedEmail);
        console.log("Password:", trimmedPassword);

        if (trimmedEmail === "amdtamim3@gmail.com" && trimmedPassword === "169831Tamim+") {
            navigate("/homepage");
        } else {
            alert("Invalid email or password");
        }
    };
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
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

    return (
        <>
            <form onSubmit={handleSubmit} className="w-[90%] md:w-full">
                <FormControl sx={{ m: 2, width: '100%', }}>
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



                <FormControl sx={{ m: 2, width: '100%' }}>
                    <InputLabel
                        htmlFor="outlined-adornment-password"
                        color="secondary"
                        shrink={true}
                        sx={responsiveInputLabel}
                    >
                        Password*
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
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        onChange={handlePasswordChange}
                        value={password}
                        endAdornment={
                            <InputAdornment position="end" style={{ padding: "10px" }}>
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <div className="flex flex-row sm:gap-10 ml-2 items-start justify-between mt-[19px] w-full ">
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
                    <a
                        href="/forgetpasswordpage"
                        className="mt-0.5 text-[22px] text-deep_purple-A200 sm:text-lg md:text-xl underline"
                    >
                        <Text size="txtSFProMedium22">Forgot password?</Text>
                    </a>
                </div>

                <Button
                    type="submit"
                    className="cursor-pointer font-bold w-full min:w-[671px] mt-[46px] rounded-[15px] sm:text-2xl md:text-[26px] text-[28px] text-center ml-2"
                    color="deep_purple_A200"
                    size="lg"
                    variant="fill"
                >
                    Log In
                </Button>
            </form>
        </>
    );
};

export default LoginForm;
