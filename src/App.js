import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Layout from './pages/Layout';
import './App.css';




function App() {
  return (
    <div>
      <Layout />
      
    </div>
  )

}

export default App;

<ul className='s_media list-unstyled '>
                            <li className=''>Siga-nos nas Redes Socias</li>
                            <li>
                                <Link> <i className='bi bi-instagram'></i></Link>
                            </li>
                            <li> <Link><i className='bi bi-envelope '></i></Link>
                            </li>
                            <li>
                            <Link><i className='bi bi-facebook'></i></Link>
                            </li>
                               
                                
                            
                        </ul>