

// About 페이지: 브랜드 소개 및 주요 메시지 표시
import "./About.css";


const About = () => {
    // About 페이지 전체 컨테이너 (상단/하단 여백 통일)
    return(
        <div style={{ marginTop: "80px", marginBottom: "60px" }}>
            <div className="product-container">
                {/* 브랜드 임팩트 Hero 영역 - 대표 로고와 슬로건 */}
                <div className="about-hero">
                    {/* 브랜드 로고 이미지 */}
                    <div className="about-hero-img-placeholder" style={{padding:0}}>
                        <img 
                            src={process.env.PUBLIC_URL + "/img/cafelogo.jpg"}
                            alt="ColorCafe 로고"
                            style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "50%", boxShadow: "0 4px 24px rgba(180,146,100,0.10)", background: "#fff" }}
                        />
                    </div>
                    {/* 브랜드명 및 메인 슬로건 */}
                    <div className="about-hero-text">
                        <h1>ColorCafe</h1>
                        <p className="about-main-slogan">오늘의 색을 고르세요</p>
                        <p className="about-main-desc">
                            ColorCafe는 어떤 커피를 마실지 고민하는 대신,<br />
                            오늘의 색을 고르는 순간을 제안합니다.
                        </p>
                    </div>
                </div>
                {/* 컬러 기반 선택 강조 영역 */}
                <div className="about-hero2">
                    <div className="about-hero-img-placeholder">
                        <img 
                            src={process.env.PUBLIC_URL + "/img/color.png"}
                            alt="ColorCafe 로고"
                            style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "50%", boxShadow: "0 4px 24px rgba(180,146,100,0.10)", background: "#fff" }}
                        />
                    </div>
                    <div className="about-hero-text">
                        <p className="about-main-slogan">컬러 기반 선택</p>
                        <p className="about-main-desc">
                            색으로 시작해 취향으로 완성하는 주문
                        </p>
                    </div>
                </div>
                {/* 일상의 커피 강조 영역 */}
                <div className="about-hero3">
                    <div className="about-hero-img-placeholder">
                        <img 
                            src={process.env.PUBLIC_URL + "/img/coffee.jpg"}
                            alt="ColorCafe 로고"
                            style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "50%", boxShadow: "0 4px 24px rgba(180,146,100,0.10)", background: "#fff" }}
                        />
                    </div>
                    <div className="about-hero-text">
                        <p className="about-main-slogan">일상의 커피</p>
                        <p className="about-main-desc">
                            언제든 편하게 즐기는 균형 잡힌 맛
                        </p>
                    </div>
                </div>
                {/* (추가 영역은 동일 패턴으로 주석화) */}
                <div className="about-hero4">
                    <div className="about-hero-img-placeholder">
                        <img 
                            src={process.env.PUBLIC_URL + "/img/cafe.jpg"}
                            alt="ColorCafe 로고"
                            style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "50%", boxShadow: "0 4px 24px rgba(180,146,100,0.10)", background: "#fff" }}
                        />
                    </div>
                    <div className="about-hero-text">
                        <p className="about-main-slogan">감성 공간</p>
                        <p className="about-main-desc">
                            머무르고 싶은 부드러운 분위기
                        </p>
                    </div>
                </div>
                {/* About/Brand Section */}
                <section className="about-section">
                    <div className="about-wide-card">
                        <div className="about-wide-left">
                            <div className="company-card-header">
                                <img src={process.env.PUBLIC_URL + "/img/cafelogo.jpg"} alt="회사 로고" className="company-logo-hero" />
                                <div>
                                    <h2>ColorCafe</h2>
                                    <span className="company-slogan">색으로 취향을 찾는 새로운 경험</span>
                                </div>
                            </div>
                            <div className="company-info-list">
                                <div><span>상호명</span>컬러카페(ColorCafe)</div>
                                <div><span>설립일</span>2025년 12월</div>
                                <div><span>대표자</span>홍길동</div>
                                <div><span>사업자등록번호</span>123-45-67890</div>
                                <div><span>주소</span>서울특별시 강남구 테헤란로 123, 4층</div>
                                <div><span>연락처</span>02-1234-5678</div>
                                <div><span>이메일</span>color@cafe.co.kr</div>
                            </div>
                        </div>
                        <div className="about-wide-right">
                            <div className="cs-title">고객센터</div>
                            <div className="cs-info">
                                <div>평일 <b>09:00~18:00</b></div>
                                <div>문의: <b>02-1234-5678</b></div>
                                <div>카카오톡 채널: <b>@colorcafe</b></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;