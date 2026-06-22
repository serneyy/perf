const rawDays=[
 {date:'2026-06-13',label:'13. 6.',revenue:1052.38,netSales:900.84,orders:9,aov:100.093,spend:250.75,metaRoas:.97,ctr:2,cpm:4.07,clicks:1232,impressions:61681,metaPurchases:1,cr:.5738880918220947,sessions:697,bei:59},
 {date:'2026-06-14',label:'14. 6.',revenue:1140.37,netSales:943.6,orders:15,aov:62.906,spend:338.73,metaRoas:1.97,ctr:1.76,cpm:4.01,clicks:1481,impressions:84380,metaPurchases:9,cr:1.2853470437017995,sessions:778,bei:69},
 {date:'2026-06-15',label:'15. 6.',revenue:1561.54,netSales:1261.46,orders:17,aov:79.575,spend:315.6,metaRoas:4.72,ctr:1.75,cpm:3.83,clicks:1442,impressions:82312,metaPurchases:14,cr:1.5463917525773196,sessions:776,bei:96},
 {date:'2026-06-16',label:'16. 6.',revenue:630.66,netSales:545.25,orders:7,aov:81.851,spend:379.21,metaRoas:.75,ctr:1.8,cpm:4.23,clicks:1611,impressions:89591,metaPurchases:3,cr:.5793742757821553,sessions:863,bei:34},
 {date:'2026-06-17',label:'17. 6.',revenue:792.25,netSales:618.79,orders:10,aov:61.879,spend:412.09,metaRoas:1.96,ctr:1.73,cpm:4.62,clicks:1546,impressions:89258,metaPurchases:11,cr:.9142857142857144,sessions:875,bei:43},
 {date:'2026-06-18',label:'18. 6.',revenue:948.31,netSales:767.19,orders:9,aov:88.851,spend:330.47,metaRoas:2.45,ctr:1.55,cpm:4.95,clicks:1033,impressions:66717,metaPurchases:8,cr:1.078582434514638,sessions:649,bei:55},
 {date:'2026-06-19',label:'19. 6.',revenue:345.22,netSales:262.83,orders:7,aov:37.547,spend:214.82,metaRoas:.79,ctr:1.48,cpm:5.19,clicks:614,impressions:41392,metaPurchases:3,cr:.6651884700665188,sessions:451,bei:27},
 {date:'2026-06-20',label:'20. 6.',revenue:1080.01,netSales:934.05,orders:10,aov:93.405,spend:221.41,metaRoas:1.38,ctr:1.57,cpm:5.21,clicks:669,impressions:42521,metaPurchases:4,cr:1.4675052410901468,sessions:477,bei:68},
 {date:'2026-06-21',label:'21. 6.',revenue:202.82,netSales:159.38,orders:6,aov:52.673,spend:272.69,metaRoas:.68,ctr:1.74,cpm:5.08,clicks:935,impressions:53633,metaPurchases:3,cr:.8849557522123894,sessions:565,bei:21},
 {date:'2026-06-22',label:'22. 6.',revenue:761.06,netSales:625.52,orders:9,aov:69.502,spend:231.81,metaRoas:1.14,ctr:1.67,cpm:5.54,clicks:697,impressions:41806,metaPurchases:6,cr:1.1131725417439703,sessions:539,bei:54},
 {date:'2026-06-23',label:'23. 6.',revenue:48.92,netSales:32.47,orders:1,aov:32.47,spend:6.98,metaRoas:null,ctr:1.70,cpm:5.65,clicks:21,impressions:1236,metaPurchases:null,cr:6.25,sessions:16,bei:null,partial:true,metaPartial:true}
];
const campaigns=[
 {name:'[DE] - DABA - A+',spend:726.58,roas:1.22,ctr:1.45,cpm:6.39},
 {name:'[DE] - VIDEO - A+ - ai v1',spend:224.65,roas:.93,ctr:1.62,cpm:9.93},
 {name:'[IT] - DABA - A+',spend:153.74,roas:3.44,ctr:1.61,cpm:3.03},
 {name:'[T2] - DABA - A+',spend:122.06,roas:1.65,ctr:1.77,cpm:2.52},
 {name:'[T2] - VIDEO - A+ - ai v1',spend:118.60,roas:2.03,ctr:1.76,cpm:2.76},
 {name:'[DE] - VIDEO - A+ - perf',spend:100.42,roas:1.00,ctr:1.37,cpm:7.49},
 {name:'[DE] - VIDEO - A+ - organic',spend:86.06,roas:null,ctr:2.08,cpm:5.97},
 {name:'ASC+ | EU',spend:46.62,roas:1.57,ctr:2.34,cpm:4.59},
 {name:'[IT] - DABA - A+ - RMK',spend:40.57,roas:6.03,ctr:1.70,cpm:3.22},
 {name:'[DE] - STATIC 3 - A+',spend:39.05,roas:1.43,ctr:1.83,cpm:16.24}
];
const products=[
 {name:'TORNZ - Baggy Denim Embroidered Jorts',gross:475.57,net:234.77,orders:8},
 {name:'STRIPASO - Baggy Graphic Jeans',gross:355.63,net:211.13,orders:5},
 {name:'WINGY - Graphic Polo Shirt',gross:300.06,net:154.28,orders:5},
 {name:'SKICEN - Oversized Graphic Jersey T-Shirt',gross:291.87,net:191.64,orders:7},
 {name:'WINGLY - Baggy Cotton Graphic Shorts',gross:285.66,net:171.40,orders:5},
 {name:'SEVENTYTWO - Oversized Graphic Jersey',gross:224.35,net:142.65,orders:5},
 {name:'SPIDER - Baggy Graphic Shorts',gross:184.03,net:110.42,orders:3},
 {name:'SPACER - Oversized Print Long Sleeved T-Shirt',gross:178.38,net:105.99,orders:3},
 {name:'NIGHTY - Baggy Graphic Jeans',gross:172.45,net:130.06,orders:3},
 {name:'SPIKY - Oversized Print T-Shirt',gross:164.77,net:105.97,orders:4}
];

