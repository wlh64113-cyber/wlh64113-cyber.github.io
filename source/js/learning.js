(() => {
  const initLearningProgress = () => {
    const root = document.querySelector('[data-learning-system]');
    if (!root) return;

    const checkboxes = [...root.querySelectorAll('[data-lesson-check]')];
    const progressText = root.querySelector('[data-learning-progress-text]');
    const progressFill = root.querySelector('[data-learning-progress-fill]');
    const storageKey = 'blog-of-even-learning-progress-v2';

    let state = {};
    try {
      state = JSON.parse(localStorage.getItem(storageKey) || '{}');
    } catch (_) {
      state = {};
    }

    const render = () => {
      let completed = 0;
      checkboxes.forEach((checkbox) => {
        const key = checkbox.dataset.lessonCheck;
        const checked = Boolean(state[key]);
        checkbox.checked = checked;
        checkbox.closest('.learning-item')?.classList.toggle('is-complete', checked);
        if (checked) completed += 1;
      });

      const total = checkboxes.length;
      const percent = total ? Math.round((completed / total) * 100) : 0;
      if (progressText) progressText.textContent = `${completed} / ${total} · ${percent}%`;
      if (progressFill) progressFill.style.width = `${percent}%`;
    };

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('click', (event) => event.stopPropagation());
      checkbox.addEventListener('change', () => {
        const key = checkbox.dataset.lessonCheck;
        state[key] = checkbox.checked;
        localStorage.setItem(storageKey, JSON.stringify(state));
        render();
      });
    });

    render();
  };

  document.addEventListener('DOMContentLoaded', initLearningProgress);
  document.addEventListener('pjax:complete', initLearningProgress);
})();
