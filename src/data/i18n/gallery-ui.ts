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

const espHighlight = {
	title: 'dbd cheats esp',
	copy: 'See survivors and killers through walls with dbd cheats esp and wallhack overlays.',
};

const radarHighlight = {
	title: 'dbd cheats radar',
	copy: 'Track nearby killers with dbd cheats radar before you rotate or repair generators.',
};

const aimbotHighlight = {
	title: 'dbd cheats aimbot',
	copy: 'Use soft aim and aimbot controls tuned for Dead by Daylight killer and survivor chases on Windows PC.',
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'dbd cheats',
		title: 'dbd cheats gallery',
		subtitle: 'Simple dbd cheats visuals — ESP, wallhack, aimbot, and radar for Dead by Daylight on PC.',
		lead: 'DBD Cheats helps you spot survivors, killers, generators, and hooks with ESP, aimbot, and radar in one license.',
		highlights: [espHighlight, radarHighlight, aimbotHighlight],
		updatesLabel: 'dbd cheats updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'dbd cheats',
		title: 'Galería dbd cheats',
		subtitle: 'Visuales de dbd cheats — ESP, wallhack, aimbot y radar para Dead by Daylight en PC.',
		lead: 'DBD Cheats te ayuda a ver supervivientes, killers, generators y hooks con ESP, aimbot y radar en una licencia.',
		highlights: [
			{ title: 'dbd cheats esp', copy: 'Ve supervivientes y killers a través de paredes con ESP y wallhack de dbd cheats.' },
			{ title: 'dbd cheats radar', copy: 'Rastrea killers cercanos con el radar de dbd cheats antes de rotar o reparar generators.' },
			{ title: 'dbd cheats aimbot', copy: 'Usa soft aim y aimbot ajustados para chases de killer y superviviente en Dead by Daylight.' },
		],
		updatesLabel: 'Actualizaciones dbd cheats',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'dbd cheats',
		title: 'Galerie dbd cheats',
		subtitle: 'Visuels dbd cheats — ESP, wallhack, aimbot et radar pour Dead by Daylight sur PC.',
		lead: 'DBD Cheats vous aide à repérer survivants, killers, generators et hooks avec ESP, aimbot et radar dans une licence.',
		highlights: [
			{ title: 'dbd cheats esp', copy: 'Voyez survivants et killers à travers les murs avec ESP et wallhack dbd cheats.' },
			{ title: 'dbd cheats radar', copy: 'Suivez les killers proches avec le radar dbd cheats avant de rotate ou réparer des generators.' },
			{ title: 'dbd cheats aimbot', copy: 'Soft aim et aimbot réglés pour les chases killer et survivant dans Dead by Daylight.' },
		],
		updatesLabel: 'Mises à jour dbd cheats',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'dbd cheats',
		title: 'DBD Cheats Galerie',
		subtitle: 'DBD Cheats Bilder — ESP, Wallhack, Aimbot und Radar für Dead by Daylight auf PC.',
		lead: 'DBD Cheats hilft dir, Survivors, Killer, Generators und Hooks mit ESP, Aimbot und Radar in einer Lizenz zu sehen.',
		highlights: [
			{ title: 'dbd cheats esp', copy: 'Survivors und Killer durch Wände sehen mit DBD Cheats ESP und Wallhack.' },
			{ title: 'dbd cheats radar', copy: 'Nahe Killer mit DBD Cheats Radar tracken, bevor du rotierst oder Generators reparierst.' },
			{ title: 'dbd cheats aimbot', copy: 'Soft Aim und Aimbot für Killer- und Survivor-Chases in Dead by Daylight auf Windows PC.' },
		],
		updatesLabel: 'DBD Cheats Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'dbd cheats',
		title: 'Galeria dbd cheats',
		subtitle: 'Visuais dbd cheats — ESP, wallhack, aimbot e radar para Dead by Daylight no PC.',
		lead: 'DBD Cheats ajuda a ver sobreviventes, killers, generators e hooks com ESP, aimbot e radar numa licença.',
		highlights: [
			{ title: 'dbd cheats esp', copy: 'Veja sobreviventes e killers através de paredes com ESP e wallhack dbd cheats.' },
			{ title: 'dbd cheats radar', copy: 'Rastreie killers próximos com radar dbd cheats antes de rotacionar ou reparar generators.' },
			{ title: 'dbd cheats aimbot', copy: 'Soft aim e aimbot ajustados para chases de killer e sobrevivente em Dead by Daylight.' },
		],
		updatesLabel: 'Atualizações dbd cheats',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'dbd cheats',
		title: 'Galleria dbd cheats',
		subtitle: 'Immagini dbd cheats — ESP, wallhack, aimbot e radar per Dead by Daylight su PC.',
		lead: 'DBD Cheats ti aiuta a vedere survivor, killer, generator e hook con ESP, aimbot e radar in una licenza.',
		highlights: [
			{ title: 'dbd cheats esp', copy: 'Vedi survivor e killer attraverso i muri con ESP e wallhack dbd cheats.' },
			{ title: 'dbd cheats radar', copy: 'Traccia killer vicini con radar dbd cheats prima di ruotare o riparare generator.' },
			{ title: 'dbd cheats aimbot', copy: 'Soft aim e aimbot per chase killer e survivor in Dead by Daylight su Windows PC.' },
		],
		updatesLabel: 'Aggiornamenti dbd cheats',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'dbd cheats',
		title: 'dbd cheats galerij',
		subtitle: 'DBD cheats visuals — ESP, wallhack, aimbot en radar voor Dead by Daylight op PC.',
		lead: 'DBD Cheats helpt survivors, killers, generators en hooks te spotten met ESP, aimbot en radar in één licentie.',
		highlights: [
			{ title: 'dbd cheats esp', copy: 'Zie survivors en killers door muren met dbd cheats ESP en wallhack.' },
			{ title: 'dbd cheats radar', copy: 'Volg nabije killers met dbd cheats radar voordat je roteert of generators repareert.' },
			{ title: 'dbd cheats aimbot', copy: 'Soft aim en aimbot afgestemd op killer- en survivor-chases in Dead by Daylight.' },
		],
		updatesLabel: 'dbd cheats updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'dbd cheats',
		title: 'Galeria dbd cheats',
		subtitle: 'Wizualizacje dbd cheats — ESP, wallhack, aimbot i radar dla Dead by Daylight na PC.',
		lead: 'DBD Cheats pomaga wykrywać survivorów, killerów, generatory i haki dzięki ESP, aimbotowi i radarowi w jednej licencji.',
		highlights: [
			{ title: 'dbd cheats esp', copy: 'Widz survivorów i killerów przez ściany dzięki ESP i wallhackowi dbd cheats.' },
			{ title: 'dbd cheats radar', copy: 'Śledź pobliskich killerów radarem dbd cheats przed rotacją lub naprawą generatorów.' },
			{ title: 'dbd cheats aimbot', copy: 'Soft aim i aimbot dostosowane do chase killerów i survivorów w Dead by Daylight.' },
		],
		updatesLabel: 'Aktualizacje dbd cheats',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'dbd cheats',
		title: 'Галерея dbd cheats',
		subtitle: 'Визуалы dbd cheats — ESP, wallhack, aimbot и radar для Dead by Daylight на PC.',
		lead: 'DBD Cheats помогает видеть выживших, киллеров, генераторы и крюки через ESP, aimbot и radar в одной лицензии.',
		highlights: [
			{ title: 'dbd cheats esp', copy: 'Видьте выживших и киллеров сквозь стены с ESP и wallhack dbd cheats.' },
			{ title: 'dbd cheats radar', copy: 'Отслеживайте ближайших киллеров радаром dbd cheats перед ротацией или починкой генераторов.' },
			{ title: 'dbd cheats aimbot', copy: 'Soft aim и aimbot для chase киллера и выжившего в Dead by Daylight на Windows PC.' },
		],
		updatesLabel: 'Обновления dbd cheats',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'dbd cheats',
		title: 'dbd cheats galerisi',
		subtitle: 'DBD cheats görselleri — Dead by Daylight için ESP, wallhack, aimbot ve radar.',
		lead: 'DBD Cheats, survivor, killer, generator ve hook görmek için ESP, aimbot ve radarı tek lisansla sunar.',
		highlights: [
			{ title: 'dbd cheats esp', copy: 'DBD cheats ESP ve wallhack ile survivor ve killerları duvarların arkasından görün.' },
			{ title: 'dbd cheats radar', copy: 'Rotate veya generator onarımından önce dbd cheats radar ile yakın killerları takip edin.' },
			{ title: 'dbd cheats aimbot', copy: 'Dead by Daylight killer ve survivor chase için ayarlanmış soft aim ve aimbot.' },
		],
		updatesLabel: 'dbd cheats güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'dbd cheats',
		title: 'معرض dbd cheats',
		subtitle: 'صور dbd cheats — ESP وwallhack وaimbot وradar لـ Dead by Daylight على PC.',
		lead: 'DBD Cheats يساعدك على رؤية الناجين والقتلة والمولدات والخطافات عبر ESP وaimbot وradar في ترخيص واحد.',
		highlights: [
			{ title: 'dbd cheats esp', copy: 'شاهد الناجين والقتلة عبر الجدران باستخدام ESP وwallhack من dbd cheats.' },
			{ title: 'dbd cheats radar', copy: 'تتبع القتلة القريبين برادار dbd cheats قبل الدوران أو إصلاح المولدات.' },
			{ title: 'dbd cheats aimbot', copy: 'soft aim وaimbot مضبوطان لمطاردات القاتل والناجي في Dead by Daylight.' },
		],
		updatesLabel: 'تحديثات dbd cheats',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'dbd cheats',
		title: 'dbd cheats ギャラリー',
		subtitle: 'dbd cheatsビジュアル — Dead by Daylight向けESP、wallhack、aimbot、radar。',
		lead: 'DBD Cheatsはサバイバー、キラー、ジェネレーター、フックをESP、aimbot、radarで1ライセンスに。',
		highlights: [
			{ title: 'dbd cheats esp', copy: 'dbd cheats ESPとwallhackで壁越しにサバイバーとキラーを表示。' },
			{ title: 'dbd cheats radar', copy: 'ローテやジェネ修理前にdbd cheats radarで近くのキラーを追跡。' },
			{ title: 'dbd cheats aimbot', copy: 'Dead by Daylightのキラー・サバイバーチェイス向けsoft aimとaimbot。' },
		],
		updatesLabel: 'dbd cheats 更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'dbd cheats',
		title: 'dbd cheats 갤러리',
		subtitle: 'dbd cheats 비주얼 — Dead by Daylight용 ESP, wallhack, aimbot, radar.',
		lead: 'DBD Cheats는 ESP, aimbot, radar로 생존자, 킬러, 제너레이터, 훅을 한 라이선스에서 확인합니다.',
		highlights: [
			{ title: 'dbd cheats esp', copy: 'dbd cheats ESP와 wallhack으로 벽 너머 생존자와 킬러를 봅니다.' },
			{ title: 'dbd cheats radar', copy: '로테이션 또는 제너 수리 전 dbd cheats radar로 근처 킬러를 추적합니다.' },
			{ title: 'dbd cheats aimbot', copy: 'Dead by Daylight 킬러·생존자 체이스용 soft aim과 aimbot.' },
		],
		updatesLabel: 'dbd cheats 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'dbd cheats',
		title: 'dbd cheats 图库',
		subtitle: 'dbd cheats 视觉 — Dead by Daylight 的 ESP、wallhack、aimbot 和 radar。',
		lead: 'DBD Cheats 通过 ESP、aimbot 和 radar 在一个许可证中显示幸存者、杀手、发电机和钩子。',
		highlights: [
			{ title: 'dbd cheats esp', copy: '用 dbd cheats ESP 和 wallhack 透视幸存者和杀手。' },
			{ title: 'dbd cheats radar', copy: '转点或修机前用 dbd cheats radar 追踪附近杀手。' },
			{ title: 'dbd cheats aimbot', copy: '为 Dead by Daylight 杀手与幸存者追逐调校的 soft aim 和 aimbot。' },
		],
		updatesLabel: 'dbd cheats 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'dbd cheats',
		title: 'dbd cheats gallery',
		subtitle: 'DBD cheats visuals — Dead by Daylight के लिए ESP, wallhack, aimbot और radar.',
		lead: 'DBD Cheats survivors, killers, generators और hooks ESP, aimbot और radar के साथ एक license में दिखाता है.',
		highlights: [
			{ title: 'dbd cheats esp', copy: 'dbd cheats ESP और wallhack से दीवारों के पार survivors और killers देखें.' },
			{ title: 'dbd cheats radar', copy: 'rotate या generator repair से पहले dbd cheats radar से पास के killers track करें.' },
			{ title: 'dbd cheats aimbot', copy: 'Dead by Daylight killer और survivor chases के लिए tuned soft aim और aimbot.' },
		],
		updatesLabel: 'dbd cheats updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'dbd cheats',
		title: 'Galeri dbd cheats',
		subtitle: 'Visual dbd cheats — ESP, wallhack, aimbot, dan radar untuk Dead by Daylight di PC.',
		lead: 'DBD Cheats membantu melihat survivor, killer, generator, dan hook dengan ESP, aimbot, dan radar dalam satu lisensi.',
		highlights: [
			{ title: 'dbd cheats esp', copy: 'Lihat survivor dan killer melalui dinding dengan ESP dan wallhack dbd cheats.' },
			{ title: 'dbd cheats radar', copy: 'Lacak killer terdekat dengan radar dbd cheats sebelum rotate atau repair generator.' },
			{ title: 'dbd cheats aimbot', copy: 'Soft aim dan aimbot untuk chase killer dan survivor di Dead by Daylight.' },
		],
		updatesLabel: 'Update dbd cheats',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'dbd cheats',
		title: 'แกลเลอรี dbd cheats',
		subtitle: 'ภาพ dbd cheats — ESP wallhack aimbot และ radar สำหรับ Dead by Daylight บน PC',
		lead: 'DBD Cheats ช่วยมองเห็น survivor killer generator และ hook ด้วย ESP aimbot และ radar ในใบอนุญาตเดียว',
		highlights: [
			{ title: 'dbd cheats esp', copy: 'มอง survivor และ killer ผ่านกำแพงด้วย ESP และ wallhack ของ dbd cheats' },
			{ title: 'dbd cheats radar', copy: 'ติดตาม killer ใกล้ๆ ด้วย radar dbd cheats ก่อน rotate หรือซ่อม generator' },
			{ title: 'dbd cheats aimbot', copy: 'soft aim และ aimbot สำหรับ chase killer และ survivor ใน Dead by Daylight' },
		],
		updatesLabel: 'อัปเดต dbd cheats',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'dbd cheats',
		title: 'Thư viện dbd cheats',
		subtitle: 'Hình ảnh dbd cheats — ESP, wallhack, aimbot và radar cho Dead by Daylight trên PC.',
		lead: 'DBD Cheats giúp thấy survivor, killer, generator và hook với ESP, aimbot và radar trong một giấy phép.',
		highlights: [
			{ title: 'dbd cheats esp', copy: 'Nhìn survivor và killer xuyên tường với ESP và wallhack dbd cheats.' },
			{ title: 'dbd cheats radar', copy: 'Theo dõi killer gần bằng radar dbd cheats trước khi rotate hoặc sửa generator.' },
			{ title: 'dbd cheats aimbot', copy: 'Soft aim và aimbot cho chase killer và survivor trong Dead by Daylight.' },
		],
		updatesLabel: 'Cập nhật dbd cheats',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'dbd cheats',
		title: 'Галерея dbd cheats',
		subtitle: 'Візуали dbd cheats — ESP, wallhack, aimbot і radar для Dead by Daylight на PC.',
		lead: 'DBD Cheats допомагає бачити виживших, кілерів, генератори та гаки через ESP, aimbot і radar в одній ліцензії.',
		highlights: [
			{ title: 'dbd cheats esp', copy: 'Бачте виживших і кілерів крізь стіни з ESP і wallhack dbd cheats.' },
			{ title: 'dbd cheats radar', copy: 'Відстежуйте ближніх кілерів радаром dbd cheats перед ротацією або ремонтом генераторів.' },
			{ title: 'dbd cheats aimbot', copy: 'Soft aim і aimbot для chase кілера та вижившого в Dead by Daylight.' },
		],
		updatesLabel: 'Оновлення dbd cheats',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'dbd cheats',
		title: 'Galerie dbd cheats',
		subtitle: 'DBD cheats vizuály — ESP, wallhack, aimbot a radar pro Dead by Daylight na PC.',
		lead: 'DBD Cheats pomáhá vidět survivory, killery, generátory a háky přes ESP, aimbot a radar v jedné licenci.',
		highlights: [
			{ title: 'dbd cheats esp', copy: 'Vidět survivory a killery skrz zdi s ESP a wallhackem dbd cheats.' },
			{ title: 'dbd cheats radar', copy: 'Sledujte blízké killery radarem dbd cheats před rotací nebo opravou generátorů.' },
			{ title: 'dbd cheats aimbot', copy: 'Soft aim a aimbot pro chase killerů a survivorů v Dead by Daylight.' },
		],
		updatesLabel: 'Aktualizace dbd cheats',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'dbd cheats',
		title: 'Galerie dbd cheats',
		subtitle: 'Vizualuri dbd cheats — ESP, wallhack, aimbot și radar pentru Dead by Daylight pe PC.',
		lead: 'DBD Cheats te ajută să vezi survivorii, killerii, generatoarele și cârligele cu ESP, aimbot și radar într-o licență.',
		highlights: [
			{ title: 'dbd cheats esp', copy: 'Vezi survivorii și killerii prin pereți cu ESP și wallhack dbd cheats.' },
			{ title: 'dbd cheats radar', copy: 'Urmărește killerii apropiați cu radar dbd cheats înainte de rotate sau reparare generatoare.' },
			{ title: 'dbd cheats aimbot', copy: 'Soft aim și aimbot pentru chase killer și survivor în Dead by Daylight.' },
		],
		updatesLabel: 'Actualizări dbd cheats',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'dbd cheats',
		title: 'dbd cheats galleri',
		subtitle: 'DBD cheats-bilder — ESP, wallhack, aimbot och radar för Dead by Daylight på PC.',
		lead: 'DBD Cheats hjälper dig se survivors, killers, generators och hooks med ESP, aimbot och radar i en licens.',
		highlights: [
			{ title: 'dbd cheats esp', copy: 'Se survivors och killers genom väggar med dbd cheats ESP och wallhack.' },
			{ title: 'dbd cheats radar', copy: 'Spåra närliggande killers med dbd cheats radar innan du roterar eller reparerar generators.' },
			{ title: 'dbd cheats aimbot', copy: 'Soft aim och aimbot för killer- och survivor-chases i Dead by Daylight.' },
		],
		updatesLabel: 'dbd cheats uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
