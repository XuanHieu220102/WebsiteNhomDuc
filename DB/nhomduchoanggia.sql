-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th5 19, 2024 lúc 11:27 AM
-- Phiên bản máy phục vụ: 8.0.17
-- Phiên bản PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `nhomduchoanggia`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `fullName` varchar(50) NOT NULL,
  `password` varchar(800) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  `username` varchar(50) NOT NULL,
  `birthdate` datetime(6) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `account`
--

INSERT INTO `account` (`id`, `address`, `email`, `fullName`, `password`, `phone_number`, `role`, `username`, `birthdate`, `gender`) VALUES
(4, ' Nam Dinh', 'xuanhieu0031@gmail.com', 'Dang Xuan Hieu', '$2a$10$kPbjLpZwgfUBjsJeiiLLdO4tdE8UW.AOw4dYXFLhBSxwGa0HhU1ge', '0858260715', 'User', 'xuanhieu1102', '2003-09-13 00:00:00.000000', 'Male'),
(6, 'Đà Nẵng', 'xuanhieu00343@gmail.com', 'Dang Xuan Hieu', '$2a$10$12bT80LBoXKXTGJTMyuMJelHSVotGFuC6DazMdApl6NGeejwsgHB6', '0858260788', 'User', 'xuanhieu1104', '2002-11-13 00:00:00.000000', 'Female'),
(8, 'Đà Nẵng', 'xuanhieu0131@gmail.com', 'Dang Xuan Hieu 1103', '$2a$10$mQsYAyTqHYBAoQE8KJLJa.spNIlyTy5EhDaTrcHZ4cs92K52RmrkK', '0853250714', 'Admin', 'bestnakrothnd2', '2012-05-08 00:00:00.000000', 'Male');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cast_aluminum`
--

CREATE TABLE `cast_aluminum` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` bigint(20) NOT NULL,
  `rating` int(11) NOT NULL DEFAULT '5',
  `votes` int(11) NOT NULL DEFAULT '1',
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `cast_aluminum`
--

