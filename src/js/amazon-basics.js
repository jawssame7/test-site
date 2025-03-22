// カテゴリーカードのクリックイベント
document.querySelectorAll('.category-card').forEach((card) => {
  card.addEventListener('click', () => {
    const category = card.querySelector('h3').textContent;
    // 実際のプロジェクトではカテゴリーページに遷移
    console.log(`${category}のカテゴリーページに遷移`);
  });
});

// セール終了までのカウントダウン
function updateDealCountdowns() {
  document.querySelectorAll('.deal-expires').forEach((dealElement) => {
    const days = parseInt(dealElement.textContent.match(/\d+/)[0]);
    if (days > 0) {
      const hours = Math.floor(Math.random() * 24); // デモ用のランダムな時間
      const minutes = Math.floor(Math.random() * 60);
      dealElement.textContent = `セール終了まで: ${days}日 ${hours}時間 ${minutes}分`;
    } else {
      dealElement.textContent = 'セール終了';
      dealElement.style.color = '#666';
    }
  });
}

// 1分ごとにカウントダウンを更新
setInterval(updateDealCountdowns, 60000);
updateDealCountdowns(); // 初期表示

// 商品カードのホバーエフェクト
const cards = document.querySelectorAll('.product-card, .deal-card');
cards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// 品質保証セクションのアニメーション
const guaranteeSection = document.querySelector('.quality-guarantee');
window.addEventListener('scroll', () => {
  const rect = guaranteeSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight * 0.75) {
    guaranteeSection.style.opacity = '1';
    guaranteeSection.style.transform = 'translateY(0)';
  }
});

// 初期状態で品質保証セクションを非表示
guaranteeSection.style.opacity = '0';
guaranteeSection.style.transform = 'translateY(20px)';
guaranteeSection.style.transition = 'opacity 0.5s, transform 0.5s';
