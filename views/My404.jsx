const React = require('react')
const Default = require('./layouts/Default')

function My404() {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
    return (
        <Default>
            <h3>My New 404</h3>
            <li><a href="/breads">Go home</a></li>
        </Default>
    )
}

module.exports = My404