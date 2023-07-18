import { resumeData } from "@/app/data/typing";

export const initTyping = {
  strings: [resumeData.desktop.en[0].resume, resumeData.desktop.en[1].resume],
  typeSpeed: 0,
  showCursor: true,
  cursorChar: "",
};

export const boxes_styles_lg = [
  {
    top: "40px",
    right: "60px",
  },
  {
    top: "70px",
    right: "100px",
  },

  {
    top: "100px",
    right: "180px",
  },
];

export const boxes_styles_sm = {
  width: "100%",
  height: "100%",
  position: "static",
};
