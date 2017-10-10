class Header extends React.Component {
    render() {
        return (
            <div className="header clearfix">
                <Route path="/" component={Navigation} />
                <h3 class="text-muted">Project name</h3>
            </div>
        );
    }

    constructor(props) {
        super(props);
    }
}
