
import "./globals.css";

export const metadata = {                         //title and description are metadata for the page
  title: "Class0 Next.js",
  description: "Basics of Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col"
      >
        {children}
      </body>
    </html>
  );
}
