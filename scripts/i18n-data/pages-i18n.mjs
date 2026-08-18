import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';
import { PAGE_IMAGE_ALTS } from './image-alts.mjs';
import { FOCUS_I18N } from './focus-i18n.mjs';
import { LEGAL_I18N } from './legal-i18n.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'The DBD Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Dead by Daylight indetectables para Dead by Daylight en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Easy Anti-Cheat. Entrega digital instantánea.', h1: 'The DBD Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Dead by Daylight en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Easy Anti-Cheat tras cada parche.', imageAlt: 'DBD ESP — etiquetas de jugador hack', gallery: 'Galería The DBD Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen The DBD Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y chase.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'The DBD Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Dead by Daylight indétectables pour Dead by Daylight sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Easy Anti-Cheat. Livraison numérique instantanée.', h1: 'The DBD Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Dead by Daylight sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Easy Anti-Cheat après chaque patch.', imageAlt: 'DBD ESP — tags joueur hack', gallery: 'Galerie The DBD Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir The DBD Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en BR et chase.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'The DBD Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected The DBD Cheats für Dead by Daylight auf PC. ESP Wallhack, Radar Hack und Aimbot mit Easy Anti-Cheat-Wartung. Sofortige digitale Lieferung.', h1: 'The DBD Cheats — Undetected ESP, Wallhack und Aimbot', intro: 'Undetected Windows PC Paket für Dead by Daylight: ESP Wallhack, Radar und Aimbot mit Easy Anti-Cheat-Wartung nach jedem Patch.', imageAlt: 'DBD ESP — Spieler-Tags Hack', gallery: 'The DBD Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum The DBD Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und chase zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'The DBD Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Dead by Daylight indetectáveis para Dead by Daylight no PC. ESP wallhack, radar hack e Aimbot com manutenção Easy Anti-Cheat. Entrega digital instantánea.', h1: 'The DBD Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Dead by Daylight no Windows PC: ESP wallhack, radar e Aimbot com manutenção Easy Anti-Cheat após cada patch.', imageAlt: 'DBD ESP player tags hack', gallery: 'Galeria The DBD Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher The DBD Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler epackrões inimigos em BR e chase.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'The DBD Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Dead by Daylight indetectable per Dead by Daylight su PC. ESP wallhack, radar hack e Aimbot con manutenzione Easy Anti-Cheat. Consegna digitale istantanea.', h1: 'The DBD Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Dead by Daylight su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Easy Anti-Cheat dopo ogni patch.', imageAlt: 'DBD ESP player tags hack', gallery: 'Galleria The DBD Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere The DBD Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere packre nemiche in BR e chase.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'The DBD Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected dbd cheats voor Dead by Daylight op PC. ESP wallhack, radar hack en Aimbot met Easy Anti-Cheat-onderhoud. Directe digitale levering.', h1: 'The DBD Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Dead by Daylight: ESP wallhack, radar en Aimbot met Easy Anti-Cheat-onderhoud na elke patch.', imageAlt: 'DBD ESP player tags hack', gallery: 'The DBD Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom The DBD Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke packs te lezen in BR en chase.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'The DBD Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Dead by Daylight dla Dead by Daylight na PC. ESP wallhack, radar hack i Aimbot z konserwacją Easy Anti-Cheat. Natychmiastowa dostawa cyfrowa.', h1: 'The DBD Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Dead by Daylight na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Easy Anti-Cheat po każdym patchu.', imageAlt: 'DBD ESP player tags hack', gallery: 'Galeria The DBD Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego The DBD Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich packów w BR i chase.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'The DBD Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Dead by Daylight для Dead by Daylight на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'The DBD Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Dead by Daylight на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Easy Anti-Cheat после патчей.', imageAlt: 'DBD ESP — теги игроков hack', gallery: 'Галерея The DBD Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают The DBD Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и chase.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'The DBD Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'Dead by Daylight için undetected hileler. ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat bakımı. Anında dijital teslimat.', h1: 'The DBD Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'Dead by Daylight Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Easy Anti-Cheat bakımı dahil.', imageAlt: 'DBD ESP player tags hack', gallery: 'The DBD Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden The DBD Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve chase\'da düşman pack okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'The DBD Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش Dead by Daylight undetected لـ Dead by Daylight على PC. ESP wallhack ورadar hack وAimbot مع صيانة Easy Anti-Cheat. تسليم رقمي فوري.', h1: 'The DBD Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Dead by Daylight على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Easy Anti-Cheat.', imageAlt: 'DBD ESP player tags hack', gallery: 'معرض The DBD Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا The DBD Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وchase.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'The DBD Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'Dead by Daylight向けundetectedチート。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheatメンテナンス。即時デジタル配信。', h1: 'The DBD Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'Dead by Daylight Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Easy Anti-Cheatメンテナンス付き。', imageAlt: 'dbd cheats hero ESP aimbot wallhack', gallery: 'The DBD Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にThe DBD Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとchaseで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'The DBD Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'Dead by Daylight undetected 치트. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat 유지보수. 즉시 디지털 배송.', h1: 'The DBD Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'Dead by Daylight Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Easy Anti-Cheat 유지보수 포함.', imageAlt: 'dbd cheats hero ESP aimbot wallhack', gallery: 'The DBD Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 The DBD Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 chase에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'The DBD Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'Dead by Daylight undetected作弊。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheat维护。即时数字交付。', h1: 'The DBD Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'Dead by Daylight Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Easy Anti-Cheat维护。', imageAlt: 'dbd cheats hero ESP aimbot wallhack', gallery: 'The DBD Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择The DBD Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和chase中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'The DBD Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'Dead by Daylight undetected cheats. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. Instant digital delivery.', h1: 'The DBD Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'Dead by Daylight Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, Easy Anti-Cheat maintenance सहित.', imageAlt: 'dbd cheats hero ESP aimbot wallhack', gallery: 'The DBD Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में The DBD Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और chase में दुश्मन pack पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'The DBD Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Dead by Daylight undetected untuk Dead by Daylight di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Easy Anti-Cheat. Pengiriman digital instan.', h1: 'The DBD Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Dead by Daylight di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Easy Anti-Cheat.', imageAlt: 'DBD ESP player tags hack', gallery: 'Galeri The DBD Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa The DBD Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca pack musuh di BR dan chase.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'The DBD Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Dead by Daylight undetected สำหรับ Dead by Daylight บน PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. จัดส่งดิจิทัลทันที.', h1: 'The DBD Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Dead by Daylight บน Windows PC: ESP wallhack, radar, Aimbot พร้อม Easy Anti-Cheat maintenance', imageAlt: 'DBD ESP player tags hack', gallery: 'แกลเลอรี The DBD Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก The DBD Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน pack ศัตรูใน BR และ chase', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'The DBD Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Dead by Daylight undetected cho Dead by Daylight trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Easy Anti-Cheat. Giao hàng kỹ thuật số tức thì.', h1: 'The DBD Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Dead by Daylight trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Easy Anti-Cheat.', imageAlt: 'DBD ESP player tags hack', gallery: 'Thư viện The DBD Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn The DBD Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc pack địch trong BR và chase.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'The DBD Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Dead by Daylight для Dead by Daylight на PC. ESP wallhack, radar hack, Aimbot, обслуговування Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'The DBD Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Dead by Daylight на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Easy Anti-Cheat.', imageAlt: 'DBD ESP player tags hack', gallery: 'Галерея The DBD Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому The DBD Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і chase.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'The DBD Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected dbd cheaty pro Dead by Daylight na PC. ESP wallhack, radar hack, Aimbot, údržba Easy Anti-Cheat. Okamžité digitální doručení.', h1: 'The DBD Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Dead by Daylight na Windows PC: ESP wallhack, radar, Aimbot s údržbou Easy Anti-Cheat.', imageAlt: 'DBD ESP player tags hack', gallery: 'Galerie The DBD Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč The DBD Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských packů v BR a chase.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'The DBD Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Dead by Daylight undetected pentru Dead by Daylight pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Easy Anti-Cheat. Livrare digitală instantă.', h1: 'The DBD Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Dead by Daylight pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Easy Anti-Cheat.', imageAlt: 'DBD ESP player tags hack', gallery: 'Galerie The DBD Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce The DBD Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea pack-urilor inamice în BR și chase.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'The DBD Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected dbd cheats för Dead by Daylight på PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat-underhåll. Omedelbar digital leverans.', h1: 'The DBD Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Dead by Daylight på Windows PC: ESP wallhack, radar, Aimbot med Easy Anti-Cheat-underhåll.', imageAlt: 'DBD ESP player tags hack', gallery: 'The DBD Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför The DBD Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendepacks i BR och chase.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique title/desc tails per page — English base + locale overrides for hero H1/subtitle. */
const PAGE_META_TAILS = {
	'dbd-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, generator markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'dbd-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-species Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'Easy Anti-Cheat Maintenance Log', focus: 'Easy Anti-Cheat patch status and rebuild notes', altKeyword: 'updates Easy Anti-Cheat maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and Easy Anti-Cheat questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'Easy Anti-Cheat Safe Status', focus: 'undetected maintenance after Easy Anti-Cheat patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, carcasses, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations', altKeyword: 'radar hack overlay' },
	eac: { suffix: 'Patch Maintenance', focus: 'how Easy Anti-Cheat updates are handled for Dead by Daylight hacks', altKeyword: 'Easy Anti-Cheat bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 dbd cheats checklist before checkout', altKeyword: 'cheats 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'The DBD Cheats pillar for ESP and Aimbot', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles', altKeyword: 'mod menu ESP aimbot' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for Windows PC', altKeyword: 'soft aim aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying dbd cheats', altKeyword: 'best cheats ESP aimbot' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Dead by Daylight', altKeyword: 'aimbot hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, carcass pins, and distance', altKeyword: 'ESP hack wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all species ESP aimbot' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
const SUFFIX_I18N = {
	es: {
		'dbd-esp': 'Cajas de jugador y wallhack',
		'dbd-aimbot': 'Controles soft aim',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		radar: 'Radar 2D de amenazas',
		eac: 'Mantenimiento de parches',
		'cheats-2026': 'Guía del comprador',
		hacks: 'Guía ESP y Aimbot',
		'cheat-download': 'Acceso instantáneo',
		'mod-menu': 'Controles en partida',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Lista de compra',
		'aimbot-hack': 'Asistencia soft aim',
		'esp-hack': 'Cajas y carcasses',
		'unlock-all': 'Qué significa',
	},
	fr: {
		'dbd-esp': 'Boîtes joueur et wallhack',
		'dbd-aimbot': 'Contrôles soft aim',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'Guide d\'installation PC',
		updates: 'Journal Easy Anti-Cheat',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		radar: 'Radar 2D des menaces',
		eac: 'Maintenance des patchs',
		'cheats-2026': 'Guide acheteur',
		hacks: 'Guide ESP et Aimbot',
		'cheat-download': 'Accès instantané',
		'mod-menu': 'Contrôles en jeu',
		'soft-aim': 'Réglages soft aim',
		'best-cheats': 'Checklist acheteur',
		'aimbot-hack': 'Assistance soft aim',
		'esp-hack': 'Boîtes et carcasses',
		'unlock-all': 'Ce que ça signifie',
	},
	de: {
		'dbd-esp': 'Spielerboxen & Wallhack',
		'dbd-aimbot': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'Easy Anti-Cheat Wartungslog',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: 'Undetected Status',
		wallhack: 'ESP Sichtbarkeit',
		radar: '2D Bedrohungsradar',
		eac: 'Patch-Wartung',
		'cheats-2026': 'Käuferleitfaden',
		hacks: 'ESP Aimbot Guide',
		'cheat-download': 'Sofortzugang',
		'mod-menu': 'In-Game Toggles',
		'soft-aim': 'Soft-Aim Einstellungen',
		'best-cheats': 'Käufer-Checkliste',
		'aimbot-hack': 'Soft-Aim Assist',
		'esp-hack': 'Boxen & Loot',
		'unlock-all': 'Was es bedeutet',
	},
	pt: {
		'dbd-esp': 'Caixas de jogador e wallhack',
		'dbd-aimbot': 'Controles soft aim',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		radar: 'Radar 2D de ameaças',
		eac: 'Manutenção de patches',
		'cheats-2026': 'Guia do comprador',
		hacks: 'Guia ESP e Aimbot',
		'cheat-download': 'Acesso instantâneo',
		'mod-menu': 'Controles in-game',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Checklist do comprador',
		'aimbot-hack': 'Assistência soft aim',
		'esp-hack': 'Caixas e carcasses',
		'unlock-all': 'O que significa',
	},
	it: {
		'dbd-esp': 'Box giocatore e wallhack',
		'dbd-aimbot': 'Controlli soft aim',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione Easy Anti-Cheat',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		radar: 'Radar 2D minacce',
		eac: 'Manutenzione patch',
		'cheats-2026': 'Guida acquirente',
		hacks: 'Guida ESP e Aimbot',
		'cheat-download': 'Accesso istantaneo',
		'mod-menu': 'Toggle in-game',
		'soft-aim': 'Impostazioni soft aim',
		'best-cheats': 'Checklist acquirente',
		'aimbot-hack': 'Assist soft aim',
		'esp-hack': 'Box e carcasses',
		'unlock-all': 'Cosa significa',
	},
	ru: {
		'dbd-esp': 'Боксы игроков и wallhack',
		'dbd-aimbot': 'Управление soft aim',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал Easy Anti-Cheat',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус undetected',
		wallhack: 'Видимость ESP',
		radar: '2D радар угроз',
		eac: 'Обслуживание патчей',
		'cheats-2026': 'Гайд покупателя',
		hacks: 'Гайд ESP и Aimbot',
		'cheat-download': 'Мгновенный доступ',
		'mod-menu': 'Игровые переключатели',
		'soft-aim': 'Настройки soft aim',
		'best-cheats': 'Чеклист покупателя',
		'aimbot-hack': 'Soft aim ассист',
		'esp-hack': 'Боксы и лут',
		'unlock-all': 'Что это значит',
	},
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'The DBD Cheats', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	const focus = FOCUS_I18N[locale]?.[pageKey] ?? meta.focus;
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? meta.suffix;
	const titleBase = `${topicName} | ${suffix}`;
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(`${topicName}: ${focus}. ${p.delivery}. ${p.undetected} — ${p.win}.`),
		),
		h1: topicName,
		intro: p.s1(`${topicName}.`),
		imageAlt: PAGE_IMAGE_ALTS[pageKey] || `${topicName} — The DBD Cheats screenshot`,
		galleryTitle: topicName,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(topicName, p.s1(`${focus}.`), p.s2()),
			section(`${p.undetected}`, p.s3(), p.s2()),
			section(p.delivery, p.s2(), p.legal()),
		],
	};
}

