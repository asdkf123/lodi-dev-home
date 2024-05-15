import age from './data.js';

export default function Cart() {
  let Cart = ['토마토','파스타']
  return (
    <div>
      <h4 className="title">Cart</h4>
      {

      }
      <CartItem item = {Cart[0]}/>
      <CartItem item = {Cart[1]}/>
    </div>
  )
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
      age: {age}
    </div>
  )
}