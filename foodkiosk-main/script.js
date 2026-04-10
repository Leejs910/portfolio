
// navi 
let navbar_nav = document.querySelector('.navbar-nav');
// content-card
const card_Index = document.querySelector('#card_index');
// foodData 제목
const titleArray = JSON.stringify(foodData, ['title']);
// card +제목
let foodCardTitle = document.querySelector('#foodCardTitle')
const object = JSON.parse(titleArray);
const uniqueArr = Array.from(object);


Array.from(uniqueArr).forEach((element) => { uniqueArr.push(element) });
let uniqueArr2 = [];
let uniqueArr3 = [];
let all = [];
// 전체 수량
let uniqueArr4 = [];
// 
let uniqueArr5 = [];


let rightContent = document.getElementById('right_content')


let product_table = document.getElementById('productTable');
let product_table2 = document.getElementById('productTable2');
// 취소버튼
let cancelAll = document.getElementById('left_bt');
// 결제 버튼
let checkOut = document.getElementById('right_bt');

let allQunantity = document.getElementById('all_quntity');
let allPrice = document.getElementById('all_price');

// 프로그램 시작 초기 화면
window.onload = function () {
    naviIndex();
    let navi_Bt = document.querySelectorAll('.nav-link');
    navi_Bt[0].classList.add('active');
    card();

};

//네비 활성화 
function naviIndex() {
    // 네비 창 생성
    makeTitle();
    for (let i = 0; i < uniqueArr3.length; i++) {
        // console.log(`${i}회차 반복입니다.`)
        let elementLi = document.createElement('li');
        let elementA = document.createElement('a');
        navbar_nav.appendChild(elementLi);
        elementLi.appendChild(elementA);
        elementLi.className = 'nav-items';
        elementA.className = 'nav-link';
        elementA.onclick = loadScript;
        elementA.textContent = uniqueArr3[i];
    }
};

// 네비 이너텍스트 생성
function makeTitle() {
    for (i = 0; i < uniqueArr.length; i++
    ) {
        uniqueArr2.push(uniqueArr[i].title)
    }
    uniqueArr2.forEach((element) => {
        if (!uniqueArr3.includes(element)) {
            uniqueArr3.push(element);
        }
    }
    )
};




//  클릭시 카드 활성화 
function card() {
    
    let where = document.querySelector('.active');
    foodCardTitle.innerText = where.text;
    // console.log(where.text);
        
    for (i = 0; i < foodData.length; i++) {
        if (where.text == foodData[i].title) {
            // console.log(foodData[i])

            let elementdiv = document.createElement('div');
            let elementdiv2 = document.createElement('div');
            let elementp = document.createElement('p');
            let elementp2 = document.createElement('p');
            let images = document.createElement('img');
            let chosenImage = foodData[i].imgNum;
            images.src = `img/${chosenImage}.png`
            elementdiv.className = 'card';
            // 추가된 기능1
            elementdiv.addEventListener('click',addProduct, { once : true});
            
            // elementdiv.onclick = addProduct;
            elementdiv2.className = 'card-body';
            elementp.className = 'card-title';
            elementp2.className = 'card-text';
            images.className = 'card-img-top';
            card_Index.appendChild(elementdiv);
            elementdiv.appendChild(images);
            elementdiv.appendChild(elementdiv2);
            elementdiv2.appendChild(elementp);
            elementdiv2.appendChild(elementp2);
            elementp.textContent = foodData[i].foodName;
            elementp2.textContent = foodData[i].price.toLocaleString('ko-KR');
            
        }
    }
};





// 네비 버튼 클릭시 화면 전환 
function loadScript() {
    let navi_Bt = document.querySelectorAll('.nav-link');
    for (i = 0; i < navi_Bt.length; i++) {
        navi_Bt[i].classList.remove('active');
    }
    this.classList.add('active');
    deleteCard()
    card();
    // 화면 전환시 기존 카드 삭제 
    function deleteCard() {
        let removepart = document.querySelectorAll('.card');
        for (i = 0; i < removepart.length; i++) {
            removepart[i].remove();
            // console.log(removepart[i]);
            // console.log('dfds')
        }
    }
};

