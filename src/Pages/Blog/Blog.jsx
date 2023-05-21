import { useEffect } from "react";

const Blog = () => {

    useEffect(() => {
        document.title = "PHero | Blogs";
    }, []);

    return (
        <div className="container mx-auto py-20">
            <h2 className="font-bold text-2xl text-center bg-gradient-to-r from-pink-600 to-yellow-400 text-transparent bg-clip-text mb-8 tracking-wider">Know ABout - Express JS, MongoDB, Nest JS, SQL-NoSQL</h2>
            <div className="grid grid-cols-1 lg:px-0 px-2 lg:grid-cols-2 gap-4">
                <div className="ques1 bg-white rounded-lg overflow-hidden shadow-md p-5">
                    <h1 className="text-rose-500 font-bold mb-3 text-lg">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                    <div className="max-h-48 overflow-y-auto">
                        <p><span className="font-semibold">Access Token:</span> An access token is a credential that is used to access protected resources or perform certain actions on behalf of a user. It typically contains information about the user and their permissions. Access tokens have a limited lifespan and expire after a certain period of time. They are used to authenticate and authorize requests to an API or server.</p>

                        <p><span className="font-semibold">Refresh Token:</span> A refresh token is a credential that is used to obtain a new access token without requiring the user to reauthenticate. It has a longer lifespan compared to the access token and is used to refresh the access token when it expires. Refresh tokens are securely stored and should not be accessible to unauthorized parties.</p>

                        <p><span className="font-semibold">Access tokens and refresh tokens work together in an authentication system:</span>
                            <br />
                            Access Token: It is a short-lived credential that grants access to protected resources or performs authorized actions. It is included in requests to authenticate and authorize access to APIs or servers.
                            <br />
                            Refresh Token: It is a long-lived credential used to obtain a new access token without requiring the user to reauthenticate. It is securely stored and helps refresh the access token when it expires.
                            <br />
                            On the client-side:

                            Access Token: Store it securely in memory, ideally using browser memory or secure storage provided by the operating system (e.g., Keychain on iOS, KeyStore on Android).

                            Refresh Token: Store it securely in encrypted storage, such as secure HTTP-only cookies or native secure storage provided by the operating system, to prevent unauthorized access.

                            Remember, security is crucial, and specific implementation may vary based on your platform, language, and security requirements. Always follow best practices and consult relevant documentation or experts for your implementation.
                        </p>
                    </div>

                </div>


                <div className="ques2 bg-white rounded-lg overflow-hidden shadow-md p-5">
                    <h1 className="text-rose-500 font-bold mb-3 text-lg">Compare SQL and NoSQL databases?
                    </h1>
                    <div className="max-h-48 overflow-y-auto">
                        <p><span className="font-semibold">SQL</span> databases use a structured, tabular data model with a fixed schema and SQL as the query language. They are suitable for complex relationships and structured data in applications like e-commerce or banking systems.</p>
                        <p><span className="font-semibold">NoSQL</span> databases use various data models, provide flexible schemas, and have their query languages specific to the data model. They are designed for scalability and handling unstructured or semi-structured data in applications with high read/write loads.</p>
                    </div>

                </div>

                <div className="ques3 bg-white rounded-lg overflow-hidden shadow-md p-5">
                    <h1 className="text-rose-500 font-bold mb-3 text-lg">What is express js? What is Nest JS?
                    </h1>
                    <div className="max-h-48 overflow-y-auto">
                        <p><span className="font-semibold">Express.js</span> is a minimalistic and flexible web application framework for Node.js. It provides a simple and unopinionated approach to building web applications and APIs. Express.js allows developers to handle routing, middleware, and other functionalities easily, making it popular for building lightweight and fast web servers.</p>

                        <p><span className="font-semibold">NestJS</span>, on the other hand, is a progressive TypeScript-based framework for building efficient and scalable server-side applications. It is built on top of Express.js and enhances its capabilities by adding a structured and modular architecture inspired by Angular. NestJS provides features like dependency injection, declarative modules, and decorators, which enable developers to create robust and maintainable applications. It is commonly used for building complex enterprise-grade applications and APIs.</p>
                    </div>

                </div>

                <div className="ques4 bg-white rounded-lg overflow-hidden shadow-md p-5">
                    <h1 className="text-rose-500 font-bold mb-3 text-lg">What is MongoDB aggregate and how does it work?
                    </h1>
                    <div className="max-h-48 overflow-y-auto">
                        <p><span className="font-semibold">In MongoDB</span>, the aggregate method is used to perform advanced data aggregation operations on collections. It allows you to process and analyze data using a pipeline of stages. Each stage performs a specific operation on the data and passes the results to the next stage. The stages can include filtering, grouping, sorting, projecting, and other transformations. The aggregate method executes the stages sequentially and returns the final result set. It provides a powerful way to perform complex data manipulations within the database itself.</p>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default Blog;