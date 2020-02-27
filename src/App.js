import React, { Component } from 'react'
// CSS
import './App.css'

import Header from './components/Header'
import recettes from './recettes'
import Card from './components/Card'
import Admin from './components/Admin'

// Firebase
import base from './base'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  componentDidMount() {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: 'recettes'
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  ajouterRecette = recette => {
    const recettes = {... this.state.recettes}
    recettes[`recette-${Date.now()}`] = recette
    this.setState({recettes})
  }

  supprimerRecette = key => {
    const recettes = {... this.state.recettes}
    recettes[key] = null
    this.setState({recettes})
  }

  majRecette = (key, newRecette) => {
    const recettes = {... this.state.recettes}
    recettes[key] = newRecette
    this.setState({recettes})
  }

  chargerExemple = () => this.setState({recettes})


  render () {
    const cards = Object.keys(this.state.recettes).map( key => <Card key={key} details={this.state.recettes[key]}></Card> )

    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo}></Header>
        <div className='cards'>
          <div className='card'>
            {cards}
          </div>
        </div>
        <Admin recettes={this.state.recettes}  chargerExemple={this.chargerExemple} ajouterRecette={this.ajouterRecette} majRecette={this.majRecette} supprimerRecette={this.supprimerRecette} pseudo={this.state.pseudo}></Admin>
      </div>
    )
  }
}

export default App
