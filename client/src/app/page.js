'use client'
import { useRouter } from "next/navigation";
import AddToCartButton from "./components/AddToCart";




export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p>home page</p>
        {/* <AddToCartButton/> */}
      </div>
    </main>
  );
}
