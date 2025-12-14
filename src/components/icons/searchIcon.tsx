// src/components/icons/SearchIcon.tsx
import React from 'react';

// 아이콘 컴포넌트에 전달할 props 정의
interface Props {
  width?: number;       // 아이콘 너비 (기본값: 14.58)
  height?: number;      // 아이콘 높이 (기본값: 14.58)
  color?: string;       // 아이콘 선 색상 (기본값: 흰색)
  className?: string;   // CSS 클래스명 (선택적으로 스타일 적용)
}

// SearchIcon 컴포넌트 정의
const SearchIcon: React.FC<Props> = ({
  width = 18,
  height = 18,
  color = '#fff',
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg" // SVG 문서 타입 선언
    width={14.58}                      // 아이콘 너비
    height={14.58}                    // 아이콘 높이
    viewBox="0 0 24 24"                // SVG 내부 좌표계 설정
    fill="none"                        // 내부 채우기 없음
    stroke={color}                     // 선 색상 설정
    strokeWidth="2"                    // 선 두께
    strokeLinecap="round"             // 선 끝 모양 (둥글게)
    strokeLinejoin="round"            // 선 연결 부분 모양 (둥글게)
    className={className}             // 외부에서 전달받은 CSS 클래스
  >
    {/* 렌즈 부분: 중심이 (11,11)이고 반지름이 8인 원 */}
    <circle cx="9" cy="9" r="7" />

    {/* 손잡이 부분: (21,21)에서 (16.65,16.65)까지 이어지는 선 */}
    <line x1="21" y1="21" x2="15" y2="15" />
  </svg>
);

// 컴포넌트 내보내기
export default SearchIcon;