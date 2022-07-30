const Navbar = () => {
    return ( 
        <div className="bg-stone-800 w-full h-16">
            <ul className="text-white grid grid-cols-2 h-full items-center justify-center">
                <li>ShoeFury</li>
                <div className="place-self-end flex gap-4 h-full items-center justify-center">
                    <li >Cart</li>
                    <li >Profile</li>
                    <li>Add product</li>
                    <li className="mr-4">Register</li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar