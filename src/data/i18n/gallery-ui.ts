import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'the isle hacks',
		title: 'the isle hacks gallery',
		subtitle: 'Simple the isle hacks visuals — ESP, wallhack, aimbot, and radar for The Isle on PC.',
		lead: 'The Isle Hacks helps you spot players, wild dinosaurs, carcasses, and nests with ESP, aimbot, and radar in one license.',
		highlights: [
			{ title: 'the isle hacks esp', copy: 'See players through walls with the isle hacks esp and wallhack overlays.' },
			{ title: 'the isle hacks radar', copy: 'Track nearby threats with the isle hacks radar before you push or extract.' },
			{ title: 'the isle hacks aimbot', copy: 'Use soft aim and aimbot controls tuned for The Isle sessions on Windows PC.' },
		],
		updatesLabel: 'the isle hacks updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'The Isle Hacks',
		title: 'Galería The Isle',
		subtitle: 'Visuales de The Isle con loadouts, peleas de escuadrón y combate session — junto a herramientas ESP, radar y Aimbot.',
		lead: 'The Isle Hacks está pensado para el loop BR de The Isle: leer el mapa, rastrear escuadrones enemigos, carcassesear y sobrevivir al extract.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de escuadrón en Isla Spire y growth run para elegir peleas con mejor información.' },
			{ title: 'Marcadores de carcasses y cofres', copy: 'Resalta loadouts, cofres y carcasses de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot The Isle', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones The Isle Hacks',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'The Isle Hacks',
		title: 'Galerie The Isle',
		subtitle: 'Visuels The Isle — loadouts, combats d\'escouade et session — avec ESP, radar et Aimbot.',
		lead: 'The Isle Hacks suit la boucle BR de The Isle : lire la carte, suivre les escouades, carcasses et survivre au extract.',
		highlights: [
			{ title: 'ESP players & escouades', copy: 'Repérez les players ennemis sur Isla Spire et growth run pour choisir vos engagements.' },
			{ title: 'Marqueurs carcasses & coffres', copy: 'Mettez en évidence loadouts, coffres et carcasses haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot The Isle', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour The Isle Hacks',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'The Isle Hacks',
		title: 'The Isle Galerie',
		subtitle: 'The Isle-Bilder zu Loadouts, Squad-Kämpfen und session — mit ESP, Radar und Aimbot.',
		lead: 'The Isle Hacks passt zur Raid-Schleife von The Isle: Karte lesen, Gegner-Trupps tracken, jagen und Nester überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Isla Spire und growth run für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'The Isle Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'The Isle Hacks Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'The Isle Hacks',
		title: 'Galeria The Isle',
		subtitle: 'Visuais de The Isle com loadouts, combates de epackrão e session — com ESP, radar e Aimbot.',
		lead: 'The Isle Hacks segue o loop BR do The Isle: ler o mapa, rastrear epackrões, carcassesar e sobreviver ao extract.',
		highlights: [
			{ title: 'ESP de players e epackrões', copy: 'Detecte players inimigos em Isla Spire e growth run para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de carcasses e cofres', copy: 'Destaque loadouts, cofres e carcasses de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot The Isle', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações The Isle Hacks',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'The Isle Hacks',
		title: 'Galleria The Isle',
		subtitle: 'Immagini The Isle — loadout, scontri di packra e session — con ESP, radar e Aimbot.',
		lead: 'The Isle Hacks è pensato per il loop BR di The Isle: leggere la mappa, tracciare packre nemiche, carcasses e sopravvivere al extract.',
		highlights: [
			{ title: 'ESP playeri e packre', copy: 'Individua playeri nemici su Isla Spire e growth run per scegliere i fight con più intel.' },
			{ title: 'Marker carcasses e coffreti', copy: 'Evidenzia loadout, coffreti e carcasses di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot The Isle', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti The Isle Hacks',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'The Isle Hacks',
		title: 'The Isle galerij',
		subtitle: 'The Isle-beelden van loadouts, packgevechten en session — met ESP, radar en Aimbot.',
		lead: 'The Isle Hacks volgt de session-loop va The Isle: kaart lezen, vijandelijke packs volgen, jagen en nest zones overleven.',
		highlights: [
			{ title: 'Player- & pack-ESP', copy: 'Spot vijandelijke players op Isla Spire en growth run voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier carcasses zonder schermoverlast.' },
			{ title: 'The Isle Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'The Isle Hacks updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'The Isle Hacks',
		title: 'Galeria The Isle',
		subtitle: 'Grafiki The Isle — loadouty, walki drużynowe i session — z ESP, radar i Aimbot.',
		lead: 'The Isle Hacks pasuje do pętli BR The Isle: czytaj mapę, śledź wrogie drużyny, carcassesuj i przeżyj extract.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na Isla Spire i growth run dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery carcassesu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy carcasses bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot The Isle', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje The Isle Hacks',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'The Isle Hacks',
		title: 'Галерея The Isle',
		subtitle: 'Визуалы The Isle — лоадауты, бои отрядов и session — с ESP, радаром и Aimbot.',
		lead: 'The Isle Hacks создан для рейд-циклу The Isle: читать карту, отслеживать вражеские отряды, лут и выживать в extract.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на Isla Spire и growth run для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot The Isle', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления The Isle Hacks',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'The Isle Hacks',
		title: 'The Isle galerisi',
		subtitle: 'Loadout, takım savaşları ve session görselleri — ESP, radar ve Aimbot ile.',
		lead: 'The Isle Hacks, The Isle BR döngüsü için: haritayı oku, düşman takımları izle, carcasses al ve extract\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'Isla Spire ve growth run\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye carcasses\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'The Isle Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'The Isle Hacks güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'The Isle Hacks',
		title: 'معرض The Isle',
		subtitle: 'صور The Isle — loadouts ومعارك الفرق وsession — مع ESP ورادار وAimbot.',
		lead: 'The Isle Hacks مبني لحلقة BR في The Isle: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في extract.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على Isla Spire وgrowth run لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot The Isle', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات The Isle Hacks',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'The Isle Hacks',
		title: 'The Isle ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのThe Isleビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'The Isle HacksはThe IsleのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてextractを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'Isla Spireとgrowth runで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'The Isleエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'The Isle Hacks更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'The Isle Hacks',
		title: 'The Isle 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 The Isle 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'The Isle Hacks는 The Isle survival loop용: 맵 읽기, 적 스쿼드 추적, 루트 수집, extract 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: 'Isla Spire와 growth run에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'The Isle 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'The Isle Hacks 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'The Isle Hacks',
		title: 'The Isle 图库',
		subtitle: 'The Isle 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'The Isle Hacks 为 The Isle survival loop设计：读图、追踪敌方小队、搜刮并在 nest survival。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 Isla Spire 和 growth run 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'The Isle 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'The Isle Hacks 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'The Isle Hacks',
		title: 'The Isle गैलरी',
		subtitle: 'Loadout, pack fights और session visuals — ESP, radar और Aimbot के साथ।',
		lead: 'The Isle Hacks The Isle survival loop के लिए: map पढ़ें, enemy packs track करें, carcasses करें और nest survival करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Isla Spire और growth run पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier carcasses highlight करें screen clutter के बिना।' },
			{ title: 'The Isle Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'The Isle Hacks updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'The Isle Hacks',
		title: 'Galeri The Isle',
		subtitle: 'Visual The Isle — loadout, pertempuran pack, dan session — dengan ESP, radar, dan Aimbot.',
		lead: 'The Isle Hacks untuk loop BR The Isle: baca peta, lacak pack musuh, carcasses, dan selamat di extract.',
		highlights: [
			{ title: 'ESP player & pack', copy: 'Deteksi player musuh di Isla Spire dan growth run untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker carcasses & peti', copy: 'Sorot loadout, peti, dan carcasses tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot The Isle', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update The Isle Hacks',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'The Isle Hacks',
		title: 'แกลเลอรี The Isle',
		subtitle: 'ภาพ The Isle — loadout การต่อสู้ทีม และ session — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'The Isle Hacks สำหรับลูป BR ของ The Isle: อ่านแผนที่ ติดตามทีมศัตรู เก็บ carcasses และรอด extract',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน Isla Spire และ growth run เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ carcasses และหีบ', copy: 'เน้น loadout หีบและ carcasses ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot The Isle', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต The Isle Hacks',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'The Isle Hacks',
		title: 'Thư viện The Isle',
		subtitle: 'Hình ảnh The Isle — loadout, chiến đấu pack và session — với ESP, radar và Aimbot.',
		lead: 'The Isle Hacks cho vòng BR The Isle: đọc bản đồ, theo dõi pack địch, carcasses và sống sót extract.',
		highlights: [
			{ title: 'ESP player & pack', copy: 'Phát hiện player địch trên Isla Spire và growth run để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu carcasses & rương', copy: 'Làm nổi bật loadout, rương và carcasses cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot The Isle', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật The Isle Hacks',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'The Isle Hacks',
		title: 'Галерея The Isle',
		subtitle: 'Візуали The Isle — loadout, бої загонів і session — з ESP, радаром і Aimbot.',
		lead: 'The Isle Hacks для рейд-циклу The Isle: читати карту, відстежувати ворожі загони, лут і виживати в extract.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Isla Spire і growth run для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot The Isle', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення The Isle Hacks',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'The Isle Hacks',
		title: 'Galerie The Isle',
		subtitle: 'The Isle vizuály — loadouty, pack souboje a session — s ESP, radarem a Aimbot.',
		lead: 'The Isle Hacks pro BR smyčku The Isle: číst mapu, sledovat nepřátelské packy, carcasses a přežít extract.',
		highlights: [
			{ title: 'ESP players a packů', copy: 'Spozorujte nepřátelské operátory na Isla Spire a growth run pro lepší rotační rozhodnutí.' },
			{ title: 'Markery carcassesu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier carcasses bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot The Isle', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace The Isle Hacks',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'The Isle Hacks',
		title: 'Galerie The Isle',
		subtitle: 'Vizualuri The Isle — loadout, lupte de pack și session — cu ESP, radar și Aimbot.',
		lead: 'The Isle Hacks pentru bucla BR The Isle: citește harta, urmărește pack-uri inamice, carcasses și supraviețuiește extract.',
		highlights: [
			{ title: 'ESP playeri și pack-uri', copy: 'Detectează playeri inamici pe Isla Spire și growth run pentru decizii de rotație mai bune.' },
			{ title: 'Markere carcasses și cheste', copy: 'Evidențiază loadout-uri, cheste și carcasses de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot The Isle', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări The Isle Hacks',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'The Isle Hacks',
		title: 'The Isle galleri',
		subtitle: 'The Isle-bilder — loadouts, packstrider och session — med ESP, radar och Aimbot.',
		lead: 'The Isle Hacks för The Isle:s session-loop: läs kartan, spåra fiendepacks, carcassesa och överlev extract.',
		highlights: [
			{ title: 'Player- & pack-ESP', copy: 'Spotta fiendeplayerer på Isla Spire och growth run för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier carcasses utan skärmklutter.' },
			{ title: 'The Isle Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'The Isle Hacks uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
