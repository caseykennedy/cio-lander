import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-0 z-30 w-full px-4 py-8 md:px-8 lg:py-12">
      <div className="container mx-auto flex h-[87px] flex-row items-center justify-between rounded-[10px] bg-white/10 backdrop-blur-[10px]">
        <div
          className="text-base leading-tight"
          aria-label="Customer.io Lander Logo"
        >
          <Logo />
          <span className="hidden">customer.io</span>
        </div>
        <nav>
          <a href="#">Journeys</a>
          <a href="#">Data Pipelines</a>
        </nav>
        <div>Request Demo</div>
      </div>
    </header>
  );
}
