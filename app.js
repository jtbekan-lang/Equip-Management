/* =========================================================
   1) 備品データ＆ユーティリティ
========================================================= */
const avNames = [
  "ワイヤレスセットA（マイク1･2）", "ワイヤレスセットB（マイク1･2）", "ワイヤレスセットC（マイク1･2）",
  "マイクスタンドA（ワイヤレス用）", "マイクスタンドB（ワイヤレス用）", "マイクスタンドC（ワイヤレス用）",
  "マイクスタンドD（有線用）", "卓上マイクスタンド（ワイヤレス用）", "卓上マイクスタンド（有線A・B用）",
  "卓上マイクスタンド（有線C・D用）", "有線マイクA", "有線マイクB", "有線マイクC", "有線マイクD",
  "有線マイクE", "/", "拡声器A", "拡声器B", "拡声器C", "マイク延長コードA",
  "マイク延長コードB", "ワイヤレスセット用便利コードA", "ワイヤレスセット用便利コードB",
  "CD・MDデッキ", "CD・SD・USBデッキ", "CDデッキ", "液晶プロジェクターA（Type-C,HDMI,VGA対応）",
  "液晶プロジェクターB（Type-C,HDMI,VGA対応）", "液晶プロジェクターC（HDMI,VGA対応）",
  "デジタルビデオカメラ小（SDカード）", "デジタルビデオカメラ小（DVテープ）", "デジタルビデオカメラ大（DVテープ）",
  "デジタルビデオカメラ小（SDタイプSD付属なし）", "デジタルカメラ", "三脚", "スクリーン",
  "延長コードリールA（30ｍ）", "延長コードリールB（30ｍ）", "延長コードリールC（30ｍ）",
  "延長コードリールD（30ｍ）", "延長コードリールE（30ｍ）", "延長コードリールF（30ｍ）",
  "延長コード（3ｍ）", "延長コード（5ｍ）", "延長コード（10ｍ）", "巻尺（30ｍ）", "巻尺（50ｍ）",
  "ブル-シートA（5ｍ×3.2ｍ）", "ブル-シートB（5ｍ×3.2ｍ）", "ブル-シートC（4ｍ×3.2ｍ）",
  "暗幕A（194×251ｃｍ）", "暗幕B（186×245ｃｍ）", "暗幕C（186×245ｃｍ）", "暗幕D（234×320ｃｍ）",
  "暗幕E（予備・穴あり）", "テーブルカバーA（180×68ｃｍ,45cm/60cm机用）", "テーブルカバーB（180×68ｃｍ,45cm/60cm机用）",
  "テーブルカバーC（180×68ｃｍ,45cm/60cm机用）", "テーブルカバーD（180×68ｃｍ,45cm/60cm机用）",
  "テーブルカバーE（180×68ｃｍ,45cm/60cm机用）", "指示棒", "レーザーポインター",
  "ほうきちりとりセットA", "ほうきちりとりセットB", "掃除機A", "掃除機B",
  "多機能スピーカー（大）", "ポータブルスピーカー", "床保護マットA", "床保護マットB"
];

const ITEMS_DEFAULT = [];
avNames.forEach((name, index) => {
    let id = index + 1;
    let paddedId = String(id).padStart(2, '0');
    ITEMS_DEFAULT.push({ id: id, name: `#${paddedId} ${name}`, type: "daily", category: "av", capacity: 1 });
});
ITEMS_DEFAULT.push(
  { id: 101, name: "2号車", type: "hourly", category: "rearcar", capacity: 1 },
  { id: 102, name: "3号車", type: "hourly", category: "rearcar", capacity: 1 },
  { id: 201, name: "旧館1F", type: "hourly", category: "pipespace", capacity: 111 },
  { id: 202, name: "新館1F", type: "hourly", category: "pipespace", capacity: 30 },
  { id: 203, name: "新館2F", type: "hourly", category: "pipespace", capacity: 19 },
  { id: 301, name: "デスクスペース", type: "hourly", category: "deskspace", capacity: 1 } 
);

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

function getLimitDate(category) {
  const d = new Date();
  if(category === "av" || category === "rearcar") d.setMonth(d.getMonth() + 2, 0); 
  else d.setMonth(d.getMonth() + 4, 0); 
  return d;
}

