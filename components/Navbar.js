import React from 'react'

const Navbar = () => {
    const menu_tabs = [
        { id: 0, name: "Home" },
        { id: 1, name: "Courses" },
        { id: 2, name: "Gallery" },
        { id: 3, name: "Placements" },
        { id: 4, name: "Contact Us" },
        { id: 5, name: "Blogs" },
    ];

    return (
        <div className='navbar_container'>
            {menu_tabs.map((item) => (
                <span key={item.id}>{item.name}</span>
            ))}
        </div>
    )
}

export default Navbar