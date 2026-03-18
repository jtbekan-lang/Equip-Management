/* =========================================================
   1) 備品データ＆ユーティリティ
========================================================= */
const ITEMS_DEFAULT = [
  // AV (70 items)
  { id: 1, name: "ワイヤレスセット / A", type: "daily", category: "av", capacity: 1 },
  { id: 2, name: "ワイヤレスセット / B(便利コード）", type: "daily", category: "av", capacity: 1 },
  { id: 3, name: "ワイヤレスセット / C", type: "daily", category: "av", capacity: 1 },
  { id: 4, name: "マイクスタンド / A ワイヤレス用", type: "daily", category: "av", capacity: 1 },
  { id: 5, name: "マイクスタンド / B ワイヤレス用", type: "daily", category: "av", capacity: 1 },
  { id: 6, name: "マイクスタンド / C ワイヤレス用", type: "daily", category: "av", capacity: 1 },
  { id: 7, name: "マイクスタンド / D 有線用", type: "daily", category: "av", capacity: 1 },
  { id: 8, name: "卓上マイクスタンド / ﾜｲﾔﾚｽ用", type: "daily", category: "av", capacity: 1 },
  { id: 9, name: "卓上マイクスタンド / 有線A・B用", type: "daily", category: "av", capacity: 1 },
  { id: 10, name: "卓上マイクスタンド / 有線C・D用", type: "daily", category: "av", capacity: 1 },
  { id: 11, name: "有線マイク / A", type: "daily", category: "av", capacity: 1 },
  { id: 12, name: "有線マイク / B", type: "daily", category: "av", capacity: 1 },
  { id: 13, name: "有線マイク / C", type: "daily", category: "av", capacity: 1 },
  { id: 14, name: "有線マイク / D", type: "daily", category: "av", capacity: 1 },
  { id: 15, name: "ﾏｲｸｹｰﾌﾞﾙ / A", type: "daily", category: "av", capacity: 1 },
  { id: 16, name: "ﾏｲｸｹｰﾌﾞﾙ / B", type: "daily", category: "av", capacity: 1 },
  { id: 17, name: "ﾏｲｸｹｰﾌﾞﾙ / C", type: "daily", category: "av", capacity: 1 },
  { id: 18, name: "ﾏｲｸｹｰﾌﾞﾙ / D", type: "daily", category: "av", capacity: 1 },
  { id: 19, name: "ﾏｲｸｹｰﾌﾞﾙ / E", type: "daily", category: "av", capacity: 1 },
  { id: 20, name: "ﾏｲｸｹｰﾌﾞﾙ / F", type: "daily", category: "av", capacity: 1 },
  { id: 21, name: "ﾏｲｸｹｰﾌﾞﾙ / G", type: "daily", category: "av", capacity: 1 },
  { id: 22, name: "ﾏｲｸｹｰﾌﾞﾙ / H", type: "daily", category: "av", capacity: 1 },
  { id: 23, name: "ﾏｲｸｹｰﾌﾞﾙ / I", type: "daily", category: "av", capacity: 1 },
  { id: 24, name: "ﾏｲｸｹｰﾌﾞﾙ / J", type: "daily", category: "av", capacity: 1 },
  { id: 25, name: "ﾏｲｸｹｰﾌﾞﾙ / K", type: "daily", category: "av", capacity: 1 },
  { id: 26, name: "ﾏｲｸｹｰﾌﾞﾙ / L", type: "daily", category: "av", capacity: 1 },
  { id: 27, name: "マイク用変換コネクタ / A", type: "daily", category: "av", capacity: 1 },
  { id: 28, name: "マイク用変換コネクタ / B", type: "daily", category: "av", capacity: 1 },
  { id: 29, name: "マイク用変換コネクタ / C", type: "daily", category: "av", capacity: 1 },
  { id: 30, name: "マイク用変換コネクタ / D", type: "daily", category: "av", capacity: 1 },
  { id: 31, name: "延長コード / A", type: "daily", category: "av", capacity: 1 },
  { id: 32, name: "延長コード / B", type: "daily", category: "av", capacity: 1 },
  { id: 33, name: "延長コード / C", type: "daily", category: "av", capacity: 1 },
  { id: 34, name: "延長コード / D", type: "daily", category: "av", capacity: 1 },
  { id: 35, name: "延長コード / E", type: "daily", category: "av", capacity: 1 },
  { id: 36, name: "延長コード / F", type: "daily", category: "av", capacity: 1 },
  { id: 37, name: "延長コード / G", type: "daily", category: "av", capacity: 1 },
  { id: 38, name: "延長コード / H (予備)", type: "daily", category: "av", capacity: 1 }, 
  { id: 39, name: "2股プラグ / A", type: "daily", category: "av", capacity: 1 },
  { id: 40, name: "2股プラグ / B", type: "daily", category: "av", capacity: 1 },
  { id: 41, name: "2股プラグ / C", type: "daily", category: "av", capacity: 1 },
  { id: 42, name: "2股プラグ / D", type: "daily", category: "av", capacity: 1 },
  { id: 43, name: "電源タップ / A", type: "daily", category: "av", capacity: 1 },
  { id: 44, name: "電源タップ / B", type: "daily", category: "av", capacity: 1 },
  { id: 45, name: "電源タップ / C", type: "daily", category: "av", capacity: 1 },
  { id: 46, name: "電源タップ / D", type: "daily", category: "av", capacity: 1 },
  { id: 47, name: "電源タップ / E", type: "daily", category: "av", capacity: 1 },
  { id: 48, name: "電源タップ / F", type: "daily", category: "av", capacity: 1 },
  { id: 49, name: "電源タップ / G", type: "daily", category: "av", capacity: 1 },
  { id: 50, name: "電源タップ / H", type: "daily", category: "av", capacity: 1 },
  { id: 51, name: "電源タップ / I", type: "daily", category: "av", capacity: 1 },
  { id: 52, name: "電源タップ / J", type: "daily", category: "av", capacity: 1 },
  { id: 53, name: "電源タップ / K", type: "daily", category: "av", capacity: 1 },
  { id: 54, name: "電源タップ / L", type: "daily", category: "av", capacity: 1 },
  { id: 55, name: "電源タップ / M", type: "daily", category: "av", capacity: 1 },
  { id: 56, name: "スピーカー / A", type: "daily", category: "av", capacity: 1 },
  { id: 57, name: "スピーカー / B", type: "daily", category: "av", capacity: 1 },
  { id: 58, name: "スピーカー / C", type: "daily", category: "av", capacity: 1 },
  { id: 59, name: "スピーカー / D", type: "daily", category: "av", capacity: 1 },
  { id: 60, name: "スピーカー / E", type: "daily", category: "av", capacity: 1 },
  { id: 61, name: "スピーカー / F", type: "daily", category: "av", capacity: 1 },
  { id: 62, name: "スピーカー / G", type: "daily", category: "av", capacity: 1 },
  { id: 63, name: "スピーカー / H", type: "daily", category: "av", capacity: 1 },
  { id: 64, name: "スピーカースタンド / A", type: "daily", category: "av", capacity: 1 },
  { id: 65, name: "スピーカースタンド / B", type: "daily", category: "av", capacity: 1 },
  { id: 66, name: "スピーカースタンド / C", type: "daily", category: "av", capacity: 1 },
  { id: 67, name: "スピーカースタンド / D (予備)", type: "daily", category: "av", capacity: 1 }, 
  { id: 68, name: "ポータブルスピーカー", type: "daily", category: "av", capacity: 1 },
  { id: 69, name: "床保護マット / A", type: "daily", category: "av", capacity: 1 },
  { id: 70, name: "床保護マット / B", type: "daily", category: "av", capacity: 1 },
  
  // Rearcar
  { id: 101, name: "2号車", type: "hourly", category: "rearcar", capacity: 1 },
  { id: 102, name: "3号車", type: "hourly", category: "rearcar", capacity: 1 },
  
  // Spaces
  { id: 201, name: "旧館1F", type: "hourly", category: "pipespace", capacity: 111 },
  { id: 202, name: "新館1F", type: "hourly", category: "pipespace", capacity: 30 },
  { id: 203, name: "新館2F", type: "hourly", category: "pipespace", capacity: 19 },
  { id: 301, name: "デスクスペース", type: "hourly", category: "deskspace", capacity: 4 }
];

