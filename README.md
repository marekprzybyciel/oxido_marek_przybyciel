# Kilka ważnych informacji

Przetwarzanie Artykułów na HTML za pomocą OpenAI

Projekt służy do przekształcania treści artykułów zapisanych w pliku tekstowym na sformatowany kod HTML, z wykorzystaniem API OpenAI. Wygenerowany kod HTML zawiera strukturyzowaną treść, miejsca na grafiki oraz odpowiednie podpisy pod obrazkami.
Wymagania

    Node.js (zalecana wersja 16.x lub wyższa)
    Konto OpenAI z aktywnym kluczem API
    Plik tekstowy z artykułem (article.txt)

Funkcjonalności

    Odczyt treści artykułu z pliku tekstowego.
    Wysłanie treści do OpenAI.
    Wygenerowanie i zapisanie kodu HTML do pliku article.html.

Instalacja

    Sklonuj repozytorium:

git clone https://github.com/your-repo-name.git

Zainstaluj npm:
npm install

Skonfiguruj plik .env i dodaj swój klucz API OpenAI:
    OPENAI_API_KEY=api_key

Uruchamianie projektu:
    Aby uruchomić przetwarzanie artykułu, wykonaj następujące polecenie:
node app.js

Po zakończeniu działania aplikacji, wygenerowany plik HTML będzie dostępny w katalogu projektu jako article.html.