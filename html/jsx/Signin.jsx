class Signin extends React.Component {
    render() {
        return (
            <div>
                <form className="form-signin">
                    <h2 className="form-signin-heading"> Please sign in </h2>
                    <label htmlFor="inputEmail" className="sr-only">
                        {" "}
                        Email address{" "}
                    </label>
                    <input
                        type="email"
                        onChange={this.handleEmailChange}
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        required
                        autoFocus
                    />
                    <label htmlFor="inputPassword" className="sr-only">
                        {" "}
                        Password{" "}
                    </label>
                    <input
                        type="password"
                        onChange={this.handlePasswordChange}
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        required
                    />
                    <button
                        className="btn btn-lg btn-primary btn-block"
                        type="button"
                        onClick={this.signIn}
                    >
                        {" "}
                        Sign in
                    </button>
                </form>
                <div>
                    <Link to="/signup">{"Signup"}</Link>
                </div>
            </div>
        );
    };

    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.signIn = this.signIn.bind(this);
        this.state = {
            email: "",
            password: ""
        };
    };
    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    };
    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    };

    signIn() {
        console.log(this);
        console.log(
            "Email address is " +
                this.state.email +
                " Password is " +
                this.state.password
        );

        if (self.fetch) {
            console.log("fetch");
            fetch("/signin", {
                method: "post",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            })
                .then(function(response) {
                    if (response.ok) {
                        console.log("OK");
                        response.text().then(function(text) {
                            console.log(text);
                        });
                    } else {
                        console.log("Mauvaise réponse du réseau");
                    }
                })
                .catch(function(error) {
                    console.log(
                        "Il y a eu un problème avec l'opération fetch: " +
                            error.message
                    );
                });
        } else {
            axios
                .post("/signin", {
                    email: this.state.email,
                    password: this.state.password
                })
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    };
}
