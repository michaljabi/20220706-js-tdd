# New project + tests with `jest` 
## Step by Step

1. Tworzymy Nowy folder np. `tdd-playground`
2. [opcjonalne] Otwieramy z konsoli VSC (komenda: `code .`)
3. Inicjalizujemy [package.json](package.json) komendą `npm init -y` (flaga `-y` to "yes to all")
4. Tworzymy katalog z kodem (+ przykład main.js) [src](src)
5. Instalujemy zależnosci `jest`, wszystkie na raz:
```
npm install -D jest @jest/types
```
6. podmieniamy skrypt "test" aby uruchamiać `jest`'a
```json
{
    "test": "jest"
}
```