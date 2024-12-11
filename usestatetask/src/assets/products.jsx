import { useState } from "react"

// USESTATE ILE BAG YARADIB ESAS MASSIVDEN BAGA OBJECT ELAVE DIB BAGI GOSTERMEK LAZIMDIR VE PRODUCTSDAN MALLARI SILMEYI YAZMAQ LAZIMDIR
// Bu Sade Listi Ozum Yazdim Daha Oxunaqlidir
function PrintProds() {
    let prods = [
        {
            id: 1,
            name: 'iphone 13 pro max',
            storage: 256
        },
        {
            id: 2,
            name: 'iphone 14 pro max',
            storage: 512
        },
        {
            id: 3,
            name: 'iphone x',
            storage: 64
        },
        {
            id: 4,
            name: 'samsung s22',
            storage: 128
        },
        {
            id: 5,
            name: 'iphone 11 pro max',
            storage: 128
        }
    ]
    const [prod, setProd] = useState(prods)
    const [cart, setCart] = useState([]);
    const [CartCheck, setCartCheck] = useState(false);

    const toggleCart = () => {
        setCartCheck(State => !State);
    };

    function handleDelete(id) {
        let id1 = prod.filter(item => item.id !== id)
        setProd(id1)
    }
    const printCart = () => {
        return (
            <div>
                <strong style={{marginLeft:'40px'}}>Your Bag</strong>
                <ul>
                    {cart.length === 0 ? (
                        <h4>Your bag is empty!</h4>
                    ) : (
                        cart.map(item => (
                            <li key={item.id}>
                                <strong>{item.name.toLocaleUpperCase()}</strong>
                                <p>{item.storage}GB</p>
                            </li>
                        ))
                    )}
                </ul>
                <hr style={{width:'400px',
                    borderTop: '4px solid #000',
                    marginLeft:'40px' 
                }}/>
            </div>
        )
    }

    const cartAdd = (id) => {
        let id2 = prod.find(i => i.id === id)
        if (id2) {
            let cart1 = [...cart]
            cart1.push(id2)
            setCart(cart1)
        }
    }

    console.log(cart.map(item => item.id));
    return (
        <div>
            <button onClick={toggleCart} style={{ position: 'relative', width: '200px', marginLeft: '40px' }}>Bag</button>
            {CartCheck && printCart()}
            <ul>
                {prod.map((item) => (
                    <li key={item.id} style={{ listStyleType: 'none' }}>
                        <strong>{item.name.toLocaleUpperCase()}</strong>
                        <p>{item.storage}GB</p>
                        <button onClick={() => handleDelete(item.id)}>Delete</button> <hr />
                        <button onClick={() => cartAdd(item.id)}>Add</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default PrintProds