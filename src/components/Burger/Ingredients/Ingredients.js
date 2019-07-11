import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSS from './Ingredients.module.css'

class Ingredients extends Component {
    render() {
        let ingredients = null ;
        switch(this.props.type) {
            case 'bread-bottom':
                ingredients = <div className={CSS.BreadBottom}> </div> ;
                break ;
            case 'bread-top':
                ingredients = (
                    <div className={CSS.BreadTop}>
                        <div className={CSS.Seeds1}></div>
                        <div className={CSS.Seeds2}></div>
                    </div>
                ) ;
                break ;
            case 'meat':
                ingredients = <div className={CSS.Meat}> </div> ;
                break ;
            case 'cheese':
                ingredients = <div className={CSS.Cheese}> </div> ;
                break ;
            case 'salad':
                ingredients = <div className={CSS.Salad}> </div> ;
                break ;
            case 'bacon':
                ingredients = <div className={CSS.Bacon}> </div> ;
                break ;
            default:
                ingredients = null ;
        }
        
        return ( ingredients ) ;
    }
}

Ingredients.propTypes = {
    type: PropTypes.string.isRequired
}

export default Ingredients
