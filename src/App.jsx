import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import CreatePost from './components/CreatePost'
import Post from './components/Post'
import LeftMenu from './components/LeftMenu'
import AIAssistant from './components/AIAssistant'
import Footer from './components/Footer'

function App() {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "👨‍💻 John Doe",
      title: "The Future of AI: How Machine Learning is Transforming Our World",
      content: "Artificial Intelligence is revolutionizing every aspect of our lives. From healthcare to transportation, AI is making processes more efficient and opening new possibilities we never thought possible...",
      image: "https://source.unsplash.com/random/800x400/?artificial-intelligence",
      likes: 156,
      readTime: 5,
      tags: ["AI", "Technology", "Future", "MachineLearning"]
    },
    {
      id: 2,
      username: "👩‍🎨 Jane Smith",
      title: "Design Principles Every Developer Should Know",
      content: "Understanding basic design principles can significantly improve the user experience of your applications. Let's explore the fundamental concepts that bridge the gap between development and design...",
      image: "https://source.unsplash.com/random/800x400/?web-design",
      likes: 234,
      readTime: 7,
      tags: ["Design", "WebDev", "UX", "Programming"]
    },
    {
      id: 3,
      username: "🚀 Alex Johnson",
      title: "Getting Started with React: A Beginner's Guide",
      content: "React has become the go-to library for building modern web applications. In this comprehensive guide, we'll walk through the core concepts and best practices for starting your React journey...",
      image: "https://source.unsplash.com/random/800x400/?programming",
      likes: 189,
      readTime: 10,
      tags: ["React", "JavaScript", "WebDevelopment", "Tutorial"]
    }
  ]);

  const handleNewPost = (postData) => {
    const newPost = {
      id: posts.length + 1,
      username: "👤 Current User",
      readTime: Math.ceil(postData.content.length / 1000),
      tags: ["YourStory"],
      ...postData,
      likes: 0
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="app">
      <Navbar />
      <div className="content-wrapper">
        <LeftMenu 
          isCollapsed={isMenuCollapsed} 
          toggleMenu={() => setIsMenuCollapsed(!isMenuCollapsed)} 
        />
        <main className="main-content">
          <CreatePost onPost={handleNewPost} />
          <div className="posts-container">
            {posts.map(post => (
              <Post key={post.id} {...post} />
            ))}
          </div>
        </main>
      </div>
      <AIAssistant />
      <Footer />
    </div>
  )
}

export default App
