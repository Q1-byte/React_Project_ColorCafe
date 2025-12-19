// Redux 스토어 및 슬라이스 정의
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { getProductById } from './getProductById';

// user 슬라이스: 사용자 정보 관리
let user = createSlice({
    name : 'user',
    initialState : { name : '홍길동', age : 20 }, // 초기값
    reducers :{
      // 이름 변경
      changeName(state){
        state.name = '손오공'
      },
      // 나이 증가
      increase(state, action){
        state.age += action.payload
      }
    }
})

// user 액션 내보내기
export let { changeName, increase } = user.actions

// cart 슬라이스: 장바구니 관리
let cart = createSlice({
    name : 'cart',
    initialState : [
        // 메뉴 데이터에 맞게 수정 필요
    ],
    reducers : {
    // 상품 수량 1개 늘리기 (id/hotIce 옵션별)
    addCount(state, action) {
        let num = -1;
        if (typeof action.payload === 'object' && action.payload !== null) {
            num = state.findIndex((a) => a.id === action.payload.id && a.hotIce === action.payload.hotIce);
        } else {
            num = state.findIndex((a) => a.id === action.payload);
        }
        if (num !== -1) {
            state[num].count++;
        }
    },
    // 상품 수량 1개 줄이기 (id/hotIce 옵션별)
    decreaseCount(state, action) {
        let num = -1;
        if (typeof action.payload === 'object' && action.payload !== null) {
            num = state.findIndex((a) => a.id === action.payload.id && a.hotIce === action.payload.hotIce);
        } else {
            num = state.findIndex((a) => a.id === action.payload);
        }
        if (num !== -1) {
            if (state[num].count > 0) {
                state[num].count--;
            } else if (state[num].count === 0) {
                alert("상품이 더 이상 없습니다.");
            }
        }
    },
    // 장바구니에 상품 추가 (이미 있으면 수량만 +1, 없으면 새로 추가)
    addItem(state, action) {
        let num = state.findIndex((a) => a.id === action.payload.id && a.hotIce === action.payload.hotIce);
        if (num !== -1) {
            state[num].count++;
        } else {
            // menu.js에서 상품 정보 가져오기
            const product = getProductById(action.payload.id);
            state.push({
                id: product.id,
                name: product.title,
                imgurl: product.imgUrl,
                count: 1,
                price: product.price,
                hotIce: action.payload.hotIce
            });
        }
    },
    // 장바구니에서 상품 삭제하기 (id와 hotIce 옵션까지 구분, 안전하게 처리)
    deleteItem(state, action) {
        let num = -1;
        if (typeof action.payload === 'object' && action.payload !== null) {
            num = state.findIndex((a) => a.id === action.payload.id && a.hotIce === action.payload.hotIce);
        } else {
            num = state.findIndex((a) => a.id === action.payload);
        }
        if (num !== -1) {
            state.splice(num, 1);
        }
    },
      // 이름순으로 상품 정렬하기
    sortName(state, action) {
        state.sort((a, b) => (a.name > b.name ? 1 : -1));
    }
    }
    })

// cart 함수들도 밖에서 쓸 수 있게 내보내기
export let { addCount, decreaseCount, addItem, deleteItem, sortName } = cart.actions;

// 실제로 Redux에 등록해주는 부분
export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer,
    },
    });

    /*
        createSlice: 상태랑 관련 함수들 한 번에 만들기
        reducers: 상태를 바꿔주는 함수들
        action.payload: 함수에 보낼 값
        configureStore: 만든 상태들을 Redux에 등록하는 역할
    */