function getLimitText(category) {
  const d = getLimitDate(category);
  return `${d.getMonth()+1}月${d.getDate()}日`;
}

const ITEMS_KEY = "equip_items_v6"; 
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
  const tabBtn = document.getElementById("tabListBtn");
  
  if(cat === "av") {
      limitPill.textContent = `予約可能：1ヶ月先の月末（${getLimitText(cat)}）まで`;
      tabBtn.textContent = "貸出中備品一覧";
  } else if(cat === "rearcar") {
      limitPill.textContent = `予約可能：1ヶ月先の月末（${getLimitText(cat)}）まで`;
      tabBtn.textContent = "貸出中台数一覧";
  } else if(cat === "pipespace") {
      limitPill.textContent = `予約可能：3ヶ月先の月末（${getLimitText(cat)}）まで`;
      tabBtn.textContent = "貸出中脚数一覧";
  } else {
      limitPill.textContent = `予約可能：3ヶ月先の月末（${getLimitText(cat)}）まで`;
      tabBtn.textContent = "貸出中台数一覧";
  }

  document.getElementById("gridTitle").textContent = isAv ? "日 × 備品" : "日付 × 備品(場所)";

  renderStats(cat);
  if(isAv) renderDailyGrid(); else renderHourlyGrid(cat);
  renderList();
  
  requestAnimationFrame(ensureDoubleScroll);
}

function renderDailyGrid(){
  const {year, month} = getSelectedMonth();
  const dim = daysInMonth(year, month);
  const items = ITEMS_DATA.filter(i => i.category === "av"); 
  const resList = loadReservations();

  let thead = `<tr><th class="daily-sticky">備品</th>`;
  for(let d=1; d<=dim; d++){
    const dt = new Date(year, month-1, d);
    let dayClass = dt.getDay()===6 ? "text-sat bg-sat" : dt.getDay()===0 ? "text-sun bg-sun" : "";
    thead += `<th class="${dayClass}">${d}<br><span style="font-size:10px">${weekdayJa(dt)}</span></th>`;
  }
  thead += `</tr>`;

  let tbody = "";
  items.forEach((it, idx) => {
    const displayName = `<span style="font-size:10px;">${it.name}</span>`;
    
    tbody += `<tr><td class="daily-sticky">${displayName}</td>`;
    
    let skipUntil = 0; 
    for(let d=1; d<=dim; d++){
      if(d < skipUntil) continue; 
      
      const dateStr = `${year}-${pad2(month)}-${pad2(d)}`;
      const res = resList.find(r => r.itemId == it.id && r.date === dateStr);
      const dt = new Date(year, month-1, d);
      const bgClass = dt.getDay()===6 ? "bg-sat" : dt.getDay()===0 ? "bg-sun" : "";
      
      if(res){
        let colspan = 1;
        for(let nextD = d+1; nextD <= dim; nextD++) {
            const nextDateStr = `${year}-${pad2(month)}-${pad2(nextD)}`;
            const nextRes = resList.find(r => r.itemId == it.id && r.date === nextDateStr && r.startDate === res.startDate && r.endDate === res.endDate && r.group === res.group);
            if(nextRes) colspan++; else break; 
        }
        skipUntil = d + colspan;

        const overdue = (res.status==="loan" && res.endDate < ymd(new Date())) ? "overdue" : "";
        let cellText = [res.slipNo, res.group].filter(Boolean).join("・");
        
        tbody += `<td colspan="${colspan}" class="cell ${bgClass} ${res.status} ${overdue}" onclick="openModal('${res.id}')" title="数量: ${res.quantity||1}\n団体: ${res.group}\n期間: ${res.startDate}~${res.endDate}">${escapeHtml(cellText)}</td>`;
      } else {
        tbody += `<td class="cell ${bgClass}" onclick="openNewModal(${it.id}, '${dateStr}')"></td>`;
      }
    }
    tbody += `</tr>`;
  });

  grid.innerHTML = `<thead>${thead}</thead><tbody>${tbody}</tbody>`;
}

