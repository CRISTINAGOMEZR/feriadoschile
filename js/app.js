// ===================== STATE =====================
let currentYear = 2026;
let currentView = 'lista';
let currentMes = 'todos';
let showSandwich = true;
const today = new Date(); today.setHours(0,0,0,0);

// ===================== SEASON =====================
function getSeason(m){
  if(m===11||m<=1)return'verano';
  if(m<=4)return'otono';
  if(m<=7)return'invierno';
  return'primavera';
}
function matchesSeason(a,season){return a.temporada==='todo-el-año'||a.temporada===season;}

// ===================== SANDWICH CALC =====================
function addDays(d,n){const r=new Date(d);r.setDate(r.getDate()+n);return r;}
function isFeriado(d,feriados){return feriados.some(f=>f.fecha.toDateString()===d.toDateString());}
function isFDS(d){return d.getDay()===0||d.getDay()===6;}

function calcSW(feriados){
  const sw=[];
  for(const f of feriados){
    const dw=f.fecha.getDay();
    if(dw===2){const l=addDays(f.fecha,-1);if(!isFeriado(l,feriados)&&!isFDS(l)&&!sw.some(s=>s.toDateString()===l.toDateString()))sw.push(l);}
    if(dw===4){const v=addDays(f.fecha,1);if(!isFeriado(v,feriados)&&!isFDS(v)&&!sw.some(s=>s.toDateString()===v.toDateString()))sw.push(v);}
    for(const f2 of feriados){
      if(f2===f)continue;
      const diff=Math.round((f2.fecha-f.fecha)/86400000);
      if(diff===2){const mid=addDays(f.fecha,1);if(!isFDS(mid)&&!isFeriado(mid,feriados)&&!sw.some(s=>s.toDateString()===mid.toDateString()))sw.push(mid);}
    }
  }
  return sw;
}

function isSandwichAdj(d,sandwiches){
  const dw=d.getDay();
  if(dw===4)return sandwiches.some(s=>s.toDateString()===addDays(d,1).toDateString());
  if(dw===2)return sandwiches.some(s=>s.toDateString()===addDays(d,-1).toDateString());
  return false;
}

// ===================== COUNTER ANIM =====================
function animCount(el,target){
  el.textContent='0';
  let cur=0;const step=Math.max(1,Math.ceil(target/25));
  const iv=setInterval(()=>{cur=Math.min(cur+step,target);el.textContent=cur;if(cur>=target)clearInterval(iv);},45);
}

// ===================== SET YEAR =====================
function setYear(yr){
  currentYear=yr;
  currentMes='todos';

  [2025,2026,2027].forEach(y=>{
    document.getElementById('yr-'+y).classList.toggle('active',y===yr);
    document.getElementById('hy-'+y).classList.toggle('active',y===yr);
  });

  document.getElementById('heroYear').textContent=yr;
  document.getElementById('heroEl').style.background=HERO_GRADIENTS[yr];

  document.getElementById('page-home').classList.add('year-fade');
  setTimeout(()=>document.getElementById('page-home').classList.remove('year-fade'),400);

  renderAll();
  showPage('home');
}

