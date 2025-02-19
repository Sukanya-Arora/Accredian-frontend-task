import React from "react";
import ReferralModal from "./ReferralModal";
import { useState } from "react";


const LandingPage = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-600 shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Accredian</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">Get Started</button>
      </nav>
      
      {/* Hero Section */}
      <header className="text-center py-16 bg-gradient-to-r from-teal-400 to-blue-600">
        <h2 className="text-4xl font-bold text-white">Let's Learn & Earn</h2>
        <p className="text-lg text-gray-200 mt-4">Get a chance to earn rewards for every friend who enrolls!</p>
        <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-md text-lg" onClick={handleOpen}>Refer Now</button>
      </header>

      {/* Benefits Section */}
      <section className="py-16 text-center bg-yellow-50">
        <h3 className="text-2xl font-semibold text-gray-800">What Are The Referral Benefits?</h3>
        <div className="flex justify-center mt-6 space-x-8">
          <div className="p-6 bg-white shadow-md rounded-md">
            <p className="font-semibold text-gray-800">Earn Rewards</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-md">
            <p className="font-semibold text-gray-800">Easy Process</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-md">
            <p className="font-semibold text-gray-800">Unlimited Referrals</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-purple-50 py-16 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">How Do I Refer?</h3>
        <div className="flex justify-center mt-6 space-x-8">
          <div className="p-6 bg-white shadow-md rounded-md">
            <p className="font-semibold text-gray-800">1. Share your referral link</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-md">
            <p className="font-semibold text-gray-800">2. Earn rewards when your friend enrolls</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 text-center bg-pink-50">
        <h3 className="text-2xl font-semibold text-gray-800">Frequently Asked Questions</h3>
        <div className="mt-6 max-w-2xl mx-auto">
          <details className="mb-4 border p-4 rounded-md bg-white shadow-sm">
            <summary className="cursor-pointer font-semibold text-gray-800">Who is eligible for referral rewards?</summary>
            <p className="mt-2 text-gray-600">Anyone who refers a new user to our program.</p>
          </details>
          <details className="mb-4 border p-4 rounded-md bg-white shadow-sm">
            <summary className="cursor-pointer font-semibold text-gray-800">How do I receive my rewards?</summary>
            <p className="mt-2 text-gray-600">Rewards are credited to your account once the referred user enrolls.</p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8 text-center">
        <p>&copy; 2025 YourBrand. All rights reserved.</p>
      </footer>
      <ReferralModal open={openModal} handleClose={handleClose} />
    </div>
  );
};

export default LandingPage;
