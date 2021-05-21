# Lab 6

**Kod pisany bez zaglądania do materiałów prowadzacego -- powinien więc różnić w całości**


 1. Należy zaimplementować użycie bazy danych (SQLite lub innej) w dwóch wariantach, opisanych poniżej.  
    **Wykonano**. Oba widoki korzystają ze [wspólnej części do renderowania](https://github.com/Evolveye/aplikacje-mobilne-21717-185ic/blob/master/app/containers/sqlite.js).

 2. W pierwszym wariancie tworzymy bazę w momencie uruchomienia aplikacji.  
    **Raczej wykonano**. Skłądnia SQLite nie pozawala na skasowanie bazy. Rozwiązania jakie dostrzegłem były 2.
    Pierwszy to poprzez jakiś moduł typu `filesystem` skasowac plik bazy a następnie go utworzyć.
    Drugi natomiast to ten na który przystałem --
    [podłączenie się do bazy i jej wyczyszczenie tabela po tabeli](https://github.com/Evolveye/aplikacje-mobilne-21717-185ic/blob/master/app/views/sqliteRestart.js).
    

 3. W drugim korzystamy z bazy danych już istniejącej  
    **Wykonano** -- tutaj nic nadzwyczajnego.
    Po prostu [łączę się z baza i na niej operuję](https://github.com/Evolveye/aplikacje-mobilne-21717-185ic/tree/master/app/views).
  
[Nagranie poglądowe na platformie YouTube](https://www.youtube.com/watch?v=-q9mnG-ZUG4)