function pad2(n){ return String(n).padStart(2,"0"); }
function ymd(date){ return `${date.getFullYear()}-${pad2(date.getMonth()+1)}-${pad2(date.getDate())}`; }
function fromYmd(s){ const [y,m,d]=s.split("-").map(Number); return new Date(y,m-1,d); }
function daysInMonth(y,m){ return new Date(y,m,0).getDate(); }
function weekdayJa(date){ return ["(日)","(月)","(火)","(水)","(木)","(金)","(土)"][date.getDay()]; }
function escapeHtml(s){ return String(s||"").replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function dayDiffInclusive(start, end){ return Math.floor((fromYmd(end).getTime()-fromYmd(start).getTime())/86400000)+1; }
function overlapsMonth(start, end, mStart, mEnd){ return !(end < mStart || start > mEnd); }

function showToast(msg, type){
  const t = document.getElementById("toast");
  t.textContent = msg; t.className = `show ${type}`;
  setTimeout(()=>t.classList.remove("show"), 3000);
}

const ITEMS_KEY = "equip_items_v4";
function loadItems(){
  let arr = [];
  try { arr = JSON.parse(localStorage.getItem(ITEMS_KEY) || "[]"); } catch(e){}
  if(!arr.length) { arr = [...ITEMS_DEFAULT]; saveItems(arr); }
  return arr.sort((a,b)=>a.id-b.id);
}
function saveItems(arr){ localStorage.setItem(ITEMS_KEY, JSON.stringify(arr)); }
let ITEMS_DATA = loadItems();
function findItem(id){ return ITEMS_DATA.find(x=>x.id==id); }

/* =========================================================
   2) 予約データ管理
========================================================= */
const STORAGE_KEY = "equip_reservations_v4";
function loadReservations(){ return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); }
function saveReservations(arr){ localStorage.setItem(STORAGE_KEY, JSON.stringify(arr)); }
function normalizeStatus(s){ return ["reserved","loan","returned"].includes(s) ? s : "reserved"; }
function statusLabel(s){ s=normalizeStatus(s); return s==="loan"?"貸出中":s==="returned"?"返却済":"予約"; }

