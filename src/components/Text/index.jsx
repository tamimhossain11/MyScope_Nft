import React from "react";

const sizeClasses = {
  txtSFProBold22: "font-bold font-sfpro",
  txtSFProBold20: "font-bold font-sfpro",
  txtSFProRegular38Black900: "font-normal font-sfpro",
  txtSFProRegular22Gray900: "font-normal font-sfpro",
  txtSFProMedium26: "font-medium font-sfpro",
  txtSFProMedium24: "font-medium font-sfpro",
  txtSFProSemibold60: "font-semibold font-sfpro",
  txtSFProRegular20Black90001: "font-normal font-sfpro",
  txtSFProMedium28: "font-medium font-sfpro",
  txtSFProBold20WhiteA700: "font-bold font-sfpro",
  txtDMSansMedium26: "font-dmsans font-medium",
  txtSFProMedium32: "font-medium font-sfpro",
  txtSFProBold29: "font-bold font-sfpro",
  txtDMSansRegular22: "font-dmsans font-normal",
  txtSFProBold28: "font-bold font-sfpro",
  txtSFProRegular20Gray40005: "font-normal font-sfpro",
  txtSFProBold24: "font-bold font-sfpro",
  txtSFProBold32: "font-bold font-sfpro",
  txtRubikRomanMedium18WhiteA700: "font-medium font-rubik",
  txtSFProRegular18: "font-normal font-sfpro",
  txtSFProRegular16: "font-normal font-sfpro",
  txtSFProMedium20Gray30001: "font-medium font-sfpro",
  txtRubikRomanBold38: "font-bold font-rubik",
  txtSFProDisplayRegular22: "font-normal font-sfprodisplay",
  txtSFProMedium34: "font-medium font-sfpro",
  txtSFProDisplayBold26: "font-bold font-sfprodisplay",
  txtSFProDisplayRegular20: "font-normal font-sfprodisplay",
  txtSFProBold28DeeppurpleA200: "font-bold font-sfpro",
  txtSFProRegular10: "font-normal font-sfpro",
  txtSFProDisplayBold28: "font-bold font-sfprodisplay",
  txtSFProMedium40: "font-medium font-sfpro",
  txtSFProRegular20RedA700: "font-normal font-sfpro",
  txtSFProMedium20GreenA70001: "font-medium font-sfpro",
  txtSFProDisplayMedium60: "font-medium font-sfprodisplay",
  txtMulishSemiBold22: "font-mulish font-semibold",
  txtSFProSemibold48: "font-semibold font-sfpro",
  txtDMSansBold26: "font-bold font-dmsans",
  txtSFProRegular22WhiteA700: "font-normal font-sfpro",
  txtSFProRegular20Black900: "font-normal font-sfpro",
  txtSFProSemibold40: "font-semibold font-sfpro",
  txtSFProBold40: "font-bold font-sfpro",
  txtSFProDisplayRegular18: "font-normal font-sfprodisplay",
  txtSFProMedium20WhiteA700: "font-medium font-sfpro",
  txtSFProMedium22Gray40005: "font-medium font-sfpro",
  txtDMSansMedium16Gray40001: "font-dmsans font-medium",
  txtSFProMedium22Gray40001: "font-medium font-sfpro",
  txtSFProDisplayBold38: "font-bold font-sfprodisplay",
  txtDMSansMedium26WhiteA700: "font-dmsans font-medium",
  txtSFProRegular24Black900: "font-normal font-sfpro",
  txtSFProBold40WhiteA700: "font-bold font-sfpro",
  txtSFProSemibold38: "font-semibold font-sfpro",
  txtSFProSemibold34Black900: "font-semibold font-sfpro",
  txtEbrimaBold20: "font-bold font-ebrima",
  txtSFProBold48: "font-bold font-sfpro",
  txtRubikRomanRegular22: "font-normal font-rubik",
  txtSFProSemibold30: "font-semibold font-sfpro",
  txtRubikRomanSemiBold28: "font-rubik font-semibold",
  txtSFProSemibold34: "font-semibold font-sfpro",
  txtSFProBold50: "font-bold font-sfpro",
  txtSFProSemibold32: "font-semibold font-sfpro",
  txtSFProDisplayBold48: "font-bold font-sfprodisplay",
  txtAlataRegular20: "font-alata font-normal",
  txtSFProMedium28WhiteA700: "font-medium font-sfpro",
  txtSFProSemibold28Gray50001: "font-semibold font-sfpro",
  txtDMSansMedium16: "font-dmsans font-medium",
  txtSFProMedium60: "font-medium font-sfpro",
  txtSFProMedium65: "font-medium font-sfpro",
  txtSFProSemibold28: "font-semibold font-sfpro",
  txtSFProSemibold26: "font-semibold font-sfpro",
  txtSFProRegular18Gray600: "font-normal font-sfpro",
  txtSFProBold22Gray900: "font-bold font-sfpro",
  txtSFProMedium20DeeppurpleA200: "font-medium font-sfpro",
  txtSFProSemibold20: "font-semibold font-sfpro",
  txtSFProSemibold24: "font-semibold font-sfpro",
  txtSFProSemibold22: "font-semibold font-sfpro",
  txtSFProSemibold48DeeppurpleA200: "font-semibold font-sfpro",
  txtSFProHeavy250: "font-black font-sfpro",
  txtSFProSemibold20Black900: "font-semibold font-sfpro",
  txtSFProSemibold16: "font-semibold font-sfpro",
  txtSFProSemibold32WhiteA700: "font-semibold font-sfpro",
  txtSFProHeavy28: "font-black font-sfpro",
  txtSFProSemibold14: "font-semibold font-sfpro",
  txtSFProSemibold12: "font-semibold font-sfpro",
  txtSFProRegular18WhiteA700: "font-normal font-sfpro",
  txtSFProMedium28Gray50001: "font-medium font-sfpro",
  txtSFProRegular24Gray50001: "font-normal font-sfpro",
  txtSFProMedium20Black90001: "font-medium font-sfpro",
  txtSFProSemibold32Black90001: "font-semibold font-sfpro",
  txtRubikRomanMedium18: "font-medium font-rubik",
  txtSFProDisplayMedium20: "font-medium font-sfprodisplay",
  txtSFProDisplayMedium22: "font-medium font-sfprodisplay",
  txtRubikRomanMedium100: "font-medium font-rubik",
  txtSFProRegular20Green800: "font-normal font-sfpro",
  txtSFProSemibold20Gray30001: "font-semibold font-sfpro",
  txtMulishSemiBold22Black900: "font-mulish font-semibold",
  txtSFProBold22WhiteA700: "font-bold font-sfpro",
  txtSFProRegular28: "font-normal font-sfpro",
  txtSFProLight28: "font-light font-sfpro",
  txtRubikBold26: "font-bold font-rubik",
  txtSFProRegular26: "font-normal font-sfpro",
  txtSFProSemibold24WhiteA700: "font-semibold font-sfpro",
  txtSFProRegular24: "font-normal font-sfpro",
  txtSFProRegular22: "font-normal font-sfpro",
  txtRubikRomanMedium30: "font-medium font-rubik",
  txtSFProRegular20: "font-normal font-sfpro",
  txtSFProRegular24Gray30001: "font-normal font-sfpro",
  txtSFProHeavy65: "font-black font-sfpro",
  txtSFProRegular38: "font-normal font-sfpro",
  txtSFProMedium14: "font-medium font-sfpro",
  txtSFProRegular22Gray40005: "font-normal font-sfpro",
  txtSFProMedium28DeeppurpleA200: "font-medium font-sfpro",
  txtSFProMedium22: "font-medium font-sfpro",
  txtSFProSemibold28Black900: "font-semibold font-sfpro",
  txtSFProSemibold22WhiteA700: "font-semibold font-sfpro",
  txtSFProMedium20: "font-medium font-sfpro",
  txtSFProBold16: "font-bold font-sfpro",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
