import { useRef } from "react"

export default function CVDesign() {
  const fileRef = useRef()

  function handleImgUpload(e) {
    const file = e.target.files[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    document.getElementById("avatar-img").src = url
    document.getElementById("avatar-img").style.display = "block"
    document.getElementById("avatar-placeholder").style.display = "none"
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#F5F4F0",
      padding: "40px 20px",
      display: "flex",
      justifyContent: "center",
      fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "900px",
        background: "#fff",
        boxShadow: "0 4px 40px rgba(0,0,0,0.10)",
      }}>

        {/* HEADER */}
        <div style={{
          background: "#12284C",
          color: "#fff",
          padding: "36px 52px",
          display: "flex",
          alignItems: "center",
          gap: "32px"
        }}>
          {/* AVATAR ZONE */}
          <div
            onClick={() => fileRef.current.click()}
            title="Nhấn để tải ảnh lên"
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              border: "3px solid #C9A84C",
              overflow: "hidden",
              flexShrink: 0,
              cursor: "pointer",
              position: "relative",
              background: "#1E3A5F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              id="avatar-img"
              src=""
              alt="Ảnh cá nhân"
              style={{
                display: "none",
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
            <div id="avatar-placeholder" style={{
              textAlign: "center",
              padding: "8px"
            }}>
              <div style={{ fontSize: "26px", marginBottom: "4px" }}>📷</div>
              <p style={{
                fontFamily: "'Arial', sans-serif",
                fontSize: "9px",
                color: "#9BBAD6",
                margin: 0,
                letterSpacing: "0.5px",
                lineHeight: 1.4
              }}>Nhấn để<br/>chèn ảnh</p>
            </div>
          </div>
          <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleImgUpload} />

          {/* NAME & TITLE */}
          <div style={{ flex: 1 }}>
            <p style={{
              fontFamily: "'Arial', sans-serif",
              fontSize: "11px",
              letterSpacing: "4px",
              color: "#9BBAD6",
              marginBottom: "8px",
              textTransform: "uppercase"
            }}>Media · Content Marketing</p>
            <h1 style={{
              fontSize: "36px",
              fontWeight: "400",
              letterSpacing: "1px",
              margin: "0 0 6px",
              lineHeight: 1.1
            }}>Phan Khánh Linh</h1>
            <p style={{
              fontFamily: "'Arial', sans-serif",
              fontSize: "13px",
              color: "#9BBAD6",
              margin: 0
            }}>
              Content Strategist &amp; Social Media Manager
            </p>
          </div>

          {/* CONTACT */}
          <div style={{
            fontFamily: "'Arial', sans-serif",
            fontSize: "12px",
            color: "#C9D9E8",
            textAlign: "right",
            lineHeight: "2",
            flexShrink: 0
          }}>
            <div>0392 548 519</div>
            <div>Phank.linh260902@gmail.com</div>
            <div>Hoàng Mai, Hà Nội</div>
            <div>26/09/2002</div>
          </div>
        </div>

        {/* GOLD DIVIDER */}
        <div style={{ height: "4px", background: "#C9A84C" }} />

        {/* BODY */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>

          {/* LEFT */}
          <div style={{
            background: "#F7F6F2",
            padding: "32px 24px",
            borderRight: "1px solid #E5E2D9"
          }}>

            <Section title="Mục tiêu">
              <p style={bodyText}>
                Cử nhân Kinh tế – Tài chính (ULIS–SNHU), có 2+ năm kinh nghiệm thực chiến trong Content Marketing và Social Media. Mong muốn đóng góp vào chiến lược truyền thông và xây dựng thương hiệu tại môi trường tập đoàn chuyên nghiệp.
              </p>
            </Section>

            <Section title="Kỹ năng chuyên môn">
              <SkillRow label="Social Media Strategy" />
              <SkillRow label="Content Writing & Copywriting" />
              <SkillRow label="KOL / KOC Booking & Management" />
              <SkillRow label="Video Script & TVC Production" />
              <SkillRow label="Fanpage & Community Management" />
              <SkillRow label="Canva · Basic Video Editing" />
              <SkillRow label="Microsoft Office · Google Workspace" />
              <SkillRow label="Brand Positioning" />
            </Section>

            <Section title="Học vấn">
              <p style={{ ...labelSt, marginBottom: "4px" }}>Đại học Southern New Hampshire (Hoa Kỳ)</p>
              <p style={{ ...sub, marginBottom: "2px" }}>Liên kết ULIS – ĐHQG Hà Nội</p>
              <p style={{ ...sub, marginBottom: "2px" }}>Kinh tế – Tài chính | GPA 3.19</p>
              <p style={sub}>2021 – 2025</p>
            </Section>

            <Section title="Chứng chỉ">
              <SkillRow label="VSTEP B2 (Tiếng Anh)" />
              <SkillRow label="Social Media Marketing – HubSpot" />
              <SkillRow label="Digital Marketing – HubSpot" />
            </Section>

            <Section title="Thành tích nổi bật">
              <StatCard number="3M+" desc="lượt tiếp cận tự nhiên / tháng cao điểm tại Máy Ảnh Cũ HN" />
              <StatCard number="2+" desc="năm kinh nghiệm content & social thực chiến" />
              <StatCard number="5+" desc="thương hiệu / dự án đã triển khai truyền thông" />
            </Section>

          </div>

          {/* RIGHT */}
          <div style={{ padding: "32px 36px" }}>

            <RightSection title="Kinh nghiệm làm việc">
              <Job
                company="Thẩm mỹ Trung Anh Group"
                role="Content Marketing Executive"
                period="06/2025 – 02/2026"
                items={[
                  "Chủ trì toàn bộ hoạt động truyền thông đa kênh (Facebook, TikTok, Zalo), tăng nhận diện thương hiệu trong ngành thẩm mỹ",
                  "Lên kế hoạch và booking KOL/KOC cho các chiến dịch quảng bá dịch vụ, tối ưu ngân sách truyền thông",
                  "Xây dựng kịch bản chi tiết cho video, TVC và livestream tư vấn dịch vụ thẩm mỹ",
                  "Trực tiếp edit video, hình ảnh đăng TikTok; quản lý lịch đăng bài và tương tác cộng đồng",
                  "Lập báo giá dịch vụ KOL/KOC, soạn thảo và trao đổi hợp đồng hợp tác với đối tác truyền thông",
                ]}
              />

              <Job
                company="Máy Ảnh Cũ Hà Nội"
                role="Content Marketing Executive"
                period="01/2022 – 12/2023"
                items={[
                  "Quản lý fanpage chính đạt ~3 triệu lượt tiếp cận tự nhiên/tháng cao điểm nhờ chiến lược nội dung viral có định hướng",
                  "Sáng tạo nội dung đa định dạng (bài viết, hình ảnh, video) tăng tương tác và nhận diện thương hiệu trên Facebook, TikTok, Zalo",
                  "Xây dựng và quản trị hội nhóm cộng đồng nhiếp ảnh; lên kế hoạch nội dung tháng và triển khai chương trình truyền thông định kỳ",
                  "Chụp ảnh sản phẩm và tư vấn concept hình ảnh theo yêu cầu chiến dịch",
                ]}
              />

              <Job
                company="Hakigo Agency"
                role="TTS Media – Content Marketing"
                period="08/2021 – 12/2021"
                items={[
                  "Tiếp nhận và triển khai brief nội dung từ agency cho nhiều khách hàng đa ngành",
                  "Quản lý fanpage, group và thiết kế hình ảnh truyền thông theo yêu cầu chiến dịch",
                  "Chụp ảnh sản phẩm; hỗ trợ team trong các chiến dịch nội dung đa kênh",
                ]}
              />
            </RightSection>

            <RightSection title="Dự án ngoài">
              <Job
                company="Sự kiện âm nhạc SYNTHESIZE"
                role="Co-Founder & Trưởng Ban Truyền thông"
                period="07/2023"
                items={[
                  "Đồng sáng lập, định hướng chiến lược tổng thể và xây dựng đội ngũ cho sự kiện âm nhạc EDM độc lập",
                  "Thiết kế toàn bộ timeline truyền thông, kế hoạch tổ chức và quản lý tiến độ từ đầu đến cuối",
                  "Trực tiếp làm việc với nghệ sĩ biểu diễn; hỗ trợ giao tiếp với khách nước ngoài tham dự",
                  "Hợp tác truyền thông với các fanpage lớn trong ngành EDM để mở rộng độ phủ sự kiện",
                ]}
              />

              <Job
                company="Fresh Food Bình An"
                role="Content Marketing – TVC Production"
                period="07/2023 – 08/2023"
                items={[
                  "Viết kịch bản TVC; giám sát buổi quay tại xưởng và phối hợp trực tiếp với đội ngũ quay dựng",
                  "Hỗ trợ MC trong các cảnh quay; thiết kế và sản xuất nội dung hồ sơ doanh nghiệp cho đối tác",
                ]}
              />

              <Job
                company="Alpha Agency"
                role="CTV Content Marketing"
                period="2026 – nay"
                items={[
                  "Triển khai nội dung truyền thông theo brief của agency; phối hợp team xây dựng kế hoạch và quản lý tiến độ dự án",
                ]}
              />
            </RightSection>

          </div>
        </div>

        {/* FOOTER */}
        <div style={{ background: "#12284C", height: "6px" }} />
        <div style={{ background: "#C9A84C", height: "2px" }} />

      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: "26px" }}>
      <p style={{
        fontFamily: "'Arial', sans-serif",
        fontSize: "9px",
        letterSpacing: "3.5px",
        textTransform: "uppercase",
        color: "#12284C",
        fontWeight: "700",
        marginBottom: "12px",
        paddingBottom: "6px",
        borderBottom: "1.5px solid #C9A84C"
      }}>{title}</p>
      {children}
    </div>
  )
}

