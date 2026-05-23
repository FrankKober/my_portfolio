export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 mt-auto z-10 relative">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          © {currentYear} Frankline Kober. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
}