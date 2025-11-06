import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flowintoone",
  description: "FlowIntoOne è una piattaforma digitale che riunisce artigiani, piccoli negozi, fornitori e freelance in un unico spazio online, offrendo loro maggiore ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