function RightSection({ title, children }) {
  return (
    <div style={{ marginBottom: "28px" }}>
      <p style={{
        fontFamily: "'Arial', sans-serif",
        fontSize: "9px",
        letterSpacing: "3.5px",
        textTransform: "uppercase",
        color: "#12284C",
        fontWeight: "700",
        marginBottom: "18px",
        paddingBottom: "6px",
        borderBottom: "1.5px solid #C9A84C"
      }}>{title}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {children}
      </div>
    </div>
  )
}

function Job({ company, role, period, items }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2px" }}>
        <p style={{
          fontFamily: "'Arial', sans-serif",
          fontSize: "13px",
          fontWeight: "700",
          color: "#12284C",
          margin: 0
        }}>{company}</p>
        <p style={{
          fontFamily: "'Arial', sans-serif",
          fontSize: "11px",
          color: "#9A8B6E",
          margin: 0,
          flexShrink: 0,
          marginLeft: "12px"
        }}>{period}</p>
      </div>
      <p style={{
        fontFamily: "'Arial', sans-serif",
        fontSize: "11.5px",
        color: "#C9A84C",
        fontStyle: "italic",
        margin: "0 0 7px"
      }}>{role}</p>
      <ul style={{ margin: 0, paddingLeft: "16px" }}>
        {items.map((item, i) => (
          <li key={i} style={{
            fontFamily: "'Segoe UI', Arial, sans-serif",
            fontSize: "12px",
            color: "#3A3530",
            lineHeight: "1.7",
            marginBottom: "3px"
          }}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function SkillRow({ label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "7px" }}>
      <div style={{ width: "4px", height: "4px", background: "#C9A84C", borderRadius: "50%", flexShrink: 0 }} />
      <p style={{
        fontFamily: "'Arial', sans-serif",
        fontSize: "12px",
        color: "#3A3530",
        margin: 0,
        lineHeight: 1.4
      }}>{label}</p>
    </div>
  )
}

function StatCard({ number, desc }) {
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #E5E2D9",
      borderLeft: "3px solid #C9A84C",
      padding: "10px 12px",
      marginBottom: "10px"
    }}>
      <p style={{
        fontFamily: "'Arial', sans-serif",
        fontSize: "20px",
        fontWeight: "700",
        color: "#12284C",
        margin: "0 0 2px"
      }}>{number}</p>
      <p style={{
        fontFamily: "'Arial', sans-serif",
        fontSize: "11px",
        color: "#6B6358",
        margin: 0,
        lineHeight: 1.4
      }}>{desc}</p>
    </div>
  )
}

const bodyText = {
  fontFamily: "'Segoe UI', Arial, sans-serif",
  fontSize: "12px",
  color: "#3A3530",
  lineHeight: "1.75",
  margin: 0
}

const labelSt = {
  fontFamily: "'Segoe UI', Arial, sans-serif",
  fontSize: "12.5px",
  fontWeight: "700",
  color: "#12284C",
  margin: 0
}

const sub = {
  fontFamily: "'Segoe UI', Arial, sans-serif",
  fontSize: "11.5px",
  color: "#6B6358",
  margin: 0
}
