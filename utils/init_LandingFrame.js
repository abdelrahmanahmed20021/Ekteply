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