/* =========================================================
   3) 描画・UI
========================================================= */
// ★ グローバル変数：現在のカテゴリ
let currentCategory = "av"; 

const monthPicker = document.getElementById("monthPicker");
const grid = document.getElementById("grid");

function getSelectedMonth(){
  const v = monthPicker.value || ymd(new Date()).slice(0,7);
  const [y,m] = v.split("-").map(Number);
  return {year:y, month:m};
}

function renderAll(){
  const cat = currentCategory;
  const isAv = (cat === "av");
  
  const limitPill = document.getElementById("limitPill");
  if(isAv) limitPill.textContent = "予約可能：翌月末まで(1日単位)";
  else if(cat==="rearcar") limitPill.textContent = "予約可能：1ヶ月先月末まで(時間)";
  else limitPill.textContent = "予約可能：3ヶ月先月末まで(時間)";

  document.getElementById("gridTitle").textContent = isAv ? "日 × 備品" : "日付 × 備品(場所)";

  renderStats(cat);
  if(isAv) renderDailyGrid(); else renderHourlyGrid(cat);
  renderList();
  
  requestAnimationFrame(ensureDoubleScroll);
}

// 【日単位】予約表
function renderDailyGrid(){
  const {year, month} = getSelectedMonth();
  const dim = daysInMonth(year, month);
  const items = ITEMS_DATA.filter(i => i.category === "av"); 
  const resList = loadReservations();

  let thead = `<tr><th class="daily-sticky">備品</th>`;
  for(let d=1; d<=dim; d++){
    const dt = new Date(year, month-1, d);
    thead += `<th>${d}<br><span style="font-size:10px">${weekdayJa(dt)}</span></th>`;
  }
  thead += `</tr>`;

  let tbody = "";
  items.forEach((it, idx) => {
    const displayNum = pad2(idx + 1);
    const displayName = `<span style="font-size:11px; color:var(--muted); margin-right:6px; font-weight:bold;">${displayNum}.</span>${it.name}`;
    
    tbody += `<tr><td class="daily-sticky">${displayName}</td>`;
    for(let d=1; d<=dim; d++){
      const dateStr = `${year}-${pad2(month)}-${pad2(d)}`;
      const res = resList.find(r => r.itemId == it.id && r.date === dateStr);
      
      if(res){
        const isStart = (res.startDate === dateStr || d===1);
        const overdue = (res.status==="loan" && res.endDate < ymd(new Date())) ? "overdue" : "";
        let cellText = "";
        if(isStart) {
          cellText = res.slipNo || "";
          if(res.quantity > 1) cellText += ` (${res.quantity})`;
        }
        
        tbody += `<td class="cell ${res.status} ${overdue}" onclick="openModal('${res.id}')" title="数量: ${res.quantity||1}\n団体: ${res.group}\n期間: ${res.startDate}~${res.endDate}">${escapeHtml(cellText)}</td>`;
      } else {
        tbody += `<td class="cell" onclick="openNewModal(${it.id}, '${dateStr}')"></td>`;
      }
    }
    tbody += `</tr>`;
  });

  grid.innerHTML = `<thead>${thead}</thead><tbody>${tbody}</tbody>`;
}

