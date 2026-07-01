import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import LoadingSpinner from '../component/LoadingSpinner';
import AlertMessage from '../component/AlertMessage';

const ProductAll = ({ loading, setLoading }) => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    setLoading(true);
    try {
      let searchQuery = query.get("q") || "";
      let url = `https://my-json-server.typicode.com/Jaeework/codingnoona-react-study/products?q=${searchQuery}`;
      let response = await fetch(url)
      let data = await response.json();
      setProductList(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getProducts()
  }, [query]);

  return (
    <div>
      <Container>
        {loading ? 
          <LoadingSpinner message={'상품 목록을 불러오는 중입니다'} /> : 
          <Row>
            {productList?.length > 0 ? productList.map((item, index) => {
              return (
                <Col key={index} md={4} lg={3}>
                  <ProductCard item={item} />
                </Col>
              );
            }) :
            <AlertMessage message={"표시할 상품이 없습니다"} />
            }
          </Row>
        }
      </Container>
    </div>
  )
}

export default ProductAll
