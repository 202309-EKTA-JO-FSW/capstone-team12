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
            <title> HILM | EVENTS</title>
            <h2 className="text-center" style={{ fontSize: '2rem',marginTop: '72px' }}> HILM</h2>
            <Display  pageName='nonevents'/>
        </EventListContextProvider>
    </main >
  );
}
