const MarqueeBanner = () => {
  const text = "NEW DROP — SS26 COLLECTION — LIMITED EDITION — FREE SHIPPING WORLDWIDE — ";

  return (
    <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-sm font-body font-semibold uppercase tracking-[0.2em] mx-0">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
