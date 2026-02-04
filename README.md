# Hotel Booking Web Application

Ứng dụng đặt phòng khách sạn trực tuyến được xây dựng với React.js, Node.js/Express, và MongoDB.

## 🚀 Tính năng chính

### 🔐 Hệ thống xác thực
- Đăng ký/Đăng nhập với JWT
- Phân quyền người dùng (Customer, Manager, Admin)
- Bảo mật mật khẩu với bcrypt

### 🏨 Quản lý phòng
- Hiển thị danh sách phòng với bộ lọc
- Chi tiết phòng với hình ảnh và tiện nghi
- Kiểm tra tình trạng phòng trống
- Quản lý trạng thái phòng (Available, Booked, Cleaning, Maintenance)

### 📅 Hệ thống đặt phòng
- Đặt phòng với kiểm tra availability
- Tính toán giá động theo số đêm
- Quản lý thông tin khách hàng
- Theo dõi trạng thái đặt phòng

### 💳 Thanh toán
- Mockup thanh toán qua thẻ tín dụng
- Quản lý trạng thái thanh toán
- Tính toán thuế và phí dịch vụ

### 📊 Dashboard quản lý
- Thống kê doanh thu
- Tỷ lệ lấp đầy phòng
- Quản lý đặt phòng
- Báo cáo theo thời gian

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing

### Frontend
- **React.js** - UI framework
- **Tailwind CSS** - Styling
- **React Query** - Data fetching
- **React Router** - Navigation
- **React Hook Form** - Form handling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 🎨 Design System

### Bảng màu sang trọng
- **Primary**: Midnight Blue (#0B1C2D)
- **Accent**: Gold Champagne (#C9A14A)
- **Neutral**: Ivory White (#F8F6F2), Warm Gray (#8A8A8A)
- **Success**: Emerald Green (#1E7F5C)
- **Error**: Burgundy Red (#8B1E3F)

### Typography
- **Heading**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## 📁 Cấu trúc dự án

```
hotel-booking-app/
├── backend/
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   ├── middleware/      # Authentication middleware
│   └── server.js        # Express server
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── contexts/    # React contexts
│   │   ├── services/    # API services
│   │   └── App.js       # Main app component
│   └── public/          # Static files
└── README.md
```

## 🚀 Cài đặt và chạy dự án

### Yêu cầu hệ thống
- Node.js (v16 trở lên)
- MongoDB
- npm hoặc yarn

### 1. Clone repository
```bash
git clone <repository-url>
cd hotel-booking-app
```

### 2. Cài đặt dependencies
```bash
# Cài đặt backend dependencies
npm install

# Cài đặt frontend dependencies
cd frontend
npm install
cd ..
```

### 3. Cấu hình environment variables
```bash
# Tạo file .env từ .env.example
cp .env.example .env

# Chỉnh sửa các biến môi trường trong .env
```

### 4. Khởi động MongoDB
```bash
# Khởi động MongoDB service
mongod
```

### 5. Chạy ứng dụng

#### Development mode (chạy cả backend và frontend)
```bash
npm run dev
```

#### Hoặc chạy riêng biệt

**Backend:**
```bash
npm run server
```

**Frontend:**
```bash
npm run client
```

### 6. Truy cập ứng dụng
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Health check: http://localhost:5000/health

## 📋 API Endpoints

### Authentication
- `POST /api/auth/register` - Đăng ký
- `POST /api/auth/login` - Đăng nhập
- `GET /api/auth/me` - Lấy thông tin user
- `PUT /api/auth/profile` - Cập nhật profile
- `PUT /api/auth/change-password` - Đổi mật khẩu

### Rooms
- `GET /api/rooms` - Lấy danh sách phòng
- `GET /api/rooms/:id` - Lấy chi tiết phòng
- `POST /api/rooms/:id/check-availability` - Kiểm tra phòng trống
- `POST /api/rooms` - Tạo phòng mới (Manager/Admin)
- `PUT /api/rooms/:id` - Cập nhật phòng (Manager/Admin)
- `PUT /api/rooms/:id/status` - Cập nhật trạng thái phòng (Manager/Admin)

### Bookings
- `POST /api/bookings` - Tạo đặt phòng
- `GET /api/bookings` - Lấy danh sách đặt phòng
- `GET /api/bookings/:id` - Lấy chi tiết đặt phòng
- `PUT /api/bookings/:id/status` - Cập nhật trạng thái đặt phòng
- `PUT /api/bookings/:id/payment` - Cập nhật trạng thái thanh toán
- `GET /api/bookings/stats/dashboard` - Thống kê dashboard (Manager/Admin)

## 🔒 Bảo mật

- JWT tokens cho authentication
- Bcrypt cho hash passwords
- Input validation với express-validator
- CORS protection
- Rate limiting (có thể thêm)
- Helmet.js cho security headers (có thể thêm)

## 📱 Responsive Design

Ứng dụng được thiết kế responsive hoàn toàn:
- **Mobile First**: Tối ưu cho thiết bị di động
- **Tablet**: Layout 2 cột
- **Desktop**: Layout 3-4 cột với sidebar

## 🎯 Tính năng đặc biệt

### Hệ thống tính giá động
- Tự động tính tổng tiền dựa trên số đêm
- Áp dụng thuế và phí dịch vụ
- Hiển thị breakdown chi tiết

### Kiểm tra Availability
- Ngăn chặn overbooking
- Kiểm tra conflict với booking hiện tại
- Real-time availability check

### Payment Mockup
- Giả lập quy trình thanh toán
- Nhiều phương thức thanh toán
- Tracking trạng thái thanh toán

## 🚀 Deployment

### Production Build
```bash
# Build frontend
cd frontend
npm run build

# Serve static files từ backend
# Cấu hình Express để serve build folder
```

### Environment Variables cho Production
```env
NODE_ENV=production
MONGODB_URI=mongodb://your-production-db
JWT_SECRET=your-super-secret-key
FRONTEND_URL=https://your-domain.com
```

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Liên hệ

- Email: info@luxuryhotel.com
- Phone: +84 123 456 789
- Website: https://luxuryhotel.com

## 🙏 Acknowledgments

- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Unsplash](https://unsplash.com/) for images