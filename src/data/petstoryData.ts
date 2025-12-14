// PetstoryPost: 게시글 하나의 타입
export interface PetstoryPost {
  id: number;               // 게시글 고유 ID
  title: string;            // 게시글 제목
  isEnded: boolean;         // 모집 종료 여부
  isNew: boolean;           // NEW 배지 표시 여부
  content: string;          // 본문 미리보기
  tags: string[];           // 해시태그 리스트
  author: string;           // 작성자 이름
  date: string;             // 작성일 (YYYY-MM-DD)
  commentCount: number;     // 댓글 수
  imageUrl: string;         // 썸네일 이미지 경로
}

// 게시글 배열
export const petstoryPosts: PetstoryPost[] = [
  {
    id: 1,
    title: '배변실수를 갑자기 해요..',
    isEnded: false,
    isNew: true,
    content: '우리 아이가 평소엔 잘 참다가 요즘 갑자기 아무 데서나 배변을 해요. 건강에 문제가 있는 건 아닌지 걱정돼요. 혹시 비슷한 경험 있으신 분들 계신가요?',
    tags: ['#고양이'],
    author: '김태희',
    date: '2025-08-13',
    commentCount: 3,
    imageUrl: `/assets/img/petstory/cat_01.png`
  },
    {
    id: 2,
    title: '산책만 나가면 짖어요!',
    isEnded: true,
    isNew: false,
    content: '평소엔 얌전한데 산책만 나가면 지나가는 사람이나 강아지한테 계속 짖어요. 혹시 사회성 부족일까요? 비슷한 경험 있으신 분들 조언 부탁드려요!',
    tags: ['#강아지 사회성', '#산책훈련'],
    author: '김성애',
    date: '2025-08-13',
    commentCount: 5,
    imageUrl: `/assets/img/petstory/dog_01.jpg`
  },
    {
    id: 3,
    title: '밥을 갑자기 안 먹어요..',
    isEnded: false,
    isNew: true,
    content: '며칠 전부터 사료를 거의 안 먹고 간식만 찾네요. 평소엔 잘 먹던 아이인데 갑자기 이러니까 걱정돼요. 혹시 입맛이 변한 걸까요, 아니면 건강 문제일까요?',
    tags: ['#고양이 식욕', '#반려동물건강'],
    author: '오유진',
    date: '2025-08-13',
    commentCount: 7,
    imageUrl: `/assets/img/petstory/cat_02.png`
  },
    {
    id: 4,
    title: '혼자 있을 때 너무 불안해해요ㅜㅜ',
    isEnded: false,
    isNew: true,
    content: '외출만 하면 계속 울고, 문 앞에서 기다리면서 발을 긁어요. 분리불안이 심한 것 같은데 어떻게 도와줘야 할지 모르겠어요. 혹시 효과 본 방법 있으신가요?',
    tags: ['#강아지 분리불안', '#반려동물훈련'],
    author: '김재욱',
    date: '2025-08-13',
    commentCount: 4,
    imageUrl: `/assets/img/petstory/dog_02.jpg`
  },
    {
    id: 5,
    title: '갑자기 털을 너무 많이 뽑아요..',
    isEnded: false,
    isNew: true,
    content: '요즘 들어 털을 너무 많이 뽑아서 집안 곳곳에 털이 날려요. 혹시 털갈이 시기인 걸까요, 아니면 건강에 문제가 있는 걸까요? 비슷한 경험 있으신 분들 조언 부탁드려요.',
    tags: ['#고양이 털갈이', '#건강체크'],
    author: '남성진',
    date: '2025-08-13',
    commentCount: 10,
    imageUrl: `/assets/img/petstory/cat_03.png`
  },
    {
    id: 6,
    title: '낯선 사람만 보면 도망가요',
    isEnded: true,
    isNew: false,
    content: '가족들한텐 애교도 많은데 낯선 사람만 보면 숨거나 도망가요. 사회화가 부족한 걸까요? 조금씩 익숙해지게 하려면 어떤 방법이 좋을까요?',
    tags: ['#강아지', '#강아지 심리'],
    author: 'Chernenok anna',
    date: '2025-08-13',
    commentCount: 7,
    imageUrl: `/assets/img/petstory/dog_03.jpg`
  },
   {
    id: 7,
    title: '배변실수를 갑자기 해요..',
    isEnded: false,
    isNew: true,
    content: '우리 아이가 평소엔 잘 참다가 요즘 갑자기 아무 데서나 배변을 해요. 건강에 문제가 있는 건 아닌지 걱정돼요. 혹시 비슷한 경험 있으신 분들 계신가요?',
    tags: ['#고양이'],
    author: '김태희',
    date: '2025-08-13',
    commentCount: 3,
    imageUrl: `/assets/img/petstory/cat_01.png`
  },
    {
    id: 8,
    title: '산책만 나가면 짖어요!',
    isEnded: true,
    isNew: false,
    content: '평소엔 얌전한데 산책만 나가면 지나가는 사람이나 강아지한테 계속 짖어요. 혹시 사회성 부족일까요? 비슷한 경험 있으신 분들 조언 부탁드려요!',
    tags: ['#강아지 사회성', '#산책훈련'],
    author: '김성애',
    date: '2025-08-13',
    commentCount: 5,
    imageUrl: `/assets/img/petstory/dog_01.jpg`
  },
    {
    id: 9,
    title: '밥을 갑자기 안 먹어요..',
    isEnded: false,
    isNew: true,
    content: '며칠 전부터 사료를 거의 안 먹고 간식만 찾네요. 평소엔 잘 먹던 아이인데 갑자기 이러니까 걱정돼요. 혹시 입맛이 변한 걸까요, 아니면 건강 문제일까요?',
    tags: ['#고양이 식욕', '#반려동물건강'],
    author: '오유진',
    date: '2025-08-13',
    commentCount: 7,
    imageUrl: `/assets/img/petstory/cat_02.png`
  },
    {
    id: 10,
    title: '혼자 있을 때 너무 불안해해요ㅜㅜ',
    isEnded: false,
    isNew: true,
    content: '외출만 하면 계속 울고, 문 앞에서 기다리면서 발을 긁어요. 분리불안이 심한 것 같은데 어떻게 도와줘야 할지 모르겠어요. 혹시 효과 본 방법 있으신가요?',
    tags: ['#강아지 분리불안', '#반려동물훈련'],
    author: '김재욱',
    date: '2025-08-13',
    commentCount: 4,
    imageUrl: `/assets/img/petstory/dog_02.jpg`
  },
    {
    id: 11,
    title: '갑자기 털을 너무 많이 뽑아요..',
    isEnded: false,
    isNew: true,
    content: '요즘 들어 털을 너무 많이 뽑아서 집안 곳곳에 털이 날려요. 혹시 털갈이 시기인 걸까요, 아니면 건강에 문제가 있는 걸까요? 비슷한 경험 있으신 분들 조언 부탁드려요.',
    tags: ['#고양이 털갈이', '#건강체크'],
    author: '남성진',
    date: '2025-08-13',
    commentCount: 10,
    imageUrl: `/assets/img/petstory/cat_03.png`
  },
    {
    id: 12,
    title: '낯선 사람만 보면 도망가요',
    isEnded: true,
    isNew: false,
    content: '가족들한텐 애교도 많은데 낯선 사람만 보면 숨거나 도망가요. 사회화가 부족한 걸까요? 조금씩 익숙해지게 하려면 어떤 방법이 좋을까요?',
    tags: ['#강아지', '#강아지 심리'],
    author: 'Chernenok anna',
    date: '2025-08-13',
    commentCount: 7,
    imageUrl: `/assets/img/petstory/dog_03.jpg`
  },
    {
    id: 13,
    title: '밥을 갑자기 안 먹어요..',
    isEnded: false,
    isNew: true,
    content: '며칠 전부터 사료를 거의 안 먹고 간식만 찾네요. 평소엔 잘 먹던 아이인데 갑자기 이러니까 걱정돼요. 혹시 입맛이 변한 걸까요, 아니면 건강 문제일까요?',
    tags: ['#고양이 식욕', '#반려동물건강'],
    author: '오유진',
    date: '2025-08-13',
    commentCount: 7,
    imageUrl: `/assets/img/petstory/cat_02.png`
  },
    {
    id: 14,
    title: '혼자 있을 때 너무 불안해해요ㅜㅜ',
    isEnded: false,
    isNew: true,
    content: '외출만 하면 계속 울고, 문 앞에서 기다리면서 발을 긁어요. 분리불안이 심한 것 같은데 어떻게 도와줘야 할지 모르겠어요. 혹시 효과 본 방법 있으신가요?',
    tags: ['#강아지 분리불안', '#반려동물훈련'],
    author: '김재욱',
    date: '2025-08-13',
    commentCount: 4,
    imageUrl: `/assets/img/petstory/dog_02.jpg`
  },
    {
    id: 15,
    title: '갑자기 털을 너무 많이 뽑아요..',
    isEnded: false,
    isNew: true,
    content: '요즘 들어 털을 너무 많이 뽑아서 집안 곳곳에 털이 날려요. 혹시 털갈이 시기인 걸까요, 아니면 건강에 문제가 있는 걸까요? 비슷한 경험 있으신 분들 조언 부탁드려요.',
    tags: ['#고양이 털갈이', '#건강체크'],
    author: '남성진',
    date: '2025-08-13',
    commentCount: 10,
    imageUrl: `/assets/img/petstory/cat_03.png`
  },
  // ... 필요한 만큼 추가
];