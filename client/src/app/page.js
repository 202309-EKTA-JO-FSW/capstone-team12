'use client'

import 'bootstrap/dist/css/bootstrap.css';
import { useRouter } from "next/navigation";
import AddToCartButton from "./components/AddToCart";
import Logout from "./components/Logout";
import SearchBar from "./components/SearchBar/SearchBar";




export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p>home page</p>
        <AddToCartButton/>
        <SearchBar />
        <Logout/>
      </div>
    </main>
  );
}
