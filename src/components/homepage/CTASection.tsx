
import QuoteForm from "@/components/QuoteForm";

const CTASection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Get a Free Consultation Today</h2>
            <p className="text-lg text-gray-600 mb-6">
              Protect your property with TriBuild Water Proofing Company. Contact us today for a 
              consultation on your waterproofing needs.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-tribuild-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Free inspection and estimate</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-tribuild-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Detailed, transparent pricing</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-tribuild-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Customized solutions for your specific needs</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-tribuild-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Experienced, certified technicians</span>
              </li>
            </ul>
            <div className="bg-tribuild-maroon/10 rounded-lg p-4 flex items-start mb-6">
              <svg className="h-6 w-6 text-tribuild-maroon mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm">
                <span className="font-semibold">Contact Us Today:</span> For inquiries or to schedule a consultation, call 
                <a href="tel:8113023156" className="text-tribuild-maroon font-semibold"> +91 8113023156</a> or email us at 
                <a href="mailto:tribuildmvg@gmail.com" className="text-tribuild-maroon font-semibold"> tribuildmvg@gmail.com</a>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold mb-2">Cochin Office</h3>
                <p className="text-sm text-gray-600">
                  Densons Building, 2nd Floor - 1/676, Marottichuvadu Jn, Edappally Toll, Eranakulam, Cochin - 682024
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold mb-2">Kannur Office</h3>
                <p className="text-sm text-gray-600">
                  Thana, Kannur
                </p>
              </div>
            </div>
          </div>
          <div>
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
