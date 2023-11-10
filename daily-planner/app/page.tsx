'use client';

import React, { useState } from 'react';

import { DatePicker } from '../../libs/ui-components/src/components/ui/datePicker';
import CheckList from './pageComponents/CheckList';
import Money from './pageComponents/Money';
import Meals from './pageComponents/Meals';
import WaterTracker from './pageComponents/WaterTracker';
import MoodTracker from './pageComponents/MoodTracker';
import HealthTracker from './pageComponents/HealthTracker';

export default async function Index() {
  return (
    <div className="h-full">
      <div className=" bg-muted h-32 justify-center items-center flex flex-row gap-2">
        <h5 className=" font-extrabold text-6xl p-8 italic">Day of the week</h5>
        <DatePicker />
      </div>
      <CheckList />
      <Money />
      <div className="">
        <Meals />
        <div className="flex justify-center items-center p-2 bg-yellow-200">
          <WaterTracker />
          <MoodTracker />
        </div>
        <HealthTracker />
      </div>
    </div>
  );
}
