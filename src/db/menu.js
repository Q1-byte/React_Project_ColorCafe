// 메뉴 데이터: 카페의 모든 상품 정보 배열
// 각 객체는 하나의 메뉴(음료/디저트) 정보를 담음
// 필드: id, category, type, title, color, imgUrl, content, price, detail

let data = [
  // 커피
  { id: 1, category: "coffee", type: "both", title: "아메리카노", color: "navy", imgUrl: "img/menu/coffee/아메리카노.jpg", content: "진한 에스프레소와 시원한 물의 조화", price: 3500, detail: "원산지: 콜롬비아, 에티오피아\n용량: 355ml\n칼로리: 10kcal\n카페인: 150mg\n기타: 에스프레소에 물을 더해 산뜻하고 깔끔한 맛. 칼로리와 당류가 매우 낮아 부담 없이 즐길 수 있음." },
  { id: 2, category: "coffee", type: "both", title: "카페라떼", color: "gray", imgUrl: "img/menu/coffee/아이스 바닐라 라떼.jpg", content: "부드러운 우유와 에스프레소의 만남", price: 4000, detail: "원산지: 브라질, 콜롬비아\n용량: 355ml\n칼로리: 110kcal\n카페인: 75mg\n기타: 에스프레소에 우유를 더해 고소하고 부드러운 맛. 우유의 단백질과 칼슘이 풍부." },
  { id: 3, category: "coffee", type: "ice", title: "돌체콜드브루", color: "navy", imgUrl: "img/menu/coffee/돌체 콜드브루.jpg", content: "달콤한 연유와 콜드브루의 조화", price: 4800, detail: "원산지: 콜롬비아, 에티오피아\n용량: 355ml\n칼로리: 180kcal\n카페인: 150mg\n기타: 콜드브루에 연유를 더해 달콤하고 진한 풍미." },
  { id: 4, category: "coffee", type: "both", title: "라벤더 카페 라떼", color: "purple", imgUrl: "img/menu/coffee/라벤더 카페 라떼.png", content: "라벤더 향이 가미된 부드러운 라떼", price: 5000, detail: "원산지: 브라질, 콜롬비아\n용량: 355ml\n칼로리: 120kcal\n카페인: 75mg\n기타: 라벤더 시럽과 우유, 에스프레소가 어우러진 향긋한 라떼." },
  { id: 5, category: "coffee", type: "ice", title: "아이스 카페 모카", color: "brown", imgUrl: "img/menu/coffee/아이스 카페 모카.jpg", content: "초콜릿과 에스프레소의 만남", price: 4500, detail: "원산지: 브라질, 콜롬비아\n용량: 355ml\n칼로리: 210kcal\n카페인: 80mg\n기타: 에스프레소, 초콜릿, 우유가 어우러진 달콤쌉쌀한 음료." },
  { id: 6, category: "coffee", type: "both", title: "카라멜 마키아또", color: "yellow", imgUrl: "img/menu/coffee/카라멜 마키아또.jpg", content: "카라멜과 에스프레소의 조화", price: 4700, detail: "원산지: 브라질, 콜롬비아\n용량: 355ml\n칼로리: 200kcal\n카페인: 75mg\n기타: 에스프레소, 우유, 카라멜 시럽이 어우러진 달콤한 음료." },
  { id: 7, category: "coffee", type: "hot", title: "카푸치노", color: "beige", imgUrl: "img/menu/coffee/카푸치노.jpg", content: "풍성한 우유 거품과 에스프레소", price: 4200, detail: "원산지: 브라질, 콜롬비아\n용량: 355ml\n칼로리: 110kcal\n카페인: 75mg\n기타: 에스프레소에 우유와 거품을 올린 부드러운 커피." },
  { id: 8, category: "coffee", type: "ice", title: "콜드브루", color: "navy", imgUrl: "img/menu/coffee/콜드브루.jpg", content: "진하게 우려낸 콜드브루 커피", price: 4300, detail: "원산지: 콜롬비아, 에티오피아\n용량: 355ml\n칼로리: 15kcal\n카페인: 180mg\n기타: 저온에서 오랜 시간 우려내 깔끔하고 진한 풍미." },

  // 에이드
  { id: 9, category: "ade", type: "ice", title: "라임레몬에이드", color: "yellow", imgUrl: "img/menu/ade/라임레몬에이드.jpg", content: "상큼한 라임과 레몬의 조화", price: 4500, detail: "원산지: 국내산(라임, 레몬)\n용량: 355ml\n칼로리: 120kcal(예상)\n기타: 라임과 레몬즙, 탄산수로 만든 상큼한 에이드. 비타민C 풍부, 무카페인." },
  { id: 10, category: "ade", type: "ice", title: "체리에이드", color: "red", imgUrl: "img/menu/ade/체리 에이드.jpg", content: "달콤한 체리와 청량한 탄산", price: 4700, detail: "원산지: 미국산(체리)\n용량: 355ml\n칼로리: 140kcal(예상)\n기타: 체리청과 탄산수로 만든 달콤상큼한 에이드. 무카페인, 여름철 인기 음료." },
  { id: 11, category: "ade", type: "ice", title: "피치에이드", color: "pink", imgUrl: "img/menu/ade/피치 에이드.jpg", content: "복숭아의 달콤함과 탄산", price: 4700, detail: "원산지: 국내산(복숭아)\n용량: 355ml\n칼로리: 130kcal(예상)\n기타: 복숭아청과 탄산수로 만든 달콤한 에이드. 무카페인, 상큼달콤한 맛." },
  { id: 30, category: "ade", type: "ice", title: "트로피컬에이드", color: "yellow", imgUrl: "img/menu/ade/트로피컬에이드.jpg", content: "열대과일과 탄산의 상큼달콤한 조화", price: 4700, detail: "원산지: 국내산(파인애플, 망고, 오렌지)\n용량: 355ml\n칼로리: 135kcal(예상)\n기타: 파인애플, 망고, 오렌지 등 열대과일청과 탄산수로 만든 상큼달콤한 에이드. 무카페인, 과일 풍미 가득." },
  { id: 31, category: "ade", type: "ice", title: "딥블루레몬에이드", color: "blue", imgUrl: "img/menu/ade/딥블루레몬에이드.jpg", content: "상큼한 레몬과 블루소다의 만남", price: 4700, detail: "원산지: 국내산(레몬, 블루베리)\n용량: 355ml\n칼로리: 125kcal(예상)\n기타: 레몬즙, 블루베리청, 탄산수로 만든 상큼달콤한 에이드. 무카페인, 여름철 인기 음료." },
  { id: 32, category: "ade", type: "ice", title: "딥블루라즈베리에이드", color: "blue", imgUrl: "img/menu/ade/딥블루라즈베리에이드.png", content: "상큼한 라즈베리와 블루소다의 조화", price: 4700, detail: "원산지: 국내산(라즈베리, 블루베리)\n용량: 355ml\n칼로리: 125kcal(예상)\n기타: 라즈베리청, 블루베리청, 탄산수로 만든 상큼달콤한 에이드. 무카페인, 과일 풍미 가득." },

  // 슬러시
  { id: 12, category: "slush", type: "ice", title: "딸기블루베리 블렌디드", color: "pink", imgUrl: "img/menu/slush/딸기블루베리 블렌디드.jpg", content: "딸기와 블루베리의 상큼한 조화", price: 5200, detail: "원산지: 국내산(딸기), 미국산(블루베리)\n용량: 355ml\n칼로리: 180kcal(예상)\n기타: 딸기와 블루베리를 갈아 만든 상큼한 슬러시. 비타민C 풍부, 무카페인." },
  { id: 13, category: "slush", type: "ice", title: "딸기요거트스무디", color: "pink", imgUrl: "img/menu/slush/딸기요거트스무디.jpg", content: "딸기와 요거트의 부드러운 만남", price: 5300, detail: "원산지: 국내산(딸기)\n용량: 355ml\n칼로리: 210kcal(예상)\n기타: 딸기와 요거트가 어우러진 부드러운 스무디. 상큼달콤, 무카페인." },
  { id: 14, category: "slush", type: "ice", title: "말차 크림 프라푸치노", color: "green", imgUrl: "img/menu/slush/말차 크림 프라푸치노.jpg", content: "진한 말차와 부드러운 크림", price: 5500, detail: "원산지: 일본산(말차)\n용량: 355ml\n칼로리: 250kcal(예상)\n카페인: 60mg(예상)\n기타: 진한 말차와 우유, 크림이 어우러진 프라푸치노. 달콤쌉쌀한 맛." },
  { id: 15, category: "slush", type: "ice", title: "망고바나나 블렌디드", color: "yellow", imgUrl: "img/menu/slush/망고바나나 블렌디드.jpg", content: "망고와 바나나의 달콤함", price: 5400, detail: "원산지: 필리핀산(망고), 에콰도르산(바나나)\n용량: 355ml\n칼로리: 190kcal(예상)\n기타: 망고와 바나나를 갈아 만든 달콤한 슬러시. 무카페인, 비타민 풍부." },
  { id: 16, category: "slush", type: "ice", title: "자몽 허니 블렌디드", color: "yellow", imgUrl: "img/menu/slush/자몽 허니 블렌디드.jpg", content: "자몽과 꿀의 상큼함", price: 5400, detail: "원산지: 미국산(자몽), 국내산(꿀)\n용량: 355ml\n칼로리: 160kcal(예상)\n기타: 자몽과 꿀, 얼음을 갈아 만든 상큼달콤한 슬러시. 무카페인." },
  { id: 17, category: "slush", type: "ice", title: "자바 칩 프라푸치노", color: "brown", imgUrl: "img/menu/slush/자바 칩 프라푸치노.jpg", content: "초콜릿 칩과 커피의 조화", price: 5600, detail: "원산지: 브라질산(커피), 벨기에산(초콜릿)\n용량: 355ml\n칼로리: 270kcal(예상)\n카페인: 80mg(예상)\n기타: 커피, 우유, 초콜릿 칩이 어우러진 진한 프라푸치노." },

  // 티
  { id: 17, category: "tea", type: "both", title: "얼그레이티", color: "beige", imgUrl: "img/menu/tea/얼그레이티.jpg", content: "향긋한 얼그레이 홍차", price: 4000, detail: "원산지: 인도, 스리랑카\n용량: 355ml\n칼로리: 0kcal\n카페인: 40mg(예상)\n기타: 베르가못 향이 가미된 홍차. 깔끔하고 향긋한 풍미." },
  { id: 18, category: "tea", type: "both", title: "아이스티", color: "yellow", imgUrl: "img/menu/tea/아이스티.jpg", content: "시원한 복숭아 아이스티", price: 3800, detail: "원산지: 국내산(복숭아), 인도(홍차)\n용량: 355ml\n칼로리: 90kcal(예상)\n카페인: 20mg(예상)\n기타: 복숭아청과 홍차가 어우러진 달콤한 아이스티." },
  { id: 19, category: "tea", type: "both", title: "밀크티", color: "pink", imgUrl: "img/menu/tea/밀크티.jpg", content: "부드러운 우유와 홍차의 조화", price: 4200, detail: "원산지: 인도(홍차), 국내산(우유)\n용량: 355ml\n칼로리: 120kcal(예상)\n카페인: 30mg(예상)\n기타: 홍차와 우유가 어우러진 부드러운 밀크티. 달콤하고 고소한 맛." },
  { id: 20, category: "tea", type: "both", title: "캐모마일티", color: "green", imgUrl: "img/menu/tea/캐모마일티.jpg", content: "은은한 캐모마일 향", price: 4200, detail: "원산지: 이집트(캐모마일)\n용량: 355ml\n칼로리: 0kcal\n카페인: 0mg\n기타: 은은한 허브향의 무카페인 티. 편안한 휴식에 적합." },
  { id: 50, category: "tea", type: "both", title: "녹차티", color: "green", imgUrl: "img/menu/tea/녹차티.jpg", content: "깔끔하고 은은한 녹차 풍미", price: 4200, detail: "원산지: 국내산(녹차)\n용량: 355ml\n칼로리: 0kcal\n카페인: 30mg(예상)\n기타: 신선한 녹차잎을 우려낸 깔끔하고 담백한 녹차티." },
  { id: 51, category: "tea", type: "both", title: "자몽허니블랙티", color: "green", imgUrl: "img/menu/tea/자몽허니블랙티.jpg", content: "자몽과 꿀, 홍차의 조화", price: 4500, detail: "원산지: 미국산(자몽), 인도(홍차), 국내산(꿀)\n용량: 355ml\n칼로리: 90kcal(예상)\n카페인: 30mg(예상)\n기타: 상큼한 자몽, 달콤한 꿀, 향긋한 홍차가 어우러진 블렌딩 티." },
  { id: 52, category: "tea", type: "both", title: "히비스커스티", color: "red", imgUrl: "img/menu/tea/히비스커스티.jpg", content: "상큼한 히비스커스 허브티", price: 4300, detail: "원산지: 이집트산(히비스커스)\n용량: 355ml\n칼로리: 0kcal\n카페인: 0mg\n기타: 새콤달콤한 히비스커스 꽃잎을 우려낸 건강 허브티. 비타민C 풍부." },
  { id: 53, category: "tea", type: "both", title: "시트러스민트티", color: "yellow", imgUrl: "img/menu/tea/시트러스민트티.jpg", content: "상큼한 시트러스와 민트의 조화", price: 4300, detail: "원산지: 국내산(레몬, 오렌지, 민트)\n용량: 355ml\n칼로리: 10kcal(예상)\n카페인: 0mg\n기타: 레몬, 오렌지, 민트잎을 블렌딩한 상큼하고 시원한 허브티." },

  // 케이크(디저트)
  { id: 21, category: "cake", type: "none", title: "블루베리케이크", color: "blue", imgUrl: "img/dessert/블루베리케이크.png", content: "상큼한 블루베리와 부드러운 크림", price: 6900, detail: "원산지: 미국산(블루베리)\n중량: 120g(예상)\n칼로리: 320kcal(예상)\n기타: 상큼한 블루베리와 부드러운 크림치즈가 어우러진 케이크." },
  { id: 22, category: "cake", type: "none", title: "딸기케이크", color: "pink", imgUrl: "img/dessert/딸기케이크.png", content: "부드러운 시트와 신선한 딸기", price: 6500, detail: "원산지: 국내산(딸기)\n중량: 120g(예상)\n칼로리: 310kcal(예상)\n기타: 신선한 딸기와 부드러운 시트, 크림이 조화로운 케이크." },
  { id: 23, category: "cake", type: "none", title: "복숭아케이크", color: "pink", imgUrl: "img/dessert/복숭아 케이크.jpg", content: "달콤한 복숭아가 가득한 케이크", price: 7000, detail: "원산지: 국내산(복숭아)\n중량: 120g(예상)\n칼로리: 320kcal(예상)\n기타: 달콤한 복숭아와 크림, 촉촉한 시트가 어우러진 케이크." },
  { id: 24, category: "cake", type: "none", title: "오렌지케이크", color: "yellow", imgUrl: "img/dessert/오렌지 케이크.jpg", content: "상큼한 오렌지와 부드러운 시트", price: 7000, detail: "원산지: 미국산(오렌지)\n중량: 120g(예상)\n칼로리: 320kcal(예상)\n기타: 상큼한 오렌지와 부드러운 시트, 크림이 조화로운 케이크." },
  { id: 25, category: "cake", type: "none", title: "초코케이크", color: "gray", imgUrl: "img/dessert/초코케이크.jpg", content: "진한 초콜릿의 풍미", price: 6700, detail: "원산지: 벨기에산(초콜릿)\n중량: 120g(예상)\n칼로리: 350kcal(예상)\n기타: 진한 초콜릿과 부드러운 크림이 어우러진 케이크." },
  { id: 26, category: "cake", type: "none", title: "티라미수케이크", color: "beige", imgUrl: "img/dessert/티라미수케이크.png", content: "마스카포네 치즈와 에스프레소의 조화", price: 7200, detail: "원산지: 이탈리아산(마스카포네), 브라질산(커피)\n중량: 120g(예상)\n칼로리: 340kcal(예상)\n기타: 마스카포네 치즈와 에스프레소, 코코아 파우더가 어우러진 케이크." },
  { id: 27, category: "cake", type: "none", title: "자몽케이크", color: "red", imgUrl: "img/dessert/자몽케이크.jpg", content: "상큼한 자몽이 가득한 케이크", price: 7000, detail: "원산지: 미국산(자몽)\n중량: 120g(예상)\n칼로리: 310kcal(예상)\n기타: 상큼한 자몽과 부드러운 크림, 촉촉한 시트가 어우러진 케이크." },

  // 도넛
  { id: 43, category: "donut", type: "none", title: "글레이즈드도넛", color: "beige", imgUrl: "img/donut/글레이즈드도넛.png", content: "달콤한 글레이즈 코팅의 클래식 도넛", price: 2500, detail: "원산지: 국내산(밀가루)\n중량: 60g(예상)\n칼로리: 220kcal(예상)\n기타: 부드러운 도넛에 달콤한 글레이즈를 입힌 기본 도넛." },
  { id: 44, category: "donut", type: "none", title: "슈크림필드", color: "beige", imgUrl: "img/donut/슈크림필드.png", content: "부드러운 슈크림이 가득", price: 2900, detail: "원산지: 국내산(우유, 밀가루)\n중량: 65g(예상)\n칼로리: 250kcal(예상)\n기타: 쫄깃한 도넛 속에 부드러운 슈크림이 가득 들어간 인기 메뉴." },
  { id: 45, category: "donut", type: "none", title: "스트로베리필드", color: "red", imgUrl: "img/donut/스트로베리필드.png", content: "상큼한 딸기필링이 가득", price: 2900, detail: "원산지: 국내산(딸기, 밀가루)\n중량: 65g(예상)\n칼로리: 240kcal(예상)\n기타: 쫄깃한 도넛 속에 상큼달콤한 딸기필링이 가득." },
  { id: 46, category: "donut", type: "none", title: "시나몬피칸도넛", color: "gray", imgUrl: "img/donut/시나몬피칸도넛.png", content: "고소한 피칸과 시나몬의 조화", price: 3200, detail: "원산지: 미국산(피칸), 국내산(밀가루)\n중량: 70g(예상)\n칼로리: 260kcal(예상)\n기타: 고소한 피칸과 향긋한 시나몬이 어우러진 프리미엄 도넛." },
  { id: 47, category: "donut", type: "none", title: "에스프레소도넛", color: "navy", imgUrl: "img/donut/에스프레소도넛.png", content: "진한 에스프레소 풍미", price: 3000, detail: "원산지: 브라질산(커피), 국내산(밀가루)\n중량: 65g(예상)\n칼로리: 240kcal(예상)\n기타: 진한 에스프레소와 부드러운 도넛의 조화. 커피 애호가 추천." },
  { id: 48, category: "donut", type: "none", title: "카카오도넛", color: "gray", imgUrl: "img/donut/카카오도넛.png", content: "진한 카카오의 달콤쌉쌀함", price: 2800, detail: "원산지: 벨기에산(카카오), 국내산(밀가루)\n중량: 60g(예상)\n칼로리: 230kcal(예상)\n기타: 진한 카카오 파우더와 부드러운 도넛의 만남." },
  { id: 49, category: "donut", type: "none", title: "핑크도넛", color: "pink", imgUrl: "img/donut/핑크도넛.png", content: "상큼한 핑크 글레이즈", price: 2800, detail: "원산지: 국내산(딸기, 밀가루)\n중량: 60g(예상)\n칼로리: 230kcal(예상)\n기타: 쫄깃한 도넛에 상큼달콤한 핑크 글레이즈를 입힌 인기 메뉴." },
  // ...existing code...
];

export default data;
