function Product({product, basket, setBasket, total, money}) {

    const basketItem = basket.find(item => item.id === product.id)


    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        //ürün daha önce eklenmiş
        if(checkBasket){
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        }else{
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount -= 1

        if(currentBasket.amount === 0){
            setBasket([...basketWithoutCurrent])
        }else{
            setBasket([basketWithoutCurrent], currentBasket)
        }
    }


    return ( 
        <>
            <div className="product">
                <img src={product.image} alt="" />
                <h4>{product.title}</h4>
                <div>${product.price}</div>
                <div className="actions">
                    <button disabled={!basketItem} onClick={removeBasket}>SAT</button>
                    <span className="amount">{basketItem && basketItem.amount || 0}</span>
                    <button disabled={total + product.price > money} onClick={addBasket}>SATIN AL</button>
                </div>
                <style jsx>
                {
                    `.product{
                        width:50%;
                        padding: 15px;
                        background: #fff;
                        border: 1px solid #ddd;
                        margin-bottom: 20px;
                    }
                    .product img {
                        width:100%;
                    }
                    `
                }
                </style>
            </div>
        </>
     );
}

export default Product;