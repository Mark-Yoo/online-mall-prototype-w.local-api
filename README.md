# 온라인 쇼핑몰 mock-up

---

## 개요

해당 프로젝트는 두 개의 폴더로 분리되어 있습니다.

- client는 SSR과 코드 스플리팅에 특화되어 검색 엔진 최적화와 프론트 서버에서 데이터를 받아오는 과정에서의 효율성을 노리고자 하였습니다.

- server는 개인적으로 Next.js를 실험하고 공부하기 위해 express를 활용하여 로컬 서버를 만들고 필요한 기능들만을 간단하게 구축하였습니다. 데이터는 faker.js를 사용하여 더미데이터를 생성한 후 해당 데이터를 json 형식으로 변경, 로컬 서버에서 보내줄 수 있도록 구현했습니다.

## 설치 및 시연

```shell
// 터미널을 통해 각 폴더의 디렉토리로 이동 후 다음의 명령어를 입력해주세요
npm install

// 이후 각각의 폴더의 디렉토리를 가리키고 있는 터미널에 다음의 명령어를 입력해주세요
// client/
npm run dev

// server/
npm start

// 두 폴더에서 각각 명령어가 실행되어야 합니다.
```

## 구현 완료한 부분

- 대분류 카테고리를 통해 각각의 카테고리에 해당하는 자료들만을 호출
- 소분류 카테고리 페이지는 `소분류 카테고리 텍스트`를 통한 임의의 그리드로 보여지며 클릭 시 해당 카테고리에 맞는 제품 리스트가 보여집니다. (예시 - 티셔츠, 맨투맨/후드티, 셔츠/남방, 정장세트, 바지/청바지, 트레이닝복 등)
- 특정 제품 선택 시 해당 제품에 대한 `제품 상세 페이지로 이동`
- `장바구니 담기`를 클릭할 시 장바구니에 해당 상품이 담김과 동시에 `장바구니 페이지`로 이동 (useRouter의 push )
- 장바구니 페이지에서는 상품의 가격, 무료 배송 여부가 표시되며 삭제가 가능합니다. 또한, 총 상품 금액 및 배송 비, 할인 금액을 계산하여 최종 결제 금액을 산출하여 표시
- 낮은가격, 높은가격, 평점, 최신 4가지의 필터 구현 (기준: 높은 별점 순)
- 회사 로고 부분을 클릭하면 다시 index 페이지로 이동
- flex를 활용하여 디자인 구현 (구형 익스플로러는 지원 대상에서 제외하였습니다.)

---

## 구현이 되지 않은 부분

- 좀 더 디테일한 반응형 디자인
- 카테고리 선택시 필터 디자인 초기화 부분
- 디테일하고 좀 더 UX 적인 부분을 고려한 디자인 구현

---

## 향후 필요하다고 생각하는 기능

- 로그인 (쇼핑몰의 가장 기본적인 부분)
- 회원가입 (로그인과 동일)
  - 최근 회원가입 방법이 간소화된 경우가 많으므로 SNS 계정 혹은 Google, Apple, 카카오톡 등을 활용한 소셜 로그인 방법
- 로그인 회원에 맞는 각각의 장바구니
- 쿠폰 기능 ( 쿠폰 발급 및 사용)
  - 쿠폰 기능은 쇼핑몰에서 회원들을 모으기 좋은 마케팅 수단이 될 수 있으므로 해당 기능을 구현한다면 광고를 통한 바이럴 마케팅도 노릴 수 있을 듯함.
- 찜하기 및 공유하기
  - 카카오톡에서 제공하는 '내가 찜한 목록'과 비슷하게 같은 쇼핑몰을 이용하는 친구에게 해당 자료를 공유할 수 있는 기능을 마련한다면 신규 유입이 수월할 것으로 보임
- 리뷰창 혹은 리뷰 페이지
  - 상황에 따라 선택지가 달라질 수 있으나 해당 제품을 리뷰하고 사진을 포함해서 올릴 수 있는 준 SNS 기능은 최근 쇼핑몰에서 필수적으로 필요
- 사진에 태그를 걸어 옷 디테일 정보로 넘어가기
  - '오늘의 집' 홈페이지에서도 사용했던 기능으로 협찬 사진에서 클릭 등을 통해 바로 해당 제품으로 넘어갈 수 있는 기능