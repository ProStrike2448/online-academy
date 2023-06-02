import AuthProvider from "./AuthProvider";

import "@/styles/globals.css";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: Props) {
  return (
    <html lang="en">
      <AuthProvider>
        <body>
          <Header />
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