// 【時間単位】予約表 (結合対応＋自動スクロール対応)
function renderHourlyGrid(category){
  const {year, month} = getSelectedMonth();
  const dim = daysInMonth(year, month);
  const items = ITEMS_DATA.filter(i => i.category === category);
  const resList = loadReservations();
  const isSpace = (category === "pipespace" || category === "deskspace");
  const todayStr = ymd(new Date());

  let thead = `<tr><th class="hourly-sticky-date">日付</th><th class="hourly-sticky-item">場所/備品</th>`;
  for(let h=9; h<=21; h++) {
    thead += `<th>${h}:00</th>`; 
  }
  thead += `</tr>`;

  let tbody = "";
  let hasToday = false; // 今日の行が存在するか

  for(let d=1; d<=dim; d++){
    const dateStr = `${year}-${pad2(month)}-${pad2(d)}`;
    const dt = new Date(year, month-1, d);
    const isToday = (dateStr === todayStr);
    
    items.forEach((it, idx) => {
      let colorClass = isToday ? "bg-row-today" : (idx % 2 === 0 ? "bg-row-a" : "bg-row-b");

      // 今日の先頭行にIDを付与してスクロールの目印にする
      const rowIdStr = (isToday && idx === 0) ? `id="today-row"` : "";
      tbody += `<tr class="${colorClass}" ${rowIdStr}>`;
      
      if(idx === 0) {
        if(isToday) hasToday = true;
        tbody += `<td class="hourly-sticky-date" rowspan="${items.length}">${d} ${weekdayJa(dt)}</td>`;
      }
      tbody += `<td class="hourly-sticky-item">${it.name}</td>`;

      let skipUntil = 0; // セル結合用スキップカウンタ

      for(let h=9; h<=21; h++){
        if (h < skipUntil) continue; // 結合されたセル部分はスキップ

        const hourStr = `${pad2(h)}:00`;
        const nextHourStr = `${pad2(h+1)}:00`;
        
        // その時間帯に存在する予約を取得
        const overlaps = resList.filter(r => r.itemId == it.id && r.date === dateStr && (r.startTime < nextHourStr && r.endTime > hourStr));

        if(overlaps.length > 0){
          // セルの結合数(colspan)を計算
          let colspan = 1;
          const baseResId = overlaps[0].id; // 代表の予約ID
          const statuses = overlaps.map(r=>r.status);
          const status = statuses.includes("loan") ? "loan" : statuses.includes("reserved") ? "reserved" : "returned";
          const overdue = overlaps.some(r => r.status==="loan" && dateStr <= todayStr && r.endTime < pad2(new Date().getHours())+":00") ? "overdue" : "";

          for(let nextH = h+1; nextH <= 21; nextH++) {
              const checkHourStr = `${pad2(nextH)}:00`;
              const checkNextHourStr = `${pad2(nextH+1)}:00`;
              const nextOverlaps = resList.filter(r => r.itemId == it.id && r.date === dateStr && (r.startTime < checkNextHourStr && r.endTime > checkHourStr));
              
              if(nextOverlaps.some(r => r.id === baseResId)) {
                  colspan++;
              } else {
                  break; // 途切れたら終了
              }
          }

          skipUntil = h + colspan; // 描画をスキップする次の時間

          // テキスト生成
          let slipText = overlaps.map(r => r.slipNo).filter(Boolean).join(", ");
          let cellText = "";
          if (isSpace) {
             const totalQty = overlaps.reduce((sum, r) => sum + (Number(r.quantity)||1), 0);
             if(slipText) cellText = `${slipText} (${totalQty}/${it.capacity || 1})`;
             else cellText = `(${totalQty}/${it.capacity || 1})`;
          } else {
             cellText = slipText; // 開始時間のみ表示しなくて済む（結合されるため）
          }
          
          const titles = overlaps.map(r => `団体: ${r.group} (${r.quantity||1}個) ${r.startTime}~${r.endTime}`).join("\n");
          tbody += `<td colspan="${colspan}" class="cell ${status} ${overdue}" onclick="openModal('${baseResId}')" title="${titles}" style="text-align:center;">${escapeHtml(cellText)}</td>`;
        } else {
          tbody += `<td class="cell ${colorClass}" onclick="openNewModal(${it.id}, '${dateStr}', '${hourStr}')"></td>`;
        }
      }
      tbody += `</tr>`;
    });
  }
  grid.innerHTML = `<thead>${thead}</thead><tbody>${tbody}</tbody>`;

  // ★自動スクロール実行 (描画完了後に少し遅らせて実行)
  if(hasToday) {
    setTimeout(() => {
        const todayRow = document.getElementById('today-row');
        const scrollContainer = document.getElementById('gridScroll');
        if (todayRow && scrollContainer) {
            scrollContainer.scrollTop = todayRow.offsetTop - 60; // ヘッダー分少しオフセット
        }
    }, 50);
  }
}

