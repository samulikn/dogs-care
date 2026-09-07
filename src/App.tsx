import Basic from "./components/Basic";
import Fidding from "./components/Fidding";
import Hero from "./components/Hero";
import Label from "./components/Label";
import Walking from "./components/Walking";
import Activity from "./components/Activity";
import Social from "./components/Social";
import Addinfo from "./components/Addinfo";

function App() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col justify-center gap-10 px-6 pt-8">
      <Hero />
      <form action="submit" className="space-y-12">
        <fieldset className="space-y-6">
          <Label legend={"Basic info"} />
          <Basic />
        </fieldset>
        <fieldset className="space-y-6">
          <Label legend={"Fidding"} />
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
      </form>
    </main>
  );
}

export default App;
