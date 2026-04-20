import { useState } from "react";
import { motion } from "framer-motion";

const rooms = [
  {
    id: "yotsuru",
    name: "野鶴居",
    desc: "海边1分钟｜安静私密",
    price: "¥1000 / 晚",
    guests: "最多5人",
    intro:
      "步行即可到海边，适合想听海浪、看日出、在安静空间里慢慢度过一天的人。",
    facilities: ["WiFi", "空调", "厨房", "洗衣机", "热水淋浴", "停车位"],
    nearby: ["海边步行1分钟", "当地渔港车程约5分钟", "系满市区车程约10分钟", "附近餐厅与便利店车程约5-10分钟"],
    route:
      "建议从那霸机场自驾前往，车程约15分钟。后续可替换为 Google Map 嵌入地图或图片路线图。",
  },
  {
    id: "yousui",
    name: "悠水居",
    desc: "64年古民家｜田园慢生活",
    price: "¥900 / 晚",
    guests: "最多4人",
    intro:
      "保留老房子的时间感与温度，适合喜欢古民家气息、田园安静环境与慢生活节奏的客人。",
    facilities: ["WiFi", "空调", "厨房", "洗衣机", "庭院空间", "停车位"],
    nearby: ["传统村落散步", "在地小店探访", "海边车程数分钟", "系满市场与餐馆车程约10分钟"],
    route:
      "推荐自驾到达，适合以系满南部为中心慢慢探索。后续可添加更详细的路线说明。",
  },
  {
    id: "danxia",
    name: "丹霞",
    desc: "新建独栋｜自然环绕",
    price: "¥1200 / 晚",
    guests: "最多6人",
    intro:
      "新建独栋空间明亮舒适，周围自然安静，适合朋友、小家庭与想要轻松度假的旅人。",
    facilities: ["WiFi", "空调", "厨房", "洗衣机", "餐桌区", "停车位"],
    nearby: ["海边与日落观景点", "系满渔港", "当地超市", "南部观光路线出发方便"],
    route:
      "建议从机场租车前往，路线清晰，停车方便。后续可以换成嵌入式地图。",
  },
  {
    id: "zhoumo",
    name: "周墨斎",
    desc: "海边小屋｜静谧放松",
    price: "¥1000 / 晚",
    guests: "最多5人",
    intro:
      "靠近海边，安静而克制，适合想要发呆、看海、休息几天的旅人。",
    facilities: ["WiFi", "空调", "厨房", "洗衣机", "基础炊具", "停车位"],
    nearby: ["海边步行可达", "安静村落散步", "系满渔港车程约5分钟", "在地餐厅车程约5-10分钟"],
    route:
      "从机场出发约15分钟车程，适合自驾前往。后续可接入 Google 地图导航。",
  },
];

const placeholderImages = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
];

