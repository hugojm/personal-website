import Navigation from './Navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="relative z-0 pt-[100px]"> {/* Ensure padding-top */}
        {children}
      </div>
    </div>
  );
};

export default Layout;