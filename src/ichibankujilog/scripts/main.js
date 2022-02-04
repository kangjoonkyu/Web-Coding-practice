
//画像の切り替えの追加
let myImage = document.querySelector('img');//img要素への参照

myImage.onclick = function(){
  let mySrc = myImage.getAttribute('src');//画像のsrc属性の値を取得
  if(mySrc === 'images/hero_image_test1.jpg'){
    myImage.setAttribute('src','images/hero_image_test2.jpg');//属性の追加
  }else{
    myImage.setAttribute('src','images/hero_image_test1.jpg');
  }
}


//パーソナライズされた挨拶メッセージの追加
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
  let myName = prompt('あなたの名前を入力してください');//prompt関数　ユーザにテキスト入力を促すメッセージのダイアログを表示
  if(!myName){//nullチェック
    setUserName();
  }else{
  localStorage.setItem('name',myName);//ローカルストレージオブジェクトへアクセス
  myHeading.textContent = 'Mozillaは素晴らしいよ'+myName;
  }
}

if(!localStorage.getItem('name')){//否定演算子でデータの有無をチェック
  setUserName();//データがなかったら上記関数の実行
}else{
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Moziliaはすばらしいよ' + storedName;
}

myButton.onclick = function(){//ボタンクリック時
  setUserName();
}













