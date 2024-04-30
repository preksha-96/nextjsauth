"use client";

import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
  session: Session | null;
};

const inter = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(inter, "ssmms");
  // const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className="h-screen">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
