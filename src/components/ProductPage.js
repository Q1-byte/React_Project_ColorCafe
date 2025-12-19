import React from "react";
import data from "../db/menu";
import "./ProductPage.css";

function ProductPage() {
  return (
    <div className="product-container" style={{ marginTop: "80px", marginBottom: "60px" }}>
      {/* About/Brand Section */}
      <section className="about-section">
        <h1 className="about-title">ColorCafe</h1>
        <p className="about-sub">색으로 고르는 커피</p>
        <div className="about-grid">
          <div className="about-text">
            <h3>오늘의 색을 고르세요</h3>
            <p>
              ColorCafe는 커피를 단순한 음료가 아닌<br />
              오늘의 기분과 색을 담는 경험으로 만듭니다.<br /><br />
              어떤 커피를 마실지 고민하는 대신,<br />
              오늘의 색을 고르는 순간을 제안합니다.
            </p>
          </div>
          <div className="about-values">
            <div className="value-box">
              <strong>🎨 컬러 기반 선택</strong>
              색으로 시작해 취향으로 완성하는 주문
            </div>
            <div className="value-box">
              <strong>☕ 일상의 커피</strong>
              언제든 편하게 즐기는 균형 잡힌 맛
            </div>
            <div className="value-box">
              <strong>🌿 감성 공간</strong>
              머무르고 싶은 부드러운 분위기
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section>
        <h2 className="menu-section-title">Color Menu</h2>
        <div className="menu-grid">
          {data.map(menu => (
            <div className="menu-card" key={menu.id}>
              <div className="menu-img">
                <img src={process.env.PUBLIC_URL + "/" + menu.imgUrl} alt={menu.title} style={{height: "100%", maxWidth: "100%", objectFit: "contain"}} />
              </div>
              <div className="menu-body">
                <div className="menu-name">{menu.title}</div>
                <div className="menu-desc">{menu.content}</div>
                <div className="menu-footer">
                  <span className="price">{menu.price.toLocaleString()}원</span>
                  <button className="btn-cart">담기</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
