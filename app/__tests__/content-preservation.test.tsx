/**
 * Content Preservation Verification Tests
 * Requirements: 7.1, 7.2, 7.3, 7.4
 * 
 * This test suite verifies that all Vietnamese content, dates, locations,
 * section structure, and links are preserved correctly after UI updates.
 */

import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Content Preservation - Requirements 7.1, 7.2, 7.3, 7.4', () => {
  
  describe('7.1 - Vietnamese Content Preservation', () => {
    it('should preserve hero section Vietnamese text', () => {
      render(<Home />);
      expect(screen.getByText('Thân mời')).toBeInTheDocument();
      expect(screen.getByText('ĐẾN DỰ LỄ CƯỚI CỦA CHÚNG MÌNH')).toBeInTheDocument();
    });

    it('should preserve couple names in Vietnamese', () => {
      render(<Home />);
      expect(screen.getByText('Đình Phương')).toBeInTheDocument();
      expect(screen.getByText('Phương Hiền')).toBeInTheDocument();
    });

    it('should preserve parent names in Vietnamese', () => {
      render(<Home />);
      expect(screen.getByText(/Trịnh Đình Bình/)).toBeInTheDocument();
      expect(screen.getByText(/Đinh Thị Thơm/)).toBeInTheDocument();
      expect(screen.getByText(/Trần Phú/)).toBeInTheDocument();
      expect(screen.getByText(/Đỗ Thanh Liêm/)).toBeInTheDocument();
    });

    it('should preserve event titles in Vietnamese', () => {
      render(<Home />);
      expect(screen.getByText('LỄ VU QUY')).toBeInTheDocument();
      expect(screen.getByText('LỄ TÂN HÔN')).toBeInTheDocument();
    });

    it('should preserve love story titles in Vietnamese', () => {
      render(<Home />);
      // Love story titles appear twice (desktop and mobile views)
      expect(screen.getAllByText('Lần Đầu Gặp Gỡ').length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText('Ngày Kỷ Niệm').length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText('Lời Cầu Hôn').length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText('Đám Cưới').length).toBeGreaterThanOrEqual(1);
    });

    it('should preserve countdown labels in Vietnamese', () => {
      render(<Home />);
      expect(screen.getByText('Đếm Ngược Đến Ngày Trọng Đại')).toBeInTheDocument();
      expect(screen.getByText('Ngày')).toBeInTheDocument();
      expect(screen.getByText('Giờ')).toBeInTheDocument();
      expect(screen.getByText('Phút')).toBeInTheDocument();
      expect(screen.getByText('Giây')).toBeInTheDocument();
    });

    it('should preserve bank section Vietnamese text', () => {
      render(<Home />);
      expect(screen.getByText('Mừng Cưới')).toBeInTheDocument();
      expect(screen.getByText(/Thay lời cảm ơn sâu sắc/)).toBeInTheDocument();
      expect(screen.getByText('Chú Rể')).toBeInTheDocument();
      expect(screen.getByText('Cô Dâu')).toBeInTheDocument();
    });

    it('should preserve footer Vietnamese text', () => {
      render(<Home />);
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Sự hiện diện của quý khách');
    });
  });

  describe('7.2 - Date, Time, and Location Information Preservation', () => {
    it('should preserve Vu Quy event date and time', () => {
      render(<Home />);
      expect(screen.getByText('VÀO LÚC 11 GIỜ 45 PHÚT')).toBeInTheDocument();
      expect(screen.getByText(/17 tháng 2 năm Bính Ngọ âm lịch/)).toBeInTheDocument();
    });

    it('should preserve Tan Hon event date and time', () => {
      render(<Home />);
      expect(screen.getByText('VÀO LÚC 11 GIỜ 00 PHÚT')).toBeInTheDocument();
      expect(screen.getByText(/20 tháng 2 năm Bính Ngọ âm lịch/)).toBeInTheDocument();
    });

    it('should preserve Vu Quy location', () => {
      render(<Home />);
      expect(screen.getByText(/56 Phạm Phú Thứ, Vĩnh Điện, Quảng Nam/)).toBeInTheDocument();
    });

    it('should preserve Tan Hon location', () => {
      render(<Home />);
      expect(screen.getByText(/3 Thị trấn Chư Ty, Đức Cơ, Gia Lai/)).toBeInTheDocument();
    });

    it('should preserve venue name', () => {
      render(<Home />);
      const venueElements = screen.getAllByText(/GRAND PALACE/);
      expect(venueElements.length).toBeGreaterThanOrEqual(2); // Should appear for both events
    });

    it('should preserve love story dates', () => {
      render(<Home />);
      // Love story dates appear twice (desktop and mobile views)
      expect(screen.getAllByText('Mùa Thu 2020').length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText('14/02/2021').length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText('Hè 2024').length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText('04/04/2026').length).toBeGreaterThanOrEqual(1);
    });

    it('should preserve bank account information', () => {
      render(<Home />);
      expect(screen.getByText('Trịnh Đình Phương')).toBeInTheDocument();
      expect(screen.getByText('Trần Đỗ Phương Hiền')).toBeInTheDocument();
      expect(screen.getAllByText('Techcombank').length).toBe(2);
      expect(screen.getAllByText(/Hải Châu Đà Nẵng/).length).toBe(2);
      expect(screen.getAllByText('9386592529').length).toBe(2);
    });
  });

  describe('7.3 - Section Structure Preservation', () => {
    it('should have Hero section', () => {
      render(<Home />);
      const heroSection = screen.getByText('Thân mời').closest('section');
      expect(heroSection).toBeInTheDocument();
    });

    it('should have Photo Gallery section', () => {
      render(<Home />);
      const galleryImages = screen.getAllByAltText(/Ảnh cưới/);
      expect(galleryImages.length).toBe(8);
    });

    it('should have Wedding Events section', () => {
      render(<Home />);
      const eventsSection = screen.getByText('LỄ VU QUY').closest('section');
      expect(eventsSection).toBeInTheDocument();
    });

    it('should have Couple Introduction section', () => {
      render(<Home />);
      expect(screen.getByText('Chúng Mình Là')).toBeInTheDocument();
      expect(screen.getByAltText('Chú rể')).toBeInTheDocument();
      expect(screen.getByAltText('Cô dâu')).toBeInTheDocument();
    });

    it('should have Love Story section', () => {
      render(<Home />);
      expect(screen.getByText('Câu Chuyện Của Chúng Mình')).toBeInTheDocument();
    });

    it('should have Countdown section', () => {
      render(<Home />);
      expect(screen.getByText('Đếm Ngược Đến Ngày Trọng Đại')).toBeInTheDocument();
    });

    it('should have Bank Account section', () => {
      render(<Home />);
      expect(screen.getByText('Mừng Cưới')).toBeInTheDocument();
      expect(screen.getByAltText('QR chuyển khoản chú rể')).toBeInTheDocument();
      expect(screen.getByAltText('QR chuyển khoản cô dâu')).toBeInTheDocument();
    });

    it('should have Footer section', () => {
      render(<Home />);
      const footer = screen.getByText('Thank You').closest('footer');
      expect(footer).toBeInTheDocument();
    });

    it('should have Scroll to Top button', () => {
      render(<Home />);
      const scrollButton = screen.getByLabelText('Scroll to top');
      expect(scrollButton).toBeInTheDocument();
    });
  });

  describe('7.4 - Links and Functionality Preservation', () => {
    it('should preserve Google Maps links for Vu Quy venue', () => {
      render(<Home />);
      const vuQuyLink = screen.getAllByText('CHỈ ĐƯỜNG')[0];
      expect(vuQuyLink.closest('a')).toHaveAttribute('href', 'https://maps.app.goo.gl/GrandPalaceQuangNam');
      expect(vuQuyLink.closest('a')).toHaveAttribute('target', '_blank');
      expect(vuQuyLink.closest('a')).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('should preserve Google Maps links for Tan Hon venue', () => {
      render(<Home />);
      const tanHonLink = screen.getAllByText('CHỈ ĐƯỜNG')[1];
      expect(tanHonLink.closest('a')).toHaveAttribute('href', 'https://maps.app.goo.gl/GrandPalaceGiaLai');
      expect(tanHonLink.closest('a')).toHaveAttribute('target', '_blank');
      expect(tanHonLink.closest('a')).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('should preserve social media links in footer', () => {
      render(<Home />);
      const footer = screen.getByText('Thank You').closest('footer');
      const socialLinks = footer?.querySelectorAll('a[href="#"]');
      expect(socialLinks?.length).toBeGreaterThanOrEqual(2); // Facebook and Instagram
    });

    it('should preserve scroll to top button functionality', () => {
      render(<Home />);
      const scrollButton = screen.getByLabelText('Scroll to top');
      expect(scrollButton).toHaveAttribute('aria-label', 'Scroll to top');
      expect(scrollButton.tagName).toBe('BUTTON');
    });

    it('should preserve countdown timer functionality', () => {
      render(<Home />);
      // Check that countdown elements exist with IDs for JavaScript to target
      const daysElement = document.getElementById('days');
      const hoursElement = document.getElementById('hours');
      const minutesElement = document.getElementById('minutes');
      const secondsElement = document.getElementById('seconds');
      
      expect(daysElement).toBeInTheDocument();
      expect(hoursElement).toBeInTheDocument();
      expect(minutesElement).toBeInTheDocument();
      expect(secondsElement).toBeInTheDocument();
    });
  });

  describe('Additional Content Integrity Checks', () => {
    it('should preserve role labels', () => {
      render(<Home />);
      expect(screen.getByText('The Groom')).toBeInTheDocument();
      expect(screen.getByText('The Bride')).toBeInTheDocument();
    });

    it('should preserve love story content', () => {
      render(<Home />);
      // Check for specific love story text snippets
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Chúng mình gặp nhau lần đầu');
      expect(bodyText).toContain('Ngày Valentine');
      expect(bodyText).toContain('Dưới ánh hoàng hôn');
      expect(bodyText).toContain('chính thức trở thành vợ chồng');
    });

    it('should preserve bank account labels', () => {
      render(<Home />);
      const bodyText = document.body.textContent || '';
      // Count occurrences of bank labels (should appear twice - once for groom, once for bride)
      const nganHangCount = (bodyText.match(/Ngân hàng:/g) || []).length;
      const chiNhanhCount = (bodyText.match(/Chi nhánh:/g) || []).length;
      const soTaiKhoanCount = (bodyText.match(/Số tài khoản:/g) || []).length;
      const chuTaiKhoanCount = (bodyText.match(/Chủ tài khoản:/g) || []).length;
      
      expect(nganHangCount).toBe(2);
      expect(chiNhanhCount).toBe(2);
      expect(soTaiKhoanCount).toBe(2);
      expect(chuTaiKhoanCount).toBe(2);
    });

    it('should preserve QR code instructions', () => {
      render(<Home />);
      const qrInstructions = screen.getAllByText('Quét mã QR để chuyển khoản');
      expect(qrInstructions.length).toBe(2);
    });

    it('should preserve copyright text', () => {
      render(<Home />);
      expect(screen.getByText(/© 2026 Phương Hiền & Đình Phương/)).toBeInTheDocument();
    });
  });
});
