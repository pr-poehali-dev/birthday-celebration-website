import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [photos, setPhotos] = useState([
    { id: 1, url: 'https://v3.fal.media/files/rabbit/74MhjGARP6PHLScJ16uUu_output.png', description: 'Особенный момент нашей жизни' },
    { id: 2, url: '/placeholder.svg', description: 'Незабываемые воспоминания' },
    { id: 3, url: '/placeholder.svg', description: 'Счастливые мгновения вместе' }
  ]);

  const [wishes, setWishes] = useState([
    { id: 1, author: 'Анна', message: 'Желаю тебе счастья, здоровья и исполнения всех мечт! 🎉' },
    { id: 2, author: 'Максим', message: 'Пусть этот год принесет только радость и новые достижения!' }
  ]);

  const [newWish, setNewWish] = useState({ author: '', message: '' });

  const playlist = [
    { title: 'Happy Birthday', artist: 'Stevie Wonder', duration: '3:45' },
    { title: 'Celebration', artist: 'Kool & The Gang', duration: '4:32' },
    { title: 'Good as Hell', artist: 'Lizzo', duration: '2:59' },
    { title: 'Can\'t Stop the Feeling', artist: 'Justin Timberlake', duration: '3:56' }
  ];

  const addWish = () => {
    if (newWish.author && newWish.message) {
      setWishes([...wishes, { id: Date.now(), ...newWish }]);
      setNewWish({ author: '', message: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-yellow-100 relative overflow-hidden">
      {/* Animated Confetti */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full opacity-80 animate-[fall_${3 + Math.random() * 4}s_linear_infinite]`}
            style={{
              left: `${Math.random() * 100}%`,
              backgroundColor: ['#FF6B6B', '#FFD93D', '#6BCBDC', '#A18ADF', '#FF8E8E'][Math.floor(Math.random() * 5)],
              animationDelay: `${Math.random() * 2}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
      </div>

      {/* Floating Balloons */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-6xl animate-[float_4s_ease-in-out_infinite]" 
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + Math.random() * 40}%`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            🎈
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent mb-6 font-montserrat">
              С ДНЕМ РОЖДЕНИЯ! 🎉
            </h1>
            <p className="text-2xl md:text-3xl text-purple-700 mb-8 font-medium">
              Этот день особенный, потому что особенный ТЫ!
            </p>
            <div className="flex gap-4 text-4xl mb-8">
              🎂 🎁 🎈 🎊 ✨
            </div>
            <Button 
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Посмотреть воспоминания 💖
            </Button>
          </div>
        </section>

        {/* Photo Gallery */}
        <section id="gallery" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-montserrat">
              Галерея воспоминаний 📸
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photos.map((photo, index) => (
                <Card key={photo.id} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-fade-in overflow-hidden" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={photo.url} 
                      alt={photo.description}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-lg text-gray-700 font-medium">{photo.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Memory Moments */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-100 to-pink-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-montserrat">
              Памятные моменты ✨
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-700">Первая встреча</h3>
                <p className="text-gray-700">Тот магический момент, когда наши пути пересеклись и началась эта удивительная дружба.</p>
              </Card>
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-5xl mb-4">🌟</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-700">Особые достижения</h3>
                <p className="text-gray-700">Все те моменты, когда ты блистал и показывал, насколько ты удивительный человек.</p>
              </Card>
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-5xl mb-4">🎭</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-700">Смешные истории</h3>
                <p className="text-gray-700">Все те моменты, когда мы смеялись до слез и создавали незабываемые воспоминания.</p>
              </Card>
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-5xl mb-4">💝</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-700">Особые подарки</h3>
                <p className="text-gray-700">Не только материальные, но и все те эмоции и радость, которые ты даришь окружающим.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Music Playlist */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent font-montserrat">
              Праздничный плейлист 🎵
            </h2>
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {playlist.map((song, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300 hover:scale-102">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                          <Icon name="Music" size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">{song.title}</h4>
                          <p className="text-gray-600">{song.artist}</p>
                        </div>
                      </div>
                      <div className="text-gray-500">{song.duration}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Wishes Form */}
        <section className="py-20 px-4 bg-gradient-to-r from-yellow-100 to-pink-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-600 to-yellow-600 bg-clip-text text-transparent font-montserrat">
              Пожелания и поздравления 💌
            </h2>
            
            {/* Existing wishes */}
            <div className="space-y-6 mb-12">
              {wishes.map((wish) => (
                <Card key={wish.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {wish.author[0]}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 mb-2">{wish.author}</h4>
                        <p className="text-gray-700 leading-relaxed">{wish.message}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Add new wish form */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-purple-700">Оставить поздравление</h3>
                <div className="space-y-4">
                  <Input 
                    placeholder="Ваше имя"
                    value={newWish.author}
                    onChange={(e) => setNewWish({ ...newWish, author: e.target.value })}
                    className="text-lg p-4 border-2 border-purple-200 focus:border-purple-500"
                  />
                  <Textarea 
                    placeholder="Напишите ваши пожелания..."
                    value={newWish.message}
                    onChange={(e) => setNewWish({ ...newWish, message: e.target.value })}
                    className="min-h-32 text-lg p-4 border-2 border-purple-200 focus:border-purple-500 resize-none"
                  />
                  <Button 
                    onClick={addWish}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Icon name="Heart" size={20} className="mr-2" />
                    Отправить поздравление
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 text-center">
          <div className="text-6xl mb-4">🎂✨🎈</div>
          <p className="text-2xl text-purple-700 font-medium">Пусть каждый день будет как праздник!</p>
          <p className="text-lg text-gray-600 mt-2">С любовью и наилучшими пожеланиями 💖</p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fall {
          0% { transform: translateY(-100vh) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default Index;