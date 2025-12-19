
// Cart 페이지: 장바구니 목록, 수량 조절, 삭제, 결제 버튼 등
import { useDispatch, useSelector } from "react-redux";
import { addCount, decreaseCount, deleteItem, sortName } from "../store.js";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Cart.css";


function Cart() {

    // Redux에서 전체 state를 구조분해할당으로 가져옴
    const { user: { name, age }, cart} = useSelector((state) => state);

    // dispatch는  store.js 로 요청보내주는 함수
    let dispatch = useDispatch();

    // 스타일은 Cart.css에서 관리

    return (
        <div className="cart-container" style={{ marginTop: "80px", marginBottom: "60px" }}>
            <div className="cart-title">My Color Order</div>
            {/* 이름순 정렬 버튼 */}
            <div style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', marginBottom: 8 }}>
                <Button
                    style={{
                        backgroundColor: '#fff',
                        color: '#b49264',
                        border: '2px solid #b49264',
                        fontWeight: 700,
                        borderRadius: '6px',
                        minWidth: '100px',
                        boxShadow: '0 2px 8px rgba(180,146,100,0.06)'
                    }}
                    onClick={() => {
                        dispatch(sortName());
                    }}
                    onMouseOver={e => { e.target.style.backgroundColor = '#b49264'; e.target.style.color = '#fff'; }}
                    onMouseOut={e => { e.target.style.backgroundColor = '#fff'; e.target.style.color = '#b49264'; }}
                >
                    이름순정렬
                </Button>
            </div>
            {/* 장바구니 상품 리스트 */}
            <div className="cart-card-list">
                {cart.length === 0 && (
                                            <div style={{ textAlign: 'center', color: '#b49264', fontWeight: 500, margin: '40px 0' }}>장바구니가 비어 있습니다.</div>
                                        )}
                                        {cart.map(({ id, imgurl, name, count, price, hotIce }, i) => {
                                            // type 정보 추출 (menu.js에서 id로 찾아서 type 확인)
                                            let type = undefined;
                                            try {
                                                const menu = require('../db/menu').default;
                                                const found = menu.find(item => item.id === id);
                                                type = found ? found.type : undefined;
                                            } catch (e) {}
                                            // type 한글 변환 및 표시 조건
                                            let typeLabel = '';
                                            if (type === 'ice') typeLabel = 'Ice';
                                            else if (type === 'hot') typeLabel = 'Hot';
                                            // both, none은 표시하지 않음
                                            return (
                                                <div className="cart-card" key={i}>
                                                    {/* 상품 이미지 및 상세 링크 */}
                                                    <div className="cart-card-img-wrap">
                                                        <Link to={`/detail/${id}`}>
                                                            <img src={process.env.PUBLIC_URL + '/' + imgurl} className="cart-img" alt={name} />
                                                        </Link>
                                                    </div>
                                                    {/* 상품 정보(타입, 이름, 옵션) */}
                                                    <div className="cart-card-meta">
                                                        {typeLabel && (
                                                          <div style={{ fontWeight: 700, color: '#bdb45a', fontSize: '1.08rem' }}>{typeLabel}</div>
                                                        )}
                                                        <div style={{ fontWeight: 700, fontSize: '1.13rem' }}>{name}</div>
                                                        <div style={{ fontWeight: 400, fontSize: '0.98rem', color: '#bdb45a' }}>{hotIce}</div>
                                                    </div>
                                                    {/* 가격 */}
                                                    <div className="cart-card-title-center">
                                                        <span style={{ fontWeight: 700, fontSize: '1.08rem' }}>{price ? price.toLocaleString() + '원' : ''}</span>
                                                    </div>
                                                    {/* 수량 조절 및 삭제 버튼 */}
                                                    <div className="cart-btns-right">
                                                        <Button
                                                            variant="outline-secondary"
                                                            size="sm"
                                                            style={{ borderRadius: '8px', fontWeight: 700, minWidth: 36, fontSize: '1.1rem', borderColor: '#bdb45a', color: '#bdb45a', marginRight: 8 }}
                                                            onClick={() => dispatch(decreaseCount({ id, hotIce }))}
                                                        >-</Button>
                                                        <span style={{ fontWeight: 700, fontSize: '1.08rem', minWidth: 24, textAlign: 'center' }}>{count}</span>
                                                        <Button
                                                            variant="outline-secondary"
                                                            size="sm"
                                                            style={{ borderRadius: '8px', fontWeight: 700, minWidth: 36, fontSize: '1.1rem', borderColor: '#bdb45a', color: '#bdb45a', marginRight: 8 }}
                                                            onClick={() => dispatch(addCount({ id, hotIce }))}
                                                        >+</Button>
                                                        <Button
                                                            variant="outline-danger"
                                                            size="sm"
                                                            style={{ borderRadius: '8px', fontWeight: 700, minWidth: 36, fontSize: '1.1rem', borderColor: '#d9534f', color: '#d9534f', background: '#fff', marginRight: 8 }}
                                                            onClick={() => dispatch(deleteItem({ id, hotIce }))}
                                                            onMouseOver={e => { e.target.style.backgroundColor = '#d9534f'; e.target.style.color = '#fff'; }}
                                                            onMouseOut={e => { e.target.style.backgroundColor = '#fff'; e.target.style.color = '#d9534f'; }}
                                                        >상품삭제
                                                        </Button>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    {/* 총 가격 및 결제 버튼 */}
                                    <div style={{ marginTop: 32, marginBottom: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                                        <div className="cart-total">
                                            총 가격 : {cart.length > 0 ? cart.reduce((sum, item) => sum + (item.price ? item.price * item.count : 0), 0).toLocaleString() + '원' : '0원'}
                                        </div>
                                        <Button
                                            className="cart-pay-btn"
                                            size="lg"
                                            disabled={cart.length === 0}
                                            style={{
                                                backgroundColor: '#b49264',
                                                color: '#fff',
                                                fontWeight: 700,
                                                borderRadius: '8px',
                                                minWidth: 180,
                                                fontSize: '1.1rem',
                                                boxShadow: '0 2px 8px rgba(180,146,100,0.08)',
                                                border: 'none'
                                            }}
                                            onClick={() => alert('결제 기능은 준비중입니다.')}
                                            onMouseOver={e => { e.target.style.backgroundColor = '#a07d4f'; }}
                                            onMouseOut={e => { e.target.style.backgroundColor = '#b49264'; }}
                                        >결제하기</Button>
                                    </div>
                                </div>
                            );
                        }

export default Cart;