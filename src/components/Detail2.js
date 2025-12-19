


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import data from '../db/menu';

// 컬러별 이미지/이름 매핑
const colorInfo = {
  beige: {
    name: 'Beige',
    img: '/img/color/beige.jpg',
    fontColor: '#b49264',
    boxBgColor: '#f7f3ea',
    description: `베이지를 선택하셨습니다.\n\n베이지는 마음을 편안하게 감싸주는,\n포근하고 안정감 있는 색입니다.\n\n오늘은 부드러운 달콤함이 어우러진 음료로\n잠시 숨을 고르며 여유를 즐겨보세요.\n\n베이지색 처럼 포근한 메뉴 추천해드릴게요!`
  },
  blue: {
    name: 'Blue',
    img: '/img/color/blue.jpg',
    fontColor: '#2a3a6e',
    boxBgColor: '#eaf2fa',
    description: `블루를 선택하셨습니다.\n\n블루는 마음을 가라앉히고 생각을 정리해주는,\n차분하고 맑은 색입니다.\n\n복잡한 하루 속에서 시원하고 깔끔한\n한 잔으로 잠시 여유를 느껴보세요.\n\n파란색처럼 청량한 메뉴 추천해드릴게요!`
  },
  gray: {
    name: 'Gray',
    img: '/img/color/gray.jpg',
    fontColor: '#555',
    boxBgColor: '#f2f2f2',
    description: `그레이를 선택하셨습니다.\n\n그레이는 감정을 차분하게 정리해주는,\n담백하고 균형 잡힌 색입니다.\n\n오늘은 과하지 않은 깊은 풍미의 음료로\n조용히 나만의 시간을 즐겨보세요.\n\n그레이색처럼 담백한 메뉴 추천해드릴게요!`
  },
  green: {
    name: 'Green',
    img: '/img/color/green.jpg',
    fontColor: '#3d4a2a',
    boxBgColor: '#eaf7ea',
    description: `그린을 선택하셨습니다.\n\n그린은 마음을 편안하게 쉬게 해주는,\n자연스럽고 균형 잡힌 색입니다.\n\n오늘은 은은하게 우러난 향의 음료로\n몸과 마음에 여유를 더해보세요.\n\n그린색처럼 편안한 메뉴 추천해드릴게요!`
  },
  navy: {
    name: 'Navy',
    img: '/img/color/navy.jpg',
    fontColor: '#1a223a',
    boxBgColor: '#eaeef7',
    description: `네이비를 선택하셨습니다.\n\n네이비는 마음을 차분하게 가라앉히고,\n깊이 있는 집중을 돕는 색입니다.\n\n오늘은 진하고 묵직한 풍미의 음료로\n온전히 나만의 시간을 즐겨보세요.\n\n네이비색처럼 깊은 메뉴 추천해드릴게요!`
  },
  pink: {
    name: 'Pink',
    img: '/img/color/pink.jpg',
    fontColor: '#b85c7c',
    boxBgColor: '#faeaf0',
    description: `핑크를 선택하셨습니다.\n\n핑크는 마음을 부드럽게 풀어주는,\n설렘과 따뜻함이 담긴 색입니다.\n\n오늘은 달콤하고 부드러운 풍미의 음료로\n기분 좋은 순간을 즐겨보세요.\n\n핑크색처럼 사랑스러운 메뉴 추천해드릴게요!`
  },
  red: {
    name: 'Red',
    img: '/img/color/red.jpg',
    fontColor: '#b12a2a',
    boxBgColor: '#faecea',
    description: `레드를 선택하셨습니다.\n\n레드는 에너지를 깨워주는,\n생동감과 열정이 느껴지는 색입니다.\n\n오늘은 풍미가 또렷한 음료로\n기분에 활력을 더해보세요.\n\n레드색처럼 강렬한 메뉴 추천해드릴게요!`
  },
  yellow: {
    name: 'Yellow',
    img: '/img/color/yellow.jpg',
    fontColor: '#b89c1d',
    boxBgColor: '#faf7ea',
    description: `옐로우를 선택하셨습니다.\n\n옐로우는 기분을 환하게 밝혀주는,\n밝고 긍정적인 색입니다.\n\n오늘은 상큼하고 경쾌한 음료로\n하루에 산뜻함을 더해보세요.\n\n옐로우색처럼 기분 좋은 메뉴 추천해드릴게요!`
  }
};

