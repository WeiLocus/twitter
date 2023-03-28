# Alphitter - Simple Twitter Clone

## 💡 Overview 介紹

Alpha Camp 學期三期末團體專案，本專案採用前後分離模式開發，小組成員有四人，其中兩人負責前端，兩人負責後端。此 repo 為前端的內容。(後端 repo 點我)

### 👀 Live demo: https://weilocus.github.io/twitter/

### 🧩 Built with 主要技術

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

### 💪 Our Team 小組成員

#### 前端組員

- Weii
- Kelly CHI

#### 後端組員

- Frank
- Wei Lin

### 📦 File Structure 專案結構

## ✨ Features 專案功能

<!-- 這邊放一些 gif 截圖 -->

- 註冊一個帳號帳號來使用這個網站，帳號與 Email 皆不可與其他使用者重複
- 使用使用者身份登入帳號，如果帳號密碼有誤或是漏填，均可得到清楚的提示
- 在側邊攔登出，回到登入頁面

### User Features 前台功能

#### 首頁

- 在首頁可以點擊輸入框發送推文
- 查看網站所有的推文，排列順序由新到舊
- 查看某特定一篇的推文，其回覆排列順序由新到舊

#### 使用者個人頁面

- 查看單一使用者喜推文，排列順序由新到舊
- 查看單一使用者回覆，排列順序由新到舊
- 查看單一使用者喜歡的內容，排列順序由新到舊
- 查看自己與其他使用者的個人頁面
- 更改自己的帳號資訊、封面照片、個人照片
- 刪除自己封面照片

#### 設定頁面

- 更改自己的註冊的帳號資訊

#### 互動

- 點擊與回覆其他使用者的貼文
- 喜歡或取消喜歡其他使用者的貼文
- 追蹤或退追蹤使用者
- 查看目前網站中追蹤數排名前十名的使用者

### Admin Features 後台功能

- 使用管理員身分登入帳號，如果帳號密碼有誤或是漏填，均可得到清楚的提示
- 登入後可以在側邊攔切換頁籤
- 推文清單頁面瀏覽所有推文
- 在推文清單頁面刪除任一筆推文，並會跳出確認視窗
- 在使用者列表瀏覽所有註冊帳號的使用者，依照推文數量排序
- 在側邊攔登出，回到登入頁面

## 🚀 Getting Started 開始使用

⚠️ **請先確認電腦中已安裝 node.js 與 npm！**

1. 將專案 clone 到本地：

```bash
$ git clone "https://github.com/WeiLocus/twitter.git"
```

2. 在本地開啟之後，透過終端機進入資料夾，輸入：

```bash
$ npm install
```

3. 安裝完畢後，繼續輸入：

```bash
$ npm run dev
```

4. 打開瀏覽器輸入網址：`http://localhost:5173/twitter` 即可進入網站

5. 前台測試帳號：

```
帳號：user1
密碼：12345678
```

6. 後台測試帳號：

```
帳號：root
密碼：12345678
```

7. 若要暫停使用，可在終端機入入以下指令：

```bash
ctrl + c
```

## 💻 Technologies 開發環境與工具

- node.js 16.16.0
- vite 4.2.1
- vite-plugin-svgr 2.4.0
- react 18.2.0
- react-dom 18.2.0
- react-router-dom 6.9.0
- react-spinners 0.13.8
- styled-components 5.3.9
- clsx 1.2.1
- axios 1.3.4
- eslint 8.36.0
- prettier 2.8.4

## 🙏 Acknowledgements 致謝