function renderAll(){
  const {feriados,regionales}=DATA[currentYear];
  const allSandwiches=calcSW(feriados);
  const sandwiches=showSandwich?allSandwiches:[];

  // Stats with x/Y format
  const isCurrentYear=(currentYear===today.getFullYear());
  const totalFeriados=feriados.length;
  const totalSW=allSandwiches.length;

  if(isCurrentYear){
    const remaining=feriados.filter(f=>f.fecha>=today).length;
    const swRemaining=allSandwiches.filter(s=>s>=today).length;
    animCount(document.getElementById('c-total'),remaining);
    document.getElementById('c-total-frac').textContent='/'+totalFeriados;
    document.getElementById('lbl-total').innerHTML='feriados<br>restantes';
    animCount(document.getElementById('c-sw'),swRemaining);
    document.getElementById('c-sw-frac').textContent='/'+totalSW;
    document.getElementById('lbl-sw').innerHTML='sandwich<br>restantes';
  } else {
    animCount(document.getElementById('c-total'),totalFeriados);
    document.getElementById('c-total-frac').textContent='';
    document.getElementById('lbl-total').innerHTML='feriados<br>este año';
    animCount(document.getElementById('c-sw'),totalSW);
    document.getElementById('c-sw-frac').textContent='';
    document.getElementById('lbl-sw').innerHTML='días<br>sandwich';
  }

  // Próximo
  const prox=feriados.filter(f=>f.fecha>=today).sort((a,b)=>a.fecha-b.fecha)[0];
  const proxWrap=document.querySelector('.proximo-wrap');
  if(prox&&isCurrentYear){
    proxWrap.style.display='block';
    const diff=Math.round((prox.fecha-today)/86400000);
    document.getElementById('p-nombre').textContent=prox.nombre+(prox.irr?' · Irrenunciable':'');
    document.getElementById('p-fecha').textContent=DIAS[prox.fecha.getDay()]+', '+prox.fecha.getDate()+' de '+MESES_F[prox.fecha.getMonth()]+' de '+currentYear;
    document.getElementById('p-dias').textContent=diff===0?'Hoy':diff;
    document.getElementById('p-txt').textContent=diff===0?'¡Es hoy!':'días restantes';
    document.getElementById('p-tag').textContent='Próximo feriado';
  } else if(!isCurrentYear){
    proxWrap.style.display='block';
    const primero=feriados.slice().sort((a,b)=>a.fecha-b.fecha)[0];
    document.getElementById('p-tag').textContent='Primer feriado '+currentYear;
    document.getElementById('p-nombre').textContent=primero.nombre+(primero.irr?' · Irrenunciable':'');
    document.getElementById('p-fecha').textContent=DIAS[primero.fecha.getDay()]+', '+primero.fecha.getDate()+' de '+MESES_F[primero.fecha.getMonth()]+' de '+currentYear;
    document.getElementById('p-dias').textContent=feriados.length;
    document.getElementById('p-txt').textContent='feriados en total';
  } else {
    proxWrap.style.display='none';
  }

  // Sandwich desc
  const swNames=allSandwiches.slice().sort((a,b)=>a-b).map(s=>DIAS[s.getDay()].substring(0,3)+' '+s.getDate()+' '+MESES[s.getMonth()]);
  document.getElementById('sw-desc').innerHTML='Son días hábiles "atrapados" entre un feriado y el fin de semana, o entre dos feriados. Pedir ese día libre alarga el descanso con poco costo de vacaciones. En <strong>'+currentYear+'</strong> hay <strong>'+allSandwiches.length+' día'+(allSandwiches.length!==1?'s sandwich':'sandwich')+'</strong>'+(swNames.length?': '+swNames.join(', ')+'.':' detectados.');

  // Regionales — render as f-cards
  const regGrid=document.getElementById('regGrid');
  regGrid.innerHTML='';
  regionales.forEach(r=>{
    const parts=r.fecha.split(' ');
    const dow=parts[0],day=parts[1],mes=parts[2];
    regGrid.innerHTML+=`<div class="f-card regional"><div class="f-fecha"><div class="d">${day}</div><div class="m">${mes}</div><div class="w">${dow}</div></div><div class="f-info"><div class="nombre">${r.nombre}</div><div class="f-tags"><span class="tag-pill tp-reg">Regional</span></div><div class="ley">${r.region} · <a href="${r.leyUrl}" target="_blank">${r.ley}</a></div></div></div>`;
  });

  buildMesTabs(feriados);
  renderActividades('todos');

  if(currentView==='lista')renderList('todos',feriados,sandwiches);
  else if(currentView==='mes')renderList(currentMes,feriados,sandwiches);
  else renderCal(feriados,sandwiches);
}

// ===================== SANDWICH TOGGLE =====================
function toggleSandwich(){
  showSandwich=!showSandwich;
  document.getElementById('swToggle').classList.toggle('active',showSandwich);
  const {feriados}=DATA[currentYear];
  const sandwiches=showSandwich?calcSW(feriados):[];
  if(currentView==='lista')renderList('todos',feriados,sandwiches);
  else if(currentView==='mes')renderList(currentMes,feriados,sandwiches);
  else renderCal(feriados,sandwiches);
}

