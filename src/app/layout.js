"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "My Protfolio",
  description: "Create By  Rabby",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
