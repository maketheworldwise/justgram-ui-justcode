# justgram-ui-justcode

> 순서에 맞게 vanilla 환경에서 인스타그램 클론 프로젝트에 필요한 UI를 생성하는 과제

## 🚀 Mission 1

**로그인 페이지 레이아웃**

<details>
<summary>파일명</summary>
<div markdown="1">
<br>

- login.html
- style/login.css

</div>
</details>

<details>
<summary>디자인</summary>
<div markdown="1">
<br>

![](/docs/images/login.png)

- [인스타그램](https://www.instagram.com/)
- [아이콘](https://www.flaticon.com/free-icon/instagram_1384031?related_item_id=1384031&term=instagram)
- [폰트](https://fonts.google.com/specimen/Lobster?preview.text=&preview.text_type=custom)

</div>
</details>

<details>
<summary>HTML 작성</summary>
<div markdown="1">
<br>

- 로그인 전체를 감싸고 border가 적용된 div 태그
- 폰트를 변경한 'justgram'이 들어간 로고
- 로그인 입력칸 input 태그
  - type은 text와 password 사용
  - placeholder 속성 사용 → "전화번호, 사용자 이름 또는 이메일", “비밀번호”
- 로그인 버튼 button 태그
  - disabled 속성 사용 → 버튼 비활성화

</div>
</details>

<details>
<summary>CSS 작성</summary>
<div markdown="1">
<br>

- HTML 작성 단계 완료 후 작업

</div>
</details>

## 🚀 Mission 2

**ID, PW 입력 시 로그인 버튼 활성화 기능**

<details>
<summary>관련 파일</summary>
<div markdown="1">
<br>

- HTML: login.html
- JS: js/login.js

</div>
</details>

<details>
<summary>입력 이벤트</summary>
<div markdown="1">
<br>

- Input 요소(Element)에 이벤트를 등록하여 글자 변화를 감지
- 요소에 addEventListener로 이벤트 등록
- ID 입력칸과(AND) PW 입력칸에 글자가 하나라도 들어가면 로그인 버튼 활성화

</div>
</details>

## 🚀 Mission 3

**메인 페이지 레이아웃**

<details>
<summary>관련 파일</summary>
<div markdown="1">
<br>

- HTML: main.html
- CSS: style/main.css

</div>
</details>

<details>
<summary>디자인</summary>
<div markdown="1">
<br>

![](/docs/images/main.png)

- 탐색 : [https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png](https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png)
- 하트 : [https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png](https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png)
- 마이 : [https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png](https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png)
- 피드, 프로필 사진 : [Unsplash](https://unsplash.com/)

</div>
</details>

<details>
<summary>HTML 작성</summary>
<div markdown="1">
<br>

- 헤더 부분
  - 아이콘, 로고, 검색창, 탐색, 하트, 마이는 적절한 tag를 사용해서 구현
- 피드 부분
  - 크게 4가지 div로 나누어서 진행
    - 피드 헤더, 피드 사진, 메뉴바, 댓글 부분
  - 피드는 3개 이상 나타나게 구현

</div>
</details>

<details>
<summary>CSS 작성</summary>
<div markdown="1">
<br>

- HTML 작성 단계 완료 후 작업

</div>
</details>

## 🚀 Mission 4

**댓글 내용 입력 후 Enter 키 입력, 게시 버튼 클릭 시 댓글 추가 기능**

<details>
<summary>관련 파일</summary>
<div markdown="1">
<br>

- HTML: main.html
- JS: js/main.js

</div>
</details>

<details>
<summary>댓글 입력 함수 작성</summary>
<div markdown="1">
<br>

- Enter 이벤트, 버튼 클릭 이벤트에서 사용할 댓글 입력 함수 작성
- 작성 내용, 작성자 매개변수로 받기
  - function writeComment(content, writer) { … }

</div>
</details>

<details>
<summary>입력칸 Enter 이벤트 등록</summary>
<div markdown="1">
<br>

- 요소에 addEventListener로 이벤트 등록
- 피드가 3개 이상 있는 것에 유의하며 이벤트를 등록
  - hint: forEach 메소드 활용

</div>
</details>

<details>
<summary>게시 버튼 클릭 이벤트 등록</summary>
<div markdown="1">
<br>

- 요소에 addEventListener로 이벤트 등록
- 피드가 3개 이상 있는 것에 유의하며 이벤트를 등록
  - hint: forEach 메소드 활용

</div>
</details>

## 🚀 Mission 5

**feed mock data fetch 후 UI 그리기**

<details>
<summary>관련 파일</summary>
<div markdown="1">
<br>

- HTML: main.html
- JS: js/main.js
- JSON: data/feeds.json

</div>
</details>

<details>
<summary>Mission 3에서 Publishing한 레이아웃을 mock 데이터를 통해 html을 동적으로 생성</summary>
<div markdown="1">
<br>

- json mock data fetch 하기
- 받은 데이터 forEach 로 순회
- element.append 를 이용하여 html 동적으로 생성

</div>
</details>

---

## 🚀 Mission 6

**ID, PW validation**

<details>
<summary>관련 파일</summary>
<div markdown="1">
<br>

- HTML: login.html
- JS: js/login.js

</div>
</details>

<details>
<summary>유효성 검증 함수 작성</summary>
<div markdown="1">
<br>

- Misson 2에서 등록된 이벤트에 사용할 유효성 검증 함수 작성
- 실제 로그인 하는 경우를 생각하며 **validation(유효성 검사)** 기능을 추가
- 유효성 검증에 따른 버튼 활성화 분기
- ex) id >>> '@' 포함 / pw >>> 5글자 이상

</div>
</details>

## 🚀 Mission 7

**댓글 좋아요 / 삭제 기능**

<details>
<summary>관련 파일</summary>
<div markdown="1">
<br>

- HTML: main.html
- JS: js/main.js

</div>
</details>

<details>
<summary>댓글 좋아요 기능 구현</summary>
<div markdown="1">
<br>

- 댓글 우측에 나타나는 하트 클릭시 하트 색 변경
- 색이 차있으면 → 색 없애기, 색이 없으면 → 색 채우기

</div>
</details>

<details>
<summary>댓글 삭제 기능 구현</summary>
<div markdown="1">
<br>

- 댓글 우측에 나타나는 삭제 버튼(없을시 생성) 클릭시 댓글 없어지게 하기
- (선택) Alert 활용하여 confirm(정말 삭제하시겠습니까?, 예 / 아니오) 단계 넣기
- hint: [MDN | ChildNode.remove()](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove)

</div>
</details>

## 🚀 Mission 8

**아이디 검색 기능**

<details>
<summary>관련 파일</summary>
<div markdown="1">
<br>

- HTML: main.html
- JS: js/main.js
- JSON: data/profiles.json

</div>
</details>

<details>
<summary>디자인</summary>
<div markdown="1">
<br>

![](/docs/images/search.png)

- profiles.json 데이터를 fetch 하여 검색이 가능하게 만들어주세요.

</div>
</details>

## 🚀 Mission 9

**nav 프로필 사진 클릭 시 메뉴 박스 생성**

<details>
<summary>관련 파일</summary>
<div markdown="1">
<br>

- HTML: main.html
- CSS: css/main.css
- JS: js/main.js

</div>
</details>

<details>
<summary>디자인</summary>
<div markdown="1">
<br>

![](/docs/images/nav.png)

- 프로필 버튼, 저장됨 버튼, 설정 버튼
  - 클릭 시 아무 일도 일어나지 않아도 무관
- 로그아웃 버튼
  - 클릭시 로그인 페이지로 이동

</div>
</details>

## 🚀 Mission 10

**반응형 구현**

<details>
<summary>관련 파일</summary>
<div markdown="1">
<br>

- HTML: main.html
- JS: js/main.js

</div>
</details>

<details>
<summary>디자인</summary>
<div markdown="1">
<br>

- 화면의 크기가 특정 지점(**break point**) 이하로 줄어들시 자동으로 맞춰지게 구현
- 참고) [MDN | @media](https://developer.mozilla.org/ko/docs/Web/CSS/@media)

</div>
</details>