function renderHourlyGrid(category){
  const {year, month} = getSelectedMonth();
  const dim = daysInMonth(year, month);
  const items = ITEMS_DATA.filter(i => i.category === category);
  const resList = loadReservations();
  const todayStr = ymd(new Date());

  const timeSlots = [];
  for(let h=9; h<=20; h++) {
    timeSlots.push(`${pad2(h)}:00`);
    timeSlots.push(`${pad2(h)}:30`);
  }
  timeSlots.push("21:00"); 

  let thead = `<tr><th class="hourly-sticky-date">日付</th><th class="hourly-sticky-item">場所/備品</th>`;
  for(let i=0; i<timeSlots.length-1; i++) {
    thead += `<th>${timeSlots[i]}</th>`; 
  }
  thead += `</tr>`;

  let tbody = "";
  let hasToday = false; 

  for(let d=1; d<=dim; d++){
    const dateStr = `${year}-${pad2(month)}-${pad2(d)}`;
    const dt = new Date(year, month-1, d);
    const isSat = dt.getDay() === 6;
    const isSun = dt.getDay() === 0;
    const isToday = (dateStr === todayStr);
    
    items.forEach((it, idx) => {
      let colorClass = isToday ? "bg-row-today" : isSat ? "bg-sat" : isSun ? "bg-sun" : (idx % 2 === 0 ? "bg-row-a" : "bg-row-b");

      const rowIdStr = (isToday && idx === 0) ? `id="today-row"` : "";
      tbody += `<tr class="${colorClass}" ${rowIdStr}>`;
      
      if(idx === 0) {
        if(isToday) hasToday = true;
        let dayTxtClass = isSat ? "text-sat" : isSun ? "text-sun" : "";
        tbody += `<td class="hourly-sticky-date ${dayTxtClass}" rowspan="${items.length}">${d} ${weekdayJa(dt)}</td>`;
      }
      tbody += `<td class="hourly-sticky-item">${it.name}</td>`;

      let skipUntil = 0; 

      for(let i=0; i<timeSlots.length-1; i++){
        if (i < skipUntil) continue; 

        const hourStr = timeSlots[i];
        const nextHourStr = timeSlots[i+1];
        
        const overlaps = resList.filter(r => r.itemId == it.id && r.date === dateStr && (r.startTime < nextHourStr && r.endTime > hourStr));

        if(overlaps.length > 0){
          let colspan = 1;
          const baseResId = overlaps[0].id; 
          const statuses = overlaps.map(r=>r.status);
          const status = statuses.includes("loan") ? "loan" : statuses.includes("reserved") ? "reserved" : "returned";
          
          const nowTimeStr = pad2(new Date().getHours())+":"+pad2(new Date().getMinutes());
          const overdue = overlaps.some(r => r.status==="loan" && dateStr <= todayStr && r.endTime <= nowTimeStr) ? "overdue" : "";

          for(let j = i+1; j < timeSlots.length-1; j++) {
              const checkHourStr = timeSlots[j];
              const checkNextHourStr = timeSlots[j+1];
              const nextOverlaps = resList.filter(r => r.itemId == it.id && r.date === dateStr && (r.startTime < checkNextHourStr && r.endTime > checkHourStr));
              
              if(nextOverlaps.some(r => r.id === baseResId)) {
                  colspan++;
              } else {
                  break; 
              }
          }

          skipUntil = i + colspan; 

          let slipText = overlaps.map(r => r.slipNo).filter(Boolean).join(", ");
          let groupText = overlaps.map(r => r.group).filter(Boolean).join(", ");
          let cellText = "";
          
          if (category === "pipespace") {
             const totalQty = overlaps.reduce((sum, r) => sum + (Number(r.quantity)||1), 0);
             cellText = slipText ? `${slipText} (${totalQty}脚/${it.capacity || 1}脚)` : `(${totalQty}脚/${it.capacity || 1}脚)`;
          } else {
             cellText = [slipText, groupText].filter(Boolean).join("・"); 
          }
          
          let unit = (category === "pipespace") ? "脚" : (category === "deskspace" || category === "rearcar") ? "台" : "個";
          const titles = overlaps.map(r => `団体: ${r.group} (${r.quantity||1}${unit}) ${r.startTime}~${r.endTime}`).join("\n");
          tbody += `<td colspan="${colspan}" class="cell ${status} ${overdue}" onclick="openModal('${baseResId}')" title="${titles}" style="text-align:center;">${escapeHtml(cellText)}</td>`;
        } else {
          tbody += `<td class="cell ${colorClass}" onclick="openNewModal(${it.id}, '${dateStr}', '${hourStr}')"></td>`;
        }
      }
      tbody += `</tr>`;
    });
  }
  grid.innerHTML = `<thead>${thead}</thead><tbody>${tbody}</tbody>`;

  if(hasToday) {
    setTimeout(() => {
        const todayRow = document.getElementById('today-row');
        const scrollContainer = document.getElementById('gridScroll');
        if (todayRow && scrollContainer) {
            scrollContainer.scrollTop = todayRow.offsetTop - 60; 
        }
    }, 50);
  }
}

