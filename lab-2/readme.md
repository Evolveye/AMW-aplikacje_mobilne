# Lab 2

**Kod pisany bez zaglądania do materiałów prowadzacego -- powinien więc różnić w całości**

Zrealizowane wedle zadania elementy:
 1. Należy utworzyć 3 ekrany za pomocą react-navigation  
    **Wykonano**, nawigację można znaleźć przykładowo w
    [pliku App.js](https://github.com/Evolveye/aplikacje-mobilne-21717-185ic/blob/c4c4d3ecb516ac77f369d1fddd2e75326e086817/app/App.js#L35)

 2. Do przechodzenia między ekranami można użyć stack-navigator  
    **Wykonano** -- włącznie z punktem 1

 3. Na każdym ekranie powinny się znaleźć przyciski pozwalające przejść do dwóch pozostałych ekranów  
    **Wykonano** -- przycisk do strony głównej jest zawsze na górze. Przejście między podstronami jest w nawigacji u dołu danej akrty.
    Komponent nawigatora znajduje się w kontenerze [nav.js](https://github.com/Evolveye/aplikacje-mobilne-21717-185ic/blob/master/app/containers/nav.js)

 4. Każdy ekran powinien byc "ostylowany" w innym stylu niż pozostałe ekrany, z wykorzystaniem Flexboxa (m.in. poprzez moduły StyleSheet i Platform)  
    **Raczej wykonano** -- style pobierane są z zewnętrznego pliku jak i ze zmiennej. Każda strone ma inne style, zależnie od treści która się nań znajduje.
    Można je zobaczyć w pliku [info.styles.js](https://github.com/Evolveye/aplikacje-mobilne-21717-185ic/blob/master/app/views/info.styles.js)
    oraz w zmiennych w plikacj [calculator.js](https://github.com/Evolveye/aplikacje-mobilne-21717-185ic/blob/c4c4d3ecb516ac77f369d1fddd2e75326e086817/app/views/calculator.js#L145)
    i [App.js](https://github.com/Evolveye/aplikacje-mobilne-21717-185ic/blob/c4c4d3ecb516ac77f369d1fddd2e75326e086817/app/App.js#L56)

 5. Style należy utworzyć w pliku styles.js i zaimportować w odpowiednim miejscu,  
    **Wykonano** dla jednego z widoków -- dla widoku z informacjami ([info.styles.js](https://github.com/Evolveye/aplikacje-mobilne-21717-185ic/blob/master/app/views/info.styles.js))

 6. Należy umieścić na ww. ekranach informacje, czym jest spread operator, czym są rest parameters oraz do czego służy 'hook' useState  
    **Wykonano** -- informacje te znajduja się na [widoku Info](https://github.com/Evolveye/aplikacje-mobilne-21717-185ic/blob/master/app/views/info.js)

**➕** za modyfikacje layoutów (tak, by były inne niż te w przykładach).  
Cały kod został przygotowany samodzielnie, bez zaglądania do kodu prowadzacego czy przykładów.

[Nagranie poglądowe na platformie YouTube](https://www.youtube.com/watch?v=0rEnZlOXL7A)
