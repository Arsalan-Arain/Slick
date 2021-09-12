import React, { useState } from "react";
import classes from '../FormBanner/FormBanner.css';

const form = (props) => {
  let [url, setUrl] = useState(props.productData.image);
  const [cat, setCat] = useState(props.productData.category);
  const [name, setName] = useState(props.productData.name);
  const [price, setPrice] = useState(props.productData.price);

  const changeHandler = (event) => {
    switch (event.target.id) {
      case 'url':
        setUrl(event.target.value)
        break;
      case 'category':
        setCat(event.target.value)
        break;
      case 'name':
        setName(event.target.value)
        break;
      case 'price':
        setPrice(event.target.value)
        break;
    }
  }

  let newProductData = {
    image: url,
    name: name,
    category: cat,
    price: price
  }

  return (
    <form onSubmit={() => props.clicked(newProductData)}>
      <p className={classes.p}>ENTER IMAGE URL</p>
      <input value={url} id="url" required onChange={changeHandler} className={classes.input} type='url' placeholder='Write here...' /><br />
      <p className={classes.p}>SELECT CATEGORY</p>

      <select value={cat} name="category" required onChange={changeHandler} id="category" className={classes.input} style={{ paddingLeft: '0.7rem' }}>
        <option value="">Select here...</option>
        <option value="60c09d4a1ea0d13bd732b738">Food</option>
        <option value="60c09d4a1ea0d13bd732b739">Electronics</option>
        <option value="60c09d4a1ea0d13bd732b73a">Clothes</option>
        <option value="60c09d4a1ea0d13bd732b73b">Vehicle</option>
        <option value="60c09d4a1ea0d13bd732b73c">Households</option>
        <option value="60c09d4a1ea0d13bd732b73d">Gloceries</option>
      </select>

      <p className={classes.p}>PRODUCT NAME</p>
      <input value={name} id="name" required onChange={changeHandler} className={classes.input} type='text' placeholder='Write here...' /><br />
      <p className={classes.p}>PRICE</p>
      <input max={99999} value={price} id="price" required onChange={changeHandler} className={classes.input} type='number' placeholder='E.g. 4500' /><br />
      <button className={classes.Button}>Save</button>
    </form>
  )
}
export default form;