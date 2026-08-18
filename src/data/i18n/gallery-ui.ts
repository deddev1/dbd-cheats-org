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
		eyebrow: 'dbd cheats',
		title: 'dbd cheats gallery',
		subtitle: 'Simple dbd cheats visuals — ESP, wallhack, aimbot, and radar for Dead by Daylight on PC.',
		lead: 'The DBD Cheats helps you spot survivors, killers, carcasses, and generators with ESP, aimbot, and radar in one license.',
		highlights: [
			{ title: 'dbd cheats esp', copy: 'See players through walls with dbd cheats esp and wallhack overlays.' },
			{ title: 'dbd cheats radar', copy: 'Track nearby threats with dbd cheats radar before you push or extract.' },
			{ title: 'dbd cheats aimbot', copy: 'Use soft aim and aimbot controls tuned for Dead by Daylight trials on Windows PC.' },
		],
		updatesLabel: 'dbd cheats updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'The DBD Cheats',
		title: 'Galería Dead by Daylight',
		subtitle: 'Visuales de Dead by Daylight con loadouts, peleas de escuadrón y combate trial — junto a herramientas ESP, radar y Aimbot.',
		lead: 'The DBD Cheats está pensado para el loop BR de Dead by Daylight: leer el mapa, rastrear escuadrones enemigos, carcassesear y sobrevivir al extract.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de escuadrón en MacMillan Estate y chase para elegir peleas con mejor información.' },
			{ title: 'Marcadores de carcasses y cofres', copy: 'Resalta loadouts, cofres y carcasses de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot Dead by Daylight', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones The DBD Cheats',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'The DBD Cheats',
		title: 'Galerie Dead by Daylight',
		subtitle: 'Visuels Dead by Daylight — loadouts, combats d\'escouade et trial — avec ESP, radar et Aimbot.',
		lead: 'The DBD Cheats suit la boucle BR de Dead by Daylight : lire la carte, suivre les escouades, carcasses et survivre au extract.',
		highlights: [
			{ title: 'ESP players & escouades', copy: 'Repérez les players ennemis sur MacMillan Estate et chase pour choisir vos engagements.' },
			{ title: 'Marqueurs carcasses & coffres', copy: 'Mettez en évidence loadouts, coffres et carcasses haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot Dead by Daylight', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour The DBD Cheats',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'The DBD Cheats',
		title: 'Dead by Daylight Galerie',
		subtitle: 'Dead by Daylight-Bilder zu Loadouts, Squad-Kämpfen und trial — mit ESP, Radar und Aimbot.',
		lead: 'The DBD Cheats passt zur Raid-Schleife von Dead by Daylight: Karte lesen, Gegner-Trupps tracken, jagen und Nester überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf MacMillan Estate und chase für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'The DBD Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'The DBD Cheats Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'The DBD Cheats',
		title: 'Galeria Dead by Daylight',
		subtitle: 'Visuais de Dead by Daylight com loadouts, combates de epackrão e trial — com ESP, radar e Aimbot.',
		lead: 'The DBD Cheats segue o loop BR do Dead by Daylight: ler o mapa, rastrear epackrões, carcassesar e sobreviver ao extract.',
		highlights: [
			{ title: 'ESP de players e epackrões', copy: 'Detecte players inimigos em MacMillan Estate e chase para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de carcasses e cofres', copy: 'Destaque loadouts, cofres e carcasses de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot Dead by Daylight', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações The DBD Cheats',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'The DBD Cheats',
		title: 'Galleria Dead by Daylight',
		subtitle: 'Immagini Dead by Daylight — loadout, scontri di packra e trial — con ESP, radar e Aimbot.',
		lead: 'The DBD Cheats è pensato per il loop BR di Dead by Daylight: leggere la mappa, tracciare packre nemiche, carcasses e sopravvivere al extract.',
		highlights: [
			{ title: 'ESP playeri e packre', copy: 'Individua playeri nemici su MacMillan Estate e chase per scegliere i fight con più intel.' },
			{ title: 'Marker carcasses e coffreti', copy: 'Evidenzia loadout, coffreti e carcasses di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot Dead by Daylight', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti The DBD Cheats',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'The DBD Cheats',
		title: 'Dead by Daylight galerij',
		subtitle: 'Dead by Daylight-beelden van loadouts, packgevechten en trial — met ESP, radar en Aimbot.',
		lead: 'The DBD Cheats volgt de trial-loop va Dead by Daylight: kaart lezen, vijandelijke packs volgen, jagen en hook zones overleven.',
		highlights: [
			{ title: 'Player- & pack-ESP', copy: 'Spot vijandelijke players op MacMillan Estate en chase voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier carcasses zonder schermoverlast.' },
			{ title: 'The DBD Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'The DBD Cheats updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'The DBD Cheats',
		title: 'Galeria Dead by Daylight',
		subtitle: 'Grafiki Dead by Daylight — loadouty, walki drużynowe i trial — z ESP, radar i Aimbot.',
		lead: 'The DBD Cheats pasuje do pętli BR Dead by Daylight: czytaj mapę, śledź wrogie drużyny, carcassesuj i przeżyj extract.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na MacMillan Estate i chase dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery carcassesu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy carcasses bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot Dead by Daylight', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje The DBD Cheats',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'The DBD Cheats',
		title: 'Галерея Dead by Daylight',
		subtitle: 'Визуалы Dead by Daylight — лоадауты, бои отрядов и trial — с ESP, радаром и Aimbot.',
		lead: 'The DBD Cheats создан для рейд-циклу Dead by Daylight: читать карту, отслеживать вражеские отряды, лут и выживать в extract.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на MacMillan Estate и chase для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot Dead by Daylight', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления The DBD Cheats',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'The DBD Cheats',
		title: 'Dead by Daylight galerisi',
		subtitle: 'Loadout, takım savaşları ve trial görselleri — ESP, radar ve Aimbot ile.',
		lead: 'The DBD Cheats, Dead by Daylight BR döngüsü için: haritayı oku, düşman takımları izle, carcasses al ve extract\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'MacMillan Estate ve chase\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye carcasses\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'The DBD Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'The DBD Cheats güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'The DBD Cheats',
		title: 'معرض Dead by Daylight',
		subtitle: 'صور Dead by Daylight — loadouts ومعارك الفرق وtrial — مع ESP ورادار وAimbot.',
		lead: 'The DBD Cheats مبني لحلقة BR في Dead by Daylight: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في extract.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على MacMillan Estate وchase لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot Dead by Daylight', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات The DBD Cheats',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'The DBD Cheats',
		title: 'Dead by Daylight ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのDead by Daylightビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'The DBD CheatsはDead by DaylightのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてextractを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'MacMillan Estateとchaseで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'Dead by Daylightエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'The DBD Cheats更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'The DBD Cheats',
		title: 'Dead by Daylight 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 Dead by Daylight 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'The DBD Cheats는 Dead by Daylight survival loop용: 맵 읽기, 적 스쿼드 추적, 루트 수집, extract 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: 'MacMillan Estate와 chase에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'Dead by Daylight 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'The DBD Cheats 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'The DBD Cheats',
		title: 'Dead by Daylight 图库',
		subtitle: 'Dead by Daylight 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'The DBD Cheats 为 Dead by Daylight survival loop设计：读图、追踪敌方小队、搜刮并在 nest survival。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 MacMillan Estate 和 chase 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'Dead by Daylight 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'The DBD Cheats 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'The DBD Cheats',
		title: 'Dead by Daylight गैलरी',
		subtitle: 'Loadout, pack fights और trial visuals — ESP, radar और Aimbot के साथ।',
		lead: 'The DBD Cheats Dead by Daylight survival loop के लिए: map पढ़ें, enemy packs track करें, carcasses करें और nest survival करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'MacMillan Estate और chase पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier carcasses highlight करें screen clutter के बिना।' },
			{ title: 'The DBD Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'The DBD Cheats updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'The DBD Cheats',
		title: 'Galeri Dead by Daylight',
		subtitle: 'Visual Dead by Daylight — loadout, pertempuran pack, dan trial — dengan ESP, radar, dan Aimbot.',
		lead: 'The DBD Cheats untuk loop BR Dead by Daylight: baca peta, lacak pack musuh, carcasses, dan selamat di extract.',
		highlights: [
			{ title: 'ESP player & pack', copy: 'Deteksi player musuh di MacMillan Estate dan chase untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker carcasses & peti', copy: 'Sorot loadout, peti, dan carcasses tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot Dead by Daylight', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update The DBD Cheats',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'The DBD Cheats',
		title: 'แกลเลอรี Dead by Daylight',
		subtitle: 'ภาพ Dead by Daylight — loadout การต่อสู้ทีม และ trial — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'The DBD Cheats สำหรับลูป BR ของ Dead by Daylight: อ่านแผนที่ ติดตามทีมศัตรู เก็บ carcasses และรอด extract',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน MacMillan Estate และ chase เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ carcasses และหีบ', copy: 'เน้น loadout หีบและ carcasses ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot Dead by Daylight', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต The DBD Cheats',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'The DBD Cheats',
		title: 'Thư viện Dead by Daylight',
		subtitle: 'Hình ảnh Dead by Daylight — loadout, chiến đấu pack và trial — với ESP, radar và Aimbot.',
		lead: 'The DBD Cheats cho vòng BR Dead by Daylight: đọc bản đồ, theo dõi pack địch, carcasses và sống sót extract.',
		highlights: [
			{ title: 'ESP player & pack', copy: 'Phát hiện player địch trên MacMillan Estate và chase để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu carcasses & rương', copy: 'Làm nổi bật loadout, rương và carcasses cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot Dead by Daylight', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật The DBD Cheats',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'The DBD Cheats',
		title: 'Галерея Dead by Daylight',
		subtitle: 'Візуали Dead by Daylight — loadout, бої загонів і trial — з ESP, радаром і Aimbot.',
		lead: 'The DBD Cheats для рейд-циклу Dead by Daylight: читати карту, відстежувати ворожі загони, лут і виживати в extract.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на MacMillan Estate і chase для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot Dead by Daylight', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення The DBD Cheats',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'The DBD Cheats',
		title: 'Galerie Dead by Daylight',
		subtitle: 'Dead by Daylight vizuály — loadouty, pack souboje a trial — s ESP, radarem a Aimbot.',
		lead: 'The DBD Cheats pro BR smyčku Dead by Daylight: číst mapu, sledovat nepřátelské packy, carcasses a přežít extract.',
		highlights: [
			{ title: 'ESP players a packů', copy: 'Spozorujte nepřátelské operátory na MacMillan Estate a chase pro lepší rotační rozhodnutí.' },
			{ title: 'Markery carcassesu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier carcasses bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot Dead by Daylight', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace The DBD Cheats',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'The DBD Cheats',
		title: 'Galerie Dead by Daylight',
		subtitle: 'Vizualuri Dead by Daylight — loadout, lupte de pack și trial — cu ESP, radar și Aimbot.',
		lead: 'The DBD Cheats pentru bucla BR Dead by Daylight: citește harta, urmărește pack-uri inamice, carcasses și supraviețuiește extract.',
		highlights: [
			{ title: 'ESP playeri și pack-uri', copy: 'Detectează playeri inamici pe MacMillan Estate și chase pentru decizii de rotație mai bune.' },
			{ title: 'Markere carcasses și cheste', copy: 'Evidențiază loadout-uri, cheste și carcasses de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot Dead by Daylight', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări The DBD Cheats',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'The DBD Cheats',
		title: 'Dead by Daylight galleri',
		subtitle: 'Dead by Daylight-bilder — loadouts, packstrider och trial — med ESP, radar och Aimbot.',
		lead: 'The DBD Cheats för Dead by Daylight:s trial-loop: läs kartan, spåra fiendepacks, carcassesa och överlev extract.',
		highlights: [
			{ title: 'Player- & pack-ESP', copy: 'Spotta fiendeplayerer på MacMillan Estate och chase för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier carcasses utan skärmklutter.' },
			{ title: 'The DBD Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'The DBD Cheats uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
