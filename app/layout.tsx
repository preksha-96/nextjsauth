"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Session } from "next-auth";

import { SessionProvider as Provider  } from "next-auth/react";

type Props = {
  children: React.ReactNode;
  session: Session | null;
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = await getServerSession(authOptions);
  return (
    <html lang="en">

    
      <body className={inter.className}>
        <Provider> {children}</Provider>
      </body>
    </html>
  );
}
