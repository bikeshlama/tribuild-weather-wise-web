
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Submitted",
        description: "Thank you for contacting us. We'll get back to you shortly!",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  useEffect(() => {
    // Simulate map loading
    setTimeout(() => {
      setMapLoaded(true);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-tribuild-dark text-white py-16">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              We're here to help with all your heating, cooling, and waterproofing needs
            </p>
          </div>
        </section>

        {/* Contact Info & Form Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                <Card className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-tribuild-maroon/10 rounded-full p-3 mr-4">
                        <Phone className="h-6 w-6 text-tribuild-maroon" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Phone</h3>
                        <p className="text-gray-600 mb-1">Main Office: <a href="tel:1234567890" className="text-tribuild-maroon hover:underline">(123) 456-7890</a></p>
                        <p className="text-gray-600">Emergency: <a href="tel:1234567890" className="text-tribuild-maroon hover:underline">(123) 456-7890</a></p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-tribuild-maroon/10 rounded-full p-3 mr-4">
                        <Mail className="h-6 w-6 text-tribuild-maroon" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Email</h3>
                        <p className="text-gray-600 mb-1">General Inquiries: <a href="mailto:info@tribuild.com" className="text-tribuild-maroon hover:underline">info@tribuild.com</a></p>
                        <p className="text-gray-600">Customer Support: <a href="mailto:support@tribuild.com" className="text-tribuild-maroon hover:underline">support@tribuild.com</a></p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-tribuild-maroon/10 rounded-full p-3 mr-4">
                        <MapPin className="h-6 w-6 text-tribuild-maroon" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Office Location</h3>
                        <p className="text-gray-600 mb-1">123 Construction Avenue</p>
                        <p className="text-gray-600">Building City, BC 12345</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-tribuild-maroon/10 rounded-full p-3 mr-4">
                        <Clock className="h-6 w-6 text-tribuild-maroon" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Business Hours</h3>
                        <p className="text-gray-600 mb-1">Monday to Friday: 8AM - 6PM</p>
                        <p className="text-gray-600 mb-1">Saturday: 9AM - 4PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                        <p className="text-tribuild-maroon font-medium mt-2">24/7 Emergency Service Available</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="card-shadow h-full">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="(123) 456-7890"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="service">Service Needed</Label>
                          <Select value={formData.service} onValueChange={handleSelectChange} required>
                            <SelectTrigger id="service">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="heating">Heating</SelectItem>
                              <SelectItem value="cooling">Cooling</SelectItem>
                              <SelectItem value="basement-waterproofing">Basement Waterproofing</SelectItem>
                              <SelectItem value="foundation-repair">Foundation Repair</SelectItem>
                              <SelectItem value="maintenance">Maintenance</SelectItem>
                              <SelectItem value="emergency">Emergency Service</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project or questions..."
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="bg-tribuild-maroon hover:bg-tribuild-maroonLight"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-16">
          <div className="container-custom">
            <div className="card-shadow rounded-lg overflow-hidden">
              <div className="relative bg-gray-200 h-[400px] w-full">
                {mapLoaded ? (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.2891622856186!2d-122.3550843!3d47.6205123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490151f4ed5b7f9%3A0xdb2ba8689ed0920d!2sSpace%20Needle!5m2!1s0x0%3A0x0!7m2!1s0x0%3A0x0!8m2!3d47.6205063!4d-122.3493!16s%2Fg%2F11bw_flgkn"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-solid border-tribuild-gold border-t-transparent"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto">Areas We Serve</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Providing quality heating, cooling, and waterproofing services to the following locations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Seattle</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Downtown</li>
                    <li>Capitol Hill</li>
                    <li>Ballard</li>
                    <li>Queen Anne</li>
                    <li>Fremont</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Eastside</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Bellevue</li>
                    <li>Redmond</li>
                    <li>Kirkland</li>
                    <li>Sammamish</li>
                    <li>Issaquah</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">North End</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Shoreline</li>
                    <li>Edmonds</li>
                    <li>Lynnwood</li>
                    <li>Mountlake Terrace</li>
                    <li>Bothell</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">South End</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Renton</li>
                    <li>Kent</li>
                    <li>Auburn</li>
                    <li>Federal Way</li>
                    <li>Burien</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8 text-gray-600">
              <p>Don't see your area listed? Give us a call - we may still be able to help!</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
