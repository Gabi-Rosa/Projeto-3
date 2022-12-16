import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'

const Footer = () =>{
    return(
        <div>   
             <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p class="col-md-4 mb-0 text-muted"> &copy; Direitos Reservados</p>
                
                <ul class="nav col-md-4 justify-content-end">
                    <li className='nav-item'>Siga-nos nas Redes Socias
                            <li className='nav-item'>
                                <Link className='nav-link px-2 text-muted'> <i className='bi bi-instagram'></i>
                                </Link>
                            </li>

                            <li className='nav-item'> 
                                <Link className='nav-link px-2 text-muted'><i className='bi bi-envelope '></i></Link>
                            </li>

                            <li className='nav-item'>
                                <Link><i className='bi bi-facebook'></i></Link>
                            </li>
                    </li>
                </ul>
            </footer>
        </div>
    )
}
export default Footer