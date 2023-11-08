'use client';

import React, { useState } from 'react';

import { DatePicker } from '../../libs/ui-components/src/components/ui/datePicker';
import { Input } from '../../libs/ui-components/src/components/ui/input';
import LocalDrinkOutlinedIcon from '@mui/icons-material/LocalDrinkOutlined';
import { SvgIcon } from '@mui/material';
import { 
  Select, 
  SelectTrigger, 
  SelectValue, 
  SelectContent, 
  SelectItem 
} from '../../libs/ui-components/src/components/ui/select';

export default async function Index() {
  // const [iconStates, setIconStates] = useState(Array(8).fill(false));

  // const handleIconClick = (index: any) => {
  //   const newIconStates = [...iconStates];
  //   newIconStates[index] = !newIconStates[index];
  //   setIconStates(newIconStates);
  // };

  return (
    <div className="h-full">
      <div className=" bg-muted h-32 justify-center items-center flex flex-row gap-2">
        <h5 className=" font-extrabold text-6xl p-8 italic">Day of the week</h5>
        <DatePicker />
      </div>
      <div className="bg-red-200 h-48">
        <p className=" bg-muted justify-center items-center flex flex-row gap-2"></p>
      </div>
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
      <div className="">
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
        <div className="flex justify-center items-center p-2">
          <div className="flex p-4">
            <p>Water: </p>
            {Array.from({ length: 8 }).map((_, index) => (
              <SvgIcon
                key={index}
                className=""
                // onClick={() => handleIconClick(index)}
              >
                <LocalDrinkOutlinedIcon fontSize="large" />
              </SvgIcon>
            ))}
          </div>
          <div className="flex p-4">
            <p>Mood: </p>
            {' '}
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
        </div>
      </div>
    </div>
  );
}