INSERT INTO `cast_aluminum` (`id`, `image`, `name`, `price`, `rating`, `votes`, `category_id`) VALUES
(1, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/vhb123-300x300.jpg', 'Cổng nhôm đúc - 01', 1000000, 3, 4, 1),
(2, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/unnamed-300x300.png', 'Cổng nhôm đúc - 02', 2000000, 4, 9, 1),
(3, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/unnamed-300x300.jpg', 'Cổng nhôm đúc - 03', 10000000, 5, 1, 1),
(4, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/unnamed-2-300x300.jpg', 'Cổng nhôm đúc - 04', 7000000, 5, 1, 1),
(5, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/unnamed-1-300x300.jpg', 'Cổng nhôm đúc - 05', 7000000, 5, 1, 1),
(6, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/trong-dong-003-300x300.jpg', 'Cổng nhôm đúc - 06', 7000000, 5, 1, 1),
(7, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/z4505736907642_32c7cf62872195c060751fbc5e905346-300x300.jpg', 'Cầu thang nhôm đúc 1', 8000000, 5, 1, 6),
(9, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/unnamed-3-300x300.jpg', 'Cầu thang nhôm đúc 2', 1000000, 5, 1, 6),
(10, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/unnamed-2-1-300x300.jpg', 'Cầu thang nhôm đúc 3', 1000000, 5, 1, 6),
(11, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/unnamed-1-1-300x300.jpg', 'Cầu thang nhôm đúc 4', 1000000, 5, 1, 6),
(12, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/ct5-1072-300x300.png', 'Cầu thang nhôm đúc 5', 1000000, 5, 1, 6),
(13, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/ct3-5412-300x300.png', 'Cầu thang nhôm đúc 6', 1000000, 5, 1, 6),
(14, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/unnamed-3-300x300.jpg', 'Cầu thang nhôm đúc 7', 1000000, 5, 1, 6),
(15, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/cong_nhom_duc_380264745_121876544-300x300.jpg', 'Cầu thang nhôm đúc 8', 1000000, 5, 1, 6),
(16, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/cau-thang-nhom-duc-t17-2186-300x300.jpg', 'Cầu thang nhôm đúc 9', 1000000, 5, 1, 6),
(17, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/cau-thang-nhom-duc-nguyen-khoi-300x300.jpg', 'Cầu thang nhôm đúc 10', 1000000, 5, 1, 6),
(18, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/cau-thang-nhom-duc-ctn001-1820-300x300.jpg', 'Cầu thang nhôm đúc 11', 8000000, 5, 1, 6),
(19, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/cau-thang-nhom-duc-c018-300x300.jpg', 'Cầu thang nhôm đúc 12', 7000000, 5, 1, 6),
(20, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/cau_thang_nhom_duc_CT0016-min-300x300.jpg', 'Cầu thang nhôm đúc 13', 900000, 5, 1, 6),
(21, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/unnamed-5-300x300.jpg', 'Lan can nhôm đúc 1', 8000000, 5, 1, 3),
(22, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/mau-lan-can-nhom-duc-tinh-xao-300x300.jpg', 'Lan can nhôm đúc 2', 7000000, 5, 1, 3),
(23, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/mau-lan-can-nhom-duc-cap-nhat-bao-gia-300x300.jpg', 'Lan can nhôm đúc 3', 900000, 5, 1, 3),
(24, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/mau-lan-can-gang-3-300x300.jpg', 'Lan can nhôm đúc 4', 1000000, 5, 1, 3),
(25, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/lan-can-nhom-duc-sang-trong-phu-hop-voi-moi-cong-trinh-300x300.jpg', 'Lan can nhôm đúc 5', 1000000, 5, 1, 3),
(26, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/lan-can-nhom-duc-featue-300x300.jpg', 'Lan can nhôm đúc 6', 1000000, 5, 1, 3),
(27, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/lan-can-nhom-duc-chan-khong-1-9855-300x300.jpg', 'Lan can nhôm đúc 7', 1000000, 5, 1, 3),
(28, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/lan-can-nhom-duc-1-300x300.jpg', 'Lan can nhôm đúc 81', 1000000, 5, 1, 3),
(29, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/lan-can-ban-cong-nhom-duc-dep-2-300x300.jpg', 'Lan can nhôm đúc 13', 900000, 5, 1, 3),
(30, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/mau-lan-can-gang-3-300x300.jpg', 'Lan can nhôm đúc 11', 1000000, 5, 1, 3),
(31, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/lan-can-nhom-duc-sang-trong-phu-hop-voi-moi-cong-trinh-300x300.jpg', 'Lan can nhôm đúc 12', 1000000, 5, 1, 3),
(32, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/rao-3-300x300.jpg', 'Hàng rào 1', 8000000, 5, 1, 2),
(33, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/Hang-rao-nhom-duc-TP.17-scaled-1-300x300.jpg', 'Hàng rào 1 nhôm đúc 2', 7000000, 5, 1, 2),
(34, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/hang-rao-nhom-duc-feature-2-300x300.jpg', 'Hàng rào 1 nhôm đúc 3', 900000, 5, 1, 2),
(35, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/hang-rao-nhom-duc-dep-2-300x300.webp', 'Hàng rào nhôm đúc 4', 7000000, 5, 1, 2),
(36, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/hang_rao_nhom_duc_HR0008-300x300.jpg', 'Hàng rào nhôm đúc 5', 8000000, 5, 1, 2),
(37, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/hang_rao_nhom_duc_HR0004-1-300x300.jpg', 'Hàng rào nhôm đúc 5', 1000000, 5, 1, 2),
(38, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/h9-3631-300x300.png', 'Hàng rào nhôm đúc 5', 7000000, 5, 1, 2),
(39, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/h9-3631-300x300.png', 'Hàng rào nhôm đúc 5', 1000000, 5, 1, 2),
(40, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/h4-5852-300x300.png', 'Hàng rào nhôm đúc 5', 900000, 5, 1, 2),
(41, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/cong_nhom_duc_2086990864_780186890-scaled-300x300.jpg', 'Hàng rào nhôm đúc 5', 9000000, 5, 1, 2),
(42, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/cong_nhom_duc_1685225331_1604320390-300x300.jpeg', 'Hàng rào nhôm đúc 5', 1000000, 5, 1, 2),
(43, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/z3924514072503_d48c95e7f41bac6a34b7129b49f7fd96-300x300.jpg', 'Bàn ghế nhôm đúc 1', 8000000, 5, 1, 4),
(44, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/z2477988692827_82edc81c79768705c5c040bffd2d21f0-300x300.jpg', 'Bàn ghế nhôm đúc 2', 7000000, 5, 1, 4),
(45, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/san-pham-16-300x300.jpg', 'Bàn ghế nhôm đúc 3', 900000, 5, 1, 4),
(46, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/ghe-nhom-duc-nha-trang-noithatus-23-300x300.jpg', 'Bàn ghế nhôm đúc 4', 7000000, 5, 1, 4),
(47, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/bo-ban-ghe-nhom-duc-bgnd-04-3-300x300.jpg', 'Bàn ghế nhôm đúc 5', 8000000, 5, 1, 4),
(48, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/ban-ghe-nhom-duc-san-vuon-300x300.jpg', 'Bàn ghế nhôm đúc 6', 1000000, 5, 1, 4),
(49, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/ban-ghe-nhom-duc-san-vuon-300x300.jpg', 'Bàn ghế nhôm đúc7', 7000000, 5, 1, 4),
(50, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/ban-ghe-nhom-duc-ngoai-troi-1-27010-300x300.jpg', 'Bàn ghế nhôm đúc 8', 1000000, 5, 1, 4),
(51, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/ban-ghe-nhom-duc-8-ghe-ngoai-troi-300x300.jpg', 'Bàn ghế nhôm đúc 9', 900000, 5, 1, 4),
(52, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/ban-3-300x300.jpg', 'Bàn ghế nhôm đúc 10', 9000000, 5, 1, 4),
(53, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/1620015406_ban-ghe-nhom-duc-ba-mt04t-01-300x300.jpg', 'Bàn ghế nhôm đúc 11', 1000000, 5, 1, 4),
(55, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/img-50f4b4183c35199b7c2606f1b513cc4d-v-7367-300x300.jpg', ' BÔNG GIÓ NHÔM ĐÚC – 01', 2000000, 5, 1, 5),
(56, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/Bong-gio-web-300x300.jpg', ' BÔNG GIÓ NHÔM ĐÚC – 02', 2000000, 5, 1, 5),
(57, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/bong-gio-nhom-duc-b063-300x300.jpg', 'Bông gió nhôm đúc - 03', 2000000, 5, 1, 5),
(58, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/c1672674093-300x300.jpeg', 'Bông gió nhôm đúc -04', 2000000, 5, 1, 5),
(59, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/bong-gio-nhom-duc-feature-1-300x300.jpg', 'Bông gió nhôm đúc -05', 2000000, 5, 1, 5),
(60, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/bong_gio_nhom_duc_BG0012-min-300x300.jpg', 'Bông gió nhôm đúc - 06', 2000000, 5, 1, 5),
(61, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/bonggionhomducbh19-829-300x300.jpg', 'Bông gió nhôm đúc - 07', 2000000, 5, 1, 5),
(62, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/bong_gio_nhom_duc_BG0013-min-300x300.jpg', 'Bông gió nhôm đúc - 08', 2000000, 5, 1, 5),
(63, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/cau-thang-nhom-duc-t17-2186-300x300.jpg', 'Cầu thang nhôm đúc - 11 ', 6500000, 5, 1, 6),
(64, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/cau-thang-nhom-duc-nguyen-khoi-300x300.jpg', 'Cổng nhôm đúc - 012', 5500000, 5, 1, 6),
(65, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/09-300x300.jpg', 'Cầu thang nhôm đúc - 13', 8200000, 5, 1, 6),
(66, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/cau-thang-nhom-duc-ctn001-1820-300x300.jpg', 'Cầu thang nhôm đúc - 14', 9000000, 5, 1, 6),
(67, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/cong_nhom_duc_380264745_121876544-300x300.jpg', 'Cầu thang nhôm đúc - 15', 9500000, 5, 1, 6),
(68, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/unnamed-300x300.jpg', 'Cổng nhôm đúc - 09', 6500000, 5, 1, 1),
(69, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/unnamed-2-300x300.jpg', 'Cổng nhôm đúc - 11', 7000000, 5, 1, 1),
(70, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/trong-dong-003-300x300.jpg', 'Cổng nhôm đúc - 08', 5800000, 5, 1, 1),
(71, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/Cong-nhom-duc-qua-giong-bao-510x363-1-300x300.jpg', 'Cổng nhôm đúc - 06', 6900000, 5, 1, 1),
(72, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/cong-nhom-duc-chau-au-300x300.png', 'Cổng nhôm đúc - 07', 7000000, 4, 2, 1),
(73, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/cong-nhom-duc-4-canh-song-long-023-300x300.jpg', 'Cổng nhôm đúc - 08', 8200000, 5, 1, 1),
(74, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/rao-3-300x300.jpg', 'Hàng rào nhôm đúc', 3500000, 5, 1, 2),
(75, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/hang-rao-nhom-duc-dep-2-300x300.webp', 'Hàng rào nhôm đúch - 02', 4000000, 5, 1, 2),
(76, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/hang_rao_nhom_duc_HR0008-300x300.jpg', 'Hàng rào nhôm đúch - 04', 3500, 5, 1, 2),
(77, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/cong_nhom_duc_2086990864_780186890-scaled-300x300.jpg', 'Hàng rào nhôm đúc - 05', 2900000, 5, 1, 2),
(78, 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/cae90890b4ac74f22dbd-300x300.jpg', 'Hàng rào nhôm đúc - 07', 4500000, 5, 1, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `name`, `description`) VALUES
(1, 'Cổng nhôm đúc', 'Cổng nhôm đúc là một sản phẩm được đúc từ hợp kim nhôm nguyên chất bằng các biện pháp như đúc áp lực, đúc khuôn kim loại hoặc đúc bằng khuôn cát, thạch cao và các kỹ thuật đúc khác. Sản phẩm đã nhanh chóng thu hút được sự chú ý của người dùng từ khi ra mắ'),
(2, 'Hàng rào nhôm đúc', 'Công ty TNHH NHÔM ĐÚC Hoàng Gia chào đón quý khách hàng với sản phẩm Hàng rào nhôm đúc cao cấp. Sản phẩm được sản xuất từ nguyên liệu hợp kim nhôm đúc, giúp sản phẩm có độ bền cao và có tính nghệ thuật thẩm mỹ. Công ty cung cấp nhiều dòng sản phẩm với nhi'),
(3, 'Lan can nhôm đúc', 'Ban công là một phần kiến trúc của ngôi nhà, được nhô ra theo chiều ngang và nối liền với tường. Nó có thể có hình dạng phù hợp với kiến trúc của ngôi nhà, có thể trang trí với họa tiết cổ điển hoặc đơn giản. Chúng ta cung cấp sản phẩm bằng nhôm đúc với k'),
(4, 'Bàn ghế nhôm đúc', 'Bàn ghế nhôm đúc là một sự kết hợp hoàn hảo giữa tính thẩm mỹ và tính bền bỉ, tạo ra không gian ngoại thất đẹp mắt và chất lượng cho việc thư giãn và giải trí ngoài trời. Bàn ghế nhôm đúc không chỉ mang lại tính thẩm mỹ và chất lượng cho không gian ngoại '),
(5, 'Bông gió nhôm đúc', 'Bông gió nhôm đúc là một sản phẩm trang trí ngoại thất độc đáo và thú vị, thường được sử dụng để tạo điểm nhấn cho không gian sân vườn, ban công, hay hành lang. Bông gió nhôm đúc là một lựa chọn tuyệt vời để tạo điểm nhấn cho không gian ngoại thất của bạn'),
(6, 'Cầu thang nhôm đúc', 'Hoàng Gia là một nhà cung cấp sản phẩm cầu thang nhôm đúc có chất lượng hàng đầu. Họ cung cấp một loạt các mẫu cầu thang nhôm đúc có thiết kế đa dạng, từ cổ điển đến hiện đại. Quy trình sản xuất của họ được giám sát chặt chẽ và sử dụng các công nghệ hiện ');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `favorite_product`
--

CREATE TABLE `favorite_product` (
  `love_product_id` int(11) NOT NULL,
  `account_id` int(11) NOT NULL,
  `cast_aluminum_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `favorite_product`
--

INSERT INTO `favorite_product` (`love_product_id`, `account_id`, `cast_aluminum_id`) VALUES
(10051, 6, 44),
(10052, 6, 4),
(10101, 6, 7),
(10151, 8, 1),
(10201, 8, 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `favorite_product_id_seq`
--

CREATE TABLE `favorite_product_id_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `favorite_product_id_seq`
--

INSERT INTO `favorite_product_id_seq` (`next_val`) VALUES
(10300);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `creation_date` datetime(6) NOT NULL,
  `account_id` int(11) NOT NULL,
  `cast_aluminum_id` int(11) NOT NULL,
  `fee_ship` int(11) DEFAULT NULL,
  `specificAddress` varchar(1000) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `total_amount` int(11) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`order_id`, `creation_date`, `account_id`, `cast_aluminum_id`, `fee_ship`, `specificAddress`, `quantity`, `total_amount`, `note`) VALUES
(10001, '2024-04-15 04:22:50.721722', 4, 1, 40000, 'Xuan Truong, Nam Dinh', 5, 50000000, NULL),
(10052, '2024-04-26 03:53:05.513448', 6, 44, 100000, 'xom 3, xuan dai, xuan truong, nam d', 2, 14100000, 'sau chua kim sa'),
(10054, '2024-04-26 09:12:10.671855', 6, 2, 50000, 'ádas', 1, 2050000, 'ádasd'),
(10101, '2024-04-26 12:53:07.386589', 6, 11, 50000, 'asfnlaksfa', 1, 1050000, 'asdasd'),
(10104, '2024-04-26 15:00:29.762154', 6, 9, 50000, 'sfhalkhafsf', 1, 1050000, 'asdasdasd'),
(10105, '2024-04-26 15:36:55.213940', 6, 9, 50000, 'aasdasd', 1, 1050000, 'asdasd'),
(10106, '2024-04-26 15:39:17.793319', 6, 3, 50000, 'xuan tuong, nam dinh', 1, 10050000, 'khong co'),
(10107, '2024-04-26 15:42:41.004397', 6, 23, 50000, 'nam dnh, quat kam', 1, 950000, 'khong cos'),
(10108, '2024-04-26 15:45:55.751500', 6, 2, 50000, 'dasdasd', 1, 2050000, 'asasdads'),
(10151, '2024-04-27 10:29:03.684488', 6, 9, 150000, 'sdasdaskda;sd', 3, 3150000, 'das;ldma;d'),
(10251, '2024-05-10 08:15:57.058673', 8, 2, 50000, 'xom 3, xuan dai, xuan truong', 1, 2050000, 'khong co'),
(10301, '2024-05-11 02:20:04.210685', 8, 23, 50000, 'xom 3. xuan dai, xuan truong, nam dinh', 1, 950000, 'khoong'),
(10351, '2024-05-13 16:33:21.301932', 8, 1, 50000, 'asfasfa', 1, 1050000, 'asdasdasd'),
(10401, '2024-05-18 04:29:29.537660', 8, 1, 50000, 'fawdasda', 1, 1050000, 'asasasas'),
(10451, '2024-05-18 11:39:05.316239', 8, 1, 50000, 'dfsfsdf', 1, 1050000, 'asasdads');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_id_seq`
--

CREATE TABLE `order_id_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `order_id_seq`
--

INSERT INTO `order_id_seq` (`next_val`) VALUES
(10550);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_cs5bnaggwuluahrdh8mbs1rpe` (`email`),
  ADD UNIQUE KEY `UK_ic17dv8l4rx597s67cwfmliyd` (`phone_number`),
  ADD UNIQUE KEY `UK_de34gsw4qt8auhffbna969ahp` (`username`);

--
-- Chỉ mục cho bảng `cast_aluminum`
--
ALTER TABLE `cast_aluminum`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKa6reqrk4e7dmw9ar8q7dh1yci` (`category_id`);

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `favorite_product`
--
ALTER TABLE `favorite_product`
  ADD PRIMARY KEY (`love_product_id`),
  ADD KEY `FKmm0r6oio9l032w1c01lbqd1kv` (`cast_aluminum_id`),
  ADD KEY `FKomredm98n9hlsvxib0a5t7egm` (`account_id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `FK8drw0h1t8e5mgg1raf8d7ikat` (`account_id`),
  ADD KEY `FKe75283e4vsmguxrodn1vhd22c` (`cast_aluminum_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `cast_aluminum`
--
ALTER TABLE `cast_aluminum`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `cast_aluminum`
--
ALTER TABLE `cast_aluminum`
  ADD CONSTRAINT `FKa6reqrk4e7dmw9ar8q7dh1yci` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);

--
-- Các ràng buộc cho bảng `favorite_product`
--
ALTER TABLE `favorite_product`
  ADD CONSTRAINT `FKmm0r6oio9l032w1c01lbqd1kv` FOREIGN KEY (`cast_aluminum_id`) REFERENCES `cast_aluminum` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FKomredm98n9hlsvxib0a5t7egm` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `FK8drw0h1t8e5mgg1raf8d7ikat` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FKe75283e4vsmguxrodn1vhd22c` FOREIGN KEY (`cast_aluminum_id`) REFERENCES `cast_aluminum` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