// サマリー計算
function renderStats(cat){
  const items = ITEMS_DATA.filter(i => i.category === cat);
  const statsGrid = document.getElementById("statsGrid");
  statsGrid.innerHTML = "";

  if(cat === "av") {
    let total = items.length;
    let used = 0, loan = 0;
    const today = ymd(new Date());
    loadReservations().forEach(r => {
      if(!items.find(i=>i.id == r.itemId)) return;
      if(r.date === today || (r.startDate <= today && today <= r.endDate)){
        used++;
        if(r.status==="loan") loan++;
      }
    });
    const avail = Math.max(0, total - used);
    const { overdue: od } = countDueToday();

    statsGrid.innerHTML = `
      <div class="statCard"><div><div class="statTitle">総備品数</div><div class="statValue">${total}</div></div><div class="iconWrap blue"><svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg></div></div>
      <div class="statCard"><div><div class="statTitle">本日利用可能</div><div class="statValue">${avail}</div></div><div class="iconWrap green"><svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><path d="M20 6 9 17l-5-5"></path></svg></div></div>
      <div class="statCard"><div><div class="statTitle">貸出中（本日）</div><div class="statValue">${loan}</div></div><div class="iconWrap amber"><svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v6l4 2"></path></svg></div></div>
      <div class="statCard"><div><div class="statTitle">期限超過</div><div class="statValue">${od}</div></div><div class="iconWrap red"><svg viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg></div></div>
    `;
  } else {
    const today = ymd(new Date());
    const nowHour = pad2(new Date().getHours()) + ":00";
    const unit = (cat === "pipespace" || cat === "deskspace") ? "脚(個)" : "台";

    items.forEach(it => {
        let loan = 0;
        loadReservations().forEach(r => {
            if(r.itemId === it.id && r.date === today && r.status === "loan") {
               if(r.startTime <= nowHour && nowHour < r.endTime) loan += (Number(r.quantity) || 1);
            }
        });
        const avail = Math.max(0, (it.capacity || 1) - loan);

        statsGrid.innerHTML += `
        <div class="statCard" style="display:block;">
            <div class="statTitle" style="color:var(--primary); font-weight:800; border-bottom:1px solid var(--border); padding-bottom:6px; margin-bottom:8px;">${it.name}</div>
            <div style="display:flex; justify-content:space-between; align-items:flex-end;">
               <div>
                 <div style="font-size:11.5px; color:var(--muted);">現在利用可能</div>
                 <div class="statValue" style="font-size:26px; color:var(--ok);">${avail}<span style="font-size:13px; color:var(--text); font-weight:600;"> / ${it.capacity||1}</span></div>
               </div>
               <div style="text-align:right; font-size:12.5px; color:var(--muted);">
                 現在貸出中: <span style="font-weight:bold; color:var(--warn);">${loan}</span> ${unit}
               </div>
            </div>
        </div>`;
    });
  }
}

let syncFlags = { top:false, bot:false };
function ensureDoubleScroll(){
  const t = document.getElementById("topScroll"), ti = document.getElementById("topScrollInner"), b = document.getElementById("gridScroll");
  ti.style.width = b.scrollWidth + "px";
  t.onscroll = () => { if(!syncFlags.top){ syncFlags.bot=true; b.scrollLeft = t.scrollLeft; } syncFlags.top=false; };
  b.onscroll = () => { if(!syncFlags.bot){ syncFlags.top=true; t.scrollLeft = b.scrollLeft; } syncFlags.bot=false; };
}

const listBody = document.getElementById("listBody");
const searchInput = document.getElementById("searchInput");
let listRowPayload = new Map();

function renderList(){
  const {year, month} = getSelectedMonth();
  const mStart = `${year}-${pad2(month)}-01`, mEnd = `${year}-${pad2(month)}-${pad2(daysInMonth(year, month))}`;
  const q = searchInput.value.trim().toLowerCase();
  
  const uniq = new Map();
  loadReservations().forEach(r => {
    if(!overlapsMonth(r.startDate, r.endDate, mStart, mEnd)) return;
    const it = findItem(r.itemId);
    
    // ★ リスト表示も現在のカテゴリと連動させる
    if(!it || it.category !== currentCategory) return;

    const iname = (it?it.name:"").toLowerCase();
    if(q && !iname.includes(q) && !(r.group||"").toLowerCase().includes(q) && !(r.slipNo||"").toLowerCase().includes(q)) return;

    const key = it && it.category==="av" ? `${r.itemId}_${r.startDate}_${r.endDate}_${r.group}` : `${r.itemId}_${r.date}_${r.startTime}_${r.endTime}_${r.group}`;
    if(!uniq.has(key)) uniq.set(key, {...r, ids: [r.id]});
    else uniq.get(key).ids.push(r.id);
  });

  listBody.innerHTML = "";
  listRowPayload.clear();

  Array.from(uniq.values()).sort((a,b)=>a.startDate.localeCompare(b.startDate) || a.itemId-b.itemId).forEach(r => {
    const it = findItem(r.itemId);
    const tr = document.createElement("tr");
    
    let timeStr = "";
    if(it && it.category === "av") timeStr = r.startDate===r.endDate ? r.startDate : `${r.startDate} ~ ${r.endDate}`;
    else timeStr = `${r.date} ${r.startTime}~${r.endTime}`;

    const cb = document.createElement("input"); cb.type="checkbox";
    cb.onchange = () => { if(cb.checked) listSelectedKeys.add(r.id); else listSelectedKeys.delete(r.id); updateListUI(); };
    cb.checked = listSelectedKeys.has(r.id);
    listRowPayload.set(r.id, r.ids);

    tr.innerHTML = `
      <td></td>
      <td>${timeStr}</td>
      <td>${it?it.name:"不明"}</td>
      <td>${r.quantity || 1}</td>
      <td>${escapeHtml(r.group)}</td>
      <td>${escapeHtml(r.slipNo)}</td>
      <td><span class="badge ${r.status}">${statusLabel(r.status)}</span></td>
      <td>
        <button class="statusBtn loan small" ${r.status==="loan"?"disabled":""} onclick="applyStatus(['${r.ids.join("','")}'], 'loan')">貸出</button>
        <button class="statusBtn returned small" ${r.status==="returned"?"disabled":""} onclick="applyStatus(['${r.ids.join("','")}'], 'returned')">返却</button>
      </td>
      <td><button class="statusBtn small" onclick="openModal('${r.ids[0]}')">詳細</button></td>
    `;
    tr.cells[0].appendChild(cb);
    listBody.appendChild(tr);
  });
  updateListUI();
}

