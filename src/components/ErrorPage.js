import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError()
    console.log(error, "This was printed from the error page")
    return(
        <div className="error-container">
            <h1>{JSON.stringify(error)}</h1>
            <p>
                {error.data ? error.data.data : "An Error has occured!"}
                <Link to="/home">Go back to Home!</Link> 
            </p>
        </div>
    )
}