// ===================== MES TABS =====================
function buildMesTabs(feriados){
  const mesTabsEl=document.getElementById('mesTabs');
  mesTabsEl.innerHTML='';
  const mesesConF=[...new Set(feriados.map(f=>f.fecha.getMonth()))];

  const btnT=document.createElement('button');
  btnT.className='mes-tab'+(currentMes==='todos'?' active':'');
  btnT.textContent='Todos';btnT.dataset.m='todos';
  btnT.onclick=()=>{currentMes='todos';const sw=showSandwich?calcSW(DATA[currentYear].feriados):[];renderList('todos',DATA[currentYear].feriados,sw);updateMesTabs('todos');};
  mesTabsEl.appendChild(btnT);

  for(let m=0;m<12;m++){
    const b=document.createElement('button');
    b.className='mes-tab'+(mesesConF.includes(m)?' has':'')+(currentMes===m?' active':'');
    b.textContent=MESES_F[m];b.dataset.m=String(m);
    b.onclick=(()=>{const mm=m;return()=>{currentMes=mm;const sw=showSandwich?calcSW(DATA[currentYear].feriados):[];renderList(mm,DATA[currentYear].feriados,sw);updateMesTabs(mm);};})();
    mesTabsEl.appendChild(b);
  }
}

function updateMesTabs(active){
  document.querySelectorAll('.mes-tab').forEach(b=>b.classList.toggle('active',b.dataset.m===String(active)));
}

// ===================== VIEW =====================
function setView(v){
  currentView=v;
  ['lista','mes','cal'].forEach(x=>document.getElementById('vb-'+x).classList.toggle('active',v===x));
  document.getElementById('mesTabs').style.display=(v==='mes')?'flex':'none';
  document.getElementById('listView').style.display=(v==='cal')?'none':'flex';
  document.getElementById('calView').style.display=(v==='cal')?'block':'none';
  const {feriados}=DATA[currentYear];
  const sandwiches=showSandwich?calcSW(feriados):[];
  if(v==='lista'){currentMes='todos';renderList('todos',feriados,sandwiches);updateMesTabs('todos');}
  else if(v==='mes')renderList(currentMes,feriados,sandwiches);
  else renderCal(feriados,sandwiches);
}

// ===================== LIST RENDER =====================
function renderList(mes,feriados,sandwiches){
  const grid=document.getElementById('listView');
  grid.style.flexDirection='column';grid.style.gap='9px';
  let lista=feriados;
  if(mes!=='todos')lista=feriados.filter(f=>f.fecha.getMonth()===parseInt(mes));
  document.getElementById('pill-count').textContent=lista.length+' feriados';
  grid.innerHTML='';

  // Merge feriados + sandwich days into one sorted list
  const swFiltered=mes==='todos'?sandwiches:sandwiches.filter(s=>s.getMonth()===parseInt(mes));
  const combined=[
    ...lista.map(f=>({...f,_kind:'feriado'})),
    ...swFiltered.map(s=>({fecha:s,_kind:'sandwich'}))
  ].sort((a,b)=>a.fecha-b.fecha);

  combined.forEach(item=>{
    const card=document.createElement('div');
    if(item._kind==='feriado'){
      const f=item;
      const pasado=f.fecha<today;
      const diff=Math.round((f.fecha-today)/86400000);
      let cdTxt='',cdCls='';
      if(diff===0){cdTxt='Hoy';cdCls='hoy';}
      else if(diff>0&&diff<=14){cdTxt='En '+diff+' días';cdCls='pronto';}
      else if(diff>0)cdTxt='En '+diff+' días';
      else cdTxt='Ya pasó';
      card.className='f-card'+(pasado?' pasado':'');
      card.innerHTML='<div class="f-fecha"><div class="d">'+f.fecha.getDate()+'</div><div class="m">'+MESES[f.fecha.getMonth()]+'</div><div class="w">'+DIAS[f.fecha.getDay()].substring(0,3)+'</div></div><div class="f-info"><div class="nombre">'+f.nombre+'</div><div class="f-tags">'+(f.irr?'<span class="tag-pill tp-i">Irrenunciable</span>':'')+(diff===0?'<span class="tag-pill tp-h">Hoy</span>':'')+'</div><div class="ley">'+f.ley+'</div></div><div class="f-right"><div class="f-countdown '+cdCls+'">'+cdTxt+'</div></div>';
    } else {
      const s=item;
      const pasado=s.fecha<today;
      card.className='sw-day-card'+(pasado?' pasado':'');
      card.innerHTML='<div class="f-fecha"><div class="d">'+s.fecha.getDate()+'</div><div class="m">'+MESES[s.fecha.getMonth()]+'</div><div class="w">'+DIAS[s.fecha.getDay()].substring(0,3)+'</div></div><div class="f-info"><div class="nombre">Día sandwich</div><div class="f-tags"><span class="tag-pill tp-s">Sandwich</span></div><div class="ley">Pide este día libre — 4 días de descanso usando 1 de vacaciones</div></div>';
    }
    grid.appendChild(card);
  });
}

