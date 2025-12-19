
// Board(Community) 페이지: 게시글 목록, 읽기, 쓰기, 수정, 댓글 등 커뮤니티 기능
import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';

const MenuBoard = () => {
    // 게시글 목록 상태
    const [boardList, setBoardList] = useState([
        { no: "1", title: '야 도넛먹어라 두 번 먹어라', description: '도넛 도넛 도넛맨', viewCount: 5 },
        { no: "2", title: '아메리카노가...', description: '원두를 고를순 없겠죠?', viewCount: 2 },
        { no: "3", title: '메뉴 추천 존재 이유 아시는 분?', description: 'ㄹㅇ맘에 드는 추천이 하나도없네.', viewCount: 14 },
        { no: "4", title: '에이드가 너무 달아요', description: '에이드류가 전반적으로 조금 달았어요.', viewCount: 1 },
        { no: "5", title: 'Red 컬러를 골랐더니', description: '그냥 빨간 메뉴만 나오는디...', viewCount: 10 }
    ]);

    // UI 상태: 목록/읽기/쓰기/수정 모드
    const [listOk, setListOk] = useState(true);   // 전체 리스트 보기
    const [readOk, setReadOk] = useState(false);  // 게시글 읽기
    const [writeOk, setWriteOk] = useState(false); // 게시글 쓰기
    const [editOk, setEditOk] = useState(false);  // 게시글 수정
    const [boardInfo, setBoardInfo] = useState({}); // 현재 읽는 게시글 정보

    // 작성/수정 폼 상태
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [editNo, setEditNo] = useState(null); // 수정할 게시물 번호
    const [editTitle, setEditTitle] = useState('');
    const [editDescription, setEditDescription] = useState('');

    // 오류 메시지 상태
    const [errorMessage, setErrorMessage] = useState('');

    // 댓글 상태: { [게시글번호]: [ {text, date}, ... ] }
    const [comments, setComments] = useState({
        '1': [
            { text: '도넛 최고!', date: '2025. 12. 16. 13시 00분 00초' },
            { text: '저도 먹고 싶어요', date: '2025. 12. 16. 13시 01분 00초' }
        ],
        '2': [
            { text: '되겠냐?', date: '2025. 12. 16. 13시 02분 00초' }
        ],
        '3': [
            { text: '재미로 봅시다', date: '2025. 12. 16. 13시 02분 00초' }
        ],
        '5': [
            { text: '레드컬러에 파란메뉴가 들어가야 속이 시원하시겠어요?', date: '2025. 12. 16. 13시 03분 00초' },
            { text: 'ㄴ ㅋㅋㅋㅋㅋ', date: '2025. 12. 17. 15시 53분 00초' }
        ]
    });
    // 현재 댓글 입력값
    const [commentInput, setCommentInput] = useState('');


    // 게시글 목록 보기
    const boardListView = () => {
        setReadOk(false);
        setWriteOk(false);
        setEditOk(false);
        setListOk(true);
    };


    // 게시글 읽기
    const boardRead = (no) => {
        setListOk(false);
        setWriteOk(false);
        setEditOk(false);
        setReadOk(true);
        // 조회수 증가, 클릭한 게시물이면 1증감
        const updatedList = boardList.map(b =>
            b.no === no ? { ...b, viewCount: b.viewCount + 1 } : b
        );
        setBoardList(updatedList); //조회수 1 증가해서 다시 렌더링
        const selectedBoard = boardList.find(b => b.no === no); // 클릭한 게시물 번호를 찾아
        setBoardInfo(selectedBoard); // 현재 읽고 있는 게시글의 정보를 저장해서 화면에 렌더링
        setCommentInput(''); // 댓글 입력 초기화
    };

    // 댓글 등록
    const handleCommentSubmit = () => {
        if (!commentInput.trim()) return;
        const boardNo = boardInfo.no;
        const newComment = {
            text: commentInput,
            date: new Date().toLocaleString('ko-KR', { hour12: false })
        };
        setComments(prev => ({
            ...prev,
            [boardNo]: prev[boardNo] ? [...prev[boardNo], newComment] : [newComment]
        }));
        setCommentInput('');
    };

    // 댓글 삭제
    const handleCommentDelete = (commentIdx) => {
        const boardNo = boardInfo.no;
        setComments(prev => ({
            ...prev,
            [boardNo]: prev[boardNo].filter((_, idx) => idx !== commentIdx)
        }));
    };
    // 게시글 작성 폼 열기
    const boardWrite = () => {
        setListOk(false);
        setWriteOk(true);
    };
    // 새 글 저장
    const boardSave = () => {
        // 제목과 설명이 비어있으면 유효성 검사
        if (title.trim() === '' || description.trim() === '') {
            setErrorMessage('제목과 내용을 모두 입력해주세요!');
            return;
        }
        // 새 글 추가
        const newBoard = {
            no: (boardList.length + 1).toString(),
            title: title,
            description: description,
            viewCount: 0 // 초기 조회수는 0
        };
        setBoardList([...boardList, newBoard]);
        setTitle('');
        setDescription('');
        setErrorMessage(''); // 오류 메시지 초기화
        boardListView(); // 새글 저장후 게시글 목록 함수 호출
    };
    // 게시글 삭제
    const boardDelete = (no) => {
        // 삭제할 게시글을 `no` 값으로 필터링하여 삭제
        const updatedList = boardList.filter(b => b.no !== no.toString()); // no.toString()으로 비교
        setBoardList(updatedList);
        boardListView(); // 삭제 후 목록 보기로 이동
    };
    // 게시글 수정 폼 열기
    const boardEdit = (no) => {
        setEditOk(true);
        setListOk(false);
        const boardToEdit = boardList.find(b => b.no === no); // 클릭한 번호를 찾아 객체의 데이터(게시글제목, 내용) 가져와서
        setEditNo(boardToEdit.no); // 데이터의 번호
        setEditTitle(boardToEdit.title); // 데이터의 제목
        setEditDescription(boardToEdit.description); // 데이터의 내용을 폼태그에 채워넣는다.
    };
    // 수정된 게시글 저장
    const updateBoard = () => {
        const updatedBoardList = boardList.map(b =>
            b.no === editNo ? { ...b, title: editTitle, description: editDescription } : b
        );
        setBoardList(updatedBoardList);
        boardListView();
    };

            {/* 게시글 읽기 */}
            {readOk && (
                <div>
                    <h5 style={{textAlign: "left" }}>{boardInfo.title}</h5>
                    <hr></hr>
                    <p  style={{textAlign: "left" }}>{boardInfo.description}</p>
                    <br></br>
                    <div style={{ textAlign: "right"}}>
                        <Button variant="secondary" onClick={boardListView}  style={{textAlign: "right" }}>
                            목록으로
                        </Button>
                    </div>
                </div>
            )}








            {/* 새 글 작성 폼 */}
            {writeOk && (
                <div style={{ marginTop: "30px" }}>
                    <h5  style={{textAlign: "left" }}>디저트카페에 문의글 남기기</h5>

                    {/* 오류 메시지 표시 */}
                    {errorMessage && (
                        <Alert variant="danger">{errorMessage}</Alert>
                    )}

                    <Form.Group controlId="formName">
                        <Form.Control
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="게시글을 입력하세요"
                        />
                    </Form.Group>
                    <Form.Group controlId="formDescription" style={{ marginTop: "30px" }}>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="게시물에 작성하세요"
                        />
                    </Form.Group>
                    <br></br>
                    <div style={{ textAlign: "right"}}>
                        <Button variant="primary" onClick={boardSave} style={{ marginRight: "10px" }}>저장</Button>
                        <Button variant="secondary" onClick={boardListView}>목록으로</Button>
                    </div>
                </div>
            )}





            {/* 메뉴 수정 폼 */}
            {editOk && (
                <div style={{ marginTop: "30px" }}>
                    <h5 style={{textAlign: "left" }}>게시물 수정</h5>
                    <Form.Group controlId="formEditName">
                        <Form.Control
                            type="text"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            placeholder="수정된 제목"
                        />
                    </Form.Group>
                    <br></br>
                    <Form.Group controlId="formEditDescription">
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={editDescription}
                            onChange={(e) => setEditDescription(e.target.value)}
                            placeholder="수정된 설명"
                        />
                    </Form.Group>
                    <br></br>

                    <div style={{ textAlign: 'right' }}>
                        <Button variant="outline-success" onClick={updateBoard} style={{ marginRight: "10px" }}>수정</Button>
                        <Button variant="outline-info" onClick={boardListView}>목록으로</Button>
                    </div>
                </div>
            )}


    return (
        <>
            <div className="community-bg" style={{ minHeight: '100vh', background: '#fcf8f3', padding: '0 0 0 0', marginTop: '80px', marginBottom: '60px' }}>
                <div className="container" style={{ maxWidth: '1100px', background: '#fff', borderRadius: '24px', boxShadow: '0 4px 24px rgba(189,180,90,0.07)', padding: '48px 38px 38px 38px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '38px' }}>
                        <div style={{ color: '#bdb45a', fontWeight: 800, fontSize: '2.3rem', letterSpacing: '1px', marginBottom: '6px' }}>Community</div>
                        <div style={{ color: '#8b7a66', fontSize: '1.08rem', fontWeight: 500 }}>ColorCafe와 함께하는 소통 공간</div>
                    </div>
                    {/* 메뉴 목록 보기 */}
                    {listOk && (
                        <div style={{ marginTop: "18px" }}>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, background: '#fff', borderRadius: '18px', boxShadow: '0 2px 8px rgba(189,180,90,0.04)', fontSize: '1.09rem', overflow: 'hidden' }}>
                                    <thead>
                                        <tr style={{ background: '#f7f6e7', color: '#bdb45a', fontWeight: 700, textAlign: 'center', height: '54px' }}>
                                            <th style={{ padding: '16px 0', border: 'none', textAlign: 'center', fontSize: '1.08rem', letterSpacing: '1px' }}>번호</th>
                                            <th style={{ padding: '16px 0', border: 'none', textAlign: 'center', fontSize: '1.08rem', letterSpacing: '1px' }}>제목</th>
                                            <th style={{ padding: '16px 0', border: 'none', textAlign: 'center', fontSize: '1.08rem', letterSpacing: '1px' }}>문의글</th>
                                            <th style={{ padding: '16px 0', border: 'none', textAlign: 'center', fontSize: '1.08rem', letterSpacing: '1px' }}>조회수</th>
                                            <th style={{ padding: '16px 0', border: 'none', textAlign: 'center', fontSize: '1.08rem', letterSpacing: '1px' }}>문의하기</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {boardList.slice().reverse().map((board, idx) => (
                                            <tr key={board.no} style={{ background: idx % 2 === 0 ? '#fff' : '#fcf8f3', height: '56px' }}>
                                                <td style={{ padding: '12px 0', textAlign: 'center', color: '#bdb45a', fontWeight: 700, verticalAlign: 'middle' }}>{board.no}</td>
                                                <td style={{ cursor: 'pointer', textAlign: 'center', padding: '12px 10px', color: '#745e4ad7', fontWeight: 800, verticalAlign: 'middle', fontSize: '1.08rem' }} onClick={() => boardRead(board.no)}>
                                                    {board.title}
                                                </td>
                                                <td style={{ cursor: 'pointer', textAlign: 'center', padding: '12px 10px', color: '#8b7a66', fontWeight: 500, verticalAlign: 'middle' }} onClick={() => boardRead(board.no)}>
                                                    {board.description}
                                                </td>
                                                <td style={{ textAlign: 'center', color: '#bdb45a', fontWeight: 700, verticalAlign: 'middle' }}>{board.viewCount}</td>
                                                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                                    <Button variant="outline-primary" size="sm" style={{ borderRadius: '8px', fontWeight: 600, marginRight: '6px', borderColor: '#bdb45a', color: '#bdb45a', minWidth: '80px' }} onClick={() => boardRead(board.no)}>
                                                        게시글읽기
                                                    </Button>
                                                    <Button variant="outline-success" size="sm" style={{ borderRadius: '8px', fontWeight: 600, marginRight: '6px', borderColor: '#bdb45a', color: '#7a9c3a', minWidth: '60px' }} onClick={() => boardEdit(board.no)}>
                                                        수정
                                                    </Button>
                                                    <Button variant="outline-danger" size="sm" style={{ borderRadius: '8px', fontWeight: 600, borderColor: '#bdb45a', color: '#d9534f', minWidth: '60px' }} onClick={() => boardDelete(board.no)}>
                                                        삭제
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '18px' }}>
                                <Button variant="primary" onClick={boardWrite} style={{ borderRadius: '8px', fontWeight: 700, background: '#bdb45a', border: 'none', padding: '10px 28px', fontSize: '1.08rem' }}>
                                    문의글 작성하기
                                </Button>
                            </div>
                        </div>
                    )}
                    {/* 게시글 읽기 */}
                    {readOk && (
                        <div>
                            <h5 style={{ textAlign: "left" }}>{boardInfo.title}</h5>
                            <hr />
                            <p style={{ textAlign: "left" }}>{boardInfo.description}</p>
                            <div style={{ margin: '32px 0 0 0', padding: '18px 0 0 0', borderTop: '1px solid #eee' }}>
                                <div style={{ fontWeight: 700, color: '#bdb45a', marginBottom: 10, fontSize: '1.08rem' }}>댓글</div>
                                {/* 댓글 목록 */}
                                <div style={{ minHeight: 32, marginBottom: 10 }}>
                                    {(comments[boardInfo.no]?.length > 0) ? (
                                        comments[boardInfo.no].map((c, i) => (
                                            <div key={i} style={{
                                                marginBottom: 8,
                                                padding: '8px 0',
                                                borderBottom: '1px solid #f3f1e2',
                                                fontSize: '1.01rem',
                                                color: '#4a3f35',
                                                textAlign: 'left',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between'
                                            }}>
                                                <div style={{ flex: 1 }}>
                                                    <span style={{ textAlign: 'left' }}>{c.text}</span>
                                                    <span style={{ color: '#bdb45a', fontSize: '0.93rem', fontWeight: 400, marginLeft: 12, textAlign: 'left' }}>{c.date}</span>
                                                </div>
                                                <Button
                                                    variant="outline-danger"
                                                    size="sm"
                                                    style={{ marginLeft: 12, fontSize: '0.92rem', padding: '2px 10px', borderRadius: 6, borderColor: '#e5e1c8', color: '#d9534f', background: '#fff' }}
                                                    onClick={() => handleCommentDelete(i)}
                                                >
                                                    삭제
                                                </Button>
                                            </div>
                                        ))
                                    ) : (
                                        <div style={{ color: '#bdb45a', fontSize: '0.98rem', textAlign: 'left' }}>아직 댓글이 없습니다.</div>
                                    )}
                                </div>
                                {/* 댓글 입력 */}
                                <div style={{ display: 'flex', gap: 8 }}>
                                    <Form.Control
                                        type="text"
                                        value={commentInput}
                                        onChange={e => setCommentInput(e.target.value)}
                                        placeholder="댓글을 입력하세요"
                                        style={{ maxWidth: 400, background: '#fcf8f3', borderColor: '#e5e1c8' }}
                                        onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleCommentSubmit(); } }}
                                    />
                                    <Button variant="primary" style={{ background: '#bdb45a', border: 'none', fontWeight: 600 }} onClick={handleCommentSubmit}>
                                        등록
                                    </Button>
                                </div>
                            </div>
                            <div style={{ textAlign: "right", marginTop: 32 }}>
                                <Button variant="secondary" onClick={boardListView} style={{ textAlign: "right" }}>
                                    목록으로
                                </Button>
                            </div>
                        </div>
                    )}
                    {/* 새 글 작성 폼 */}
                    {writeOk && (
                        <div style={{ marginTop: "30px" }}>
                            <h5 style={{ textAlign: "left" }}>디저트카페에 문의글 남기기</h5>
                            {/* 오류 메시지 표시 */}
                            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                            <Form.Group controlId="formName">
                                <Form.Control
                                    type="text"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    placeholder="게시글을 입력하세요"
                                />
                            </Form.Group>
                            <Form.Group controlId="formDescription" style={{ marginTop: "30px" }}>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                    placeholder="게시물에 작성하세요"
                                />
                            </Form.Group>
                            <br></br>
                            <div style={{ textAlign: "right" }}>
                                <Button variant="primary" onClick={boardSave} style={{ marginRight: "10px" }}>
                                    저장
                                </Button>
                                <Button variant="secondary" onClick={boardListView}>
                                    목록으로
                                </Button>
                            </div>
                        </div>
                    )}
                    {/* 메뉴 수정 폼 */}
                    {editOk && (
                        <div style={{ marginTop: "30px" }}>
                            <h5 style={{ textAlign: "left" }}>게시물 수정</h5>
                            <Form.Group controlId="formEditName">
                                <Form.Control
                                    type="text"
                                    value={editTitle}
                                    onChange={e => setEditTitle(e.target.value)}
                                    placeholder="수정된 제목"
                                />
                            </Form.Group>
                            <br></br>
                            <Form.Group controlId="formEditDescription">
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={editDescription}
                                    onChange={e => setEditDescription(e.target.value)}
                                    placeholder="수정된 설명"
                                />
                            </Form.Group>
                            <br></br>
                            <div style={{ textAlign: 'right' }}>
                                <Button variant="outline-success" onClick={updateBoard} style={{ marginRight: "10px" }}>
                                    수정
                                </Button>
                                <Button variant="outline-info" onClick={boardListView}>
                                    목록으로
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default MenuBoard;
