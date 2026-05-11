'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Lang = 'en' | 'ru' | 'pl' | 'de' | 'fr' | 'es' | 'it' | 'pt' | 'tr' | 'zh' | 'ja' | 'ko' | 'ar'

export interface Translations {
  nav: { home: string; privacy: string; terms: string; support: string }
  footer: { rights: string; privacy: string; terms: string; support: string }
  hero: { badge: string; subtitle: string; cta: string }
  features: {
    sectionTitle: string
    sectionSubtitle: string
    items: { icon: string; title: string; body: string }[]
  }
  cta: { title: string; body: string; button: string }
  legal: { label: string; privacyTitle: string; termsTitle: string; lastUpdated: string }
  support: {
    label: string
    title: string
    gameDesc: string
    helpDesc: string
    emailLabel: string
    emailNote: string
    faqTitle: string
    faqs: { q: string; a: string }[]
    backHome: string
    privacy: string
    terms: string
  }
}

export const translations: Record<Lang, Translations> = {
  en: {
    nav: { home: 'Home', privacy: 'Privacy', terms: 'Terms', support: 'Support' },
    footer: { rights: 'All rights reserved.', privacy: 'Privacy Policy', terms: 'Terms of Use', support: 'Support' },
    hero: {
      badge: 'Available on iOS',
      subtitle: 'Nuclear war wiped out civilization. A bunker can save only a few. Debate, bluff, and vote — decide who deserves to survive.',
      cta: 'Download on App Store',
    },
    features: {
      sectionTitle: 'HOW IT WORKS',
      sectionSubtitle: 'One app. No game master needed.',
      items: [
        { icon: '☢️', title: 'Post-Apocalyptic Setting', body: 'Nuclear war has ended civilization. A bunker with limited spots is your only hope. Who gets in?' },
        { icon: '🎭', title: 'Hidden Roles', body: "Each player receives a secret card — profession, health, skill, baggage. Reveal only what you choose." },
        { icon: '🗳️', title: 'Vote & Debate', body: 'Convince others you deserve survival. Vote out those you deem unworthy. Every round counts.' },
        { icon: '⚡', title: 'Special Actions', body: "Use unique abilities to peek at others' cards, swap roles, or block votes at critical moments." },
        { icon: '🌍', title: '60+ Unique Events', body: 'Random catastrophe events change the rules mid-game. Adapt or perish.' },
        { icon: '👥', title: '4–12 Players', body: 'Perfect for parties, game nights, team builds. No extra hardware needed — just phones.' },
      ],
    },
    cta: {
      title: 'WILL YOU SURVIVE?',
      body: 'Download Bunker for free and find out who among your friends truly deserves a place in the shelter.',
      button: 'Get Bunker — Free',
    },
    legal: { label: 'LEGAL', privacyTitle: 'PRIVACY POLICY', termsTitle: 'TERMS OF USE', lastUpdated: 'Last updated:' },
    support: {
      label: 'HELP & SUPPORT',
      title: 'BUNKER SUPPORT',
      gameDesc: 'Bunker is a survival social-deduction party game. Players receive unique character cards with traits, professions, and health conditions — then debate who deserves a spot in the underground bunker when the world ends. Powered by a custom World Builder that generates unique apocalypse scenarios every game.',
      helpDesc: 'Need help? Browse the FAQ below or reach out directly.',
      emailLabel: 'EMAIL SUPPORT',
      emailNote: 'We reply within 24–48 hours.',
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        { q: 'How do I cancel my subscription?', a: 'Open the App Store on your iPhone → tap your profile photo → Subscriptions → find Bunker → tap Cancel Subscription. Changes take effect at the end of the current billing period.' },
        { q: 'The app crashed — what do I do?', a: 'Force-quit and reopen the app. Game state is preserved locally. If the issue persists, email us with your iOS version and device model.' },
        { q: 'How many players can play?', a: 'Bunker works best with 4–12 players. One person runs the app as the host; everyone else follows along on the same screen or their own device.' },
        { q: 'How does the custom World Builder work?', a: 'The custom World Builder generates a unique apocalypse scenario before each game — a different catastrophe, location, and bunker setup every time. No two games are the same. The scenario shapes which character traits become valuable or deadly.' },
      ],
      backHome: '← Back to Home',
      privacy: '→ Privacy Policy',
      terms: '→ Terms of Use',
    },
  },
  ru: {
    nav: { home: 'Главная', privacy: 'Приватность', terms: 'Условия', support: 'Поддержка' },
    footer: { rights: 'Все права защищены.', privacy: 'Конфиденциальность', terms: 'Условия использования', support: 'Поддержка' },
    hero: {
      badge: 'Доступно на iOS',
      subtitle: 'Ядерная война уничтожила цивилизацию. Бункер может спасти лишь немногих. Спорь, блефуй и голосуй — решай, кто заслуживает выжить.',
      cta: 'Скачать в App Store',
    },
    features: {
      sectionTitle: 'КАК ЭТО РАБОТАЕТ',
      sectionSubtitle: 'Одно приложение. Без ведущего.',
      items: [
        { icon: '☢️', title: 'Постапокалипсис', body: 'Ядерная война закончила цивилизацию. Бункер с ограниченным числом мест — ваша единственная надежда. Кто попадёт внутрь?' },
        { icon: '🎭', title: 'Скрытые роли', body: 'Каждый игрок получает секретную карточку — профессия, здоровье, навык, багаж. Раскрывай только то, что хочешь.' },
        { icon: '🗳️', title: 'Голосование и дебаты', body: 'Убеди других, что заслуживаешь выжить. Голосуй против тех, кого считаешь недостойным. Каждый раунд важен.' },
        { icon: '⚡', title: 'Особые действия', body: 'Используй уникальные способности: заглядывай в карточки других, меняйся ролями или блокируй голоса в критический момент.' },
        { icon: '🌍', title: '60+ уникальных событий', body: 'Случайные события меняют правила прямо во время игры. Адаптируйся или проиграй.' },
        { icon: '👥', title: '4–12 игроков', body: 'Идеально для вечеринок, игровых вечеров и корпоративов. Никакого дополнительного оборудования — только телефоны.' },
      ],
    },
    cta: {
      title: 'ТЫ ВЫЖИВЕШЬ?',
      body: 'Скачай Bunker бесплатно и узнай, кто из твоих друзей действительно заслуживает место в убежище.',
      button: 'Получить Bunker — бесплатно',
    },
    legal: { label: 'ЮРИДИЧЕСКОЕ', privacyTitle: 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ', termsTitle: 'УСЛОВИЯ ИСПОЛЬЗОВАНИЯ', lastUpdated: 'Обновлено:' },
    support: {
      label: 'ПОМОЩЬ И ПОДДЕРЖКА',
      title: 'ПОДДЕРЖКА BUNKER',
      gameDesc: 'Bunker — это настольная игра на выживание и социальную дедукцию. Игроки получают уникальные карточки персонажей с чертами, профессиями и состоянием здоровья — затем спорят, кто заслуживает место в подземном бункере, когда мир рухнет. Уникальный World Builder генерирует новый сценарий апокалипсиса в каждой игре.',
      helpDesc: 'Нужна помощь? Просмотрите FAQ ниже или свяжитесь с нами напрямую.',
      emailLabel: 'ПОДДЕРЖКА ПО EMAIL',
      emailNote: 'Мы отвечаем в течение 24–48 часов.',
      faqTitle: 'Часто задаваемые вопросы',
      faqs: [
        { q: 'Как отменить подписку?', a: 'Откройте App Store на вашем iPhone → нажмите фото профиля → Подписки → найдите Bunker → нажмите Отменить подписку. Изменения вступят в силу в конце текущего расчётного периода.' },
        { q: 'Приложение вылетело — что делать?', a: 'Принудительно закройте и снова откройте приложение. Состояние игры сохраняется локально. Если проблема не исчезает, напишите нам, указав версию iOS и модель устройства.' },
        { q: 'Сколько игроков может играть?', a: 'Bunker лучше всего подходит для 4–12 игроков. Один человек запускает приложение как ведущий; все остальные следят за игрой на одном экране или своём устройстве.' },
        { q: 'Как работает World Builder?', a: 'World Builder генерирует уникальный сценарий апокалипсиса перед каждой игрой — разные катастрофы, локации и настройки бункера каждый раз. Никакие две игры не одинаковы. Сценарий определяет, какие черты персонажа станут ценными или смертельными.' },
      ],
      backHome: '← На главную',
      privacy: '→ Политика конфиденциальности',
      terms: '→ Условия использования',
    },
  },
  pl: {
    nav: { home: 'Strona', privacy: 'Prywatność', terms: 'Warunki', support: 'Wsparcie' },
    footer: { rights: 'Wszelkie prawa zastrzeżone.', privacy: 'Polityka prywatności', terms: 'Warunki użytkowania', support: 'Wsparcie' },
    hero: {
      badge: 'Dostępne na iOS',
      subtitle: 'Wojna nuklearna zniszczyła cywilizację. Bunkier może uratować tylko nielicznych. Debatuj, blefuj i głosuj — zdecyduj, kto zasługuje na przeżycie.',
      cta: 'Pobierz w App Store',
    },
    features: {
      sectionTitle: 'JAK TO DZIAŁA',
      sectionSubtitle: 'Jedna aplikacja. Żadnego mistrza gry.',
      items: [
        { icon: '☢️', title: 'Sceneria postapokaliptyczna', body: 'Wojna nuklearna zakończyła cywilizację. Bunkier z ograniczoną liczbą miejsc to jedyna nadzieja. Kto się dostanie?' },
        { icon: '🎭', title: 'Ukryte role', body: 'Każdy gracz otrzymuje tajną kartę — zawód, zdrowie, umiejętność, bagaż. Ujawniaj tylko to, co chcesz.' },
        { icon: '🗳️', title: 'Głosowanie i debata', body: 'Przekonaj innych, że zasługujesz na przeżycie. Głosuj przeciw tym, których uważasz za niegodnych. Każda runda się liczy.' },
        { icon: '⚡', title: 'Specjalne akcje', body: 'Używaj unikalnych zdolności, by podglądać karty innych, zamieniać się rolami lub blokować głosy w krytycznych momentach.' },
        { icon: '🌍', title: '60+ unikalnych wydarzeń', body: 'Losowe zdarzenia katastroficzne zmieniają zasady w trakcie gry. Dostosuj się albo zgiń.' },
        { icon: '👥', title: '4–12 graczy', body: 'Idealne na imprezy, wieczory gier i team buildingi. Żadnego dodatkowego sprzętu — tylko telefony.' },
      ],
    },
    cta: {
      title: 'CZY PRZEŻYJESZ?',
      body: 'Pobierz Bunker za darmo i przekonaj się, kto spośród twoich przyjaciół naprawdę zasługuje na miejsce w schronieniu.',
      button: 'Pobierz Bunker — za darmo',
    },
    legal: { label: 'PRAWO', privacyTitle: 'POLITYKA PRYWATNOŚCI', termsTitle: 'WARUNKI UŻYTKOWANIA', lastUpdated: 'Ostatnia aktualizacja:' },
    support: {
      label: 'POMOC I WSPARCIE',
      title: 'WSPARCIE BUNKER',
      gameDesc: 'Bunker to towarzyska gra survivalowa oparta na dedukcji społecznej. Gracze otrzymują unikalne karty postaci z cechami, zawodami i stanem zdrowia — następnie debatują, kto zasługuje na miejsce w podziemnym bunkrze, gdy świat dobiegnie końca. Niestandardowy World Builder generuje unikalny scenariusz apokalipsy do każdej gry.',
      helpDesc: 'Potrzebujesz pomocy? Przejrzyj poniższe FAQ lub skontaktuj się z nami bezpośrednio.',
      emailLabel: 'WSPARCIE E-MAIL',
      emailNote: 'Odpowiadamy w ciągu 24–48 godzin.',
      faqTitle: 'Często zadawane pytania',
      faqs: [
        { q: 'Jak anulować subskrypcję?', a: 'Otwórz App Store na iPhonie → dotknij zdjęcia profilu → Subskrypcje → znajdź Bunker → dotknij Anuluj subskrypcję. Zmiany wejdą w życie z końcem bieżącego okresu rozliczeniowego.' },
        { q: 'Aplikacja się zawiesiła — co mam zrobić?', a: 'Wymuś zamknięcie i ponownie otwórz aplikację. Stan gry jest zachowany lokalnie. Jeśli problem nadal występuje, napisz do nas z wersją iOS i modelem urządzenia.' },
        { q: 'Ilu graczy może grać?', a: 'Bunker działa najlepiej przy 4–12 graczach. Jedna osoba uruchamia aplikację jako gospodarz; reszta śledzi grę na tym samym ekranie lub własnym urządzeniu.' },
        { q: 'Jak działa niestandardowy World Builder?', a: 'World Builder generuje unikalny scenariusz apokalipsy przed każdą grą — inną katastrofę, lokalizację i konfigurację bunkra za każdym razem. Żadne dwie gry nie są takie same. Scenariusz decyduje, które cechy postaci stają się cenne lub śmiertelne.' },
      ],
      backHome: '← Powrót do strony głównej',
      privacy: '→ Polityka prywatności',
      terms: '→ Warunki użytkowania',
    },
  },
  de: {
    nav: { home: 'Start', privacy: 'Datenschutz', terms: 'Nutzung', support: 'Support' },
    footer: { rights: 'Alle Rechte vorbehalten.', privacy: 'Datenschutzrichtlinie', terms: 'Nutzungsbedingungen', support: 'Support' },
    hero: {
      badge: 'Verfügbar auf iOS',
      subtitle: 'Der Nuklearkrieg hat die Zivilisation vernichtet. Ein Bunker kann nur wenige retten. Debattiere, täusche und wähle — entscheide, wer es verdient zu überleben.',
      cta: 'Im App Store laden',
    },
    features: {
      sectionTitle: 'SO FUNKTIONIERT ES',
      sectionSubtitle: 'Eine App. Kein Spielleiter nötig.',
      items: [
        { icon: '☢️', title: 'Postapokalyptisches Setting', body: 'Der Nuklearkrieg hat die Zivilisation beendet. Ein Bunker mit begrenzten Plätzen ist deine einzige Hoffnung. Wer kommt rein?' },
        { icon: '🎭', title: 'Versteckte Rollen', body: 'Jeder Spieler erhält eine geheime Karte — Beruf, Gesundheit, Fähigkeit, Gepäck. Enthülle nur, was du willst.' },
        { icon: '🗳️', title: 'Abstimmen & Debattieren', body: 'Überzeuge andere, dass du es verdienst zu überleben. Stimme gegen die ab, die du für unwürdig hältst. Jede Runde zählt.' },
        { icon: '⚡', title: 'Spezialaktionen', body: 'Nutze einzigartige Fähigkeiten: schau in die Karten anderer, tausche Rollen oder blockiere Abstimmungen in kritischen Momenten.' },
        { icon: '🌍', title: '60+ einzigartige Ereignisse', body: 'Zufällige Katastrophenereignisse ändern die Regeln mitten im Spiel. Passe dich an oder geh unter.' },
        { icon: '👥', title: '4–12 Spieler', body: 'Perfekt für Partys, Spieleabende und Team-Events. Keine zusätzliche Hardware nötig — nur Handys.' },
      ],
    },
    cta: {
      title: 'WIRST DU ÜBERLEBEN?',
      body: 'Lade Bunker kostenlos herunter und finde heraus, wer unter deinen Freunden wirklich einen Platz im Schutzraum verdient.',
      button: 'Bunker holen — Kostenlos',
    },
    legal: { label: 'RECHTLICHES', privacyTitle: 'DATENSCHUTZRICHTLINIE', termsTitle: 'NUTZUNGSBEDINGUNGEN', lastUpdated: 'Zuletzt aktualisiert:' },
    support: {
      label: 'HILFE & SUPPORT',
      title: 'BUNKER-SUPPORT',
      gameDesc: 'Bunker ist ein Survival-Partyspiel mit sozialer Deduktion. Spieler erhalten einzigartige Charakterkarten mit Eigenschaften, Berufen und Gesundheitszuständen — dann wird debattiert, wer einen Platz im unterirdischen Bunker verdient, wenn die Welt untergeht. Ein individueller World Builder generiert für jedes Spiel einzigartige Apokalypse-Szenarien.',
      helpDesc: 'Brauchst du Hilfe? Schau dir die FAQ unten an oder kontaktiere uns direkt.',
      emailLabel: 'E-MAIL-SUPPORT',
      emailNote: 'Wir antworten innerhalb von 24–48 Stunden.',
      faqTitle: 'Häufig gestellte Fragen',
      faqs: [
        { q: 'Wie kündige ich mein Abonnement?', a: 'Öffne den App Store auf deinem iPhone → tippe auf dein Profilbild → Abonnements → finde Bunker → tippe auf Abonnement kündigen. Änderungen treten am Ende des aktuellen Abrechnungszeitraums in Kraft.' },
        { q: 'Die App ist abgestürzt — was soll ich tun?', a: 'Beende die App erzwungen und öffne sie erneut. Der Spielstand wird lokal gespeichert. Wenn das Problem weiterhin besteht, schreib uns mit deiner iOS-Version und deinem Gerätemodell.' },
        { q: 'Wie viele Spieler können mitspielen?', a: 'Bunker funktioniert am besten mit 4–12 Spielern. Eine Person führt die App als Host; alle anderen folgen auf demselben Bildschirm oder ihrem eigenen Gerät.' },
        { q: 'Wie funktioniert der individuelle World Builder?', a: 'Der World Builder generiert vor jeder Partie ein einzigartiges Apokalypse-Szenario — jedes Mal eine andere Katastrophe, ein anderer Ort und eine andere Bunker-Konfiguration. Keine zwei Spiele sind gleich. Das Szenario bestimmt, welche Charaktereigenschaften wertvoll oder tödlich werden.' },
      ],
      backHome: '← Zurück zur Startseite',
      privacy: '→ Datenschutzrichtlinie',
      terms: '→ Nutzungsbedingungen',
    },
  },
  fr: {
    nav: { home: 'Accueil', privacy: 'Confidentialité', terms: 'Conditions', support: 'Support' },
    footer: { rights: 'Tous droits réservés.', privacy: 'Politique de confidentialité', terms: "Conditions d'utilisation", support: 'Support' },
    hero: {
      badge: 'Disponible sur iOS',
      subtitle: "La guerre nucléaire a anéanti la civilisation. Un bunker ne peut en sauver que quelques-uns. Débattez, bluffez et votez — décidez qui mérite de survivre.",
      cta: "Télécharger sur l'App Store",
    },
    features: {
      sectionTitle: 'COMMENT ÇA MARCHE',
      sectionSubtitle: 'Une app. Pas de maître de jeu.',
      items: [
        { icon: '☢️', title: 'Univers post-apocalyptique', body: "La guerre nucléaire a mis fin à la civilisation. Un bunker aux places limitées est votre seul espoir. Qui entre ?" },
        { icon: '🎭', title: 'Rôles cachés', body: "Chaque joueur reçoit une carte secrète — profession, santé, compétence, bagages. Ne révélez que ce que vous voulez." },
        { icon: '🗳️', title: 'Vote & Débat', body: "Convainquez les autres que vous méritez de survivre. Éliminez ceux que vous jugez indignes. Chaque tour compte." },
        { icon: '⚡', title: 'Actions spéciales', body: "Utilisez des capacités uniques pour espionner les cartes des autres, échanger des rôles ou bloquer des votes au moment critique." },
        { icon: '🌍', title: '60+ événements uniques', body: "Des événements catastrophiques aléatoires modifient les règles en cours de partie. Adaptez-vous ou périssez." },
        { icon: '👥', title: '4–12 joueurs', body: "Parfait pour les soirées, les nuits de jeu et les team buildings. Aucun matériel supplémentaire — juste des téléphones." },
      ],
    },
    cta: {
      title: 'SURVIVREZ-VOUS ?',
      body: "Téléchargez Bunker gratuitement et découvrez lequel de vos amis mérite vraiment une place dans l'abri.",
      button: 'Obtenir Bunker — Gratuit',
    },
    legal: { label: 'JURIDIQUE', privacyTitle: 'POLITIQUE DE CONFIDENTIALITÉ', termsTitle: "CONDITIONS D'UTILISATION", lastUpdated: 'Dernière mise à jour :' },
    support: {
      label: 'AIDE ET SUPPORT',
      title: 'SUPPORT BUNKER',
      gameDesc: "Bunker est un jeu de survie et de déduction sociale. Les joueurs reçoivent des cartes de personnage uniques avec des traits, des professions et des conditions de santé — puis ils débattent pour savoir qui mérite une place dans le bunker souterrain lorsque le monde s'effondre. Un World Builder personnalisé génère un scénario d'apocalypse unique à chaque partie.",
      helpDesc: "Besoin d'aide ? Consultez la FAQ ci-dessous ou contactez-nous directement.",
      emailLabel: 'SUPPORT PAR E-MAIL',
      emailNote: 'Nous répondons sous 24 à 48 heures.',
      faqTitle: 'Questions fréquemment posées',
      faqs: [
        { q: 'Comment annuler mon abonnement ?', a: "Ouvrez l'App Store sur votre iPhone → appuyez sur votre photo de profil → Abonnements → trouvez Bunker → appuyez sur Résilier l'abonnement. Les modifications prennent effet à la fin de la période de facturation en cours." },
        { q: "L'application a planté — que dois-je faire ?", a: "Forcez la fermeture et rouvrez l'application. L'état du jeu est conservé localement. Si le problème persiste, envoyez-nous un e-mail avec votre version iOS et le modèle de votre appareil." },
        { q: 'Combien de joueurs peuvent jouer ?', a: "Bunker fonctionne mieux avec 4 à 12 joueurs. Une personne exécute l'application en tant qu'hôte ; les autres suivent sur le même écran ou leur propre appareil." },
        { q: 'Comment fonctionne le World Builder personnalisé ?', a: "Le World Builder génère un scénario d'apocalypse unique avant chaque partie — une catastrophe, un lieu et une configuration de bunker différents à chaque fois. Aucune partie ne se ressemble. Le scénario détermine quels traits de personnage deviennent précieux ou mortels." },
      ],
      backHome: "← Retour à l'accueil",
      privacy: '→ Politique de confidentialité',
      terms: "→ Conditions d'utilisation",
    },
  },
  es: {
    nav: { home: 'Inicio', privacy: 'Privacidad', terms: 'Términos', support: 'Soporte' },
    footer: { rights: 'Todos los derechos reservados.', privacy: 'Política de privacidad', terms: 'Términos de uso', support: 'Soporte' },
    hero: {
      badge: 'Disponible en iOS',
      subtitle: 'La guerra nuclear destruyó la civilización. Un búnker puede salvar solo a unos pocos. Debate, engaña y vota — decide quién merece sobrevivir.',
      cta: 'Descargar en App Store',
    },
    features: {
      sectionTitle: 'CÓMO FUNCIONA',
      sectionSubtitle: 'Una app. Sin director de juego.',
      items: [
        { icon: '☢️', title: 'Escenario postapocalíptico', body: 'La guerra nuclear acabó con la civilización. Un búnker con plazas limitadas es tu única esperanza. ¿Quién entra?' },
        { icon: '🎭', title: 'Roles ocultos', body: 'Cada jugador recibe una carta secreta — profesión, salud, habilidad, equipaje. Revela solo lo que quieras.' },
        { icon: '🗳️', title: 'Voto y debate', body: 'Convence a los demás de que mereces sobrevivir. Vota para eliminar a los que consideras indignos. Cada ronda cuenta.' },
        { icon: '⚡', title: 'Acciones especiales', body: 'Usa habilidades únicas para espiar las cartas de otros, intercambiar roles o bloquear votos en momentos críticos.' },
        { icon: '🌍', title: '60+ eventos únicos', body: 'Eventos catastróficos aleatorios cambian las reglas a mitad del juego. Adáptate o perece.' },
        { icon: '👥', title: '4–12 jugadores', body: 'Perfecto para fiestas, noches de juego y team buildings. Sin hardware adicional — solo teléfonos.' },
      ],
    },
    cta: {
      title: '¿SOBREVIVIRÁS?',
      body: 'Descarga Bunker gratis y descubre cuál de tus amigos realmente merece un lugar en el refugio.',
      button: 'Obtener Bunker — Gratis',
    },
    legal: { label: 'LEGAL', privacyTitle: 'POLÍTICA DE PRIVACIDAD', termsTitle: 'TÉRMINOS DE USO', lastUpdated: 'Última actualización:' },
    support: {
      label: 'AYUDA Y SOPORTE',
      title: 'SOPORTE BUNKER',
      gameDesc: 'Bunker es un juego de fiesta de supervivencia y deducción social. Los jugadores reciben tarjetas de personaje únicas con rasgos, profesiones y condiciones de salud — luego debaten quién merece un lugar en el búnker subterráneo cuando el mundo termine. Un World Builder personalizado genera escenarios de apocalipsis únicos en cada partida.',
      helpDesc: '¿Necesitas ayuda? Consulta las preguntas frecuentes a continuación o contáctanos directamente.',
      emailLabel: 'SOPORTE POR EMAIL',
      emailNote: 'Respondemos en 24–48 horas.',
      faqTitle: 'Preguntas frecuentes',
      faqs: [
        { q: '¿Cómo cancelo mi suscripción?', a: 'Abre la App Store en tu iPhone → toca tu foto de perfil → Suscripciones → encuentra Bunker → toca Cancelar suscripción. Los cambios entran en vigor al final del período de facturación actual.' },
        { q: 'La aplicación se bloqueó — ¿qué hago?', a: 'Fuerza el cierre y vuelve a abrir la aplicación. El estado del juego se conserva localmente. Si el problema persiste, escríbenos con tu versión de iOS y el modelo de tu dispositivo.' },
        { q: '¿Cuántos jugadores pueden jugar?', a: 'Bunker funciona mejor con 4–12 jugadores. Una persona ejecuta la aplicación como anfitrión; los demás siguen en la misma pantalla o en su propio dispositivo.' },
        { q: '¿Cómo funciona el World Builder personalizado?', a: 'El World Builder genera un escenario de apocalipsis único antes de cada partida — una catástrofe, ubicación y configuración de búnker diferente cada vez. No hay dos partidas iguales. El escenario determina qué rasgos de personaje se vuelven valiosos o mortales.' },
      ],
      backHome: '← Volver al inicio',
      privacy: '→ Política de privacidad',
      terms: '→ Términos de uso',
    },
  },
  it: {
    nav: { home: 'Home', privacy: 'Privacy', terms: 'Termini', support: 'Supporto' },
    footer: { rights: 'Tutti i diritti riservati.', privacy: 'Informativa sulla privacy', terms: 'Termini di utilizzo', support: 'Supporto' },
    hero: {
      badge: 'Disponibile su iOS',
      subtitle: 'La guerra nucleare ha distrutto la civiltà. Un bunker può salvare solo pochi. Dibatti, bluffa e vota — decidi chi merita di sopravvivere.',
      cta: "Scarica sull'App Store",
    },
    features: {
      sectionTitle: 'COME FUNZIONA',
      sectionSubtitle: "Un'app. Nessun game master.",
      items: [
        { icon: '☢️', title: 'Scenario post-apocalittico', body: 'La guerra nucleare ha posto fine alla civiltà. Un bunker con posti limitati è la tua unica speranza. Chi entra?' },
        { icon: '🎭', title: 'Ruoli nascosti', body: 'Ogni giocatore riceve una carta segreta — professione, salute, abilità, bagaglio. Rivela solo ciò che vuoi.' },
        { icon: '🗳️', title: 'Voto e dibattito', body: 'Convinci gli altri che meriti di sopravvivere. Vota per eliminare chi ritieni indegno. Ogni round conta.' },
        { icon: '⚡', title: 'Azioni speciali', body: "Usa abilità uniche per spiare le carte degli altri, scambiare ruoli o bloccare i voti nei momenti critici." },
        { icon: '🌍', title: '60+ eventi unici', body: 'Eventi catastrofici casuali cambiano le regole a metà partita. Adattati o soccumbi.' },
        { icon: '👥', title: '4–12 giocatori', body: 'Perfetto per feste, serate di gioco e team building. Nessun hardware aggiuntivo — solo telefoni.' },
      ],
    },
    cta: {
      title: 'SOPRAVVIVERAI?',
      body: 'Scarica Bunker gratis e scopri chi tra i tuoi amici merita davvero un posto nel rifugio.',
      button: 'Ottieni Bunker — Gratis',
    },
    legal: { label: 'LEGALE', privacyTitle: 'INFORMATIVA SULLA PRIVACY', termsTitle: 'TERMINI DI UTILIZZO', lastUpdated: 'Ultimo aggiornamento:' },
    support: {
      label: 'AIUTO E SUPPORTO',
      title: 'SUPPORTO BUNKER',
      gameDesc: 'Bunker è un gioco da tavolo di sopravvivenza e deduzione sociale. I giocatori ricevono carte personaggio uniche con tratti, professioni e condizioni di salute — poi dibattono su chi merita un posto nel bunker sotterraneo quando il mondo finisce. Un World Builder personalizzato genera scenari apocalittici unici ad ogni partita.',
      helpDesc: 'Hai bisogno di aiuto? Consulta le FAQ qui sotto o contattaci direttamente.',
      emailLabel: 'SUPPORTO EMAIL',
      emailNote: 'Rispondiamo entro 24–48 ore.',
      faqTitle: 'Domande frequenti',
      faqs: [
        { q: 'Come cancello il mio abbonamento?', a: "Apri l'App Store sul tuo iPhone → tocca la foto del profilo → Abbonamenti → trova Bunker → tocca Annulla abbonamento. Le modifiche avranno effetto alla fine del periodo di fatturazione corrente." },
        { q: "L'app è crashata — cosa faccio?", a: "Forza la chiusura e riapri l'app. Lo stato del gioco è conservato localmente. Se il problema persiste, scrivici con la tua versione iOS e il modello del dispositivo." },
        { q: 'Quanti giocatori possono giocare?', a: "Bunker funziona meglio con 4–12 giocatori. Una persona esegue l'app come host; tutti gli altri seguono sullo stesso schermo o sul proprio dispositivo." },
        { q: 'Come funziona il World Builder personalizzato?', a: 'Il World Builder genera uno scenario apocalittico unico prima di ogni partita — ogni volta una catastrofe, una posizione e una configurazione del bunker diverse. Non ci sono due partite uguali. Lo scenario determina quali tratti del personaggio diventano preziosi o letali.' },
      ],
      backHome: '← Torna alla home',
      privacy: '→ Informativa sulla privacy',
      terms: '→ Termini di utilizzo',
    },
  },
  pt: {
    nav: { home: 'Início', privacy: 'Privacidade', terms: 'Termos', support: 'Suporte' },
    footer: { rights: 'Todos os direitos reservados.', privacy: 'Política de privacidade', terms: 'Termos de uso', support: 'Suporte' },
    hero: {
      badge: 'Disponível no iOS',
      subtitle: 'A guerra nuclear destruiu a civilização. Um abrigo pode salvar apenas alguns. Debata, blefe e vote — decida quem merece sobreviver.',
      cta: 'Baixar na App Store',
    },
    features: {
      sectionTitle: 'COMO FUNCIONA',
      sectionSubtitle: 'Um app. Sem mestre do jogo.',
      items: [
        { icon: '☢️', title: 'Cenário pós-apocalíptico', body: 'A guerra nuclear acabou com a civilização. Um abrigo com vagas limitadas é sua única esperança. Quem entra?' },
        { icon: '🎭', title: 'Papéis ocultos', body: 'Cada jogador recebe uma carta secreta — profissão, saúde, habilidade, bagagem. Revele apenas o que quiser.' },
        { icon: '🗳️', title: 'Votação e debate', body: 'Convença os outros de que merece sobreviver. Vote para eliminar quem considera indigno. Cada rodada conta.' },
        { icon: '⚡', title: 'Ações especiais', body: 'Use habilidades únicas para espiar as cartas dos outros, trocar papéis ou bloquear votos em momentos críticos.' },
        { icon: '🌍', title: '60+ eventos únicos', body: 'Eventos catastróficos aleatórios mudam as regras no meio do jogo. Adapte-se ou pereça.' },
        { icon: '👥', title: '4–12 jogadores', body: 'Perfeito para festas, noites de jogo e team buildings. Sem hardware adicional — apenas telefones.' },
      ],
    },
    cta: {
      title: 'VOCÊ VAI SOBREVIVER?',
      body: 'Baixe Bunker gratuitamente e descubra qual dos seus amigos realmente merece um lugar no abrigo.',
      button: 'Obter Bunker — Grátis',
    },
    legal: { label: 'LEGAL', privacyTitle: 'POLÍTICA DE PRIVACIDADE', termsTitle: 'TERMOS DE USO', lastUpdated: 'Última atualização:' },
    support: {
      label: 'AJUDA E SUPORTE',
      title: 'SUPORTE BUNKER',
      gameDesc: 'Bunker é um jogo de festa de sobrevivência e dedução social. Os jogadores recebem cartas de personagem únicas com traços, profissões e condições de saúde — depois debatem quem merece um lugar no abrigo subterrâneo quando o mundo acabar. Um World Builder personalizado gera cenários de apocalipse únicos em cada jogo.',
      helpDesc: 'Precisa de ajuda? Consulte as perguntas frequentes abaixo ou entre em contato diretamente.',
      emailLabel: 'SUPORTE POR EMAIL',
      emailNote: 'Respondemos em 24–48 horas.',
      faqTitle: 'Perguntas frequentes',
      faqs: [
        { q: 'Como cancelo minha assinatura?', a: 'Abra a App Store no seu iPhone → toque na foto do perfil → Assinaturas → encontre Bunker → toque em Cancelar assinatura. As alterações entram em vigor no final do período de cobrança atual.' },
        { q: 'O aplicativo travou — o que faço?', a: 'Force o fechamento e reabra o aplicativo. O estado do jogo é preservado localmente. Se o problema persistir, envie-nos um e-mail com sua versão do iOS e o modelo do dispositivo.' },
        { q: 'Quantos jogadores podem jogar?', a: 'Bunker funciona melhor com 4–12 jogadores. Uma pessoa executa o aplicativo como anfitrião; todos os outros acompanham na mesma tela ou no próprio dispositivo.' },
        { q: 'Como funciona o World Builder personalizado?', a: 'O World Builder gera um cenário de apocalipse único antes de cada jogo — uma catástrofe, localização e configuração de abrigo diferentes a cada vez. Não há dois jogos iguais. O cenário determina quais traços de personagem se tornam valiosos ou mortais.' },
      ],
      backHome: '← Voltar para o início',
      privacy: '→ Política de privacidade',
      terms: '→ Termos de uso',
    },
  },
  tr: {
    nav: { home: 'Ana Sayfa', privacy: 'Gizlilik', terms: 'Koşullar', support: 'Destek' },
    footer: { rights: 'Tüm hakları saklıdır.', privacy: 'Gizlilik Politikası', terms: 'Kullanım Koşulları', support: 'Destek' },
    hero: {
      badge: "iOS'ta Mevcut",
      subtitle: 'Nükleer savaş medeniyeti sildi. Bir sığınak yalnızca birkaçını kurtarabilir. Tartış, blöf yap ve oy ver — kimin hayatta kalmayı hak ettiğine karar ver.',
      cta: "App Store'dan İndir",
    },
    features: {
      sectionTitle: 'NASIL ÇALIŞIR',
      sectionSubtitle: 'Tek uygulama. Oyun yöneticisine gerek yok.',
      items: [
        { icon: '☢️', title: 'Post-Apokaliptik Ortam', body: 'Nükleer savaş medeniyeti sona erdirdi. Sınırlı yeri olan bir sığınak tek umudun. Kim içeri giriyor?' },
        { icon: '🎭', title: 'Gizli Roller', body: 'Her oyuncu gizli bir kart alır — meslek, sağlık, yetenek, bagaj. Yalnızca istediğini açıkla.' },
        { icon: '🗳️', title: 'Oy & Tartışma', body: 'Diğerlerini hayatta kalmayı hak ettiğine ikna et. Layık görmediğin kişileri oy ile eleyin. Her tur önemli.' },
        { icon: '⚡', title: 'Özel Eylemler', body: "Başkalarının kartlarını gözetlemek, rol değiştirmek veya kritik anlarda oyları engellemek için benzersiz yetenekleri kullan." },
        { icon: '🌍', title: '60+ Benzersiz Olay', body: 'Rastgele felaket olayları oyunun ortasında kuralları değiştirir. Uyum sağla ya da mahvol.' },
        { icon: '👥', title: '4–12 Oyuncu', body: 'Partiler, oyun geceleri ve takım etkinlikleri için mükemmel. Ek donanıma gerek yok — sadece telefonlar.' },
      ],
    },
    cta: {
      title: 'HAYATTA KALACAK MISIN?',
      body: "Bunker'ı ücretsiz indir ve arkadaşlarından kimin sığınakta gerçekten bir yeri hak ettiğini öğren.",
      button: "Bunker'ı Al — Ücretsiz",
    },
    legal: { label: 'HUKUKİ', privacyTitle: 'GİZLİLİK POLİTİKASI', termsTitle: 'KULLANIM KOŞULLARI', lastUpdated: 'Son güncelleme:' },
    support: {
      label: 'YARDIM VE DESTEK',
      title: 'BUNKER DESTEK',
      gameDesc: "Bunker, hayatta kalma ve sosyal çıkarım odaklı bir parti oyunudur. Oyuncular özellikler, meslekler ve sağlık durumları içeren benzersiz karakter kartları alır — ardından dünya sona erdiğinde yeraltı sığınağında kimin yer almayı hak ettiğini tartışırlar. Özel bir World Builder, her oyunda benzersiz kıyamet senaryoları oluşturur.",
      helpDesc: "Yardıma mı ihtiyacın var? Aşağıdaki SSS'e göz at veya doğrudan bizimle iletişime geç.",
      emailLabel: 'E-POSTA DESTEĞİ',
      emailNote: '24–48 saat içinde yanıt veriyoruz.',
      faqTitle: 'Sık Sorulan Sorular',
      faqs: [
        { q: 'Aboneliğimi nasıl iptal ederim?', a: "iPhone'unda App Store'u aç → profil fotoğrafına dokun → Abonelikler → Bunker'ı bul → Aboneliği İptal Et'e dokun. Değişiklikler mevcut fatura döneminin sonunda geçerli olur." },
        { q: 'Uygulama çöktü — ne yapmalıyım?', a: 'Uygulamayı zorla kapat ve yeniden aç. Oyun durumu yerel olarak saklanır. Sorun devam ederse iOS sürümün ve cihaz modelinle birlikte bize e-posta gönder.' },
        { q: 'Kaç oyuncu oynayabilir?', a: 'Bunker, 4–12 oyuncu ile en iyi deneyimi sunar. Bir kişi uygulamayı ev sahibi olarak çalıştırır; diğerleri aynı ekranda veya kendi cihazlarında takip eder.' },
        { q: 'Özel World Builder nasıl çalışır?', a: 'World Builder, her oyundan önce benzersiz bir kıyamet senaryosu oluşturur — her seferinde farklı bir felaket, konum ve sığınak düzeni. Hiçbir iki oyun birbirinin aynısı değildir. Senaryo, hangi karakter özelliklerinin değerli ya da ölümcül olacağını belirler.' },
      ],
      backHome: '← Ana sayfaya dön',
      privacy: '→ Gizlilik Politikası',
      terms: '→ Kullanım Koşulları',
    },
  },
  zh: {
    nav: { home: '主页', privacy: '隐私', terms: '条款', support: '支持' },
    footer: { rights: '版权所有。', privacy: '隐私政策', terms: '使用条款', support: '支持' },
    hero: {
      badge: '在 iOS 上可用',
      subtitle: '核战争摧毁了文明。一座掩体只能拯救少数人。辩论、虚张声势、投票——决定谁有资格生存。',
      cta: '在 App Store 下载',
    },
    features: {
      sectionTitle: '游戏机制',
      sectionSubtitle: '一个应用，无需游戏主持人。',
      items: [
        { icon: '☢️', title: '后启示录背景', body: '核战争终结了文明。名额有限的掩体是你唯一的希望。谁能进入？' },
        { icon: '🎭', title: '隐藏角色', body: '每位玩家获得一张秘密卡片——职业、健康、技能、行李。只透露你想透露的内容。' },
        { icon: '🗳️', title: '投票与辩论', body: '说服他人你值得生存。投票淘汰你认为不配的人。每一轮都至关重要。' },
        { icon: '⚡', title: '特殊行动', body: '使用独特能力窥视他人的牌、交换角色，或在关键时刻阻止投票。' },
        { icon: '🌍', title: '60+ 独特事件', body: '随机灾难事件在游戏途中改变规则。适应或灭亡。' },
        { icon: '👥', title: '4–12 名玩家', body: '适合派对、游戏之夜和团建活动。无需额外硬件——只需手机。' },
      ],
    },
    cta: {
      title: '你能存活吗？',
      body: '免费下载 Bunker，看看你的朋友中谁真正值得拥有避难所的一席之地。',
      button: '获取 Bunker — 免费',
    },
    legal: { label: '法律', privacyTitle: '隐私政策', termsTitle: '使用条款', lastUpdated: '最后更新：' },
    support: {
      label: '帮助与支持',
      title: 'BUNKER 支持',
      gameDesc: 'Bunker 是一款生存社交推理派对游戏。玩家获得带有特征、职业和健康状况的独特角色卡片，然后争论谁在世界末日时有资格进入地下掩体。定制的 World Builder 在每场游戏中生成独特的末日场景。',
      helpDesc: '需要帮助？浏览下方常见问题或直接联系我们。',
      emailLabel: '邮件支持',
      emailNote: '我们将在 24–48 小时内回复。',
      faqTitle: '常见问题',
      faqs: [
        { q: '如何取消订阅？', a: '在 iPhone 上打开 App Store → 点击个人头像 → 订阅 → 找到 Bunker → 点击取消订阅。更改将在当前计费周期结束时生效。' },
        { q: '应用崩溃了，该怎么办？', a: '强制退出并重新打开应用。游戏状态已在本地保存。如果问题仍然存在，请发送邮件告知您的 iOS 版本和设备型号。' },
        { q: '可以有多少名玩家参与？', a: 'Bunker 最适合 4–12 名玩家。一人担任主机运行应用，其他人在同一屏幕或各自设备上参与游戏。' },
        { q: '定制 World Builder 是如何运作的？', a: 'World Builder 在每场游戏前生成独特的末日场景——每次都有不同的灾难、地点和掩体配置。没有任何两场游戏完全相同。场景决定了哪些角色特征会变得有价值或致命。' },
      ],
      backHome: '← 返回首页',
      privacy: '→ 隐私政策',
      terms: '→ 使用条款',
    },
  },
  ja: {
    nav: { home: 'ホーム', privacy: 'プライバシー', terms: '利用規約', support: 'サポート' },
    footer: { rights: 'All rights reserved.', privacy: 'プライバシーポリシー', terms: '利用規約', support: 'サポート' },
    hero: {
      badge: 'iOS で利用可能',
      subtitle: '核戦争が文明を滅ぼした。シェルターは数人しか救えない。討論し、ブラフをかけ、投票せよ——誰が生き残るに値するかを決めろ。',
      cta: 'App Store でダウンロード',
    },
    features: {
      sectionTitle: 'ゲームの仕組み',
      sectionSubtitle: 'アプリ一つ。ゲームマスター不要。',
      items: [
        { icon: '☢️', title: 'ポストアポカリプスの舞台', body: '核戦争が文明を終わらせた。定員の限られたシェルターが唯一の希望。誰が入れる？' },
        { icon: '🎭', title: '隠れた役割', body: '各プレイヤーは秘密のカードを受け取る——職業、健康状態、スキル、荷物。開示するのは自分が選んだことだけ。' },
        { icon: '🗳️', title: '投票と討論', body: '自分が生き残るに値することを他のプレイヤーに納得させろ。不相応と判断した者に投票せよ。毎ラウンドが勝負だ。' },
        { icon: '⚡', title: '特殊アクション', body: '他のプレイヤーのカードをのぞき見する、役割を交換する、投票を阻止するなど独自の能力を活用せよ。' },
        { icon: '🌍', title: '60以上のユニークなイベント', body: 'ランダムな災害イベントがゲーム途中でルールを変える。適応するか、滅びるか。' },
        { icon: '👥', title: '4〜12人でプレイ', body: 'パーティ、ゲームナイト、チームビルディングに最適。追加ハードウェア不要——スマホだけでOK。' },
      ],
    },
    cta: {
      title: 'あなたは生き残れるか？',
      body: 'Bunkerを無料でダウンロードして、友達の中で本当にシェルターの席に値するのは誰かを確かめよう。',
      button: 'Bunkerを入手 — 無料',
    },
    legal: { label: '法的情報', privacyTitle: 'プライバシーポリシー', termsTitle: '利用規約', lastUpdated: '最終更新日：' },
    support: {
      label: 'ヘルプ＆サポート',
      title: 'BUNKER サポート',
      gameDesc: 'Bunkerは、サバイバルをテーマにした社会的推理パーティーゲームです。プレイヤーはそれぞれ特性、職業、健康状態が記されたユニークなキャラクターカードを受け取り、世界が終わったとき地下シェルターに入る資格があるのは誰かを討論します。カスタムのWorld Builderが毎ゲーム固有の終末シナリオを生成します。',
      helpDesc: 'お困りですか？以下のFAQをご覧いただくか、直接お問い合わせください。',
      emailLabel: 'メールサポート',
      emailNote: '24〜48時間以内にご返信いたします。',
      faqTitle: 'よくある質問',
      faqs: [
        { q: 'サブスクリプションをキャンセルするには？', a: 'iPhoneのApp Storeを開く → プロフィール写真をタップ → サブスクリプション → Bunkerを見つける → サブスクリプションをキャンセルをタップ。変更は現在の請求期間の終了時に有効になります。' },
        { q: 'アプリがクラッシュしました。どうすればいいですか？', a: 'アプリを強制終了して再度開いてください。ゲームの状態はローカルに保存されています。問題が続く場合は、iOSのバージョンとデバイスモデルを添えてメールでお知らせください。' },
        { q: '何人でプレイできますか？', a: 'Bunkerは4〜12人で最も楽しめます。1人がアプリをホストとして起動し、他の全員が同じ画面または各自のデバイスでゲームに参加します。' },
        { q: 'カスタムWorld Builderはどのように機能しますか？', a: 'World Builderはゲームごとに固有の終末シナリオを生成します——毎回異なる災害、場所、シェルターの設定。同じゲームは二度とありません。シナリオによって、どのキャラクター特性が有利または致命的になるかが決まります。' },
      ],
      backHome: '← ホームに戻る',
      privacy: '→ プライバシーポリシー',
      terms: '→ 利用規約',
    },
  },
  ko: {
    nav: { home: '홈', privacy: '개인정보', terms: '약관', support: '지원' },
    footer: { rights: '모든 권리 보유.', privacy: '개인정보 처리방침', terms: '이용약관', support: '지원' },
    hero: {
      badge: 'iOS에서 이용 가능',
      subtitle: '핵전쟁이 문명을 멸망시켰다. 벙커는 소수만 구할 수 있다. 토론하고, 허풍 치고, 투표하라 — 누가 생존할 자격이 있는지 결정하라.',
      cta: 'App Store에서 다운로드',
    },
    features: {
      sectionTitle: '게임 방법',
      sectionSubtitle: '앱 하나. 게임 마스터 불필요.',
      items: [
        { icon: '☢️', title: '포스트 아포칼립스 배경', body: '핵전쟁이 문명을 끝냈다. 자리가 한정된 벙커가 유일한 희망. 누가 들어가나?' },
        { icon: '🎭', title: '숨겨진 역할', body: '각 플레이어는 비밀 카드를 받는다 — 직업, 건강, 기술, 짐. 원하는 것만 공개하라.' },
        { icon: '🗳️', title: '투표와 토론', body: '자신이 생존할 자격이 있음을 설득하라. 불합격이라 생각하는 자에게 투표하라. 모든 라운드가 중요하다.' },
        { icon: '⚡', title: '특수 행동', body: '다른 플레이어의 카드를 엿보거나, 역할을 교환하거나, 결정적 순간에 투표를 차단하는 고유 능력을 활용하라.' },
        { icon: '🌍', title: '60개 이상의 독특한 이벤트', body: '무작위 재난 이벤트가 게임 중반에 규칙을 바꾼다. 적응하거나 소멸하거나.' },
        { icon: '👥', title: '4~12명 플레이', body: '파티, 게임 나이트, 팀 빌딩에 완벽. 추가 하드웨어 불필요 — 스마트폰만 있으면 됩니다.' },
      ],
    },
    cta: {
      title: '당신은 살아남을 수 있나요?',
      body: 'Bunker를 무료로 다운로드하고 친구들 중 누가 정말로 피난처 자리를 차지할 자격이 있는지 알아보세요.',
      button: 'Bunker 받기 — 무료',
    },
    legal: { label: '법률', privacyTitle: '개인정보 처리방침', termsTitle: '이용약관', lastUpdated: '마지막 업데이트:' },
    support: {
      label: '도움말 및 지원',
      title: 'BUNKER 지원',
      gameDesc: 'Bunker는 생존을 주제로 한 소셜 추론 파티 게임입니다. 플레이어들은 특성, 직업, 건강 상태가 담긴 고유한 캐릭터 카드를 받고, 세계가 끝날 때 지하 벙커에 들어갈 자격이 있는 사람이 누구인지 토론합니다. 커스텀 World Builder가 매 게임마다 고유한 종말 시나리오를 생성합니다.',
      helpDesc: '도움이 필요하신가요? 아래 FAQ를 참조하거나 직접 문의해 주세요.',
      emailLabel: '이메일 지원',
      emailNote: '24~48시간 이내에 답변해 드립니다.',
      faqTitle: '자주 묻는 질문',
      faqs: [
        { q: '구독을 어떻게 취소하나요?', a: 'iPhone에서 App Store를 열고 → 프로필 사진을 탭 → 구독 → Bunker를 찾아 → 구독 취소를 탭하세요. 변경 사항은 현재 청구 기간이 끝날 때 적용됩니다.' },
        { q: '앱이 충돌했습니다. 어떻게 해야 하나요?', a: '앱을 강제 종료하고 다시 열어 주세요. 게임 상태는 로컬에 저장됩니다. 문제가 지속되면 iOS 버전과 기기 모델을 알려주시며 이메일을 보내 주세요.' },
        { q: '몇 명의 플레이어가 플레이할 수 있나요?', a: 'Bunker는 4~12명이 플레이할 때 가장 즐겁습니다. 한 명이 앱을 호스트로 실행하고, 나머지는 같은 화면이나 각자의 기기에서 게임에 참여합니다.' },
        { q: '커스텀 World Builder는 어떻게 작동하나요?', a: 'World Builder는 매 게임 전에 고유한 종말 시나리오를 생성합니다 — 매번 다른 재앙, 장소, 벙커 설정이 제공됩니다. 같은 게임은 두 번 없습니다. 시나리오에 따라 어떤 캐릭터 특성이 가치 있거나 치명적이 될지 결정됩니다.' },
      ],
      backHome: '← 홈으로 돌아가기',
      privacy: '→ 개인정보 처리방침',
      terms: '→ 이용약관',
    },
  },
  ar: {
    nav: { home: 'الرئيسية', privacy: 'الخصوصية', terms: 'الشروط', support: 'الدعم' },
    footer: { rights: 'جميع الحقوق محفوظة.', privacy: 'سياسة الخصوصية', terms: 'شروط الاستخدام', support: 'الدعم' },
    hero: {
      badge: 'متاح على iOS',
      subtitle: 'محت الحرب النووية الحضارة. لا يسع المخبأ إلا القليلين. ناقش واخدع وصوّت — قرر من يستحق البقاء.',
      cta: 'حمّل من App Store',
    },
    features: {
      sectionTitle: 'كيف تعمل اللعبة',
      sectionSubtitle: 'تطبيق واحد. لا حاجة لمدير اللعبة.',
      items: [
        { icon: '☢️', title: 'بيئة ما بعد نهاية العالم', body: 'أنهت الحرب النووية الحضارة. مخبأ بأماكن محدودة هو أملك الوحيد. من سيدخل؟' },
        { icon: '🎭', title: 'أدوار مخفية', body: 'يحصل كل لاعب على بطاقة سرية — مهنة، صحة، مهارة، أمتعة. اكشف فقط ما تريد.' },
        { icon: '🗳️', title: 'التصويت والنقاش', body: 'أقنع الآخرين بأنك تستحق البقاء. صوّت لإقصاء من تراه غير جدير. كل جولة مهمة.' },
        { icon: '⚡', title: 'إجراءات خاصة', body: 'استخدم قدرات فريدة للاطلاع على بطاقات الآخرين، أو تبادل الأدوار، أو حظر الأصوات في اللحظات الحاسمة.' },
        { icon: '🌍', title: '60+ حدث فريد', body: 'أحداث كارثية عشوائية تغير القواعد في منتصف اللعبة. تكيّف أو انهزم.' },
        { icon: '👥', title: '4–12 لاعبًا', body: 'مثالية للحفلات وليالي الألعاب وفعاليات الفريق. لا حاجة لأجهزة إضافية — فقط الهواتف.' },
      ],
    },
    cta: {
      title: 'هل ستنجو؟',
      body: 'حمّل Bunker مجانًا واكتشف من بين أصدقائك من يستحق فعلًا مكانًا في الملجأ.',
      button: 'احصل على Bunker — مجانًا',
    },
    legal: { label: 'قانوني', privacyTitle: 'سياسة الخصوصية', termsTitle: 'شروط الاستخدام', lastUpdated: 'آخر تحديث:' },
    support: {
      label: 'المساعدة والدعم',
      title: 'دعم BUNKER',
      gameDesc: 'Bunker هي لعبة حفلات بقاء وخداع اجتماعي. يحصل اللاعبون على بطاقات شخصية فريدة تحتوي على سمات ومهن وحالات صحية — ثم يتجادلون حول من يستحق مكانًا في المخبأ تحت الأرض عندما تنتهي الدنيا. يُولّد World Builder المخصص سيناريو نهاية عالم فريدًا في كل لعبة.',
      helpDesc: 'هل تحتاج إلى مساعدة؟ تصفح الأسئلة الشائعة أدناه أو تواصل معنا مباشرة.',
      emailLabel: 'الدعم عبر البريد الإلكتروني',
      emailNote: 'نرد في غضون 24–48 ساعة.',
      faqTitle: 'الأسئلة الشائعة',
      faqs: [
        { q: 'كيف أُلغي اشتراكي؟', a: 'افتح App Store على iPhone الخاص بك ← انقر على صورة ملفك الشخصي ← الاشتراكات ← ابحث عن Bunker ← انقر على إلغاء الاشتراك. تسري التغييرات في نهاية فترة الفوترة الحالية.' },
        { q: 'تعطّل التطبيق — ماذا أفعل؟', a: 'أغلق التطبيق إجباريًا وأعد فتحه. يتم حفظ حالة اللعبة محليًا. إذا استمرت المشكلة، أرسل لنا بريدًا إلكترونيًا مع إصدار iOS ونوع جهازك.' },
        { q: 'كم عدد اللاعبين الذين يمكنهم اللعب؟', a: 'يعمل Bunker بشكل أفضل مع 4–12 لاعبًا. يشغّل شخص واحد التطبيق كمضيف؛ ويتابع الآخرون على نفس الشاشة أو أجهزتهم الخاصة.' },
        { q: 'كيف يعمل World Builder المخصص؟', a: 'يُولّد World Builder سيناريو نهاية عالم فريدًا قبل كل لعبة — كارثة وموقع وإعداد مخبأ مختلف في كل مرة. لا توجد لعبتان متشابهتان. يحدد السيناريو أي سمات الشخصية ستصبح قيّمة أو مميتة.' },
      ],
      backHome: '← العودة إلى الصفحة الرئيسية',
      privacy: '→ سياسة الخصوصية',
      terms: '→ شروط الاستخدام',
    },
  },
}

export const langLabels: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'pl', label: 'PL' },
  { code: 'de', label: 'DE' },
  { code: 'fr', label: 'FR' },
  { code: 'es', label: 'ES' },
  { code: 'it', label: 'IT' },
  { code: 'pt', label: 'PT' },
  { code: 'tr', label: 'TR' },
  { code: 'zh', label: 'ZH' },
  { code: 'ja', label: 'JA' },
  { code: 'ko', label: 'KO' },
  { code: 'ar', label: 'AR' },
]

interface LangContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translations
}

const LangContext = createContext<LangContextValue>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const saved = localStorage.getItem('bunker-lang') as Lang | null
    if (saved && translations[saved]) setLangState(saved)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('bunker-lang', l)
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
