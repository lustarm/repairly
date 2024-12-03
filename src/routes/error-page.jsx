import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="min-h-screen text-3xl flex flex-col items-center
            justify-center text-black">
            {/* this looks crazy i cant lie */}
            <h1>Oops!</h1>
            {error ? (
                <p>Sorry, an unexpected error has occurred.</p>
            ) : (
                <p>The path you are looking for is invalid.</p>
            )}
            <p>
                {error && <i>{error.statusText || error.message}</i>}
            </p>
        </div>
    );
}

