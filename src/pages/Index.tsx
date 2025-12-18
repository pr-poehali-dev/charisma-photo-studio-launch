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
      icon: 'User',
      title: 'Портретная съёмка',
      description: 'Профессиональные портреты для личных и деловых целей',
      price: 'от 5 000 ₽',
    },
    {
      icon: 'Users',
      title: 'Семейная фотосессия',
      description: 'Атмосферные снимки для всей семьи',
      price: 'от 8 000 ₽',
    },
    {
      icon: 'Sparkles',
      title: 'Fashion съёмка',
      description: 'Стильные образы для портфолио и каталогов',
      price: 'от 12 000 ₽',
    },
    {
      icon: 'Package',
      title: 'Предметная съёмка',
      description: 'Качественные фото товаров для бизнеса',
      price: 'от 3 000 ₽',
    },
    {
      icon: 'Camera',
      title: 'Студийная аренда',
      description: 'Аренда студии с оборудованием',
      price: 'от 2 000 ₽/час',
    },
    {
      icon: 'Wand2',
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
      name: 'Карина Костюшкина',
      role: 'Директор',
      description: 'Управление студией и координация всех процессов',
    },
    {
      name: 'Олеся Золотова',
      role: 'Администратор',
      description: 'Консультации, запись клиентов и организация съёмок',
    },
  ];

  const features = [
    {
      icon: 'Camera',
      title: 'Профессиональное оборудование',
      description: 'Современная техника для съёмки любой сложности',
    },
    {
      icon: 'Lightbulb',
      title: 'Студийный свет',
      description: 'Идеальное освещение для каждого кадра',
    },
    {
      icon: 'Palette',
      title: 'Разные локации',
      description: 'Несколько зон для реализации любых идей',
    },
    {
      icon: 'Heart',
      title: 'Индивидуальный подход',
      description: 'Внимание к вашим пожеланиям и деталям',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <img 
            src="https://cdn.poehali.dev/files/image (1).png" 
            alt="Харизма" 
            className="h-14 w-auto hover:scale-105 transition-transform cursor-pointer"
            onClick={() => scrollToSection('hero')}
          />
          <div className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              О студии
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Портфолио
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Команда
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="sm"
              className="ml-4"
            >
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20 -z-10" />
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="container mx-auto max-w-5xl text-center space-y-12 relative">
          <div className="animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/files/image (1).png" 
              alt="Харизма" 
              className="h-40 md:h-56 w-auto mx-auto mb-8 drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Профессиональная фотография с душой.<br />
            <span className="text-primary font-medium">Создаём уникальные образы</span> и сохраняем важные моменты
          </h1>
          
          <div className="flex flex-wrap gap-4 justify-center pt-8 animate-fade-in-up-delay">
            <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all" onClick={() => scrollToSection('services')}>
              <Icon name="Sparkles" size={20} className="mr-2" />
              Наши услуги
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              onClick={() => scrollToSection('gallery')}
            >
              <Icon name="Image" size={20} className="mr-2" />
              Портфолио
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 max-w-4xl mx-auto animate-fade-in-up-delay-2">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center space-y-3 p-4 rounded-lg hover:bg-secondary/50 transition-all">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name={feature.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-center">{feature.title}</h3>
                <p className="text-xs text-muted-foreground text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-4 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              О студии
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p className="text-center text-xl md:text-2xl font-light">
              ХАРИЗМА — это <span className="text-primary font-medium">новая фотостудия</span> в самом сердце города. Мы
              создаём пространство, где каждый может раскрыть свою уникальность
              и получить профессиональные снимки высочайшего качества.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <Card className="border-2 hover:border-primary/50 transition-all shadow-lg">
                <CardContent className="p-8">
                  <Icon name="Camera" size={40} className="text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Современное оборудование</h3>
                  <p>
                    Наша студия оснащена новейшим оборудованием и располагает
                    несколькими зонами для съёмки.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-primary/50 transition-all shadow-lg">
                <CardContent className="p-8">
                  <Icon name="Heart" size={40} className="text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Индивидуальный подход</h3>
                  <p>
                    Внимание к деталям и персональный подход к каждому клиенту. Мы создаём истории, а не просто фотографии.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Услуги и цены
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group border-2 hover:border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-10 space-y-5">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <p className="text-2xl font-bold text-primary pt-2">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-32 px-4 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Наши работы
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-muted hover:scale-105 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl"
              >
                <img
                  src={image}
                  alt={`Работа ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold text-lg">Работа {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-32 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Наша команда
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="border-2 hover:border-primary hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-10 text-center space-y-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/40 mx-auto flex items-center justify-center shadow-lg">
                    <Icon name="User" size={56} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-primary font-semibold text-lg mb-3">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-4 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Свяжитесь с нами
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-xl text-muted-foreground">
              Готовы создать уникальные снимки? Свяжитесь с нами для записи!
            </p>
          </div>

          <Card className="border-2 shadow-2xl">
            <CardContent className="p-12 space-y-8">
              <div className="flex items-start gap-6 p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                  <p className="text-muted-foreground text-lg">+7 (XXX) XXX-XX-XX</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground text-lg">info@harizm-studio.ru</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                  <p className="text-muted-foreground text-lg">г. Москва, ул. Примерная, д. 1</p>
                </div>
              </div>

              <Button className="w-full py-6 text-lg shadow-lg hover:shadow-xl" size="lg">
                <Icon name="Send" size={20} className="mr-2" />
                Записаться на съёмку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-secondary/50 border-t border-border">
        <div className="container mx-auto text-center space-y-4">
          <img 
            src="https://cdn.poehali.dev/files/image (1).png" 
            alt="Харизма" 
            className="h-16 w-auto mx-auto opacity-60"
          />
          <p className="text-muted-foreground">
            © 2024 Фотостудия ХАРИЗМА. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
