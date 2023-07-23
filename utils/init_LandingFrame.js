import { resumeData } from "@/app/data/typing";

export const initTyping = (index) => ({
  strings: [resumeData.en[index].resume],
  typeSpeed: 0,
  showCursor: true,
  cursorChar: "",
});

export const initTypingSm = (...index) => ({
  strings: index.map((e) => resumeData.en[e].resume),
  typeSpeed: 0,
  showCursor: true,
  cursorChar: "",
});
export const boxes_styles_sm = {
  width: "100%",
  height: "100%",
  position: "static",
};
