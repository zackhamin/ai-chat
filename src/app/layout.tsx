"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider, useUser } from "@auth0/nextjs-auth0/client";
import AuthButton from "@/components/AuthButton/AuthButton";

const inter = Inter({ subsets: ["latin"] });

function Header() {
  const { user } = useUser();
  return (
    <header className="fixed top-0 right-0 m-4 flex items-center space-x-4">
      <AuthButton />
    </header>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </UserProvider>
  );
}
