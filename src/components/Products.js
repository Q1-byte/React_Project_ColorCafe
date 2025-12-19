import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Products = ({id, title, price, imgUrl, content, priceLabel}) => {

    const navigate = useNavigate();

return (
    <div className="col-md-3 col-6" style={{ marginBottom: "44px" }}>
        <Nav.Link  className="c1" onClick={() => navigate(`/detail/${id}`)} >
            <div className="menu-img-wrap big-img" style={{width: "100%", aspectRatio: "1/1", margin: "0 auto"}}>
                <img className="menu-img" src={process.env.PUBLIC_URL +"/"+ imgUrl} alt={title} />
            </div>
            <h5 style={{ marginTop: "8px", fontSize: "1.05rem" }}>{title}</h5>
            <p style={{ fontSize: "0.95rem", minHeight: "38px" }}>{content}</p>
            <span style={{ fontSize: "0.98rem" }}>{priceLabel ? priceLabel : price}</span>
        </Nav.Link>
    </div>
    );
};

export default Products;