function renderStats(cat){
  const items = ITEMS_DATA.filter(i => i.category === cat);
  const statsGrid = document.getElementById("statsGrid");
  statsGrid.innerHTML = "";

  if(cat === "av") {
    let total = items.length;
    const today = ymd(new Date());
    
    const usedItems = new Set();
    const loanItems = new Set();

    loadReservations().forEach(r => {
      if(r.date === today && items.some(i => i.id == r.itemId)){
        usedItems.add(r.itemId);
        if(r.status === "loan") loanItems.add(r.itemId);
      }
    });

    let used = usedItems.size;
    let loan = loanItems.size;
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
    const nowHour = pad2(new Date().getHours()) + ":" + pad2(new Date().getMinutes());
    const unit = (cat === "pipespace") ? "脚" : (cat === "deskspace" || cat === "rearcar") ? "台" : "個";

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
                 現在貸出中: <span style="font-weight:bold; color:var(--warn);">${loan}</span> <span style="color:#0f172a; font-weight:bold;">${unit}</span>
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
  
  // ▼ 変更点：チェックボックスがONかどうかを取得
  const onlyUnreturned = document.getElementById("filterUnreturned").checked;
  
  const uniq = new Map();
  loadReservations().forEach(r => {
    if(!overlapsMonth(r.startDate, r.endDate, mStart, mEnd)) return;
    
    // ▼ 変更点：「未返却のみ表示」がONの時は「貸出中（loan）」以外を除外
    if(onlyUnreturned && r.status !== "loan") return;

    const it = findItem(r.itemId);
    
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

    let unit = (it && it.category === "pipespace") ? "脚" : (it && (it.category === "deskspace" || it.category === "rearcar")) ? "台" : "個";

    tr.innerHTML = `
      <td></td>
      <td>${timeStr}</td>
      <td>${it?it.name:"不明"}</td>
      <td>${r.quantity || 1} <span style="color:#0f172a; font-weight:bold;">${unit}</span></td>
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

// ▼ 変更点：検索欄の文字入力だけでなく、チェックボックスのON/OFFでもリストを更新する
searchInput.oninput = renderList;
document.getElementById("filterUnreturned").onchange = renderList;

const modal = document.getElementById("modal");
let editingIds = [];
let modalSelectedItemIds = new Set();

function openNewModal(itemId, dateStr, hourStr = "09:00"){
  const it = findItem(itemId);
  
  const limitDate = getLimitDate(it.category);
  const selectedDate = fromYmd(dateStr);
  if (selectedDate > limitDate) {
      showToast(`予約可能期限（${getLimitText(it.category)}）を過ぎているため予約できません`, "error");
      return;
  }

  editingIds = [];
  document.getElementById("modalMsg").textContent = "";
  
  document.getElementById("modalTitle").textContent = `${dateStr} の新規予約`;
  document.getElementById("modalItem").value = itemId; 
  document.getElementById("modalItemNameDisplay").textContent = it.name; 
  
  document.getElementById("modalStart").value = dateStr;
  document.getElementById("modalEnd").value = dateStr;
  document.getElementById("modalStartTime").value = hourStr;
  
  let [hh, mm] = hourStr.split(":").map(Number);
  mm += 30; if(mm>=60){ hh++; mm-=60; }
  document.getElementById("modalEndTime").value = `${pad2(hh)}:${pad2(mm)}`;
  
  document.getElementById("modalGroup").value = "";
  document.getElementById("modalQuantity").value = "1";
  document.getElementById("modalQuantity").max = it.capacity || 1; 
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
  
  const it = findItem(res.itemId);
  document.getElementById("modalTitle").textContent = `予約編集`;
  document.getElementById("modalItem").value = res.itemId;
  document.getElementById("modalItemNameDisplay").textContent = it.name;
  
  document.getElementById("modalStart").value = res.startDate;
  document.getElementById("modalEnd").value = res.endDate;
  document.getElementById("modalStartTime").value = res.startTime;
  document.getElementById("modalEndTime").value = res.endTime;
  document.getElementById("modalGroup").value = res.group;
  document.getElementById("modalQuantity").value = res.quantity || 1;
  document.getElementById("modalQuantity").max = it.capacity || 1; 
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
  document.getElementById("multiContainer").style.display = isAv ? "block" : "none";

  if(cat === "pipespace") {
      document.getElementById("quantityContainer").style.display = "block";
      document.getElementById("modalUnit").textContent = "脚";
  } else {
      document.getElementById("quantityContainer").style.display = "none";
  }
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

document.getElementById("modalSave").onclick = () => {
  const msg = document.getElementById("modalMsg");
  const baseItem = findItem(document.getElementById("modalItem").value);
  const start = document.getElementById("modalStart").value;
  const end = baseItem.category==="av" ? document.getElementById("modalEnd").value : start;
  const st = baseItem.category==="av" ? "09:00" : document.getElementById("modalStartTime").value;
  const et = baseItem.category==="av" ? "21:00" : document.getElementById("modalEndTime").value;
  const group = document.getElementById("modalGroup").value.trim();
  const slipNo = document.getElementById("modalSlip").value.trim();
  const status = document.getElementById("modalStatus").value;
  
  if(!group) return msg.textContent = "団体名を入れてください";
  if(!slipNo) return msg.textContent = "伝票番号を入れてください";
  if(baseItem.category!=="av" && (st>=et)) return msg.textContent = "正しい時間を入力してください";
  if(dayDiffInclusive(start, end) > 7) return msg.textContent = "最大7日までです";

  const limitDate = getLimitDate(baseItem.category);
  if(fromYmd(start) > limitDate || fromYmd(end) > limitDate) {
      return msg.textContent = `予約可能期限（${getLimitText(baseItem.category)}）を過ぎています`;
  }

  if(baseItem.category !== "av") {
      if(st < "09:00" || et > "21:00" || (st === "21:00" && et > "21:00")) {
          if(!confirm("時間外の施設利用ですが、本当によろしいでしょうか？")) return;
      }
  }

  let quantity = 1;
  if(baseItem.category === "pipespace") {
      quantity = parseInt(document.getElementById("modalQuantity").value) || 1;
      if (quantity > baseItem.capacity) return msg.textContent = `数量は最大 ${baseItem.capacity} 脚までです`;
  }

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
          else conflictMsg = `その時間帯は空きが足りません（残り ${cap - maxConcurrent} 脚）。`;
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

document.getElementById("itemsBtn").onclick = () => { 
  document.getElementById("addItemSection").style.display = (currentCategory === "av") ? "block" : "none";
  renderItemsTable(); 
  itemsModal.showModal(); 
};

document.getElementById("closeItemsModal").onclick = () => itemsModal.close();
document.getElementById("itemsClose2").onclick = () => itemsModal.close();

function renderItemsTable(){
  const tbody = document.getElementById("itemsTbody"); tbody.innerHTML = "";
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

(function init(){
  const timeSelects = [document.getElementById("modalStartTime"), document.getElementById("modalEndTime")];
  let timeOptionsHTML = "";
  for(let h=0; h<=23; h++){
    timeOptionsHTML += `<option value="${pad2(h)}:00">${pad2(h)}:00</option>`;
    timeOptionsHTML += `<option value="${pad2(h)}:30">${pad2(h)}:30</option>`;
  }
  timeSelects.forEach(sel => sel.innerHTML = timeOptionsHTML);

  document.querySelectorAll(".tabbtn[data-tab]").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".tabbtn[data-tab]").forEach(b=>b.classList.remove("active"));
      document.querySelectorAll(".tabpane").forEach(p=>p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
      if(btn.dataset.tab === "tabGrid") ensureDoubleScroll();
    };
  });
  
  document.querySelectorAll(".catbtn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".catbtn").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.cat; 
      renderAll();
    };
  });
  
  monthPicker.value = ymd(new Date()).slice(0,7);
  monthPicker.onchange = renderAll;
  
  renderAll();
})();
