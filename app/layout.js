import { Montserrat } from "next/font/google";
import "./globals.css";



const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Babak Nikfar",
  description: "FORMULA 1% OWNER",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
          className={`${montserrat.variable} font-montserrat antialiased`}>
        {children}
        
      </body>
    </html>
  );
}
