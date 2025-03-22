document.addEventListener('DOMContentLoaded', () => {
  // カスタム金額の表示/非表示を制御
  const amountSelect = document.querySelector('.form-group select');
  const customAmountGroup = document.querySelector('.custom-amount');

  amountSelect?.addEventListener('change', (e) => {
    if (e.target.value === 'custom') {
      customAmountGroup.style.display = 'block';
    } else {
      customAmountGroup.style.display = 'none';
    }
  });

  // デザイン選択の制御
  const designOptions = document.querySelectorAll('.design-options img');
  let selectedDesign = null;

  designOptions.forEach((design) => {
    design.addEventListener('click', () => {
      // 以前の選択を解除
      if (selectedDesign) {
        selectedDesign.style.borderColor = 'transparent';
      }
      // 新しい選択を適用
      design.style.borderColor = '#ff9900';
      selectedDesign = design;
    });
  });

  // ギフト券タイプの選択時のアニメーション
  const typeCards = document.querySelectorAll('.type-card');

  typeCards.forEach((card) => {
    card.addEventListener('click', () => {
      // クリック時のアニメーション
      card.style.transform = 'scale(0.95)';
      setTimeout(() => {
        card.style.transform = 'translateY(-5px)';
      }, 200);
    });
  });

  // シーンカードのホバーエフェクト
  const occasionCards = document.querySelectorAll('.occasion-card');

  occasionCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
    });
  });

  // フォーム送信の処理
  const customizeForm = document.querySelector('.customize-form');

  customizeForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    // 選択された値を取得
    const amount =
      amountSelect.value === 'custom'
        ? document.querySelector('.custom-amount input').value
        : amountSelect.value;

    const selectedDesignSrc = selectedDesign ? selectedDesign.src : null;

    // バリデーション
    if (!amount) {
      alert('金額を選択または入力してください。');
      return;
    }

    if (!selectedDesignSrc) {
      alert('デザインを選択してください。');
      return;
    }

    // ここでギフト券作成のAPIを呼び出す想定
    console.log('ギフト券作成:', {
      amount,
      designSrc: selectedDesignSrc,
    });

    // 成功メッセージ
    alert('ギフト券が作成されました！');
  });

  // スクロールアニメーション
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      '.type-card, .occasion-card, .info-item'
    );

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;

      if (elementTop < window.innerHeight && elementBottom > 0) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // 初期状態で非表示
  document
    .querySelectorAll('.type-card, .occasion-card, .info-item')
    .forEach((element) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

  // スクロールイベントのリスナーを追加
  window.addEventListener('scroll', animateOnScroll);
  // 初期表示時にも実行
  animateOnScroll();
});
