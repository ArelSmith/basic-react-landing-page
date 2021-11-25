import './assets/vendor/bootstrap-5.1.3-dist/css/bootstrap.min.css';
import './assets/css/style.css';
import rockstar from './assets/img/rockstar.png';

function App() {
  return (
    <div className="App">
      <Navbar />
	  <Jumbotron title="CryZent"/> 
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/#"><img src={rockstar} alt="Logo" width="45" height="45"></img></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <a className="nav-link active" aria-current="page" href="/#">Home</a>
            <a className="nav-link" href="/#">About</a>
            <a className="nav-link" href="/#">Donate</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Jumbotron(props)
{
	const { title } = props;
	return (
		<div className="jumbotron"> 
			<div className="p-5 mb-4 bg-dark text-light">
				<div className="container-fluid py-5">
					<h1 className="display-5 fw-bold">{title}</h1>
					<p className="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum corporis labore exercitationem sequi ex voluptatibus earum distinctio officia fugiat quam!</p>
				</div>
			</div>
		</div>
	);
}

export default App;
