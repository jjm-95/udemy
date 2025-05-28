# 📘 DOM(Document Object Model) 정리

## 🧠 DOM이란?

- DOM은 **Document Object Model**의 줄임말
- 웹 페이지(HTML)를 자바스크립트가 **이해하고 조작할 수 있도록 만든 구조**
- HTML 문서를 **트리(Tree) 구조의 객체**로 변환해서 저장
- 자바스크립트는 DOM을 통해 HTML 요소를 선택, 변경, 추가/삭제할 수 있음

---

## 📖 비유로 이해하기

- HTML은 웹페이지의 "책"
- DOM은 그 책을 **컴퓨터가 이해할 수 있는 목차/설계도/지도**
- 예시 HTML
  ```html
  <html>
    <body>
      <h1>안녕!</h1>
      <p>나는 DOM이야.</p>
    </body>
  </html>
```

- DOM 구조 트리
``` tree
Document
└── html
    └── body
        ├── h1 → "안녕!"
        └── p → "나는 DOM이야."

```

## 💬 핵심 요약

- DOM은 **자바스크립트가 HTML 구조를 선택하고 조작하는 수단**
- 우리가 쓰는 `getElementById`, `querySelector`, `innerHTML` 등은 **DOM 조작 메서드**

## ✅ DOM 요소 선택 방법

| 메서드                        | 설명                   | 예시                                       | 반환값                   |
| -------------------------- | -------------------- | ---------------------------------------- | --------------------- |
| `getElementById()`         | **ID**로 요소 1개 선택     | `document.getElementById("myId")`        | 단일 요소 (`HTMLElement`) |
| `getElementsByClassName()` | **클래스명**으로 여러 개 선택   | `document.getElementsByClassName("box")` | HTMLCollection        |
| `getElementsByTagName()`   | **태그 이름**으로 여러 개 선택  | `document.getElementsByTagName("p")`     | HTMLCollection        |
| `querySelector()`          | **CSS 선택자**로 1개 선택   | `document.querySelector(".title")`       | 단일 요소                 |
| `querySelectorAll()`       | **CSS 선택자**로 여러 개 선택 | `document.querySelectorAll("div.box")`   | NodeList              |

## 📌 예제 코드

- HTML
```html
<div id="main" class="box">첫 번째</div>
<div class="box">두 번째</div>
```

- JavaScript
```javaScript
// ID로 선택
const mainDiv = document.getElementById("main");

// 클래스명으로 여러 개 선택
const boxes = document.getElementsByClassName("box");

// 태그 이름으로 선택
const divs = document.getElementsByTagName("div");

// CSS 선택자 방식
const firstBox = document.querySelector(".box"); // 첫 번째 .box
const allBoxes = document.querySelectorAll(".box"); // 모든 .box
```

## 🔍 상황별 추천 선택자

|상황|추천 방법|
|---|---|
|특정 ID가 있을 때|`getElementById()`|
|클래스나 태그로 여러 요소 선택|`getElementsByClassName()` / `getElementsByTagName()`|
|복잡한 조건 (예: `.menu li.active`)|`querySelector()` / `querySelectorAll()`|

---

## 📎 기억할 것

> DOM은 자바스크립트가 HTML을 **객체처럼 선택하고 조작**할 수 있게 도와주는 구조이다.
> DOM 선택자는 HTML 요소를 **프로그래밍적으로 다루는 통로**이다.
