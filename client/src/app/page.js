'use client'
// import Test from "./components/Test";
import EventsList from './events/page';

import 'bootstrap/dist/css/bootstrap.css';
import { useRouter } from "next/navigation";
import AddToCartButton from "./components/AddToCart";
import Logout from "./components/Logout";
import SearchBar from "./components/SearchBar/SearchBar";




export default function Home() {
  const router = useRouter();
  return (
    <main >
      <>
        <title>Hilm | Home</title>

        {/* <Test /> */}
        <EventsList />
        <AddToCartButton />

      </>
    </main >
  );
}
