import { Input } from 'libs/ui-components/src/components/ui/input';

export default async function Money() {
  return (
    <div className="bg-blue-200 h-20 flex w-full justify-center items-center">
      <div className="m-2 p-2 flex">
        <p className="p-2">Money In:</p>
        <Input className="p-2" type="number" />
      </div>
      <div className="m-2 p-2 flex">
        <p className="p-2">Money Out:</p>
        <Input className="p-2" type="number" />
      </div>
      <div className="m-2 p-2 flex">
        <p className="p-2">Comments:</p>
        <Input className="p-2" type="text" />
      </div>
    </div>
  );
}
