import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent } from '@/components/ui/dialog';

type WorkType = 'photography' | 'design';
type Category = 'all' | 'portraits' | 'weddings' | 'landscapes' | 'architecture';

interface Work {
  id: number;
  src: string;
  type: WorkType;
  category?: Category;
  title: string;
  description?: string;
}

const works: Work[] = [
  { id: 1, src: 'https://cdn.poehali.dev/projects/d058fa51-c57a-4c09-887a-08deab4356b5/files/3bf27465-46e9-4279-b9e0-81a085039820.jpg', type: 'photography', category: 'portraits', title: 'Portrait Series' },
  { id: 2, src: 'https://cdn.poehali.dev/projects/d058fa51-c57a-4c09-887a-08deab4356b5/files/72b1be12-231e-4e14-b3aa-4e6ae759752b.jpg', type: 'photography', category: 'weddings', title: 'Wedding Day' },
  { id: 3, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', type: 'photography', category: 'landscapes', title: 'Mountain View' },
  { id: 4, src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&q=80', type: 'photography', category: 'architecture', title: 'Urban Lines' },
  { id: 5, src: 'https://cdn.poehali.dev/projects/d058fa51-c57a-4c09-887a-08deab4356b5/files/d2915cfd-2cfb-491b-9abd-122a9c066248.jpg', type: 'design', title: 'Brand Identity', description: 'Minimalist poster design' },
  { id: 6, src: 'https://cdn.poehali.dev/projects/d058fa51-c57a-4c09-887a-08deab4356b5/files/8553c7b8-1985-4978-ac41-21cacbcdff38.jpg', type: 'design', title: 'Logo System', description: 'Corporate branding' },
  { id: 7, src: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80', type: 'design', title: 'Typography Poster', description: 'Swiss design style' },
  { id: 8, src: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&q=80', type: 'design', title: 'Editorial Layout', description: 'Magazine spread' },
];

const Index = () => {
  const [selectedType, setSelectedType] = useState<WorkType>('photography');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: 'ВСЕ' },
    { id: 'portraits', label: 'ПОРТРЕТЫ' },
    { id: 'weddings', label: 'СВАДЬБЫ' },
    { id: 'landscapes', label: 'ПЕЙЗАЖИ' },
    { id: 'architecture', label: 'АРХИТЕКТУРА' },
  ];

  const filteredWorks = works.filter(work => {
    if (work.type !== selectedType) return false;
    if (selectedType === 'design') return true;
    return selectedCategory === 'all' || work.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black">
        <div className="container mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black" />
            <span className="text-xl font-bold tracking-tight">ЕЛИСТРАТОВА АНАСТАСИЯ</span>
          </div>
          
          <div className="flex items-center gap-12">
            <button
              onClick={() => { setSelectedType('photography'); setSelectedCategory('all'); }}
              className={`text-sm font-medium tracking-wider transition-colors ${
                selectedType === 'photography' ? 'text-black' : 'text-gray-400 hover:text-black'
              }`}
            >
              ФОТОГРАФИЯ
            </button>
            <button
              onClick={() => setSelectedType('design')}
              className={`text-sm font-medium tracking-wider transition-colors ${
                selectedType === 'design' ? 'text-black' : 'text-gray-400 hover:text-black'
              }`}
            >
              ГРАФИКА
            </button>
            <button className="px-6 py-2 bg-accent text-white text-sm font-medium tracking-wider hover:bg-black transition-colors">
              КОНТАКТ
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-24 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="w-16 h-1 bg-accent" />
              <h1 className="text-7xl font-bold leading-none tracking-tight">
                ДИЗАЙН<br/>
                <span className="text-accent">+</span><br/>
                ФОТО
              </h1>
              <p className="text-base leading-relaxed text-gray-600 max-w-md">
                Минималистичный подход к визуальному дизайну и фотографии. 
                Чистые линии, смелая типографика, точная композиция.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="w-12 h-12 border border-black flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-colors">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-12 h-12 border border-black flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-colors">
                  <Icon name="Linkedin" size={20} />
                </div>
                <div className="w-12 h-12 border border-black flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-colors">
                  <Icon name="Mail" size={20} />
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -top-8 -left-8 w-full h-full border-2 border-accent -z-10" />
              <img
                src="https://cdn.poehali.dev/projects/d058fa51-c57a-4c09-887a-08deab4356b5/files/c32f6460-7ddb-4a16-bba5-c73d78e64fe8.jpg"
                alt="Studio"
                className="w-full aspect-square object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {selectedType === 'photography' && (
        <div className="border-t border-black py-6 bg-muted/20">
          <div className="container mx-auto px-8">
            <div className="flex gap-8 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs font-bold tracking-widest transition-colors relative ${
                    selectedCategory === cat.id ? 'text-black' : 'text-gray-400 hover:text-black'
                  }`}
                >
                  {cat.label}
                  {selectedCategory === cat.id && (
                    <div className="absolute -bottom-3 left-0 right-0 h-0.5 bg-accent" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <section className="py-20 px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black">
            {filteredWorks.map((work, index) => (
              <div
                key={work.id}
                className="group relative aspect-square bg-white overflow-hidden cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedWork(work)}
              >
                <img
                  src={work.src}
                  alt={work.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/90 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white p-6">
                    <h3 className="text-xl font-bold mb-2 tracking-wide">{work.title}</h3>
                    {work.description && (
                      <p className="text-sm tracking-wider">{work.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedType === 'design' && (
        <section className="py-20 px-8 bg-black text-white">
          <div className="container mx-auto max-w-4xl text-center space-y-6">
            <h2 className="text-5xl font-bold tracking-tight">
              ГРАФИЧЕСКИЙ<br/>ДИЗАЙН
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Работаю с брендингом, типографикой и визуальной идентичностью. 
              Создаю простые и эффективные решения в духе швейцарского дизайна.
            </p>
          </div>
        </section>
      )}

      <footer className="border-t border-black bg-white py-16 px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-3 gap-12">
            <div>
              <div className="w-12 h-12 bg-black mb-4" />
              <p className="text-xs text-gray-600 leading-relaxed">
                Студия дизайна<br/>и фотографии
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold mb-4 tracking-wider">КОНТАКТЫ</h3>
              <p className="text-xs text-gray-600 space-y-1">
                <span className="block">studio@design.ru</span>
                <span className="block">+7 999 123 45 67</span>
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold mb-4 tracking-wider">УСЛУГИ</h3>
              <p className="text-xs text-gray-600 space-y-1">
                <span className="block">Фотосъёмка</span>
                <span className="block">Брендинг</span>
                <span className="block">Графический дизайн</span>
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-400 tracking-wider">
            © 2024 STUDIO — ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>

      <Dialog open={!!selectedWork} onOpenChange={() => setSelectedWork(null)}>
        <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 bg-black">
          {selectedWork && (
            <div className="relative w-full h-full flex items-center justify-center p-12">
              <button
                onClick={() => setSelectedWork(null)}
                className="absolute top-6 right-6 z-50 w-12 h-12 border border-white hover:bg-white hover:text-black transition-colors flex items-center justify-center text-white"
              >
                <Icon name="X" size={20} />
              </button>
              <img
                src={selectedWork.src}
                alt={selectedWork.title}
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute bottom-12 left-12 text-white">
                <div className="w-12 h-0.5 bg-accent mb-4" />
                <h3 className="text-3xl font-bold tracking-wide mb-2">{selectedWork.title}</h3>
                {selectedWork.description && (
                  <p className="text-gray-400 tracking-wider">{selectedWork.description}</p>
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