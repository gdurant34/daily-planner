import { Input } from 'libs/ui-components/src/components/ui/input';

export default async function Meals() {
  return (
    <div className="bg-green-200 h-20 flex w-full justify-center items-center">
      <div className="m-2 p-2 flex">
        <p className="p-2 text-lg">B:</p>
        <Input className="p-2" type="text" />
      </div>
      <div className="m-2 p-2 flex">
        <p className="p-2 text-lg">L:</p>
        <Input className="p-2" type="text" />
      </div>
      <div className="m-2 p-2 flex">
        <p className="p-2 text-lg">D:</p>
        <Input className="p-2" type="text" />
      </div>
      <div className="m-2 p-2 flex">
        <p className="p-2 text-lg">S:</p>
        <Input className="p-2" type="text" />
      </div>
    </div>
  );
}
