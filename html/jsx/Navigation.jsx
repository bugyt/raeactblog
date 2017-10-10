
class Navigation extends React.Component {
  
  render() {
    
    console.log("render " + this.props.location.pathname);
    return (
      <div>
        <ul className="nav nav-pills pull-right" id="menu">
          
          <li role="presentation" className={(this.props.location.pathname) === "/" ? "active" : ""}>
            <Link to="/" activestyle={{ color: 'red' }}>{"Home"}</Link>
          </li>
          <li role="presentation" className={(this.props.location.pathname) === "/signup" ? "active" : ""}>
            <Link to={{ pathname: '/signup' }}>{"Signup"}</Link>
          </li>
          <li role="presentation" className={(this.props.location.pathname) === "/signin" ? "active" : ""}>
            <Link to="/signin">{"Signin"}</Link>
          </li>
        </ul>
      </div>
    );
  }

  constructor(props) {
        super(props);       
        this.render = this.render.bind(this);
          
   }
}