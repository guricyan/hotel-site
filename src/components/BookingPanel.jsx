import { siteConfig } from "../data/siteContent";

export default function BookingPanel({ roomName = "安处" }) {
  const emailReady = !siteConfig.contact.email.startsWith("replace-");
  const subject = encodeURIComponent(`${roomName} 官网预订咨询`);
  const body = encodeURIComponent(`您好，我想咨询 ${roomName} 的入住情况。\n\n入住日期：\n退房日期：\n入住人数：\n姓名：\n其他需求：`);

  return (
    <aside className="booking-panel">
      <p className="eyebrow">DIRECT BOOKING</p>
      <h2>{siteConfig.directBooking.title}</h2>
      <p>{siteConfig.directBooking.text}</p>
      <ul>
        {siteConfig.directBooking.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
      </ul>
      <div className="booking-actions">
        <a
          className={emailReady ? "button primary" : "button primary disabled"}
          href={emailReady ? `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}` : undefined}
          onClick={(event) => {
            if (!emailReady) {
              event.preventDefault();
              window.alert("请先在 src/data/siteContent.js 中替换真实邮箱地址。");
            }
          }}
        >
          发送预订咨询
        </a>
        <span>WeChat：{siteConfig.contact.wechat}</span>
      </div>
    </aside>
  );
}