// ===================== CALENDAR =====================
function renderCal(feriados,sandwiches){
  const calView=document.getElementById('calView');
  calView.innerHTML='<div style="display:flex;gap:16px;flex-wrap:wrap;margin-bottom:16px;font-size:12px;font-weight:700;color:var(--muted);align-items:center"><span><span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:var(--azul-m);margin-right:4px;vertical-align:middle"></span>Civil</span><span><span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:var(--rojo);margin-right:4px;vertical-align:middle"></span>Religioso</span><span><span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:#FEF3C7;border:1.5px solid #F39C12;margin-right:4px;vertical-align:middle"></span>Día sandwich</span><span><span style="display:inline-block;width:12px;height:12px;border-radius:50%;border:2px solid var(--verde);margin-right:4px;vertical-align:middle"></span>Hoy</span></div><div class="cal-grid" id="calGrid"></div>';
  const grid=document.getElementById('calGrid');
  const feriadoSet={};feriados.forEach(f=>{feriadoSet[f.fecha.toDateString()]={...f};});
  const swSet={};sandwiches.forEach(s=>{swSet[s.toDateString()]=true;});

  for(let mes=0;mes<12;mes++){
    const firstDay=new Date(currentYear,mes,1);
    const lastDay=new Date(currentYear,mes+1,0);
    const startDow=(firstDay.getDay()+6)%7;
    const mFer=feriados.filter(f=>f.fecha.getMonth()===mes);
    const div=document.createElement('div');div.className='cal-month';
    div.innerHTML='<div class="cal-month-title">'+MESES_F[mes]+(mFer.length?'<span class="fcount">'+mFer.length+'</span>':'')+'</div><div class="cal-dow"><span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span><span>D</span></div><div class="cal-days" id="cd-'+mes+'"></div>';
    grid.appendChild(div);
    const daysEl=document.getElementById('cd-'+mes);
    for(let i=0;i<startDow;i++){const e=document.createElement('div');e.className='cal-day empty';e.textContent='.';daysEl.appendChild(e);}
    for(let d=1;d<=lastDay.getDate();d++){
      const fecha=new Date(currentYear,mes,d);
      const key=fecha.toDateString();
      const dw=fecha.getDay();
      const esFDS=(dw===0||dw===6);
      const esFer=feriadoSet[key];
      const esSW=swSet[key];
      const esHoy=fecha.toDateString()===today.toDateString();
      const el=document.createElement('div');
      let cls='cal-day';
      if(esFDS)cls+=' fds';
      if(esFer)cls+=' feriado '+esFer.tipo+' cal-tooltip';
      if(esSW&&!esFer)cls+=' sandwich-day cal-tooltip';
      if(esHoy)cls+=' hoy-day';
      el.className=cls;el.textContent=d;
      if(esFer)el.dataset.tip=esFer.nombre;
      if(esSW&&!esFer)el.dataset.tip='Día sandwich';
      daysEl.appendChild(el);
    }
  }
}

