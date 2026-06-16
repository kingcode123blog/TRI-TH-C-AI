const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const blueSvg = `            <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
              <rect width="800" height="500" fill="#080c14" rx="8"/>
              <rect x="16" y="16" width="280" height="468" fill="#0c121e" rx="8" stroke="#1e293b" stroke-width="2"/>
              <text x="32" y="44" fill="#38bdf8" font-family="'Outfit', sans-serif" font-size="12" font-weight="700">NGUỒN TÀI LIỆU (INPUT)</text>
              <rect x="32" y="60" width="248" height="80" fill="none" stroke="#38bdf8" stroke-dasharray="6 4" stroke-width="1.5" rx="6"/>
              <circle cx="156" cy="90" r="12" fill="#38bdf8"/>
              <path d="M156 84 v12 M150 90 l6 -6 l6 6" stroke="#080c14" stroke-width="2" fill="none"/>
              <text x="156" y="120" fill="#cbd5e1" font-family="'Outfit', sans-serif" font-size="10" text-anchor="middle">Kéo thả file hoặc duyệt qua máy</text>
              <rect x="32" y="156" width="248" height="32" fill="#162032" rx="4"/>
              <text x="44" y="176" fill="#f8fafc" font-family="'Outfit', sans-serif" font-size="11">Nội dung đề thi 10 về python.docx</text>
              <rect x="236" y="162" width="36" height="20" fill="#ef4444" rx="4"/>
              <text x="254" y="175" fill="#fff" font-family="'Outfit', sans-serif" font-size="9" text-anchor="middle">XÓA</text>
              <text x="32" y="220" fill="#38bdf8" font-family="'Outfit', sans-serif" font-size="12" font-weight="700">Nội dung trích xuất</text>
              <rect x="32" y="236" width="248" height="232" fill="#0f172a" rx="6" stroke="#1e293b" stroke-width="1.5"/>
              <text x="44" y="260" fill="#f8fafc" font-family="'Outfit', sans-serif" font-size="11" font-weight="600">NỘI DUNG ÔN THI CUỐI KÌ - TIN HỌC 10</text>
              <text x="44" y="290" fill="#94a3b8" font-family="'Outfit', sans-serif" font-size="10">- Các kiểu dữ liệu trong python</text>
              <text x="44" y="316" fill="#94a3b8" font-family="'Outfit', sans-serif" font-size="10">- Kiến thức về biến trong và ngoài</text>
              <text x="44" y="342" fill="#94a3b8" font-family="'Outfit', sans-serif" font-size="10">- Các hàm trong python</text>
              <text x="44" y="368" fill="#94a3b8" font-family="'Outfit', sans-serif" font-size="10">- Các vòng lặp for, while</text>
              <rect x="312" y="16" width="472" height="468" fill="#0c121e" rx="8" stroke="#1e293b" stroke-width="2"/>
              <text x="328" y="44" fill="#38bdf8" font-family="'Outfit', sans-serif" font-size="12" font-weight="700">KHUNG CHAT</text>
              <rect x="328" y="60" width="300" height="40" fill="#1e293b" rx="8"/>
              <text x="340" y="84" fill="#cbd5e1" font-family="'Outfit', sans-serif" font-size="11">Hãy nhập yêu cầu trực tiếp xuống ô bên dưới hoặc trích xuất!</text>
              <rect x="580" y="116" width="188" height="36" fill="#0ea5e9" rx="8"/>
              <text x="592" y="139" fill="#fff" font-family="'Outfit', sans-serif" font-size="11">Nội dung đề thi 10 về python...</text>
              <rect x="328" y="168" width="440" height="180" fill="#1e293b" rx="8"/>
              <text x="344" y="196" fill="#f8fafc" font-family="'Outfit', sans-serif" font-size="12" font-weight="700">ĐỀ KIỂM TRA TIN HỌC 10 (PYTHON)</text>
              <text x="344" y="224" fill="#e2e8f0" font-family="'Outfit', sans-serif" font-size="11">PHẦN 1: 20 CÂU TRẮC NGHIỆM KHÁCH QUAN</text>
              <text x="344" y="252" fill="#cbd5e1" font-family="'Outfit', sans-serif" font-size="11">Câu 1: Trong Python, kiểu dữ liệu nào sau đây dùng để lưu số thực?</text>
              <text x="344" y="276" fill="#94a3b8" font-family="'Outfit', sans-serif" font-size="11">A. int</text>
              <text x="344" y="300" fill="#94a3b8" font-family="'Outfit', sans-serif" font-size="11">B. float</text>
              <text x="344" y="324" fill="#94a3b8" font-family="'Outfit', sans-serif" font-size="11">C. str</text>
              <rect x="328" y="364" width="440" height="48" fill="#0f172a" rx="6" stroke="#1e293b" stroke-width="1.5"/>
              <text x="344" y="392" fill="#64748b" font-family="'Outfit', sans-serif" font-size="11">Nhập yêu cầu soạn đề của bạn tại đây...</text>
              <rect x="328" y="428" width="140" height="36" fill="#0ea5e9" rx="6"/>
              <text x="398" y="450" fill="#fff" font-family="'Outfit', sans-serif" font-size="11" font-weight="700" text-anchor="middle">GỬI YÊU CẦU</text>
              <rect x="478" y="428" width="140" height="36" fill="#0284c7" rx="6"/>
              <text x="548" y="450" fill="#fff" font-family="'Outfit', sans-serif" font-size="11" font-weight="700" text-anchor="middle">XUẤT WORD</text>
              <rect x="628" y="428" width="140" height="36" fill="#0369a1" rx="6"/>
              <text x="698" y="450" fill="#fff" font-family="'Outfit', sans-serif" font-size="11" font-weight="700" text-anchor="middle">XỬ LÝ WAYGROUND</text>
            </svg>`;

