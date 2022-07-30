const Navbar = () => {
    return ( 
        <div className="bg-stone-800 w-full">
            <ul className="text-white grid grid-cols-2">
                <li>ShoeFury</li>
                <div className="place-self-end flex">
                    <li>Cart</li>
                    <li>Profile</li>
                    <li>Register</li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar