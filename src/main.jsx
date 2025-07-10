import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
// import './index.css';
// import App from './App.jsx';

import PropsExample from './Propes/PropsExample.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <PropsExample />
  </StrictMode>
);
