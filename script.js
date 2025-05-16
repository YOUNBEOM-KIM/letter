document.addEventListener('DOMContentLoaded', () => {
  // LEFT SLIDER (6장)
  const leftSlides = Array.from({length:6},(_,i)=>`images/defualt/photo1-${i+1}.jpg`);
  let leftIdx=0;
  const leftImg=document.getElementById('leftImage');
  const leftInd=document.getElementById('leftIndicator');
  function showLeft(i){
    leftIdx=(i+leftSlides.length)%leftSlides.length;
    leftImg.src=leftSlides[leftIdx];
    leftInd.textContent=`${leftIdx+1} / ${leftSlides.length}`;
  }
  document.getElementById('leftPrevBtn').onclick=()=>showLeft(leftIdx-1);
  document.getElementById('leftNextBtn').onclick=()=>showLeft(leftIdx+1);
  showLeft(0);

  // MIDDLE SLIDER (5장)
  const midSlides=[
    {img:'images/defualt/photo2-1.jpg',text:'안녕 내사랑 워닝💙<br/>4주년엔 특별한 편지로 해주고 싶어서 준비했어요! ABAP만 하다가 JS로 하려니까 어렵구망 키키킼 그래도 열심히 준비했다구!! 부족해도 이뿌게 봐즁 힣<br/>내꾸 워닝 4주년 축하해요❤️</p>'},
    {img:'images/defualt/photo2-2.jpg',text:'<p>우리의 추억을 담고 평생 기억 할 수 있게 모바일 사진첩처럼 만들어봤어용  ( ˇ͈ᵕˇ͈ ) ¨̮♡⃛<br/> 우리가 만든 사진첩도 좋지만 평소에 회사에서 보기 힘드니까 지치거나 힘낼때 보라구💑 요즘 내꾸 이직하고 멘탈이 아주 긴장한 상태라 많이 피곤할텐데 잘 하구 있으니까 걱정하지 말아요 내꾸 유망한 헤드헌터로 될거니까!! 내가 옆에서 많이 도와줄게요<br/> 혹시라도 돈 못벌어와도 우리가 준비를 탄탄하게 하면 되니까 걱정하지!   말라구!!😚</p>'},
    {img:'images/defualt/photo2-3.jpg',text:'<p>이제 우리도 결혼준비를 해야되니까 쟈기도 지금 많이 고민이 많겠지? 히힣... 나두 많오   아니 머리가 깨질정도로 고민중이댜!! 쟈기랑 어떻게 하면 결혼해서 행복하게 살 수 있을지 이게 요즘 내 머릿속의 1순위라구 아직 준비할 수 있는 기간이 2년정도 남았지만 차근차근 얘기해가면서 다투지말고 싸우지말고 고민 많이하면서 미래를 그려봐오 내사랑💒 4주년 편지인데 내가 너무 이런말만 했나..? 그래도 어쩌겠어 나는 쟈기랑 행복하게 가정을 꾸려나가고 싶어서 구런구야 힣<br/>4주년 우리리 4주년 축하한다구!!💛❤️</p>'},
    {img:'images/defualt/photo2-4.jpg',text:'<p>정말 4주년이 되기까지 많은 일도 있었고 추억도 있었지만 항상 행복했던 기억만 있어서 너무 행복해용 이게 다 쟈기가 잘해줘서 한결같이 쭈욱 사랑해줘서 그럴 수 있었던거 같아요. 원시코기,스누피,복슬이처럼 눈을 안때고 항상 나만 바라봐줘서 고맙고 행복하고 사랑해요💜 그렇다고 내가 쟈기한테 덜 봐라보고 사랑했던건 아니쥐! 내가 더 사랑하지!!키킼 </br>그것만큼은 부정할 수 없을거야😘</br> 꽃들고 있는 워닝 아주 꾸욥고 이뿌구만</p>'},
    {img:'images/defualt/photo2-5.jpg',text:'<p>원래 4주년이라 4장으로 끝내려고 했는데 뭔가 내 독사진이 없단 말이지잉 마지막은 내사진으로 해봐또 키키킼</br> 이건 뽀나스다🤭<br/>이거 만들면서 우리가 만났던 시간동안 찍었던 사진을 한장 한장 보면서 어떻게 장식을 해야할까 엄청 고민했는데 뭔가 이렇게 만들생각을 한 내가 뭔가 기특하다! 키키킼 만들면서 추억이 새록새록 생각나서 새벽에 만들면서도 졸리지가 않구만 히힣 이제 내꾸랑 더 행복 할 일만 남았으니까 5주년 10주년 20주년 100세까지 행복하게 잘 지내봐오 내꾸 우리 4주년 정말 축하하구 행복하게 지내요❤️🧡💛💚💙 사랑해<br/>                         FROM.버밍🐶</p>'},
  ];
  let midIdx=0;
  const midImg=document.getElementById('midImage');
  const midTxt=document.getElementById('midText');
  const midInd=document.getElementById('midIndicator');
  function showMid(i){
    midIdx=(i+midSlides.length)%midSlides.length;
    midImg.src=midSlides[midIdx].img;
    midTxt.innerHTML=midSlides[midIdx].text;
    midInd.textContent=`${midIdx+1} / ${midSlides.length}`;
  }
  document.getElementById('midPrevBtn').onclick=()=>showMid(midIdx-1);
  document.getElementById('midNextBtn').onclick=()=>showMid(midIdx+1);
  showMid(0);

  // RIGHT SLIDER (6장)
  const rightSlides=Array.from({length:6},(_,i)=>`images/defualt/photo3-${i+1}.jpg`);
  let rightIdx=0;
  const rightImg=document.getElementById('rightImage');
  const rightInd=document.getElementById('rightIndicator');
  function showRight(i){
    rightIdx=(i+rightSlides.length)%rightSlides.length;
    rightImg.src=rightSlides[rightIdx];
    rightInd.textContent=`${rightIdx+1} / ${rightSlides.length}`;
  }
  document.getElementById('rightPrevBtn').onclick=()=>showRight(rightIdx-1);
  document.getElementById('rightNextBtn').onclick=()=>showRight(rightIdx+1);
  showRight(0);

  // SLOT-TOP-LEFT (12장)
  const slotTL=Array.from({length:12},(_,i)=>`images/japan/slot-top-left${i+1}.jpg`);
  let slotTLIdx=0;
  const slotTLImg=document.getElementById('slotTopLeftImg');
  const slotTLInd=document.getElementById('slotTopLeftIndicator');
  function showSlotTL(i){
    slotTLIdx=(i+slotTL.length)%slotTL.length;
    slotTLImg.src=slotTL[slotTLIdx];
    slotTLInd.textContent=`${slotTLIdx+1} / ${slotTL.length}`;
  }
  document.getElementById('slotTopLeftPrev').onclick=()=>showSlotTL(slotTLIdx-1);
  document.getElementById('slotTopLeftNext').onclick=()=>showSlotTL(slotTLIdx+1);
  showSlotTL(0);

  // SLOT-TOP-RIGHT (8장)
  const slotTR=Array.from({length:26},(_,i)=>`images/japan/slot-top-right${i+1}.jpg`);
  let slotTRIdx=0;
  const slotTRImg=document.getElementById('slotTopRightImg');
  const slotTRInd=document.getElementById('slotTopRightIndicator');
  function showSlotTR(i){
    slotTRIdx=(i+slotTR.length)%slotTR.length;
    slotTRImg.src=slotTR[slotTRIdx];
    slotTRInd.textContent=`${slotTRIdx+1} / ${slotTR.length}`;
  }
  document.getElementById('slotTopRightPrev').onclick=()=>showSlotTR(slotTRIdx-1);
  document.getElementById('slotTopRightNext').onclick=()=>showSlotTR(slotTRIdx+1);
  showSlotTR(0);

  // SLOT-BOTTOM-LEFT (10장)
  const slotBL=Array.from({length:10},(_,i)=>`images/japan/slot-bottom-left${i+1}.jpg`);
  let slotBLIdx=0;
  const slotBLImg=document.getElementById('slotBottomLeftImg');
  const slotBLInd=document.getElementById('slotBottomLeftIndicator');
  function showSlotBL(i){
    slotBLIdx=(i+slotBL.length)%slotBL.length;
    slotBLImg.src=slotBL[slotBLIdx];
    slotBLInd.textContent=`${slotBLIdx+1} / ${slotBL.length}`;
  }
  document.getElementById('slotBottomLeftPrev').onclick=()=>showSlotBL(slotBLIdx-1);
  document.getElementById('slotBottomLeftNext').onclick=()=>showSlotBL(slotBLIdx+1);
  showSlotBL(0);

  // SLOT-BOTTOM-RIGHT (5장)
  const slotBR=Array.from({length:5},(_,i)=>`images/japan/slot-bottom-right${i+1}.jpg`);
  let slotBRIdx=0;
  const slotBRImg=document.getElementById('slotBottomRightImg');
  const slotBRInd=document.getElementById('slotBottomRightIndicator');
  function showSlotBR(i){
    slotBRIdx=(i+slotBR.length)%slotBR.length;
    slotBRImg.src=slotBR[slotBRIdx];
    slotBRInd.textContent=`${slotBRIdx+1} / ${slotBR.length}`;
  }
  document.getElementById('slotBottomRightPrev').onclick=()=>showSlotBR(slotBRIdx-1);
  document.getElementById('slotBottomRightNext').onclick=()=>showSlotBR(slotBRIdx+1);
  showSlotBR(0);

  function rescale() {
  const designW = 960, designH = 720;
  const vw = window.innerWidth, vh = window.innerHeight;
  const scale = Math.min(vw / designW, vh / designH);
  const app = document.getElementById('app');
  app.style.transformOrigin = 'top center';
  app.style.transform = `scale(${scale})`;
}
});
