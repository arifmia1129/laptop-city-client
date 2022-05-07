import React from 'react';
import { Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container my-5'>
            <div className='border p-2 rounded mb-5'>
                <h4 className='fw-bold'>Question-1: Difference between JS and node.js?</h4>
                <hr />

                <Table striped bordered hover size="sm" className="text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>JS</th>
                            <th>NodeJs</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr  >
                            <td></td>
                            <td>JavaScript is high-level-programming language. JavaScript is a scripting language. This is known as JS.</td>
                            <td>NodeJs is a JS runtime environment. That allows the JS to run be on server-side.</td>
                        </tr>
                        <tr  >
                            <td></td>
                            <td>JS only can run in the browsers.</td>
                            <td>JS can run other side with help node js.</td>
                        </tr>
                        <tr  >
                            <td></td>
                            <td>Usually js use in client side.</td>
                            <td>Mainly node js use in server side.</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className='border p-2 rounded mb-5'>
                <h4 className='fw-bold'>Question-2: When should use NodeJs and MongoDb?</h4>
                <hr />
                <h5 className="fw-bold">NodeJs:</h5>
                <p>
                    1. NodeJs is specially suited where maintain persistent connection from browser to server side.
                    <br />
                    2. When you write an application that sends update an user in real time.
                    <br />
                    3. It runs JavaScript, so you use same programming language in client side and server side.
                </p>
                <h5 className="fw-bold">MongoDb:</h5>
                <p>
                    1. When web application services many users who do not interact with each other.
                    <br />
                    2. When integrating large amounts of diverse data.
                    <br />
                    3. When need data for high performance application mongodb help you.
                </p>
            </div>
            <div className='border p-2 rounded mb-5'>
                <h4 className='fw-bold'>Question-3: Difference between SQL and NoSQL?</h4>
                <hr />
                <p>
                    <span className='fw-bold'>SQL:</span>
                    <br />
                    1. Relational Database Management System.
                    <br />
                    2. These database best suited for complex queries.
                    <br />
                    3. Vertically scalable.
                    <br />
                    <span className='fw-bold'>NoSQL</span>
                    <br />
                    1. Non Relation Database Management System.
                    <br />
                    2. These database not good for complex queries.
                    <br />
                    3. Horizontally scalable.
                </p>
            </div>
            <div className='border p-2 rounded mb-5'>
                <h4 className='fw-bold'>Question-4: What is purpose and how to work JWT?</h4>
                <hr />
                <h5 className="fw-bold">Purpose:</h5>
                <p>
                    <span className='fw-bold'>Authentication:</span> Firstly jwt provide authentication service. It checks that user is valid or not. When use logged in jwt taken user info and check it.
                    <br />
                    <span className='fw-bold'>Exchange:</span> When jwt identify valid user it sends or exchange valid user information.
                </p>
                <h5 className="fw-bold">Work:</h5>
                <div>
                    {/* img use from jwt website */}
                    <img className='img-fluid' src="https://cdn2.auth0.com/docs/media/articles/api-auth/client-credentials-grant.png" alt="" />
                    <p>
                        1. First of all client or application requests authorization server for authorization.
                        <br />
                        2. If authorization server granted when give an access token.
                        <br />
                        3. When get access token client or application access permitted service or information.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;