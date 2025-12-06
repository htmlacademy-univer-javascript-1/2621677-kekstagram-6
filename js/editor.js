const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValueInput = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

const effectsList = document.querySelector('.effects__list');
const effectLevelContainer = document.querySelector('.img-upload__effect-level');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');

const EFFECTS = {
  none: {
    filter: 'none',
    unit: '',
    min: 0,
    max: 0,
    step: 0,
    start: 0
  },
  chrome: {
    filter: 'grayscale',
    unit: '',
    min: 0,
    max: 1,
    step: 0.1,
    start: 1
  },
  sepia: {
    filter: 'sepia',
    unit: '',
    min: 0,
    max: 1,
    step: 0.1,
    start: 1
  },
  marvin: {
    filter: 'invert',
    unit: '%',
    min: 0,
    max: 100,
    step: 1,
    start: 100
  },
  phobos: {
    filter: 'blur',
    unit: 'px',
    min: 0,
    max: 3,
    step: 0.1,
    start: 3
  },
  heat: {
    filter: 'brightness',
    unit: '',
    min: 1,
    max: 3,
    step: 0.1,
    start: 3
  }
};

let currentEffect = 'none';
let sliderInstance = null;

const DEFAULT_SCALE = 100;
const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;

const setScale = (value) => {
  scaleValueInput.value = `${value}%`;
  imagePreview.style.transform = `scale(${value / 100})`;
};

const onScaleSmallerClick = () => {
  const currentValue = parseInt(scaleValueInput.value, 10);
  const newValue = Math.max(currentValue - SCALE_STEP, SCALE_MIN);
  setScale(newValue);
};

const onScaleBiggerClick = () => {
  const currentValue = parseInt(scaleValueInput.value, 10);
  const newValue = Math.min(currentValue + SCALE_STEP, SCALE_MAX);
  setScale(newValue);
};

const applyEffect = (value) => {
  const effect = EFFECTS[currentEffect];

  if (currentEffect === 'none') {
    imagePreview.style.filter = 'none';
    return;
  }

  let displayValue = value;
  if (effect.unit === '%') {
    displayValue = Math.round(value);
  } else if (effect.step === 0.1) {
    displayValue = value.toFixed(1);
  }

  const filterValue = `${effect.filter}(${displayValue}${effect.unit})`;
  imagePreview.style.filter = filterValue;

  if (effectLevelValue) {
    effectLevelValue.value = displayValue;
  }
};

const createSlider = () => {
  if (typeof noUiSlider === 'undefined') {
    console.error('noUiSlider не найден. Проверьте подключение библиотеки.');
    return null;
  }

  if (!effectLevelSlider) {
    console.error('Элемент слайдера не найден');
    return null;
  }

  try {
    if (effectLevelSlider.noUiSlider) {
      effectLevelSlider.noUiSlider.destroy();
    }

    sliderInstance = noUiSlider.create(effectLevelSlider, {
      range: {
        min: 0,
        max: 100
      },
      start: 100,
      step: 1,
      connect: 'lower'
    });

    sliderInstance.on('update', (values) => {
      const value = values[0];
      applyEffect(value);
    });

    console.log('Слайдер создан успешно');
    return sliderInstance;
  } catch (error) {
    console.error('Ошибка создания слайдера:', error);
    return null;
  }
};

const updateSliderForEffect = (effectName) => {
  const effect = EFFECTS[effectName];

  if (effectName === 'none') {
    effectLevelContainer.classList.add('hidden');
    imagePreview.style.filter = 'none';
    if (effectLevelValue) {
      effectLevelValue.value = '';
    }

    if (sliderInstance) {
      sliderInstance.destroy();
      sliderInstance = null;
    }
    return;
  }

  effectLevelContainer.classList.remove('hidden');

  if (!sliderInstance) {
    sliderInstance = createSlider();
    if (!sliderInstance) {
      return;
    }
  }

  sliderInstance.updateOptions({
    range: {
      min: effect.min,
      max: effect.max
    },
    start: effect.start,
    step: effect.step
  });

  applyEffect(effect.start);
};

const onEffectChange = (evt) => {
  if (evt.target.type === 'radio') {
    currentEffect = evt.target.value;
    updateSliderForEffect(currentEffect);
  }
};

const resetEffects = () => {
  currentEffect = 'none';
  imagePreview.style.filter = 'none';

  if (effectLevelValue) {
    effectLevelValue.value = '';
  }

  const noneEffect = document.querySelector('#effect-none');
  if (noneEffect) {
    noneEffect.checked = true;
  }

  effectLevelContainer.classList.add('hidden');

  if (sliderInstance) {
    sliderInstance.destroy();
    sliderInstance = null;
  }
};

const initEditor = () => {
  setScale(DEFAULT_SCALE);

  scaleSmallerButton.addEventListener('click', onScaleSmallerClick);
  scaleBiggerButton.addEventListener('click', onScaleBiggerClick);

  effectsList.addEventListener('change', onEffectChange);

  effectLevelContainer.classList.add('hidden');

  resetEffects();

  console.log('Редактор инициализирован');
};

const resetEditor = () => {
  setScale(DEFAULT_SCALE);
  resetEffects();
};

export { initEditor, resetEditor };