function updateListUI(){
  const n = listSelectedKeys.size;
  document.getElementById("listSelPill").textContent = `選択：${n}件`;
  document.getElementById("batchLoanBtn").disabled = (n===0);
  document.getElementById("batchReturnBtn").disabled = (n===0);
}

function applyStatus(ids, status){
  let list = loadReservations();
  list.forEach(r => { if(ids.includes(r.id)) r.status = status; });
  saveReservations(list);
  renderAll();
  showToast(`状態を「${statusLabel(status)}」に変更しました`, "ok");
}

document.getElementById("batchLoanBtn").onclick = () => {
  let ids = []; listSelectedKeys.forEach(k => ids.push(...listRowPayload.get(k)));
  if(confirm(`${ids.length}セルの状態を貸出中にしますか？`)) applyStatus(ids, "loan");
};
document.getElementById("batchReturnBtn").onclick = () => {
  let ids = []; listSelectedKeys.forEach(k => ids.push(...listRowPayload.get(k)));
  if(confirm(`${ids.length}セルの状態を返却済にしますか？`)) applyStatus(ids, "returned");
};

let listSelectedKeys = new Set();
document.getElementById("listSelectAllBtn").onclick = () => { listRowPayload.forEach((v,k)=>listSelectedKeys.add(k)); renderList(); };
document.getElementById("listClearSelBtn").onclick = () => { listSelectedKeys.clear(); renderList(); };
searchInput.oninput = renderList;

const modal = document.getElementById("modal");
let editingIds = [];
let modalSelectedItemIds = new Set();

function openNewModal(itemId, dateStr, hourStr = "09:00"){
  editingIds = [];
  document.getElementById("modalMsg").textContent = "";
  populateModalSelects();
  
  const it = findItem(itemId);
  document.getElementById("modalTitle").textContent = `${dateStr} の新規予約`;
  document.getElementById("modalItem").value = itemId;
  document.getElementById("modalStart").value = dateStr;
  document.getElementById("modalEnd").value = dateStr;
  document.getElementById("modalStartTime").value = hourStr;
  document.getElementById("modalEndTime").value = pad2(parseInt(hourStr)+1)+":00";
  document.getElementById("modalGroup").value = "";
  document.getElementById("modalQuantity").value = "1";
  document.getElementById("modalSlip").value = "";
  document.getElementById("modalStatus").value = "reserved";
  
  toggleModalInputs(it.category);
  document.getElementById("modalDelete").style.display = "none";
  document.getElementById("modalMulti").checked = false;
  document.getElementById("multiWrap").style.display = "none";
  modalSelectedItemIds = new Set([itemId]);
  
  modal.showModal();
}

function openModal(id){
  const res = loadReservations().find(r => r.id === id);
  if(!res) return;
  editingIds = loadReservations().filter(r => r.itemId==res.itemId && r.startDate==res.startDate && r.endDate==res.endDate && r.group==res.group).map(r=>r.id);
  
  document.getElementById("modalMsg").textContent = "";
  populateModalSelects();
  
  const it = findItem(res.itemId);
  document.getElementById("modalTitle").textContent = `予約編集`;
  document.getElementById("modalItem").value = res.itemId;
  document.getElementById("modalStart").value = res.startDate;
  document.getElementById("modalEnd").value = res.endDate;
  document.getElementById("modalStartTime").value = res.startTime;
  document.getElementById("modalEndTime").value = res.endTime;
  document.getElementById("modalGroup").value = res.group;
  document.getElementById("modalQuantity").value = res.quantity || 1;
  document.getElementById("modalSlip").value = res.slipNo;
  document.getElementById("modalStatus").value = res.status;
  
  toggleModalInputs(it.category);
  document.getElementById("modalDelete").style.display = "block";
  document.getElementById("multiContainer").style.display = "none";
  
  modal.showModal();
}

function toggleModalInputs(cat){
  const isAv = (cat === "av");
  document.getElementById("dailyInputs").style.display = isAv ? "block" : "none";
  document.getElementById("hourlyInputs").style.display = isAv ? "none" : "flex";
  document.getElementById("multiContainer").style.display = "block";
}

function populateModalSelects(){
  const sel = document.getElementById("modalItem");
  sel.innerHTML = "";
  ITEMS_DATA.forEach(it => { sel.innerHTML += `<option value="${it.id}">${it.name}</option>`; });
}