function Detail2(props) {
      const navigate = useNavigate();
    // 주문 버튼 hover 효과만 적용
    React.useEffect(() => {
      const styleId = 'detail2-hover-style';
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.innerHTML = `
          .detail2-order-btn:hover {
            filter: brightness(0.85);
            transition: filter 0.18s;
          }
        `;
        document.head.appendChild(style);
      }
    }, []);
  // colorProp이 있으면 그 값을 우선 사용, 없으면 useParams
  const params = useParams();
  const color = typeof props?.colorProp === 'string' ? props.colorProp : params.color;
  const info = colorInfo[color] || colorInfo['beige'];
  // db에서 color 필드로 추천 메뉴 필터링 (쉼표 구분 포함) 후 랜덤 3개 추출
  const filteredMenus = data.filter(menu =>
    menu.color && menu.color.split(',').map(c => c.trim()).includes(color)
  );
  // Fisher-Yates 셔플로 배열 섞기
  function shuffle(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  const menus = shuffle(filteredMenus).slice(0, 3);

  const handleOrderClick = () => {
    window.location.href = '/cafe/menu';
  };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 0, margin: 0, background: 'none' }}>
      <div style={{
        width: 480,
        maxWidth: '96vw',
        padding: '38px 0 32px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 32,
      }}>
        {/* 컬러 이미지 */}
        <div style={{
          width: 180,
          height: 180,
          background: `url(${process.env.PUBLIC_URL + info.img}) center/cover no-repeat`,
          border: `3px solid ${info.fontColor}33`,
          borderRadius: '50%',
          boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
          marginBottom: 8,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          position: 'relative',
        }}>
          {/* 컬러명 라벨 */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            background: 'rgba(255,255,255,0.7)',
            color: info.fontColor,
            fontWeight: 700,
            fontSize: 18,
            textAlign: 'center',
            padding: '8px 0 6px 0',
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
            borderTop: `1.5px solid ${info.fontColor}22`,
            letterSpacing: '1px',
          }}>{info.name}</div>
        </div>
        {/* 텍스트 박스 */}
        <div style={{
          width: '88%',
          minHeight: 90,
          background: info.boxBgColor,
          borderRadius: 16,
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          padding: '28px 20px',
          border: `1.5px solid ${info.fontColor}22`,
          fontSize: 17,
          color: info.fontColor,
          fontWeight: 400,
          letterSpacing: '0.2px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          lineHeight: 1.7,
          wordBreak: 'keep-all',
        }}>
          {(color === 'beige' || color === 'blue' || color === 'gray' || color === 'green' || color === 'navy' || color === 'pink' || color === 'red' || color === 'yellow')
            ? (() => {
                const lines = info.description.split('\n');
                return (
                  <>
                    <span style={{ fontWeight: 700, fontSize: 20, display: 'block', marginBottom: 10 }}>{lines[0]}</span>
                    {lines.slice(1).map((line, idx) =>
                      line === '' ? <div key={idx} style={{ height: 7 }} /> : <span key={idx} style={{ display: 'block', marginBottom: 2 }}>{line}</span>
                    )}
                  </>
                );
              })()
            : (
                <span style={{ fontWeight: 600 }}>{info.description}</span>
              )}
        </div>
        {/* 추천 메뉴 */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 18 }}>
          {menus.length === 0 ? (
            <div style={{ color: '#888', fontSize: 16 }}>추천 메뉴가 없습니다.</div>
          ) : (
            menus.map(menu => (
              <div key={menu.id} style={{ width: 120, background: '#fff', borderRadius: 12, padding: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
                onClick={() => navigate(`/detail/${menu.id}`)}
                title={menu.title}
              >
                <img src={process.env.PUBLIC_URL + '/' + menu.imgUrl} alt={menu.title} style={{ width: 90, height: 70, objectFit: 'cover', borderRadius: 8 }} />
                <div style={{ marginTop: 10, fontWeight: 600, fontSize: 15, textAlign: 'center' }}>{menu.title}</div>
              </div>
            ))
          )}
        </div>
        {/* 주문하러가기 버튼 */}
        <button
          className="detail2-order-btn"
          onClick={handleOrderClick}
          style={{
            marginTop: 8,
            padding: '8px 28px',
            background: info.fontColor,
            color: '#fff',
            border: 'none',
            borderRadius: 20,
            fontSize: 17,
            fontWeight: 700,
            letterSpacing: '1px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
            cursor: 'pointer',
            minWidth: 120,
            minHeight: 40,
            transition: 'filter 0.18s',
          }}
        >
          주문하러가기
        </button>
      </div>
    </div>
  );
}

export default Detail2;
