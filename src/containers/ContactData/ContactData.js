import React, { Component } from 'react' ;
import CSS from './ContactData.module.css' ;
import Button from '../../components/UI/Button/Button' ;
import axios from '../../axios-orders' ;

class ContactData extends Component {

    state = {
		name: '',
		email: '',
		address: {
			street: '',
			postalCode: ''
		},
		loading: false 
	}

	orderNow = () => {
		
		this.setState({
			loading: true
		}) ;
		console.log("this.props.ingredients: "+this.props.ingredients)
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.totalPrice,
			deliveryMethod: "fastest",
			customer: {
				name: "Taha",
				address: "B-66 Gulshan-e-Rafi",
				cellNo: "03032535638",
			}
		}
		axios.post('/checkout.json', order)
			.then(data =>{
				console.log("Data: "+data) ;

				this.setState({
					loading: false,
				}) ;
				// setTimeout(() => {
				// 	this.setState({
				// 		loading: false,
				// 		orderNow: false
				// 	}) ;
				// }, 1000)
			}).catch(error => {
				console.log("Error: "+error) ;
				this.setState({
					loading: false,
				}) ;
			}) ;
		console.log("ContactData: "+this.props) ;
	}

    render() {
        return (
        <div className={CSS.ContactData}>
            <h4> Contact Data: </h4>
			<form>
				<input className={CSS.Input} type="text" name="name" placeholder="Name"/>
				<input className={CSS.Input} type="email" name="email" placeholder="Email"/>
				<input className={CSS.Input} type="text" name="street" placeholder="Street"/>
				<input className={CSS.Input} type="text" name="postal" placeholder="Postal Code"/>
				<Button clicked={this.orderNow} buttonType="Success">Order Now</Button>
			</form>
        </div>
        )
    }
}

export default ContactData ;
