import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Top_contact from "../../components/Top_contact";

// Import and configure the Roboto font with specified weights and subsets
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '500'],
  variable: '--font-roboto'
});

// Define site metadata
export const metadata = {
  title: "Ascent IMT Pulwama",
  description: "Ascent Institute of Management and Technology",
};

// RootLayout component applies the Roboto font globally
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="home_page" >
        <Top_contact />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
// To run the project use: npm run dev