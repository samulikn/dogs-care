import ProfilePhoto from "../assets/marta.webp";
function Hero() {
  return (
    <section className="items-cente flex justify-center gap-4">
      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl shadow-sm">
        <img src={ProfilePhoto} alt="profile photo" className="h-full w-full" />
      </div>
      <div>
        <h1 className="font-plus-jakarta text-primary mx-auto text-3xl font-extrabold tracking-tight">
          Tell us about your pup
        </h1>
        <p className="text-secondary font-medium">
          Help us personalize the Kindred Paws experience.
        </p>
      </div>
    </section>
  );
}

export default Hero;
