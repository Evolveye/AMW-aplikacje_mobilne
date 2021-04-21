# Lab 3

**Kod pisany bez zaglądania do materiałów prowadzacego -- powinien więc różnić w całości**

 1. Na pierwszym ekranie należy zaimplementować sortowanie i filtrowanie danych; danymi niech będzie 100 pseudolosowych liczb całkowitych z zakresu (0, 1000).  
 **Wykonano**. W aplikacji znajdują się specjalne guziki do posortowania oraz przefiltrowania liczb.  
 Link do kodu: [github.com/Evolveye/aplikacje-mobilne/.../sortNums](https://github.com/Evolveye/aplikacje-mobilne-21717-185ic/blob/master/app/views/sortNums.js)


 2. Na drugim ekranie należy zaimplementować "leniwe ładowanie" (lazy loading) listy danych; danymi niech będą pseudolosowe litery.  
    **Wykonano**. Do utworzenia lazy loading wykorzystałem funkcję `setTimeout`, lecz kod zadziałałby identycznie przy wykorzystaniu `fetch` czy `import`.  
    Link do kodu: [github.com/Evolveye/aplikacje-mobilne/.../lazyLoading](https://github.com/Evolveye/aplikacje-mobilne-21717-185ic/blob/master/app/views/lazyLoading.js)


 3. Na ekranach od nr 3 do nr 5 należy zaimplementować progres krokowy (step progress); na kolejnych ww. ekranach powinny znaleźć się elementy ActivityIndicator, ostylowane inaczej na każdym z ekranów 3-5.  
    **Wykonano**. Wykorzystano tu komponent `ActivityIndicator` oraz moduł `StepIndicator`.  
    Linki do kodu:
      - [github.com/Evolveye/aplikacje-mobilne/.../progress1](https://github.com/Evolveye/aplikacje-mobilne-21717-185ic/blob/master/app/views/progress1.js)
      - [github.com/Evolveye/aplikacje-mobilne/.../progress2](https://github.com/Evolveye/aplikacje-mobilne-21717-185ic/blob/master/app/views/progress2.js)
      - [github.com/Evolveye/aplikacje-mobilne/.../progress3](https://github.com/Evolveye/aplikacje-mobilne-21717-185ic/blob/master/app/views/progress3.js)
