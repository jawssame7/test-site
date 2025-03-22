// フィルターとソート機能
document.querySelector('.category-select').addEventListener('change', (e) => {
  const category = e.target.value;
  // 実際のプロジェクトではここでカテゴリーでフィルター
  console.log(`カテゴリー: ${category}で商品をフィルター`);
});

document.querySelector('.sort-select').addEventListener('change', (e) => {
  const sortBy = e.target.value;
  // 実際のプロジェクトではここでソート
  console.log(`${sortBy}で商品をソート`);
});

// 予約ボタンの処理
document.querySelectorAll('.pre-order').forEach((button) => {
  button.addEventListener('click', (e) => {
    const productName = e.target
      .closest('.coming-soon-item')
      .querySelector('h3').textContent;
    // 実際のプロジェクトでは予約フローに遷移
    alert(`${productName}の予約ページに遷移します`);
  });
});

// 商品カードのホバーエフェクト
const cards = document.querySelectorAll(
  '.featured-item, .coming-soon-item, .product-card'
);
cards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// さらに表示ボタンの処理
let currentPage = 1;
document.querySelector('.load-more button').addEventListener('click', () => {
  currentPage++;
  // 実際のプロジェクトではここで追加の商品を読み込み
  console.log('追加の商品を読み込み');
});

// 発売日のカウントダウン表示
function updateReleaseDates() {
  document.querySelectorAll('.release-date').forEach((dateElement) => {
    const releaseDate = new Date(dateElement.textContent.split(': ')[1]);
    const now = new Date();
    const diff = releaseDate - now;

    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      dateElement.textContent = `発売まで残り${days}日`;
    }
  });
}

// 初期化時に一度実行
updateReleaseDates();

// 新着バッジの自動非表示（7日以上経過した商品）
function updateNewBadges() {
  document.querySelectorAll('.arrival-date').forEach((dateElement) => {
    const arrivalDate = new Date(dateElement.textContent.split(': ')[1]);
    const now = new Date();
    const diff = now - arrivalDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days > 7) {
      const badge = dateElement
        .closest('.product-card')
        .querySelector('.new-badge');
      if (badge) {
        badge.style.display = 'none';
      }
    }
  });
}

// 初期化時に一度実行
updateNewBadges();
