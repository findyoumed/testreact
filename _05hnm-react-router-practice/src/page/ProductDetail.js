import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Button, Badge } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../component/LoadingSpinner';
import AlertMessage from '../component/AlertMessage';

const ProductDetail = ({ loading, setLoading }) => {
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState(null);
  const { id } = useParams();

  const getProductDetail = async () => {
    setLoading(true);
    try {
      let url = `https://my-json-server.typicode.com/Jaeework/codingnoona-react-study/products/${id}`;
      let response = await fetch(url)
      let data = await response.json();
      setProduct(data);
    } catch(error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      <Container>
        {loading ? 
          <LoadingSpinner message={"상품 정보를 불러오는 중입니다"} /> :
          <>
            {product? 
              <Row className="mx-md-5 px-md-5 justify-content-center">
                <Col lg={4}>
                  <img width="100%" src={product?.img} alt={product?.title} />
                </Col>
                <Col lg={6} className="product-description">
                  <div>
                    <div className="d-flex my-1">
                      {product?.choice ? <Badge className="me-1" bg="danger">Conscious choice</Badge> : ""}
                      {product?.new ? <Badge className="me-1" bg="dark">New</Badge> : ""}
                    </div>
                    <div className="product-title mb-1">{product?.title}</div>
                    <div className="product-price mb-3">₩{product?.price}</div>
                  </div>
                  <div>
                    {product?.size?.length > 0 ?
                      (<>
                        <p className="mb-3">{size ? `선택한 사이즈: ${size}` : "사이즈 선택"}</p>
                        <div className="d-flex flex-wrap mb-5">
                          {product.size.map((item, index) => {
                            return (<div key={index}
                              className={`product-size-option ratio ratio-1x1 ${size && size === item ? 'active' : ''}`}
                              onClick={() => setSize(item)}>
                              <div>{item}</div>
                            </div>)
                          })}
                        </div>
                      </>)
                      : ""}
                    <Button className="w-100 mb-3" variant="dark">추가</Button>
                  </div>
                </Col>
              </Row> :
              <AlertMessage message={"상품 정보를 불러오지 못했습니다"} />
            }
          </> 
        }
      </Container>
    </div>
  )
}

export default ProductDetail
