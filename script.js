document.getElementById('generate-button').addEventListener('click', generateScandal);

function generateScandal() {
    const people = [
        "prezes klubu", "działacz", "piłkarz", "baron", "bramkarz", "kapitan", "trener", 
        "lekarz sportowy", "sędzia piłkarski", "kolega prezesa", "kibic", "menadżer drużyny", 
        "asystent trenera", "psycholog sportowy", "rzecznik prasowy", "dyrektor sportowy", 
        "fizjoterapeuta", "scout", "agent piłkarski", "zawodnik rezerwowy", "legendarny piłkarz", 
        "właściciel klubu", "sponsor drużyny", "trener bramkarzy", "trener przygotowania fizycznego", 
        "analityk taktyczny", "dietetyk sportowy", "kucharz drużyny", "kierownik drużyny", 
        "członek zarządu", "wolontariusz klubowy", "koordynator ds. młodzieży", "były zawodnik", 
        "dyrektor akademii piłkarskiej", "komentator sportowy", "dziennikarz sportowy", 
        "technik sprzętowy", "osobisty trener piłkarza", "fanatyk klubowy", "młody talent"
    ];
    const actions = [
        "ustawiał mecze", "brał łapówki", "był pod wpływem alkoholu przed meczem", 
        "fałszował dokumenty", "został uderzony tacką na dokumenty", 
        "kupił mecz dla swojej drużyny", "pobił się z kibicem", "manipulował wynikami zakładów bukmacherskich", 
        "fałszował dokumenty finansowe", "był zamieszany w korupcję", "manipulował wynikami meczów", 
        "znęcał się nad zawodnikami", "sprzedał klub podejrzanym inwestorom", "stosował doping", 
        "używał obraźliwego języka wobec zawodników", "obstawiał wyniki meczów"
    ];
    const reasons = [
        "w celu zdobycia przewagi w lidze", "dla szybszego powrotu do zdrowia", "pod presją ze strony zarządu", 
        "pod wpływem stresu", "dla korzyści finansowych", "pod wpływem impulsu", "bo tak", "z powodu złego dnia", 
        "bo miał koszmar w nocy", "po przegranej grze w karty", "z powodu przegranej zakładu", "bo nie lubi swojego szefa", 
        "bo był w złym humorze", "z powodu nieudanej fryzury", "bo stracił ulubioną koszulkę", "bo mu się nudziło", 
        "bo chciał udowodnić coś koledze", "bo był głodny", "po kłótni z partnerką", "bo źle zrozumiał instrukcje", 
        "bo pomylił mecz z treningiem", "bo zaspał i się spóźnił", "bo miał pecha przez cały dzień", "bo zgubił klucze do szatni", 
        "bo miał zły sen o meczu", "bo przegrał zakład z kolegą", "bo pomylił dzień tygodnia", "bo był zły na pogodę", 
        "bo zapomniał o urodzinach trenera", "bo był głodny i chciał zjeść obiad", "bo chciał zaimponować fanom", 
        "bo chciał zostać bohaterem memów", "bo jego ulubiony serial został anulowany", "bo wkurzył się na sędziego", 
        "bo jego pies zjadł mu buty", "bo miał problemy z internetem", "bo usłyszał złą piosenkę w radiu", "bo miał konflikt z sąsiadem", 
        "bo bał się ciemności", "bo nie wyspał się poprzedniej nocy", "bo zapomniał okularów", "bo przegapił autobus", 
        "bo miał konflikt z kolegą z drużyny", "bo nie mógł znaleźć swojej maskotki na szczęście", "bo przegrał zakład bukmacherski", 
        "bo wylosował złą kartę w grze planszowej", "bo nie chciał się pojawić w rubrykach plotkarskich", "bo uznał to za 'dobry żart'"
    ];

    const person = people[Math.floor(Math.random() * people.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const reason = reasons[Math.floor(Math.random() * reasons.length)];

    const output = `W polskiej piłce ${person} ${action} ${reason}.`;
    document.getElementById('output').innerText = output;
}
