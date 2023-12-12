import { Link } from "react-router-dom";

const RouteTest = () => {
    return (
        <>
            <Link to={'/'}>Home</Link>
            <br />
            <Link to={'/diary'}>DIARY</Link>
            <br />
            <Link to={'/new'}>NEW</Link>
            <br />
            <Link to={'/Edit'}>EDIT</Link>
        </>
    );
};

export default RouteTest;