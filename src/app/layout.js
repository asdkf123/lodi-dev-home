import { Inter } from "next/font/google";
import "../styles/globals.css";
import Link from "next/link";
import {executeQuery} from "@/app/api/db";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lodi's DEV Blog",
  description: "Generated by create next app",
  icons: {
    icon: "/logo.png",
  }
};

export default async function RootLayout({ children }) {
  let data = await executeQuery('SELECT * FROM visitors', []);
  let queryData = JSON.parse(JSON.stringify(data));
  return (
    <html lang="en">
      <body className={inter.className}>
      <div>
        <Link href="/"><img src="/logo.png" alt="Logo"></img></Link>
        <Link href="/list">List</Link>
        <Link href="/cart">Cart</Link>
        <span>
          <span>visitors</span>
          <span>total: {queryData[0].visitors_total}</span>
          <span>today: {queryData[0].visitors_today}</span>
        </span>
      </div>
      {children}
      </body>
    </html>
  );
}
