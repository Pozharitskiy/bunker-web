'use client'

import Link from 'next/link'
import { useState } from 'react'

type Lang = 'en' | 'ru' | 'pl' | 'de' | 'fr' | 'es' | 'it' | 'pt' | 'tr' | 'zh' | 'ja' | 'ko' | 'ar'

interface Strings {
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

const translations: Record<Lang, Strings> = {
  en: {
    label: 'HELP & SUPPORT',
    title: 'BUNKER SUPPORT',
    gameDesc:
      'Bunker is a survival social-deduction party game. Players receive unique character cards with traits, professions, and health conditions — then debate who deserves a spot in the underground bunker when the world ends. Powered by a custom World Builder that generates unique apocalypse scenarios every game.',
    helpDesc: 'Need help? Browse the FAQ below or reach out directly.',
    emailLabel: 'EMAIL SUPPORT',
    emailNote: 'We reply within 24–48 hours.',
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'How do I cancel my subscription?',
        a: 'Open the App Store on your iPhone → tap your profile photo → Subscriptions → find Bunker → tap Cancel Subscription. Changes take effect at the end of the current billing period.',
      },
      {
        q: 'The app crashed — what do I do?',
        a: 'Force-quit and reopen the app. Game state is preserved locally. If the issue persists, email us with your iOS version and device model.',
      },
      {
        q: 'How many players can play?',
        a: 'Bunker works best with 4–12 players. One person runs the app as the host; everyone else follows along on the same screen or their own device.',
      },
      {
        q: 'How does the custom World Builder work?',
        a: 'The custom World Builder generates a unique apocalypse scenario before each game — a different catastrophe, location, and bunker setup every time. No two games are the same. The scenario shapes which character traits become valuable or deadly.',
      },
    ],
    backHome: '← Back to Home',
    privacy: '→ Privacy Policy',
    terms: '→ Terms of Use',
  },
  ru: {
    label: 'ПОМОЩЬ И ПОДДЕРЖКА',
    title: 'ПОДДЕРЖКА BUNKER',
    gameDesc:
      'Bunker — это настольная игра на выживание и социальную дедукцию. Игроки получают уникальные карточки персонажей с чертами, профессиями и состоянием здоровья — затем спорят, кто заслуживает место в подземном бункере, когда мир рухнет. Уникальный World Builder генерирует новый сценарий апокалипсиса в каждой игре.',
    helpDesc: 'Нужна помощь? Просмотрите FAQ ниже или свяжитесь с нами напрямую.',
    emailLabel: 'ПОДДЕРЖКА ПО EMAIL',
    emailNote: 'Мы отвечаем в течение 24–48 часов.',
    faqTitle: 'Часто задаваемые вопросы',
    faqs: [
      {
        q: 'Как отменить подписку?',
        a: 'Откройте App Store на вашем iPhone → нажмите фото профиля → Подписки → найдите Bunker → нажмите Отменить подписку. Изменения вступят в силу в конце текущего расчётного периода.',
      },
      {
        q: 'Приложение вылетело — что делать?',
        a: 'Принудительно закройте и снова откройте приложение. Состояние игры сохраняется локально. Если проблема не исчезает, напишите нам, указав версию iOS и модель устройства.',
      },
      {
        q: 'Сколько игроков может играть?',
        a: 'Bunker лучше всего подходит для 4–12 игроков. Один человек запускает приложение как ведущий; все остальные следят за игрой на одном экране или своём устройстве.',
      },
      {
        q: 'Как работает World Builder?',
        a: 'World Builder генерирует уникальный сценарий апокалипсиса перед каждой игрой — разные катастрофы, локации и настройки бункера каждый раз. Никакие две игры не одинаковы. Сценарий определяет, какие черты персонажа станут ценными или смертельными.',
      },
    ],
    backHome: '← На главную',
    privacy: '→ Политика конфиденциальности',
    terms: '→ Условия использования',
  },
  pl: {
    label: 'POMOC I WSPARCIE',
    title: 'WSPARCIE BUNKER',
    gameDesc:
      'Bunker to towarzyska gra survivalowa oparta na dedukcji społecznej. Gracze otrzymują unikalne karty postaci z cechami, zawodami i stanem zdrowia — następnie debatują, kto zasługuje na miejsce w podziemnym bunkrze, gdy świat dobiegnie końca. Niestandardowy World Builder generuje unikalny scenariusz apokalipsy do każdej gry.',
    helpDesc: 'Potrzebujesz pomocy? Przejrzyj poniższe FAQ lub skontaktuj się z nami bezpośrednio.',
    emailLabel: 'WSPARCIE E-MAIL',
    emailNote: 'Odpowiadamy w ciągu 24–48 godzin.',
    faqTitle: 'Często zadawane pytania',
    faqs: [
      {
        q: 'Jak anulować subskrypcję?',
        a: 'Otwórz App Store na iPhonie → dotknij zdjęcia profilu → Subskrypcje → znajdź Bunker → dotknij Anuluj subskrypcję. Zmiany wejdą w życie z końcem bieżącego okresu rozliczeniowego.',
      },
      {
        q: 'Aplikacja się zawiesiła — co mam zrobić?',
        a: 'Wymuś zamknięcie i ponownie otwórz aplikację. Stan gry jest zachowany lokalnie. Jeśli problem nadal występuje, napisz do nas z wersją iOS i modelem urządzenia.',
      },
      {
        q: 'Ilu graczy może grać?',
        a: 'Bunker działa najlepiej przy 4–12 graczach. Jedna osoba uruchamia aplikację jako gospodarz; reszta śledzi grę na tym samym ekranie lub własnym urządzeniu.',
      },
      {
        q: 'Jak działa niestandardowy World Builder?',
        a: 'World Builder generuje unikalny scenariusz apokalipsy przed każdą grą — inną katastrofę, lokalizację i konfigurację bunkra za każdym razem. Żadne dwie gry nie są takie same. Scenariusz decyduje, które cechy postaci stają się cenne lub śmiertelne.',
      },
    ],
    backHome: '← Powrót do strony głównej',
    privacy: '→ Polityka prywatności',
    terms: '→ Warunki użytkowania',
  },
  de: {
    label: 'HILFE & SUPPORT',
    title: 'BUNKER-SUPPORT',
    gameDesc:
      'Bunker ist ein Survival-Partyspiel mit sozialer Deduktion. Spieler erhalten einzigartige Charakterkarten mit Eigenschaften, Berufen und Gesundheitszuständen — dann wird debattiert, wer einen Platz im unterirdischen Bunker verdient, wenn die Welt untergeht. Ein individueller World Builder generiert für jedes Spiel einzigartige Apokalypse-Szenarien.',
    helpDesc: 'Brauchst du Hilfe? Schau dir die FAQ unten an oder kontaktiere uns direkt.',
    emailLabel: 'E-MAIL-SUPPORT',
    emailNote: 'Wir antworten innerhalb von 24–48 Stunden.',
    faqTitle: 'Häufig gestellte Fragen',
    faqs: [
      {
        q: 'Wie kündige ich mein Abonnement?',
        a: 'Öffne den App Store auf deinem iPhone → tippe auf dein Profilbild → Abonnements → finde Bunker → tippe auf Abonnement kündigen. Änderungen treten am Ende des aktuellen Abrechnungszeitraums in Kraft.',
      },
      {
        q: 'Die App ist abgestürzt — was soll ich tun?',
        a: 'Beende die App erzwungen und öffne sie erneut. Der Spielstand wird lokal gespeichert. Wenn das Problem weiterhin besteht, schreib uns mit deiner iOS-Version und deinem Gerätemodell.',
      },
      {
        q: 'Wie viele Spieler können mitspielen?',
        a: 'Bunker funktioniert am besten mit 4–12 Spielern. Eine Person führt die App als Host; alle anderen folgen auf demselben Bildschirm oder ihrem eigenen Gerät.',
      },
      {
        q: 'Wie funktioniert der individuelle World Builder?',
        a: 'Der World Builder generiert vor jeder Partie ein einzigartiges Apokalypse-Szenario — jedes Mal eine andere Katastrophe, ein anderer Ort und eine andere Bunker-Konfiguration. Keine zwei Spiele sind gleich. Das Szenario bestimmt, welche Charaktereigenschaften wertvoll oder tödlich werden.',
      },
    ],
    backHome: '← Zurück zur Startseite',
    privacy: '→ Datenschutzrichtlinie',
    terms: '→ Nutzungsbedingungen',
  },
  fr: {
    label: 'AIDE ET SUPPORT',
    title: 'SUPPORT BUNKER',
    gameDesc:
      "Bunker est un jeu de survie et de déduction sociale. Les joueurs reçoivent des cartes de personnage uniques avec des traits, des professions et des conditions de santé — puis ils débattent pour savoir qui mérite une place dans le bunker souterrain lorsque le monde s'effondre. Un World Builder personnalisé génère un scénario d'apocalypse unique à chaque partie.",
    helpDesc: "Besoin d'aide ? Consultez la FAQ ci-dessous ou contactez-nous directement.",
    emailLabel: 'SUPPORT PAR E-MAIL',
    emailNote: 'Nous répondons sous 24 à 48 heures.',
    faqTitle: 'Questions fréquemment posées',
    faqs: [
      {
        q: 'Comment annuler mon abonnement ?',
        a: "Ouvrez l'App Store sur votre iPhone → appuyez sur votre photo de profil → Abonnements → trouvez Bunker → appuyez sur Résilier l'abonnement. Les modifications prennent effet à la fin de la période de facturation en cours.",
      },
      {
        q: "L'application a planté — que dois-je faire ?",
        a: "Forcez la fermeture et rouvrez l'application. L'état du jeu est conservé localement. Si le problème persiste, envoyez-nous un e-mail avec votre version iOS et le modèle de votre appareil.",
      },
      {
        q: 'Combien de joueurs peuvent jouer ?',
        a: "Bunker fonctionne mieux avec 4 à 12 joueurs. Une personne exécute l'application en tant qu'hôte ; les autres suivent sur le même écran ou leur propre appareil.",
      },
      {
        q: 'Comment fonctionne le World Builder personnalisé ?',
        a: "Le World Builder génère un scénario d'apocalypse unique avant chaque partie — une catastrophe, un lieu et une configuration de bunker différents à chaque fois. Aucune partie ne se ressemble. Le scénario détermine quels traits de personnage deviennent précieux ou mortels.",
      },
    ],
    backHome: "← Retour à l'accueil",
    privacy: '→ Politique de confidentialité',
    terms: "→ Conditions d'utilisation",
  },
  es: {
    label: 'AYUDA Y SOPORTE',
    title: 'SOPORTE BUNKER',
    gameDesc:
      'Bunker es un juego de fiesta de supervivencia y deducción social. Los jugadores reciben tarjetas de personaje únicas con rasgos, profesiones y condiciones de salud — luego debaten quién merece un lugar en el búnker subterráneo cuando el mundo termine. Un World Builder personalizado genera escenarios de apocalipsis únicos en cada partida.',
    helpDesc: '¿Necesitas ayuda? Consulta las preguntas frecuentes a continuación o contáctanos directamente.',
    emailLabel: 'SOPORTE POR EMAIL',
    emailNote: 'Respondemos en 24–48 horas.',
    faqTitle: 'Preguntas frecuentes',
    faqs: [
      {
        q: '¿Cómo cancelo mi suscripción?',
        a: 'Abre la App Store en tu iPhone → toca tu foto de perfil → Suscripciones → encuentra Bunker → toca Cancelar suscripción. Los cambios entran en vigor al final del período de facturación actual.',
      },
      {
        q: 'La aplicación se bloqueó — ¿qué hago?',
        a: 'Fuerza el cierre y vuelve a abrir la aplicación. El estado del juego se conserva localmente. Si el problema persiste, escríbenos con tu versión de iOS y el modelo de tu dispositivo.',
      },
      {
        q: '¿Cuántos jugadores pueden jugar?',
        a: 'Bunker funciona mejor con 4–12 jugadores. Una persona ejecuta la aplicación como anfitrión; los demás siguen en la misma pantalla o en su propio dispositivo.',
      },
      {
        q: '¿Cómo funciona el World Builder personalizado?',
        a: 'El World Builder genera un escenario de apocalipsis único antes de cada partida — una catástrofe, ubicación y configuración de búnker diferente cada vez. No hay dos partidas iguales. El escenario determina qué rasgos de personaje se vuelven valiosos o mortales.',
      },
    ],
    backHome: '← Volver al inicio',
    privacy: '→ Política de privacidad',
    terms: '→ Términos de uso',
  },
  it: {
    label: 'AIUTO E SUPPORTO',
    title: 'SUPPORTO BUNKER',
    gameDesc:
      'Bunker è un gioco da tavolo di sopravvivenza e deduzione sociale. I giocatori ricevono carte personaggio uniche con tratti, professioni e condizioni di salute — poi dibattono su chi merita un posto nel bunker sotterraneo quando il mondo finisce. Un World Builder personalizzato genera scenari apocalittici unici ad ogni partita.',
    helpDesc: 'Hai bisogno di aiuto? Consulta le FAQ qui sotto o contattaci direttamente.',
    emailLabel: 'SUPPORTO EMAIL',
    emailNote: 'Rispondiamo entro 24–48 ore.',
    faqTitle: 'Domande frequenti',
    faqs: [
      {
        q: 'Come cancello il mio abbonamento?',
        a: "Apri l'App Store sul tuo iPhone → tocca la foto del profilo → Abbonamenti → trova Bunker → tocca Annulla abbonamento. Le modifiche avranno effetto alla fine del periodo di fatturazione corrente.",
      },
      {
        q: "L'app è crashata — cosa faccio?",
        a: "Forza la chiusura e riapri l'app. Lo stato del gioco è conservato localmente. Se il problema persiste, scrivici con la tua versione iOS e il modello del dispositivo.",
      },
      {
        q: 'Quanti giocatori possono giocare?',
        a: "Bunker funziona meglio con 4–12 giocatori. Una persona esegue l'app come host; tutti gli altri seguono sullo stesso schermo o sul proprio dispositivo.",
      },
      {
        q: 'Come funziona il World Builder personalizzato?',
        a: 'Il World Builder genera uno scenario apocalittico unico prima di ogni partita — ogni volta una catastrofe, una posizione e una configurazione del bunker diverse. Non ci sono due partite uguali. Lo scenario determina quali tratti del personaggio diventano preziosi o letali.',
      },
    ],
    backHome: '← Torna alla home',
    privacy: '→ Informativa sulla privacy',
    terms: '→ Termini di utilizzo',
  },
  pt: {
    label: 'AJUDA E SUPORTE',
    title: 'SUPORTE BUNKER',
    gameDesc:
      'Bunker é um jogo de festa de sobrevivência e dedução social. Os jogadores recebem cartas de personagem únicas com traços, profissões e condições de saúde — depois debatem quem merece um lugar no abrigo subterrâneo quando o mundo acabar. Um World Builder personalizado gera cenários de apocalipse únicos em cada jogo.',
    helpDesc: 'Precisa de ajuda? Consulte as perguntas frequentes abaixo ou entre em contato diretamente.',
    emailLabel: 'SUPORTE POR EMAIL',
    emailNote: 'Respondemos em 24–48 horas.',
    faqTitle: 'Perguntas frequentes',
    faqs: [
      {
        q: 'Como cancelo minha assinatura?',
        a: 'Abra a App Store no seu iPhone → toque na foto do perfil → Assinaturas → encontre Bunker → toque em Cancelar assinatura. As alterações entram em vigor no final do período de cobrança atual.',
      },
      {
        q: 'O aplicativo travou — o que faço?',
        a: 'Force o fechamento e reabra o aplicativo. O estado do jogo é preservado localmente. Se o problema persistir, envie-nos um e-mail com sua versão do iOS e o modelo do dispositivo.',
      },
      {
        q: 'Quantos jogadores podem jogar?',
        a: 'Bunker funciona melhor com 4–12 jogadores. Uma pessoa executa o aplicativo como anfitrião; todos os outros acompanham na mesma tela ou no próprio dispositivo.',
      },
      {
        q: 'Como funciona o World Builder personalizado?',
        a: 'O World Builder gera um cenário de apocalipse único antes de cada jogo — uma catástrofe, localização e configuração de abrigo diferentes a cada vez. Não há dois jogos iguais. O cenário determina quais traços de personagem se tornam valiosos ou mortais.',
      },
    ],
    backHome: '← Voltar para o início',
    privacy: '→ Política de privacidade',
    terms: '→ Termos de uso',
  },
  tr: {
    label: 'YARDIM VE DESTEK',
    title: 'BUNKER DESTEK',
    gameDesc:
      'Bunker, hayatta kalma ve sosyal çıkarım odaklı bir parti oyunudur. Oyuncular özellikler, meslekler ve sağlık durumları içeren benzersiz karakter kartları alır — ardından dünya sona erdiğinde yeraltı sığınağında kimin yer almayı hak ettiğini tartışırlar. Özel bir World Builder, her oyunda benzersiz kıyamet senaryoları oluşturur.',
    helpDesc: 'Yardıma mı ihtiyacın var? Aşağıdaki SSS\'e göz at veya doğrudan bizimle iletişime geç.',
    emailLabel: 'E-POSTA DESTEĞİ',
    emailNote: '24–48 saat içinde yanıt veriyoruz.',
    faqTitle: 'Sık Sorulan Sorular',
    faqs: [
      {
        q: 'Aboneliğimi nasıl iptal ederim?',
        a: "iPhone'unda App Store'u aç → profil fotoğrafına dokun → Abonelikler → Bunker'ı bul → Aboneliği İptal Et'e dokun. Değişiklikler mevcut fatura döneminin sonunda geçerli olur.",
      },
      {
        q: 'Uygulama çöktü — ne yapmalıyım?',
        a: 'Uygulamayı zorla kapat ve yeniden aç. Oyun durumu yerel olarak saklanır. Sorun devam ederse iOS sürümün ve cihaz modelinle birlikte bize e-posta gönder.',
      },
      {
        q: 'Kaç oyuncu oynayabilir?',
        a: 'Bunker, 4–12 oyuncu ile en iyi deneyimi sunar. Bir kişi uygulamayı ev sahibi olarak çalıştırır; diğerleri aynı ekranda veya kendi cihazlarında takip eder.',
      },
      {
        q: 'Özel World Builder nasıl çalışır?',
        a: 'World Builder, her oyundan önce benzersiz bir kıyamet senaryosu oluşturur — her seferinde farklı bir felaket, konum ve sığınak düzeni. Hiçbir iki oyun birbirinin aynısı değildir. Senaryo, hangi karakter özelliklerinin değerli ya da ölümcül olacağını belirler.',
      },
    ],
    backHome: '← Ana sayfaya dön',
    privacy: '→ Gizlilik Politikası',
    terms: '→ Kullanım Koşulları',
  },
  zh: {
    label: '帮助与支持',
    title: 'BUNKER 支持',
    gameDesc:
      'Bunker 是一款生存社交推理派对游戏。玩家获得带有特征、职业和健康状况的独特角色卡片，然后争论谁在世界末日时有资格进入地下掩体。定制的 World Builder 在每场游戏中生成独特的末日场景。',
    helpDesc: '需要帮助？浏览下方常见问题或直接联系我们。',
    emailLabel: '邮件支持',
    emailNote: '我们将在 24–48 小时内回复。',
    faqTitle: '常见问题',
    faqs: [
      {
        q: '如何取消订阅？',
        a: '在 iPhone 上打开 App Store → 点击个人头像 → 订阅 → 找到 Bunker → 点击取消订阅。更改将在当前计费周期结束时生效。',
      },
      {
        q: '应用崩溃了，该怎么办？',
        a: '强制退出并重新打开应用。游戏状态已在本地保存。如果问题仍然存在，请发送邮件告知您的 iOS 版本和设备型号。',
      },
      {
        q: '可以有多少名玩家参与？',
        a: 'Bunker 最适合 4–12 名玩家。一人担任主机运行应用，其他人在同一屏幕或各自设备上参与游戏。',
      },
      {
        q: '定制 World Builder 是如何运作的？',
        a: 'World Builder 在每场游戏前生成独特的末日场景——每次都有不同的灾难、地点和掩体配置。没有任何两场游戏完全相同。场景决定了哪些角色特征会变得有价值或致命。',
      },
    ],
    backHome: '← 返回首页',
    privacy: '→ 隐私政策',
    terms: '→ 使用条款',
  },
  ja: {
    label: 'ヘルプ＆サポート',
    title: 'BUNKER サポート',
    gameDesc:
      'Bunkerは、サバイバルをテーマにした社会的推理パーティーゲームです。プレイヤーはそれぞれ特性、職業、健康状態が記されたユニークなキャラクターカードを受け取り、世界が終わったとき地下シェルターに入る資格があるのは誰かを討論します。カスタムのWorld Builderが毎ゲーム固有の終末シナリオを生成します。',
    helpDesc: 'お困りですか？以下のFAQをご覧いただくか、直接お問い合わせください。',
    emailLabel: 'メールサポート',
    emailNote: '24〜48時間以内にご返信いたします。',
    faqTitle: 'よくある質問',
    faqs: [
      {
        q: 'サブスクリプションをキャンセルするには？',
        a: 'iPhoneのApp Storeを開く → プロフィール写真をタップ → サブスクリプション → Bunkerを見つける → サブスクリプションをキャンセルをタップ。変更は現在の請求期間の終了時に有効になります。',
      },
      {
        q: 'アプリがクラッシュしました。どうすればいいですか？',
        a: 'アプリを強制終了して再度開いてください。ゲームの状態はローカルに保存されています。問題が続く場合は、iOSのバージョンとデバイスモデルを添えてメールでお知らせください。',
      },
      {
        q: '何人でプレイできますか？',
        a: 'Bunkerは4〜12人で最も楽しめます。1人がアプリをホストとして起動し、他の全員が同じ画面または各自のデバイスでゲームに参加します。',
      },
      {
        q: 'カスタムWorld Builderはどのように機能しますか？',
        a: 'World Builderはゲームごとに固有の終末シナリオを生成します——毎回異なる災害、場所、シェルターの設定。同じゲームは二度とありません。シナリオによって、どのキャラクター特性が有利または致命的になるかが決まります。',
      },
    ],
    backHome: '← ホームに戻る',
    privacy: '→ プライバシーポリシー',
    terms: '→ 利用規約',
  },
  ko: {
    label: '도움말 및 지원',
    title: 'BUNKER 지원',
    gameDesc:
      'Bunker는 생존을 주제로 한 소셜 추론 파티 게임입니다. 플레이어들은 특성, 직업, 건강 상태가 담긴 고유한 캐릭터 카드를 받고, 세계가 끝날 때 지하 벙커에 들어갈 자격이 있는 사람이 누구인지 토론합니다. 커스텀 World Builder가 매 게임마다 고유한 종말 시나리오를 생성합니다.',
    helpDesc: '도움이 필요하신가요? 아래 FAQ를 참조하거나 직접 문의해 주세요.',
    emailLabel: '이메일 지원',
    emailNote: '24~48시간 이내에 답변해 드립니다.',
    faqTitle: '자주 묻는 질문',
    faqs: [
      {
        q: '구독을 어떻게 취소하나요?',
        a: 'iPhone에서 App Store를 열고 → 프로필 사진을 탭 → 구독 → Bunker를 찾아 → 구독 취소를 탭하세요. 변경 사항은 현재 청구 기간이 끝날 때 적용됩니다.',
      },
      {
        q: '앱이 충돌했습니다. 어떻게 해야 하나요?',
        a: '앱을 강제 종료하고 다시 열어 주세요. 게임 상태는 로컬에 저장됩니다. 문제가 지속되면 iOS 버전과 기기 모델을 알려주시며 이메일을 보내 주세요.',
      },
      {
        q: '몇 명의 플레이어가 플레이할 수 있나요?',
        a: 'Bunker는 4~12명이 플레이할 때 가장 즐겁습니다. 한 명이 앱을 호스트로 실행하고, 나머지는 같은 화면이나 각자의 기기에서 게임에 참여합니다.',
      },
      {
        q: '커스텀 World Builder는 어떻게 작동하나요?',
        a: 'World Builder는 매 게임 전에 고유한 종말 시나리오를 생성합니다 — 매번 다른 재앙, 장소, 벙커 설정이 제공됩니다. 같은 게임은 두 번 없습니다. 시나리오에 따라 어떤 캐릭터 특성이 가치 있거나 치명적이 될지 결정됩니다.',
      },
    ],
    backHome: '← 홈으로 돌아가기',
    privacy: '→ 개인정보 처리방침',
    terms: '→ 이용약관',
  },
  ar: {
    label: 'المساعدة والدعم',
    title: 'دعم BUNKER',
    gameDesc:
      'Bunker هي لعبة حفلات بقاء وخداع اجتماعي. يحصل اللاعبون على بطاقات شخصية فريدة تحتوي على سمات ومهن وحالات صحية — ثم يتجادلون حول من يستحق مكانًا في المخبأ تحت الأرض عندما تنتهي الدنيا. يُولّد World Builder المخصص سيناريو نهاية عالم فريدًا في كل لعبة.',
    helpDesc: 'هل تحتاج إلى مساعدة؟ تصفح الأسئلة الشائعة أدناه أو تواصل معنا مباشرة.',
    emailLabel: 'الدعم عبر البريد الإلكتروني',
    emailNote: 'نرد في غضون 24–48 ساعة.',
    faqTitle: 'الأسئلة الشائعة',
    faqs: [
      {
        q: 'كيف أُلغي اشتراكي؟',
        a: 'افتح App Store على iPhone الخاص بك ← انقر على صورة ملفك الشخصي ← الاشتراكات ← ابحث عن Bunker ← انقر على إلغاء الاشتراك. تسري التغييرات في نهاية فترة الفوترة الحالية.',
      },
      {
        q: 'تعطّل التطبيق — ماذا أفعل؟',
        a: 'أغلق التطبيق إجباريًا وأعد فتحه. يتم حفظ حالة اللعبة محليًا. إذا استمرت المشكلة، أرسل لنا بريدًا إلكترونيًا مع إصدار iOS ونوع جهازك.',
      },
      {
        q: 'كم عدد اللاعبين الذين يمكنهم اللعب؟',
        a: 'يعمل Bunker بشكل أفضل مع 4–12 لاعبًا. يشغّل شخص واحد التطبيق كمضيف؛ ويتابع الآخرون على نفس الشاشة أو أجهزتهم الخاصة.',
      },
      {
        q: 'كيف يعمل World Builder المخصص؟',
        a: 'يُولّد World Builder سيناريو نهاية عالم فريدًا قبل كل لعبة — كارثة وموقع وإعداد مخبأ مختلف في كل مرة. لا توجد لعبتان متشابهتان. يحدد السيناريو أي سمات الشخصية ستصبح قيّمة أو مميتة.',
      },
    ],
    backHome: '← العودة إلى الصفحة الرئيسية',
    privacy: '→ سياسة الخصوصية',
    terms: '→ شروط الاستخدام',
  },
}

