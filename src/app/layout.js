import "./globals.css";

export const metadata = {
  title: "Raiyan Anam | Full Stack Developer & Competitive Programmer",
  description:
    "Portfolio of Raiyan Anam - Full Stack Developer specializing in Next.js, MERN stack, scalable web architectures, and algorithms.",
  keywords: [
    "Raiyan Anam",
    "Full Stack Developer",
    "Competitive Programmer",
    "Next.js",
    "React",
    "Node.js",
    "Portfolio",
  ],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="night" data-font="jakarta" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('portfolio-theme');
                if (t) document.documentElement.setAttribute('data-theme', t);
                const f = localStorage.getItem('portfolio-font');
                if (f) document.documentElement.setAttribute('data-font', f);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-base-100 text-base-content antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        {children}
      </body>
    </html>
  );
}
