import { useState, useContext, } from "react"
import { ProductsContext } from "../Context/ProductsContext"



function Cart(){

    const {products, cart, setCart} = useContext(ProductsContext)

    const add =(c) =>{

       setCart((current) => [...current,c] )

    }


    const minus = (c) =>{
        cart.splice(cart.indexOf(c), 1)
        setCart([...cart])
    }


    return (

      <div>

        <div>

          ${cart.reduce((acc, cur) =>{
            acc + products.filter((p) => p.id == cur)[0].price
          } ,0).toFixed(2)
          
          }

      <button
        className="my-5 bg-[red] text-white py-2 px-3 font-bold rounded-[5px]"
        onClick={() => setCart([])}
      >
        Remove All
      </button>

        </div>
        
      {[...new Set(cart)].map((c) => (
        <div
          className="h-52 flex w-[400px] my-5 bg-white p-5 rounded-[20px]"
          key={c}
        >
          <img
            className="w-1/3 basis-full"
            src={products.filter((p) => p.id == c)[0].image}
            alt="product image"
          />
          <div className="w-1/2 basis-full pl-5 flex flex-col justify-center">
            <h4 className="font-bold text-violet">
              {products.filter((p) => p.id == c)[0].title}
            </h4>
            <h6 className="text-grey my-2 font-bold">
              $ {products.filter((p) => p.id == c)[0].price}
            </h6>
            <div className="mt-5">
              <button
                onClick={() => add(c)}
                className="w-5 h-5 bg-orange text-center leading-[100%]"
              >
                +
              </button>
              <span className="mx-2">{cart.filter((p) => p == c).length}</span>
              <button
                onClick={() => minus(c)}
                className="w-5 h-5 bg-orange text-center leading-[100%]"
              >
                -
              </button>
            </div>
          </div>
        </div>
      ))}
      </div>
    )
       
          
   

};export default Cart