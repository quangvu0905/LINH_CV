# Linh CV

Trang CV React + Vite.

## Chạy local

```bash
npm install
npm run dev
```

## Deploy lên GitHub Pages

### Bước 1 — Tạo repo trên GitHub

1. Vào [github.com/new](https://github.com/new)
2. Đặt tên repo (ví dụ `Linh_CV` hoặc `linh-cv`)
3. Chọn **Public**
4. **Không** tick “Add a README” (project local đã có code)
5. Bấm **Create repository**

### Bước 2 — Đẩy code lên GitHub

Trong terminal, tại thư mục project:

```bash
cd /Users/vuminhquang/Desktop/Linh_CV

git init
git add .
git commit -m "Initial commit: CV React"
git branch -M main
git remote add origin https://github.com/TEN_GITHUB/TEN_REPO.git
git push -u origin main
```

Thay `TEN_GITHUB` (username GitHub) và `TEN_REPO` (tên repo vừa tạo).

### Bước 3 — Bật GitHub Pages

1. Vào repo trên GitHub → **Settings** → **Pages**
2. **Build and deployment** → Source: **GitHub Actions**
3. Push code lên nhánh `main` — workflow `.github/workflows/deploy.yml` sẽ tự build và deploy

Sau vài phút, site chạy tại:

```text
https://TEN_GITHUB.github.io/TEN_REPO/
```

(Ví dụ repo tên `Linh_CV` → `https://vuminhquang.github.io/Linh_CV/`)

### Lần sau cập nhật CV

```bash
git add .
git commit -m "Cập nhật CV"
git push
```

GitHub Actions tự build lại; refresh trang sau 1–2 phút.

## Scripts

| Lệnh | Mô tả |
|------|--------|
| `npm run dev` | Dev server |
| `npm run build` | Build production |
| `npm run preview` | Xem bản build local |