const eur=new Intl.NumberFormat('sk-SK',{style:'currency',currency:'EUR',maximumFractionDigits:2});
const num=new Intl.NumberFormat('sk-SK',{maximumFractionDigits:2});
const pct=v=>v==null||Number.isNaN(v)?'—':num.format(v)+' %';
const money=v=>v==null||Number.isNaN(v)?'—':eur.format(v);
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
let selectedMetric='revenue',mainChart,efficiencyChart,campaignChart;
const rangeEls={from:document.getElementById('fromDate'),to:document.getElementById('toDate')};
const rows=()=>rawDays.filter(r=>r.date>=rangeEls.from.value&&r.date<=rangeEls.to.value);
const beiEls={from:document.getElementById('beiFrom'),to:document.getElementById('beiTo')};
const beiRows=()=>rawDays.filter(r=>r.date>=beiEls.from.value&&r.date<=beiEls.to.value);
const gpEls={from:document.getElementById('gpFrom'),to:document.getElementById('gpTo')};
const gpRows=()=>rawDays.filter(r=>r.date>=gpEls.from.value&&r.date<=gpEls.to.value);

function calculateBei(a){if(!a.revenue||!a.metaPurchases||!a.spend||a.metaRoas==null)return null;const pno=a.spend/a.revenue*100,blended=a.revenue/a.spend,cpa=a.spend/a.metaPurchases,gp=(a.netSales/a.orders)*.35,gpc=gp/cpa*100,adEff=(a.metaRoas/3.7210763859043348*50)+(22.281203830369353/cpa*30)+(a.ctr/2.553477572363772*20),siteEff=(a.cr/1.0392857361709429*70)+((a.netSales/a.orders)/78.84036556603775*30);return Math.round((blended/8.209532919602445*30)+(12.180960960790275/pno*25)+(gpc/100*15)+(adEff/100*15)+(siteEff/100*15))}
function aggregate(list){const sum=k=>list.reduce((a,r)=>a+(r[k]||0),0),revenue=sum('revenue'),netSales=sum('netSales'),spend=sum('spend'),orders=sum('orders'),clicks=sum('clicks'),impressions=sum('impressions'),metaPurchases=sum('metaPurchases'),sessions=sum('sessions'),metaRevenue=list.reduce((a,r)=>a+(r.metaRoas==null?0:r.spend*r.metaRoas),0),metaSpend=list.reduce((a,r)=>a+(r.metaRoas==null?0:r.spend),0);const cr=sessions?list.reduce((a,r)=>a+(r.cr||0)*r.sessions,0)/sessions:0,ctr=impressions?clicks/impressions*100:0;const agg={revenue,netSales,spend,orders,clicks,impressions,metaPurchases,sessions,aov:orders?netSales/orders:null,pno:revenue?spend/revenue*100:null,blendedRoas:spend&&revenue?revenue/spend:null,metaRoas:metaSpend?metaRevenue/metaSpend:null,ctr,cpm:impressions?spend/impressions*1000:null,cpa:metaPurchases?spend/metaPurchases:null,cr};agg.bei=calculateBei(agg);return agg}
function kpiStatus(k,v){if(v==null)return'warn';if(k==='metaRoas')return v>=3.5?(v>=4?'pos':'warn'):'neg';if(k==='blendedRoas')return v>=6.7?(v>=7.5?'pos':'warn'):'neg';if(k==='pno')return v<=15?(v<=13.5?'pos':'warn'):'neg';if(k==='cpa')return v<=26?(v<=24?'pos':'warn'):'neg';if(k==='ctr')return v>=1.8?(v>=2.2?'pos':'warn'):'neg';if(k==='cpm')return'warn';if(k==='bei')return v>=100?'pos':v>=80?'warn':'neg';return'warn'}
function statusText(k,v){const s=kpiStatus(k,v);if(v==null)return'čiastočné';if(k==='cpm')return'sledovať';if(s==='pos')return'ideálny stav';if(s==='warn')return'v poriadku';return'slabší výsledok'}