// ===================== ACTIVIDADES =====================
function getActsForCat(c,season,min){
  const primary=ACTIVIDADES.filter(a=>(c==='todos'||a.cat===c)&&matchesSeason(a,season));
  if(primary.length>=min)return primary;
  const fallback=ACTIVIDADES.filter(a=>(c==='todos'||a.cat===c)&&!primary.includes(a));
  return[...primary,...fallback].slice(0,Math.max(primary.length,min));
}

function renderActividades(cat){
  const season=getSeason(today.getMonth());
  const filtersEl=document.getElementById('actFilters');
  const seasonEl=document.getElementById('actsSeason');
  const grid=document.getElementById('actsGrid');

  const allCats=['todos',...Object.keys(CAT_LABELS)];
  const catLabels={todos:'Todos',...CAT_LABELS};
  const visibleCats=allCats.filter(c=>c==='todos'||ACTIVIDADES.some(a=>a.cat===c&&matchesSeason(a,season)));

  if(!visibleCats.includes(cat))cat='todos';

  filtersEl.innerHTML='';
  visibleCats.forEach(c=>{
    const b=document.createElement('button');
    b.className='act-filter'+(c===cat?' active':'');
    b.textContent=catLabels[c];
    b.onclick=()=>renderActividades(c);
    filtersEl.appendChild(b);
  });

  seasonEl.textContent=SEASON_LABEL[season]+' · mostrando lo mejor para esta temporada';

  const lista=getActsForCat(cat,season,3);
  grid.innerHTML='';
  lista.forEach(a=>{
    const color=CAT_COLORS[a.cat]||'var(--azul)';
    const card=document.createElement('div');
    card.className='act-card';
    card.innerHTML=`<div class="act-top"><span class="act-cat" style="background:${color}">${CAT_LABELS[a.cat]}</span><div class="act-nombre">${a.nombre}</div><div class="act-lugar">${a.ubicacion}</div></div><div class="act-body"><div class="act-desc">${a.desc}</div><a class="act-link" href="${a.url}" target="_blank">Ver más →</a></div>`;
    grid.appendChild(card);
  });
}

// ===================== NAV =====================
function showPage(p){
  document.querySelectorAll('.page').forEach(el=>el.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(el=>el.classList.remove('active'));
  document.getElementById('page-'+p).classList.add('active');
  document.getElementById('nl-'+p).classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  closeMenu();
}
function toggleFaq(btn){btn.parentElement.classList.toggle('open');}

// NAV-01: Menú hamburguesa
function toggleMenu(){
  const ham=document.getElementById('hamburger');
  const nav=document.getElementById('navLinks');
  const overlay=document.getElementById('navOverlay');
  const isOpen=nav.classList.contains('open');
  if(isOpen){closeMenu();}
  else{
    nav.classList.add('open');
    ham.classList.add('open');
    overlay.classList.add('open');
    ham.setAttribute('aria-expanded','true');
    document.body.style.overflow='hidden';
  }
}
function closeMenu(){
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('navOverlay').classList.remove('open');
  document.getElementById('hamburger').setAttribute('aria-expanded','false');
  document.body.style.overflow='';
}

// NAV-04: Botón volver arriba
window.addEventListener('scroll',()=>{
  document.getElementById('backToTop').classList.toggle('visible',window.scrollY>300);
});

// ===================== CONFETTI =====================
const confEl=document.getElementById('confetti');
const colors=['#FFD93D','#FF5C5C','#4A8FE7','#2ECC71','#FF8C42','#fff'];
for(let i=0;i<28;i++){
  const d=document.createElement('div');d.className='confetti-dot';
  const size=Math.random()*12+4;
  d.style.cssText='width:'+size+'px;height:'+size+'px;left:'+Math.random()*100+'%;top:'+Math.random()*100+'%;background:'+colors[Math.floor(Math.random()*colors.length)]+';animation-duration:'+(8+Math.random()*14)+'s;animation-delay:'+Math.random()*8+'s';
  confEl.appendChild(d);
}

// ===================== INIT =====================
renderAll();
