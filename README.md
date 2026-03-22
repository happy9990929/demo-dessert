# Le Petit Délice

法式精品甜點網頁。22222222

## 自動部署到 GitHub Pages

本專案已設定好 GitHub Actions，當你將程式碼推送到 `master` 分支時，它會自動打包並部署到 GitHub Pages。

### 如何開啟 GitHub Pages 功能：

1.  將你的專案上傳（Push）到 GitHub 儲存庫。
2.  在 GitHub 網頁上進入專案的 **Settings** (設定)。
3.  在左側選單點擊 **Pages**。
4.  在 **Build and deployment** 下方的 **Source**，將選項從 `Deploy from a branch` 改為 **`GitHub Actions`**。
5.  設定完成後，只要每次推送程式碼到 `master` 分支，GitHub 就會自動幫你更新網頁。

### 開發建議

- 所有的靜態圖片都放在 `public/images` 目錄下。
- 在程式碼中引用圖片時，請使用相對路徑（例如：`images/logo.png`），以確保在本地開發與線上部署時路徑都能正確對應。
