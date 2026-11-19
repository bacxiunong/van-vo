// Dữ liệu các trường phái — nội dung tự viết, tóm tắt để tìm hiểu, không trích nguyên văn sách.
// batDau: năm xuất hiện tương đối (số âm = trước Công nguyên).
window.TRUONG_PHAI = [
  {
    id: 'nho-gia', ten: 'Nho gia', tenGoc: 'Confucianism · 儒家', khuVuc: 'Đông', thoiKy: 'Cổ đại', batDau: -500,
    cauHoi: 'Làm sao sống tử tế trong các mối quan hệ và giữ cho xã hội hài hoà?',
    yChinh: [
      'Nhân: lòng thương người là gốc của mọi đức tính.',
      'Lễ: chuẩn mực ứng xử giúp mỗi người biết vị trí và bổn phận của mình.',
      'Tu thân trước, rồi mới lo được cho gia đình và việc chung.',
    ],
    daiDien: ['Khổng Tử', 'Mạnh Tử', 'Tuân Tử'], tuKhoa: ['đạo đức', 'quan hệ', 'xã hội', 'bổn phận'],
  },
  {
    id: 'dao-gia', ten: 'Đạo gia', tenGoc: 'Taoism · 道家', khuVuc: 'Đông', thoiKy: 'Cổ đại', batDau: -400,
    cauHoi: 'Sống thuận theo tự nhiên nghĩa là gì?',
    yChinh: [
      'Đạo là nguồn gốc của vạn vật, không thể gói gọn bằng tên gọi.',
      'Vô vi: không cưỡng ép, để mọi việc vận hành theo lẽ của nó.',
      'Mềm mỏng, giản dị và biết đủ thường bền hơn cứng rắn.',
    ],
    daiDien: ['Lão Tử', 'Trang Tử'], tuKhoa: ['tự nhiên', 'buông bỏ', 'giản dị', 'vô vi'],
  },
  {
    id: 'phat-giao', ten: 'Phật giáo', tenGoc: 'Buddhism', khuVuc: 'Đông', thoiKy: 'Cổ đại', batDau: -500,
    cauHoi: 'Khổ đau từ đâu mà có và làm sao để thoát khỏi nó?',
    yChinh: [
      'Tứ diệu đế: có khổ, khổ có nguyên nhân, khổ có thể chấm dứt, và có con đường để chấm dứt.',
      'Vô thường và vô ngã: mọi thứ đổi thay, không có cái tôi cố định để bám víu.',
      'Trung đạo: tránh cả buông thả lẫn ép xác, rèn giới – định – tuệ.',
    ],
    daiDien: ['Tất-đạt-đa Cồ-đàm', 'Long Thọ'], tuKhoa: ['khổ', 'vô thường', 'tâm', 'giải thoát'],
  },
  {
    id: 'khac-ky', ten: 'Khắc kỷ', tenGoc: 'Stoicism', khuVuc: 'Tây', thoiKy: 'Cổ đại', batDau: -300,
    cauHoi: 'Làm sao giữ được bình thản trước những điều nằm ngoài tầm tay?',
    yChinh: [
      'Tách rõ việc mình kiểm soát được (suy nghĩ, hành động) và việc không kiểm soát được.',
      'Đức hạnh là điều tốt duy nhất; tiền bạc, danh tiếng chỉ là thứ "không quan trọng" về đạo đức.',
      'Phiền muộn chủ yếu đến từ cách ta phán đoán sự việc, không phải từ bản thân sự việc.',
    ],
    daiDien: ['Zeno xứ Citium', 'Seneca', 'Epictetus', 'Marcus Aurelius'], tuKhoa: ['bình thản', 'kiểm soát', 'đức hạnh', 'kỷ luật'],
  },
  {
    id: 'epicurus', ten: 'Trường phái Epicurus', tenGoc: 'Epicureanism', khuVuc: 'Tây', thoiKy: 'Cổ đại', batDau: -307,
    cauHoi: 'Hạnh phúc thật sự là gì?',
    yChinh: [
      'Hạnh phúc là thân không đau, tâm không âu lo — không phải là hưởng thụ vô độ.',
      'Thú vui giản dị và tình bạn đáng giá hơn của cải, quyền lực.',
      'Không cần sợ cái chết: khi ta còn thì nó chưa đến, khi nó đến thì ta không còn.',
    ],
    daiDien: ['Epicurus', 'Lucretius'], tuKhoa: ['hạnh phúc', 'giản dị', 'tình bạn', 'cái chết'],
  },
  {
    id: 'hoai-nghi', ten: 'Hoài nghi', tenGoc: 'Pyrrhonism', khuVuc: 'Tây', thoiKy: 'Cổ đại', batDau: -300,
    cauHoi: 'Có điều gì ta thật sự biết chắc không?',
    yChinh: [
      'Với mỗi lập luận gần như luôn có một lập luận khác ngang sức.',
      'Vì vậy nên tạm ngưng phán xét những điều không thể kiểm chứng.',
      'Thôi khăng khăng về đúng sai tuyệt đối giúp tâm được yên.',
    ],
    daiDien: ['Pyrrho', 'Sextus Empiricus'], tuKhoa: ['nghi ngờ', 'tri thức', 'khiêm tốn'],
  },
  {
    id: 'thien-tong', ten: 'Thiền tông', tenGoc: 'Zen · 禪', khuVuc: 'Đông', thoiKy: 'Trung đại', batDau: 520,
    cauHoi: 'Có thể hiểu ra bản chất của tâm mà không cần qua chữ nghĩa?',
    yChinh: [
      'Chứng ngộ đến từ trải nghiệm trực tiếp, không chỉ từ kinh sách.',
      'Ngồi thiền và tỉnh thức ngay trong việc thường ngày: ăn, đi, làm việc.',
      'Thiền Trúc Lâm ở Việt Nam đề cao việc sống giữa đời mà lòng vẫn an.',
    ],
    daiDien: ['Bồ-đề-đạt-ma', 'Huệ Năng', 'Trần Nhân Tông'], tuKhoa: ['tỉnh thức', 'trực giác', 'hiện tại', 'tâm'],
  },
  {
    id: 'kinh-vien', ten: 'Kinh viện', tenGoc: 'Scholasticism', khuVuc: 'Tây', thoiKy: 'Trung đại', batDau: 1100,
    cauHoi: 'Đức tin và lý trí có thể đi cùng nhau không?',
    yChinh: [
      'Dùng lập luận chặt chẽ để giải thích và bảo vệ niềm tin tôn giáo.',
      'Kết hợp triết học Hy Lạp (nhất là Aristotle) với thần học.',
      'Phương pháp tranh luận: nêu phản bác, rồi lần lượt giải đáp.',
    ],
    daiDien: ['Anselm', 'Thomas Aquinas'], tuKhoa: ['đức tin', 'lý trí', 'lập luận'],
  },
  {
    id: 'duy-ly', ten: 'Duy lý', tenGoc: 'Rationalism', khuVuc: 'Tây', thoiKy: 'Cận đại', batDau: 1637,
    cauHoi: 'Tri thức chắc chắn bắt nguồn từ đâu?',
    yChinh: [
      'Lý trí, chứ không phải giác quan, là nguồn tri thức đáng tin nhất.',
      'Con người có sẵn một số ý niệm bẩm sinh.',
      'Toán học là hình mẫu: đi từ điều hiển nhiên đến kết luận chặt chẽ.',
    ],
    daiDien: ['René Descartes', 'Baruch Spinoza', 'Gottfried Leibniz'], tuKhoa: ['lý trí', 'tri thức', 'toán học'],
  },
  {
    id: 'kinh-nghiem', ten: 'Kinh nghiệm', tenGoc: 'Empiricism', khuVuc: 'Tây', thoiKy: 'Cận đại', batDau: 1690,
    cauHoi: 'Ngoài những gì đã trải nghiệm, ta có thể biết gì?',
    yChinh: [
      'Tâm trí lúc đầu như tờ giấy trắng; mọi ý niệm đến từ giác quan.',
      'Thói quen khiến ta tin vào quan hệ nhân quả, dù ta không trực tiếp thấy nó.',
      'Nên hoài nghi những khẳng định không thể kiểm chứng bằng trải nghiệm.',
    ],
    daiDien: ['John Locke', 'George Berkeley', 'David Hume'], tuKhoa: ['giác quan', 'trải nghiệm', 'nhân quả'],
  },
  {
    id: 'thuc-dung', ten: 'Thực dụng', tenGoc: 'Pragmatism', khuVuc: 'Tây', thoiKy: 'Hiện đại', batDau: 1870,
    cauHoi: 'Một ý tưởng có nghĩa gì nếu nó không tạo ra khác biệt nào trong thực tế?',
    yChinh: [
      'Đánh giá ý tưởng qua hệ quả thực tế của nó.',
      'Chân lý gắn với thực hành và có thể được điều chỉnh khi có bằng chứng mới.',
      'Tư duy là công cụ để giải quyết vấn đề của cuộc sống.',
    ],
    daiDien: ['Charles S. Peirce', 'William James', 'John Dewey'], tuKhoa: ['hệ quả', 'thực hành', 'giải quyết vấn đề'],
  },
  {
    id: 'hu-vo', ten: 'Hư vô', tenGoc: 'Nihilism', khuVuc: 'Tây', thoiKy: 'Hiện đại', batDau: 1880,
    cauHoi: 'Nếu cuộc sống không có ý nghĩa định sẵn thì sao?',
    yChinh: [
      'Các giá trị truyền thống mất dần chỗ dựa vững chắc.',
      'Nietzsche coi đó là khủng hoảng, đồng thời là cơ hội để tự tạo giá trị mới.',
      'Thường được xem là điểm xuất phát để suy nghĩ tiếp, hơn là điểm dừng.',
    ],
    daiDien: ['Friedrich Nietzsche', 'Ivan Turgenev (đưa khái niệm vào văn học)'], tuKhoa: ['ý nghĩa', 'giá trị', 'khủng hoảng'],
  },
  {
    id: 'hien-sinh', ten: 'Hiện sinh', tenGoc: 'Existentialism', khuVuc: 'Tây', thoiKy: 'Hiện đại', batDau: 1940,
    cauHoi: 'Ta là ai khi không có bản chất nào được định sẵn?',
    yChinh: [
      'Hiện hữu có trước bản chất: ta tồn tại trước, rồi tự định nghĩa mình bằng lựa chọn.',
      'Tự do luôn đi kèm trách nhiệm và cả nỗi lo âu.',
      'Sống chân thực: không đổ lỗi cho hoàn cảnh hay vai trò xã hội.',
    ],
    daiDien: ['Søren Kierkegaard', 'Jean-Paul Sartre', 'Simone de Beauvoir'], tuKhoa: ['tự do', 'lựa chọn', 'trách nhiệm', 'chân thực'],
  },
  {
    id: 'phi-ly', ten: 'Phi lý', tenGoc: 'Absurdism', khuVuc: 'Tây', thoiKy: 'Hiện đại', batDau: 1942,
    cauHoi: 'Sống thế nào khi con người đi tìm ý nghĩa còn vũ trụ thì im lặng?',
    yChinh: [
      'Cái phi lý sinh ra từ sự va chạm giữa khát khao ý nghĩa và một thế giới không trả lời.',
      'Không trốn vào hy vọng giả, cũng không buông xuôi.',
      'Nổi loạn, tự do và đam mê sống: Camus mời ta hình dung Sisyphus vẫn có thể hạnh phúc.',
    ],
    daiDien: ['Albert Camus'], tuKhoa: ['ý nghĩa', 'nổi loạn', 'trải nghiệm', 'sống'],
  },
];
