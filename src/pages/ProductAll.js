import React,{useEffect, useState} from 'react';
import ProductCard from "../components/ProductCard";
import {Container, Row, Col} from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);  //date를 보여준다.
  const [query, setQuery] = useSearchParams();
  const getProducts = async()=>{
    let searchQuery = query.get("q") || "";  //query 값이 없으면 ""
    console.log("쿼리값은?", searchQuery);  //searchQuery는 json 서버에서 지동 작동 됨
    let url =`https://my-json-server.typicode.com/ryu14110/jnhshop/products?q=${searchQuery}`; 
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    setProductList(data);
  }
  useEffect(()=>{        //API 호출해준다 ->useEffect 두개의 매개변수 (함수,배열) 가진다. 
    getProducts()        // API 함수 호출
  },[query]);            // query 값이 바뀌면 호출해줘

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
