import "@/ui/styles/global.scss";

export const metadata = {
  title: "my-app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