const purpleSvg = `            <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
              <rect width="800" height="500" fill="#0f0714" rx="8"/>
              <rect x="16" y="16" width="300" height="150" fill="#180c24" rx="8" stroke="#3b1c54" stroke-width="2"/>
              <text x="32" y="44" fill="#d946ef" font-family="'Outfit', sans-serif" font-size="12" font-weight="700">NẠP ĐỀ THI / TÀI LIỆU GỐC</text>
              <rect x="260" y="30" width="40" height="16" fill="#4a1d6e" rx="4"/>
              <text x="280" y="41" fill="#fff" font-family="'Outfit', sans-serif" font-size="8" text-anchor="middle">DOCX</text>
              <rect x="32" y="60" width="268" height="86" fill="#13081c" stroke="#4a1d6e" stroke-dasharray="6 4" stroke-width="1.5" rx="6"/>
              <circle cx="166" cy="90" r="12" fill="#a855f7"/>
              <path d="M166 94 v-10 M160 88 l6 -6 l6 6" stroke="#fff" stroke-width="2" fill="none"/>
              <text x="166" y="120" fill="#e9d5ff" font-family="'Outfit', sans-serif" font-size="11" text-anchor="middle">Kéo thả tài liệu vào đây hoặc click để chọn file</text>
              <rect x="16" y="182" width="300" height="230" fill="#180c24" rx="8" stroke="#3b1c54" stroke-width="2"/>
              <text x="32" y="210" fill="#d946ef" font-family="'Outfit', sans-serif" font-size="12" font-weight="700">NỘI DUNG THÔ</text>
              <rect x="250" y="196" width="50" height="20" fill="none" stroke="#d946ef" rx="4"/>
              <text x="275" y="210" fill="#d946ef" font-family="'Outfit', sans-serif" font-size="9" text-anchor="middle">Xóa sạch</text>
              <rect x="32" y="226" width="268" height="120" fill="#0d0514" rx="6" stroke="#3b1c54" stroke-width="1.5"/>
              <text x="44" y="250" fill="#d8b4fe" font-family="'Outfit', sans-serif" font-size="11">1. Đốt cháy metan:</text>
              <text x="44" y="270" fill="#fbcfe8" font-family="monospace" font-size="11">$CH_4 + 2O_2 \rightarrow CO_2 + 2H_2O$</text>
              <text x="44" y="300" fill="#d8b4fe" font-family="'Outfit', sans-serif" font-size="11">2. Điều chế etilen:</text>
              <text x="44" y="320" fill="#fbcfe8" font-family="monospace" font-size="11">$C_2H_5OH \xrightarrow{H_2SO_4} C_2H_4 + H_2O$</text>
              <rect x="176" y="360" width="124" height="36" fill="url(#purpleGrad)" rx="6"/>
              <defs>
                <linearGradient id="purpleGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="#a855f7"/>
                  <stop offset="100%" stop-color="#d946ef"/>
                </linearGradient>
              </defs>
              <text x="238" y="382" fill="#fff" font-family="'Outfit', sans-serif" font-size="11" font-weight="700" text-anchor="middle">XỬ LÝ → SỬA LỖI</text>
              <rect x="332" y="16" width="452" height="468" fill="#13081c" rx="8" stroke="#3b1c54" stroke-width="2"/>
              <text x="348" y="44" fill="#4ade80" font-family="'Outfit', sans-serif" font-size="12" font-weight="700">ĐÃ KẾT XUẤT DỮ LIỆU THÀNH CÔNG!</text>
              <text x="348" y="80" fill="#e9d5ff" font-family="'Outfit', sans-serif" font-size="11">Dưới đây là phương trình hóa học phù hợp:</text>
              <text x="348" y="110" fill="#d8b4fe" font-family="'Outfit', sans-serif" font-size="11">Đốt cháy metan:</text>
              <text x="560" y="140" fill="#fff" font-family="serif" font-size="14" font-style="italic" text-anchor="middle">CH₄ + 2O₂ → CO₂ + 2H₂O</text>
              <text x="348" y="180" fill="#d8b4fe" font-family="'Outfit', sans-serif" font-size="11">Điều chế etilen từ etanol:</text>
              <text x="560" y="210" fill="#fff" font-family="serif" font-size="14" font-style="italic" text-anchor="middle">C₂H₅OH → C₂H₄ + H₂O</text>
              <text x="348" y="250" fill="#d8b4fe" font-family="'Outfit', sans-serif" font-size="11">Phản ứng natri hidroxit và axit photphoric:</text>
              <text x="560" y="280" fill="#fff" font-family="serif" font-size="14" font-style="italic" text-anchor="middle">H₃PO₄ + 3NaOH → Na₃PO₄ + 3H₂O</text>
              <line x1="332" y1="420" x2="784" y2="420" stroke="#3b1c54" stroke-width="1.5"/>
              <text x="348" y="450" fill="#6b7280" font-family="'Outfit', sans-serif" font-size="10">Hoàn thành trong: <tspan fill="#4ade80">7.48s</tspan></text>
              <rect x="580" y="432" width="80" height="32" fill="#2d1342" rx="16"/>
              <text x="620" y="452" fill="#e9d5ff" font-family="'Outfit', sans-serif" font-size="11" text-anchor="middle">Tải (.md)</text>
              <rect x="670" y="432" width="100" height="32" fill="#9333ea" rx="16"/>
              <text x="720" y="452" fill="#fff" font-family="'Outfit', sans-serif" font-size="11" text-anchor="middle">Tải Word (.docx)</text>
            </svg>`;

