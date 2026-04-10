function startContent(element,duration,delay){
    const keyframes = [
        { opacity: 0},
        { opacity: 1}
    ];

    const options= {
        duration: duration,
        easing: 'ease-in-out',
        delay: delay
    }

    const animation = element.animate(keyframes, options);
    return animation;
}

// window.onload = function(){
    // startContent(section,1000,0)
// }


// 확대 애니메이션 
const handBt = document.querySelector('.hand-bt');

let handBtMovin = handBt.animate(
    [
        { transform: 'scale(1) translateY(0)', opacity: 1 },
        { transform: 'scale(1.04) translateY(-3px)', opacity: 0.7 },
        { transform: 'scale(1) translateY(0)', opacity: 1 }
    ], {
    duration: 1400,
    iterations: Infinity
});

// 텍스트 컬러 애니메이션
const handText = document.querySelector('.hand-text');

let handTextMovin = handText.animate(
    [
        { transform: 'scale(1) translateY(0)' },
        { transform: 'scale(1.3) translateY(0)' },
        { transform: 'scale(1) translateY(0)' }
        // {color:'#FF0000'},
        // {color:'#FFA500'},
        // {color:'#FF0000'}
    ], {
    duration: 1400,
    iterations: Infinity
}
)


// 터치 스탑 


function handGray(element){
 if(element==1){
    handBt.style = ('background:#000;');

 }
 if(element==2){
    handBt.style = ('background:linear-gradient(#8e9eab, #eef2f3);');

 }

}






let touch = {
    start: function () {
        handBtMovin.pause();
        handTextMovin.pause();
        handGray(1);
        updateProgressBar();
    },
    end: function () {
        handBtMovin.play();
        handTextMovin.play();
        updateResistsBar();
        handGray(2);
    },
    move: function () {

    }
}

var progressBar = document.getElementById("progress_bar");
var progress = document.getElementById("progress");


// 프로그래스바 움직임 애니메이션

// 진동 효과 애니메이션 함수
function shakeAnimation(element, duration, distance) {
    const keyframes = [
      { transform: 'translateX(0)' },
      { transform: `translateX(-${distance}px)` },
      { transform: 'translateX(0)' },
      { transform: `translateX(${distance}px)` },
      { transform: 'translateX(0)' },
    ];
    
    const options = {
      duration: duration,
      iterations: Infinity,
    };
    
    const animation = element.animate(keyframes, options);
    return animation;
  }

// 내용 사라지는 애니메이션 
let section = document.querySelector('.section');


function eraseContent(element,duration,delay){
    const keyframes = [
        { opacity: 1},
        { opacity: 0}
    ];

    const options= {
        duration: duration,
        easing: 'ease-out',
        delay: delay
    }

    const animation = element.animate(keyframes, options);
    return animation;
}
 

// 프로그래스바 움직임 앞으로 함수
function updateProgressBar() {
    var widthBar = parseInt(window.getComputedStyle(progressBar).width);
    var widthProgress = parseInt(window.getComputedStyle(progress).width);
    var barResult = Math.round((widthProgress / widthBar) * 100);
    
   
    if (widthProgress == 0) {
        shakeAnimation(progressBar,1,5);
       let frontMove = progress.animate(
            [ 
                { width:widthProgress},
                { width:'100%' }
            ], {
                duration: 3000,
                fill:"forwards",
                iterations: 1
            })
            frontMove.play();
        }
    if (barResult < 98&& barResult>0 ) {
        shakeAnimation(progressBar,1,5).cancel;
        let frontMove = progress.animate(
            [ { width:barResult+'%' },
                { width:'100%'}
            ], {
                duration: 3000,
                fill:"forwards",
                iterations: 1
            })
            frontMove.play();
        }
        
    }
    // 프로그래스바 움직임 뒤로 
    function updateResistsBar(){
        shakeAnimation(progressBar,1,0);
        // return progress.width;
    var widthBar = parseInt(window.getComputedStyle(progressBar).width);
    var widthProgress = parseInt(window.getComputedStyle(progress).width);
    var barResult = Math.round((widthProgress / widthBar) * 100);
    
    // if(widthProgress)
    if(barResult < 100 && barResult> 0){
        let backMove = progress.animate(
            [ { width: barResult+'%' },
                { width:'0%'}
            ], {
            duration: 2000,
            fill:"forwards",
            iterations: 1
        })
        backMove.play();
        console.log(barResult)
        if(barResult >= 98){
            // 애니메이션 완성 그리고 페이지이동 
            eraseContent(section,1000,300);
            setTimeout(()=> {
                let link = 'index4.html';
                section.style.display = 'none';
                // location.href= link;
                location.replace(link);
                // console.log(link)
            },1000 )
            backMove.cancel();
            
        }
    }
}
  





handBt.addEventListener("touchstart", touch.start);
handBt.addEventListener("mousedown", touch.start);
handBt.addEventListener("touchend", touch.end);
handBt.addEventListener("mouseup", touch.end);
handBt.addEventListener("touchmove", touch.move);