const TOPIC_NAMES = {
	'dbd-esp': { en: 'DBD ESP', es: 'ESP Dead by Daylight', fr: 'ESP Dead by Daylight', de: 'DBD ESP', pt: 'ESP Dead by Daylight', it: 'ESP Dead by Daylight', nl: 'DBD ESP', pl: 'ESP Dead by Daylight', ru: 'ESP Dead by Daylight', tr: 'DBD ESP', ar: 'ESP Dead by Daylight', ja: 'DBD ESP', ko: 'DBD ESP', zh: 'DBD ESP', hi: 'DBD ESP', id: 'ESP Dead by Daylight', th: 'DBD ESP', vi: 'ESP Dead by Daylight', uk: 'ESP Dead by Daylight', cs: 'DBD ESP', ro: 'ESP Dead by Daylight', sv: 'DBD ESP' },
	'dbd-aimbot': { en: 'DBD Aimbot', es: 'Aimbot Dead by Daylight', fr: 'Aimbot Dead by Daylight', de: 'DBD Aimbot', pt: 'Aimbot Dead by Daylight', it: 'Aimbot Dead by Daylight', nl: 'DBD Aimbot', pl: 'Aimbot Dead by Daylight', ru: 'Aimbot Dead by Daylight', tr: 'DBD Aimbot', ar: 'Aimbot Dead by Daylight', ja: 'DBD Aimbot', ko: 'DBD Aimbot', zh: 'DBD Aimbot', hi: 'DBD Aimbot', id: 'Aimbot Dead by Daylight', th: 'DBD Aimbot', vi: 'Aimbot Dead by Daylight', uk: 'Aimbot Dead by Daylight', cs: 'DBD Aimbot', ro: 'Aimbot Dead by Daylight', sv: 'DBD Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Dead by Daylight Wallhack', es: 'Dead by Daylight Wallhack', fr: 'Dead by Daylight Wallhack', de: 'Dead by Daylight Wallhack', pt: 'Dead by Daylight Wallhack', it: 'Dead by Daylight Wallhack', nl: 'Dead by Daylight Wallhack', pl: 'Dead by Daylight Wallhack', ru: 'Dead by Daylight Wallhack', tr: 'Dead by Daylight Wallhack', ar: 'Dead by Daylight Wallhack', ja: 'Dead by Daylight Wallhack', ko: 'Dead by Daylight Wallhack', zh: 'Dead by Daylight Wallhack', hi: 'Dead by Daylight Wallhack', id: 'Dead by Daylight Wallhack', th: 'Dead by Daylight Wallhack', vi: 'Dead by Daylight Wallhack', uk: 'Dead by Daylight Wallhack', cs: 'Dead by Daylight Wallhack', ro: 'Dead by Daylight Wallhack', sv: 'Dead by Daylight Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	eac: { en: 'Easy Anti-Cheat Bypass', es: 'Bypass Easy Anti-Cheat', fr: 'Bypass Easy Anti-Cheat', de: 'Easy Anti-Cheat Bypass', pt: 'Bypass Easy Anti-Cheat', it: 'Bypass Easy Anti-Cheat', nl: 'Easy Anti-Cheat Bypass', pl: 'Bypass Easy Anti-Cheat', ru: 'Bypass Easy Anti-Cheat', tr: 'Easy Anti-Cheat bypass', ar: 'Bypass Easy Anti-Cheat', ja: 'Easy Anti-Cheat Bypass', ko: 'Easy Anti-Cheat Bypass', zh: 'Easy Anti-Cheat Bypass', hi: 'Easy Anti-Cheat Bypass', id: 'Bypass Easy Anti-Cheat', th: 'Easy Anti-Cheat Bypass', vi: 'Bypass Easy Anti-Cheat', uk: 'Bypass Easy Anti-Cheat', cs: 'Easy Anti-Cheat Bypass', ro: 'Bypass Easy Anti-Cheat', sv: 'Easy Anti-Cheat Bypass' },
	'cheats-2026': { en: 'The DBD Cheats 2026', es: 'Trucos Dead by Daylight 2026', fr: 'Triches Dead by Daylight 2026', de: 'The DBD Cheats 2026', pt: 'Cheats Dead by Daylight 2026', it: 'Cheat Dead by Daylight 2026', nl: 'The DBD Cheats 2026', pl: 'Cheaty Dead by Daylight 2026', ru: 'Читы Dead by Daylight 2026', tr: 'Dead by Daylight Hileleri 2026', ar: 'غش Dead by Daylight 2026', ja: 'The DBD Cheats 2026', ko: 'The DBD Cheats 2026', zh: 'Dead by Daylight作弊 2026', hi: 'The DBD Cheats 2026', id: 'Cheat Dead by Daylight 2026', th: 'The DBD Cheats 2026', vi: 'Cheat Dead by Daylight 2026', uk: 'Чіти Dead by Daylight 2026', cs: 'dbd cheaty 2026', ro: 'Cheats Dead by Daylight 2026', sv: 'The DBD Cheats 2026' },
	hacks: { en: 'The DBD Cheats', es: 'Trucos Dead by Daylight', fr: 'Triches Dead by Daylight', de: 'The DBD Cheats', pt: 'Cheats Dead by Daylight', it: 'Cheat Dead by Daylight', nl: 'The DBD Cheats', pl: 'Cheaty Dead by Daylight', ru: 'Читы Dead by Daylight', tr: 'Dead by Daylight Hileleri', ar: 'غش Dead by Daylight', ja: 'The DBD Cheats', ko: 'The DBD Cheats', zh: 'Dead by Daylight作弊', hi: 'The DBD Cheats', id: 'Cheat Dead by Daylight', th: 'The DBD Cheats', vi: 'Cheat Dead by Daylight', uk: 'Чіти Dead by Daylight', cs: 'dbd cheaty', ro: 'Cheats Dead by Daylight', sv: 'The DBD Cheats' },
	'cheat-download': { en: 'Dead by Daylight Cheat Download', es: 'Descarga The DBD Cheats', fr: 'Téléchargement The DBD Cheats', de: 'Dead by Daylight Cheat Download', pt: 'Download The DBD Cheats', it: 'Download The DBD Cheats', nl: 'Dead by Daylight Cheat Download', pl: 'Pobieranie The DBD Cheats', ru: 'Скачать The DBD Cheats', tr: 'Dead by Daylight Hile İndir', ar: 'تحميل The DBD Cheats', ja: 'Dead by Daylight Cheat Download', ko: 'Dead by Daylight Cheat Download', zh: 'Dead by Daylight作弊下载', hi: 'Dead by Daylight Cheat Download', id: 'Download Cheat Dead by Daylight', th: 'ดาวน์โหลด The DBD Cheats', vi: 'Tải Cheat Dead by Daylight', uk: 'Завантаження The DBD Cheats', cs: 'Stáhnout The DBD Cheats', ro: 'Descărcare The DBD Cheats', sv: 'Dead by Daylight Cheat Download' },
	'mod-menu': { en: 'Dead by Daylight Mod Menu', es: 'Menú mod Dead by Daylight', fr: 'Menu mod Dead by Daylight', de: 'Dead by Daylight Mod-Menü', pt: 'Menu mod Dead by Daylight', it: 'Mod menu Dead by Daylight', nl: 'Dead by Daylight Mod Menu', pl: 'Mod menu Dead by Daylight', ru: 'Мод-меню Dead by Daylight', tr: 'Dead by Daylight Mod Menü', ar: 'قائمة مود Dead by Daylight', ja: 'Dead by Daylight Mod Menu', ko: 'Dead by Daylight 모드 메뉴', zh: 'Dead by Daylight修改菜单', hi: 'Dead by Daylight Mod Menu', id: 'Menu mod Dead by Daylight', th: 'เมนูมอด Dead by Daylight', vi: 'Mod menu Dead by Daylight', uk: 'Мод-меню Dead by Daylight', cs: 'Dead by Daylight mod menu', ro: 'Meniu mod Dead by Daylight', sv: 'Dead by Daylight Mod-meny' },
	'soft-aim': { en: 'Dead by Daylight Soft Aim', es: 'Soft aim Dead by Daylight', fr: 'Soft aim Dead by Daylight', de: 'Dead by Daylight Soft Aim', pt: 'Soft aim Dead by Daylight', it: 'Soft aim Dead by Daylight', nl: 'Dead by Daylight Soft Aim', pl: 'Soft aim Dead by Daylight', ru: 'Soft aim Dead by Daylight', tr: 'Dead by Daylight Soft Aim', ar: 'Soft aim Dead by Daylight', ja: 'Dead by Daylight Soft Aim', ko: 'Dead by Daylight Soft Aim', zh: 'Dead by Daylight Soft Aim', hi: 'Dead by Daylight Soft Aim', id: 'Soft aim Dead by Daylight', th: 'Dead by Daylight Soft Aim', vi: 'Soft aim Dead by Daylight', uk: 'Soft aim Dead by Daylight', cs: 'Dead by Daylight Soft Aim', ro: 'Soft aim Dead by Daylight', sv: 'Dead by Daylight Soft Aim' },
	'best-cheats': { en: 'Best The DBD Cheats', es: 'Mejores trucos Dead by Daylight', fr: 'Meilleures triches Dead by Daylight', de: 'Beste The DBD Cheats', pt: 'Melhores cheats Dead by Daylight', it: 'Migliori cheat Dead by Daylight', nl: 'Beste The DBD Cheats', pl: 'Najlepsze cheaty Dead by Daylight', ru: 'Лучшие читы Dead by Daylight', tr: 'En İyi Dead by Daylight Hileleri', ar: 'أفضل غش Dead by Daylight', ja: '最強Dead by Daylightチート', ko: '최고의 Dead by Daylight 치트', zh: '最佳Dead by Daylight作弊', hi: 'सर्वश्रेष्ठ The DBD Cheats', id: 'Cheat Dead by Daylight terbaik', th: 'Cheat Dead by Daylight ที่ดีที่สุด', vi: 'Cheat Dead by Daylight tốt nhất', uk: 'Найкращі чіти Dead by Daylight', cs: 'Nejlepší dbd cheaty', ro: 'Cele mai bune cheats Dead by Daylight', sv: 'Bästa The DBD Cheats' },
	'aimbot-hack': { en: 'DBD Aimbot Hack', es: 'Hack aimbot Dead by Daylight', fr: 'Hack aimbot Dead by Daylight', de: 'DBD Aimbot Hack', pt: 'Hack aimbot Dead by Daylight', it: 'Hack aimbot Dead by Daylight', nl: 'DBD Aimbot Hack', pl: 'Hack aimbot Dead by Daylight', ru: 'Хак aimbot Dead by Daylight', tr: 'DBD Aimbot Hilesi', ar: 'هاك Aimbot Dead by Daylight', ja: 'DBD Aimbot Hack', ko: 'Dead by Daylight 에임봇 핵', zh: 'Dead by Daylight自瞄外挂', hi: 'DBD Aimbot Hack', id: 'Hack aimbot Dead by Daylight', th: 'Hack Aimbot Dead by Daylight', vi: 'Hack aimbot Dead by Daylight', uk: 'Хак aimbot Dead by Daylight', cs: 'DBD Aimbot hack', ro: 'Hack aimbot Dead by Daylight', sv: 'DBD Aimbot Hack' },
	'esp-hack': { en: 'DBD ESP Hack', es: 'Hack ESP Dead by Daylight', fr: 'Hack ESP Dead by Daylight', de: 'DBD ESP Hack', pt: 'Hack ESP Dead by Daylight', it: 'Hack ESP Dead by Daylight', nl: 'DBD ESP Hack', pl: 'Hack ESP Dead by Daylight', ru: 'Хак ESP Dead by Daylight', tr: 'DBD ESP Hilesi', ar: 'هاك ESP Dead by Daylight', ja: 'DBD ESP Hack', ko: 'DBD ESP 핵', zh: 'DBD ESP外挂', hi: 'DBD ESP Hack', id: 'Hack ESP Dead by Daylight', th: 'Hack ESP Dead by Daylight', vi: 'Hack ESP Dead by Daylight', uk: 'Хак ESP Dead by Daylight', cs: 'DBD ESP hack', ro: 'Hack ESP Dead by Daylight', sv: 'DBD ESP Hack' },
	'unlock-all': { en: 'Dead by Daylight Unlock All', es: 'Unlock all Dead by Daylight', fr: 'Unlock all Dead by Daylight', de: 'Dead by Daylight Unlock All', pt: 'Unlock all Dead by Daylight', it: 'Unlock all Dead by Daylight', nl: 'Dead by Daylight Unlock All', pl: 'Unlock all Dead by Daylight', ru: 'Unlock all Dead by Daylight', tr: 'Dead by Daylight Unlock All', ar: 'Unlock all Dead by Daylight', ja: 'Dead by Daylight Unlock All', ko: 'Dead by Daylight Unlock All', zh: 'Dead by Daylight Unlock All', hi: 'Dead by Daylight Unlock All', id: 'Unlock all Dead by Daylight', th: 'Dead by Daylight Unlock All', vi: 'Unlock all Dead by Daylight', uk: 'Unlock all Dead by Daylight', cs: 'Dead by Daylight Unlock All', ro: 'Unlock all Dead by Daylight', sv: 'Dead by Daylight Unlock All' },
};

const CTA2_HREF = {
	'dbd-esp': '/dbd-hacks/',
	'dbd-aimbot': '/dbd-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/dbd-hacks/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/dbd-hacks/',
	wallhack: '/dbd-esp/',
	radar: '/dbd-esp/',
	eac: '/updates/',
	'cheats-2026': '/dbd-hacks/',
	hacks: '/features/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/dbd-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/dbd-aimbot/',
	'esp-hack': '/dbd-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	const L = LEGAL_I18N[locale];
	const pageCopy = L?.[kind] ?? {};
	const h2 = pageCopy.h2 ?? ['Information we collect', 'How we use data', 'Your rights'];
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | The DBD Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} ${L?.descFor ?? 'for The DBD Cheats — ESP wallhack, Aimbot'}, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} ${L?.introTopic ?? 'for dbdcheats.org and Dead by Daylight licenses.'}`),
		imageAlt: 'The DBD Cheats',
		galleryTitle: 'The DBD Cheats',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: L?.emailSupport ?? 'Email support',
		ctaSecondary:
			kind === 'privacy'
				? L?.readTerms ?? 'Read terms'
				: L?.readPrivacy ?? 'Read privacy',
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				h2[0],
				p.s1(L?.sec1p1 ?? 'Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy'
					? L?.privacy?.sec1p2 ?? 'Payment details are processed by Zadeyo checkout — not stored on dbdcheats.org.'
					: p.s2(),
			),
			section(
				h2[1],
				p.s1(L?.privacy?.sec2p1 ?? 'Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms'
					? L?.terms?.sec2p2 ?? 'Using cheats may violate Behaviour Interactive terms — you assume all ban risk.'
					: p.s3(),
			),
			section(h2[2], p.legal(), `${L?.emailLabel ?? 'Email:'} support@dbdcheats.org`),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
