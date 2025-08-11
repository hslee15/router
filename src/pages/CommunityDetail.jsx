import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const CommunityDetail = () => {

    const {id} = useParams()
    const nav = useNavigate()

    const posts = [
    {
      id: 1,
      subject: "React Router 초보 질문",
      writer: "김코딩",
      date: "2025-08-11",
      views: 123
    },
    {
      id: 2,
      subject: "JavaScript 비동기 처리 이해하기",
      writer: "이프론트",
      date: "2025-08-10",
      views: 87
    },
    {
      id: 3,
      subject: "CSS Grid 레이아웃 예제 공유",
      writer: "박스타일",
      date: "2025-08-09",
      views: 54
    },
    {
      id: 4,
      subject: "Node.js에서 JWT 인증 구현",
      writer: "최백엔드",
      date: "2025-08-08",
      views: 201
    },
    {
      id: 5,
      subject: "Vite vs CRA 무엇을 선택할까?",
      writer: "정세팅",
      date: "2025-08-07",
      views: 75
    }
  ];


  return (
        <section>
            <h1>community 상세</h1>
            <p>현재 글 id: {id}</p>
            <p>작성자: {posts.writer}</p>
            <p>작성일: {}</p>
            <p>조회수: {}</p>
            <div className='bt'>
            <button onClick={()=>nav(-1)}>뒤로 가기</button>
            <button onClick={()=>nav('/')}>홈으로 가기</button>
            </div>
        </section>
  )
}

export default CommunityDetail