/* ---- guidepost config (scale + target zone) ---- */
const GP=[
 {k:'metaRoas',label:'Meta ROAS',fmt:'num',min:0,max:6,lo:4.0,hi:4.5,goal:'4,0–4,5',limit:'min 3,5 · scale ~5,0+ · pod 3 opatrne'},
 {k:'blendedRoas',label:'Blended ROAS',fmt:'num',min:0,max:11,lo:7.5,hi:8.5,goal:'7,5–8,5',limit:'min 6,7 · pod 5,5 slabšie'},
 {k:'pno',label:'PNO / Marketing',fmt:'pct',min:0,max:40,lo:12,hi:13.5,goal:'12–13,5 %',limit:'max ~15 % · nad 18 % riziko'},
 {k:'cpa',label:'CPA',fmt:'eur',min:0,max:50,lo:20,hi:24,goal:'20–24 €',limit:'max ~26 € · nad 30/35 € slabšie'},
 {k:'ctr',label:'CTR Meta',fmt:'pct',min:0,max:4,lo:2.2,hi:2.8,goal:'2,2–2,8 %',limit:'min ~1,8 % · pod 1,5 % slabšie'},
 {k:'cpm',label:'CPM',fmt:'eur',flat:true,limit:'sledovať podľa krajiny · vysoké CPM + slabý ROAS je negatívny signál'},
 {k:'bei',label:'Efficiency Index',fmt:'num',min:0,max:140,lo:100,hi:140,goal:'100+',limit:'pod 80 slabší stav pre scale'}
];
function fmtVal(f,v){if(v==null)return'—';if(f==='eur')return eur.format(v);if(f==='pct')return num.format(v)+'<span class="u">%</span>';return num.format(v)}
function renderGuards(){const list=gpRows();if(!list.length)return;const a=aggregate(list);const pos=(c,v)=>clamp((v-c.min)/(c.max-c.min)*100,1.5,98.5);
 document.getElementById('gauges').innerHTML=GP.map(c=>{const v=a[c.k],s=kpiStatus(c.k,v);
  if(c.flat){return `<article class="gp gp-flat"><div class="gp-top"><div class="gp-label">${c.label}</div><span class="tag warn">sledovať</span></div><div class="gp-val">${fmtVal(c.fmt,v)}</div><div class="gauge-flat"></div><div class="gp-goals"><div class="gp-goal"><span>Pásmo</span><b>${c.limit}</b></div></div></article>`}
  const zl=pos(c,c.lo),zr=pos(c,c.hi),mk=pos(c,v);
  return `<article class="gp ${s==='neg'?'is-neg':''}"><div class="gp-top"><div class="gp-label">${c.label}</div><span class="tag ${s}">${statusText(c.k,v)}</span></div>
  <div class="gp-val">${fmtVal(c.fmt,v)}</div>
  <div class="gauge"><div class="gauge-track"><div class="gauge-zone" style="left:${zl}%;width:${Math.max(zr-zl,1.5)}%"></div><div class="gauge-marker ${s}" style="left:${mk}%"></div></div>
  <div class="gauge-scale"><span>${num.format(c.min)}</span><span>${num.format(c.max)}</span></div></div>
  <div class="gp-goals"><div class="gp-goal"><span>Cieľ</span><b>${c.goal}</b></div><div class="gp-goal"><span>Hranica</span><b>${c.limit}</b></div></div>
  </article>`}).join('')}