const greenSvg = `            <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
              <rect width="800" height="500" fill="#080f12" rx="8"/>
              <text x="16" y="32" fill="#4ade80" font-family="'Outfit', sans-serif" font-size="12" font-weight="700">ẢNH ĐẦU VÀO</text>
              <rect x="16" y="44" width="360" height="340" fill="#0a1318" stroke="#10b981" stroke-width="1" stroke-dasharray="4 4" rx="8"/>
              <path d="M180 180 h20 v26 h-26 v-20 l6 -6 z" fill="#10b981"/>
              <text x="196" y="234" fill="#f8fafc" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" text-anchor="middle">detoan11.jpg</text>
              <text x="196" y="254" fill="#10b981" font-family="'Outfit', sans-serif" font-size="11" text-anchor="middle">0.04 MB</text>
              <rect x="166" y="270" width="60" height="24" fill="none" stroke="#ef4444" stroke-opacity="0.5" rx="12"/>
              <text x="196" y="286" fill="#ef4444" font-family="'Outfit', sans-serif" font-size="10" text-anchor="middle">Xóa tệp</text>
              <rect x="16" y="400" width="360" height="68" fill="#0a1318" stroke="#1e293b" stroke-width="1.5" rx="8"/>
              <text x="32" y="424" fill="#94a3b8" font-family="'Outfit', sans-serif" font-size="10">HOÀN TẤT!</text>
              <text x="240" y="424" fill="#4ade80" font-family="'Outfit', sans-serif" font-size="10" font-weight="700">100%</text>
              <rect x="32" y="434" width="230" height="4" fill="#4ade80" rx="2"/>
              <rect x="274" y="414" width="86" height="36" fill="#22c55e" rx="6"/>
              <text x="317" y="436" fill="#000" font-family="'Outfit', sans-serif" font-size="11" font-weight="700" text-anchor="middle">Chuyển Đổi</text>
              <text x="400" y="32" fill="#4ade80" font-family="'Outfit', sans-serif" font-size="12" font-weight="700">KẾT QUẢ CHUYỂN ĐỔI</text>
              <rect x="400" y="44" width="384" height="424" fill="#0d151a" stroke="#1e293b" stroke-width="1.5" rx="8"/>
              <rect x="680" y="16" width="104" height="24" fill="#111827" stroke="#374151" stroke-width="1" rx="4"/>
              <text x="732" y="32" fill="#cbd5e1" font-family="'Outfit', sans-serif" font-size="10" text-anchor="middle">.DOCX</text>
              <text x="420" y="70" fill="#f8fafc" font-family="serif" font-size="12" font-weight="700">Câu 1) Cho cấp số cộng (u_n) có u_1 = -5 và d = 3. Mệnh đề nào đúng?</text>
              <text x="440" y="94" fill="#e2e8f0" font-family="serif" font-size="12">A. u_{15} = 34</text>
              <text x="550" y="94" fill="#e2e8f0" font-family="serif" font-size="12">B. u_{13} = 31</text>
              <text x="660" y="94" fill="#e2e8f0" font-family="serif" font-size="12">C. u_{15} = 45</text>
              <text x="420" y="130" fill="#f8fafc" font-family="serif" font-size="12" font-weight="700">Câu 2) Góc có số đo 108° đổi ra radian là</text>
              <text x="440" y="154" fill="#e2e8f0" font-family="serif" font-size="12">A. 3π/5</text>
              <text x="550" y="154" fill="#e2e8f0" font-family="serif" font-size="12">B. π/5</text>
              <text x="660" y="154" fill="#e2e8f0" font-family="serif" font-size="12">C. 4π/5</text>
              <text x="420" y="190" fill="#f8fafc" font-family="serif" font-size="12" font-weight="700">Câu 3) Bảng sau đây là thống kê về việc trồng lúa:</text>
              <rect x="440" y="210" width="300" height="60" fill="#0a1318" stroke="#1e293b" stroke-width="1"/>
              <line x1="440" y1="240" x2="740" y2="240" stroke="#1e293b" stroke-width="1"/>
              <line x1="560" y1="210" x2="560" y2="270" stroke="#1e293b" stroke-width="1"/>
              <line x1="620" y1="210" x2="620" y2="270" stroke="#1e293b" stroke-width="1"/>
              <line x1="680" y1="210" x2="680" y2="270" stroke="#1e293b" stroke-width="1"/>
              <text x="500" y="230" fill="#4ade80" font-family="'Outfit', sans-serif" font-size="11" text-anchor="middle">Năng suất (tấn/ha)</text>
              <text x="590" y="230" fill="#4ade80" font-family="'Outfit', sans-serif" font-size="11" text-anchor="middle">[3; 4)</text>
              <text x="650" y="230" fill="#4ade80" font-family="'Outfit', sans-serif" font-size="11" text-anchor="middle">[4; 5)</text>
              <text x="710" y="230" fill="#4ade80" font-family="'Outfit', sans-serif" font-size="11" text-anchor="middle">[5; 6)</text>
              <text x="500" y="260" fill="#cbd5e1" font-family="'Outfit', sans-serif" font-size="11" text-anchor="middle">Số hộ gia đình</text>
              <text x="590" y="260" fill="#f8fafc" font-family="'Outfit', sans-serif" font-size="11" text-anchor="middle">30</text>
              <text x="650" y="260" fill="#f8fafc" font-family="'Outfit', sans-serif" font-size="11" text-anchor="middle">40</text>
              <text x="710" y="260" fill="#f8fafc" font-family="'Outfit', sans-serif" font-size="11" text-anchor="middle">20</text>
              <text x="420" y="300" fill="#e2e8f0" font-family="serif" font-size="12">Tìm số trung bình. (Làm tròn hai chữ số sau dấu phẩy)</text>
              <text x="440" y="324" fill="#e2e8f0" font-family="serif" font-size="12">A. 4,4</text>
              <text x="550" y="324" fill="#e2e8f0" font-family="serif" font-size="12">B. 4,50</text>
              <text x="660" y="324" fill="#e2e8f0" font-family="serif" font-size="12">C. 4,38</text>
            </svg>`;

