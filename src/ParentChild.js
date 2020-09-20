//parent component

import React from 'react';
import Cat from './Cat'

const cats = [
    {id: 1, name: "Sweety", color: "black"},
    {id: 2, name: "Snow", color: "white"}
]

class App extends React.Componentmponent {

    renderCats = () => {
        const renderedCats = cats.map(cat => {
            return (
                <Cat 
                key={cat.id}
                name={cat.name}
                color={cat.color}
                />
            )
        })
        return renderedCats
    }

    render() {
        return (
            <div className="tiles">
                {this.renderCats()}
            </div>
        )
    }
}

export default App;


//child component 
import React from 'react'

class Cat extends React.Component {

    render() {
        return (
            <div className="catCard">
                <h1>{this.props.name}</h1>
                <p>{this.props.color}</p>
            </div>
        )
    }
}

export default Cat