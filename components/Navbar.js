"use client"; // This is important for client-side rendering

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Drawer, Box, Button, Menu, MenuItem } from '@mui/material';
import Hamburger from 'hamburger-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const router = useRouter();

    const menu_tabs = [
        { id: 0, name: "Home", linkurl: "/" },
        { id: 1, name: "Courses", linkurl: "/" },
        { id: 2, name: "Gallery", linkurl: "/" },
        { id: 3, name: "Placements", linkurl: "/card" },
        { id: 4, name: "Contact Us", linkurl: "/contactus" },
        { id: 5, name: "About Us", linkurl: "/aboutus" },
    ];
    const courseSubmenu = [
        { id: 0, name: "WEB DESIGNING", linkurl: "/course/0" },
        { id: 1, name: "E Accounting", linkurl: "/course/1" },
        { id: 2, name: "DCA", linkurl: "/course/2" },
        { id: 3, name: "O Level", linkurl: "/course/3" },
    ];
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleDrawer = (open) => () => {
        setOpen(open);
    };

    const handleClick = (event, item) => {
        if (item.name === 'Courses') {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSubmenuClick = (subItem) => {
        handleClose();
        router.push(subItem.linkurl);
    };

    return (
        <div className={`navbar_container ${isScrolled ? 'scrolled' : ''}`}>
            <div className="logo_container">
                <Link href={'/'}>
                    <img src="/images/logo.jpg" alt="Logo" />
                </Link>
            </div>
            <div className="tabs">
                {menu_tabs.map((item) => (
                    <Button
                        key={item.id}
                        aria-controls={item.name === 'Courses' ? 'courses-menu' : undefined}
                        aria-haspopup="true"
                        onMouseOver={(event) => handleClick(event, item)}
                    >
                        <Link href={item.linkurl} className="link">
                            <span>{item.name}</span>
                        </Link>
                    </Button>
                ))}
            </div>
            <div className="hamburger_menu">
                <Hamburger toggled={isOpen} toggle={setOpen} />
                <Drawer
                    anchor="left"
                    open={isOpen}
                    onClose={toggleDrawer(false)}
                    variant="temporary"
                    sx={{
                        '& .MuiDrawer-paper': {
                            backgroundColor: '#1b065ed3',
                            color: 'white',
                            position: 'fixed',
                            top: 0,
                            height: '100%',
                            width: "180px",
                            zIndex: 1300,
                            padding: '0'
                        },
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '16px' }}>
                        <div className="menulist">
                            {menu_tabs.map((item) => (
                                <Link key={item.id} href={item.linkurl} className="link" onClick={toggleDrawer(false)}>
                                    <span style={{ marginBottom: '8px', cursor: 'pointer' }}>{item.name}</span>
                                </Link>
                            ))}
                        </div>
                    </Box>
                </Drawer>
            </div>
            <Menu
                id="courses-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                    onMouseLeave: handleClose,
                }}
            >
                {courseSubmenu.map((subItem) => (
                    <MenuItem key={subItem.id} onClick={() => handleSubmenuClick(subItem)}>
                        {subItem.name}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default Navbar;
