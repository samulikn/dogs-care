import Basic from "./components/Basic";
import Fidding from "./components/Fidding";
import Hero from "./components/Hero";
import Label from "./components/Label";
import Walking from "./components/Walking";
import Activity from "./components/Activity";
import Social from "./components/Social";
import Addinfo from "./components/Addinfo";
import { NetlifyForm, Honeypot } from "react-netlify-forms";
// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable";

function App() {
  // const handleGeneratePDF = (formData: Record<string, string>) => {
  //   const doc = new jsPDF();
  //   doc.text("Form Submission", 14, 16);
  //   autoTable(doc, {
  //     startY: 20,
  //     head: [["Field", "Value"]],
  //     body: Object.entries(formData),
  //   });
  //   return doc.output("blob");
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const dogs = e.currentTarget;
  //   const formData = new FormData(dogs);

  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: new URLSearchParams(
  //       formData as unknown as Record<string, string>,
  //     ).toString(),
  //   })
  //     .then(() => console.log("Form successfully submitted"))
  //     .catch((error) => alert(error));
  // };

  return (
    <main className="mx-auto flex max-w-2xl flex-col justify-center gap-10 px-6 pt-8">
      <Hero />
      <NetlifyForm
        name="dogs-questionnarie"
        action="/succeess"
        honeypotName="bot-field"
        className="space-y-12"
      >
        {({ success, error }) => (
          <>
            <Honeypot />
            {success && (
              <p className="text-green-600">Form submitted successfully!</p>
            )}
            {error && (
              <p className="text-red-600">
                Something went wrong, please try again.
              </p>
            )}
            {!success && (
              <>
                <fieldset className="space-y-6">
                  <Label legend={"Basic info"} />
                  <Basic />
                </fieldset>
                <fieldset className="space-y-6">
                  <Label legend={"Fidding Habits & Diet"} />
                  <Fidding />
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
                <div className="pt-4">
                  <button
                    type="submit"
                    // onClick={() => handleSubmit}
                    className="bg-primary w-full rounded-full border-2 py-5 text-lg font-extrabold text-white shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Send Questionnaire
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </NetlifyForm>
      <footer className="text-secondary my-3 text-center text-xs font-medium italic">
        All data is used exclusively for providing better care for your pup.
      </footer>
    </main>
  );
}

export default App;
