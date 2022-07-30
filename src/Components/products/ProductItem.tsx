interface ProductProps {
    title: string
}

const ProductItem = ({title}: ProductProps) => {
    return(
        <div className="h-[400px] w-[450px] border-2 ">{title}</div>
    )
}

export default ProductItem