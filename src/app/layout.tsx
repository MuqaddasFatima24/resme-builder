import "./globals.css";

export const metadata = {
  title: "Resume Builder",
  description: "Create a professional resume with ease",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gradient-bg text-secondary flex flex-col items-center">
        {children}
      </body>
    </html>
  );
}

