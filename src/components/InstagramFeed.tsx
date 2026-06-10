"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import InstagramIcon from './icons/Instagram';

interface InstagramData {
  profile: {
    username: string;
    full_name: string;
    biography: string;
    followers: string;
    following: string;
    posts_count: string;
    profile_pic_url?: string;
  };
  latest_posts: Array<{
    url: string;
    shortcode: string;
    display_url: string;
    caption?: string;
    local_image?: string;
  }>;
}

const InstagramFeed = () => {
  const [instaData, setInstaData] = useState<InstagramData | null>(null);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  
  useEffect(() => {
    fetch('/loulou/insta-data/insta.json')
      .then(res => res.json())
      .then(data => {
        const updatedPosts = data.latest_posts.map((post: any, index: number) => {
          let localPath = post.display_url || `/images/insta/post_${index + 1}_${post.shortcode}.jpg`;
          
          // Prefix with /loulou if it's a relative path
          if (localPath.startsWith('/images/')) {
            localPath = `/loulou${localPath}`;
          }
          
          return {
            ...post,
            local_image: localPath
          };
        });
        setInstaData({ ...data, latest_posts: updatedPosts });
      })
      .catch(err => console.error("Could not load Instagram data:", err));
  }, []);

  const profile = {
    username: instaData?.profile?.username || "loulou_bypiccolo",
    full_name: instaData?.profile?.full_name || "LOULOU by Piccolo",
    posts: instaData?.profile?.posts_count || "199",
    followers: instaData?.profile?.followers || "2,866",
    following: instaData?.profile?.following || "3",
    bio: instaData?.profile?.biography || "Khasra no 355/2, rajpur road near sai mandir kishanpur, Dehra Dun, India 248009",
    profile_pic: instaData?.profile?.profile_pic_url && instaData.profile.profile_pic_url.startsWith('/images/') 
      ? `/loulou${instaData.profile.profile_pic_url}` 
      : "/loulou/images/insta/profile_pic.jpg"
  };

  const displayPosts = (instaData?.latest_posts || []).slice(0, 6);

  return (
    <section id="instagram" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="section-title">Social Circle</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">Instagram Feed</h2>
          <div className="gold-line" />
        </div>

        {/* Profile Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-secondary/30 border border-black/5 p-6 md:p-10 mb-12 rounded-sm relative group"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="relative shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-accent p-1 bg-white">
                <img src={profile.profile_pic} alt={profile.username} className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-accent text-black p-1.5 rounded-full shadow-lg">
                <InstagramIcon size={16} />
              </div>
            </div>
            
            <div className="flex-grow text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tighter italic">@{profile.username}</h3>
                <div className="flex gap-3">
                  <a 
                    href={`https://www.instagram.com/${profile.username}/`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-primary !py-1.5 !px-6 text-[10px]"
                  >
                    Follow
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center md:justify-start gap-8 mb-4 border-y border-black/5 py-3">
                <div className="text-center"><span className="block font-black text-lg text-black leading-none">{profile.posts}</span> <span className="text-[8px] uppercase tracking-widest text-black/40 font-bold">Posts</span></div>
                <div className="text-center"><span className="block font-black text-lg text-black leading-none">{profile.followers}</span> <span className="text-[8px] uppercase tracking-widest text-black/40 font-bold">Followers</span></div>
                <div className="text-center"><span className="block font-black text-lg text-black leading-none">{profile.following}</span> <span className="text-[8px] uppercase tracking-widest text-black/40 font-bold">Following</span></div>
              </div>
              
              <div className="max-w-xl mx-auto md:mx-0">
                <p className="font-bold text-sm mb-1 text-black">{profile.full_name}</p>
                <p className="text-black/60 text-xs leading-relaxed italic line-clamp-2">
                  "{profile.bio}"
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Posts Grid */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-4xl mx-auto">
          {displayPosts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
              onClick={() => setSelectedPost(post)}
            >
              <img 
                src={post.local_image} 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                onError={(e) => {
                  // Fallback to external URL if local one fails
                  if (post.url) {
                     // We can't easily get the direct image URL from the post URL without a proxy,
                     // so we just show the placeholder or keep the broken image for now, 
                     // but at least we try to fix the src.
                     (e.target as HTMLImageElement).src = "/loulou/images/user-placeholder.svg";
                  }
                }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-white">
                <InstagramIcon size={20} className="opacity-70" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <a 
            href={`https://www.instagram.com/${profile.username}/`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 group"
           >
              <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all duration-500">
                <InstagramIcon size={16} className="text-black/20 group-hover:text-accent transition-colors duration-500" />
              </div>
              <p className="text-black/40 text-[10px] uppercase tracking-[0.2em] font-bold group-hover:text-black transition-colors duration-500">
                View Gallery on Instagram
              </p>
           </a>
        </div>
      </div>

      {/* Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="bg-white max-w-6xl w-full flex flex-col md:flex-row overflow-hidden shadow-2xl rounded-sm max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image side */}
              <div className="md:w-3/5 bg-[#050505] flex items-center justify-center relative group">
                <img 
                  src={selectedPost.local_image} 
                  alt="Full post" 
                  className="max-w-full max-h-full object-contain" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/loulou/images/user-placeholder.svg";
                  }}
                />
              </div>

              {/* Content side */}
              <div className="md:w-2/5 flex flex-col h-full bg-white relative">
                {/* Header */}
                <div className="p-6 border-b border-black/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-black/10">
                      <img src={profile.profile_pic} alt={profile.username} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-black text-sm text-black tracking-tight uppercase tracking-widest">{profile.username}</p>
                      <p className="text-[10px] text-accent font-bold uppercase tracking-widest">Dehradun, India</p>
                    </div>
                  </div>
                  <a href={selectedPost.url} target="_blank" rel="noopener noreferrer" className="text-black/20 hover:text-accent transition-colors">
                    <InstagramIcon size={18} />
                  </a>
                </div>

                {/* Caption */}
                <div className="p-8 flex-grow overflow-y-auto custom-scrollbar">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-black/10 shrink-0">
                      <img src={profile.profile_pic} alt={profile.username} className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-4">
                      <p className="text-sm text-black leading-relaxed">
                        <span className="font-black mr-2 uppercase tracking-tighter">{profile.username}</span>
                        {selectedPost.caption || "Step into a world of elegance and authentic Pan-Asian flavors. #loulou #dehradun #finedining"}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['#loulou', '#finedining', '#panasian', '#dehradun', '#umami'].map(tag => (
                          <span key={tag} className="text-[10px] text-accent font-bold uppercase tracking-widest hover:underline cursor-pointer">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-8 border-t border-black/5 bg-secondary/20 mt-auto">
                   <a 
                    href={selectedPost.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center py-4 text-[10px] tracking-[0.2em]"
                   >
                     View Original Post
                   </a>
                   <p className="text-[10px] text-black/20 uppercase tracking-[0.2em] text-center mt-6 font-bold">
                     {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                   </p>
                </div>
              </div>
              
              {/* Close button */}
              <button 
                className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-accent transition-all duration-300 z-[110] bg-black/20 hover:bg-black/40 p-2 rounded-full"
                onClick={() => setSelectedPost(null)}
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InstagramFeed;
