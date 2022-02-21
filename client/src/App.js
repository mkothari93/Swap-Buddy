import './App.css';

function App() {
  return (
    <div className="App font-link">
      <header>
        {/* <h1>Swap Buddy</h1> */}

{/* header */}
<nav class="navbar navbar-expand-lg">
  <h1 class="navbar-brand">Swap Buddy</h1>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa-regular fa-bars"></i>
  </button>
{/* header hamburger drop dropdown */}
 <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>

      </header>
      <section>
        <nav className="nav-search">
        
        <form>
        <div>
          <label for="search">Already know what you want?</label>
        </div>
          <input type="text" id="search" name="search" placeholder="Search"></input>
          <button>Search</button>
        </form>
        </nav>
      </section>
      
    </div>
  );
}

export default App;
