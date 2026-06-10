"use client";

import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Tushar Aran",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a-/ALV-UjVl0UPkbr78KKHL8aju8677s6O_Su8-MZqrnNKvfwsoB2NEoiYw3g=w36-h36-p-rp-mo-ba12-br100",
      link: "https://maps.app.goo.gl/ZcTtgvtrrpprzbuM9",
      text: "Had an absolutely amazing experience at Lou Lou Cafe, Dehradun!\n\nKudos to the owner for creating such a thoughtful and beautifully designed space. From the moment you enter till the time you leave, everything feels warm, welcoming, and well-curated.\n\nThe lighting is just perfect soft and soothing and the colour theme adds such a calming vibe to the entire place. You can really feel the attention to detail.\n\nThe staff is extremely well-trained, polite, and attentive, which makes the experience even better. And the food? Absolutely delicious! Every dish we tried was full of flavour and beautifully presented.\n\nFrom entry to exit, it was a smooth and delightful experience.\n\nHighly recommended we truly need more places like this! 🌿✨"
    },
    {
      name: "Aditya Arya",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a-/ALV-UjWQw2dCzZg5Witxudi13nzaGFgMdIPQyZ6TO6RvQUmJWLnAwRVS=w36-h36-p-rp-mo-ba12-br100",
      link: "https://maps.app.goo.gl/pVfCG3z3Ncg7dTpYA",
      text: "Unmatched class and unique food among cafes.\nThis is basically one among the best top two cafes in dehradun,its best in terms of class & elegance.\nIts number one in uniqueness, its food & architecture is very different and top notch in quality.\nFor example,they served COD Fish with is served no where else, dumpling are totally different in recipe and highest is quality i have eaten so far,their red wine sangria is the best.\nIt feels like the West with its locality, structure, weather & interior.\nStaff is very welcoming.\nMr.Taj attends me here,he explains every item in menu and recommends dishes very honestly,for me becomes a part of the experience."
    },
    {
      name: "Megha Sharma",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a-/ALV-UjU6lN5SAkgm9BuxT5i5gD9f6OZJnEr0y1mf3Ug_x4jDOOCnyLfG=w36-h36-p-rp-mo-ba12-br100",
      link: "https://maps.app.goo.gl/CGZ8cdGgKRRyyHfL9",
      text: "A beautiful place with greenery amidst all the concrete. It’s a beautiful cafe with duplex kind of interior. There were tables setup outside as well. So, one can soak in the surroundings and enjoy good food.\n\nCrystal dumplings were yummy, stir fried noodles were fine but, the herbal tea wasn’t worth the price though it was costing Rs 210. For herbal tea, they served organic India’s tea bag dipped in hot water. I was expecting an in-house made herbal tea. So, I felt cheated and would suggest the restaurant to either lower the price or add it in the menu description so that a customer’s expectations are set. The coffee was good.\n\nThe staff is friendly and welcoming. They always had smile on their faces. The manager asked for the feedback towards the end of the food. They were cooperative with our kid as well.\n\nThe washroom is neat and clean, maintained. The parking was ample. They had in-house valet."
    },
    {
      name: "M S",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a-/ALV-UjV7PmMEQI2Jj3roRVMgTPS4OEYpSZCiY7er_l26OXjQMxXjo9BC=w36-h36-p-rp-mo-ba12-br100",
      link: "https://maps.app.goo.gl/LyP7o9pkzXs1PoHT7",
      text: "A fine some experience that takes you back to another era!!!\nAbsolutely loved our experience at Lou Lou, Dehradun! The food was exceptional — fresh, flavorful, and beautifully presented. Despite our dietary restrictions, the chef went out of his way to customize every dish and ensured we were fully satisfied. The ambience is warm and elegant, and the service is among the best we’ve experienced in the city. The drinks are outstanding, and though slightly pricey, the quality and generous portions make it well worth it. Highly recommended for anyone looking for a fine dining experience done right!\nWhat did we have : the best Pad Thai Noodles wrapped in egg, Basil Chicken, Yellow curry and Rice, crispy chicken (sorry image missing) Niw we have to go back for desserts!!"
    },
    {
      name: "Umesh rawat",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a-/ALV-UjXWkvISzSxHuASRhYDfz49XGBVceVsaTMa1LHo81btXB1e33BTURQ=w36-h36-p-rp-mo-ba12-br100",
      link: "https://maps.app.goo.gl/QxrknjceEy5T6Zzn8",
      text: "Visited about a month ago and had a really nice experience. The ambience is cozy and aesthetic with a Pinterest-style vibe — perfect for relaxed conversations and casual outings. The music was also really good and added to the calm, welcoming atmosphere.\n\nTried the lotus stem and crystal dimsums, and both were delicious. The lotus stem was crispy and well-flavoured, definitely a must try while the dimsums were fresh, soft, and nicely prepared. The presentation and overall vibe make the place feel warm and inviting.\n\nA great spot in Dehradun if you’re looking for good Asian food, soothing music, and a cozy ambience. Would definitely visit again."
    },
    {
      name: "Abhishek Singh",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a-/ALV-UjWVqMtcSGWcOJyhSb-pIlg4oQ9PZfvoHK0B5kD1YyftqcSyFI5TFg=w36-h36-p-rp-mo-ba12-br100",
      link: "https://maps.app.goo.gl/6r7PzoFnuD1DjjB77",
      text: "A Beautiful Blend of Taste, Ambience, and Calm – Café Loulou by Piccolo\n\nCafé Loulou by Piccolo is truly one of those places where food, aesthetics, and atmosphere come together effortlessly. Nestled amidst greenery, it offers a calm, scenic setting that instantly puts you at ease — perfect for a relaxed brunch, quiet afternoon, or even a leisurely coffee break.\n\nThe ambience is absolutely charming — a mix of rustic elegance and cozy European café vibes. Sunlight streaming through tall windows, comfortable seating, and tastefully done interiors make it an ideal spot to unwind or enjoy a conversation over good food. The outdoor area, surrounded by lush greenery, adds an extra layer of tranquility."
    },
    {
      name: "Anneshwa paul",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a-/ALV-UjVq8AxihuC5EIRhU-qMjBtnP6iI7U-B3BOS7WY4D5HihTHOrGfi=w36-h36-p-rp-mo-ba12-br100",
      link: "https://maps.app.goo.gl/kfnyY5qmQTTh3z8n9",
      text: "LouLou is easily the prettiest place in Dehradun. I was pleased with the food too, the asparagus tempura sushi was so delicious. I loved the dimsums and the salad too.\nThe coffee is great and it tasted perfect with the delicious coconut cheesecake 💌 A perfect place for a brunch or even for an evening coffee date. The service was fast, the staff was courteous and the ambience was purely magical 💌"
    },
    {
      name: "elena tapai",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a/ACg8ocJoSwdTaqjiAfmApxa-9-o5iqa58A7hGh4Dav1eeehK8FiL9g=w36-h36-p-rp-mo-ba12-br100",
      link: "https://maps.app.goo.gl/X22zmDbDAcNs2W8k9",
      text: "A real British, posh atmosphere where the waiters await and greet you at the door and accompamy you to your table. They remember your face even if they only saw you once. The food is delicious, the tastes are spot on. It is like a massage for your tastebuds. The menu is fully South-Asian, despite the fully British environment, an exciting, perfect combo! Their drinks and salads are outstanding too."
    },
    {
      name: "Pranay Arora",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a/ACg8ocL5ue1CSVFuElr2pva5P_JCNWpucW3SMcOHKhxOEG5OJ_vABw=w36-h36-p-rp-mo-ba12-br100",
      link: "https://maps.app.goo.gl/t77MSM7qSxgD3WS36",
      text: "When you walk inside the picturesque and aesthetically pleasing wooden house in the middle of the hills and hear the iconic Sinatra and Dean Martin from the 60s jamming on the radio, you know you're in for a treat. The menu mostly consists of mouthwatering Pan-Asian dishes with a dash of café classics. Went for the much hyped crystal dumplings, and all I can say is that they are umami. The baos can be worked on, the ingredients are fresh, and the taste is palete pleasing. Pleasant and courteous staff. Met Mr. Taj, the kind restaurant manager, who is very informed and hospitable. I had a terrific time. I will most certainly return for more."
    },
    {
      name: "Aarti Meena",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a-/ALV-UjUyMf_GPzhqtzIB4Fg8KDup75F81KB7W5hFoRUCaw-VNfiFLuc=w36-h36-p-rp-mo-ba12-br100",
      link: "https://maps.app.goo.gl/vGi5sZmEEacQrGMs6",
      text: "The food was absolutely amazing — loved every bit of it! 💫 The menu was wonderfully explained by Lokendra, whose recommendations made the experience even better. We actually travelled 50 km just to hop on again our fav crystal dumplings — and they are always totally worth it! Definitely one of the most loved dishes at Lou Lou. Highly recommended!"
    },
    {
      name: "Garima",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a-/ALV-UjVylk2GlfInzU98Fh9nLVbeynn6iQWOm2Z5cB1PHnEm_dGqy1GcDQ=w36-h36-p-rp-mo-ba12-br100",
      link: "https://maps.app.goo.gl/grTKWVR3b1a3LvRU9",
      text: "We came across this place when we saw this beautiful house, and the interiors were equally beautiful.\n\nThe backyard seating is an ideal spot for lunch on a sunny winter day, with stunning views that make the experience even better.\n\nGreat food, great service—definitely a place worth visiting!"
    }
  ];

  const VerifiedTick = () => (
    <svg className="w-4 h-4 ml-1.5 fill-blue-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"/>
    </svg>
  );

  const GoogleIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mr-1.5">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );

  return (
    <section id="reviews" className="py-16 md:py-24 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-title">Guest Experiences</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">Customer Reviews</h2>
          <div className="gold-line" />
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {reviews.map((review, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white p-8 rounded-xl shadow-lg border border-black/5 h-[400px] flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="flex items-center mb-6">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-accent/20" 
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/loulou/images/user-placeholder.svg";
                      }}
                    />
                    <div className="flex flex-col">
                      <div className="flex items-center font-bold text-black">
                        {review.name} <VerifiedTick />
                      </div>
                      <div className="flex gap-0.5 text-[#FBBC05] mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-black/70 leading-relaxed overflow-y-auto flex-grow mb-6 pr-2 custom-scrollbar">
                    <p className="whitespace-pre-line italic">"{review.text}"</p>
                  </div>
                  
                  <a 
                    href={review.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-accent font-bold text-xs uppercase tracking-widest hover:underline transition-all"
                  >
                    <GoogleIcon /> View on Google Maps
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center items-center gap-4 bg-white px-8 py-4 rounded-full shadow-md border border-black/5">
             <div className="flex text-accent gap-1">
               <Star size={18} className="fill-current" />
               <Star size={18} className="fill-current" />
               <Star size={18} className="fill-current" />
               <Star size={18} className="fill-current" />
               <Star size={18} className="fill-current opacity-40" />
             </div>
             <span className="font-bold text-black">4.4 / 5</span>
             <span className="text-black/30 hidden sm:block">|</span>
             <span className="text-black/60 text-sm">Based on 248+ Google Reviews</span>
          </div>
          <a 
            href="https://www.google.com/maps/place/LOULOU/@30.3762546,78.0808452,17z/data=!3m1!4b1!4m6!3m5!1s0x3908d74bad12d595:0xe78a9ad7d50df487!8m2!3d30.3762546!4d78.0834201!16s%2Fg%2F11y3f0gmg9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Write A Review
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
