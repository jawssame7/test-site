// トップへ戻るボタンの機能
document.querySelector('.back-to-top').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// カルーセル画像の配列（実際のプロジェクトでは実際の画像URLに置き換えてください）
const carouselImages = [
  'https://placehold.jp/1200x400.png',
  'https://placehold.jp/3d4070/ffffff/1200x400.png',
  'https://placehold.jp/70403d/ffffff/1200x400.png',
];

let currentImageIndex = 0;
const carouselImg = document.querySelector('.carousel img');

// カルーセルの自動切り替え
setInterval(() => {
  currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
  carouselImg.src = carouselImages[currentImageIndex];
}, 5000);

// タイムセールのカウントダウン
function updateTimeRemaining() {
  const timeElement = document.querySelector('.time-remaining');
  if (!timeElement) return;

  let [hours, minutes, seconds] = timeElement.textContent
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
        timeElement.textContent = '終了しました';
        return;
      }
    }
  }

  timeElement.textContent = `残り時間: ${String(hours).padStart(
    2,
    '0'
  )}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

setInterval(updateTimeRemaining, 1000);

// 検索バーのフォーカス時のスタイル
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('focus', () => {
  searchInput.parentElement.style.outline = '2px solid #ff9900';
});

searchInput.addEventListener('blur', () => {
  searchInput.parentElement.style.outline = 'none';
});
