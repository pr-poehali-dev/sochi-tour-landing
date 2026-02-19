import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/01b33954-4ed3-463a-9f67-d804eca47365/files/a794584e-58e5-41c9-b82f-a0f972b46feb.jpg";
const MOUNTAINS_IMG = "https://cdn.poehali.dev/projects/01b33954-4ed3-463a-9f67-d804eca47365/files/f43ea8f0-450f-4f4e-9942-9095fb5dbdda.jpg";
const OLYMPIC_IMG = "https://cdn.poehali.dev/projects/01b33954-4ed3-463a-9f67-d804eca47365/files/10c1104a-b7fc-4e34-9ccf-b3c1de1274ef.jpg";

const attractions = [
  {
    title: "Олимпийский парк",
    description: "Грандиозный комплекс с поющими фонтанами, трассой Формулы-1 и ледовыми дворцами",
    icon: "Trophy",
    image: OLYMPIC_IMG,
    tag: "Хит сезона",
  },
  {
    title: "Роза Хутор",
    description: "Горный курорт европейского уровня с канатными дорогами и панорамными видами",
    icon: "Mountain",
    image: MOUNTAINS_IMG,
    tag: "Горы",
  },
  {
    title: "Тисо-самшитовая роща",
    description: "Реликтовый лес с уникальными деревьями, каньонами и горными реками",
    icon: "TreePine",
    image: HERO_IMG,
    tag: "Природа",
  },
  {
    title: "Дендрарий",
    description: "Ботанический сад с экзотическими растениями со всего мира и канатной дорогой",
    icon: "Flower2",
    image: MOUNTAINS_IMG,
    tag: "Парк",
  },
  {
    title: "Скайпарк",
    description: "Экстремальный парк с самым длинным подвесным мостом в России",
    icon: "Zap",
    image: OLYMPIC_IMG,
    tag: "Экстрим",
  },
  {
    title: "Агурские водопады",
    description: "Каскад живописных водопадов в окружении горного леса и скал",
    icon: "Waves",
    image: HERO_IMG,
    tag: "Природа",
  },
];

const tours = [
  {
    title: "Обзорная экскурсия по Сочи",
    duration: "6 часов",
    price: "1 900",
    features: ["Олимпийский парк", "Набережная", "Дендрарий", "Обед включён"],
    popular: true,
  },
  {
    title: "Горный маршрут",
    duration: "8 часов",
    price: "2 500",
    features: ["Роза Хутор", "Канатная дорога", "Горная смотровая", "Трансфер"],
    popular: false,
  },
  {
    title: "Красная Поляна + водопады",
    duration: "10 часов",
    price: "3 200",
    features: ["Красная Поляна", "Агурские водопады", "Орлиные скалы", "Гид + обед"],
    popular: true,
  },
];

const reviews = [
  {
    name: "Анна К.",
    text: "Потрясающая экскурсия! Гид очень интересно рассказывал, всё было организовано на высшем уровне. Дети в восторге!",
    rating: 5,
    tour: "Обзорная по Сочи",
  },
  {
    name: "Дмитрий П.",
    text: "Горный маршрут — это что-то невероятное. Виды с Розы Хутор запомнятся на всю жизнь. Рекомендую всем!",
    rating: 5,
    tour: "Горный маршрут",
  },
  {
    name: "Елена М.",
    text: "Уже третий раз берём экскурсию в этой компании. Всегда пунктуальны, гиды знающие и доброжелательные.",
    rating: 5,
    tour: "Красная Поляна",
  },
  {
    name: "Сергей В.",
    text: "Отличное соотношение цены и качества. За один день увидели столько красоты — не пожалели ни секунды!",
    rating: 4,
    tour: "Обзорная по Сочи",
  },
];

