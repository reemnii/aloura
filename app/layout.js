import "./globals.css";
import "swiper/css";

export const metadata = {
  title: "Aloura",
  description: "Luxury mirror brand",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
