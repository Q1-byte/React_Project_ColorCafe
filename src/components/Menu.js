// ...existing code...
import React, { useState } from "react";



// Menu 페이지: 카테고리별 메뉴 필터, 정렬, 상품 리스트 표시
import Products from "./Products";
import { useParams, useNavigate } from "react-router-dom";
import data from "../db/menu";

// 메뉴 카테고리 정의
const categories = [
  { type: "all", label: "Menu" },
  { type: "coffee", label: "Coffee" },
  { type: "ade", label: "Ade" },
  { type: "slush", label: "Slush" },
  { type: "tea", label: "Tea" },
  { type: "cake", label: "Cake" },
  { type: "donut", label: "Donut" },
];



const Menu = () => {
    // 더보기 기능: 한 번에 보여줄 상품 개수
    const [visibleCount, setVisibleCount] = useState(12);
  // 라우트 파라미터 및 네비게이션
  const { category } = useParams();
  const navigate = useNavigate();
  // 선택된 카테고리, 검색어, 메뉴 데이터 상태
  const [selected, setSelected] = useState(category || "all");
  const [input, setInput] = useState("");
  const [menu, setMenu] = useState(data);

  // 카테고리 변경 시 상태 동기화
  React.useEffect(() => {
    setSelected(category || "all");
  }, [category]);

  // 정렬 함수들
  const sortByName = () => {
    let sortedMenu = [...menu].sort((a, b) => (a.title > b.title ? 1 : -1));
    setMenu(sortedMenu);
  };
  const sortByPriceLowToHigh = () => {
    let sortedMenu = [...menu].sort((a, b) => a.price - b.price);
    setMenu(sortedMenu);
  };
  const sortByPriceHighToLow = () => {
    let sortedMenu = [...menu].sort((a, b) => b.price - a.price);
    setMenu(sortedMenu);
  };

  // 렌더링
  return (
    <div className="container" style={{ marginTop: "80px", marginBottom: "60px" }}>
      {/* 카테고리 버튼 영역 */}
      <div style={{ marginBottom: "30px" }}>
        {categories.map((cat) => (
          <button
            key={cat.type}
            onClick={() => {
              if(cat.type === "all") {
                navigate("/menu");
              } else {
                navigate(`/menu/${cat.type}`);
              }
            }}
            style={{
              marginRight: "20px",
              marginBottom: "10px",
              padding: "7px 24px",
              borderRadius: "8px",
              border: "none",
              background: selected === cat.type ? "#b49264" : "#fff4e3ff",
              color: selected === cat.type ? "#fff" : "#b49264",
              fontWeight: 700,
              fontSize: "1.08rem",
              cursor: "pointer",
              boxShadow: selected === cat.type ? "0 2px 8px rgba(189,180,90,0.10)" : "none"
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 전체 메뉴 보기: 검색, 정렬, 리스트 */}
      {selected === "all" && (
        <>
          {/* 검색/정렬 영역 */}
          <div className="row" style={{ marginBottom: "16px", display: "flex", justifyContent: "flex-end" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", width: "350px", justifyContent: "flex-end" }}>
              <input
                placeholder="상품명을 입력하세요..."
                onChange={(e) => setInput(e.target.value)}
                value={input}
                style={{
                  padding: "6px 10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  width: "165px",
                  fontSize: "0.98rem"
                }}
              />
              <select
                onChange={(e) => {
                  if (e.target.value === "low") sortByPriceLowToHigh();
                  if (e.target.value === "high") sortByPriceHighToLow();
                  if (e.target.value === "name") sortByName();
                }}
                style={{
                  padding: "6px 10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  width: "100px",
                  fontSize: "0.98rem"
                }}>
                <option value="">정렬 선택</option>
                <option value="low">낮은 가격순</option>
                <option value="high">높은 가격순</option>
                <option value="name">이름순</option>
              </select>
            </div>
          </div>
            {/* 상품 리스트 */}
            <div className="row" style={{ marginTop: "20px" }}>
              {menu
                .filter((item) =>
                  item.title.toLowerCase().includes(input.toLowerCase())
                )
                .slice(0, visibleCount)
                .map((item) => (
                  <Products {...item} key={item.id} priceLabel={`￦ ${item.price.toLocaleString()}`} />
                ))}
            </div>
            {/* 더보기 버튼 */}
            {menu.filter((item) => item.title.toLowerCase().includes(input.toLowerCase())).length > visibleCount && (
              <div style={{ textAlign: "center", margin: "30px 0 0 0" }}>
                <button
                  onClick={() => setVisibleCount(visibleCount + 12)}
                  style={{
                    padding: "10px 36px",
                    borderRadius: "8px",
                    border: "none",
                    background: "#b49264",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1.08rem",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(189,180,90,0.10)"
                  }}
                >더보기</button>
              </div>
            )}
        </>
      )}

      {/* 카테고리별 메뉴 보기 */}
      {selected !== "all" && (
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ borderBottom: "2px solid #eee", paddingBottom: "10px", marginTop: "30px" }}>{categories.find(c => c.type === selected).label}</h3>
          <div className="row">
            {data.filter((item) => item.category === selected).map((item) => (
              <Products {...item} key={item.id} priceLabel={`￦ ${item.price.toLocaleString()}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