// 추가된 기능2
// function flask(){
    // document.body.removeEventListener('click', cb);
//     let onclickAll = document.querySelectorAll('.card')
//     let onclickOne = onclickAll[0].onclick
//     let flaskA = this.children[1].children[0].textContent;
//     uniqueArr5.push(flaskA)
//     console.log(uniqueArr5);
//     const set = new Set(uniqueArr5);
//     // duplicate
//     if(uniqueArr5.length !== set.size) {
//         this.setAttribute('onclick',alert('fdadf'));
//         uniqueArr5.pop()  
//     }else{
        
//     }
 
// };


// 선택하신 주문내역 

function addProduct() {
    
    let card_img = this.children[0].src;
    let card_name_price = this.innerText.split("\n\n");
    let card_name = card_name_price[0];
    let card_price = Number(card_name_price[1].replace(/,/g, ""));
    
    console.log(card_name);
    // console.log(card_img, card_name, card_price);
    console.log(card_img);
    console.log(card_price);
    // 오른쪽 주문내역 요소 생성 하기
    // product_table
    let elementTr = document.createElement('tr');

    let elementTd_trash = document.createElement('td');
    let imagestrash = document.createElement('img')
    let elementTd_name = document.createElement('td');
    let elementTd_plusminus = document.createElement('td');
    let imageMinus = document.createElement('img');
    let elementSpan = document.createElement('span');

    let imagePlus = document.createElement('img');
    let elementTd_price = document.createElement('td');
    product_table.appendChild(elementTr);
    elementTr.appendChild(elementTd_trash);
    elementTd_trash.appendChild(imagestrash);
    elementTr.appendChild(elementTd_name);
    elementTr.appendChild(elementTd_plusminus);
    elementTd_plusminus.appendChild(imageMinus);
    elementTd_plusminus.appendChild(elementSpan);
    elementTd_plusminus.appendChild(imagePlus);
    elementTr.appendChild(elementTd_price);
    elementTr.className = 'innertr'
    elementTd_price.className ='price_right'

    imagestrash.src = `img/Icon awesome-trash-alt.svg`
    imagestrash.className = 'img_trash';
    imagestrash.onclick = objectTrash;

    imageMinus.src = `img/Icon feather-minus-circle.svg`
    imageMinus.className = 'img_minus';
    imageMinus.onclick = minuscount;

    imagePlus.src = `img/Icon feather-plus-circle.svg`
    imagePlus.className = ' img_plus';
    imagePlus.onclick = pluscount;

    elementTd_name.textContent = card_name;
    elementTd_price.textContent = card_price.toLocaleString('ko-KR');
    elementSpan.className = 'card_q';
    elementSpan.textContent = 1;
    // addItemModal(card_img, card_name, card_price);
    // 주문내역 쓰레기통버리기 
    function objectTrash() {
        elementTr.remove();
        uniqueArr4.splice(0,Number(elementSpan.textContent));
        allQunantity.textContent = uniqueArr4.length;
        allPriceSum();
    }
    // 수량 마이너스
    
    function minuscount() {
        if(Number(elementSpan.textContent)> 0){
            elementSpan.textContent = Number(elementSpan.textContent)-1
            uniqueArr4.pop();
            allQunantity.textContent = uniqueArr4.length;
            console.log(uniqueArr4);
            let rightPrice = Number(card_price)*Number(elementSpan.textContent);
            elementTd_price.textContent = rightPrice.toLocaleString('ko-KR');
            allPriceSum()
        }
        if(Number(elementSpan.textContent)== 0){
            objectTrash()
            allQunantity.textContent = uniqueArr4.length;
        }
    };
    // 수량 플러스 
    function pluscount() {
        if(1<= Number(elementSpan.textContent)){
            elementSpan.textContent = Number(elementSpan.textContent)+1;
            uniqueArr4.push(1);
            allQunantity.textContent = uniqueArr4.length;
            console.log(uniqueArr4);
            let rightPrice = Number(card_price)*Number(elementSpan.textContent);
            elementTd_price.textContent = rightPrice.toLocaleString('ko-KR');
            allPriceSum()
        }
    };
    
    // 전체 수량 합계
    function pushQuntity(){
    allQunantity.textContent = uniqueArr4.length;
    uniqueArr4.push(Number(elementSpan.textContent));
    console.log(uniqueArr4)
    };
    pushQuntity();
    allQunantity.textContent = uniqueArr4.length;
    allPriceSum();
    if(uniqueArr4.length>0){
        checkOut.addEventListener('click',openModal);
    }
    
    

    // addProuduct종료구간  
    };

    // 전체 취소 버튼 
    cancelAll.addEventListener('click',cancel);
    function cancel(){
        let allorder = document.querySelectorAll('.innertr')
        for( i=0; i<allorder.length; i++){
        allorder[i].remove();}
        uniqueArr4.splice(0);
        allQunantity.textContent = uniqueArr4.length;
        allPrice.textContent = 0;
        let el =document.querySelectorAll('.card')
            for(i=0; i<el.length; i++){
                el[i].addEventListener('click',addProduct, { once : true});
            }
        
    };
    // 전체 가격 합계
    function allPriceSum(){
        let allorder2 = document.querySelectorAll('.price_right')
        let numberZero = 0;
        for( i=0; i<allorder2.length; i++){
        numberZero += Number(allorder2[i].textContent.replace(/,/g, ""))
        }
        allPrice.textContent = numberZero.toLocaleString('ko-KR')
        // 만약 10만원이 넘어가면
        if(numberZero>100000){
            // alert('최소 100000 이상은 주문 하실 수 없습니다.');
            // 경고 모달 오픈 f

            // function warningNum(){
                cancel();
                modalF.style.display='flex';
                let warning_bt = modalF.querySelector('.warning-bt1');
                warning_bt.addEventListener('click', warningHide);
            // }
            function warningHide(){
                modalF.style.display='none';
            }


            
        //    return cancel();
           
        }
    }

    // 결제 모달 오픈 
    let modalA = document.getElementById('modal-a')
    let modalAtext = modalA.querySelector('.your_order_text_varible')
    function openModal(){
        if(uniqueArr4.length>0){
            modalA.style.display = "flex"; 
            modalAtext.textContent = allPrice.textContent;
            console.log('open');
            // rightContent.style.zIndex = "10";
            let InnerTr = document.querySelectorAll('.innertr') 
            
                // rightContent.style.display = "flex";
                for( i=0; i<InnerTr.length; i++){
                    addItemModal(InnerTr[i].children[1].textContent,InnerTr[i].children[3].textContent)
                    
                        
                }
                
            }
        }
