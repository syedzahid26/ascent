"use client"; // This is important for client-side rendering

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Drawer, Box, Button, Menu, MenuItem, List, ListItem, Collapse } from '@mui/material';
import Hamburger from 'hamburger-react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openCourses, setOpenCourses] = useState(false); // State to control submenu in hamburger menu
    const router = useRouter();

    const menu_tabs = [
        { id: 0, name: "Home", linkurl: "/" },
        { id: 1, name: "Courses", linkurl: "/" },
        { id: 2, name: "Gallery", linkurl: "/" },
        { id: 3, name: "Placements", linkurl: "/" },
        { id: 4, name: "Contact Us", linkurl: "/contactus" },
        { id: 5, name: "About Us", linkurl: "/aboutus" },
    ];

    const courseSubmenu = [
        { id: 0, name: "WEB DESIGNING", linkurl: "/course/0" },
        { id: 1, name: "Tally Prime", linkurl: "/course/1" },
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

    const handleCoursesClick = () => {
        setOpenCourses(!openCourses);
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
                    className='menulist'
                    sx={{
                        '& .MuiDrawer-paper': {
                            backgroundColor: '#1b065ed3',
                            color: 'white',
                            position: 'fixed',
                            top: 20,
                            height: '100%',
                            width: "180px",
                            zIndex: 1300,
                            padding: '0'
                        },
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '16px' }}>
                        <List>
                            {menu_tabs.map((item) => (
                                <React.Fragment key={item.id}>
                                    {item.name === 'Courses' ? (
                                        <ListItem button onClick={handleCoursesClick}>
                                            <span className='mobile_tabs'>{item.name}</span>
                                            {openCourses ? <ExpandLess /> : <ExpandMore />}
                                        </ListItem>
                                    ) : (
                                        <ListItem button onClick={toggleDrawer(false)}>
                                            <Link href={item.linkurl} className="mobile_tabs">
                                                <span style={{ marginBottom: '8px', cursor: 'pointer' }}>{item.name}</span>
                                            </Link>
                                        </ListItem>
                                    )}
                                    {item.name === 'Courses' && (
                                        <Collapse in={openCourses} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                {courseSubmenu.map((subItem) => (
                                                    <ListItem button key={subItem.id} onClick={toggleDrawer(false)}>
                                                        <Link href={subItem.linkurl} className="subCourses">
                                                            <span style={{ marginLeft: '16px', cursor: 'pointer' }}>{subItem.name}</span>
                                                        </Link>
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Collapse>
                                    )}
                                </React.Fragment>
                            ))}
                        </List>
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
