var BrowserRouter = window.ReactRouterDOM.BrowserRouter;
var Route = window.ReactRouterDOM.Route;
var Switch = window.ReactRouterDOM.Switch;
var Link = window.ReactRouterDOM.Link;

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route path="/" component={Header} />

			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/signin" component={Signin} />
				<Route path="/signup" component={Signup} />
			</Switch>
			<Route path="/" component={Footer} />
		</div>
	</BrowserRouter>,
	document.getElementById("app")
);
