import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "libs/ui-components/src/components/ui/select";

export default async function MoodTracker() {
  return (
    <div className="flex p-4">
    <p>Mood: </p>{' '}
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="happy">Happy</SelectItem>
        <SelectItem value="angry">Angry</SelectItem>
        <SelectItem value="honored">Honored</SelectItem>
        <SelectItem value="scared">Scared</SelectItem>
        <SelectItem value="excited">Excited</SelectItem>
        <SelectItem value="sad">Sad</SelectItem>
        <SelectItem value="triggered">Triggered</SelectItem>
      </SelectContent>
    </Select>
  </div>
  );
}