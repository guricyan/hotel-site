import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="not-found">
      <p className="eyebrow">404</p>
      <h1>这里暂时没有这一页</h1>
      <p>可能是链接发生了变化，也可能是页面还在准备中。</p>
      <Link className="button primary" to="/">返回首页</Link>
    </section>
  );
}
