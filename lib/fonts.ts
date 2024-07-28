import { Poppins, Sarpanch, Volkhov } from "next/font/google";

// logo and title/serif
export const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["400"],
});

// body/sans
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// display
export const sarpanch = Sarpanch({
  subsets: ["latin"],
  weight: ["400"],
});
