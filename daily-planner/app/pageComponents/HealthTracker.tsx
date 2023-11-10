import { Label } from "libs/ui-components/src/components/ui/label";
import { Textarea } from "libs/ui-components/src/components/ui/textarea";

export default async function HealthTracker() {
  return (
    <div className="flex justify-center items-center p-2 bg-violet-300">
    <div className="flex w-full">
      <div className="flex w-full p-2">
        <Label>Exercise & Health:</Label>
        <Textarea
          placeholder="Type your message here."
          id="message"
        />{' '}
      </div>
      <div className="flex w-full p-2">
        <Label>Total Steps:</Label>
        <Textarea
          placeholder="Type your message here."
          id="message"
        />{' '}
      </div>
    </div>
    <div className="flex w-full">
      <div className="flex w-full p-2">
        <Label className="p-2">Notes:</Label>
        <Textarea
          placeholder="Type your message here."
          id="message"
        />{' '}
      </div>
    </div>
  </div>
  );
}