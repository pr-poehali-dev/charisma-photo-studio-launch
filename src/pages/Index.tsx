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
      color: 'from-pink-500/20 to-purple-500/20',
    },
    {
      icon: 'Users',
      title: 'Семейная фотосессия',
      description: 'Атмосферные снимки для всей семьи',
      price: 'от 8 000 ₽',
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: 'Sparkles',
      title: 'Fashion съёмка',
      description: 'Стильные образы для портфолио и каталогов',
      price: 'от 12 000 ₽',
      color: 'from-amber-500/20 to-orange-500/20',
    },
    {
      icon: 'Package',
      title: 'Предметная съёмка',
      description: 'Качественные фото товаров для бизнеса',
      price: 'от 3 000 ₽',
      color: 'from-green-500/20 to-emerald-500/20',
    },
    {
      icon: 'Camera',
      title: 'Студийная аренда',
      description: 'Аренда студии с оборудованием',
      price: 'от 2 000 ₽/час',
      color: 'from-violet-500/20 to-indigo-500/20',
    },
    {
      icon: 'Wand2',
      title: 'Обработка фото',
      description: 'Профессиональная ретушь и цветокоррекция',
      price: 'от 500 ₽/фото',
      color: 'from-rose-500/20 to-pink-500/20',
    },
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/projects/823b0642-5730-43f4-b958-4dc749efa1d4/files/bb6885dc-a79c-42ec-8f22-f29cde918aa5.jpg',
    'https://cdn.poehali.dev/projects/823b0642-5730-43f4-b958-4dc749efa1d4/files/41ec5995-e5dd-44a3-ba21-c50ae3714f63.jpg',
    'https://cdn.poehali.dev/projects/823b0642-5730-43f4-b958-4dc749efa1d4/files/986f9258-1210-45c9-a486-0b245ad86f74.jpg',
    'https://cdn.poehali.dev/projects/823b0642-5730-43f4-b958-4dc749efa1d4/files/b9fcccd5-8be6-46c8-8c2b-8f5dd2f8f3bb.jpg',
    'https://cdn.poehali.dev/projects/823b0642-5730-43f4-b958-4dc749efa1d4/files/b68615d5-f4d8-4164-a32e-50a8af33a85f.jpg',
    'https://cdn.poehali.dev/projects/823b0642-5730-43f4-b958-4dc749efa1d4/files/2f236f39-722c-4b9d-9358-41985f7a352f.jpg',
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

  const photographyElements = [
    { icon: 'Aperture', label: 'Профессиональная оптика', color: 'text-purple-500' },
    { icon: 'Zap', label: 'Студийный свет', color: 'text-amber-500' },
    { icon: 'Film', label: 'Качественная обработка', color: 'text-blue-500' },
    { icon: 'Focus', label: 'Идеальная резкость', color: 'text-pink-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-amber-50/30">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-purple-100/50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <img 
            src="https://cdn.poehali.dev/files/image (1).png" 
            alt="Харизма" 
            className="h-14 w-auto hover:scale-105 transition-transform cursor-pointer drop-shadow-lg"
            onClick={() => scrollToSection('hero')}
          />
          <div className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              О студии
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              Портфолио
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              Команда
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="sm"
              className="ml-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all"
            >
              <Icon name="Camera" size={16} className="mr-2" />
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-4 pt-20"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-40 h-40 opacity-20">
            <Icon name="Camera" size={160} className="text-purple-500 animate-spin-slow" />
          </div>
          <div className="absolute bottom-1/4 -right-20 w-40 h-40 opacity-20">
            <Icon name="Aperture" size={160} className="text-pink-500 animate-spin-reverse" />
          </div>
        </div>
        
        <div className="container mx-auto max-w-6xl text-center space-y-12 relative z-10">
          <div className="animate-fade-in space-y-6">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-3xl animate-pulse" />
              <img 
                src="https://cdn.poehali.dev/files/image (1).png" 
                alt="Харизма" 
                className="h-48 md:h-64 w-auto mx-auto drop-shadow-2xl relative z-10"
              />
            </div>
            
            <div className="flex justify-center gap-8 flex-wrap">
              {photographyElements.map((element, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-purple-200/50 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  <Icon name={element.icon} size={24} className={element.color} />
                  <span className="text-sm font-medium">{element.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in-up">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
              Создаём магию
            </span>
            <br />
            <span className="text-slate-800">в каждом кадре</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay">
            Профессиональная фотостудия с душой. Превращаем моменты в искусство,
            создаём уникальные образы и сохраняем самые важные мгновения вашей жизни
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-8 animate-fade-in-up-delay-2">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-2xl hover:shadow-pink-500/50 transition-all hover:scale-105"
              onClick={() => scrollToSection('services')}
            >
              <Icon name="Sparkles" size={20} className="mr-2" />
              Наши услуги
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 shadow-xl transition-all hover:scale-105"
              onClick={() => scrollToSection('gallery')}
            >
              <Icon name="Image" size={20} className="mr-2" />
              Портфолио
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 max-w-5xl mx-auto">
            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl border border-purple-200/50 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">10+</div>
              <div className="text-sm text-slate-600">лет опыта</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl border border-amber-200/50 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-sm text-slate-600">съёмок</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl border border-blue-200/50 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-sm text-slate-600">довольных клиентов</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl border border-green-200/50 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-sm text-slate-600">поддержка</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6">
              <Icon name="Camera" size={40} className="text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
              О студии
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <p className="text-xl text-slate-700 leading-relaxed">
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">ХАРИЗМА</span> — это современная фотостудия, где профессионализм встречается с творчеством.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all shadow-lg hover:shadow-xl">
                  <CardContent className="p-6 text-center">
                    <Icon name="Award" size={36} className="text-purple-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-800">Профессионализм</h3>
                  </CardContent>
                </Card>
                <Card className="border-2 border-pink-200 hover:border-pink-400 transition-all shadow-lg hover:shadow-xl">
                  <CardContent className="p-6 text-center">
                    <Icon name="Heart" size={36} className="text-pink-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-800">С душой</h3>
                  </CardContent>
                </Card>
                <Card className="border-2 border-amber-200 hover:border-amber-400 transition-all shadow-lg hover:shadow-xl">
                  <CardContent className="p-6 text-center">
                    <Icon name="Zap" size={36} className="text-amber-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-800">Быстро</h3>
                  </CardContent>
                </Card>
                <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all shadow-lg hover:shadow-xl">
                  <CardContent className="p-6 text-center">
                    <Icon name="Star" size={36} className="text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-800">Качественно</h3>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />
              <img 
                src="https://cdn.poehali.dev/projects/823b0642-5730-43f4-b958-4dc749efa1d4/files/b9fcccd5-8be6-46c8-8c2b-8f5dd2f8f3bb.jpg"
                alt="Студия"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover border-4 border-white"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-2xl">
                <Icon name="Camera" size={56} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 px-4 bg-gradient-to-b from-transparent via-purple-50/50 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-block p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl mb-6">
              <Icon name="Sparkles" size={40} className="text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
              Услуги и цены
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-2 border-transparent hover:border-purple-400 transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2 bg-white"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <CardContent className="relative p-10 space-y-5">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Icon name={service.icon} size={40} className="text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  <div className="pt-4 border-t border-purple-200">
                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{service.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-32 px-4 bg-gradient-to-b from-transparent via-amber-50/30 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-block p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6">
              <Icon name="Image" size={40} className="text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
              Наши работы
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-3xl cursor-pointer shadow-2xl hover:shadow-purple-500/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img
                  src={image}
                  alt={`Работа ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end p-8">
                  <div>
                    <p className="text-white font-bold text-2xl mb-2">Работа {index + 1}</p>
                    <div className="flex gap-2">
                      <Icon name="Camera" size={20} className="text-white" />
                      <Icon name="Heart" size={20} className="text-pink-400" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-30 shadow-lg">
                  <Icon name="ZoomIn" size={24} className="text-purple-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-32 px-4 bg-gradient-to-b from-transparent via-pink-50/30 to-transparent">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <div className="inline-block p-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl mb-6">
              <Icon name="Users" size={40} className="text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
              Наша команда
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <Card key={index} className="group relative overflow-hidden border-2 border-purple-200 hover:border-purple-400 transition-all duration-500 shadow-2xl hover:shadow-purple-500/50 bg-white">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="relative p-12 text-center space-y-6">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                    <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-amber-400 p-1 mx-auto shadow-2xl">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <Icon name="User" size={64} className="text-purple-600" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2 text-slate-800">{member.name}</h3>
                    <p className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">{member.role}</p>
                    <p className="text-slate-600 leading-relaxed">{member.description}</p>
                  </div>
                  <div className="flex justify-center gap-3 pt-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition-colors cursor-pointer">
                      <Icon name="Phone" size={20} className="text-purple-600" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 transition-colors cursor-pointer">
                      <Icon name="Mail" size={20} className="text-pink-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-6">
              <Icon name="Send" size={40} className="text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
              Свяжитесь с нами
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 mx-auto rounded-full mb-8" />
            <p className="text-xl text-slate-600">
              Готовы создать уникальные снимки? Свяжитесь с нами для записи!
            </p>
          </div>

          <Card className="border-4 border-purple-200 shadow-2xl bg-white">
            <CardContent className="p-12 space-y-6">
              <div className="flex items-start gap-6 p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-all border-2 border-purple-100">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Icon name="Phone" size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-slate-800">Телефон</h3>
                  <p className="text-slate-600 text-lg">+7 (XXX) XXX-XX-XX</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-lg transition-all border-2 border-amber-100">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Icon name="Mail" size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-slate-800">Email</h3>
                  <p className="text-slate-600 text-lg">info@harizm-studio.ru</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-lg transition-all border-2 border-blue-100">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Icon name="MapPin" size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-slate-800">Адрес</h3>
                  <p className="text-slate-600 text-lg">г. Москва, ул. Примерная, д. 1</p>
                </div>
              </div>

              <Button className="w-full py-8 text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 hover:from-purple-700 hover:via-pink-700 hover:to-amber-700 shadow-2xl hover:shadow-pink-500/50 transition-all hover:scale-105" size="lg">
                <Icon name="Camera" size={24} className="mr-3" />
                Записаться на съёмку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-16 px-4 bg-gradient-to-br from-purple-900 via-pink-900 to-amber-900 text-white border-t-4 border-purple-500">
        <div className="container mx-auto text-center space-y-6">
          <img 
            src="https://cdn.poehali.dev/files/image (1).png" 
            alt="Харизма" 
            className="h-20 w-auto mx-auto drop-shadow-2xl"
          />
          <div className="flex justify-center gap-6">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">
              <Icon name="Instagram" size={24} />
            </div>
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">
              <Icon name="Facebook" size={24} />
            </div>
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">
              <Icon name="Phone" size={24} />
            </div>
          </div>
          <p className="text-white/80">
            © 2024 Фотостудия ХАРИЗМА. Создаём магию в каждом кадре.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
