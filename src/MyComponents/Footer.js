import React from 'react'


export const Footer = () => {
    let footerstyle={
        width: "100%",
        border: "3px solid green"
    }
    return (

        <footer className="bg-dark text-light py-3" style={footerstyle}>
            <p className="text-center">
                Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}
