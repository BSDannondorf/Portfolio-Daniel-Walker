import Navi from './components/Navi.tsx';
import Profile from './components/Profile.tsx';
import FeatureSection from './components/Features.tsx';
import Experience from './components/Experience.tsx';

function App() {
  return (
    <div>
      <Navi />
      
      <div id="profile">
        <Profile />
      </div>

      <div id="experience" className="!text-[#64748B]">
        <Experience />
      </div>

      <div id="featureSection">
        <FeatureSection />
      </div>
    </div>
  );
};

export default App;