export default function App() {
  const [current, setCurrent] = useState(null);

  if (current) {
    return <DetailPage room={current} onBack={() => setCurrent(null)} />;
  }

  return (
    <div>
      <HeroSection />
      <PlaceSection />
      <LifestyleSection />
      <ExperienceSection />
      <RoomsSection onOpen={setCurrent} />
      <GallerySection />
      <BookingSection />
      <ContactSection />
      <footer className="site-footer">© 海野居 SeaField Retreat</footer>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${placeholderImages[0]})` }}>
      <div className="overlay" />
      <motion.div
        className="hero-inner"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="eyebrow">SeaField Retreat</p>
        <h1>海野居</h1>
        <p className="hero-text">在海与田野之间，找到属于你的安静时光</p>
        <a href="#rooms" className="primary-button">查看居所</a>
      </motion.div>
    </section>
  );
}

function PlaceSection() {
  return (
    <section className="content-section narrow">
      <p>
        系满是冲绳南部一个安静的海边小镇，远离城市的喧嚣，保留着最自然、最真实的生活节奏。
      </p>
      <p>
        这里曾是渔民与海共生的地方，清晨可以听见海浪，傍晚能看到渔船归来，夜晚则是满天星空。
      </p>
    </section>
  );
}

function LifestyleSection() {
  return (
    <section className="content-section narrow lifestyle">
      <p>
        清晨听海浪，午后晒阳光，夜晚看星空。<br />
        在这里，没有必须完成的行程，只有属于自己的时间。
      </p>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="content-section">
      <h2>在这里可以做的事</h2>
      <div className="list-card center">
        <p>・步行到海边看日出</p>
        <p>・在安静的村落中散步</p>
        <p>・感受冲绳慢节奏生活</p>
        <p>・探索当地小店与餐厅</p>
        <p>・什么都不做，只是放松</p>
      </div>
    </section>
  );
}

function RoomsSection({ onOpen }) {
  return (
    <section className="content-section" id="rooms">
      <h2>居所</h2>
      <div className="rooms-grid">
        {rooms.map((room) => (
          <motion.div
            className="room-card"
            key={room.id}
            whileHover={{ y: -8 }}
            onClick={() => onOpen(room)}
          >
            <div className="room-card-image" style={{ backgroundImage: `url(${placeholderImages[1]})` }} />
            <div className="room-card-body">
              <h3>{room.name}</h3>
              <p>{room.desc}</p>
              <span>查看详情 →</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="content-section">
      <h2>光影</h2>
      <div className="gallery-grid">
        {placeholderImages.concat(placeholderImages.slice(0, 2)).map((img, i) => (
          <motion.div
            key={i}
            className="gallery-item"
            style={{ backgroundImage: `url(${img})` }}
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        ))}
      </div>
    </section>
  );
}

function BookingSection() {
  return (
    <section className="content-section narrow booking-block">
      <h2>预订</h2>
      <p>欢迎通过官网直接联系预订。复购客人可享专属优惠，减少平台抽成，也让旅程安排更灵活。</p>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="content-section narrow contact-block">
      <h2>联系</h2>
      <p>Email：your@email.com</p>
      <p>WeChat：yourwechat</p>
      <p>后续可在这里加入微信二维码、预约表单、Google Map 与多语言版本。</p>
    </section>
  );
}

function DetailPage({ room, onBack }) {
  return (
    <div>
      <div className="detail-hero" style={{ backgroundImage: `url(${placeholderImages[0]})` }}>
        <div className="overlay" />
        <div className="detail-hero-inner">
          <button className="back-button" onClick={onBack}>← 返回主页</button>
          <h1>{room.name}</h1>
          <p>{room.desc}</p>
        </div>
      </div>

      <div className="detail-wrap">
        <section className="detail-section">
          <h2>简介</h2>
          <p>{room.intro}</p>
        </section>

        <section className="detail-section">
          <h2>空间</h2>
          <div className="detail-gallery-scroll">
            {placeholderImages.map((img, i) => (
              <div key={i} className="detail-gallery-image" style={{ backgroundImage: `url(${img})` }} />
            ))}
          </div>
        </section>

        <section className="detail-section two-col">
          <div className="info-box">
            <h2>内部设备</h2>
            <ul>
              {room.facilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="info-box">
            <h2>基本信息</h2>
            <p>价格：{room.price}</p>
            <p>{room.guests}</p>
            <p>官网预订可享专属优惠</p>
          </div>
        </section>

        <section className="detail-section">
          <h2>附近观光景点</h2>
          <ul>
            {room.nearby.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="detail-section">
          <h2>进入民宿的路线图</h2>
          <div className="route-map-placeholder">地图位置（这里可替换为 Google Map 嵌入或路线图图片）</div>
          <p className="route-note">{room.route}</p>
        </section>

        <section className="detail-section booking-panel">
          <h2>直接预订</h2>
          <p>欢迎通过官网直接联系预订。老客复购可享专属优惠。</p>
          <div className="booking-actions">
            <button className="primary-button">微信预订</button>
            <button className="secondary-button">Email 咨询</button>
          </div>
        </section>
      </div>
    </div>
  );
}
