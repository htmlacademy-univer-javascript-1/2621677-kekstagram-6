// Функция проверки длины строки
const checkStringLength = function(string, maxLength) {
    // Сравниваем длину строки с максимальной длиной
    return string.length <= maxLength;
};


console.log('=== Тест проверки длины строки ===');
console.log('20 символов:', checkStringLength('проверяемая строка', 20));
console.log('18 символов:', checkStringLength('проверяемая строка', 18));
console.log('10 символов:', checkStringLength('проверяемая строка', 10));

// Функция проверки палиндрома
const isPalindrome = function(string) {
    // Убираем пробелы и приводим к нижнему регистру
    const cleanString = string.replace(/ /g, '').toLowerCase();

    // Создаем перевернутую строку
    let reversedString = '';

    // Перебираем строку с конца к началу
    for (let i = cleanString.length - 1; i >= 0; i--) {
        reversedString += cleanString[i];
    }

    // Сравниваем исходную и перевернутую строку
    return cleanString === reversedString;
};


console.log('\n=== Тест проверки палиндрома ===');
console.log('топот:', isPalindrome('топот'));
console.log('Довод:', isPalindrome('Довод'));
console.log('Кекс:', isPalindrome('Кекс'));
console.log('Фраза с пробелами:', isPalindrome('Лёша на полке клопа нашёл'));

// Функция извлечения цифр из строки
const extractNumbers = function(input) {
    // Преобразуем в строку (на случай числа)
    const text = input.toString();
    let numbers = '';

    // Перебираем каждый символ
    for (let i = 0; i < text.length; i++) {
        const character = text[i];
        // Проверяем, является ли символ цифрой
        if (character >= '0' && character <= '9') {
            numbers += character;
        }
    }

    // Если цифр нет - возвращаем NaN, иначе число
    if (numbers === '') {
        return NaN;
    } else {
        return parseInt(numbers, 10);
    }
};


console.log('\n=== Тест извлечения цифр ===');
console.log('2023 год:', extractNumbers('2023 год'));
console.log('ECMAScript 2022:', extractNumbers('ECMAScript 2022'));
console.log('1 кефир, 0.5 батона:', extractNumbers('1 кефир, 0.5 батона'));
console.log('агент 007:', extractNumbers('агент 007'));
console.log('а я томат:', extractNumbers('а я томат'));
console.log('Число 2023:', extractNumbers(2023));
console.log('Отрицательное число:', extractNumbers(-1));
console.log('Дробное число:', extractNumbers(1.5));
