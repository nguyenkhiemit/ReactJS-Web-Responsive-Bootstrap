import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <html>
        <body>
            <div>
            {/*navigation*/}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    <img
                        className="d-block w-70"
                        src="http://pngimg.com/uploads/apple_logo/apple_logo_PNG19687.png"
                    />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Connect</a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/*Image Slider*/}
            <div id="slides" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#slides" data-slide-to="0" className="active"></li>
                    <li data-target="#slides" data-slide-to="1"></li>
                    <li data-target="#slides" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100"
                             src="https://stmed.net/sites/default/files/the-men-who-built-america-wallpapers-30081-8444006.jpg"
                             alt="First slide"/>
                        <div className="carousel-caption">
                            <h1 className="display-2">Bootstrap</h1>
                            <h3>Complete Website Layout</h3>
                            <button type="button" className="btn btn-online-light btn-lg">
                                VIEW DEMO
                            </button>
                            <button type="button" className="btn btn-primary btn-lg">Get Started</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100"
                             src="https://media.npr.org/assets/img/2012/10/14/menwhobuilt_wide-63e4c03a1e9d5af5f992dac0bd8968c7370ad5a8-s800-c85.jpg"
                             alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100"
                             src="https://s3.amazonaws.com/kingandcountry/images/america-vanderbilt/america-vanderbilt.jpg"
                             alt="Third slide"/>
                    </div>
                </div>
            </div>
            {/*Jumbotron*/}
            <div className="container-fluid">
                <div className="row jumbotron">
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
                        <p className="lead">
                            A web hosting service allows individuals and organizations to make their website accessible
                            via the world wide Web.
                        </p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
                        <a href="#">
                            <button type="button" className="btn btn-outline-secondary btn-lg">
                                Web Hosting
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            {/*Welcome Section*/}
            <div className="container-fluid padding">
            </div>
            <div className="row welcome text-center">
                <div className="col-12">
                    <h1 className="display-4">Build with ease</h1>
                    <hr/>
                    <div className="col-12">
                        <p className="lead">
                            Welcome to my Bootstrap 4 website tutorial!
                            Bootstrap is a free and open-source front-end library with HTML and CSS based design.
                        </p>
                    </div>
                </div>
            </div>
            {/*Three Column Section*/}
            <div className="container-fluid padding">
                <div className="row text-center padding">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <i className="fas fa-code"/>
                        <h3>HTML5</h3>
                        <p>Built with the latest version of HTML, HTML5</p>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <i className="fas fa-bold"/>
                        <h3>BOOTSTRAP</h3>
                        <p>Built with the latest version of BOOTSTRAP, BOOTSTRAP 4</p>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <i className="fas fa-css3"/>
                        <h3>CSS</h3>
                        <p>Built with the latest version of CSS, CSS 3</p>
                    </div>
                </div>
                <hr className="my-4"/>
            </div>
            <div className="row padding">
                <div className="col-lg-6">
                    <h2>If you build it...</h2>
                    <p>The columns will automatically stack on top of each other when the screen
                        is less than 576px wide.</p>
                    <p>Resize the browser window to see the effect. Responsive web design has become more
                        important as the amount of mobile traffic now accounts for more than half of
                        total internet traffic.
                    </p>
                    <p>
                        It can also display the web page differently depending on the screen size or
                        viewing device.
                    </p>
                    <br/>
                    <a href="#" className="btn btn-primary">Learn More</a>
                </div>
                <div className="col-lg-6">
                    <img className="d-block w-100"
                         src="https://media.npr.org/assets/img/2012/10/14/menwhobuilt_wide-63e4c03a1e9d5af5f992dac0bd8968c7370ad5a8-s800-c85.jpg"
                         alt="Second slide"/>
                </div>
            </div>
            <hr className="my-4"/>
            {/*Fixed background*/}
            <figure>
                <div className="fixed-wrap">
                    <div id="fixed">
                    </div>
                </div>
            </figure>
            {/*Emoji Section*/}
            <button className="fun" data-toggle="collapse" data-target="#emoji">Click for fun emoji</button>
            <div id="emoji" className="collapse"/>
            <div className="container-fluid padding"/>
            <div className="row text-center">
                <div className="col-sm-6 col-md-3">
                    <img className="gif" src="https://emojipedia-us.s3.amazonaws.com/content/2017/09/21/animoji-rabbit-emojipedia.gif"/>
                </div>
                <div className="col-sm-6 col-md-3">
                    <img className="gif" src="https://emojipedia-us.s3.amazonaws.com/content/2017/09/21/animoji-unicorn-emojipedia.gif"/>
                </div>
                <div className="col-sm-6 col-md-3">
                    <img className="gif" src="https://emojipedia-us.s3.amazonaws.com/content/2017/09/21/animoji-fox-emojipedia.gif"/>
                </div>
                <div className="col-sm-6 col-md-3">
                    <img className="gif" src="https://emojipedia-us.s3.amazonaws.com/content/2017/09/21/animoji-panda-emojipedia.gif"/>
                </div>
            </div>
            {/*Meet the team*/}
            <div className="container-fluid padding">
                <div className="row welcome text-center">
                    <div className="col-12">
                        <h1 className="display-4">Meet the Team</h1>
                    </div>
                    <hr/>
                </div>
            </div>
            {/*Cards*/}
            <div className="container-fluid padding">
                <div className="row padding">
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top"
                                 src="https://images-na.ssl-images-amazon.com/images/I/A1VF0Uv4f1L._RI_.jpg"
                            />
                            <div className="card-body">
                                <h4 className="card-title">John Doe</h4>
                                <p className="card-text">John is an Internet entrepreneur with almost
                                    20 years of experience.</p>
                                <a href="#" className="btn btn-outline-secondary">See Profile</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top"
                                 src="https://images-na.ssl-images-amazon.com/images/I/A1VF0Uv4f1L._RI_.jpg"
                            />
                            <div className="card-body">
                                <h4 className="card-title">John Doe</h4>
                                <p className="card-text">John is an Internet entrepreneur with almost
                                    20 years of experience.</p>
                                <a href="#" className="btn btn-outline-secondary">See Profile</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top"
                                 src="https://images-na.ssl-images-amazon.com/images/I/A1VF0Uv4f1L._RI_.jpg"
                            />
                            <div className="card-body">
                                <h4 className="card-title">John Doe</h4>
                                <p className="card-text">John is an Internet entrepreneur with almost
                                    20 years of experience.</p>
                                <a href="#" className="btn btn-outline-secondary">See Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Two Column Section*/}
            <div className="container-fluid padding">
                <div className="row padding">
                    <div className="col-lg-6">
                        <h2>Our Philosophy</h2>
                        <p>We know that greatness in a disruptive ear requires bold
                            ambition, curious talent and a culture that believes we're smarter together</p>
                        <p>We approach every challenge holistically, with best-in-class expertise in data,
                            creativity, media, technology, search, social and more. We call this Alchemy.
                            It has the power to build our client's brands and transform their business.
                            And while it may seem like magic, we've got it down to a science.</p>
                        <br/>
                    </div>
                    <div className="col-lg-6">
                        <img className="d-block w-100"
                             src="https://media.npr.org/assets/img/2012/10/14/menwhobuilt_wide-63e4c03a1e9d5af5f992dac0bd8968c7370ad5a8-s800-c85.jpg"
                             alt="Second slide"/>
                    </div>
                </div>
            </div>
            {/*Connect*/}
            <div className="container-fluid padding">
                <div className="row text-center padding">
                    <div className="col-12">
                        <h2>Connect</h2>
                        <div className="col-12 social padding">
                            <a href="#"><i className="fab fa-facebook"/></a>
                            <a href="#"><i className="fab fa-twitter"/></a>
                            <a href="#"><i className="fab fa-google-plus-g"/></a>
                            <a href="#"><i className="fab fa-instagram"/></a>
                            <a href="#"><i className="fab fa-youtube"/></a>
                        </div>
                    </div>
                </div>
            </div>
            {/*Footer*/}
            <footer>
                <div className="container-fluid padding">
                    <div className="row text-center">
                        <div className="col-md-4">
                            <img className="w-50"
                                 src="https://trellis.co/wp-content/uploads/2015/09/hidden_meanings_facts_within_famous_logos_cover_image.jpg"
                            />
                            <hr className="light"/>
                            <p>555-555-555</p>
                            <p>nguyenkhiem@gmail.com</p>
                            <p>100 Street Name</p>
                            <p>City, State, 00000</p>
                        </div>
                        <div className="col-md-4">
                            <hr className="light"/>
                            <h5>Our Hours</h5>
                            <hr className="light"/>
                            <p>Monday: 9am - 5pm</p>
                            <p>Saturday: 10am - 4pm</p>
                            <p>Sunday: closed</p>
                        </div>
                        <div className="col-md-4">
                            <hr className="light"/>
                            <h5>Our Hours</h5>
                            <hr className="light"/>
                            <p>City, State, 00000</p>
                            <p>City, State, 00000</p>
                            <p>City, State, 00000</p>
                        </div>
                        <div className="col-12">
                            <hr className="light-100"/>
                            <h5>&copy; w3newbie.com</h5>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        </body>
      </html>
    );
  }
}

export default App;
