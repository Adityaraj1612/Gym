import React from 'react';

const plans = [
  {
    title: 'Basic Plan',
    subtitle: 'Perfect for Beginners',
    price: '₹999/month',
    features: [
      'Full Gym Access (6 AM – 12 PM)',
      'Free Introductory Fitness Consultation',
      'Personalized Diet Plan',
      'Access to Fitness App',
    ],
  },
  {
    title: 'Standard Plan',
    subtitle: 'Perfect for Beginners',
    price: '₹999/month',
    features: [
      'Full Gym Access (6 AM – 12 PM)',
      'Free Introductory Fitness Consultation',
      'Personalized Diet Plan',
      'Access to Fitness App',
    ],
  },
  {
    title: 'Premium Plan',
    subtitle: 'Perfect for Beginners',
    price: '₹999/month',
    features: [
      'Full Gym Access (6 AM – 12 PM)',
      'Free Introductory Fitness Consultation',
      'Personalized Diet Plan',
      'Access to Fitness App',
    ],
  },
];

const MembershipPlans = () => {
  return (
    <section
      id="membership"
      className="py-16 text-white text-center"
      style={{
        background: 'radial-gradient(33.92% 54.78% at 48.32% 50.08%, #28281C 13.46%, #11151D 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold italic mb-4">MEMBERSHIP PLANS</h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Flexible, Transparent, And Designed For Every Fitness Level. Whether You’re Just Starting Or Leveling Up, We’ve Got A Plan That Fits.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border border-gray-500 rounded-xl p-6 text-left backdrop-blur-sm bg-white/5 hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-1">{plan.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{plan.subtitle}</p>
              <p className="text-lg font-semibold mb-4">
                Price: <span className="text-white">{plan.price}</span>
              </p>
              <p className="mb-4 text-sm text-gray-300">
                Start your fitness journey with guided support.
              </p>
              <ul className="space-y-2 text-sm text-gray-200">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>✔ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;