const galleryImages = [
  { src: HERO_IMG, alt: "Побережье Сочи" },
  { src: MOUNTAINS_IMG, alt: "Горы Красной Поляны" },
  { src: OLYMPIC_IMG, alt: "Олимпийский парк" },
  { src: MOUNTAINS_IMG, alt: "Роза Хутор" },
  { src: HERO_IMG, alt: "Природа Сочи" },
  { src: OLYMPIC_IMG, alt: "Вечерний Сочи" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-hero flex items-center justify-center">
            <Icon name="Palmtree" size={20} className="text-white" />
          </div>
          <span className="font-heading font-bold text-lg">Сочи Тур</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {[
            ["#attractions", "Достопримечательности"],
            ["#tours", "Экскурсии"],
            ["#reviews", "Отзывы"],
            ["#gallery", "Галерея"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
            <Icon name="Phone" size={16} />
            Забронировать
          </Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3 animate-fade-in">
          {[
            ["#attractions", "Достопримечательности"],
            ["#tours", "Экскурсии"],
            ["#reviews", "Отзывы"],
            ["#gallery", "Галерея"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="block text-sm font-medium py-2"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <Button className="w-full bg-secondary text-secondary-foreground font-semibold">
            <Icon name="Phone" size={16} />
            Забронировать
          </Button>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Сочи"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10 px-4 py-32">
        <div className="max-w-2xl space-y-6">
          <Badge className="bg-secondary/90 text-white border-none text-sm px-4 py-1.5 animate-fade-in">
            🌴 Сезон 2026 открыт
          </Badge>

          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-heading font-black text-white leading-tight animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Откройте
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300">
              лучший Сочи
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl text-white/80 max-w-lg animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Групповые экскурсии по лучшим маршрутам. Доступные цены,
            профессиональные гиды, незабываемые впечатления.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              size="lg"
              className="bg-secondary text-white hover:bg-secondary/90 text-base px-8 py-6 font-bold shadow-lg shadow-secondary/30"
            >
              Выбрать экскурсию
              <Icon name="ArrowRight" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 text-base px-8 py-6 font-semibold"
            >
              <Icon name="Play" size={18} />
              Смотреть видео
            </Button>
          </div>

          <div
            className="flex items-center gap-8 pt-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              ["500+", "Экскурсий"],
              ["12 000+", "Туристов"],
              ["4.9 ★", "Рейтинг"],
            ].map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold text-white">{val}</div>
                <div className="text-xs text-white/60">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-10">
        <a href="#attractions" className="text-white/60 hover:text-white transition-colors">
          <Icon name="ChevronDown" size={32} />
        </a>
      </div>
    </section>
  );
}

function AttractionsSection() {
  return (
    <section id="attractions" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            <Icon name="MapPin" size={14} />
            Достопримечательности
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Места, которые
            <br />
            <span className="text-gradient">нужно увидеть</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Самые популярные и красивые локации Сочи, которые мы покажем вам на наших экскурсиях
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((item, i) => (
            <Card
              key={item.title}
              className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-white/90 text-foreground border-none font-medium">
                  {item.tag}
                </Badge>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center">
                    <Icon name={item.icon} size={20} className="text-white" />
                  </div>
                  <h3 className="text-white font-heading font-bold text-lg">
                    {item.title}
                  </h3>
                </div>
              </div>
              <CardContent className="p-5">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
                <a
                  href="#tours"
                  className="inline-flex items-center gap-1 text-primary font-medium text-sm mt-3 hover:gap-2 transition-all"
                >
                  Посмотреть экскурсии
                  <Icon name="ArrowRight" size={14} />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ToursSection() {
  return (
    <section id="tours" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-secondary border-secondary/30">
            <Icon name="Compass" size={14} />
            Экскурсии
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Выберите свой
            <br />
            <span className="text-gradient">маршрут</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Групповые экскурсии на любой вкус — от спокойных прогулок до горных приключений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tours.map((tour, i) => (
            <Card
              key={tour.title}
              className={`relative overflow-hidden border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in ${
                tour.popular
                  ? "border-primary shadow-lg shadow-primary/10"
                  : "border-border"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {tour.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Популярное
                  </div>
                </div>
              )}
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-heading font-bold text-xl mb-1">
                    {tour.title}
                  </h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Icon name="Clock" size={14} />
                    {tour.duration}
                  </div>
                </div>

                <div>
                  <span className="text-4xl font-heading font-black text-foreground">
                    {tour.price}
                  </span>
                  <span className="text-muted-foreground ml-1">₽ / чел.</span>
                </div>

                <ul className="space-y-3">
                  {tour.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" size={12} className="text-accent" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full font-semibold py-5 ${
                    tour.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  Забронировать
                  <Icon name="ArrowRight" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent/30">
            <Icon name="Star" size={14} />
            Отзывы
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Что говорят
            <br />
            <span className="text-gradient">наши туристы</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Более 12 000 довольных путешественников уже побывали на наших экскурсиях
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <Card
              key={review.name}
              className="border-none shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Icon
                      key={j}
                      name="Star"
                      size={16}
                      className={
                        j < review.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-200"
                      }
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  «{review.text}»
                </p>
                <div className="flex items-center gap-3 pt-2 border-t">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-heading font-bold text-primary text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">{review.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {review.tour}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            <Icon name="Camera" size={14} />
            Галерея
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Красота Сочи
            <br />
            <span className="text-gradient">в фотографиях</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl cursor-pointer animate-fade-in ${
                i === 0 || i === 5 ? "md:row-span-2" : ""
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                  i === 0 || i === 5 ? "h-full min-h-[300px]" : "h-60"
                }`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <Icon
                  name="Maximize2"
                  size={28}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={MOUNTAINS_IMG}
          alt="Горы Сочи"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      <div className="container mx-auto relative z-10 px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
            Готовы к приключению?
          </h2>
          <p className="text-lg text-white/80">
            Забронируйте экскурсию сейчас и получите скидку 10% на первую поездку.
            Места ограничены!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-secondary text-white hover:bg-secondary/90 px-8 py-6 text-base font-bold shadow-lg"
            >
              <Icon name="Phone" size={18} />
              Позвонить
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold"
            >
              <Icon name="MessageCircle" size={18} />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <Icon name="Palmtree" size={20} className="text-white" />
              </div>
              <span className="font-heading font-bold text-lg">Сочи Тур</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Организуем групповые экскурсии по Сочи и окрестностям с 2018 года.
              Лучшие маршруты, опытные гиды.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Экскурсии</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><a href="#tours" className="hover:text-background transition-colors">Обзорная по Сочи</a></li>
              <li><a href="#tours" className="hover:text-background transition-colors">Горный маршрут</a></li>
              <li><a href="#tours" className="hover:text-background transition-colors">Красная Поляна</a></li>
              <li><a href="#attractions" className="hover:text-background transition-colors">Достопримечательности</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={14} />
                +7 (862) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={14} />
                info@sochi-tour.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={14} />
                г. Сочи, ул. Навагинская, 12
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/40">
          <span>© 2026 Сочи Тур. Все права защищены.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-background transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-background transition-colors">Договор оферты</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AttractionsSection />
      <ToursSection />
      <ReviewsSection />
      <GallerySection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
