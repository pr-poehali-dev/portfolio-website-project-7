import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

type Category = 'all' | 'portraits' | 'weddings' | 'landscapes' | 'architecture' | 'students';

interface Photo {
  id: number;
  src: string;
  category: Category;
  title: string;
  author?: string;
}

const photos: Photo[] = [
  { id: 1, src: 'https://cdn.poehali.dev/projects/d058fa51-c57a-4c09-887a-08deab4356b5/files/3bf27465-46e9-4279-b9e0-81a085039820.jpg', category: 'portraits', title: 'Портрет 1' },
  { id: 2, src: 'https://cdn.poehali.dev/projects/d058fa51-c57a-4c09-887a-08deab4356b5/files/72b1be12-231e-4e14-b3aa-4e6ae759752b.jpg', category: 'weddings', title: 'Свадьба 1' },
  { id: 3, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', category: 'landscapes', title: 'Пейзаж 1' },
  { id: 4, src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&q=80', category: 'architecture', title: 'Архитектура 1' },
  { id: 5, src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80', category: 'portraits', title: 'Портрет 2' },
  { id: 6, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', category: 'weddings', title: 'Свадьба 2' },
  { id: 7, src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80', category: 'landscapes', title: 'Пейзаж 2' },
  { id: 8, src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80', category: 'architecture', title: 'Архитектура 2' },
  { id: 9, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', category: 'students', title: 'Работа ученика', author: 'Анна Петрова' },
  { id: 10, src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80', category: 'students', title: 'Работа ученика', author: 'Иван Сидоров' },
  { id: 11, src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80', category: 'students', title: 'Работа ученика', author: 'Мария Кузнецова' },
  { id: 12, src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80', category: 'students', title: 'Работа ученика', author: 'Дмитрий Волков' },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const categories = [
    { id: 'all' as Category, label: 'Все' },
    { id: 'portraits' as Category, label: 'Портреты' },
    { id: 'weddings' as Category, label: 'Свадьбы' },
    { id: 'landscapes' as Category, label: 'Пейзажи' },
    { id: 'architecture' as Category, label: 'Архитектура' },
    { id: 'students' as Category, label: 'Работы учеников' },
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const openPhoto = (photo: Photo) => {
    setSelectedPhoto(photo);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Camera" size={28} className="text-primary" />
              <span className="font-cormorant text-2xl font-semibold text-primary">
                Алексей Фотограф
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {categories.slice(1).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-sm font-light tracking-wide transition-colors hover:text-primary ${
                    selectedCategory === cat.id ? 'text-primary font-normal' : 'text-muted-foreground'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            
            <Button variant="outline" size="sm" className="hidden md:flex">
              Контакты
            </Button>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1 animate-fade-in">
            <img
              src="https://cdn.poehali.dev/projects/d058fa51-c57a-4c09-887a-08deab4356b5/files/c32f6460-7ddb-4a16-bba5-c73d78e64fe8.jpg"
              alt="Алексей Фотограф"
              className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="font-cormorant text-5xl md:text-6xl font-semibold text-primary leading-tight">
              Обо мне
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              Я профессиональный фотограф с более чем 10-летним опытом работы. 
              Специализируюсь на портретной, свадебной съёмке и архитектурной фотографии. 
              Моя цель — запечатлеть искренние эмоции и создать вневременные изображения, 
              которые рассказывают истории.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light">
              Провожу мастер-классы для начинающих фотографов и делюсь своим опытом, 
              помогая раскрыть творческий потенциал каждого ученика.
            </p>
            <Button className="mt-4">
              Связаться со мной
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-light tracking-wide transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background text-muted-foreground hover:bg-accent'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="group relative aspect-square overflow-hidden bg-muted cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => openPhoto(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-cormorant text-lg font-semibold">{photo.title}</h3>
                    {photo.author && (
                      <p className="text-sm text-white/80 font-light">{photo.author}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedCategory === 'students' && (
        <section className="container mx-auto px-6 py-16 text-center">
          <h2 className="font-cormorant text-4xl font-semibold text-primary mb-4">
            Горжусь успехами моих учеников
          </h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            Эти работы созданы моими талантливыми учениками после прохождения курсов. 
            Каждый из них нашёл свой уникальный стиль и продолжает развиваться в фотографии.
          </p>
        </section>
      )}

      <footer className="border-t border-border bg-background">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-cormorant text-xl font-semibold mb-3">Контакты</h3>
              <p className="text-muted-foreground font-light text-sm">contact@photographer.ru</p>
              <p className="text-muted-foreground font-light text-sm">+7 (999) 123-45-67</p>
            </div>
            <div>
              <h3 className="font-cormorant text-xl font-semibold mb-3">Социальные сети</h3>
              <div className="flex gap-4 justify-center md:justify-start">
                <Icon name="Instagram" size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Facebook" size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Twitter" size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h3 className="font-cormorant text-xl font-semibold mb-3">Услуги</h3>
              <p className="text-muted-foreground font-light text-sm">Портретная съёмка</p>
              <p className="text-muted-foreground font-light text-sm">Свадебная фотография</p>
              <p className="text-muted-foreground font-light text-sm">Мастер-классы</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground font-light">
            © 2024 Алексей Фотограф. Все права защищены.
          </div>
        </div>
      </footer>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 bg-black/95">
          {selectedPhoto && (
            <div className="relative w-full h-full flex items-center justify-center p-8">
              <button
                onClick={() => setIsDialogOpen(false)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Icon name="X" size={24} className="text-white" />
              </button>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="font-cormorant text-2xl font-semibold">{selectedPhoto.title}</h3>
                {selectedPhoto.author && (
                  <p className="text-white/80 font-light mt-1">Автор: {selectedPhoto.author}</p>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
