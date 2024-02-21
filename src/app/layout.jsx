import { Header, Footer } from "@/ui/components/main";
import "@/ui/styles/global.scss";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "XAX",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