document.getElementById("modalMulti").onchange = (e) => {
  document.getElementById("multiWrap").style.display = e.target.checked ? "block" : "none";
  renderMultiList();
};
function renderMultiList(){
  const listEl = document.getElementById("multiList");
  const q = document.getElementById("multiSearch").value.trim().toLowerCase();
  const baseItem = findItem(document.getElementById("modalItem").value);
  listEl.innerHTML = "";
  ITEMS_DATA.filter(it => it.category === baseItem.category && (it.name.toLowerCase().includes(q))).forEach(it => {
    const lbl = document.createElement("label"); lbl.style.cssText = "display:flex; gap:10px; background:#fff; padding:8px; border-radius:8px; border:1px solid var(--border);";
    const cb = document.createElement("input"); cb.type="checkbox"; cb.style.width="auto"; cb.checked = modalSelectedItemIds.has(it.id);
    cb.onchange = () => { if(cb.checked) modalSelectedItemIds.add(it.id); else modalSelectedItemIds.delete(it.id); };
    lbl.append(cb, it.name); listEl.appendChild(lbl);
  });
}
document.getElementById("multiSearch").oninput = renderMultiList;
document.getElementById("multiAllBtn").onclick = () => { ITEMS_DATA.filter(i=>i.category===findItem(document.getElementById("modalItem").value).category).forEach(i=>modalSelectedItemIds.add(i.id)); renderMultiList(); };
document.getElementById("multiClearBtn").onclick = () => { modalSelectedItemIds.clear(); modalSelectedItemIds.add(Number(document.getElementById("modalItem").value)); renderMultiList(); };
document.getElementById("modalItem").onchange = (e) => { toggleModalInputs(findItem(e.target.value).category); modalSelectedItemIds.add(Number(e.target.value)); renderMultiList(); };

document.getElementById("modalSave").onclick = () => {
  const msg = document.getElementById("modalMsg");
  const baseItem = findItem(document.getElementById("modalItem").value);
  const start = document.getElementById("modalStart").value;
  const end = baseItem.category==="av" ? document.getElementById("modalEnd").value : start;
  const st = baseItem.category==="av" ? "09:00" : document.getElementById("modalStartTime").value;
  const et = baseItem.category==="av" ? "21:00" : document.getElementById("modalEndTime").value;
  const group = document.getElementById("modalGroup").value.trim();
  const quantity = parseInt(document.getElementById("modalQuantity").value) || 1;
  const slipNo = document.getElementById("modalSlip").value.trim();
  const status = document.getElementById("modalStatus").value;
  
  if(!group) return msg.textContent = "団体名を入れてください";
  if(baseItem.category!=="av" && (st>=et)) return msg.textContent = "正しい時間を入力してください";
  if(dayDiffInclusive(start, end) > 7) return msg.textContent = "最大7日までです";

  let list = loadReservations();
  if(editingIds.length) list = list.filter(r => !editingIds.includes(r.id));

  const targetIds = document.getElementById("modalMulti").checked ? Array.from(modalSelectedItemIds) : [baseItem.id];
  let conflict = false;
  let conflictMsg = "すでに他の予約と被っています";

  targetIds.forEach(id => {
    let cur = fromYmd(start), endD = fromYmd(end);
    const it = findItem(id);
    const cap = it.capacity || 1;
    
    while(cur.getTime() <= endD.getTime()){
      const d = ymd(cur);
      const overlaps = list.filter(r => r.itemId==id && r.date===d && r.startTime<et && r.endTime>st);
      
      let maxConcurrent = 0;
      let hStr = st;
      while(hStr < et) {
          const usedNow = overlaps.filter(r => r.startTime <= hStr && r.endTime > hStr).reduce((sum, r) => sum + (Number(r.quantity)||1), 0);
          if (usedNow > maxConcurrent) maxConcurrent = usedNow;
          
          let [hh, mm] = hStr.split(":").map(Number);
          mm += 30; if(mm>=60){ hh++; mm-=60; }
          hStr = `${pad2(hh)}:${pad2(mm)}`;
      }
      
      if (maxConcurrent + quantity > cap) {
          conflict = true;
          if (cap === 1) conflictMsg = "すでに他の予約がその時間帯に入っています。";
          else conflictMsg = `その時間帯は空きが足りません（残り ${cap - maxConcurrent} 個/脚）。`;
      }
      cur.setDate(cur.getDate()+1);
    }
  });

  if(conflict) return msg.textContent = conflictMsg;

  const now = new Date().toISOString();
  targetIds.forEach(id => {
    let cur = fromYmd(start), endD = fromYmd(end);
    while(cur.getTime() <= endD.getTime()){
      list.push({ id: "res_"+Math.random().toString(36).substr(2,9), itemId: id, date: ymd(cur), startDate: start, endDate: end, startTime: st, endTime: et, group, quantity, slipNo, status, createdAt: now });
      cur.setDate(cur.getDate()+1);
    }
  });

  saveReservations(list);
  modal.close();
  renderAll();
  showToast("保存しました", "ok");
};