function renderToday(){const t=rawDays.find(r=>r.partial)||rawDays[rawDays.length-1];const pno=t.spend/t.revenue*100,blended=t.revenue/t.spend,cpa=t.metaPurchases?t.spend/t.metaPurchases:null;
 const cells=[
  {l:'Tržby',v:money(t.revenue),s:null},
  {l:'Ad spend',v:money(t.spend),s:['warn','priebežné']},
  {l:'PNO',v:pct(pno),s:[kpiStatus('pno',pno),statusText('pno',pno)]},
  {l:'Blended ROAS',v:num.format(blended),s:[kpiStatus('blendedRoas',blended),statusText('blendedRoas',blended)]},
  {l:'Meta ROAS',v:t.metaRoas==null?'—':num.format(t.metaRoas),s:[kpiStatus('metaRoas',t.metaRoas),t.metaRoas==null?'čaká na dáta':statusText('metaRoas',t.metaRoas)]},
  {l:'CPA',v:money(cpa),s:[kpiStatus('cpa',cpa),statusText('cpa',cpa)]},
  {l:'CR',v:pct(t.cr),s:['pos','silné']},
  {l:'BEI',v:t.bei==null?'—':num.format(t.bei),s:[kpiStatus('bei',t.bei),t.bei==null?'čiastočné':statusText('bei',t.bei)]},
  {l:'AOV',v:money(t.aov),s:null},
  {l:'Objednávky',v:num.format(t.orders),s:null}
 ];
 document.getElementById('todayGrid').innerHTML=cells.map(c=>`<div class="kpi"><div class="kpi-l">${c.l}</div><div class="kpi-v">${c.v}</div><div class="kpi-foot">${c.s?`<span class="tag ${c.s[0]}">${c.s[1]}</span>`:''}</div></div>`).join('')}

