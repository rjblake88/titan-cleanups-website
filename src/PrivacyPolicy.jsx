import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button } from './components/ui/button'
import titanLogo from './assets/file_00000000155461f9ace92ddb9769bd89(1).png'

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img src={titanLogo} alt="Titan Cleanups" className="h-10 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-white">Titan Cleanups</h1>
                <p className="text-xs text-gray-400">Sacramento's Trusted Team</p>
              </div>
            </div>
            <Button 
              onClick={() => window.history.back()}
              variant="outline" 
              className="border-white/20 text-gray-300 hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              When you use our services or contact us through our website, we may collect the following information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Personal information such as your name, phone number, and email address</li>
              <li>Service address and property details</li>
              <li>Communication preferences and service requests</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide lawn care, exterior cleaning, and junk removal services</li>
              <li>Schedule appointments and communicate about services</li>
              <li>Process payments and maintain service records</li>
              <li>Send service reminders and updates</li>
              <li>Improve our services and customer experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>With service providers who assist in our operations (payment processing, scheduling software)</li>
              <li>When required by law or to protect our rights and safety</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. California Privacy Rights (CCPA)</h2>
            <p className="mb-4">
              As a California resident, you have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Know what personal information we collect and how it's used</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of the sale of personal information (we do not sell personal information)</li>
              <li>Non-discrimination for exercising your privacy rights</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at ryan@titancleanups.com or (916) 269-3491.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Contact Information</h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p><strong>Titan Cleanups</strong></p>
              <p>Email: ryan@titancleanups.com</p>
              <p>Phone: (916) 269-3491</p>
              <p>Service Area: Sacramento, CA and surrounding areas</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy

