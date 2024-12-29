import "./globals.css";

export const metadata = {
  title: "Mr Beast Memecoin",
  description: "Join the MrBeast Revolution – Where Memes Meet Cryptocurrency!",
  icons: {
    icon: [
      {
        url: '/logo.png',
        href: '/logo.png',
      }
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  manifest: '/manifest.json'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
