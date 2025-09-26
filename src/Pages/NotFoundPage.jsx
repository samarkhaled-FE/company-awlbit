function NotFoundPage() {
    return (
        <div className="not-found-page min-h-screen flex items-center justify-center" style={{ background: "#fff" }}>
            <div className="container flex flex-col items-center">
                <div
                    style={{
                        fontSize: "6rem",
                        fontWeight: "bold",
                        color: "#0B1B2D",
                        letterSpacing: "-0.04em",
                        marginBottom: "1.5rem",
                        fontFamily: "Inter, sans-serif"
                    }}
                >
                    404
                </div>
                <h1
                    className="text-3xl md:text-4xl font-semibold mb-4 text-center"
                    style={{ color: "#0B1B2D" }}
                >
                    PAGE NOT FOUND
                </h1>
                <p className="text-center text-gray-500 mb-8 max-w-lg">
                    We looked everywhere for this page.<br />
                    Are you sure the website URL is correct?<br />
                    Get in touch with the site owner.
                </p>
                <a
                    href="/"
                    className="inline-block rounded-full px-8 py-3 font-bold"
                    style={{
                        background: "#0B1B2D",
                        color: "#fff",
                        transition: "opacity .3s",
                        boxShadow: "0 2px 12px rgba(11,27,45,0.08)",
                        letterSpacing: "0.02em"
                    }}
                >
                    Go Back Home
                </a>
            </div>
        </div>
    );
}

export default NotFoundPage;
