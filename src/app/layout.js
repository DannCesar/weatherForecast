import "./globals.css";
import Home from "./pages/home";


export const metadata = {
  title: "Weather Forecast",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Home />
        
      </body>
    </html>
  );
}