const vGrad=(ctx,from,to)=>{const ch=ctx.chart,{ctx:c,chartArea}=ch;if(!chartArea)return from;const g=c.createLinearGradient(0,chartArea.top,0,chartArea.bottom);g.addColorStop(0,from);g.addColorStop(1,to);return g};
const hGrad=(ctx,from,to)=>{const ch=ctx.chart,{ctx:c,chartArea}=ch;if(!chartArea)return from;const g=c.createLinearGradient(chartArea.left,0,chartArea.right,0);g.addColorStop(0,from);g.addColorStop(1,to);return g};
function baseOptions(){return{responsive:true,maintainAspectRatio:false,layout:{padding:{top:6}},animation:{duration:650,easing:'easeOutQuart'},interaction:{mode:'index',intersect:false},plugins:{legend:{labels:{color:'#3f3f46',boxWidth:8,boxHeight:8,usePointStyle:true,pointStyle:'circle',padding:15,font:{family:'Inter',size:12,weight:'500'}}},tooltip:{backgroundColor:'#09090b',titleColor:'#fff',bodyColor:'#d4d4d8',borderColor:'rgba(255,255,255,.08)',borderWidth:1,padding:12,cornerRadius:10,boxPadding:5,usePointStyle:true,titleFont:{family:'JetBrains Mono',weight:'600',size:12},bodyFont:{family:'Inter',size:12}}},scales:{x:{ticks:{color:'#a1a1aa',padding:8,font:{family:'JetBrains Mono',size:10.5}},grid:{display:false},border:{display:false}},y:{ticks:{color:'#a1a1aa',padding:10,maxTicksLimit:6,font:{family:'JetBrains Mono',size:10.5}},grid:{color:'rgba(9,9,11,.05)',drawTicks:false},border:{display:false}}}}}
function renderCharts(list){const labels=list.map(r=>r.label);if(mainChart)mainChart.destroy();
 const ds=selectedMetric==='revenue'?[{type:'bar',label:'Tržby',data:list.map(r=>r.revenue),backgroundColor:c=>vGrad(c,'#18181b','#52525b'),borderWidth:0,borderRadius:7,borderSkipped:false,maxBarThickness:26,order:2},{type:'line',label:'Spend',data:list.map(r=>r.spend),borderColor:'#dc2626',backgroundColor:c=>vGrad(c,'rgba(220,38,38,.15)','rgba(220,38,38,0)'),tension:.4,cubicInterpolationMode:'monotone',pointRadius:0,pointHoverRadius:5,pointHoverBackgroundColor:'#dc2626',pointHoverBorderColor:'#fff',pointHoverBorderWidth:2,borderWidth:2.5,fill:true,order:1}]:[{type:'line',label:selectedMetric==='pno'?'PNO %':selectedMetric==='spend'?'Spend':'Blended ROAS',data:list.map(r=>selectedMetric==='pno'?(r.revenue?r.spend/r.revenue*100:null):selectedMetric==='spend'?r.spend:r.revenue/r.spend),borderColor:'#09090b',backgroundColor:c=>vGrad(c,'rgba(9,9,11,.12)','rgba(9,9,11,0)'),tension:.4,cubicInterpolationMode:'monotone',pointRadius:0,pointHoverRadius:5,pointHoverBackgroundColor:'#09090b',pointHoverBorderColor:'#fff',pointHoverBorderWidth:2,borderWidth:2.5,fill:true}];
 document.getElementById('mainChartTitle').textContent=selectedMetric==='revenue'?'Revenue vs spend':selectedMetric==='spend'?'Meta spend trend':selectedMetric==='pno'?'PNO trend':'Blended ROAS trend';
 mainChart=new Chart(document.getElementById('mainChart'),{data:{labels,datasets:ds},options:baseOptions()});
 if(campaignChart)campaignChart.destroy();
 campaignChart=new Chart(document.getElementById('campaignChart'),{type:'bar',data:{labels:campaigns.map(c=>c.name),datasets:[{label:'Spend',data:campaigns.map(c=>c.spend),backgroundColor:c=>hGrad(c,'#52525b','#09090b'),borderWidth:0,borderRadius:5,borderSkipped:false,maxBarThickness:15}]},options:{...baseOptions(),indexAxis:'y',scales:{x:{ticks:{color:'#a1a1aa',padding:8,font:{family:'JetBrains Mono',size:10.5}},grid:{color:'rgba(9,9,11,.05)',drawTicks:false},border:{display:false}},y:{ticks:{color:'#52525b',font:{family:'Inter',size:11}},grid:{display:false},border:{display:false}}},plugins:{legend:{display:false},tooltip:baseOptions().plugins.tooltip}}})}

