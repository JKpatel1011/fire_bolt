import React from 'react'
import '../style/WatchCart.css'
import watch_Data from '../Data/Watch'
import { Link } from 'react-router-dom'
import { useCart } from '../AddToCart/CartContext';

export default function WatchAllProduct() {
    const { dispatch } = useCart();

    const addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };
    return (
        <div className='mt-5'>
            <h2 className='section-header__title show-sep text-center'><b>Best <span style={{ color: "#ff4f33" }}>Watch</span></b></h2>
            <div className='d-flex container justify-content-center gap-2 flex-wrap'>

                {
                    watch_Data.slice(7).map((item, i) => {
                        return <>
                            <div className='Cart '>
                                <div className='Img-main d-flex justify-content-center align-items-center'>
                                    <Link to={`/WatchProduct/${item.id}`}>
                                        <img src={item.img} alt={item.title} />
                                    </Link>
                                </div>
                                <div className='d-flex justify-content-between align-items-center p-2 title'>
                                    <h3>{item.title}</h3>
                                    <p className='mt-2'>{item.rating}</p>
                                </div>
                                <div className=' p-1 ps-2 '>
                                    <h4>{item.price}</h4>
                                </div>
                                <div className='ps-2 p-1 Addtocart'>
                                    <Link className='Link' to={"/AddToCart"} onClick={() => addToCart(item)}>
                                        <h5 className='text-dark'>Add to cart</h5>
                                    </Link>
                                </div>
                            </div>
                        </>
                    })
                }


            </div>
        </div>

    )
}