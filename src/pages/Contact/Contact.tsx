import { Mail, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { InstagramLogoIcon } from '@radix-ui/react-icons';
import {useNavigate} from "react-router-dom";
const Contact = () => {
  const router = useNavigate() // Get the router instance

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600">We'd love to hear from you. Connect with us through any of these channels.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between group"
              >
                <div className="flex items-center">
                  <InstagramLogoIcon className="h-10 w-10 text-pink-500 mr-4" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Instagram</h2>
                    <p className="text-gray-600">Follow us for updates and communication through DM</p>
                  </div>
                </div>
                <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-pink-500 transition-colors" />
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center justify-between group"
              >
                <div className="flex items-center">
                  <Mail className="h-10 w-10 text-blue-500 mr-4" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Email</h2>
                    <p className="text-gray-600">Send us a message</p>
                  </div>
                </div>
                <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">We typically respond within 24 hours</p>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => router("/")} // Use the router to navigate
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
