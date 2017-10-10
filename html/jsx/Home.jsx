class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1>Jumbotron heading</h1>
                    <p className="lead">
                        Crads justo odio, dapibus ac facilisis in, egestas eget
                        quam. Fusce dapibus, tellus ac cursus commodo, tortor
                        mauris condimentum nibh, ut fermentum massa justo sit
                        amet risus.
                    </p>
                    <p>
                        <Link
                            className="btn btn-lg btn-success"
                            role="button"
                            to="/signup"
                        >
                            {"Signup"}
                        </Link>
                    </p>
                </div>
                <div className="row marketing">
                    <div className="col-lg-6">
                        <h4>Subheading</h4>
                        <p>
                            Donec id elit non mi porta gravida at eget metus.
                            Maecenas faucibus mollis interdum.
                        </p>
                        <h4>Subheading</h4>
                        <p>
                            Morbi leo risus, porta ac consectetur ac, vestibulum
                            at eros. Cras mattis consectetur purus sit amet
                            fermentum.
                        </p>
                        <h4>Subheading</h4>
                        <p>
                            Maecenas sed diam eget risus varius blandit sit amet
                            non magna.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <h4>Subheading</h4>
                        <p>
                            Donec id elit non mi porta gravida at eget metus.
                            Maecenas faucibus mollis interdum.
                        </p>
                        <h4>Subheading</h4>
                        <p>
                            Morbi leo risus, porta ac consectetur ac, vestibulum
                            at eros. Cras mattis consectetur purus sit amet
                            fermentum.
                        </p>
                        <h4>Subheading</h4>
                        <p>
                            Maecenas sed diam eget risus varius blandit sit amet
                            non magna.
                        </p>
                    </div>
                </div>
                <div>
                    <Link to="/signup">{"Signup"}</Link>
                </div>
            </div>
        );
    }

    constructor(props) {
        super(props);
        console.log(props.location);        
    }
}