const orangeSvg = `            <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
              <rect width="800" height="500" fill="#120a05" rx="8"/>
              <text x="16" y="32" fill="#fb923c" font-family="'Outfit', sans-serif" font-size="12" font-weight="700">1. TẢI TÀI LIỆU</text>
              <rect x="16" y="44" width="340" height="100" fill="#1a100a" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4 4" rx="8"/>
              <path d="M180 70 h12 v16 h-16 v-12 l4 -4 z" fill="#f97316"/>
              <text x="186" y="116" fill="#fdba74" font-family="'Outfit', sans-serif" font-size="12" font-weight="600" text-anchor="middle">Đã nhận: de_van.jpg</text>
              <text x="16" y="180" fill="#fb923c" font-family="'Outfit', sans-serif" font-size="12" font-weight="700">2. CẤU HÌNH GIỌNG ĐỌC &amp; TỐC ĐỘ</text>
              <rect x="16" y="196" width="340" height="230" fill="#1a100a" stroke="#431407" stroke-width="2" rx="8"/>
              <text x="32" y="228" fill="#fdba74" font-family="'Outfit', sans-serif" font-size="11">Chọn Giọng gốc có sẵn trên máy:</text>
              <rect x="32" y="240" width="308" height="36" fill="#120a05" stroke="#7c2d12" stroke-width="1.5" rx="6"/>
              <text x="44" y="262" fill="#fff" font-family="'Outfit', sans-serif" font-size="11">Giọng Tiếng Việt (Microsoft An)</text>
              <text x="32" y="306" fill="#fdba74" font-family="'Outfit', sans-serif" font-size="11">Tốc độ đọc (Nhanh/Chậm):</text>
              <text x="316" y="306" fill="#fdba74" font-family="'Outfit', sans-serif" font-size="11">1.0x</text>
              <rect x="32" y="316" width="308" height="4" fill="#431407" rx="2"/>
              <rect x="32" y="316" width="100" height="4" fill="#f97316" rx="2"/>
              <circle cx="132" cy="318" r="6" fill="#f97316"/>
              <text x="32" y="356" fill="#fdba74" font-family="'Outfit', sans-serif" font-size="11">Độ trầm bổng (Pitch):</text>
              <text x="316" y="356" fill="#fdba74" font-family="'Outfit', sans-serif" font-size="11">1.0</text>
              <rect x="32" y="366" width="308" height="4" fill="#431407" rx="2"/>
              <rect x="32" y="366" width="154" height="4" fill="#f97316" rx="2"/>
              <circle cx="186" cy="368" r="6" fill="#f97316"/>
              <rect x="32" y="386" width="180" height="40" fill="#f97316" rx="6"/>
              <text x="122" y="410" fill="#000" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" text-anchor="middle">Xử lý &amp; Trích xuất</text>
              <rect x="220" y="386" width="120" height="40" fill="none" stroke="#7c2d12" stroke-width="1.5" rx="6"/>
              <text x="280" y="410" fill="#ea580c" font-family="'Outfit', sans-serif" font-size="12" font-weight="600" text-anchor="middle">Xóa làm lại</text>
              <text x="380" y="32" fill="#fb923c" font-family="'Outfit', sans-serif" font-size="12" font-weight="700">3. TRÌNH PHÁT AUDIO &amp; THANH ĐIỀU CHỈNH</text>
              <rect x="380" y="44" width="404" height="220" fill="#1a100a" stroke="#431407" stroke-width="2" rx="8"/>
              <circle cx="420" cy="90" r="24" fill="#f97316"/>
              <path d="M415 80 v20 l14 -10 z" fill="#fff"/>
              <text x="460" y="84" fill="#f8fafc" font-family="'Outfit', sans-serif" font-size="14" font-weight="700">de_van.jpg</text>
              <text x="460" y="104" fill="#f97316" font-family="'Outfit', sans-serif" font-size="11">Đang tạm dừng</text>
              <rect x="400" y="136" width="364" height="4" fill="#431407" rx="2"/>
              <rect x="400" y="136" width="120" height="4" fill="#f97316" rx="2"/>
              <circle cx="520" cy="138" r="6" fill="#f97316"/>
              <text x="400" y="156" fill="#9a3412" font-family="'Outfit', sans-serif" font-size="10">Câu 11</text>
              <text x="764" y="156" fill="#9a3412" font-family="'Outfit', sans-serif" font-size="10" text-anchor="end">Tổng 30 câu</text>
              <rect x="400" y="170" width="2" height="70" fill="#f97316"/>
              <text x="416" y="184" fill="#fdba74" font-family="serif" font-size="11">Lại có những người cho rằng giá trị của xách là ở tinh thần của nó chứ</text>
              <text x="416" y="202" fill="#fdba74" font-family="serif" font-size="11">không phải dáng vẻ bề ngoài, mến mình là chủ thì có toàn quyền sử dụng:</text>
              <text x="416" y="220" fill="#fdba74" font-family="serif" font-size="11">thoải mái gạch dưới những câu văn cần chú ý, ghi bên lề những dấu hỏi...</text>
              <text x="380" y="300" fill="#fb923c" font-family="'Outfit', sans-serif" font-size="12" font-weight="700">TRẠNG THÁI HỆ THỐNG</text>
              <rect x="380" y="312" width="404" height="114" fill="#000" stroke="#431407" stroke-width="2" rx="8"/>
              <text x="396" y="340" fill="#94a3b8" font-family="'Outfit', sans-serif" font-size="11">> Đang tiến hành đọc và bóc tách dữ liệu tệp...</text>
              <text x="396" y="362" fill="#94a3b8" font-family="'Outfit', sans-serif" font-size="11">> Đang tiến xử lý: Nâng cấp độ phân giải và tương phản ảnh...</text>
              <text x="396" y="384" fill="#94a3b8" font-family="'Outfit', sans-serif" font-size="11">> Bắt đầu quét AI OCR (Hỗ trợ Song ngữ Việt-Anh)...</text>
              <text x="396" y="406" fill="#f97316" font-family="'Outfit', sans-serif" font-size="11">> Xử lý hoàn tất! Đã phân tách dữ liệu thành 30 câu nhỏ.</text>
            </svg>`;

html = html.replace(/<div class="svg-illustration illus-blue"[\\s\\S]*?<\/svg>\\s*<\/div>/, \`<div class="svg-illustration illus-blue" role="img" aria-label="Giao diện tạo đề kiểm tra">
\${blueSvg}
          </div>\`);

html = html.replace(/<div class="svg-illustration illus-purple"[\\s\\S]*?<\/svg>\\s*<\/div>/, \`<div class="svg-illustration illus-purple" role="img" aria-label="Giao diện xử lý công thức toán học">
\${purpleSvg}
          </div>\`);

html = html.replace(/<div class="svg-illustration illus-green"[\\s\\S]*?<\/svg>\\s*<\/div>/, \`<div class="svg-illustration illus-green" role="img" aria-label="Giao diện chuyển ảnh PDF sang Word">
\${greenSvg}
          </div>\`);

html = html.replace(/<div class="svg-illustration illus-orange"[\\s\\S]*?<\/svg>\\s*<\/div>/, \`<div class="svg-illustration illus-orange" role="img" aria-label="Giao diện đọc sách bằng giọng nói">
\${orangeSvg}
          </div>\`);

fs.writeFileSync('index.html', html);
console.log('Successfully updated SVGs in index.html');
