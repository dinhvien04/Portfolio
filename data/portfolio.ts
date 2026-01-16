import { PersonalInfo, Project } from "@/types";

export const personalInfo: PersonalInfo = {
    name: "Đình Viễn",
    title: "Lập Trình Viên Full Stack",
    description: "Lập trình viên đam mê tạo ra những trải nghiệm web tuyệt vời với công nghệ hiện đại",
    aboutText: "Tôi là một lập trình viên full-stack đam mê với chuyên môn về các công nghệ web hiện đại. Tôi yêu thích việc tạo ra những ứng dụng đẹp, chức năng và thân thiện với người dùng để giải quyết các vấn đề thực tế. Với nền tảng vững chắc trong cả phát triển front-end và back-end, tôi biến những ý tưởng thành hiện thực thông qua code sạch và hiệu quả.",
    additionalInfo: "Khi không lập trình, bạn có thể tìm thấy tôi đang khám phá các công nghệ mới, đóng góp cho các dự án mã nguồn mở, hoặc chia sẻ kiến thức với cộng đồng developer. Tôi tin vào việc học hỏi liên tục và luôn cập nhật những xu hướng mới nhất trong ngành.",
    profileImage: "/projects/Vien.JPG",
    resumeUrl: "/resume.pdf",
    email: "nguyendinhvien2004@gmail.com",
    github: "https://github.com/dinhvien04",
    linkedin: "https://linkedin.com/in/tencuaban",
    twitter: "https://twitter.com/tencuaban",
    facebook: "https://facebook.com/tencuaban"

};

export const projects: Project[] = [
    {
        id: 1,
        title: "Ứng Dụng Chat Thời Gian Thực",
        description: "Ứng dụng chat đa tính năng với messaging thời gian thực, xác thực JWT, chat riêng tư, chia sẻ file/hình ảnh/voice message, AI chatbot (Google Gemini), quản trị viên với dashboard, hệ thống quên mật khẩu qua OTP email, emoji picker và dark mode. Được xây dựng với Socket.IO và MongoDB.",
        image: "/projects/Chat.png",
        liveUrl: "https://realtimechat-demo.herokuapp.com",
        sourceUrl: "https://github.com/dinhvien04/RealTimeChat",
        technologies: ["Node.js", "Socket.io", "Express", "MongoDB", "JWT", "Google Gemini API", "HTML5", "CSS3"]
    },
    {
        id: 2,
        title: "Sống Vui Tuổi Vàng",
        description: "Nền tảng web toàn diện kết nối người cao tuổi với các hoạt động sức khỏe, giải trí và dịch vụ chăm sóc chuyên nghiệp tại Quy Nhơn. Hệ thống tích hợp đặt lịch, thanh toán, quản lý gói dịch vụ và Trợ lý AI (MegaLLM) tư vấn 24/7.",
        image: "/projects/Vang.png",
        liveUrl: "https://songvuituoivang.demo.com",
        sourceUrl: "https://github.com/dinhvien04/SongVuiTuoiVang",
        technologies: ["React 19", "TypeScript", "Node.js", "MongoDB", "MegaLLM", "AI Integration"]
    },
    {
        id: 3,
        title: "Orchard - Tìm kiếm & Nhận diện trái cây AI",
        description: "Hệ thống tìm kiếm và nhận diện 358 loại trái cây Việt Nam thông qua đa phương thức: Từ khóa/Mô tả (Semantic Search), Hình ảnh (Image Recognition với EfficientNet) và Giọng nói. Tích hợp Chatbot AI tư vấn theo mô hình RAG và tính năng so sánh chi tiết.",
        image: "/projects/Trai.png",
        liveUrl: "https://orchard.demo.com",
        sourceUrl: "https://github.com/dinhvien04/SearchTraiCay",
        technologies: ["Flask", "Python", "Qdrant", "SentenceTransformers", "EfficientNet", "RAG", "AI"]
    },
    {
        id: 4,
        title: "DocReader AI Studio",
        description: "Hệ thống All-in-one hỗ trợ chuyển đổi văn bản thành giọng nói (TTS), dịch thuật đa ngôn ngữ và tóm tắt văn bản thông minh. Tích hợp Azure Speech Service cho giọng đọc Neural tự nhiên (Việt/Anh) và MegaLLM. Hỗ trợ upload file đa định dạng, Resume playback, xác thực OTP và Admin Dashboard.",
        image: "/projects/DocReader.png",
        liveUrl: "https://docreader.demo.com",
        sourceUrl: "https://github.com/dinhvien04/DocReaderAI",
        technologies: ["PHP", "MySQL", "Azure Speech Service", "MegaLLM", "TTS", "PDF", "DOCX"]
    }
];
