export default function Notes() {
  return (
    <ul>
      <li>
        <h3>LCP: Largest Contentful Paint (Initial Page Loading Time)</h3>
        <h3>FID: First Input Delay</h3>
        <div>
          Solutions: reduce Javascript execution time, reduce render-blocking
          resources, reduce bundle size
        </div>
        <ul>
          <li>CDN</li>
          <li>Browser Caching of static assets/resources</li>
          <li>Reduce bundle size by: Tree Shaking (removing dead code)</li>
          <li>Code splitting & Lazy Loading</li>
          <li>Use Web worker to run expensive code in the background</li>
        </ul>
      </li>
      <li>
        <h3>CLS: Cumulative Layout Shift</h3>
      </li>
    </ul>
  );
}
