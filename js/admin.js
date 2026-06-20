(function () {
  // ── Auth ──
  const overlay = document.getElementById('login-overlay');
  const loginInput = document.getElementById('login-pw');
  const loginErr = document.getElementById('login-err');

  // ── Main ──
  let data;

  if (sessionStorage.getItem('yeondeul_auth') === '1') {
    overlay.style.display = 'none';
    init();
  }

  document.getElementById('login-btn').addEventListener('click', tryLogin);
  loginInput.addEventListener('keydown', e => { if (e.key === 'Enter') tryLogin(); });

  function tryLogin() {
    if (loginInput.value === ADMIN_PW) {
      sessionStorage.setItem('yeondeul_auth', '1');
      overlay.style.display = 'none';
      init();
    } else {
      loginErr.textContent = '비밀번호가 올바르지 않습니다.';
      loginInput.value = '';
      loginInput.focus();
    }
  }

  function init() {
    data = loadData();
    renderAll();
    bindTabs();
    bindGlobalSave();
  }

  function renderAll() {
    data.programs.forEach((prog, pi) => {
      const panelId = pi === 0 ? 'admin-panel-1' : 'admin-panel-2';
      const panel = document.getElementById(panelId);
      panel.innerHTML = prog.pieces.map((piece, ci) => renderPieceForm(piece, pi, ci)).join('');
      panel.querySelectorAll('.admin-piece-head').forEach(head => {
        head.addEventListener('click', () => {
          head.closest('.admin-piece').classList.toggle('open');
        });
      });
      panel.querySelectorAll('.btn-save').forEach(btn => {
        btn.addEventListener('click', e => {
          e.stopPropagation();
          savePiece(btn.dataset.pi, btn.dataset.ci);
        });
      });
    });
    updateStatusDots();
  }

  function renderPieceForm(piece, pi, ci) {
    const num = String(ci + 1).padStart(2, '0');
    const hasComment = piece.performerComment && piece.performerComment.trim();
    const mv = piece.movement ? `<div class="admin-piece-movement-small">${piece.movement}</div>` : '';
    return `
      <div class="admin-piece" data-pi="${pi}" data-ci="${ci}">
        <div class="admin-piece-head">
          <div class="admin-piece-title-wrap">
            <div class="admin-piece-num">${num}</div>
            <div>
              <div class="admin-piece-composer">${piece.composer}</div>
              <div class="admin-piece-name">${piece.title}</div>
              ${mv}
            </div>
          </div>
          <div class="admin-status">
            <div class="status-dot ${hasComment ? 'has-comment' : ''}" data-dot="${pi}-${ci}" title="${hasComment ? '코멘트 입력됨' : '코멘트 없음'}"></div>
            <span class="admin-toggle">▾</span>
          </div>
        </div>
        <div class="admin-piece-body">
          <div class="form-group">
            <label class="form-label">곡 소개 (도슨트 텍스트)</label>
            <textarea class="form-textarea desc" id="desc-${pi}-${ci}" rows="6">${escHtml(piece.description)}</textarea>
          </div>
          <div class="form-group">
            <label class="form-label">연주자 코멘트</label>
            <textarea class="form-textarea" id="comment-${pi}-${ci}" rows="4" placeholder="이 곡에 대한 연주자의 생각이나 느낌을 자유롭게 적어주세요.">${escHtml(piece.performerComment)}</textarea>
          </div>
          <div class="save-row">
            <button class="btn-save" data-pi="${pi}" data-ci="${ci}">저장</button>
            <span class="save-msg" id="msg-${pi}-${ci}">저장되었습니다 ✓</span>
          </div>
        </div>
      </div>`;
  }

  function savePiece(pi, ci) {
    pi = parseInt(pi); ci = parseInt(ci);
    data.programs[pi].pieces[ci].description      = document.getElementById(`desc-${pi}-${ci}`).value;
    data.programs[pi].pieces[ci].performerComment = document.getElementById(`comment-${pi}-${ci}`).value;
    saveData(data);
    updateStatusDots();

    const msg = document.getElementById(`msg-${pi}-${ci}`);
    msg.classList.add('show');
    setTimeout(() => msg.classList.remove('show'), 2200);
  }

  function updateStatusDots() {
    data.programs.forEach((prog, pi) => {
      prog.pieces.forEach((piece, ci) => {
        const dot = document.querySelector(`[data-dot="${pi}-${ci}"]`);
        if (dot) {
          const hasComment = piece.performerComment && piece.performerComment.trim();
          dot.classList.toggle('has-comment', !!hasComment);
          dot.title = hasComment ? '코멘트 입력됨' : '코멘트 없음';
        }
      });
    });
  }

  function bindTabs() {
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
      });
    });
  }

  function collectAll() {
    data.programs.forEach((prog, pi) => {
      prog.pieces.forEach((piece, ci) => {
        const descEl    = document.getElementById(`desc-${pi}-${ci}`);
        const commentEl = document.getElementById(`comment-${pi}-${ci}`);
        if (descEl)    piece.description      = descEl.value;
        if (commentEl) piece.performerComment = commentEl.value;
      });
    });
  }

  function bindGlobalSave() {
    document.getElementById('btn-save-all').addEventListener('click', () => {
      collectAll();
      saveData(data);
      updateStatusDots();
      showToast('모든 내용이 저장되었습니다 ✓');
    });

    document.getElementById('btn-reset').addEventListener('click', () => {
      if (!confirm('저장된 모든 내용을 초기화하시겠습니까?\n이 작업은 되돌릴 수 없습니다.')) return;
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
    });

    // Auto-save whenever any textarea loses focus
    document.addEventListener('change', e => {
      if (e.target.matches('.form-textarea')) {
        collectAll();
        saveData(data);
        updateStatusDots();
      }
    });

    // Save all before navigating away
    window.addEventListener('beforeunload', () => {
      collectAll();
      saveData(data);
    });
  }

  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2500);
  }

  function escHtml(str) {
    return (str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
})();
