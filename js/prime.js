// プライム会員登録ボタンのイベントリスナー
document.querySelector('.prime-join-button').addEventListener('click', () => {
  // 実際のプロジェクトでは登録フローに遷移
  alert('プライム会員登録ページに遷移します');
});

// 料金プランの登録ボタンのイベントリスナー
document.querySelectorAll('.pricing-card button').forEach((button) => {
  button.addEventListener('click', (e) => {
    const plan = e.target
      .closest('.pricing-card')
      .querySelector('h3').textContent;
    // 実際のプロジェクトでは選択されたプランで登録フローに遷移
    alert(`${plan}の登録ページに遷移します`);
  });
});

// 特典カードのアニメーション
document.querySelectorAll('.benefit-card').forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.querySelector('i').style.transform = 'scale(1.2)';
  });

  card.addEventListener('mouseleave', () => {
    card.querySelector('i').style.transform = 'scale(1)';
  });
});
