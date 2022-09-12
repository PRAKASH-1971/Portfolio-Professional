// import React,{useState} from 'react'
// import Logo from "../images/prakash-logo2.png"
// import "../css/Navbar.css"
// import { NavHashLink } from 'react-router-hash-link';
// import Fade from "react-reveal/Fade";


// function Navbar() {
//   const [barsIcon, setBarsIcon] = useState("block");
//   const [navs, setNavs] = useState("none");

//   function bars() {
//     setBarsIcon("none");
//     setNavs("block");

//     setTimeout(() => {
//       setNavs("none")
//       setBarsIcon("block");
//     }, 5000);
//   }
//   function close() {
//     setNavs("none");
//     setBarsIcon("block");
//   }

//   return (
    // <div className='navvv'>
    //   <div className='navbar'>
    //   <a href="/">

    // <img src={Logo} alt="Logo" />
    //   </a>
    // <div className='right-nav'>
    //    <NavHashLink  to="/#home" ><p>Home</p></NavHashLink>
    //    <NavHashLink  to="/#about" ><p>About</p></NavHashLink>
    //    <NavHashLink  to="/#skills" ><p>Skills</p></NavHashLink>
    //    <NavHashLink  to="/#projects" ><p>Projects</p></NavHashLink>
    //    <NavHashLink  to="/#contact" ><p>Contact</p></NavHashLink>
    // </div>
    // </div>

    // <Fade right cascade>
    //     <div className="mob-nav" style={{ display: `${navs}` }}>
    //       <div className="close">
    //         <i className="fas fa-times" onClick={close} />
    //       </div>
    //       <NavHashLink  to="/#home" ><p>Home</p></NavHashLink>
    //    <NavHashLink  to="/#about" ><p>About</p></NavHashLink>
    //    <NavHashLink  to="/#skills" ><p>Skills</p></NavHashLink>
    //    <NavHashLink  to="/#projects" ><p>Projects</p></NavHashLink>
    //    <NavHashLink  to="/#contact" ><p>Contact</p></NavHashLink>
    //     </div>
    // </Fade>

    //   <div className="bar">
    //     <i
    //       className="fas fa-bars"
    //       style={{ display: `${barsIcon}` }}
    //       onClick={bars}
    //     ></i>
    //   </div>
    // </div>

    

//   )
// }

// export default Navbar
import { ReactNode } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  Image,
  MenuItem,
  MenuDivider, 
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Home', 'About', 'Skills','projects','contact'];

const NavLink = ({ children,linked }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={`#${(linked)}`}
    >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} w={"100%"} p="10px 0px" className='navbar'>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}  w={["100%", "100%", "71%"]} margin="auto">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link} linked={link.toLowerCase()}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Image
                  size={'lg'} w="90px" h="75px"
                  border={"1px solid #EDF2F7"}
                  src={
                    'https://i.ibb.co/6gr1x9x/logoprakash-removebg-preview-1.png'
                  }
                />
              </MenuButton>
              <MenuList>
              <div className='right-nav'>
       <a  href="/#home" ><p>Home</p></a>
        <a href="/#about" ><p>About</p></a>
       <a  href="/#skills" ><p>Skills</p></a>
        <a  href="/#projects" ><p>Projects</p></a>
       <a  href="/#contact" ><p>Contact</p></a>
     </div>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link} linked={link.toLowerCase()}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </Box>
  );
}