// 아이템 더하는 함수
    function addItemModal(evt, evt2){
        let makeDiv = document.createElement('div');
        let cardInner = document.getElementById('inner_card') ;
        let makeDivInner = `
            <div class="your_order_card grid justify-content-center align-items-center p-1" style="-bs-rows: 3; --bs-columns: 1; --bs-gap: .5rem;">
            <div class="your_order_name">${evt}</div>
            <div><span class="your_order_price">${evt2}</span>원</div>
            </div>
        `
        makeDiv.innerHTML = makeDivInner;
        cardInner.append(makeDiv);
        yourOrderBt1.addEventListener('click',payCreditCard);
}   
        
// 신용카드 모달 오픈
let yourOrderBt1 = document.querySelector('.your_order_bt1');
let modalB = document.getElementById('modal-b');
    modalC = document.getElementById('modal-c');
    modalD = document.getElementById('modal-d');
    modalE = document.getElementById('modal-e');
    modalF = document.getElementById('modal-f');
    modalG = document.getElementById('modal-g');

let creditCardBt1 = modalB.querySelector('.creditcard_bt1')
let creditCardBt2 = modalB.querySelector('.creditcard_bt2')
let reciptBt1 = modalD.querySelector('.recipt-bt1');
let reciptBt2 = modalD.querySelector('.recipt-bt2');
let completeBt = modalE.querySelector('.complete-bt1')
let completeText = modalE.querySelector('.complete-text')
let completeImg = modalE.querySelector('#receipt_img')


