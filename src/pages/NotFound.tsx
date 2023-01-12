import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = () => {
    return (
        <div className="NotFound">
            <Helmet>
                <title>Konstantinos Voulgaris - Not Found</title>
            </Helmet>
            <h1>Page Not Found!</h1>
            <Link to="/">Go Home</Link>
        </div>
    );
};

export default NotFound;
