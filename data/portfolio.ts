import { PersonalInfo, Project } from "@/types";

export const personalInfo: PersonalInfo = {
    name: "Đình Viễn",
    title: "Lập Trình Viên Full Stack",
    description: "Lập trình viên đam mê tạo ra những trải nghiệm web tuyệt vời với công nghệ hiện đại",
    aboutText: "Tôi là một lập trình viên full-stack đam mê với chuyên môn về các công nghệ web hiện đại. Tôi yêu thích việc tạo ra những ứng dụng đẹp, chức năng và thân thiện với người dùng để giải quyết các vấn đề thực tế. Với nền tảng vững chắc trong cả phát triển front-end và back-end, tôi biến những ý tưởng thành hiện thực thông qua code sạch và hiệu quả.",
    additionalInfo: "Khi không lập trình, bạn có thể tìm thấy tôi đang khám phá các công nghệ mới, đóng góp cho các dự án mã nguồn mở, hoặc chia sẻ kiến thức với cộng đồng developer. Tôi tin vào việc học hỏi liên tục và luôn cập nhật những xu hướng mới nhất trong ngành.",
    resumeUrl: "/resume.pdf",
    email: "email.cua.ban@example.com",
    github: "https://github.com/dinhvien04",
    linkedin: "https://linkedin.com/in/tencuaban",
    twitter: "https://twitter.com/tencuaban",
    facebook: "https://facebook.com/tencuaban"

};

export const projects: Project[] = [
    {
        id: 1,
        title: "Nền Tảng Thương Mại Điện Tử",
        description: "Nền tảng thương mại điện tử full-stack được xây dựng với Next.js và Node.js. Các tính năng bao gồm xác thực người dùng, danh mục sản phẩm, giỏ hàng, tích hợp thanh toán và bảng điều khiển quản trị. Thiết kế responsive và tối ưu hóa hiệu suất.",
        image: "/projects/ecommerce.png",
        liveUrl: "https://example-ecommerce.com",
        sourceUrl: "https://github.com/tencuaban/ecommerce",
        technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"]
    },
    {
        id: 2,
        title: "Ứng Dụng Chat Thời Gian Thực",
        description: "Ứng dụng chat thời gian thực với các tính năng như nhắn tin riêng tư, chat nhóm, chia sẻ file và gọi điện/video. Được triển khai bằng WebSockets cho giao tiếp thời gian thực và Redis để quản lý phiên.",
        image: "/projects/chat-app.png",
        liveUrl: "https://example-chat.com",
        sourceUrl: "https://github.com/tencuaban/chat-app",
        technologies: ["React", "Socket.io", "Express", "PostgreSQL", "Redis", "WebRTC"]
    },
    {
        id: 3,
        title: "Hệ Thống Quản Lý Công Việc",
        description: "Hệ thống quản lý công việc cộng tác với các tính năng như bảng dự án, phân công nhiệm vụ, theo dõi deadline và hợp tác nhóm. Bao gồm cập nhật thời gian thực và hệ thống thông báo.",
        image: "/projects/task-manager.png",
        liveUrl: "https://example-tasks.com",
        sourceUrl: "https://github.com/tencuaban/task-manager",
        technologies: ["Vue.js", "Vuex", "Node.js", "MySQL", "Docker", "JWT"]
    },
    {
        id: 4,
        title: "Trình Tạo Nội Dung AI",
        description: "Nền tảng được hỗ trợ bởi AI tạo ra nội dung chất lượng cao sử dụng các mô hình machine learning. Các tính năng bao gồm tạo bài viết blog, tạo hình ảnh và công cụ tối ưu hóa SEO.",
        image: "/projects/ai-content.png",
        liveUrl: "https://example-ai-content.com",
        sourceUrl: "https://github.com/tencuaban/ai-content",
        technologies: ["Python", "FastAPI", "React", "OpenAI API", "PostgreSQL", "Redis"]
    }
];
