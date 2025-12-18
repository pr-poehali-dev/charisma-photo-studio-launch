import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: 'Портретная съёмка',
      description: 'Профессиональные портреты для личных и деловых целей',
      price: 'от 5 000 ₽',
    },
    {
      title: 'Семейная фотосессия',
      description: 'Атмосферные снимки для всей семьи',
      price: 'от 8 000 ₽',
    },
    {
      title: 'Fashion съёмка',
      description: 'Стильные образы для портфолио и каталогов',
      price: 'от 12 000 ₽',
    },
    {
      title: 'Предметная съёмка',
      description: 'Качественные фото товаров для бизнеса',
      price: 'от 3 000 ₽',
    },
    {
      title: 'Студийная аренда',
      description: 'Аренда студии с оборудованием',
      price: 'от 2 000 ₽/час',
    },
    {
      title: 'Обработка фото',
      description: 'Профессиональная ретушь и цветокоррекция',
      price: 'от 500 ₽/фото',
    },
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/projects/823b0642-5730-43f4-b958-4dc749efa1d4/files/bb6885dc-a79c-42ec-8f22-f29cde918aa5.jpg',
    'https://cdn.poehali.dev/projects/823b0642-5730-43f4-b958-4dc749efa1d4/files/41ec5995-e5dd-44a3-ba21-c50ae3714f63.jpg',
    'https://cdn.poehali.dev/projects/823b0642-5730-43f4-b958-4dc749efa1d4/files/986f9258-1210-45c9-a486-0b245ad86f74.jpg',
  ];

  const team = [
    {
      name: 'Анна Петрова',
      role: 'Главный фотограф',
      description: 'Опыт работы 10+ лет, специализация на портретной и fashion съёмке',
    },
    {
      name: 'Дмитрий Соколов',
      role: 'Фотограф',
      description: 'Эксперт по предметной и рекламной фотографии',
    },
    {
      name: 'Елена Морозова',
      role: 'Ретушёр',
      description: 'Профессиональная обработка и цветокоррекция',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">ХАРИЗМА</h1>
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              О студии
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              Портфолио
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              Команда
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              Контакты
            </button>
          </div>
          <Button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block"
          >
            Записаться
          </Button>
        </div>
      </nav>

      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-4 pt-20"
      >
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            Фотостудия<br />ХАРИЗМА
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Профессиональная фотография с душой. Создаём уникальные образы и
            сохраняем важные моменты
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" onClick={() => scrollToSection('services')}>
              Наши услуги
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('gallery')}
            >
              Портфолио
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            О студии
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              ХАРИЗМА — это новая фотостудия в самом сердце города. Мы
              создаём пространство, где каждый может раскрыть свою уникальность
              и получить профессиональные снимки высочайшего качества.
            </p>
            <p>
              Наша студия оснащена современным оборудованием и располагает
              несколькими зонами для съёмки. Мы работаем с естественным и
              студийным светом, создавая идеальные условия для любого типа
              фотосессии.
            </p>
            <p>
              Философия нашей работы — внимание к деталям и индивидуальный
              подход к каждому клиенту. Мы не просто делаем фотографии, мы
              создаём истории.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Услуги и цены
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-colors"
              >
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <p className="text-xl font-bold pt-2">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Наши работы
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden bg-muted hover:scale-105 transition-transform cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Работа ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Наша команда
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-32 h-32 rounded-full bg-secondary mx-auto flex items-center justify-center">
                  <Icon name="User" size={48} className="text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  {member.role}
                </p>
                <p className="text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Свяжитесь с нами</h2>
          <p className="text-xl text-muted-foreground">
            Готовы создать что-то особенное? Напишите или позвоните нам
          </p>
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-2">
              <Icon name="Phone" size={32} className="mx-auto mb-4" />
              <p className="font-semibold">Телефон</p>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </div>
            <div className="space-y-2">
              <Icon name="Mail" size={32} className="mx-auto mb-4" />
              <p className="font-semibold">Email</p>
              <p className="text-muted-foreground">info@harizma.studio</p>
            </div>
            <div className="space-y-2">
              <Icon name="MapPin" size={32} className="mx-auto mb-4" />
              <p className="font-semibold">Адрес</p>
              <p className="text-muted-foreground">
                г. Москва, ул. Примерная, 10
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-center pt-8">
            <Button size="lg" className="gap-2">
              <Icon name="Phone" size={20} />
              Позвонить
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Icon name="Mail" size={20} />
              Написать
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Фотостудия ХАРИЗМА. Все права защищены
          </p>
          <div className="flex gap-6">
            <Button variant="ghost" size="sm" className="gap-2">
              <Icon name="Instagram" size={20} />
              Instagram
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Icon name="Facebook" size={20} />
              Facebook
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
