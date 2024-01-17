# Image Teller

MadCamp Week3 1분반 

- 사용자들끼리 서로의 롤링 페이퍼에 그 사람에 대한 인상을 적을 수 있습니다.
- 롤링 페이퍼에 붙은 다른 사람들의 의견들을 종합하여 어울리는 이미지를 찾아줍니다.

### a. 개발 팀원

- 김수환 - KAIST 전산학부(수리과학과) 22학번
- 정민서 - 숙명여자대학교 컴퓨터과학과 22학번

### b. 개발환경

- Language: JavaScript, HTML, CSS
- Front-end: React
- Server: Node.js
- DataBase: MySQL
- IDE: Visual Studio code 

### c. DB ERD

<img width="961" alt="chrome_cSLdJfE6SP" src="https://github.com/M-J1nx/MadCamp_week3_front/assets/155048947/3ea549ed-1782-4619-b9e6-6d2c1fe76825">

### d. WEB

## Page 0 - HOME/LOGIN/SIGNUP

<img width="961" alt="chrome_cSLdJfE6SP" src="https://github.com/M-J1nx/MadCamp_week3_front/assets/155048947/4d24bbfb-574d-4235-ba11-6e85ceb708c6">
<img width="961" alt="chrome_cSLdJfE6SP" src="https://github.com/M-J1nx/MadCamp_week3_front/assets/155048947/5d4ffb5b-33b8-4e4a-bc5f-aa8fd6a57c24">
<img width="961" alt="chrome_lsHOMcIDNq" src="https://github.com/M-J1nx/MadCamp_week3_front/assets/155048947/cec49610-2a55-48eb-87ac-ca0bb290c3f3">
<img width="961" alt="chrome_Q9kJv5QydW" src="https://github.com/M-J1nx/MadCamp_week3_front/assets/155048947/3e73e47f-961c-4308-a99b-c1839e997b86">


***Major features***

- 웹 소개 페이지입니다. 스크롤하여 읽을 수 있습니다.
- 로그인 버튼을 눌러 시작할 수 있습니다.
- 로그인/회원가입 기능이 있습니다.


## Page 1 - MAIN

<img width="961" alt="chrome_bc8PhCOo4A" src="https://github.com/M-J1nx/MadCamp_week3_front/assets/155048947/054a5dce-d914-4e96-a0e3-7b02439071b0">


***Major features***

- 전체 게시판과 롤링페이퍼 만들기 페이지로 가는 버튼이 있습니다.
- 롤링 페이퍼는 한 번만 만들 수 있고, 만든 후에는 롤링 페이퍼 보기 버튼으로 바뀝니다.
- 롤링 페이퍼 보기 버튼은 사용자의 롤링 페이퍼 화면으로 넘어갑니다.


## Page 2 - BULLETIN

<img width="961" alt="chrome_Z33VLSh1yI" src="https://github.com/M-J1nx/MadCamp_week3_front/assets/155048947/d7794950-e148-4450-a149-a79312ee256e">

***Major features***

- 사용자들이 만든 롤링 페이퍼들로 이동할 수 있습니다.
- 각 게시물의 제목은 사용자의 닉네임과 게시물 번호로 구성되어 있습니다.
    

## Page 3 - ROLLING PAPER

<img width="961" alt="chrome_ehvc6BZE4W" src="https://github.com/M-J1nx/MadCamp_week3_front/assets/155048947/e1f63852-2186-4ceb-a4bf-a2a7674c61e6">
<img width="961" alt="chrome_53BQiNAQom" src="https://github.com/M-J1nx/MadCamp_week3_front/assets/155048947/0bc4bf21-2fe0-43db-85c7-6086a72264af">

***Major features***

- 해당 페이지는 결과 보기, 메모 쓰기, 메인으로 돌아가기, 카카오톡으로 공유하기 기능이 있습니다.
  
