/* ============================================
   Lareware — Shared Components
   Injects nav and footer into pages.
   Each page just needs:
     <div id="nav"></div>        (top of body)
     <div id="footer"></div>     (end of body)
   ============================================ */

const COMPONENTS = {
  nav: `
<nav>
  <div class="nav-inner">
    <a href="/" class="logo">
      <div class="logo-icon">L</div>
      Lareware
    </a>
    <ul class="nav-links" id="nav-links">
      <li><a href="/tools/">Tools</a></li>
      <li><a href="/guides/">Guides</a></li>
      <li><a href="/reviews/">Gear Reviews</a></li>
      <li><a href="/about.html">About</a></li>
    </ul>
    <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu">☰</button>
    <input type="text" class="nav-search" placeholder="Search tools & guides..." aria-label="Search">
  </div>
</nav>`,

  footer: `
<footer>
  <p>© ${new Date().getFullYear()} Lareware — Built by a working sysadmin.
    <a href="/about.html">About</a> ·
    <a href="/privacy.html">Privacy</a> ·
    <a href="/rss.xml">RSS</a>
  </p>
</footer>`
};

document.addEventListener('DOMContentLoaded', () => {
  // Inject components
  for (const [id, html] of Object.entries(COMPONENTS)) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  // Mobile nav toggle
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
    });
  }
});
