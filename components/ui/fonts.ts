import { Inter, Lusitana, Lora, Merriweather } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const lora = Lora({
  subsets: ["latin"],
  variable: "--font-headings",
}); //Headings

export const merriweather = Merriweather({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-body",
}); //Body