function payCreditCard(){
    console.log('Hello')
    modalA.style.display = "none"; 
    modalB.style.display = "flex";
    creditCardBt1.addEventListener('click',creditCardFuntionA);
    creditCardBt2.addEventListener('click',creditCardFuntionB);
    // 취소버튼
    function creditCardFuntionA(){
        modalA.style.display = "none"; 
        modalB.style.display = "none";
        let cardInner = document.getElementById('inner_card') ;
        let modalAinner= cardInner.querySelectorAll('div');
        for(i=0; i<modalAinner.length; i++){
            modalAinner[i].remove();
            console.log(modalAinner[i]);
        }
    }
}
    // 확인버튼
    function creditCardFuntionB(){
        modalA.style.display = "none"; 
        modalB.style.display = "none";
        modalC.style.display = "flex";
        setTimeout(() => tableNum(), 500);
    }


    // 모달 g 함수 

function tableNum(){
    
    modalC.style.display = "none";
    modalG.style.display = "flex";
    let calculate_correct_bt = document.querySelector('#calculate_correct_bt');
    let calculate_cancel_bt = document.querySelector('#calculate_cancel_bt');
    // 변수 선언

var inp =document.forms['cal'];
var input = inp.getElementsByTagName('input');
var cls_btn = document.getElementsByClassName('cls_btn')[0];
var backspace_btn = document.getElementsByClassName('backspace_btn')[0];


// 이벤트 핸들러 
for(var i = 0; i<input.length; i++){
    // 숫자와 사칙 연사자만 입력처리 
    if(input[i].value != 'back' && input[i].value != 'clear'){
        input[i].onclick = function(){
            calc(this.value);
        }
    }
}   //end if
// 계산기 입력 처리 함수 
function calc(value){
    // 입력이 들어가면 0을 지움
    if(inp['result'].value ==0){
        inp['result'].value ='';
    }
    // 입력 값을 결과창에 출력
    inp['result'].value += value;

    if(inp['result'].value > 10000){
        
        inp['result'].value =0;
        
    }    
}
// 이벤트 핸들러 

// 초기화 버튼
cls_btn.onclick = function(){
    clr();
}
// 계산기 초기화(clear)
function clr(){
    inp['result'].value =0;
}
// 백스페이스 버튼 
backspace_btn.onclick = function(){
    back();
}

// 백스페이스 이벤트
function back(){
    let backstring = inp['result'].value
    let newbackstring =backstring.substr(1);
    console.log(newbackstring);
    inp['result'].value = newbackstring;
    console.log(newbackstring);
    if(inp['result'].value ==''){
        inp['result'].value =0;
    }
}
    
    calculate_correct_bt.addEventListener('click',printOrNot);
    calculate_cancel_bt.addEventListener('click', table_cancel);


    function table_cancel(){
        inp['result'].value = 0;
        printOrNot();
    }
}




// print 함수 


