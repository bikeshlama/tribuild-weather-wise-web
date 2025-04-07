
import TestimonialCard from "@/components/TestimonialCard";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "TriBuild's basement waterproofing service saved our property from persistent water damage. Their team was professional, efficient, and the results have been outstanding!",
      author: "Rajan Kumar",
      location: "Cochin",
      rating: 5
    },
    {
      quote: "We hired TriBuild for our commercial building's waterproofing needs. Their expertise and quality products made all the difference. No more leaks even during monsoon season!",
      author: "Anjali Menon",
      location: "Kannur",
      rating: 5
    },
    {
      quote: "The heat reflective coating TriBuild applied on our roof has significantly reduced our cooling costs. Their team was knowledgeable and the application was done perfectly.",
      author: "Thomas Philip",
      location: "Ernakulam",
      rating: 4
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - see what our satisfied customers have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