document.getElementById("modalDelete").onclick = () => {
  if(!confirm("本当に削除しますか？")) return;
  let list = loadReservations().filter(r => !editingIds.includes(r.id));
  saveReservations(list);
  modal.close(); renderAll(); showToast("削除しました", "ok");
};

document.getElementById("modalCancel").onclick = () => modal.close();
document.getElementById("closeModalBtn").onclick = () => modal.close();

const itemsModal = document.getElementById("itemsModal");
document.getElementById("itemsBtn").onclick = () => { renderItemsTable(); itemsModal.showModal(); };
document.getElementById("closeItemsModal").onclick = () => itemsModal.close();
document.getElementById("itemsClose2").onclick = () => itemsModal.close();

function renderItemsTable(){
  const tbody = document.getElementById("itemsTbody"); tbody.innerHTML = "";
  // 備品管理のリスト表示も現在のカテゴリと連動する
  ITEMS_DATA.filter(it => it.category === currentCategory).forEach(it => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>#${it.id}</td>
      <td><input type="text" value="${it.name}" id="iname_${it.id}" style="padding:4px;"></td>
      <td><input type="number" value="${it.capacity||1}" id="icap_${it.id}" style="padding:4px; width:60px;"></td>
      <td><button onclick="updateItemData(${it.id})">保存</button></td>
    `;
    tbody.appendChild(tr);
  });
}

// 変更がグローバルに適用されるよう window に紐付け
window.updateItemData = function(id){
  const nm = document.getElementById("iname_"+id).value.trim();
  const cap = parseInt(document.getElementById("icap_"+id).value) || 1;
  if(!nm) return alert("空欄は不可です");
  const it = ITEMS_DATA.find(i=>i.id==id);
  it.name = nm; it.capacity = cap;
  saveItems(ITEMS_DATA);
  renderAll(); showToast("備品情報を更新しました", "ok");
}

document.getElementById("addItemBtn").onclick = () => {
  const nm = document.getElementById("newItemName").value.trim();
  const cap = parseInt(document.getElementById("newItemCapacity").value) || 1;
  const cat = document.getElementById("newItemCategory").value;
  if(!nm) return;
  const newId = Math.max(...ITEMS_DATA.map(i=>i.id)) + 1;
  ITEMS_DATA.push({ id: newId, name: nm, type: cat==="av"?"daily":"hourly", category: cat, capacity: cap });
  saveItems(ITEMS_DATA);
  document.getElementById("newItemName").value = "";
  document.getElementById("newItemCapacity").value = "";
  
  // 追加したカテゴリへ自動的に遷移して表示
  document.querySelector(`.catbtn[data-cat="${cat}"]`).click(); 
  renderItemsTable(); 
  showToast("備品を追加しました", "ok");
};

const clearModal = document.getElementById("clearModal");
document.getElementById("clearBtn").onclick = () => { document.getElementById("clearMonth").value=ymd(new Date()).slice(0,7); clearModal.showModal(); };
document.getElementById("closeClearModal").onclick = () => clearModal.close();
document.getElementById("clearCancelBtn").onclick = () => clearModal.close();

document.getElementById("clearAllBtn").onclick = () => {
  if(confirm("本当に全データを削除しますか？(復旧不可)")){
    saveReservations([]); renderAll(); clearModal.close(); showToast("全データを削除しました", "ok");
  }
};
document.getElementById("clearDoBtn").onclick = () => {
  const m = document.getElementById("clearMonth").value;
  if(!m) return;
  const cutoff = m + "-31"; 
  if(!confirm(`${m} までのデータを削除しますか？`)) return;
  const next = loadReservations().filter(r => r.endDate > cutoff || r.date > cutoff);
  saveReservations(next); renderAll(); clearModal.close(); showToast("期限までのデータを削除しました", "ok");
};

function countDueToday(){
  const today = ymd(new Date());
  let due = 0, overdue = 0;
  loadReservations().forEach(r => {
    if(r.status==="loan" && r.endDate === today) due++;
    if(r.status==="loan" && r.endDate < today) overdue++;
  });
  return {due, overdue};
}

// 初期化
(function init(){
  // タブの切り替え処理
  document.querySelectorAll(".tabbtn[data-tab]").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".tabbtn[data-tab]").forEach(b=>b.classList.remove("active"));
      document.querySelectorAll(".tabpane").forEach(p=>p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
      if(btn.dataset.tab === "tabGrid") ensureDoubleScroll();
    };
  });
  
  // カテゴリボタンの切り替え処理
  document.querySelectorAll(".catbtn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".catbtn").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.cat; // グローバル変数を更新
      renderAll();
    };
  });
  
  monthPicker.value = ymd(new Date()).slice(0,7);
  monthPicker.onchange = renderAll;
  
  renderAll();
})();
