import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button } from './components/ui/button'
import titanLogo from './assets/file_00000000155461f9ace92ddb9769bd89(1).png'

function TermsOfService() {
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
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Services Provided</h2>
            <p className="mb-4">
              Titan Cleanups provides the following services in Sacramento, California and surrounding areas:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Lawn care and yard maintenance</li>
              <li>Exterior cleaning services</li>
              <li>Junk and debris removal</li>
              <li>Seasonal yard preparation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Scheduling and Estimates</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Free estimates are provided for all services</li>
              <li>Appointments are scheduled based on availability and weather conditions</li>
              <li>We reserve the right to reschedule services due to inclement weather</li>
              <li>24-hour notice is appreciated for cancellations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Payment Terms</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Payment is due upon completion of services unless otherwise arranged</li>
              <li>We accept cash, check, and electronic payments</li>
              <li>Late payment fees may apply to overdue accounts</li>
              <li>Prices are subject to change with reasonable notice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Property Access and Safety</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Customer must provide safe access to work areas</li>
              <li>Customer is responsible for marking sprinkler systems, utilities, and fragile items</li>
              <li>Pets should be secured during service visits</li>
              <li>We are not responsible for damage to unmarked items or utilities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Liability and Insurance</h2>
            <p className="mb-4">
              Titan Cleanups carries general liability insurance. Our liability is limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Direct damages caused by our negligence</li>
              <li>Maximum liability not to exceed the cost of services provided</li>
              <li>Claims must be reported within 48 hours of service completion</li>
              <li>We are not liable for pre-existing conditions or normal wear and tear</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Service Guarantee</h2>
            <p className="mb-4">
              We stand behind our work and will address any legitimate concerns about service quality. 
              Customer satisfaction is our priority, and we will work to resolve any issues promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Cancellation Policy</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Services may be cancelled with 24-hour notice without penalty</li>
              <li>Same-day cancellations may incur a service charge</li>
              <li>Recurring services may be cancelled with one week notice</li>
              <li>Weather-related cancellations will be rescheduled at no charge</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Dispute Resolution</h2>
            <p className="mb-4">
              Any disputes arising from these terms or our services will be resolved through:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Good faith negotiation between parties</li>
              <li>Mediation if direct negotiation fails</li>
              <li>Binding arbitration under California law if necessary</li>
              <li>Jurisdiction in Sacramento County, California</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms of Service or to report service issues:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p><strong>Titan Cleanups</strong></p>
              <p>Email: ryan@titancleanups.com</p>
              <p>Phone: (916) 269-3491</p>
              <p>Service Area: Sacramento, CA and surrounding areas</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to Terms</h2>
            <p>
              These terms may be updated from time to time. Continued use of our services 
              constitutes acceptance of any changes. We will notify customers of significant 
              changes via email or our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService

