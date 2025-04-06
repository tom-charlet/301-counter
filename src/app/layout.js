import { Montserrat } from "next/font/google";
import "./globals.css";
import { UserContextProvider } from "./context/User";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "301 Counter",
  description: "Compteur de flechettes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${montserrat.variable} antialiased`}>
        <UserContextProvider>
          {children}
        </UserContextProvider>
      </body>
    </html>
  );
}