const langLabels: { code: Lang; label: string }[] = [
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

export default function SupportContent() {
  const [lang, setLang] = useState<Lang>('en')
  const t = translations[lang]
  const isRtl = lang === 'ar'

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Language switcher */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.35rem',
          marginBottom: '3rem',
        }}
      >
        {langLabels.map(({ code, label }) => (
          <button
            key={code}
            onClick={() => setLang(code)}
            style={{
              fontFamily: 'Roboto Mono, monospace',
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              padding: '0.3rem 0.6rem',
              borderRadius: '6px',
              border: lang === code ? '1px solid rgba(251,191,36,0.7)' : '1px solid var(--border)',
              background: lang === code ? 'rgba(251,191,36,0.12)' : 'transparent',
              color: lang === code ? 'var(--primary)' : 'var(--text-muted)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              if (lang !== code) {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(251,191,36,0.35)'
                ;(e.currentTarget as HTMLElement).style.color = 'var(--text)'
              }
            }}
            onMouseLeave={e => {
              if (lang !== code) {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                ;(e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'
              }
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Header */}
      <div style={{ marginBottom: '3.5rem' }}>
        <p
          style={{
            fontFamily: 'Roboto Mono, monospace',
            fontSize: '0.72rem',
            color: 'var(--primary)',
            letterSpacing: '0.18em',
            marginBottom: '0.75rem',
          }}
        >
          {t.label}
        </p>
        <h1
          style={{
            fontFamily: 'Orbitron, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(1.6rem, 5vw, 2.5rem)',
            letterSpacing: '0.06em',
            color: 'var(--text)',
            marginBottom: '0.75rem',
          }}
        >
          {t.title}
        </h1>
        <p
          style={{
            fontFamily: 'Roboto Mono, monospace',
            fontSize: '0.88rem',
            color: 'var(--text-muted)',
            maxWidth: '560px',
            lineHeight: 1.8,
            marginBottom: '0.75rem',
          }}
        >
          {t.gameDesc}
        </p>
        <p
          style={{
            fontFamily: 'Roboto Mono, monospace',
            fontSize: '0.88rem',
            color: 'var(--text-muted)',
            maxWidth: '500px',
            lineHeight: 1.8,
          }}
        >
          {t.helpDesc}
        </p>
      </div>

      {/* Contact card */}
      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid rgba(251,191,36,0.3)',
          borderRadius: '16px',
          padding: '2rem',
          marginBottom: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '12px',
            background: 'rgba(251,191,36,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            fontSize: '1.4rem',
          }}
        >
          ✉️
        </div>
        <div>
          <p
            style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: 'var(--text)',
              marginBottom: '0.3rem',
            }}
          >
            {t.emailLabel}
          </p>
          <a
            href="mailto:supportbunker@gmail.com"
            style={{
              fontFamily: 'Roboto Mono, monospace',
              fontSize: '1rem',
              color: 'var(--primary)',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => ((e.target as HTMLElement).style.opacity = '0.75')}
            onMouseLeave={e => ((e.target as HTMLElement).style.opacity = '1')}
          >
            supportbunker@gmail.com
          </a>
          <p
            style={{
              fontFamily: 'Roboto Mono, monospace',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              marginTop: '0.3rem',
            }}
          >
            {t.emailNote}
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2
          style={{
            fontFamily: 'Orbitron, sans-serif',
            fontWeight: 700,
            fontSize: '0.9rem',
            letterSpacing: '0.12em',
            color: 'var(--primary)',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
          }}
        >
          {t.faqTitle}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {t.faqs.map(({ q, a }, i) => (
            <div
              key={i}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '1.5rem',
                transition: 'border-color 0.25s',
              }}
              onMouseEnter={e =>
                ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(251,191,36,0.35)')
              }
              onMouseLeave={e =>
                ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')
              }
            >
              <p
                style={{
                  fontFamily: 'Roboto Mono, monospace',
                  fontWeight: 500,
                  fontSize: '0.87rem',
                  color: 'var(--text)',
                  marginBottom: '0.5rem',
                }}
              >
                {q}
              </p>
              <p
                style={{
                  fontFamily: 'Roboto Mono, monospace',
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                  margin: 0,
                  lineHeight: 1.8,
                }}
              >
                {a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Links */}
      <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {[
          { href: '/', label: t.backHome },
          { href: '/privacy', label: t.privacy },
          { href: '/terms', label: t.terms },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            style={{
              fontFamily: 'Roboto Mono, monospace',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--text)')}
            onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--text-muted)')}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}
