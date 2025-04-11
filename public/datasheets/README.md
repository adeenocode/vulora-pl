# Karty Charakterystyk Produktów

Ten folder służy do przechowywania kart charakterystyk produktów w formacie PDF.

## Aktualne pliki
Obecnie w komponencie Products.astro są odniesienia do następujących plików:

- vm-nawoz-fosfor.pdf - Karta charakterystyki nawozu fosforowego
- vm-nawoz-potas.pdf - Karta charakterystyki nawozu potasowego
- vm-mineralizator.pdf - Karta charakterystyki mineralizatora (polepszacza glebowego)
- vm-nawoz-trawnik.pdf - Karta charakterystyki nawozu do trawników
- vm-nawoz-borowka.pdf - Karta charakterystyki nawozu do iglaków i borówek

## Instrukcja użycia

1. Umieść pliki PDF z kartami charakterystyk w tym folderze
2. Upewnij się, że nazwy plików odpowiadają nazwom używanym w komponencie Products.astro
3. Pliki będą dostępne pod ścieżką `/datasheets/nazwa-pliku.pdf`

## Konwencja nazewnictwa

Zalecane jest używanie następującego formatu nazw plików:
`vm-nawoz-[typ].pdf`, gdzie [typ] to krótka nazwa produktu (np. fosfor, potas, trawnik).