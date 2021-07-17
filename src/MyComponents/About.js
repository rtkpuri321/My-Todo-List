import React from 'react'

export const About = () => {
    let newstyle={
        minHeight:"70vh",
        margin: "50px auto",
    }
    return (
        <div className="container" style={newstyle}>
            <h3> This is an about component </h3><hr />
            <p>I am Ritik Puri. This is my first react app.</p>
            <p>Thapar Institute of Engineering and techology.</p>
            <p>Computer Science and Engineering</p><hr />
            <h4>Email:</h4>
            <ol>
                <li><a href="mailto:rpuri_be19@thapar.edu">rpuri_be19@thapar.edu</a></li>
                <li><a href="mailto:rtkpapuri321@gmail.com">rtkpapuri321@gmail.com</a></li>
            </ol>
        </div>
    )
}