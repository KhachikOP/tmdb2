import './App.css';
import logo from './media/logo.svg'

function App() {
  return (
    <div className="App"> 
      <div className='page_wrap'>
           <header>
               <div className='content'>
                   <div className='sub_media'>
                     <div className='nav_wrapper'>
                         <a className='logo' href='/'>
                              <img src = {logo} width='154' height='20'></img>
                         </a>
                         <ul className="dropdown_menu navigation k-widget k-reset k-header k-menu k-menu-horizontal" data-role = "menu" tabIndex = "0" role="menubar">
                            <li className='k-item k-menu-item k-state-default k-first'>
                              <a className="no_click k-link k-menu-link" href="/">Movies</a>
                            </li>
                            <li className='k-item k-menu-item k-state-default k-first'>
                              <a className="no_click k-link k-menu-link" href="/">TV shows</a>
                            </li>
                            <li className='k-item k-menu-item k-state-default k-first'>
                              <a className="no_click k-link k-menu-link" href="/">People</a>
                            </li>
                            <li className='k-item k-menu-item k-state-default k-first'>
                              <a className="no_click k-link k-menu-link" href="/">More</a>
                            </li>
                         </ul>
                     </div>
                     <div className="flex"> 
                      <ul className="primary">
                        <li className='glyph new_buttons'>
                            <a class="new_icon no_click" href ="#">
                                <span class = "glyphicons_v2 plus white">
                                </span>
                            </a>
                        </li>
                        <li class="translate" data-role="tooltip">
                          <div>en</div>
                        </li>
                        <li>
                          <a href ="#">Login</a>
                        </li>
                        <li>
                          <a href ="#">Join TMDB</a>
                        </li>
                        <li className="glyph search_butonns">
                          <a className='search' href='#'>
                            <span class = "glyphicons_v2 search blue">
                            </span>
                          </a>

                        </li>
                      </ul>
                     </div>
                  </div>
               </div>

            </header>
      </div>















      {/* <div className='header'>
          <div className='nav1'>
            <img src ={logo} className='logo'></img>
            <ul className='nav-links'>
                <li><a href = "">Movies</a></li>
                <li><a href = "">TV Shows</a></li>
                <li><a href = "">People</a></li>
                <li><a href = "">More</a></li>
                <li><a href = "">Plus sign</a></li>
                <li><a href = "">Language</a></li>
                <li><a href = "">Login</a></li>
                <li><a href = "">Join TMDB</a></li>
                <li><a href = "">Search</a></li>
            </ul>
          </div>
      </div> */}

    </div>
  );
}

export default App;
