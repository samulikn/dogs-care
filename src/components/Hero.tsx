import ProfilePhoto from "../assets/logo.svg?react";

function Hero() {
  return (
    <section className="flex items-center justify-center gap-4">
      {/* <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full shadow-sm">
        <img src={ProfilePhoto} alt="profile photo" className="h-full w-full" />
      </div> */}
      <ProfilePhoto className="fill-primary h-20 w-20 shrink-0 rounded-full shadow-sm"/>
      <div>
        <h1 className="font-plus-jakarta text-primary mx-auto text-3xl font-extrabold tracking-tight">
          Tell us about your pup
        </h1>
        <p className="text-secondary font-medium">
          Help us make your dog feel at home.
        </p>
      </div>
    </section>
  );
}

export default Hero;
