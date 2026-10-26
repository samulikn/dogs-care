import Basic from "./components/Basic";
import Feeding from "./components/Feeding";
import Hero from "./components/Hero";
import Label from "./components/Label";
import Walking from "./components/Walking";
import Activity from "./components/Activity";
import Social from "./components/Social";
import Addinfo from "./components/Addinfo";
import Success from "./components/Success";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const dogs = e.currentTarget;
    const formData = new FormData(dogs);

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          formData as unknown as Record<string, string>,
        ).toString(),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center gap-10 px-6 pt-8">
      <Hero />
      {status === "done" ? (
        <Success />
      ) : (
        <>
          <form
            name="dogs-questionnaire"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-12"
          >
            <input type="hidden" name="form-name" value="dogs-questionnaire" />
            <p className="hidden" aria-hidden="true">
              <label>
                Don't fill this out:{" "}
                <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>
            <p className="text-primary mb-1 text-right text-xs">* required</p>
            <fieldset className="space-y-6">
              <Label legend={"Basic info"} />
              <Basic />
            </fieldset>
            <fieldset className="space-y-6">
              <Label legend={"Feeding Habits & Diet"} />
              <Feeding />
            </fieldset>
            <fieldset className="space-y-6">
              <Label legend={"Exercise & Activity Level"} />
              <Activity />
            </fieldset>
            <fieldset className="space-y-6">
              <Label legend={"Walking Routine"} />
              <Walking />
            </fieldset>
            <fieldset className="space-y-6">
              <Label legend={"Social Behaviour"} />
              <Social />
            </fieldset>
            <fieldset className="space-y-6">
              <Label legend={"Additional Info"} />
              <Addinfo />
            </fieldset>
            <div className="py-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-primary w-full rounded-full border-2 py-5 text-lg font-extrabold text-white shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Send Questionnaire
              </button>
              {status === "error" && (
                <p className="text-error text-center">
                  Something went wrong. Try again.
                </p>
              )}
            </div>
          </form>
        </>
      )}
      <footer className="text-secondary mt-auto mb-3 text-center text-xs font-medium italic">
        All data is used exclusively for providing better care for your pup.
      </footer>
    </main>
  );
}

export default App;