- 메모 쓰기 버튼을 누르면 팝업으로 메모를 작성할 수 있는 창이 뜨고, 80자로 글자가 제한되어 있습니다.
- 메모 작성을 완료하면 화면에 메모가 추가됩니다.
- 메모를 클릭하면 메모 작성자만 메로를 삭제할 수 있는 팝업이 뜹니다.

- 결과 보기 버튼을 누르면 롤링 페이퍼의 모든 포스트 내용을 네이버 클로바 API를 이용해서 요약합니다.
- 요약한 정보를 결과 보기 페이지로 전달합니다.

- 카카오톡으로 공유하기 버튼은 카카오톡 API를 사용하여 해당 롤링 페이퍼의 URL을 공유합니다.


## Page 4 - RESULT

<img width="961" alt="chrome_kLIOHzu7jD" src="https://github.com/M-J1nx/MadCamp_week3_front/assets/155048947/c5ee85e3-68a1-4697-9234-1559a2457f10">
<img width="961" alt="chrome_KBHM5sbURT" src="https://github.com/M-J1nx/MadCamp_week3_front/assets/155048947/ebd977c7-94af-49f0-b69a-bb5b3214042f">

***Major features***

- 처음 결과 페이지에 들어가면 물음표 이미지와 롤링 페이퍼의 요약된 내용이 출력됩니다.
- 사진으로 확인하기 버튼을 누르면 형태소 분석 API로 요약 문장에서 명사들을 추출합니다.
- 해당 명사들을 이용해서 pixabey 클로어 API를 통해 해당 단어에 알맞는 이미지를 가져와 물음표 이미지를 대체합니다.

### e. DIRECTORY STRUCTURE
```
📦public
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜index.html
 ┃ ┣ 📜logo192.png
 ┃ ┣ 📜logo512.png
 ┃ ┣ 📜manifest.json
 ┃ ┗ 📜robots.txt
📦src
 ┣ 📂components
 ┃ ┣ 📂img #배경 이미지들
 ┃ ┃ ┣ 📜1.png
 ┃ ┃ ┣ 📜2.png
 ┃ ┃ ┣ 📜3.png
 ┃ ┃ ┣ 📜4.png
 ┃ ┃ ┣ 📜5.png
 ┃ ┃ ┣ 📜8.png
 ┃ ┃ ┣ 📜MainButton.png
 ┃ ┃ ┣ 📜ResultBackground.png
 ┃ ┃ ┗ 📜RollingPaper.png
 ┃ ┣ 📜1.png
 ┃ ┣ 📜2.png
 ┃ ┣ 📜3.png
 ┃ ┣ 📜4.png
 ┃ ┣ 📜5.png
 ┃ ┣ 📜All.js          # 전체 게시판
 ┃ ┣ 📜Delete.js       # 포스트지 삭제 팝업
 ┃ ┣ 📜Home.js         # 사이트 소개 
 ┃ ┣ 📜index.js        # export 관리 
 ┃ ┣ 📜KAKAOButton.js  # 카카오톡 공유 버튼
 ┃ ┣ 📜Like.js         
 ┃ ┣ 📜Login.js        # 로그인 화면
 ┃ ┣ 📜Mainhome.js     # 메인 화면
 ┃ ┣ 📜Memo.css        # 전체 CSS
 ┃ ┣ 📜Memo.js         # 포스트지 컴포넌트
 ┃ ┣ 📜post.png        
 ┃ ┣ 📜PublicUp.js   
 ┃ ┣ 📜Result.js       # 결과 화면
 ┃ ┣ 📜Roll.js         # 롤링 페이퍼 화면
 ┃ ┣ 📜Signup.js       # 회원가입 
 ┃ ┣ 📜ToastMessage.js # 토스트 메시지
 ┃ ┗ 📜WriteMemo.js    # 포스트 작성 팝업
 ┣ 📜App.css
 ┣ 📜App.js            
 ┣ 📜App.test.js
 ┣ 📜AuthContext.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜logo.svg
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
```

  

