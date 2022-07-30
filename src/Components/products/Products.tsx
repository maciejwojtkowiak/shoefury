import { useEffect, useState } from "react"
import { Product } from "../../types/product"

const Products = () => {
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        const loadProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/product/get-products')
                const products: Product[] = (await response.json()).products
                setProducts(products)
            } catch (error) {
                console.log(error)
            }
        }
        loadProducts()
    })
    console.log(products)
    return(
        <h1 className="grid place-items-center">Products</h1>
    )
}

export default Products