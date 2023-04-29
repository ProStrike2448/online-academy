import { type Session } from "next-auth";
import { getServerSession } from "next-auth/next";
import Providers from "./Providers";

import "@/styles/globals.css";
import Header from "./Header";
import { authOptions } from "@/server/auth";

export default async function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  const session: Session | null = await getServerSession(authOptions);
  return (
    <html lang="en">
      <Providers session={session}>
        <body>
          <Header />
          {children}
        </body>
      </Providers>
    </html>
  );
}
