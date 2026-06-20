(async function () {
  const data = await loadData();

  document.getElementById('hero-date').textContent  = data.date + ' ' + data.time;
  document.getElementById('hero-venue').textContent = data.venue;
  document.getElementById('intro-text').textContent = data.intro;

  function timeSVG() {
    return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
  }

  function renderPieces(programIdx, containerId) {
    const prog = data.programs[programIdx];
    const container = document.getElementById(containerId);
    container.innerHTML = '<div class="piece-list">' +
      prog.pieces.map((piece, i) => {
        const num = String(i + 1).padStart(2, '0');
        const hasComment = piece.performerComment && piece.performerComment.trim();
        const hasName    = piece.performerName    && piece.performerName.trim();

        const commentBlock = hasComment ? `
          <div class="comment-block">
            <div class="comment-label">연주자 코멘트</div>
            ${hasName ? `<div class="comment-name">— ${piece.performerName}</div>` : ''}
            <div class="comment-text">${escHtml(piece.performerComment)}</div>
          </div>` : '';

        const movement = piece.movement
          ? `<div class="piece-movement">${piece.movement}</div>` : '';

        return `
          <article class="piece-card" data-id="${piece.id}">
            <div class="piece-head">
              <div class="piece-num">${num}</div>
              <div>
                <div class="piece-composer">${piece.composer}</div>
                <div class="piece-title">${piece.title}</div>
                ${movement}
              </div>
            </div>
            <div class="piece-body">
              <p class="piece-desc">${escHtml(piece.description)}</p>
            </div>
            <div class="piece-foot">
              <div class="piece-time">${timeSVG()} ${piece.estimatedTime}</div>
            </div>
            ${commentBlock}
          </article>`;
      }).join('') + '</div>';
  }

  renderPieces(0, 'panel-program1');
  renderPieces(1, 'panel-program2');

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });

  function escHtml(str) {
    return (str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }
})();
