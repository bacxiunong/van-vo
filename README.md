# Tìm hiểu vẩn vơ

Dashboard nhỏ về **các trường phái triết học** Đông và Tây. Mỗi trường phái có: câu hỏi trung tâm, 3 ý chính, người tiêu biểu, từ khoá.
Một phần của site cá nhân **Mr. Nobody**, chạy tại `https://bacxiunong.com/tim-hieu-van-vo/`.

- `index.html` — giao diện
- `style.css` — tông màu chung của site (tím xám hoàng hôn)
- `data.js` — dữ liệu các trường phái (nội dung tự viết, tóm tắt để tìm hiểu, không trích sách)
- `app.js` — dòng thời gian, lọc theo Đông/Tây và thời kỳ, tìm kiếm, xem chi tiết

## Chạy thử

Web tĩnh, không cần cài gì. Mở `index.html` bằng trình duyệt, hoặc:

```bash
npx serve .
```

## Deploy

Project Vercel riêng (preset **Other**, không có bước build). Trang chủ `bacxiunong.com` (repo `mr-nobody`) chuyển tiếp đường dẫn `/tim-hieu-van-vo/` sang project này.
Mọi đường dẫn bên trong đều là tương đối nên chạy được dưới đường dẫn con.

## Thêm trường phái

Thêm một mục vào mảng `TRUONG_PHAI` trong `data.js` với các trường: `id, ten, tenGoc, khuVuc ('Đông' | 'Tây'), thoiKy, batDau, cauHoi, yChinh[3], daiDien[], tuKhoa[]`.
