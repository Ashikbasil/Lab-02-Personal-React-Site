import React from 'react';

// You need to import your shared header...
import Header from '../shared/Header';
import {Button} from 'react-bootstrap';
const Home = () => {
  return (
    <>
      <Header title="Home"/>
      <Button href="/About">About</Button>
    </>
  );
}
 
export default Home;