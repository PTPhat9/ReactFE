import api from "../api"
import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Nav, NavDropdown} from 'react-bootstrap';
import Header from './layouts/Header';

const App = () => {
    const [category, setCategory] = useState("");

    // useEffect(() => {
    //     setCategory("1") ;
    //     async function categories(){ 
    //         let a =  await api.products.getFeatured();

    //         console.log(a)
    //     }
    //     categories();
    // }, [category]);

    
    return (
        <>
        <Header />
        <div id={"content"}>
            <div className={"content"}>
                <Container>
                    <Row>
                        <Col lg={2} className={"main-left"}>
                            <div className={"menu-item"}>
                                {category}
                            </div>
                        </Col>
                        <Col lg={10} className={"main-right"}>
                                                         
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        </>



        // <div className={App}>
        //     <header className={"App-header"}>
        //         <img className={App-logo" alt={"logo"} />
        //         <p>
        //             Hello world with React.js
        //         </p>
        //         <a
        //             className={"App-link"}
        //             href={https://reactjs.org"
        //             target={_blank"
        //             rel={noopener noreferrer"
        //         >
        //             Learn React
        //         </a>
        //     </header>
        // </div>
    );
};

export default App;