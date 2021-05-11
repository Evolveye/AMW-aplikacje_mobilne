# Lab 4

**Kod pisany bez zaglądania do materiałów prowadzacego -- powinien więc różnić w całości**

 1. Na pierwszym ekranie należy zaimplementować ładowanie dwóch obrazków (komponent Image) - pierwszy za pomocą właściwości 'uri', a drugi z użyciem metody require(),  
    **Wykonano** z drobną różnicą -- programuję modułowo, dlatego też użylem składni `import ... from ...` zamaist `require( ... )`.  
    [Kod widoku](https://github.com/Evolveye/aplikacje-mobilne-21717-185ic/blob/master/app/views/images.js).
    Warto dodac, ze gif który jest tam obecny chciałem wykonać jako pixelart -- ustawić tryb renderowania obrazka na `piselated` jak to ma się w CSSie, lecz nie wiedziałem jak to odwzorowac w react native.

 2. Na drugim ekranie należy zaimplementować zmianę rozmiaru ładowanego obrazka za pomocą komponentu Slider, (można też na pierwszym ekranie załadować jeden obrazek ze sliderem i na drugim ekranie podobnie).  
    **Wykonano**. Nic dodać nic ująć, prosty kod do wglądu [tutaj](https://github.com/Evolveye/aplikacje-mobilne-21717-185ic/blob/master/app/views/slider.js)

 3. Na trzecim ekranie należy zaimplementować 'leniwe' ładowanie obrazka oraz renderowanie wybranego zestawu ikon.  
    **Raczej wykonano**. Wyświetlam kilka ikonek (więcej uważam za zbędne, od kopiowanie taga i zmienianie nazwy). Obrazek za to wczytuje się po prostu samodzielnie z opóźnieniem. Pod miejscem w którym się znajduje jest dołożone tło.

 4. Na kolejnym ekranie należy zaimplementować detekcję łączności z siecią i wyświetlić odpowiednią informację.  
    **Wykonano**. [Kod widoku](https://github.com/Evolveye/aplikacje-mobilne-21717-185ic/blob/master/app/views/netinfo.js).

 5. Na kolejnym ekranie należy zaimplementować obsługę zapisu danych aplikacji za pomocą AsyncStorage.
    **Wykonano**. [Kod widoku](https://github.com/Evolveye/aplikacje-mobilne-21717-185ic/blob/master/app/views/asyncStorage.js).
    Do obsługi storage utworzyłem własnego hooka, jego kod znajduje się [w tym pliku](https://github.com/Evolveye/aplikacje-mobilne-21717-185ic/blob/master/app/utils/useStoredData.js)

 6. Na ostatnim ekranie należy zaimplementować obsługę synchronizacji danych aplikacji (np. stanu wybranych elementów), w przypadkach łączności z siecią i jej braku.  
    **Wykonano**. [Kod widoku](https://github.com/Evolveye/aplikacje-mobilne-21717-185ic/blob/master/app/views/sync.js).
  
[Nagranie poglądowe na platformie YouTube](https://www.youtube.com/watch?v=IVaOsT-UOUo)
