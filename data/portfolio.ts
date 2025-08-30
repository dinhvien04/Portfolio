import { PersonalInfo, Project } from "@/types";

export const personalInfo: PersonalInfo = {
    name: "Đình Viễn",
    title: "Lập Trình Viên Full Stack",
    description: "Lập trình viên đam mê tạo ra những trải nghiệm web tuyệt vời với công nghệ hiện đại",
    aboutText: "Tôi là một lập trình viên full-stack đam mê với chuyên môn về các công nghệ web hiện đại. Tôi yêu thích việc tạo ra những ứng dụng đẹp, chức năng và thân thiện với người dùng để giải quyết các vấn đề thực tế. Với nền tảng vững chắc trong cả phát triển front-end và back-end, tôi biến những ý tưởng thành hiện thực thông qua code sạch và hiệu quả.",
    additionalInfo: "Khi không lập trình, bạn có thể tìm thấy tôi đang khám phá các công nghệ mới, đóng góp cho các dự án mã nguồn mở, hoặc chia sẻ kiến thức với cộng đồng developer. Tôi tin vào việc học hỏi liên tục và luôn cập nhật những xu hướng mới nhất trong ngành.",
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
        image: "/projects/realtime-chat.svg",
        liveUrl: "https://realtimechat-demo.herokuapp.com",
        sourceUrl: "https://github.com/dinhvien04/RealTimeChat",
        technologies: ["Node.js", "Socket.io", "Express", "MongoDB", "JWT", "Google Gemini API", "HTML5", "CSS3"]
    },
    {
        id: 2,
        title: "OCAW - Website Bán Hàng Máy Tính",
        description: "Trang web thương mại điện tử chuyên bán phụ kiện và máy tính. Có đầy đủ chức năng quản lý sản phẩm, đơn hàng, giỏ hàng, tài khoản người dùng và admin panel. Tích hợp thanh toán MoMo và xuất hóa đơn PDF.",
        image: "/projects/ocaw.svg",
        liveUrl: "https://ocaw-demo.000webhostapp.com",
        sourceUrl: "https://github.com/dinhvien04/OCAW",
        technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "MoMo API", "FPDF"]
    },
    {
        id: 3,
        title: "Chat App với AI Integration",
        description: "Ứng dụng chat hiện đại tích hợp AI chatbot thông qua Ollama backend. Xây dựng với TypeScript, Vite và có giao diện user-friendly. Hỗ trợ chat với các AI model khác nhau và cấu hình ESLint chuyên nghiệp.",
        image: "/projects/ai-chat.svg",
        liveUrl: "https://chat-app-demo.netlify.app",
        sourceUrl: "https://github.com/dinhvien04/chat-app",
        technologies: ["TypeScript", "Vite", "CSS3", "Ollama", "AI Integration", "ESLint"]
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "Website portfolio cá nhân được xây dựng với Next.js và Tailwind CSS. Có giao diện hiện đại, responsive, animation mượt mà và section kỹ năng với hiệu ứng chuyển động. Tối ưu hóa SEO và hiệu suất tải trang.",
        image: "/projects/portfolio.svg",
        liveUrl: "https://dinhvien-portfolio.vercel.app",
        sourceUrl: "https://github.com/dinhvien04/portfolio",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Icons"]
    }
];
