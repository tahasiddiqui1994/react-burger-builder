import React, { Component } from 'react' ;
import CSS from './ContactData.module.css' ;
import Button from '../../components/UI/Button/Button' ;
import Spinner from '../../components/UI/Spinner/Spinner' ;
import axios from '../../axios-orders' ;

class ContactData extends Component {

	// constructor(props) {
	// 	super(props)
		
	// 	this.nameInput = React.createRef() ;
	// 	this.emailInput = React.createRef() ;
	// 	this.streetInput = React.createRef() ;
	// 	this.cellNoInput = React.createRef() ;
	// 	this.postalCodeInput = React.createRef() ;
	// 	this.deliveryMethodInput = React.createRef() ;
	// }
	
    state = {
		name: '',
		email: '',
		cellNo: '',
		address: {
			street: '',
			postalCode: ''
		},
		deliveryMethod: '',
		loading: false 
	}

	orderNow = () => {
		console.log("OOOOOOOOOOOOOOOOOOOOOOO") ;
		console.log(this.streetInput, this.nameInput, this.emailInput) ;
		this.setState({
			loading: true
		}) ;
		// console.log("this.props.ingredients: "+this.props.ingredients)
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.totalPrice,
			deliveryMethod: "fastest",
			customer: {
				name: "Taha",
				email: "taha_siddiqui1994@yahoo.com",
				address: "B-66 Gulshan-e-Rafi",
				cellNo: "03032535638",
			}
		}
		axios.post('/checkout.json', order)
			.then(data =>{
				console.log("Data: ")
				console.log(data) ;

				this.setState({
					loading: false,
				}) ;

				this.props.history.push('/') ;
				// setTimeout(() => {
				// 	this.setState({
				// 		loading: false,
				// 		orderNow: false
				// 	}) ;
				// }, 1000)
			}).catch(error => {
				console.log("Error: ") ;
				console.log(error) ;
				this.setState({
					loading: false,
				}) ;
			}) ;
		// console.log("ContactData: "+this.props) ;
	}

    render() {
        return (
        <div className={CSS.ContactData}>
            <h4> Contact Data: </h4>
			{this.state.loading ? <Spinner /> : <form>
				<input ref={this.nameInput} className={CSS.Input} type="text" name="name" placeholder="Name"/>
				<input ref={this.emailInput} className={CSS.Input} type="email" name="email" placeholder="Email"/>
				<input ref={this.streetInput} className={CSS.Input} type="text" name="street" placeholder="Street"/>
				<input ref={this.postalInput} className={CSS.Input} type="text" name="postal" placeholder="Postal Code"/>
				<input ref={this.cellNoInput} className={CSS.Input} type="text" name="cellNo" placeholder="Cell No"/>
				<select ref={this.deliveryMethodInput} className={CSS.Input} >
					<option value="standard">Standard</option>
					<option value="fastest">Fastest</option>
				</select>
				<Button clicked={this.orderNow} buttonType="Success">Order Now</Button>
			</form>}
        </div>
        )
    }
}

export default ContactData ;
