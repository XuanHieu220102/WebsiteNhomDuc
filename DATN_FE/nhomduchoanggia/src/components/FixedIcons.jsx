import React, { useState, useEffect } from 'react';
import { FiPhone, FiMessageSquare } from 'react-icons/fi'; // Import icons từ thư viện react-icons

const FixedIcons = () => {
  const [blink, setBlink] = useState(true);
  const handlePhoneClick = () => {
    window.location.href = 'tel:+84858250715'; // Thay số điện thoại bằng số điện thoại thực tế của bạn
  };

  const handleZaloClick = () => {
    window.location.href = 'https://zalo.me/'; // Thay URL bằng URL thực tế của ứng dụng Zalo
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setBlink(prevBlink => !prevBlink);
    }, 1000); // Thay đổi mỗi 500ms

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={styles.container}>
      <div style={{ ...styles.icon, transform: blink ? 'scale(1.1)' : 'scale(1)' }} onClick={handlePhoneClick}>
        <FiPhone size={28} color="white" />
      </div>
      <div style={{ ...styles.zaloIcon,...styles.icon, marginTop: '15px', transform: blink ? 'scale(1.1)' : 'scale(1)' }} onClick={handleZaloClick}>
        <FiMessageSquare size={28} color="white" />
      </div>
    </div>
  );
};

const styles = {
    container: {
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      zIndex: 9999, // Đảm bảo hiển thị trên các thành phần khác
      display: 'flex',
      flexDirection:'column'
    },
    icon: {
      backgroundColor: '#DD3737', // Màu nền của biểu tượng
      borderRadius: '50%', // Bo tròn biểu tượng
      width: '50px',
      height: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Đổ bóng
      transition: 'transform 0.2s ease-in-out', // Hiệu ứng scale
    },
    zaloIcon: {
        backgroundColor:'blue'
    }
  };

export default FixedIcons;