function renderTables(list){
 document.getElementById('dailyRows').innerHTML=list.map(r=>{const pno=r.revenue?r.spend/r.revenue*100:null,blended=r.revenue/r.spend,cpa=r.metaPurchases?r.spend/r.metaPurchases:null;
 return `<tr><td class="lead">${r.label}${r.partial?' ·':''}</td><td class="n">${money(r.revenue)}</td><td class="n">${r.orders}</td><td class="n">${money(r.aov)}</td><td class="n">${money(r.spend)}</td><td class="n ${pno>18?'neg-c':''}">${pct(pno)}</td><td class="n ${blended<5.5?'neg-c':''}">${num.format(blended)}</td><td class="n ${r.metaRoas!=null&&r.metaRoas<3?'neg-c':''}">${r.metaRoas==null?'—':num.format(r.metaRoas)}</td><td class="n ${cpa>30?'neg-c':''}">${money(cpa)}</td><td class="n ${r.ctr<1.8?'neg-c':''}">${pct(r.ctr)}</td><td class="n">${money(r.cpm)}</td><td class="n">${pct(r.cr)}</td><td class="n ${r.bei!=null&&r.bei<80?'neg-c':''}">${r.bei==null?'—':num.format(r.bei)}</td></tr>`}).join('');
 document.getElementById('campaignRows').innerHTML=campaigns.map(c=>`<tr><td><span class="camp-name"><span class="dotk"></span>${c.name}</span></td><td class="n">${money(c.spend)}</td><td class="n ${c.roas!=null&&c.roas<1?'neg-c':''}">${c.roas==null?'—':num.format(c.roas)}</td><td class="n ${c.ctr<1.8?'neg-c':''}">${pct(c.ctr)}</td><td class="n">${money(c.cpm)}</td></tr>`).join('');
 const maxG=Math.max(...products.map(p=>p.gross));
 document.getElementById('productRows').innerHTML=products.map(p=>`<tr><td class="lead">${p.name}</td><td class="n prod-bar"><span style="width:${(p.gross/maxG*100).toFixed(1)}%"></span><em>${money(p.gross)}</em></td><td class="n">${money(p.net)}</td><td class="n">${p.orders}</td></tr>`).join('')}

function renderInsights(a,list){const best=[...list].sort((x,y)=>y.revenue-x.revenue)[0],worst=[...list].sort((x,y)=>(y.spend/y.revenue)-(x.spend/x.revenue))[0];
 document.getElementById('insights').innerHTML=[
 `<div class="ins neg"><i></i><div>PNO je <b>${pct(a.pno)}</b>. Stabilnejší režim je do ~15 %, takže ekonomika spendu je teraz rizikovejšia.</div></div>`,
 `<div class="ins neg"><i></i><div>Blended ROAS <b>${num.format(a.blendedRoas)}</b> oproti cieľu 7,5–8,5. Pod 5,5 je slabší stav na scale.</div></div>`,
 `<div class="ins pos"><i></i><div>Najsilnejší deň <b>${best.label}</b> — tržby <b>${money(best.revenue)}</b>, ${best.orders} obj.</div></div>`,
 `<div class="ins warn"><i></i><div>Najťažší PNO deň <b>${worst.label}</b> — PNO <b>${pct(worst.spend/worst.revenue*100)}</b>.</div></div>`,
 `<div class="ins"><i></i><div>Meta ROAS <b>${num.format(a.metaRoas)}</b> · CTR <b>${pct(a.ctr)}</b> za vybrané obdobie.</div></div>`
 ].join('')}

