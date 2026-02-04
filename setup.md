# 🚀 Hướng dẫn cài đặt và chạy Hotel Booking App

## ⚡ Cài đặt nhanh

```bash
# 1. Kiểm tra hệ thống
node check-system.js

# 2. Cài đặt tất cả dependencies
npm run install-all

# 3. Khởi tạo dữ liệu mẫu (tùy chọn)
npm run seed

# 4. Chạy ứng dụng
npm run dev
```

## ✅ Kiểm tra yêu cầu hệ thống

### 1. Cài đặt Node.js
- Tải và cài đặt Node.js từ: https://nodejs.org/
- Chọn phiên bản LTS (Long Term Support)
- Sau khi cài đặt, mở Command Prompt và kiểm tra:
```bash
node --version
npm --version
```

### 2. Cài đặt MongoDB
**Tùy chọn 1: MongoDB Community Server (Local)**
- Tải từ: https://www.mongodb.com/try/download/community
- Cài đặt và khởi động MongoDB service

**Tùy chọn 2: MongoDB Atlas (Cloud - Khuyến nghị)**
- Đăng ký tài khoản miễn phí tại: https://www.mongodb.com/atlas
- Tạo cluster và lấy connection string
- Cập nhật MONGODB_URI trong file .env

## 🛠️ Cài đặt ứng dụng

### Bước 1: Kiểm tra hệ thống
```bash
node check-system.js
```

### Bước 2: Cài đặt dependencies
```bash
npm run install-all
```

### Bước 3: Cấu hình môi trường
1. Kiểm tra file `.env` trong thư mục gốc
2. Kiểm tra file `frontend/.env`
3. Cập nhật MONGODB_URI nếu cần

### Bước 4: Khởi tạo dữ liệu mẫu (Tùy chọn)
```bash
npm run seed
```
Lệnh này sẽ tạo:
- 3 tài khoản mẫu (Admin, Manager, Customer)
- 6 phòng mẫu với các loại khác nhau

### Bước 5: Khởi động ứng dụng

**Chạy cả Backend và Frontend cùng lúc:**
```bash
npm run dev
```

**Hoặc chạy riêng biệt:**

Backend (Terminal 1):
```bash
npm run server
```

Frontend (Terminal 2):
```bash
npm run client
```

**Production mode:**
```bash
npm start
```

## 🌐 Truy cập ứng dụng

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/health

## 📋 Tài khoản demo

Sau khi chạy `npm run seed`, bạn có thể đăng nhập với:

**Admin Account:**
- Email: admin@luxuryhotel.com
- Password: admin123

**Manager Account:**
- Email: manager@luxuryhotel.com  
- Password: manager123

**Customer Account:**
- Email: john@example.com
- Password: customer123

Hoặc đăng ký tài khoản mới tại: http://localhost:3000/register

## 🔧 Khắc phục sự cố

### Lỗi "npm not recognized"
- Cài đặt Node.js từ nodejs.org
- Khởi động lại Command Prompt

### Lỗi kết nối MongoDB
- Kiểm tra MongoDB service đang chạy
- Hoặc sử dụng MongoDB Atlas (cloud)
- Cập nhật MONGODB_URI trong .env

### Lỗi port đã được sử dụng
- Thay đổi PORT trong .env (backend)
- Thay đổi port trong package.json (frontend)

### Lỗi CORS
- Kiểm tra FRONTEND_URL trong .env backend
- Kiểm tra REACT_APP_API_URL trong frontend/.env

### Warning messages khi cài đặt
- Các warning về deprecated packages là bình thường
- Không ảnh hưởng đến việc chạy ứng dụng
- Ứng dụng vẫn hoạt động hoàn hảo

### Lỗi "Unknown at rule @tailwind" trong VS Code
- Đã được khắc phục với cấu hình VS Code tự động
- Cài đặt extension "Tailwind CSS IntelliSense" được khuyến nghị
- File .vscode/settings.json đã được cấu hình để tắt CSS validation warnings

### Lỗi "Cannot find module"
- Chạy lại: npm run install-all
- Xóa node_modules và chạy lại cài đặt

## 📁 Cấu trúc dự án hoàn chỉnh

```
hotel-booking-app/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Room.js
│   │   ├── Booking.js
│   │   └── Review.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── rooms.js
│   │   └── bookings.js
│   ├── middleware/
│   │   └── auth.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.js
│   │   │   │   └── Footer.js
│   │   │   └── common/
│   │   │       ├── ProtectedRoute.js
│   │   │       └── LoadingSpinner.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Rooms.js
│   │   │   ├── RoomDetail.js
│   │   │   ├── Booking.js
│   │   │   ├── Profile.js
│   │   │   ├── MyBookings.js
│   │   │   └── Dashboard.js
│   │   ├── contexts/
│   │   │   └── AuthContext.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── public/
│   │   └── index.html
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
├── .env
├── .env.example
├── package.json
├── README.md
└── setup.md
```

## 🎯 Tính năng đã hoàn thành

✅ **Backend (100%)**
- Authentication với JWT
- User management với roles
- Room management với availability checking
- Booking system với overbooking prevention
- Statistics API cho dashboard
- Error handling và validation

✅ **Frontend (100%)**
- Responsive design với Tailwind CSS
- Authentication flow (Login/Register)
- Room browsing với filters
- Room detail với availability check
- Booking flow (3 steps)
- User profile management
- My bookings với cancel functionality
- Manager/Admin dashboard
- Luxury design system

✅ **Tính năng đặc biệt**
- Dynamic pricing calculation
- Payment mockup
- Real-time availability checking
- Role-based access control
- Mobile-first responsive design
- Professional error handling
- Loading states và animations

## 🚀 Sẵn sàng production

Ứng dụng đã sẵn sàng để:
- Deploy lên Heroku, Vercel, hoặc VPS
- Tích hợp payment gateway thật
- Thêm email notifications
- Thêm image upload
- Thêm review system
- Thêm real-time notifications

## 📞 Hỗ trợ

Nếu gặp vấn đề, hãy kiểm tra:
1. Node.js và npm đã cài đặt chưa
2. MongoDB đang chạy chưa
3. Các port 3000 và 5000 có bị chiếm không
4. File .env đã cấu hình đúng chưa