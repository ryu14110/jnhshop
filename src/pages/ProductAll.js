import React,{useEffect, useState} from 'react';
import ProductCard from "../components/ProductCard";
import {Container, Row, Col} from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);  
  // eslint-disable-next-line no-unused-vars
  const [query, setQuery] = useSearchParams();
  const getProducts = async()=>{
    let searchQuery = query.get("q") || "";  
    console.log("쿼리값은?", searchQuery);  
    let url =`https://my-json-server.typicode.com/ryu14110/jnhshop/products?q=${searchQuery}`; 
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    setProductList(data);
  }
  useEffect(()=>{         
    getProducts()   // eslint-disable-next-line react-hooks/exhaustive-deps      
  },[query]);           

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu, index)=>(
            <Col lg={3} key={index}><ProductCard item={menu}/></Col>
          ))}
        </Row>
      </Container>
      
    </div>
  )
}

export default ProductAll
