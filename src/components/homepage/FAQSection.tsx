
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What waterproofing services do you offer?",
      answer: "We offer comprehensive waterproofing services for residential, commercial, and industrial properties, including terrace waterproofing, basement waterproofing, bathroom waterproofing, external wall waterproofing, water tank waterproofing, and custom solutions for specific needs.",
    },
    {
      question: "How long does your waterproofing treatment last?",
      answer: "Our premium waterproofing solutions typically last between 5 to 10 years depending on the product used, the surface treated, and environmental conditions. We offer warranties on our work to ensure your satisfaction and peace of mind.",
    },
    {
      question: "Do you provide free inspections and quotations?",
      answer: "Yes, we provide free on-site inspections to assess your waterproofing needs and provide detailed quotations. Our experts will visit your property, identify the issues, and recommend the most effective solutions tailored to your specific requirements.",
    },
    {
      question: "How long does a typical waterproofing project take?",
      answer: "The duration of a waterproofing project depends on factors such as the area size, the extent of water damage, and the type of treatment required. Small projects may be completed in 1-2 days, while larger projects may take up to a week. We'll provide you with a timeline during our initial assessment.",
    },
    {
      question: "Can waterproofing be done during the rainy season?",
      answer: "While it's generally best to perform waterproofing during dry weather, we do offer specialized solutions that can be applied during the rainy season for emergency situations. However, for optimal results and longer-lasting protection, we recommend scheduling waterproofing work during dry weather whenever possible.",
    },
    {
      question: "What areas do you service in Kerala?",
      answer: "We primarily operate in Cochin and Kannur, but our services extend to surrounding areas throughout Kerala. Contact us with your location, and we'll be happy to confirm if we service your area.",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto dark:text-white">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our waterproofing services and products
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 dark:border-gray-700">
                <AccordionTrigger className="text-left font-semibold py-4 hover:no-underline text-tribuild-dark dark:text-white transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300 pb-4 transition-colors duration-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
