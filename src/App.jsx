import Header from './components/Header.jsx';
import { ViewerProvider } from './components/ViewerContext.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Services from './sections/Services.jsx';
import SelectedWork from './sections/SelectedWork.jsx';
import LatestWork from './sections/LatestWork.jsx';
import Portfolio from './sections/Portfolio.jsx';
import Videos from './sections/Videos.jsx';
import Experience from './sections/Experience.jsx';
import Skills from './sections/Skills.jsx';
import Contact from './sections/Contact.jsx';
import Icon from './components/Icon.jsx';
import { featured, archive, videos } from './lib/media.js';
import { profile } from './data/profile.js';

export default function App() {
  // Sections with no content are hidden automatically (Latest Work always shows).
  const nav = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    featured.length && { id: 'work', label: 'Selected' },
    { id: 'latest', label: 'Latest' },
    archive.length && { id: 'portfolio', label: 'Portfolio' },
    videos.length && { id: 'video', label: 'Video' },
    { id: 'experience', label: 'Experience' },
  ].filter(Boolean);

  return (
    <ViewerProvider>
      <a className="skip" href="#main">Skip to content</a>
      <Header links={nav} />
      <main id="main">
        <Hero />
        <About />
        <Services />
        {featured.length > 0 && <SelectedWork />}
        <LatestWork />
        {archive.length > 0 && <Portfolio />}
        {videos.length > 0 && <Videos />}
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="footer theme-dark">
        <div className="container footer__bar">
          <p>&copy; {new Date().getFullYear()} {profile.name} ({profile.alias}) · {profile.title}, Karachi</p>
          <a className="link-quiet" href="#top"><Icon name="up" size={16} /> Back to top</a>
        </div>
      </footer>
    </ViewerProvider>
  );
}
