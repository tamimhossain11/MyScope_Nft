import React, { useState } from "react";
import { Button } from "components";
import { FormControl, Input } from '@mui/material';



const NewsLetterForm = () => {
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


    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmedEmail = email.trim();


        console.log("Email:", trimmedEmail);
    };
    const responsiveInput = {
        height: '70px',
    };


    return (
        <>
            <form onSubmit={handleSubmit} className="w-full">


                <div className="bg-white-A700 flex flex-row sm:gap-10 items-center justify-between p-2.5 rounded-[50px] w-full">
                    <FormControl sx={{ width: '100%'}}>

                        <Input
                            style={responsiveInput}
                            sx={{
                                paddingLeft: '20px',
                                fontSize: '20px',
                                border: 'none',
                                outline: 'none',
                            }}
                            id="email"
                            type="email"
                            onChange={emailValidation}
                            value={email}
                            className={email.length === 0 ? "input-control fill-email" : isEmailCorrect ? "input-control valid-email" : "input-control invalid-email"}
                        />
                    </FormControl>
                    <Button
                        className="capitalize cursor-pointer font-bold rounded-[40px] md:text-[26px] text-[28px] text-center sm:text-[15px] w-[25%]"
                        color="deep_purple_A200"
                        size="xl"
                        variant="fill"
                    >
                        Send
                    </Button>
                </div>
            </form>
        </>
    );
};

export default NewsLetterForm;
