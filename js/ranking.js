// タブ切り替え
const tabs = document.querySelectorAll('.tab-button');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    // 実際のプロジェクトではここでランキングデータを切り替え
    console.log(`${tab.textContent}ランキングを表示`);
  });
});

// カテゴリーフィルター
const categories = document.querySelectorAll('.category-filter li');
categories.forEach((category) => {
  category.addEventListener('click', () => {
    categories.forEach((c) => c.classList.remove('active'));
    category.classList.add('active');
    // 実際のプロジェクトではここでカテゴリーでフィルター
    console.log(`${category.textContent}のランキングを表示`);
  });
});

// さらに表示ボタン
let currentPage = 1;
document.querySelector('.load-more button').addEventListener('click', () => {
  currentPage++;
  // 実際のプロジェクトではここで追加のランキングデータを読み込み
  console.log('追加のランキングデータを読み込み');
});

// ランキングアイテムのホバーエフェクト
document.querySelectorAll('.ranking-item').forEach((item) => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'translateY(-5px)';
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = 'translateY(0)';
  });
});

// レーティングの動的表示（実際のプロジェクトではAPIからデータを取得）
function updateRating(ratingElement, score) {
  const stars = ratingElement.querySelectorAll('i');
  stars.forEach((star, index) => {
    if (index < Math.floor(score)) {
      star.className = 'fas fa-star';
    } else if (index === Math.floor(score) && score % 1 !== 0) {
      star.className = 'fas fa-star-half-alt';
    } else {
      star.className = 'far fa-star';
    }
  });
}
