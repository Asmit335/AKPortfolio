import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "../../components/PageTransition";
import Header from "../../components/Header";
// import StairTransition from "@/components/StairTransition";
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});
export const metadata = {
  title: "Asmit | Portfolio",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        {/* <StairTransition /> */}
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}