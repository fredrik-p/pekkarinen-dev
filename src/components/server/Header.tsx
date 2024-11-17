import Navigation from '@/components/client/Navigation';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-10 sticky top-10 z-50">
      <Navigation />
    </header>
  );
};

export default Header;
