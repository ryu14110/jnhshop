import React,{ useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {Container, Row, Col, Dropdown, Button} from "react-bootstrap";

const ProductDetail = () => { 
  const [product, setProduct] = useState(null); //데이터 정보를 저장 위해, 처음에는 null
  let{id} = useParams();
  const getProductDetail = async()=>{
    let url =`https://my-json-server.typicode.com/ryu14110/jnhshop/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    setProduct(data);
  }
  useEffect(()=>{   //API 호출은 항상 useEffect에서 
    getProductDetail();  //디테일을 불러올 함수 만든다.
  },[getProductDetail]);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} alt="상품이미지" />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>₩{product?.price}</div>
          <div>{product?.choice === true ? "Conscious choice" : ""}</div>
          <div>{product?.new === true ? "신제품" : ""}</div>
          <br/>
          <Dropdown>
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {product?.size.length > 0 && product.size.map((item, index)=>(
                <Dropdown.Item href="#/action-1" key={index}>{item}</Dropdown.Item>
              ))}              
            </Dropdown.Menu>
          </Dropdown><br/>
          <Button variant="dark" className="add-button">추가</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail;
