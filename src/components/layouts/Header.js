import React from 'react';
import {Container, Row, Col, Nav, NavDropdown} from 'react-bootstrap';

const Header = () => {
    return (
        <>
        <header id={"header"}>
            <div className={"header"}>
                <div className={"header-top"}>
                    <Container>
                        <Row>
                            <Col lg={7} className={"header-top-left"}>
                                <div>
                                    <span>Hello world! Welcome to my world.</span>
                                </div>
                            </Col>
                            <Col lg={5} className={"header-top-right "}>
                                <Nav className={"float-end"}>
                                    <NavDropdown align={"end"} title={"Sign up"} id={"sign-up-nav-dropdown"}>
                                        <NavDropdown.Item >Item 1</NavDropdown.Item>
                                        <NavDropdown.Item >Item 2</NavDropdown.Item>
                                        <NavDropdown.Item >Item 3</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown align={"end"} title={"Language"} id={"language-nav-dropdown"}>
                                        <NavDropdown.Item >Item 1</NavDropdown.Item>
                                        <NavDropdown.Item >Item 2</NavDropdown.Item>
                                        <NavDropdown.Item >Item 3</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={"header-middle"}>
                    <Container>
                        <Row>
                            <Col lg={2} className={"main-left"}>
                                <div>
                                    <img src="/hinh1.jpg" alt={""}/>
                                </div>
                            </Col>
                            <Col lg={10} className={"main-right"}>
                                <Nav className={""}>
                                    <NavDropdown title={"HOME"} id={"basic-nav-dropdown"}>
                                        <NavDropdown.Item >Item 1</NavDropdown.Item>
                                        <NavDropdown.Item >Item 2</NavDropdown.Item>
                                        <NavDropdown.Item >Item 3</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title={"PRODUCT"} id={"basic-nav-dropdown"}>
                                        <NavDropdown.Item >Item 1</NavDropdown.Item>
                                        <NavDropdown.Item >Item 2</NavDropdown.Item>
                                        <NavDropdown.Item >Item 3</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title={"POLICY"} id={"basic-nav-dropdown"}>
                                        <NavDropdown.Item >Item 1</NavDropdown.Item>
                                        <NavDropdown.Item >Item 2</NavDropdown.Item>
                                        <NavDropdown.Item >Item 3</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title={"DROPDOWN"} id={"basic-nav-dropdown"}>
                                        <NavDropdown.Item >Item 1</NavDropdown.Item>
                                        <NavDropdown.Item >Item 2</NavDropdown.Item>
                                        <NavDropdown.Item >Item 3</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title={"CONTACT"} id={"basic-nav-dropdown"}>
                                        <NavDropdown.Item >Item 1</NavDropdown.Item>
                                        <NavDropdown.Item >Item 2</NavDropdown.Item>
                                        <NavDropdown.Item >Item 3</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={"header-bot"}>
                    <Container>
                        <Row>
                            <Col lg={2} className={"main-left"}>
                                <div className={"header-menu"}>
                                    <div className={"header-menu-icon"}>
                                        <i className={"fa fa-solid fa-bars"}></i>
                                    </div>
                                    <span>ALL CATEGORIES</span>
                                </div>
                            </Col>
                            <Col lg={10} className={"main-right"}>
                                <form>
                                    <div className={"box-search"}>
                                        <div className={"search-category"}>
                                            <span>All Category</span>
                                        </div>
                                        <input className={"search-input"} type="text" placeholder={"Search"}/>
                                        <button>
                                            <i className={"fa far fa-search"}></i>
                                        </button>
                                    </div>
                                </form>
                                <div className="cart">
                                    
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header;