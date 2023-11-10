import { Label } from '../../../libs/ui-components/src/components/ui/label';
import { Checkbox } from '../../../libs/ui-components/src/components/ui/checkbox';
import { Input } from '../../../libs/ui-components/src/components/ui/input';


export default async function CheckList() {
    return(
        <div className="bg-red-200 flex h-auto p-2">
        <div className="p-2 w-full">
          <Label className="border-0 p-2">3 Priorities</Label>
          <div className="flex">
            <Checkbox className="w-5 m-2 bg-white" />
            <Input className="m-2" />
          </div>
          <div className="flex">
            <Checkbox className="w-5 m-2 bg-white" />
            <Input className="m-2" />
          </div>
          <div className="flex">
            <Checkbox className="w-5 m-2 bg-white" />
            <Input className="m-2" />
          </div>
          <div className="p-2">
            <Label className="border-0 p-2">To Do Lists</Label>
            <div className="flex">
              <Checkbox className="w-5 m-2 bg-white" />
              <Input className="m-2" />
            </div>
            <div className="flex">
              <Checkbox className="w-5 m-2 bg-white" />
              <Input className="m-2" />
            </div>
            <div className="flex">
              <Checkbox className="w-5 m-2 bg-white" />
              <Input className="m-2" />
            </div>
          </div>
          <div className="p-2">
            <Label className="border-0 p-2">Things to Get Done</Label>
            <div className="flex">
              <Checkbox className="w-5 m-2 bg-white" />
              <Input className="m-2" />
            </div>
            <div className="flex">
              <Checkbox className="w-5 m-2 bg-white" />
              <Input className="m-2" />
            </div>
            <div className="flex">
              <Checkbox className="w-5 m-2 bg-white" />
              <Input className="m-2" />
            </div>
          </div>
        </div>
      </div>
    )
}