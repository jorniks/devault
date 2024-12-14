import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import RecoilContextProvider from "@/providers/RecoilRootProvider";
import Web3ContextProvider from "@/providers/web3ReactProvider";
import { Toaster } from "@/components/ui/toaster";
import "bootstrap-icons/font/bootstrap-icons.css"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import NavBar from "@/components/navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Databank",
  description: "The decentralized data bank you can trust",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-gray-950 text-white antialiased`}>
        <RecoilContextProvider>
          <Web3ContextProvider>
            <NavBar />

            {children}

            <Toaster />
            <ToastContainer
              position="bottom-left"
            />
          </Web3ContextProvider>
        </RecoilContextProvider>
      </body>
    </html>
  );
}
