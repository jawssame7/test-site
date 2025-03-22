// タイムセール商品データ（実際のプロジェクトではAPIから取得）
const timesaleProducts = [
  {
    name: '商品名がここに入ります',
    currentPrice: 4980,
    originalPrice: 9960,
    timeRemaining: '05:23:45',
    discount: 50,
    image: 'https://placehold.jp/300x300.png',
    isPrime: true,
  },
  // 他の商品データ
];

// フィルター機能
document.querySelectorAll('.timesale-filter select').forEach((select) => {
  select.addEventListener('change', filterProducts);
});

function filterProducts() {
  // フィルター処理の実装
  console.log('フィルター適用');
}

// カウントダウンタイマーの更新
function updateAllTimers() {
  document.querySelectorAll('.time-remaining').forEach((timer) => {
    let [hours, minutes, seconds] = timer.textContent
      .split(': ')[1]
      .split(':')
      .map(Number);

    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
      if (minutes < 0) {
        minutes = 59;
        hours--;
        if (hours < 0) {
          timer.textContent = '終了しました';
          timer.closest('.product-card').style.opacity = '0.5';
          return;
        }
      }
    }

    timer.textContent = `残り時間: ${String(hours).padStart(2, '0')}:${String(
      minutes
    ).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  });
}

setInterval(updateAllTimers, 1000);

// さらに表示ボタンの処理
let currentPage = 1;
document.querySelector('.load-more button').addEventListener('click', () => {
  currentPage++;
  // 追加の商品を読み込む処理（実際のプロジェクトではAPIから取得）
  console.log('追加の商品を読み込み');
});