function renderBei(){const list=beiRows();if(!list.length)return;const a=aggregate(list),labels=list.map(r=>r.label);
 const beiTxt=a.bei==null?'—':num.format(a.bei);
 document.getElementById('beiValue').textContent=beiTxt;
 document.getElementById('beiFill').style.width=clamp((a.bei||0)/140*100,0,100)+'%';
 const bs=document.getElementById('beiStatus');bs.className='tag '+kpiStatus('bei',a.bei);bs.textContent=statusText('bei',a.bei)+' · '+beiTxt+' / 100';
 const valid=list.filter(r=>r.bei!=null),dir=valid.length>1?(valid[valid.length-1].bei-valid[0].bei):0;const tt=document.getElementById('beiTrendTag');tt.className='tag mono '+(dir>0?'pos':dir<0?'neg':'');tt.textContent=(dir>0?'▲ +':dir<0?'▼ ':'→ ')+Math.abs(dir)+' · '+labels[0]+'–'+labels[labels.length-1];
 if(efficiencyChart)efficiencyChart.destroy();
 efficiencyChart=new Chart(document.getElementById('efficiencyChart'),{type:'line',data:{labels,datasets:[{label:'BEI',data:list.map(r=>r.bei),borderColor:'#09090b',backgroundColor:c=>vGrad(c,'rgba(9,9,11,.13)','rgba(9,9,11,0)'),tension:.4,cubicInterpolationMode:'monotone',pointRadius:0,pointHoverRadius:5,pointHoverBackgroundColor:'#09090b',pointHoverBorderColor:'#fff',pointHoverBorderWidth:2,borderWidth:2.5,fill:true},{label:'Cieľ 100',data:list.map(()=>100),borderColor:'rgba(21,128,61,.7)',borderDash:[5,5],pointRadius:0,borderWidth:1.5},{label:'Min 80',data:list.map(()=>80),borderColor:'rgba(180,83,9,.6)',borderDash:[3,5],pointRadius:0,borderWidth:1.5}]},options:baseOptions()})}

function update(){const list=rows(),a=aggregate(list);if(!list.length)return;
 document.getElementById('rowCount').innerHTML=`<b>${list.length}</b> dní`;
 renderToday();renderCharts(list);renderTables(list);renderInsights(a,list)}

document.querySelectorAll('[data-preset]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-preset]').forEach(x=>x.classList.remove('active'));b.classList.add('active');const p=b.dataset.preset;if(p==='today'){rangeEls.from.value='2026-06-23';rangeEls.to.value='2026-06-23'}if(p==='3d'){rangeEls.from.value='2026-06-21';rangeEls.to.value='2026-06-23'}if(p==='7d'){rangeEls.from.value='2026-06-17';rangeEls.to.value='2026-06-23'}update()}));
document.querySelectorAll('[data-metric]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-metric]').forEach(x=>x.classList.remove('active'));b.classList.add('active');selectedMetric=b.dataset.metric;renderCharts(rows())}));
[rangeEls.from,rangeEls.to].forEach(i=>i.addEventListener('change',()=>{if(rangeEls.from.value>rangeEls.to.value)rangeEls.to.value=rangeEls.from.value;document.querySelectorAll('[data-preset]').forEach(b=>b.classList.remove('active'));update()}));
document.querySelectorAll('[data-bei]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-bei]').forEach(x=>x.classList.remove('active'));b.classList.add('active');const p=b.dataset.bei;if(p==='today'){beiEls.from.value='2026-06-23';beiEls.to.value='2026-06-23'}if(p==='3d'){beiEls.from.value='2026-06-21';beiEls.to.value='2026-06-23'}if(p==='7d'){beiEls.from.value='2026-06-17';beiEls.to.value='2026-06-23'}renderBei()}));
[beiEls.from,beiEls.to].forEach(i=>i.addEventListener('change',()=>{if(beiEls.from.value>beiEls.to.value)beiEls.to.value=beiEls.from.value;document.querySelectorAll('[data-bei]').forEach(b=>b.classList.remove('active'));renderBei()}));
document.querySelectorAll('[data-gp]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-gp]').forEach(x=>x.classList.remove('active'));b.classList.add('active');const p=b.dataset.gp;if(p==='today'){gpEls.from.value='2026-06-23';gpEls.to.value='2026-06-23'}if(p==='3d'){gpEls.from.value='2026-06-21';gpEls.to.value='2026-06-23'}if(p==='7d'){gpEls.from.value='2026-06-17';gpEls.to.value='2026-06-23'}renderGuards()}));
[gpEls.from,gpEls.to].forEach(i=>i.addEventListener('change',()=>{if(gpEls.from.value>gpEls.to.value)gpEls.to.value=gpEls.from.value;document.querySelectorAll('[data-gp]').forEach(b=>b.classList.remove('active'));renderGuards()}));
update();renderBei();renderGuards();
