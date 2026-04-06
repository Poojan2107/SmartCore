export default function Footer() {
  return (
    <footer className="bg-[var(--panel)] text-[var(--muted)] py-16 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logo.jpeg" 
                alt="SmartCore Logo" 
                className="w-10 h-10 rounded-lg shadow-sm object-cover" 
              />
              <span className="font-heading font-bold text-xl text-[var(--fg)] tracking-wide">
                SmartCore Technologies
              </span>
            </div>
            <p className="max-w-sm">
              We are an Ahmedabad-based engineering team building bespoke, high-performance management systems exclusively for individual coaching institutes.
            </p>
          </div>

          <div>
            <h4 className="text-[var(--fg)] font-bold uppercase tracking-wider text-sm mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="hover:text-[var(--color-brand-blue-light)] transition-colors">Platform</a></li>
              <li><a href="#process" className="hover:text-[var(--color-brand-blue-light)] transition-colors">Our Process</a></li>
              <li><a href="#contact" className="hover:text-[var(--color-brand-blue-light)] transition-colors">Consultation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--fg)] font-bold uppercase tracking-wider text-sm mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex flex-col space-y-2">
                <a href="mailto:poojanshrivastav21@gmail.com" className="hover:text-[var(--color-brand-blue-light)] transition-colors">poojanshrivastav21@gmail.com (Poojan)</a>
                <a href="mailto:pythond0912@gmail.com" className="hover:text-[var(--color-brand-blue-light)] transition-colors">pythond0912@gmail.com (Dhananjay)</a>
              </li>
              <li className="flex flex-col space-y-2 pt-2">
                <a href="tel:+919023362134" className="hover:text-[var(--color-brand-blue-light)] transition-colors">+91 90233 62134 (Poojan)</a>
                <a href="tel:+918000963451" className="hover:text-[var(--color-brand-blue-light)] transition-colors">+91 80009 63451 (Dhananjay)</a>
              </li>
              <li>Ahmedabad, Gujarat</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} SmartCore Technologies. Custom engineered.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--color-brand-blue-light)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--color-brand-blue-light)] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
