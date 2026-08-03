function Hero() {
  return (
    <section className="flex justify-center gap-4 items-cente">
      <div className="w-20 h-20 rounded-xl overflow-hidden shadow-sm shrink-0">
        <img src="../assets/marta.jpeg" alt="profile photo" className="w-full h-full" />
      </div>
      <div>
        <h1 className="font-plus-jakarta mx-auto text-3xl font-extrabold tracking-tight text-primary">
          Tell us about your pup
        </h1>
        <p className="text-secondary font-medium">Help us personalize the Kindred Paws experience.</p>
      </div>
    </section>
  );
}

export default Hero;
