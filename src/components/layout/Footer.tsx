
import { Globe2, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Tembo Utalii</h3>
            <p className="text-gray-600">
              Your feedback helps shape the future of tourism in Zanzibar.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:info@temboutalii.com" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@temboutalii.com
              </a>
              <div className="text-gray-600 flex items-center gap-2">
                <Globe2 className="h-4 w-4" />
                Zanzibar, Tanzania
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Tembo Utalii. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
