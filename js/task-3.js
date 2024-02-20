function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content); // перетворюємо рядкове значення ширини контенту в число
    const paddingWidth = parseFloat(padding); // перетворюємо рядкове значення горизонтального падінгу в число
    const borderWidth = parseFloat(border); // перетворюємо рядкове значення товщини бордера в число
    return contentWidth + 2 * paddingWidth + 2 * borderWidth; // розраховуємо загальну ширину елемента
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
