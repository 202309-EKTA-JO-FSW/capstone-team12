'use client'
// import Test from "./components/Test";
import EventsList from './events/page';

import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from "./components/SearchBar/SearchBar";
import EventListContextProvider from './components/Events/EventsList';
import Display from './components/Display/DispalyEvents';


export default function Home() {

  return (
    <main >
        <title>Hilm | Home</title>
        <SearchBar />
        <EventListContextProvider>
            <Display/>
        </EventListContextProvider>
    </main >
  );
}
