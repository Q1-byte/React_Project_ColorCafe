import React from 'react';
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap'
import { useState, useEffect } from 'react'; // 한 줄로 합침
import { addItem } from '../store.js'
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

let BannerBtn = styled.button`
  color : white;
  font-size:30px;
  width:100%;
  padding : 100px 100px;
  border:1px solid #ccc;
  background-image: url(${process.env.PUBLIC_URL + "/img/banner.jpg"});
  background-size:cover;
  background-position:center;
`;

function Detail(props) {
    // 모든 Hook은 최상단에서 호출
    const [showMore, setShowMore] = useState(false);
    const [hotIce, setHotIce] = useState('HOT');
    const dispatch = useDispatch();
    let [tap, setTap] = useState(0);
    let { paramId } = useParams();
    useEffect(() => {
        const interval = setInterval(() => {
            setTap(prev => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    let selproduct = props.menu.find((x) => x.id === Number(paramId));
    if (!selproduct) {
        return <div>해당 상품이 존재하지 않습니다.</div>;
    }
    const { id, imgUrl, title, content, price, type } = selproduct;

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "36px", position: "relative" }}>
                    {/* donut 카테고리일 때만 연한 박스 배경 추가 */}
                    {selproduct.category === 'donut' ? (
                        <div style={{
                            background: '#f1ece6bb',
                            borderRadius: '16px',
                            width: '100%',
                            maxWidth: '500px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                            aspectRatio: '1/1',
                            minHeight: '320px',
                        }}>
                            <img src={process.env.PUBLIC_URL + "/" + imgUrl} style={{ width: '80%', height: '80%', objectFit: 'contain', borderRadius: '12px', background: 'transparent' }} alt={title} />
                            {type === 'ice' && (
                                <span style={{
                                    position: 'absolute',
                                    top: 10,
                                    right: 8,
                                    background: 'linear-gradient(90deg, #6dd5ed 0%, #2193b0 100%)',
                                    color: '#fff',
                                    fontWeight: 700,
                                    fontSize: '1.01rem',
                                    borderTopRightRadius: '22px',
                                    borderBottomLeftRadius: '22px',
                                    borderTopLeftRadius: '6px',
                                    borderBottomRightRadius: '6px',
                                    padding: '8px 28px 8px 18px',
                                    letterSpacing: '1.5px',
                                    boxShadow: '0 2px 8px rgba(33,147,176,0.13)',
                                    border: 'none',
                                    textShadow: '0 1px 4px rgba(33,147,176,0.13)',
                                    zIndex: 2,
                                    transform: 'rotate(8deg)'
                                }}>Ice only</span>
                            )}
                        </div>
                    ) : (
                        <>
                            <img src={process.env.PUBLIC_URL +"/"+ imgUrl} style={{ width: "100%", maxWidth: "500px", borderRadius: "12px" }} alt={title} />
                            {type === 'ice' && (
                                <span style={{
                                    position: 'absolute',
                                    top: 10,
                                    right: 75,
                                    background: 'linear-gradient(90deg, #6dd5ed 0%, #2193b0 100%)',
                                    color: '#fff',
                                    fontWeight: 700,
                                    fontSize: '1.01rem',
                                    borderTopRightRadius: '22px',
                                    borderBottomLeftRadius: '22px',
                                    borderTopLeftRadius: '6px',
                                    borderBottomRightRadius: '6px',
                                    padding: '8px 28px 8px 18px',
                                    letterSpacing: '1.5px',
                                    boxShadow: '0 2px 8px rgba(33,147,176,0.13)',
                                    border: 'none',
                                    textShadow: '0 1px 4px rgba(33,147,176,0.13)',
                                    zIndex: 2,
                                    transform: 'rotate(8deg)'
                                }}>Ice only</span>
                            )}
                        </>
                    )}
                </div>
                <div className="col-md-6" style={{ textAlign: "left" }}>
                    <h5 className="pt-5">{title}</h5>
                    <p>{content}</p>
                    <p style={{ fontWeight: "bold", fontSize: "1.1rem", color: "#b49264" }}>￦ {price.toLocaleString()}</p>
                    {/* HOT/ICE 선택: type이 both인 경우만 노출, ice면 Ice only 뱃지 */}
                    {type === 'both' && (
                        <div style={{ margin: '10px 0 18px 0', display: 'flex', alignItems: 'center' }}>
                            <span style={{ fontWeight: 300, marginRight: '12px' }}>타입 선택:</span>
                            <div style={{ display: 'flex' }}>
                              <Button
                                  style={{
                                    backgroundColor: hotIce === 'HOT' ? '#b49264' : '#e2cfa3',
                                    color: hotIce === 'HOT' ? '#fff' : '#b49264',
                                    fontWeight: 700,
                                    border: hotIce === 'HOT' ? 'none' : '2px solid #b49264',
                                    marginRight: '8px',
                                    minWidth: '64px',
                                    padding: '7px 0',
                                    fontSize: '1rem',
                                    borderRadius: '18px',
                                    letterSpacing: '1px',
                                    boxShadow: '0 2px 8px rgba(180,146,100,0.06)'
                                    }}
                                    size="sm"
                                    onClick={() => setHotIce('HOT')}
                                    onMouseOver={e => { e.target.style.backgroundColor = '#b49264'; e.target.style.color = '#fff'; }}
                                    onMouseOut={e => { if(hotIce !== 'HOT'){ e.target.style.backgroundColor = '#e2cfa3'; e.target.style.color = '#b49264'; }}}
                                >HOT</Button>
                                <Button
                                    style={{
                                        backgroundColor: hotIce === 'ICE' ? '#b49264' : '#e2cfa3',
                                        color: hotIce === 'ICE' ? '#fff' : '#b49264',
                                        fontWeight: 700,
                                        border: hotIce === 'ICE' ? 'none' : '2px solid #b49264',
                                        minWidth: '64px',
                                        padding: '7px 0',
                                        fontSize: '1rem',
                                        borderRadius: '18px',
                                        letterSpacing: '1px',
                                        boxShadow: '0 2px 8px rgba(180,146,100,0.06)'
                                    }}
                                    size="sm"
                                    onClick={() => setHotIce('ICE')}
                                    onMouseOver={e => { e.target.style.backgroundColor = '#b49264'; e.target.style.color = '#fff'; }}
                                    onMouseOut={e => { if(hotIce !== 'ICE'){ e.target.style.backgroundColor = '#e2cfa3'; e.target.style.color = '#b49264'; }}}
                                >ICE</Button>
                            </div>
                        </div>
                    )}
                    {/* ice 안내/뱃지/문구 모두 제거, 이미지에만 뱃지 */}

                    <button
                        className="btn"
                        style={{
                            backgroundColor: '#fff',
                            color: '#b49264',
                            border: '2px solid #b49264',
                            fontWeight: 700,
                            borderRadius: '6px',
                            fontSize: '0.98rem',
                            marginBottom: '10px',
                            minWidth: '100px',
                            boxShadow: '0 2px 8px rgba(180,146,100,0.06)'
                        }}
                        onClick={() => setShowMore((prev) => !prev)}
                        onMouseOver={e => { e.target.style.backgroundColor = '#b49264'; e.target.style.color = '#fff'; }}
                        onMouseOut={e => { e.target.style.backgroundColor = '#fff'; e.target.style.color = '#b49264'; }}
                    >
                        {showMore ? "접기" : "상세정보"}
                    </button>
                    {showMore && selproduct.detail && (
                        <div style={{ background: "#f8f5f0", borderRadius: "8px", padding: "14px 16px", marginTop: "6px", color: "#555", fontSize: "0.98rem", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                            <strong>상세정보</strong><br />
                            {selproduct.detail.split("\n").map((line, idx) => (
                                <span key={idx}>{line}<br /></span>
                            ))}
                        </div>
                    )}
                    {/* 주문 버튼: both, ice 모두 노출 */}
                    <div style={{ marginTop: "18px" }}>
                        {(type === 'both' || type === 'ice' || type === 'none') && (
                            <>
                                <button
                                    className="btn"
                                    style={{
                                        backgroundColor: '#b49264',
                                        color: '#fff',
                                        fontWeight: 700,
                                        border: 'none',
                                        marginRight: '10px',
                                        borderRadius: '6px',
                                        padding: '8px 22px',
                                        fontSize: '1.05rem',
                                        letterSpacing: '1px',
                                        boxShadow: '0 2px 8px rgba(180,146,100,0.08)'
                                    }}
                                    onClick={() => {
                                        dispatch(
                                            addItem({
                                                id: id,
                                                count: 1,
                                                hotIce: type === 'both' ? hotIce : undefined
                                            })
                                        );
                                        window.alert(`${title}이(가) 장바구니에 담겼습니다.`);
                                    }}
                                    onMouseOver={e => { e.target.style.backgroundColor = '#a07d4f'; }}
                                    onMouseOut={e => { e.target.style.backgroundColor = '#b49264'; }}
                                >주문담기</button>
                                <Link to="/cart">
                                    <Button
                                        style={{
                                            backgroundColor: '#fff',
                                            color: '#b49264',
                                            border: '2px solid #b49264',
                                            fontWeight: 700,
                                            borderRadius: '6px',
                                            padding: '8px 22px',
                                            fontSize: '1.05rem',
                                            letterSpacing: '1px',
                                            boxShadow: '0 2px 8px rgba(180,146,100,0.06)'
                                        }}
                                        onMouseOver={e => { e.target.style.backgroundColor = '#b49264'; e.target.style.color = '#fff'; }}
                                        onMouseOut={e => { e.target.style.backgroundColor = '#fff'; e.target.style.color = '#b49264'; }}
                                    > 주문상품 확인하기 </Button>
                                </Link>
                            </>
                        )}
                        {/* 주문불가 안내는 위 뱃지와 함께 한 줄로 노출됨 */}
                    </div>
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0" style={{ marginTop: "50px", color: "#b49264" }}>
                <Nav.Item>
                    <Nav.Link onClick={() => { setTap(0) }} eventKey="link0" style={{ color: '#b49264' }}>Coffee</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { setTap(1) }} eventKey="link1" style={{ color: '#b49264' }}>Donut</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { setTap(2) }} eventKey="link2" style={{ color: '#b49264' }}>Tea</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tap={tap} />
        </div>
    )
}

function TabContent({ tap }) {
    const [prevTap, setPrevTap] = useState(tap);
    const [direction, setDirection] = useState(0); // -1: left, 1: right
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        if (tap !== prevTap) {
            setDirection(tap > prevTap || (prevTap === 2 && tap === 0) ? 1 : -1);
            setAnimating(true);
            const timer = setTimeout(() => {
                setAnimating(false);
                setPrevTap(tap);
            }, 400);
            return () => clearTimeout(timer);
        }
    }, [tap, prevTap]);

    const tabContents = [
        <div key="tab0" style={{textAlign:'center'}}>
            <div style={{marginTop:'20px', color:'#b49264', fontSize: '20px'}}>“ColorCafe가 엄선한 최상급 원두를 경험해보세요.”</div>
            <div style={{marginTop:'6px', color:'#b49264', fontSize: '14px'}}>"Experience ColorCafe’s Finest Beans.”</div>
            <Link to="/menu/coffee">
                <img src={process.env.PUBLIC_URL + '/img/banner1.jpg'} alt="이벤트1" style={{maxWidth:'100%', width:'100%', height:'300px', objectFit:'cover', borderRadius:'16px', margin:'24px 0', cursor:'pointer'}} />
            </Link>
        </div>,
        <div key="tab1" style={{textAlign:'center'}}>
            <div style={{marginTop:'20px', color:'#b49264', fontSize: '20px'}}>"부드러운 달콤함이 살아 있는 도넛”</div>
            <div style={{marginTop:'6px', color:'#b49264', fontSize: '14px'}}>"Delicately Sweet Donuts”</div>

            <Link to="/menu/donut">
                <img src={process.env.PUBLIC_URL + '/img/banner2.jpg'} alt="이벤트2" style={{maxWidth:'100%', width:'100%', height:'300px', objectFit:'cover', borderRadius:'16px', margin:'24px 0', cursor:'pointer'}} />
            </Link>
        </div>,
        <div key="tab2" style={{textAlign:'center'}}>
            <div style={{marginTop:'20px', color:'#b49264', fontSize: '20px'}}>“깊게 우러난 허브의 깊은 풍미를 경험해보세요.”</div>
            <div style={{marginTop:'6px', color:'#b49264', fontSize: '14px'}}>“Experience the depth of herbal flavor.”</div>
            <Link to="/menu/tea">
                <img src={process.env.PUBLIC_URL + '/img/banner3.jpg'} alt="이벤트3" style={{maxWidth:'100%', width:'100%', height:'300px', objectFit:'cover', borderRadius:'16px', margin:'24px 0', cursor:'pointer'}} />
            </Link>
        </div>,
    ];

    // 슬라이드 애니메이션 스타일
    const getSlideStyle = (isCurrent) => {
        if (!animating) return { transition: 'none', transform: 'translateX(0)' };
        if (isCurrent) {
            return {
                transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
                transform: 'translateX(0)'
            };
        } else {
            return {
                transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
                transform: `translateX(${direction === 1 ? '-100%' : '100%'})`,
                position: 'absolute',
                top: 0, left: 0, width: '100%'
            };
        }
    };

    return (
        <div style={{ position: 'relative', minHeight: '380px', overflow: 'hidden' }}>
            {/* 이전 탭 내용 */}
            {animating && (
                <div style={getSlideStyle(false)}>
                    {tabContents[prevTap]}
                </div>
            )}
            {/* 현재 탭 내용 */}
            <div style={getSlideStyle(true)}>
                {tabContents[tap]}
            </div>
        </div>
    );
}

export default Detail;
