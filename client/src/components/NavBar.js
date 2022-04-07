import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {input} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom';
import './modals/style.css'
const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar className="color-nav" variant="light">
            
            <Container>
                <NavLink style={{color:'yellow'}} to={SHOP_ROUTE}>Lava Hot Deals</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Form class="form-inline">
             <input class="form-control mr-sm-2" type="search" placeholder="Поиск товара" aria-label="Search" style={{cursor: 'pointer',  width: '150px',  border: '10px'}}></input> </Form>
    <Button class="btn btn-outline-success my-2 my-sm-0" type="submit" variant={"outline-warning"} style={{cursor: 'pointer', color:'yellow', background: 'red', width: '100px',  border: '2px', marginLeft : '10px'}}>Найти</Button>
 
                        
                        <Button
                            variant={"outline-warning"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                            style={{marginLeft : '10px'}}>
                            Админ
                        </Button>
                        <Button
                            variant={"outline-warning"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Выход
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)} style={{marginRight : '20px'}}>Авторизация</Button>
                        <Form class="form-inline">
             <input class="form-control mr-sm-2" type="search" placeholder="Поиск товара" aria-label="Search" style={{cursor: 'pointer',  width: '150px',  border: '10px'}}></input> </Form>
    <Button class="btn btn-outline-success my-2 my-sm-0" type="submit" variant={"outline-warning"} style={{cursor: 'pointer', color:'yellow', background: 'red', width: '100px',  border: '2px', marginLeft : '10px'}}>Найти</Button>
 
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;
