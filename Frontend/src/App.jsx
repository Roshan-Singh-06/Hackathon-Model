import React, { useState } from 'react';
import ThemeProvider from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUpModal from './components/SignUpModal';
import LoginModal from './components/LoginModal';
import HeroSection from './components/HeroSection';


const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleOpenSignUpModal = () => {
    setShowLoginModal(false);
    setShowSignUpModal(true);
  };

  const handleCloseSignUpModal = () => {
    setShowSignUpModal(false);
  };

  const handleOpenLoginModal = () => {
    setShowSignUpModal(false);
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleSwitchToLogin = () => {
    handleCloseSignUpModal();
    handleOpenLoginModal();
  };

  const handleSwitchToSignUp = () => {
    handleCloseLoginModal();
    handleOpenSignUpModal();
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroSection />
            <section className="container mx-auto px-4 py-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">Our Core Features</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Discover the powerful capabilities that make our product stand out.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Feature One</h3>
                  <p className="text-gray-700 dark:text-gray-300">Detailed description of feature one, highlighting its benefits and impact.</p>
                </div>
                <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Feature Two</h3>
                  <p className="text-gray-700 dark:text-gray-300">Detailed description of feature two, highlighting its benefits and impact.</p>
                </div>
                <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Feature Three</h3>
                  <p className="text-gray-700 dark:text-gray-300">Detailed description of feature three, highlighting its benefits and impact.</p>
                </div>
              </div>
            </section>
          </>
        );
      case 'about':
        return <AboutUsSection />;
      default:
        return (
          <>
            <HeroSection />
            <section className="container mx-auto px-4 py-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">Our Core Features</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Discover the powerful capabilities that make our product stand out.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Feature One</h3>
                  <p className="text-gray-700 dark:text-gray-300">Detailed description of feature one, highlighting its benefits and impact.</p>
                </div>
                <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Feature Two</h3>
                  <p className="text-700 dark:text-gray-300">Detailed description of feature two, highlighting its benefits and impact.</p>
                </div>
                <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Feature Three</h3>
                  <p className="text-gray-700 dark:text-gray-300">Detailed description of feature three, highlighting its benefits and impact.</p>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 ease-in-out font-inter">
        <Navbar
          onNavigate={setCurrentPage}
          onOpenSignUpModal={handleOpenSignUpModal}
          onOpenLoginModal={handleOpenLoginModal}
        />
        <main>
          {renderPageContent()}
        </main>
        <Footer />

        <SignUpModal
          isOpen={showSignUpModal}
          onClose={handleCloseSignUpModal}
          onSwitchToLogin={handleSwitchToLogin}
        />
        <LoginModal
          isOpen={showLoginModal}
          onClose={handleCloseLoginModal}
          onSwitchToSignUp={handleSwitchToSignUp}
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