function printOrNot(){
    
    modalG.style.display = "none";
    modalD.style.display = "flex";
    console.log('time')
    reciptBt1.addEventListener('click',print1);
    reciptBt2.addEventListener('click',print2);
    
    function print1(){
        modalD.style.display = "none";
        modalE.style.display = "flex";
        
        function printPage(){
            var initBody;
            
            // 프린트 부모설정
            let receipt_img = document.getElementById('receipt_img');
            
            // 프린트 sprint 설정
            let receiptdiv = document.createElement('div');
            receipt_img.append(receiptdiv);
            receiptdiv.id = 'sprint';
            let sprint =  document.querySelector('#sprint');
            // sprint 자식1 설정
            let receiptdiv_1 = document.createElement('div');
            let label =  document.querySelectorAll('.label');
            receiptdiv_1.innerHTML= 
            `
            <div>${label[0].textContent} [ 영수증 ]</div>
            <div style="border-bottom: 2px solid black;" >매장명: ${label[1].textContent}</div>
            <div class="grid justify-content-center align-items-center py-1" 
            style="-bs-rows: 1; --bs-columns: 12; --bs-gap: 0rem; font-size:3px; border-bottom: 2px solid black;">
                    <div class="g-col-6">상품명</div>
                    <div class="g-col-4">단가</div>
                    <div class="g-col-2">수량</div>
                </div>`
            

            sprint.append(receiptdiv_1);
            // sprint 자식2 설정 
            let InnerTr = document.querySelectorAll('.innertr'); 
            let card_q = document.querySelectorAll('.card_q')
            for( i=0; i<InnerTr.length; i++){
                let makeDiv = document.createElement('div');
                makeDiv.innerHTML = 
                `<div class="grid justify-content-center align-items-center p-0" 
                    style="-bs-rows: 1; --bs-columns: 12; --bs-gap: 0rem; max-height:60px; overflow:hidden; font-size: .4rem;">
                    <div class="g-col-6" style="text-align: start;">${InnerTr[i].children[1].textContent}</div>
                    <div class="g-col-4"><span>${InnerTr[i].children[3].textContent}</span>원</div>
                    <div class="g-col-2">${card_q[i].textContent}</div>
                </div>`
                sprint.append(makeDiv);
            }

            // sprint 자식3 설정 
            
            let inp = document.forms['cal'];
            let input = inp.getElementsByTagName('input');
            let inputValue = Number(input[0].value);
            console.log(inputValue);
            console.dir(inputValue);
            
            let receiptdiv_3 = document.createElement('div');
            let orderNum = Math.round(Math.random()*(300-1)-1)
           
            receiptdiv_3.innerHTML= 
            `
            <div class="grid justify-content-center align-items-center py-1" style="-bs-rows: 1; --bs-columns: 2; --bs-gap: 0rem; font-size:3px; border-top: 2px solid black; border-bottom: 2px solid black;">
                    <div>합계금액</div>
                    <div>${allPrice.textContent}</div>
                </div>
                <div class="pt-2 mb-2">
                <div>주문번호 : <span>${orderNum}</span></div>
                <div>테이블 번호 : <span>${inputValue}</span></div>
                </div>
                `
            sprint.append(receiptdiv_3);
            
                // sprint.append(makeDiv);
                let recipt_img = document.querySelector('.receipt-img_inner');
                let completeBt = modalE.querySelector('.complete-bt1');
                let complete_title = document.querySelector('.complete-title');
                let complete_text = document.querySelector('.complete-text');
                let modalEinner = document.getElementById('modal-e-inner');
                window.onbeforeprint = function(){
                    initBody = sprint;
                    sprint =  document.getElementById('sprint');
                    completeBt.style.display = "none";
                    recipt_img.style.display = "none";
                    complete_title.style.display = "none";
                    complete_text.style.display = "none";
                    modalEinner.style.border ="none";
                    modalEinner.style.background ="white";
                    console.log(initBody);
                    console.log(sprint);
                };
                
                window.onafterprint = function(){
                    sprint = initBody;
                    console.log(initBody);
                    completeBt.style.display = "grid";
                    recipt_img.style.display = "grid";
                    complete_title.style.display = "grid";
                    complete_text.style.display = "grid";
                    modalEinner.style.border = "2px solid gray";
                    modalEinner.style.background = "#F1F1F1";
                    completeBt.addEventListener('click',endCode);
                    sprint.style.display ='none';
                    
                };
                window.print();
                
            };
            printPage();
            
            
    }
    
    
    function print2(){
        modalD.style.display = "none";
        modalE.style.display = "flex";
        completeText.style.visibility ="hidden";
        completeImg.style.visibility = "hidden";
        completeBt.addEventListener('click',endCode);
    }
    
}







//  페이지 이동
function endCode(){
    let link = 'index.html';
    console.log('finish')
    location.replace(link);
}










    // 주문 전체 수량



        
   
//     let allorderq = document.querySelectorAll('.card_q')
//     for( i=0; i<allorder.length; i++){
//         console.log(allorder[i]);
//        console.log(allorderq[i].innerText);
//        allorderq[i].innerText= +1;
//        allorderq[i].onclick =text;

//        function text(){
//         console.log("dfd");
//     }
// }

    // let elementLi =document.createElement('li');
    // let elementA = document.createElement('a');
    // navbar_nav.appendChild(elementLi);
    // elementLi.appendChild(elementA);
    // elementLi.className ='nav-items';
    // elementA.className = 'nav-link';
    // elementA.textContent = foodData1[0].title;

    // for(let i =0 ; i<)



