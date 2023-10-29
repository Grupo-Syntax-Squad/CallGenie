export function mudouTamanho(itens) {
    if (window.innerWidth >=768) {
        itens.style.display = 'flex';
    } else {
        itens.style.display = 'none';
    }
}

export function clickMenu(itens) {
    if (itens.style.display == 'flex') {
        itens.style.display = 'none';
    } else {
        itens.style.display = 'block';
    }
}
