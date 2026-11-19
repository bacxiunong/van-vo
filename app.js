// Tìm hiểu vẩn vơ — lọc, tìm kiếm, dòng thời gian, xem chi tiết.
(function () {
  'use strict';
  const DATA = (window.TRUONG_PHAI || []).slice().sort((a, b) => a.batDau - b.batDau);
  const $ = (id) => document.getElementById(id);
  const state = { khuVuc: '', thoiKy: '', q: '' };

  const nam = (y) => (y < 0 ? `${-y} TCN` : `${y}`);
  const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');
  const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };

  // Tổng quan
  const minY = Math.min(...DATA.map((d) => d.batDau));
  const NOW = new Date().getFullYear();
  $('st-total').textContent = DATA.length;
  $('st-east').textContent = DATA.filter((d) => d.khuVuc === 'Đông').length;
  $('st-west').textContent = DATA.filter((d) => d.khuVuc === 'Tây').length;
  $('st-span').textContent = (NOW - minY).toLocaleString('vi-VN');

  // Dòng thời gian: trục tuyến tính từ năm sớm nhất đến nay
  const T0 = Math.floor((minY - 100) / 100) * 100;
  const pos = (y) => ((y - T0) / (NOW - T0)) * 100;
  const tl = $('timeline');
  const lanes = [];
  DATA.forEach((d) => {
    let lane = 0;
    while (lanes[lane] != null && pos(d.batDau) - lanes[lane] < 13) lane++;
    lanes[lane] = pos(d.batDau);
    const b = el('button', `tl-dot ${d.khuVuc === 'Đông' ? 'east' : 'west'}`);
    b.type = 'button';
    b.setAttribute('role', 'listitem');
    b.style.left = `${pos(d.batDau)}%`;
    b.style.top = `${lane * 34}px`;
    b.title = `${d.ten} · khoảng ${nam(d.batDau)}`;
    b.appendChild(el('span', 'tl-name', d.ten));
    b.addEventListener('click', () => openDetail(d));
    tl.appendChild(b);
  });
  tl.style.height = `${lanes.length * 34 + 16}px`;
  const axis = $('tl-axis');
  [-500, 0, 500, 1000, 1500, 2000].filter((y) => y >= T0).forEach((y) => {
    const t = el('span', 'tick', y === 0 ? 'Công nguyên' : nam(y));
    t.style.left = `${pos(y)}%`;
    axis.appendChild(t);
  });

  // Danh sách thẻ
  function matches(d) {
    if (state.khuVuc && d.khuVuc !== state.khuVuc) return false;
    if (state.thoiKy && d.thoiKy !== state.thoiKy) return false;
    if (state.q) {
      const hay = norm([d.ten, d.tenGoc, d.cauHoi, ...d.yChinh, ...d.daiDien, ...d.tuKhoa].join(' '));
      return norm(state.q).split(/\s+/).filter(Boolean).every((w) => hay.includes(w));
    }
    return true;
  }

  function render() {
    const list = DATA.filter(matches);
    const box = $('cards');
    box.replaceChildren();
    $('count').textContent = list.length ? `${list.length} trường phái` : 'Không tìm thấy trường phái nào. Thử từ khác nhé.';
    list.forEach((d) => {
      const c = el('button', 'card');
      c.type = 'button';
      const top = el('div', 'card-top');
      top.append(el('span', `badge ${d.khuVuc === 'Đông' ? 'east' : 'west'}`, `Phương ${d.khuVuc}`), el('span', 'era', `${d.thoiKy} · ${nam(d.batDau)}`));
      c.append(top, el('h3', null, d.ten), el('p', 'origin', d.tenGoc), el('p', 'q', d.cauHoi));
      const tags = el('div', 'tags');
      d.tuKhoa.forEach((k) => tags.appendChild(el('span', 'tag', k)));
      c.appendChild(tags);
      c.addEventListener('click', () => openDetail(d));
      box.appendChild(c);
    });
    // Làm mờ các mốc không khớp bộ lọc trên dòng thời gian
    const ids = new Set(list.map((d) => d.id));
    [...tl.children].forEach((b, i) => b.classList.toggle('dim', !ids.has(DATA[i].id)));
  }

  // Chi tiết
  const dlg = $('detail');
  function openDetail(d) {
    $('d-meta').textContent = `Phương ${d.khuVuc} · ${d.thoiKy} · khoảng ${nam(d.batDau)}`;
    $('d-title').textContent = d.ten;
    $('d-origin').textContent = d.tenGoc;
    $('d-question').textContent = d.cauHoi;
    const ul = $('d-ideas');
    ul.replaceChildren(...d.yChinh.map((y) => el('li', null, y)));
    $('d-people').textContent = d.daiDien.join(' · ');
    $('d-tags').replaceChildren(...d.tuKhoa.map((k) => el('span', 'tag', k)));
    if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
  }
  $('d-close').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });

  // Bộ lọc
  document.querySelectorAll('.chip').forEach((b) => b.addEventListener('click', () => {
    state.khuVuc = b.dataset.khuvuc;
    document.querySelectorAll('.chip').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    render();
  }));
  $('f-era').addEventListener('change', (e) => { state.thoiKy = e.target.value; render(); });
  let t;
  $('f-q').addEventListener('input', (e) => { clearTimeout(t); t = setTimeout(() => { state.q = e.target.value.trim(); render(); }, 150); });

  render();
})();
