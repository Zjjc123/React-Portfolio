import Blog from '../components/Blog';
import Personal from '../components/Personal';
import Portfolio from '../components/Portfolio';

export default function Home() {
  return (
    <div className="bg-white text-black tracking-wide">
      <div className="flex flex-col md:flex-row my-8">
        <div className="mb-16 md:mb-0 flex-1 px-8">
          <div className="uppercase text-xl tracking-widest mb-4">About</div>
          <Personal />
        </div>
        <div className="mb-16 md:mb-0 md:flex-1 px-8">
          <div className="uppercase text-xl tracking-widest mb-4">PORTFOLIO</div>
          <Portfolio />
        </div>
        <div className="md:flex-1 px-8">
          <p className="uppercase text-xl tracking-widest mb-4">Blog</p>
          <Blog />
        </div>
      </div>
    </div>
  );
}
