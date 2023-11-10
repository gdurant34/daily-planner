import { SvgIcon } from '@mui/material';
import LocalDrinkOutlinedIcon from '@mui/icons-material/LocalDrinkOutlined';


export default async function WaterTracker() {
  return (
    <div className="flex p-4">
    <p>Water: </p>
    {Array.from({ length: 8 }).map((_, index) => (
      <SvgIcon key={index} className="">
        <LocalDrinkOutlinedIcon fontSize="large" />
      </SvgIcon>
    ))}
  </div>
  );
}