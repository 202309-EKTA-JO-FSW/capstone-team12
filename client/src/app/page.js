'use client'
import React, { useEffect, useRef} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import EventListContextProvider from './components/Events/EventsList';
import Display from './components/Display/DispalyEvents';
import Head from 'next/head';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import Image from 'next/image';



export default function Home() {
  const containerRef = useRef(null);
  const lineContainerRef = useRef(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const speed = 0.2;
      const yPos = -window.pageYOffset * speed;
      containerRef.current.style.transform = `scale(${1 + Math.abs(yPos / 1000)})`;
    }
     if (lineContainerRef.current) {
      const offset = window.pageYOffset;
      const opacity = Math.max(0, 1 - offset / 500); // Decrease opacity as user scrolls down
      lineContainerRef.current.style.opacity = opacity;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <Head>
      <title>Hilm | Home</title>
      <link href="https://fonts.googleapis.com/css2?family=Antic+Didone&display=swap" rel="stylesheet" />
    </Head>

    <style>{`
      @keyframes brightEffect {
        0% { text-shadow: 0 0 10px #ffd700; color: #ffd700; }
        50% { text-shadow: 0 0 20px #ffd700, 0 0 30px #ffd700; color: #ffffff; }
        100% { text-shadow: 0 0 10px #ffd700; color: #ffd700; }
      }
      .custom-button {
        background: rgba(218, 239, 245, 0.02);
        color: #F8F0E1; 
      }
      .custom-button:hover {
        background: rgba(137, 170, 206, 0.02);
        color: #FFFF00; 
        border-color: #FFFF00;
      }
    `}</style>

    <Container fluid  style={{ backgroundColor: "#001318" , color:'#F8F0E1'}}>
    <Row>

      <Col md={4} className="my-auto">
      <div id="line-container" className="line-container"  ref={lineContainerRef}>
      <div className="line" style={{ left: '10%', height: '50vh' , animation: 'brightEffect 2s infinite' }}></div> {/* Adjust the height for line length */}
      <div className="line" style={{ left: '5%', height: '60vh', animation: 'brightEffect 2s infinite'  }}></div> {/* Adjust the height for line length */}
      <div className="line" style={{ left: '20%', height: '30vh' , animation: 'brightEffect 2s infinite' }}></div>
      <div className="line" style={{ right: '10%', height: '40vh', animation: 'brightEffect 2s infinite'  }}></div>
      <div className="line" style={{ right: '20%', height: '30vh' }}></div>
      <div className="line" style={{ left: '30%', height: '40vh' }}></div> {/* Adjust the height for line length */}
      <div className="line" style={{ left: '35%', height: '20vh' }}></div>
      <div className="line" style={{ right: '30%', height: '38vh' }}></div>
      <div className="line" style={{ right: '5%', height: '50vh' }}></div>
      <div className="line" style={{ right: '40%', height: '20vh' }}></div>
      <div className="line" style={{ right: '39%', height: '30vh' }}></div>
    {/* Add more lines as needed, adjusting the left/right and height properties */}
    </div>
        <Link href="/events">
          <Image src='/logo.jpg' layout='responsive' width={555} height={455} alt='logo' />
        </Link>
      </Col>
      <Col md={8}  style={{ paddingTop: '10%' }}>
        <div className="text-container" >
          <h1>Your Brilliance</h1>
          <h2>makes our Occasions</h2>
          <h2 style={{ fontSize: "7rem", animation: 'brightEffect 2s infinite' }}>
            Bright
          </h2> 
        </div>
        <div className="card stats-card" style={{backgroundColor: "#f3d250", fontWeight:'bold'}}>
        <div className="card-body">
          <span style={{ marginRight: '30px' }}>5.4 M visitors</span>
          <span style={{ marginRight: '30px' }}>+1000 events</span>
          <span>+2 M tickets sold</span>
        </div>
      </div>
      </Col>
    </Row>
    <div style={{marginTop:'40px', 
    backgroundImage: 'linear-gradient(135deg, hsla(197, 100%, 5%, 1) 40%, hsla(205, 98%, 20%, 1) 60%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#001318", endColorstr="#013A63", GradientType=1)' }}>
      <EventListContextProvider>
        <Display />
      </EventListContextProvider>
    </div>
  </Container>
  </>
    );
  }
    