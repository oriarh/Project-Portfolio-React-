import React from 'react'
import { Link, useMatch, useResolvedPath} from 'react-router-dom'


export default function () {
    
    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let isActive = useMatch({ path: resolved.pathname, end: true });
      
        return (
          <div>
            <Link to={to} className={isActive? "navLinks active" : "navLinks"}
            >
              {children}
            </Link>
          </div>
        );
      }

    return (
        <nav>
            <div className="row headerRow">
                <div className="col-md-12 col-lg-7">
                    <h2 className="headerName"><Link className="headerName" to='/'>Osama Pervez Riarh</Link></h2>
                </div>
                <div className="col-lg-auto headerLinks"><CustomLink to="/aboutme">About Me</CustomLink></div>
                <div className="col-lg-auto headerLinks"><CustomLink to="/portfolio">Portfolio</CustomLink></div>
                <div className="col-lg-auto headerLinks"><CustomLink to="/contactme">Contact Me</CustomLink></div>
                {/* <div className="col-lg-auto headerLinks"><CustomLink to="https://drive.google.com/file/d/1kInTsRs9k0ulQEUUEHdztN93i7NKRKJe/view?usp=sharing">Resume</CustomLink></div> */}
                <div className="col-lg-auto headerLinks"><CustomLink to="/resume">Resume</CustomLink></div>
            </div>
        </nav>
    )
}