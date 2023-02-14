import { Stack } from '@mui/system';
import React from 'react';
import './App.css';
import AllEmailList from './Components/AllEmailList';
import Header from './Components/Header';
import SectionBar from './Components/SectionBar';
import Sidebar from './Components/Sidebar';
import TopBarTools from './Components/TopBarTools';

function App() {
  return (
    <div className="App">
      <Header />
      <Stack direction={'row'}>

        <Sidebar />

        <Stack direction={'column'}>
           <TopBarTools />
           <SectionBar />
           <AllEmailList />
        </Stack>

      </Stack>
    </div>
  );
}

export default App;
